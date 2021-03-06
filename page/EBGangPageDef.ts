/**
* 二八杠 该页面限制了类名首字母为大写其它为小写 Ebgang
*/
module gameebgang.page {
	export class EbgangPageDef extends game.gui.page.PageDef {
		static GAME_NAME: string;
		static PAGE_EBG: string = "1";	// HUD
		static PAGE_EBG_MAP: string = "2";	// 游戏场景
		static PAGE_EBG_BEGIN: string = "3";	// 开始动画
		static PAGE_EBG_SETTLEMENT: string = "4";	// 结算页
		static PAGE_EBG_RULE: string = "101";	// 规则

		static myinit(str: string) {
			super.myinit(str);
			EbgangClip.init();
			PageDef._pageClassMap[EbgangPageDef.PAGE_EBG] = EBGangPage;
			PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_MAP] = EBGangMapPage;
			PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_RULE] = EBGangRulePage;
			PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_BEGIN] = EBGangBeginPage;
			PageDef._pageClassMap[EbgangPageDef.PAGE_EBG_SETTLEMENT] = EBGangSettle;


			this["__needLoadAsset"] = [
                Path_game_ebgang.atlas_game_ui + "ebgang.atlas",
                Path_game_ebgang.atlas_game_ui_ebgang_effect + "nyl.atlas",
                Path_game_ebgang.atlas_game_ui_ebgang_effect + "qp.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "hud.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "general.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "touxiang.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "pai.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qz.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "qifu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "nyl.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "yq.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "chongzhi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "dating.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "logo.atlas",
                PathGameTongyong.atlas_game_ui_tongyong + "js.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjtp.atlas",
				PathGameTongyong.atlas_game_ui_tongyong + "zjts.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
				PathGameTongyong.atlas_game_ui_tongyong_general_effect + "anniug.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "skz.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "shaizi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "hulu.atlas",

				Path.custom_atlas_scene + 'mahjong.atlas',
				Path.map + 'pz_ebgang.png',
				Path.map_far + 'bg_ebgang.jpg',
			]

			if (WebConfig.needMusicPreload) {
				this["__needLoadAsset"] = this["__needLoadAsset"].concat([
					Path_game_ebgang.music_ebgang + "28g_BGM.mp3",
					Path_game_ebgang.music_ebgang + "bar_open_card.mp3",
					Path_game_ebgang.music_ebgang + "bar_send_card.mp3",
					Path_game_ebgang.music_ebgang + "bar_throw_dice.mp3",
					Path_game_ebgang.music_ebgang + "chouma_fly.mp3",
					Path_game_ebgang.music_ebgang + "dingzhuang.mp3",
					Path_game_ebgang.music_ebgang + "start.mp3",
					Path_game_ebgang.music_ebgang + "suijizhuangjia.mp3",
					Path_game_ebgang.music_ebgang + "chouma.mp3",
					Path_game_ebgang.music_ebgang + "zjtongchi.mp3",
				]);
			}
		}
	}
}