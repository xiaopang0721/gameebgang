/**
* 二八杠-规则
*/
module gameebgang.page {
	const enum TYPE_INDEX {	
		TYPE_WANFA_JIESHAO = 0,
		TYPE_CARD_TYPE = 1,
		TYPE_SETTLE = 2,
	}
	export class EBGangRulePage extends game.gui.base.Page {
		private _viewUI: ui.ajqp.game_ui.ebgang.EBGang_GuiZeUI;

		constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
			super(v, onOpenFunc, onCloseFunc);
			this._isNeedBlack = true;
			this._isClickBlack = true;
			this._asset = [
				Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
				PathGameTongyong.atlas_game_ui_tongyong+ "hud.atlas",
			];
		}

		// 页面初始化函数
		protected init(): void {
			this._viewUI = this.createView('game_ui.ebgang.EBGang_GuiZeUI');
			this.addChild(this._viewUI);
			
		}

		// 页面打开时执行函数
		protected onOpen(): void {
			super.onOpen();
			this._viewUI.lab_settle.skin = Path_game_ebgang.ui_ebgang + "guize_3.png";
			this._viewUI.btn_tab.selectHandler = Handler.create(this, this.selectHandler, null, false);
			this._viewUI.btn_tab.selectedIndex = TYPE_INDEX.TYPE_WANFA_JIESHAO;

			this._viewUI.panel_rule.vScrollBarSkin = "";
			this._viewUI.panel_rule.vScrollBar.autoHide = true;
			this._viewUI.panel_rule.vScrollBar.elasticDistance = 100;

			this._viewUI.panel_type.vScrollBarSkin = "";
			this._viewUI.panel_type.vScrollBar.autoHide = true;
			this._viewUI.panel_type.vScrollBar.elasticDistance = 100;

			this.setTabSelectedIndex();
		}

		private setTabSelectedIndex() {
			if (this._dataSource) {
				let selectedIndex: number = Math.floor(this._dataSource / 10);
				this._viewUI.btn_tab.selectedIndex = selectedIndex > 2 ? 0 : selectedIndex;
			}
		}

		private selectHandler(index: number): void {
			this._viewUI.lab_wanfa.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_WANFA_JIESHAO;
			this._viewUI.panel_type.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_CARD_TYPE;
			this._viewUI.lab_settle.visible = this._viewUI.btn_tab.selectedIndex == TYPE_INDEX.TYPE_SETTLE;
		}

		public close(): void {
			if (this._viewUI) {
				this._viewUI.btn_tab.selectedIndex = 0;
			}

			super.close();
		}
	}
}