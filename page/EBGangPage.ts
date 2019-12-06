/**
* 二八杠HUD
*/
module gameebgang.page {
	export class EBGangPage extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.ebgang.EBGang_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _ebgMgr: EBGangMgr;
		private _difenClipList: ClipUtil[] = [];
		private _leastClipList: ClipUtil[] = [];
		private _clipArr: any[] = [ClipUtil.HUD_FONT0, ClipUtil.HUD_FONT1, ClipUtil.HUD_FONT2, ClipUtil.HUD_FONT3];

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
				Path_game_ebgang.ui_ebgang + "sk/ebg_0.png",
				Path_game_ebgang.ui_ebgang + "sk/ebg_1.png",
				Path_game_ebgang.ui_ebgang + "sk/ebg_2.png",
				Path_game_ebgang.ui_ebgang + "sk/ebg_3.png",
			];
			this._isNeedDuang = false;
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.ebgang.EBGang_HUDUI', ["game_ui.tongyong.HudUI"]);
			this.addChild(this._viewUI);
			this._player = this._game.sceneObjectMgr.mainPlayer;
			this._game.playMusic(Path.music + "ebgang/28g_BGM.mp3");
			this._ebgMgr = new EBGangMgr(this._game);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = false;
			}
			for (let index = 0; index < 4; index++) {
				if (!this._difenClipList[index]) {
					this._difenClipList[index] = new ClipUtil(this._clipArr[index]);
					this._difenClipList[index].x = this._viewUI["txt_difen" + index].x;
					this._difenClipList[index].y = this._viewUI["txt_difen" + index].y;
					this._viewUI["txt_difen" + index].parent && this._viewUI["txt_difen" + index].parent.addChild(this._difenClipList[index]);
					this._viewUI["txt_difen" + index].removeSelf();
				}
				if (!this._leastClipList[index]) {
					this._leastClipList[index] = new ClipUtil(this._clipArr[index]);
					this._leastClipList[index].x = this._viewUI["txt_least" + index].x;
					this._leastClipList[index].y = this._viewUI["txt_least" + index].y;
					this._leastClipList[index].scale(0.8, 0.8);
					this._viewUI["txt_least" + index].parent && this._viewUI["txt_least" + index].parent.addChild(this._leastClipList[index]);
					this._viewUI["txt_least" + index].removeSelf();
				}
			}
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudPage).onOpen(this._game, EbgangPageDef.GAME_NAME, false);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, this._initialtime + index * this._time, Laya.Ease.linearNone);
			}
			Laya.timer.once(this._initialtime + 4 * this._time, this, this.onComplete)
			this._viewUI.btn_join.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		private _initialtime: number = 200;
		private _time: number = 100;
		private onComplete() {
			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}

		protected onBtnTweenEnd(e: LEvent, target: any): void {
			if (!this._player) return;
			this._playerInfo = this._player.playerInfo;
			switch (target) {
				case this._viewUI.img_room0:
					if (this.chkPlayerNotEnoughMoney(0)) return;
					this._game.sceneObjectMgr.intoStory(EbgangPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_EBGANG_1.toString());
					break;
				case this._viewUI.img_room1:
					if (this.chkPlayerNotEnoughMoney(1)) return;
					this._game.sceneObjectMgr.intoStory(EbgangPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_EBGANG_2.toString());
					break;
				case this._viewUI.img_room2:
					if (this.chkPlayerNotEnoughMoney(2)) return;
					this._game.sceneObjectMgr.intoStory(EbgangPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_EBGANG_3.toString());
					break;
				case this._viewUI.img_room3:
					if (this.chkPlayerNotEnoughMoney(3)) return;
					this._game.sceneObjectMgr.intoStory(EbgangPageDef.GAME_NAME, Web_operation_fields.GAME_ROOM_CONFIG_EBGANG_4.toString());
					break;
				// case this._viewUI.btn_join:
				// 	let maplv = TongyongUtil.getJoinMapLv(EbgangPageDef.GAME_NAME, this._playerInfo.money);
				// 	if (!maplv) {
				// 		this.showTipsBox(EBGangMgr.LEAST_JOIN_MONEY[0]);
				// 		return;
				// 	}
				// 	this._game.sceneObjectMgr.intoStory(EbgangPageDef.GAME_NAME, maplv.toString());
				// 	break;
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			this._game.alert(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, true, Tips.TIPS_SKIN_STR["cz"]);
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < this._difenClipList.length; index++) {
				this._difenClipList[index] && this._difenClipList[index].setText(EBGangMgr.LEAST_BET_MONEY[index], true);
			}
			for (let index = 0; index < this._leastClipList.length; index++) {
				this._leastClipList[index] && this._leastClipList[index].setText(EBGangMgr.LEAST_JOIN_MONEY[index], true);
			}
		}

		private chkPlayerNotEnoughMoney(needIdx: number): boolean {
			let result: boolean = false;
			if (this._player.playerInfo.money < EBGangMgr.LEAST_JOIN_MONEY[needIdx]) {
				this.showTipsBox(EBGangMgr.LEAST_JOIN_MONEY[needIdx]);
				return true;
			}
			return result;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.img_room0.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.img_room3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
				this._viewUI.btn_join.off(LEvent.CLICK, this, this.onBtnClickWithTween);
			}
			this._game.stopMusic();

			super.close();
		}
	}
}