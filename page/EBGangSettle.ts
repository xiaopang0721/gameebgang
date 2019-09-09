/**
* 二八杠-结算页面
*/
module gameebgang.page {
    export class EBGangSettle extends game.gui.base.Page {
        private _viewUI: ui.game_ui.ebgang.JieSuanUI;
        private _isGameEnd: boolean = false;  //是否结束
        private _ebgStory: EbgangStory;
        private _ebgMgr: EBGangMgr;

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedBlack = true;
            this._isClickBlack = true;
            this._asset = [
                PathGameTongyong.atlas_game_ui_tongyong+ "general.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.ebgang.JieSuanUI');
            this.addChild(this._viewUI);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            this._viewUI.list_settle.vScrollBarSkin = "";
            this._viewUI.list_settle.scrollBar.elasticDistance = 100;
            this._viewUI.list_settle.itemRender = this.createChildren("game_ui.tongyong.JieSuanRenderUI", ListRecordItem);
            this._viewUI.list_settle.renderHandler = new Handler(this, this.renderHandler);
            this._viewUI.list_settle.dataSource = this.dataSource[3];
            this._isGameEnd = this.dataSource[0] + 1 == this.dataSource[4];
            this.setGameEndBtnState(this._isGameEnd);
            this._ebgStory = this._game.sceneObjectMgr.story as EbgangStory;
            this._ebgMgr = this._ebgStory.ebgMgr;
        }

        // 设置最后结束时的按纽状态
        private setGameEndBtnState(isEventOn) {
            this._viewUI.lab_xinxi.visible = !this._isGameEnd;
            this._viewUI.btn_continue.visible = false;
            // this._viewUI.btn_continue.visible = this._isGameEnd;
            // let state = this._game.sceneObjectMgr.mapInfo.GetMapState();
            // if (isEventOn) {
            //     this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            // } else {
            //     this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
            // }
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_continue:
                    if (this._ebgMgr) {
                        this._ebgMgr.event(EBGangMgr.CONTINUE_GAME);
                        // this._game.sceneObjectMgr.changeStory(EbgangPageDef.GAME_NAME, this._game.sceneObjectMgr.story.maplv.toString(), false);
                    }
                    this.close();
                    break;
                default:
                    break;
            }
        }

        protected onBlackSpriteClick() {
            if (!this._isGameEnd) return;
            super.onBlackSpriteClick();
        }

        private renderHandler(cell: ListRecordItem, index: number) {
            if (cell) {
                cell.setData(this._game, cell.dataSource);
            }
        }

        //倒计时
        private _endTime = this._game.sync.serverTimeBys + 5;
        deltaUpdate(): void {
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._endTime - curTime) + 1;
            if (time > 0) {
                let str = this.dataSource[1] ? "有玩家余额不足，本轮游戏结束" : time + "S后开始第" + (this.dataSource[0] + 2) + "局，本轮共" + this.dataSource[4] + "局";
                this._viewUI.lab_xinxi.text = str;
            } else {
                this._isClickBlack = true;
                // 最后一局不自动关闭
                if (!this._isGameEnd)
                    this.close();
            }
        }

        public close(): void {
            this.setGameEndBtnState(false);
            super.close();
        }
    }

    class ListRecordItem extends ui.nqp.game_ui.tongyong.JieSuanRenderUI {
        private _game: Game;
        private _data: any;
        setData(game: Game, data: any) {
            this._game = game;
            this._data = data;
            this.img_bg.visible = this._data.isMain;
            this.img_banker.visible = this._data.isbanker;
            this.lab_name.text = this._data.name;
            this.lab_point.text = this._data.point;
            this.lab_multiple.text = String(this._data.betmultiple);
            this.lab_money.text = this._data.money;
            // this.lab_bankermultiple.text = this._data.isbanker ? this._data.bankermultiple : "0";
            // this.lab_cardtype.text = this._data.cardtype;
            this.lab_name.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_point.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_multiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            this.lab_money.color = parseFloat(this._data.money) >= 0 ? "#069e00" : "#ff0000";
            // this.lab_bankermultiple.color = this._data.isMain ? "#cc90ff" : "#ffffff";
            // this.lab_cardtype.color = this._data.isMain ? "#cc90ff" : "#ffffff";
        }

        destroy() {
            super.destroy();
        }
    }
}