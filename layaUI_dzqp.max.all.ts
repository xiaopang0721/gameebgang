
module ui.dzqp.game_ui.ebgang.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_bg:Laya.Image;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"var":"img_bg","skin":"ebgang_ui/game_ui/ebgang/brnntype_bgimg_0.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":75,"visible":true,"var":"img_type","skin":"ebgang_ui/game_ui/ebgang/brnntype_normal_1.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"ebgang_ui/game_ui/ebgang/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":5}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":5}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":15}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":15}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":5}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":15}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":1.5,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.PaiXingUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class TouXiangUI extends View {
		public img_head:Laya.Image;
		public img_txk:Laya.Image;
		public text_name:laya.display.Text;
		public text_money:laya.display.Text;
		public img_frame:Laya.Image;
		public img_mask:Laya.Image;
		public qifu_type:Laya.Image;
		public view_banker:ui.dzqp.game_ui.tongyong.effect.ZhuangLUI;
		public img_qifu:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":138},"child":[{"type":"Box","props":{"y":1,"x":1},"child":[{"type":"Image","props":{"y":-7,"x":-5,"skin":"tongyong_ui/game_ui/tongyong/general/tu_txk1.png"}},{"type":"Image","props":{"y":65,"x":49,"visible":false,"skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_txk.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":63,"x":49,"var":"img_head","skin":"tongyong_ui/game_ui/tongyong/touxiang/head_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":14,"x":3,"var":"img_txk","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_v1.png","scaleY":0.95,"scaleX":0.95}},{"type":"Text","props":{"y":4,"x":0,"wordWrap":false,"width":100,"var":"text_name","text":"玩家名字","leading":6,"height":17,"fontSize":16,"color":"#12093d","align":"center"}},{"type":"Text","props":{"y":108,"x":-7,"wordWrap":false,"width":110,"var":"text_money","text":"0","leading":6,"height":24,"fontSize":20,"color":"#b18dff","align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"img_frame","skin":"ebgang_ui/game_ui/ebgang/tu_djs.png"},"child":[{"type":"Image","props":{"y":-3,"x":-3,"width":104,"var":"img_mask","renderType":"mask","height":142}}]},{"type":"Image","props":{"y":105,"x":50,"visible":false,"var":"qifu_type","skin":"tongyong_ui/game_ui/tongyong/qifu/f_cs2.png","scaleY":0.5,"scaleX":0.5,"anchorY":1,"anchorX":0.5}},{"type":"ZhuangL","props":{"y":-5,"x":-4,"var":"view_banker","runtime":"ui.dzqp.game_ui.tongyong.effect.ZhuangLUI"}},{"type":"Image","props":{"y":21,"x":69,"visible":false,"var":"img_qifu","skin":"tongyong_ui/game_ui/tongyong/touxiang/tu_qf.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.dzqp.game_ui.tongyong.effect.ZhuangLUI",ui.dzqp.game_ui.tongyong.effect.ZhuangLUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.TouXiangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.dzqp.game_ui.ebgang.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.dzqp.game_ui.ebgang.component.PaiXingUI;
		public box_betRate:Laya.Box;
		public img_betRateX:Laya.Image;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;
		public img_betRate3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.dzqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"Image","props":{"y":188,"x":35,"var":"img_banker","skin":"ebgang_ui/game_ui/ebgang/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":135,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.ebgang.component.PaiXingUI"}},{"type":"Box","props":{"y":168,"x":-2,"visible":true,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":4,"visible":true,"var":"img_betRateX","skin":"ebgang_ui/game_ui/ebgang/tu_x.png"}},{"type":"Image","props":{"y":0,"x":22,"var":"img_betRate1","skin":"ebgang_ui/game_ui/ebgang/bei_1.png"}},{"type":"Image","props":{"y":0,"x":44,"var":"img_betRate2","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}},{"type":"Image","props":{"y":0,"x":69,"visible":false,"var":"img_betRate3","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.ebgang.component.Ying_2UI",ui.dzqp.game_ui.ebgang.component.Ying_2UI);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.PaiXingUI",ui.dzqp.game_ui.ebgang.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.WanJia_LUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.dzqp.game_ui.ebgang.component.Ying_2UI;
		public img_banker:Laya.Image;
		public view_type:ui.dzqp.game_ui.ebgang.component.PaiXingUI;
		public box_betRate:Laya.Box;
		public img_betRateX:Laya.Image;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;
		public img_betRate3:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"visible":false,"var":"img_frame","runtime":"ui.dzqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"Image","props":{"y":193,"x":333,"visible":true,"var":"img_banker","skin":"ebgang_ui/game_ui/ebgang/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"PaiXing","props":{"y":137,"x":181,"visible":false,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.ebgang.component.PaiXingUI"}},{"type":"Box","props":{"y":173,"x":287,"visible":true,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":-11,"visible":true,"var":"img_betRateX","skin":"ebgang_ui/game_ui/ebgang/tu_x.png"}},{"type":"Image","props":{"y":0,"x":11,"var":"img_betRate1","skin":"ebgang_ui/game_ui/ebgang/bei_1.png"}},{"type":"Image","props":{"y":0,"x":33,"var":"img_betRate2","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}},{"type":"Image","props":{"y":0,"x":57,"visible":false,"var":"img_betRate3","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.ebgang.component.Ying_2UI",ui.dzqp.game_ui.ebgang.component.Ying_2UI);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.PaiXingUI",ui.dzqp.game_ui.ebgang.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.WanJia_RUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"var":"img_win","skin":"ebgang_ui/game_ui/ebgang/tu_ying2.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":45}],"scaleY":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":30}],"scaleX":[{"value":2,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.YingUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":300},"child":[{"type":"Image","props":{"y":194,"x":197,"skin":"ebgang_ui/game_ui/ebgang/tu_ying.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":70,"x":196,"skin":"ebgang_ui/game_ui/ebgang/tu_ying1.png","anchorY":0.5,"anchorX":0.5},"compId":3},{"type":"Image","props":{"y":65,"x":197,"skin":"ebgang_ui/game_ui/ebgang/effect/yanhua/10001.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":10}],"scaleX":[{"value":1.5,"tweenMethod":"backOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":10}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.5,"tweenMethod":"backOut","tween":true,"target":3,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":10}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":5}],"skin":[{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10001.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":0},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10002.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":6},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10003.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":7},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10004.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":8},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10005.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":9},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10006.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":10},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10007.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":11},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10008.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":12},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10009.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":13},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10010.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":14},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10011.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":15},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10012.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":16},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10013.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":17},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10014.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":18},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10015.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":19},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10016.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":20},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10017.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":21},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10018.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":22},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10019.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":23},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10020.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":24},{"value":"ebgang_ui/game_ui/ebgang/effect/yanhua/10021.png","tweenMethod":"linearNone","tween":false,"target":4,"key":"skin","index":25}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.Ying_1UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"width":190,"skin":"ebgang_ui/game_ui/ebgang/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":10,"width":190,"skin":"ebgang_ui/game_ui/ebgang/tu_ying.png","sizeGrid":"30,30,30,30","height":138,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleY","index":10}],"scaleX":[{"value":2,"tweenMethod":"backInOut","tween":true,"target":2,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1.5,"tweenMethod":"backInOut","tween":true,"target":2,"label":null,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":10}]}},{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":15}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.component.Ying_2UI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang {
    export class EBGangUI extends View {
		public box_view:Laya.Box;
		public text_info:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public text_round:laya.display.Text;
		public view_head0:ui.dzqp.game_ui.ebgang.component.TouXiangUI;
		public view_head1:ui.dzqp.game_ui.ebgang.component.TouXiangUI;
		public view_head2:ui.dzqp.game_ui.ebgang.component.TouXiangUI;
		public view_head3:ui.dzqp.game_ui.ebgang.component.TouXiangUI;
		public view_player0:ui.dzqp.game_ui.ebgang.component.PaiXingUI;
		public view_player1:ui.dzqp.game_ui.ebgang.component.WanJia_RUI;
		public view_player2:ui.dzqp.game_ui.ebgang.component.WanJia_RUI;
		public view_player3:ui.dzqp.game_ui.ebgang.component.WanJia_LUI;
		public view_showcard0:ui.dzqp.game_ui.tongyong.jiangtouUI;
		public view_showcard1:ui.dzqp.game_ui.tongyong.jiangtouUI;
		public view_showcard2:ui.dzqp.game_ui.tongyong.jiangtouUI;
		public view_showcard3:ui.dzqp.game_ui.tongyong.jiangtouUI;
		public box_banker:Laya.Box;
		public btn_banker_no:Laya.Button;
		public btn_banker1:Laya.Button;
		public btn_banker2:Laya.Button;
		public btn_banker3:Laya.Button;
		public btn_banker4:Laya.Button;
		public box_bet:Laya.Box;
		public btn_bet1:Laya.Button;
		public btn_bet2:Laya.Button;
		public btn_bet3:Laya.Button;
		public btn_bet4:Laya.Button;
		public btn_bet5:Laya.Button;
		public box_banker_tip0:Laya.Box;
		public img_banker_qiang0:Laya.Image;
		public img_banker_bei0:Laya.Image;
		public img_banker_num1_0:Laya.Image;
		public img_banker_num2_0:Laya.Image;
		public img_banker_num3_0:Laya.Image;
		public box_banker_tip1:Laya.Box;
		public img_banker_qiang1:Laya.Image;
		public img_banker_bei1:Laya.Image;
		public img_banker_num1_1:Laya.Image;
		public img_banker_num2_1:Laya.Image;
		public img_banker_num3_1:Laya.Image;
		public box_banker_tip2:Laya.Box;
		public img_banker_qiang2:Laya.Image;
		public img_banker_bei2:Laya.Image;
		public img_banker_num1_2:Laya.Image;
		public img_banker_num2_2:Laya.Image;
		public img_banker_num3_2:Laya.Image;
		public box_banker_tip3:Laya.Box;
		public img_banker_qiang3:Laya.Image;
		public img_banker_bei3:Laya.Image;
		public img_banker_num1_3:Laya.Image;
		public img_banker_num2_3:Laya.Image;
		public img_banker_num3_3:Laya.Image;
		public img_qiang:Laya.Image;
		public img_time:ui.dzqp.game_ui.tongyong.DaoJiShiUI;
		public box_tip:Laya.Box;
		public img_tip:Laya.Image;
		public txt_tip:laya.display.Text;
		public btn_continue:Laya.Button;
		public view_dice:ui.dzqp.game_ui.tongyong.effect.ShaiZiUI;
		public box_betRate:Laya.Box;
		public img_betRateX:Laya.Image;
		public img_betRate1:Laya.Image;
		public img_betRate2:Laya.Image;
		public img_betRate3:Laya.Image;
		public btn_back:Laya.Button;
		public btn_chongzhi:Laya.Button;
		public btn_cards:Laya.Button;
		public btn_menu:Laya.Button;
		public btn_qifu:Laya.Button;
		public box_cards:Laya.Box;
		public box_text_card1:Laya.Box;
		public text_cards0:laya.display.Text;
		public text_cards1:laya.display.Text;
		public text_cards2:laya.display.Text;
		public text_cards3:laya.display.Text;
		public text_cards4:laya.display.Text;
		public box_text_card2:Laya.Box;
		public text_cards5:laya.display.Text;
		public text_cards6:laya.display.Text;
		public text_cards7:laya.display.Text;
		public text_cards8:laya.display.Text;
		public text_cards9:laya.display.Text;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_cardtype:Laya.Button;
		public btn_set:Laya.Button;
		public btn_record:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Text","props":{"y":600,"x":13,"wordWrap":false,"width":386,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Text","props":{"y":650,"x":13,"wordWrap":false,"width":200,"var":"text_roomtype","text":"底注：1","leading":6,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Text","props":{"y":650,"x":240,"wordWrap":false,"width":157,"visible":true,"var":"text_round","text":"局数：X/Y","leading":6,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"TouXiang","props":{"y":568,"var":"view_head0","centerX":-176,"runtime":"ui.dzqp.game_ui.ebgang.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":277,"var":"view_head1","right":20,"runtime":"ui.dzqp.game_ui.ebgang.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":38,"var":"view_head2","right":438,"runtime":"ui.dzqp.game_ui.ebgang.component.TouXiangUI"}},{"type":"TouXiang","props":{"y":277,"x":18,"var":"view_head3","runtime":"ui.dzqp.game_ui.ebgang.component.TouXiangUI"}},{"type":"PaiXing","props":{"y":674,"x":614,"width":160,"var":"view_player0","height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.ebgang.component.PaiXingUI"}},{"type":"WanJia_R","props":{"y":246,"var":"view_player1","right":35,"runtime":"ui.dzqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":7,"var":"view_player2","right":453,"runtime":"ui.dzqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_L","props":{"y":250,"x":28,"var":"view_player3","runtime":"ui.dzqp.game_ui.ebgang.component.WanJia_LUI"}},{"type":"jiangtou","props":{"y":650,"x":536,"var":"view_showcard0","anchorY":1,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":354,"x":1140,"var":"view_showcard1","scaleX":-1,"anchorY":1,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":92,"x":719,"var":"view_showcard2","rotation":-180,"anchorY":1,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.jiangtouUI"}},{"type":"jiangtou","props":{"y":354,"x":140,"var":"view_showcard3","anchorY":1,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.jiangtouUI"}},{"type":"Box","props":{"y":518,"width":877,"var":"box_banker","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_banker_no","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"不抢庄","disabled":false}},{"type":"Button","props":{"y":0,"x":178,"var":"btn_banker1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"3倍抢庄"}},{"type":"Button","props":{"y":0,"x":355,"var":"btn_banker2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"4倍抢庄"}},{"type":"Button","props":{"y":0,"x":533,"var":"btn_banker3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"5倍抢庄"}},{"type":"Button","props":{"y":0,"x":710,"var":"btn_banker4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"6倍抢庄"}}]},{"type":"Box","props":{"y":516,"width":877,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"1倍","disabled":false}},{"type":"Button","props":{"y":0,"x":178,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"2倍"}},{"type":"Button","props":{"y":0,"x":355,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"3倍"}},{"type":"Button","props":{"y":0,"x":533,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"4倍"}},{"type":"Button","props":{"y":0,"x":710,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"5倍"}}]},{"type":"Box","props":{"y":542,"width":154,"var":"box_banker_tip0","height":35,"centerX":-163,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":-2,"var":"img_banker_qiang0","skin":"ebgang_ui/game_ui/ebgang/tu_bei1.png"}},{"type":"Image","props":{"y":-1,"x":107,"var":"img_banker_bei0","skin":"ebgang_ui/game_ui/ebgang/tu_bei2.png"}},{"type":"Image","props":{"y":-5,"x":29,"var":"img_banker_num1_0","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":53,"var":"img_banker_num2_0","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":77,"var":"img_banker_num3_0","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}}]},{"type":"Box","props":{"y":251,"width":154,"var":"box_banker_tip1","height":35,"centerX":567,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":8,"var":"img_banker_qiang1","skin":"ebgang_ui/game_ui/ebgang/tu_bei1.png"}},{"type":"Image","props":{"y":-1,"x":117,"var":"img_banker_bei1","skin":"ebgang_ui/game_ui/ebgang/tu_bei2.png"}},{"type":"Image","props":{"y":-5,"x":39,"var":"img_banker_num1_1","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":63,"var":"img_banker_num2_1","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":87,"var":"img_banker_num3_1","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}}]},{"type":"Box","props":{"y":201,"width":154,"var":"box_banker_tip2","height":35,"centerX":160,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":-2,"var":"img_banker_qiang2","skin":"ebgang_ui/game_ui/ebgang/tu_bei1.png"}},{"type":"Image","props":{"y":-1,"x":107,"var":"img_banker_bei2","skin":"ebgang_ui/game_ui/ebgang/tu_bei2.png"}},{"type":"Image","props":{"y":-5,"x":29,"var":"img_banker_num1_2","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":53,"var":"img_banker_num2_2","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":77,"var":"img_banker_num3_2","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}}]},{"type":"Box","props":{"y":257,"width":154,"var":"box_banker_tip3","height":35,"centerX":-568,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-1,"x":8,"var":"img_banker_qiang3","skin":"ebgang_ui/game_ui/ebgang/tu_bei1.png"}},{"type":"Image","props":{"y":-1,"x":117,"var":"img_banker_bei3","skin":"ebgang_ui/game_ui/ebgang/tu_bei2.png"}},{"type":"Image","props":{"y":-5,"x":39,"var":"img_banker_num1_3","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":63,"var":"img_banker_num2_3","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}},{"type":"Image","props":{"y":-5,"x":87,"var":"img_banker_num3_3","skin":"ebgang_ui/game_ui/ebgang/bei_0.png"}}]},{"type":"Image","props":{"y":546,"x":463,"visible":false,"var":"img_qiang","skin":"ebgang_ui/game_ui/ebgang/qiang_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"DaoJiShi","props":{"y":241,"x":639,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Box","props":{"y":460,"width":687,"visible":false,"var":"box_tip","height":43,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"var":"img_tip","skin":"ebgang_ui/game_ui/ebgang/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":88,"wordWrap":true,"width":520,"var":"txt_tip","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"Button","props":{"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","label":"继续游戏","height":59,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"ShaiZi","props":{"var":"view_dice","centerY":-100,"centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.dzqp.game_ui.tongyong.effect.ShaiZiUI"}},{"type":"Box","props":{"y":564,"x":324,"visible":true,"var":"box_betRate"},"child":[{"type":"Image","props":{"y":0,"x":-11,"visible":true,"var":"img_betRateX","skin":"ebgang_ui/game_ui/ebgang/tu_x.png"}},{"type":"Image","props":{"y":0,"x":12,"var":"img_betRate1","skin":"ebgang_ui/game_ui/ebgang/bei_1.png"}},{"type":"Image","props":{"y":0,"x":34,"var":"img_betRate2","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}},{"type":"Image","props":{"y":0,"x":58,"visible":false,"var":"img_betRate3","skin":"ebgang_ui/game_ui/ebgang/bei_5.png"}}]}]},{"type":"Button","props":{"var":"btn_back","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_fh1.png","right":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_chongzhi","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_chongzhi.png","right":10,"bottom":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_cards","top":16,"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/tu_tj1.png","left":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"var":"btn_menu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_cd.png","left":10,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":52,"x":1159,"var":"btn_qifu","top":16,"stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_qf.png","right":85,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"width":253,"var":"box_cards","top":0,"left":170,"height":141},"child":[{"type":"Image","props":{"y":140,"width":260,"skin":"ebgang_ui/game_ui/ebgang/tu_kk.png","sizeGrid":"78,0,24,27","scaleX":-1,"height":140,"anchorY":1,"anchorX":1}},{"type":"Image","props":{"y":14,"x":28,"skin":"ebgang_ui/game_ui/ebgang/tu_tj.png"}},{"type":"Box","props":{"y":104,"x":48,"var":"box_text_card1"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards0","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards1","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards2","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards3","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards4","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":45,"x":48,"var":"box_text_card2"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards5","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards6","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards7","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards8","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards9","text":"0","strokeColor":"#27007c","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Image","props":{"y":0,"x":10,"width":180,"var":"img_menu","top":0,"skin":"tongyong_ui/game_ui/tongyong/general/cd_1.png","sizeGrid":"20,20,20,20","left":10,"height":293,"anchorY":0,"anchorX":0},"child":[{"type":"Image","props":{"y":74,"x":9,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Image","props":{"y":217,"x":9,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}},{"type":"Button","props":{"y":86,"x":14,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_gz.png"}},{"type":"Button","props":{"y":16,"x":14,"var":"btn_cardtype","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_px.png"}},{"type":"Button","props":{"y":227,"x":14,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_sz.png"}},{"type":"Button","props":{"y":157,"x":14,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_zj.png"}},{"type":"Image","props":{"y":145,"x":9,"width":160,"skin":"tongyong_ui/game_ui/tongyong/general/cd_2.png"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.TouXiangUI",ui.dzqp.game_ui.ebgang.component.TouXiangUI);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.PaiXingUI",ui.dzqp.game_ui.ebgang.component.PaiXingUI);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.WanJia_RUI",ui.dzqp.game_ui.ebgang.component.WanJia_RUI);
			View.regComponent("ui.dzqp.game_ui.ebgang.component.WanJia_LUI",ui.dzqp.game_ui.ebgang.component.WanJia_LUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.jiangtouUI",ui.dzqp.game_ui.tongyong.jiangtouUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.DaoJiShiUI",ui.dzqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.dzqp.game_ui.tongyong.effect.ShaiZiUI",ui.dzqp.game_ui.tongyong.effect.ShaiZiUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.EBGangUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang {
    export class EBGang_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public panel_type:Laya.Panel;
		public lab_type:Laya.Image;
		public lab_settle:Laya.Image;
		public lab_daxiao:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":787,"scaleY":1.25,"scaleX":1.25,"height":531,"centerY":1,"centerX":-5,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png"}},{"type":"Image","props":{"y":0,"x":785,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bk4.png","scaleX":-1}},{"type":"Image","props":{"y":29,"x":393,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bkbt.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":37,"x":394,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":66,"x":15,"width":756,"var":"btn_tab","space":4,"skin":"tongyong_ui/game_ui/tongyong/hud/tab_bq.png","labels":"玩法介绍,牌型大小,结算计分","labelSize":20,"labelColors":"#cacaca,#cacaca,#ffffff","height":58}},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_rule","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"ebgang_ui/game_ui/ebgang/guize_1.png"}}]},{"type":"Panel","props":{"y":130,"x":20,"width":750,"var":"panel_type","height":355},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_type","skin":"ebgang_ui/game_ui/ebgang/guize_2.png","height":695}}]},{"type":"Image","props":{"y":130,"x":20,"var":"lab_settle","skin":"ebgang_ui/game_ui/ebgang/guize_3.png"}},{"type":"Image","props":{"y":130,"x":20,"var":"lab_daxiao","skin":"ebgang_ui/game_ui/ebgang/guize_4.png"}},{"type":"Button","props":{"y":38,"x":743,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/hud/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.EBGang_GuiZeUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang {
    export class EBGang_HUDUI extends View {
		public img_mn:Laya.Image;
		public view_hud:ui.dzqp.game_ui.tongyong.HudUI;
		public box_normal:Laya.Box;
		public box_right:Laya.Box;
		public img_room0:Laya.Image;
		public lab_least0:Laya.Label;
		public lab_money0:Laya.Label;
		public img_room1:Laya.Image;
		public lab_least1:Laya.Label;
		public lab_money1:Laya.Label;
		public img_room2:Laya.Image;
		public lab_least2:Laya.Label;
		public lab_money2:Laya.Label;
		public img_room3:Laya.Image;
		public lab_money3:Laya.Label;
		public lab_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"ebgang_ui/game_ui/ebgang/zjh.jpg","right":-1,"left":-1,"bottom":-1}},{"type":"Image","props":{"y":360,"var":"img_mn","skin":"ebgang_ui/game_ui/ebgang/zjh_rw.png","left":-30,"bottom":0,"anchorY":0.5,"anchorX":0}},{"type":"Hud","props":{"var":"view_hud","top":0,"runtime":"ui.dzqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"width":910,"var":"box_normal","top":0,"right":0,"mouseThrough":true,"bottom":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"width":900,"var":"box_right","right":0,"height":465,"centerY":20,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":112,"var":"img_room0","skin":"tongyong_ui/game_ui/tongyong/hud/difen_00.png","right":610,"name":"item0","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":59,"x":133,"wordWrap":true,"width":140,"var":"lab_least0","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":105,"x":133,"wordWrap":true,"width":196,"var":"lab_money0","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#122452","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":352,"var":"img_room1","skin":"tongyong_ui/game_ui/tongyong/hud/difen_01.png","right":610,"name":"item1","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":58,"x":133,"wordWrap":true,"width":140,"var":"lab_least1","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":133,"wordWrap":true,"width":196,"var":"lab_money1","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#361147","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room2","skin":"tongyong_ui/game_ui/tongyong/hud/difen_02.png","right":330,"name":"item2","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":151,"x":134,"skin":"ebgang_ui/game_ui/ebgang/difen_03_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":298,"x":135,"wordWrap":true,"width":140,"var":"lab_least2","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":343,"x":136,"wordWrap":true,"width":196,"var":"lab_money2","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#0a4121","anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"Image","props":{"y":232,"var":"img_room3","skin":"tongyong_ui/game_ui/tongyong/hud/difen_03.png","right":50,"name":"item3","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":150,"x":135,"skin":"ebgang_ui/game_ui/ebgang/difen_04_1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":343,"x":137,"wordWrap":true,"width":196,"var":"lab_money3","text":"准入：00","leading":6,"height":31,"fontSize":26,"color":"#5d360d","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":298,"x":136,"wordWrap":true,"width":140,"var":"lab_least3","text":"底分：00","leading":6,"height":31,"fontSize":24,"color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}]}]}]},{"type":"Image","props":{"top":24,"skin":"ebgang_ui/game_ui/ebgang/zjh_title.png","centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.HudUI",ui.dzqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.EBGang_HUDUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang {
    export class GoUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":350,"x":650,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_0.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":360,"x":957.4016,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks1.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"y":360,"x":317.5984,"skin":"tongyong_ui/game_ui/tongyong/general/tu_ks0.png","centerY":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":4},{"type":"Image","props":{"y":360,"x":637,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","centerY":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3},{"type":"Image","props":{"y":251,"x":385,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":9},{"type":"Image","props":{"y":436,"x":916,"skin":"tongyong_ui/game_ui/tongyong/general/gzyz_3.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":10}]}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"key":"x","index":0},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":10},{"value":740,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"x","index":40},{"value":1000,"tweenMethod":"strongInOut","tween":true,"target":2,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"alpha","index":48}]}},{"target":4,"keyframes":{"x":[{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"key":"x","index":0},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"key":"x","index":10},{"value":535,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"x","index":40},{"value":275,"tweenMethod":"strongInOut","tween":true,"target":4,"label":null,"key":"x","index":48}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"alpha","index":48}]}},{"target":3,"keyframes":{"x":[{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":0},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":40},{"value":637,"tweenMethod":"linearNone","tween":true,"target":3,"key":"x","index":48}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":9},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":13},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":40},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":48}]}},{"target":7,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":0},{"value":false,"tweenMethod":"linearNone","tween":false,"target":7,"key":"visible","index":46}],"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":40},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":45},{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleY","index":46}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":40},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":45},{"value":2,"tweenMethod":"linearNone","tween":true,"target":7,"label":null,"key":"scaleX","index":46}]}},{"target":9,"keyframes":{"y":[{"value":251,"tweenMethod":"linearNone","tween":true,"target":9,"key":"y","index":0}],"x":[{"value":385,"tweenMethod":"linearNone","tween":true,"target":9,"key":"x","index":0},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":4},{"value":346,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":10},{"value":937,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":9,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":9,"label":null,"key":"alpha","index":30}]}},{"target":10,"keyframes":{"y":[{"value":436,"tweenMethod":"linearNone","tween":true,"target":10,"key":"y","index":0},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":4},{"value":427,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":10},{"value":425,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"y","index":30}],"x":[{"value":916,"tweenMethod":"linearNone","tween":true,"target":10,"key":"x","index":0},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":4},{"value":936,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":10},{"value":343,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"x","index":30}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":10,"key":"visible","index":4}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":9},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":10,"label":null,"key":"alpha","index":30}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.GoUI.uiView);
        }
    }
}

module ui.dzqp.game_ui.ebgang {
    export class JieSuanUI extends View {
		public ani2:Laya.FrameAnimation;
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_continue:Laya.Button;

        public static  uiView:any ={"type":"View","props":{},"child":[{"type":"Box","props":{"width":656,"height":448,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":117,"x":326,"skin":"tongyong_ui/game_ui/tongyong/general/tu_gs.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":44},{"type":"Image","props":{"width":620,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bk1.png","sizeGrid":"89,49,71,39","height":350,"centerY":33,"centerX":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_sl2.png","centerY":-187,"centerX":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_js.png","centerY":-177,"centerX":3,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":75,"x":316,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_2.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":386,"x":334,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"50S后开始第00局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffff96","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"y":146,"x":28,"width":599,"skin":"tongyong_ui/game_ui/tongyong/general/jiesuan_d1.png","sizeGrid":"0,176,0,164","height":38}},{"type":"Label","props":{"y":168,"x":145,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":168,"x":271,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":168,"x":398,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":168,"x":524,"wordWrap":true,"width":63,"text":"金币","leading":6,"height":23,"fontSize":18,"color":"#1f2530","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"y":190,"x":27,"width":600,"var":"list_settle","spaceY":8,"repeatY":4,"height":180},"child":[{"type":"JieSuanRender","props":{"y":0,"x":0,"name":"render","runtime":"ui.dzqp.game_ui.tongyong.JieSuanRenderUI"}}]},{"type":"Button","props":{"y":456,"width":240,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","label":"继续游戏","height":59,"centerX":3,"anchorY":0.5,"anchorX":0.5}}]}],"animations":[{"nodes":[{"target":44,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":44,"key":"rotation","index":100}]}}],"name":"ani2","id":2,"frameRate":24,"action":2}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.dzqp.game_ui.tongyong.JieSuanRenderUI",ui.dzqp.game_ui.tongyong.JieSuanRenderUI);

            super.createChildren();
            this.createView(ui.dzqp.game_ui.ebgang.JieSuanUI.uiView);
        }
    }
}
