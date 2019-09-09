/**
* 二八杠HUD
*/
module gameebgang.page {
	export class EBGangPageOld extends game.gui.base.Page {
		private _viewUI: ui.nqp.game_ui.ebgang.EBGang_HUDUI;
		private _player: any;
		private _playerInfo: any;
		private _ebgMgr: EBGangMgr;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._asset = [
				Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
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

		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();

			this.initPlayerInfo();
			(this._viewUI.view_hud as TongyongHudNqpPage).onOpen(this._game, EbgangPageDef.GAME_NAME);

			for (let index = 0; index < this._viewUI.box_right.numChildren; index++) {
				this._viewUI.box_right._childs[index].visible = true;
				Laya.Tween.from(this._viewUI.box_right._childs[index], {
					right: -300
				}, 200 + index * 100, Laya.Ease.linearNone);
			}

			this._viewUI.img_room0.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
			this._viewUI.img_room3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
		}



		protected onBtnTweenEnd(e: LEvent, target: any): void {
			if (!this._player) return;
			if (this.chkPlayerIsGuest()) return;
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
				default:
					break;
			}
		}

		private showTipsBox(limit: number) {
			TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", limit), () => {
				this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
			}, () => {
			}, false, PathGameTongyong.ui_tongyong_general + "btn_cz.png");
		}

		private initPlayerInfo(): void {
			for (let index = 0; index < 4; index++) {
				this._viewUI["lab_least" + index].text = "底分: " + EBGangMgr.LEAST_BET_MONEY[index];
				this._viewUI["lab_money" + index].text = "准入: " + EBGangMgr.LEAST_JOIN_MONEY[index];
			}
		}

		private chkPlayerIsGuest(): boolean {
			let result: boolean = false;
			if (this._player.playerInfo.isguest) {
				TongyongPageDef.ins.alertRecharge("您选择了游客模式登录游戏，由于该模式下的游戏数据(包括付费数据)在删除游戏、更换设备后将被清空!对此造成的损失，本平台将不承担任何责任。为了您的虚拟财产安全,我们强烈建议您使用微信登录和账号登录游戏!", () => {
					this._game.uiRoot.general.open(DatingPageDef.PAGE_BINDPHONE);
				}, () => {
				}, false, PathGameTongyong.ui_tongyong_general + "btn_qw.png");
				result = true;
			}
			return result;
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
			}
			this._game.stopMusic();

			super.close();
		}
	}
}