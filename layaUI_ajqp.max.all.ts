
module ui.ajqp.game_ui.ebgang.component {
    export class Effect_xsUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":34,"height":39},"child":[{"type":"Image","props":{"y":19,"x":17,"skin":"ebgang_ui/game_ui/ebgang/tu_xian.png","anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":19,"x":17,"skin":"ebgang_ui/game_ui/ebgang/tu_xian.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":4}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":4}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":3}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleY","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":8}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"scaleX","index":4},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Effect_xsUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class Effect_xscxUI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":150},"child":[{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/tu_xian.png","scaleY":2,"scaleX":2,"centerY":4,"centerX":2,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":2},{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/tu_guang01.png","scaleY":1,"scaleX":0,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"scaleY":[{"value":0.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":5}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.92,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":8}],"alpha":[{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":8}]}},{"target":2,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"alpha","index":5},{"value":1,"tweenMethod":"linearNone","tween":false,"target":2,"key":"alpha","index":6}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Effect_xscxUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class Effect_yqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":87,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.9},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_cz.png"}},{"type":"Box","props":{"y":32,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":-3,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":21,"x":60,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":47,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":33,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":62,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}}]},{"type":"Box","props":{"y":33,"x":46,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":33,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Effect_yqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class Effect_zqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public img_rate:Laya.Image;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public img_betRate:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":19,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_cz.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":-3,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":21,"x":60,"var":"img_rate","skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":47,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":33,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":62,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}}]},{"type":"Box","props":{"y":35,"x":51,"width":59,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":0,"x":-3,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":53,"var":"img_betRate","skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":37,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/bei_0.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":17,"x":16,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":7,"x":58,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":61,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":46,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":39,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Effect_zqpUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class PaiXingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_bg:Laya.Image;
		public img_type:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":160,"height":80},"child":[{"type":"Image","props":{"y":46,"x":80,"width":210,"var":"img_bg","skin":"ebgang_ui/game_ui/ebgang/brnntype_bgimg_0.png","height":62,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Box","props":{"y":38,"x":88,"width":165,"height":60,"anchorY":0.5,"anchorX":0.5},"compId":6,"child":[{"type":"Image","props":{"y":32,"x":75,"visible":true,"var":"img_type","skin":"ebgang_ui/game_ui/ebgang/brnntype_normal_b10.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":37,"x":74,"skin":"ebgang_ui/game_ui/ebgang/tu_g1.png","blendMode":"lighter","anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"x":[{"value":60,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":80,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":3}]}},{"target":4,"keyframes":{"y":[{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":0},{"value":37,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":3}],"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":4,"key":"visible","index":3}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":3},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":3},{"value":1.5,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":10}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"visible":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":0},{"value":true,"tweenMethod":"linearNone","tween":false,"target":6,"key":"visible","index":3}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleY","index":0},{"value":1.6,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleY","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":10}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":6,"key":"scaleX","index":0},{"value":1.6,"tweenMethod":"backOut","tween":true,"target":6,"key":"scaleX","index":3},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.PaiXingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class WanJia_LUI extends View {
		public img_frame:ui.ajqp.game_ui.ebgang.component.Ying_2UI;
		public view_type:ui.ajqp.game_ui.ebgang.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.ajqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":135,"x":189,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.ebgang.component.Ying_2UI",ui.ajqp.game_ui.ebgang.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.PaiXingUI",ui.ajqp.game_ui.ebgang.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.WanJia_LUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class WanJia_RUI extends View {
		public img_frame:ui.ajqp.game_ui.ebgang.component.Ying_2UI;
		public view_type:ui.ajqp.game_ui.ebgang.component.PaiXingUI;

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"visible":false,"var":"img_frame","runtime":"ui.ajqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":137,"x":181,"visible":false,"var":"view_type","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.ebgang.component.Ying_2UI",ui.ajqp.game_ui.ebgang.component.Ying_2UI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.PaiXingUI",ui.ajqp.game_ui.ebgang.component.PaiXingUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.WanJia_RUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class YingUI extends View {
		public ani1:Laya.FrameAnimation;
		public img_win:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":120},"child":[{"type":"Image","props":{"x":60,"var":"img_win","skin":"ebgang_ui/game_ui/ebgang/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":10,"x":70,"skin":"ebgang_ui/game_ui/ebgang/tu_ying2.png","scaleY":1,"scaleX":1,"centerY":0,"centerX":0,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":7}],"scaleX":[{"value":2,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":5},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":7}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":11}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":3,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":11}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":3,"key":"alpha","index":0},{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":4},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":12}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.YingUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class Ying_1UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":434,"height":465},"child":[{"type":"Image","props":{"y":202,"x":217,"width":434,"skin":"ebgang_ui/game_ui/ebgang/effect/nyl/tu_guang.png","scaleY":1,"scaleX":0.9,"rotation":20,"pivotY":186,"pivotX":215,"height":373,"alpha":1},"compId":8},{"type":"Image","props":{"y":193,"x":217,"skin":"ebgang_ui/game_ui/ebgang/effect/nyl/tu_hg.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":7},{"type":"Image","props":{"y":203,"x":221,"skin":"ebgang_ui/game_ui/ebgang/effect/nyl/tu_kuang.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":6},{"type":"Image","props":{"y":204,"x":218,"skin":"ebgang_ui/game_ui/ebgang/effect/nyl/tu_nyl.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5},"compId":5},{"type":"Image","props":{"y":194,"x":218,"skin":"ebgang_ui/game_ui/ebgang/effect/nyl/tu_nylh.png","scaleY":1.4,"scaleX":1.4,"blendMode":"lighter","anchorY":0.5,"anchorX":0.5,"alpha":0},"compId":20},{"type":"Image","props":{"y":349,"x":221,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","scaleY":1,"scaleX":1,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":14}],"animations":[{"nodes":[{"target":5,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleY","index":10}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":5,"key":"scaleX","index":10}]}},{"target":8,"keyframes":{"y":[{"value":198,"tweenMethod":"linearNone","tween":false,"target":8,"key":"y","index":0},{"value":202,"tweenMethod":"linearNone","tween":true,"target":8,"key":"y","index":4}],"x":[{"value":206,"tweenMethod":"linearNone","tween":false,"target":8,"key":"x","index":0},{"value":217,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":4}],"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleY","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":4},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleY","index":10}],"scaleX":[{"value":0.9,"tweenMethod":"linearNone","tween":false,"target":8,"key":"scaleX","index":0},{"value":0.2,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":7},{"value":0.9,"tweenMethod":"linearNone","tween":true,"target":8,"key":"scaleX","index":10}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":8,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":8,"key":"alpha","index":10}]}},{"target":6,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":6},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleY","index":16}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":6,"key":"scaleX","index":16}]}},{"target":7,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleY","index":12}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":5},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":6},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":7,"key":"scaleX","index":12}]}},{"target":14,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":1}]}},{"target":20,"keyframes":{"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleY","index":28}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":0},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":10},{"value":1.4,"tweenMethod":"linearNone","tween":true,"target":20,"key":"scaleX","index":28}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":7},{"value":1,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":10},{"value":0,"tweenMethod":"linearNone","tween":true,"target":20,"key":"alpha","index":28}]}}],"name":"ani1","id":1,"frameRate":24,"action":1}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Ying_1UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang.component {
    export class Ying_2UI extends View {
		public ani1:Laya.FrameAnimation;

        public static  uiView:any ={"type":"View","props":{"width":190,"height":138},"child":[{"type":"Image","props":{"y":59,"x":95,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":59,"x":95,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","scaleY":0.74,"scaleX":0.52,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":0.65,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":0.54,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":0.75,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":0.85,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":0.72,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Ying_2UI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang {
    export class EBGangUI extends View {
		public box_view:Laya.Box;
		public text_info:laya.display.Text;
		public view_head0:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public box_tip:Laya.Box;
		public img_tip:Laya.Image;
		public txt_tip:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public text_round:laya.display.Text;
		public view_head1:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head2:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_head3:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public view_player0:ui.ajqp.game_ui.ebgang.component.PaiXingUI;
		public view_player1:ui.ajqp.game_ui.ebgang.component.WanJia_RUI;
		public view_player2:ui.ajqp.game_ui.ebgang.component.WanJia_RUI;
		public view_player3:ui.ajqp.game_ui.ebgang.component.WanJia_LUI;
		public box_banker:Laya.Box;
		public btn_banker_no:Laya.Button;
		public btn_banker1:Laya.Button;
		public clip_banker1:Laya.Clip;
		public btn_banker2:Laya.Button;
		public clip_banker2:Laya.Clip;
		public btn_banker3:Laya.Button;
		public clip_banker3:Laya.Clip;
		public btn_banker4:Laya.Button;
		public clip_banker4:Laya.Clip;
		public box_bet:Laya.Box;
		public btn_bet1:Laya.Button;
		public clip_bei1:Laya.Clip;
		public btn_bet2:Laya.Button;
		public clip_bei2:Laya.Clip;
		public btn_bet3:Laya.Button;
		public clip_bei3:Laya.Clip;
		public btn_bet4:Laya.Button;
		public clip_bei4:Laya.Clip;
		public btn_bet5:Laya.Button;
		public clip_bei5:Laya.Clip;
		public img_time:ui.ajqp.game_ui.tongyong.DaoJiShiUI;
		public btn_continue:Laya.Button;
		public view_dice:ui.ajqp.game_ui.tongyong.effect.ShaiZiUI;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_record:Laya.Button;
		public btn_set:Laya.Button;
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
		public btn_menu:Laya.Button;
		public btn_cards:Laya.Button;
		public btn_back:Laya.Button;
		public btn_qifu:Laya.Button;
		public view_showcard3:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_showcard0:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_showcard1:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_showcard2:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"width":336,"top":0,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","left":104,"height":39},"child":[{"type":"Text","props":{"y":7,"x":3,"wordWrap":false,"width":330,"var":"text_info","text":"牌局号：1532315641561321231313 ","leading":6,"height":25,"fontSize":20,"color":"#dadada"}}]},{"type":"TouXiangqz","props":{"y":568,"var":"view_head0","centerX":-176,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"Box","props":{"y":460,"width":687,"visible":false,"var":"box_tip","height":43,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"var":"img_tip","skin":"ebgang_ui/game_ui/ebgang/tu_h.png","centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":6,"x":78,"width":520,"var":"txt_tip","text":"正在进入房间","strokeColor":"#00ffc1","leading":6,"height":26,"fontSize":26,"color":"#dadada","align":"center"}}]},{"type":"Box","props":{"y":389,"x":645,"width":687,"height":43,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":20.5,"x":319.5,"skin":"ebgang_ui/game_ui/ebgang/tu_h.png","anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Text","props":{"y":9,"x":147,"wordWrap":false,"width":200,"var":"text_roomtype","text":"底注：1","leading":6,"height":25,"fontSize":24,"color":"#ffffff"}},{"type":"Text","props":{"y":9,"x":345,"wordWrap":false,"width":157,"visible":true,"var":"text_round","text":"局数：X/Y","leading":6,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"TouXiangqz","props":{"y":277,"var":"view_head1","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":38,"var":"view_head2","right":438,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":277,"x":18,"var":"view_head3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"PaiXing","props":{"y":674,"x":614,"width":160,"var":"view_player0","height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}},{"type":"WanJia_R","props":{"y":246,"var":"view_player1","right":35,"runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":7,"var":"view_player2","right":453,"runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_L","props":{"y":250,"x":28,"var":"view_player3","runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_LUI"}},{"type":"Box","props":{"y":518,"width":877,"var":"box_banker","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_banker_no","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","labelStrokeColor":"#7e2314","labelStroke":2,"labelSize":26,"labelPadding":"-2","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":18,"x":42,"skin":"ebgang_ui/game_ui/ebgang/tu_bqz.png"}}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_banker1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":18,"x":68,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Image","props":{"y":18,"x":97,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qz.png"}},{"type":"Box","props":{"y":13,"x":15,"width":50,"height":40},"child":[{"type":"Clip","props":{"var":"clip_banker1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_banker2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":17,"x":68,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Image","props":{"y":17,"x":97,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qz.png"}},{"type":"Box","props":{"y":13,"x":15,"width":50,"height":40},"child":[{"type":"Clip","props":{"y":20,"x":29,"var":"clip_banker2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_banker3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":17,"x":68,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Image","props":{"y":17,"x":97,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qz.png"}},{"type":"Box","props":{"y":13,"x":15,"width":50,"height":40},"child":[{"type":"Clip","props":{"var":"clip_banker3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_banker4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":17,"x":68,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Image","props":{"y":17,"x":97,"skin":"tongyong_ui/game_ui/tongyong/general/tu_qz.png"}},{"type":"Box","props":{"y":13,"x":15,"width":50,"height":40},"child":[{"type":"Clip","props":{"var":"clip_banker4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":516,"width":877,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","disabled":false},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":40},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":178,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":40},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":355,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":40},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":533,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":40},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":710,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":18,"x":91,"skin":"tongyong_ui/game_ui/tongyong/general/tu_bei.png"}},{"type":"Box","props":{"y":13,"x":50,"width":32,"height":40},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":10,"centerY":0,"centerX":0}}]}]}]},{"type":"DaoJiShi","props":{"y":241,"x":639,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Button","props":{"width":230,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","height":90,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":22,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png","centerX":0}}]},{"type":"ShaiZi","props":{"var":"view_dice","centerY":-100,"centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ShaiZiUI"}},{"type":"Image","props":{"y":87,"x":66,"var":"img_menu","skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_1.png","sizeGrid":"20,20,20,20","anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"y":93,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Image","props":{"y":174,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Button","props":{"y":25,"x":34,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png"}},{"type":"Button","props":{"y":105,"x":33,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png"}},{"type":"Button","props":{"y":185,"x":33,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png"}}]},{"type":"Box","props":{"y":156,"x":106,"width":253,"var":"box_cards","height":141,"anchorY":0.5},"child":[{"type":"Image","props":{"y":143,"x":10,"width":237,"skin":"tongyong_ui/game_ui/tongyong/general/tu_kk.png","sizeGrid":"78,0,24,27","scaleX":-1,"height":140,"anchorY":1,"anchorX":1}},{"type":"Image","props":{"y":14,"x":28,"skin":"ebgang_ui/game_ui/ebgang/tu_tj.png"}},{"type":"Box","props":{"y":104,"x":48,"var":"box_text_card1"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards0","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards1","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards2","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards3","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards4","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":45,"x":48,"var":"box_text_card2"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards5","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards6","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards7","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards8","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards9","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":54,"x":63,"var":"btn_menu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_cd.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":144,"x":63,"var":"btn_cards","stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/tu_tj1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":54,"x":1217,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":50,"x":1118,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Effect_zqp","props":{"y":574,"x":527,"runtime":"ui.ajqp.game_ui.ebgang.component.Effect_zqpUI"}},{"type":"Effect_zqp","props":{"y":284,"x":129,"runtime":"ui.ajqp.game_ui.ebgang.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":282,"x":1058,"runtime":"ui.ajqp.game_ui.ebgang.component.Effect_yqpUI"}},{"type":"Effect_yqp","props":{"y":46,"x":639,"runtime":"ui.ajqp.game_ui.ebgang.component.Effect_yqpUI"}},{"type":"Effect_xscx","props":{"y":232,"x":539,"runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xscxUI"}},{"type":"Effect_xs","props":{"y":266,"x":2,"var":"view_showcard3","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":557,"x":399,"var":"view_showcard0","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":263,"x":1143,"var":"view_showcard1","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":29,"x":731,"var":"view_showcard2","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Chongzhi","props":{"y":652,"x":1209,"var":"btn_chongzhi","anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}},{"type":"Effect_skz","props":{"y":424,"x":22,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":427,"x":1161,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":184,"x":745,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}}]},{"type":"Effect_kaishiyouxi","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI"}},{"type":"Effect_nyl","props":{"centerY":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_nylUI"}},{"type":"Effect_zjtp","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI"}},{"type":"Effect_zjts","props":{"runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI",ui.ajqp.game_ui.tongyong.effect.Effect_zjtsUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.PaiXingUI",ui.ajqp.game_ui.ebgang.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.WanJia_RUI",ui.ajqp.game_ui.ebgang.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.WanJia_LUI",ui.ajqp.game_ui.ebgang.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ShaiZiUI",ui.ajqp.game_ui.tongyong.effect.ShaiZiUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_zqpUI",ui.ajqp.game_ui.ebgang.component.Effect_zqpUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangqzUI",ui.ajqp.game_ui.tongyong.TouXiangqzUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_xscxUI",ui.ajqp.game_ui.ebgang.component.Effect_xscxUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_xsUI",ui.ajqp.game_ui.ebgang.component.Effect_xsUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_skzUI",ui.ajqp.game_ui.tongyong.effect.Effect_skzUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI",ui.ajqp.game_ui.tongyong.effect.Effect_kaishiyouxiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_nylUI",ui.ajqp.game_ui.tongyong.effect.Effect_nylUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI",ui.ajqp.game_ui.tongyong.effect.Effect_zjtpUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_yqpUI",ui.ajqp.game_ui.ebgang.component.Effect_yqpUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.EBGangUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang {
    export class EBGang_GuiZeUI extends View {
		public btn_tab:Laya.Tab;
		public panel_rule:Laya.Panel;
		public lab_wanfa:Laya.Image;
		public panel_type:Laya.Panel;
		public lab_type:Laya.Image;
		public lab_settle:Laya.Image;
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":0,"x":0,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"Image","props":{"y":23,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":54,"x":0,"width":168,"var":"btn_tab","height":252},"child":[{"type":"Button","props":{"y":0,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":84,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item1"}},{"type":"Button","props":{"y":168,"x":0,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jsjf.png","name":"item2"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"ebgang_ui/game_ui/ebgang/guize_1.png"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_type","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_type","skin":"ebgang_ui/game_ui/ebgang/guize_2.png"}}]},{"type":"Image","props":{"y":54,"x":170,"var":"lab_settle","skin":"ebgang_ui/game_ui/ebgang/guize_3.png"}}]},{"type":"Button","props":{"y":122,"x":1035,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI",ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.EBGang_GuiZeUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang {
    export class EBGang_HUDUI extends View {
		public view_hud:ui.ajqp.game_ui.tongyong.HudUI;
		public box_right:Laya.Box;
		public img_room0:Laya.Box;
		public txt_difen0:Laya.Label;
		public txt_least0:Laya.Label;
		public img_room1:Laya.Box;
		public txt_difen1:Laya.Label;
		public txt_least1:Laya.Label;
		public img_room2:Laya.Box;
		public txt_difen2:Laya.Label;
		public txt_least2:Laya.Label;
		public img_room3:Laya.Box;
		public txt_difen3:Laya.Label;
		public txt_least3:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1280,"staticCache":false,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"y":0,"x":0,"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":206,"x":29,"width":1233,"var":"box_right","height":300},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_cjc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least0","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_xzc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least1","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_lbc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least2","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_fhc.png"}},{"type":"Label","props":{"y":244,"x":92,"width":55,"text":"底分:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":92,"width":55,"text":"准入:","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":244,"x":153,"width":54,"var":"txt_difen3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":276,"x":153,"width":54,"var":"txt_least3","text":"9999","strokeColor":"#ffffff","stroke":0.2,"height":25,"fontSize":24,"color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"y":642,"width":1280,"height":60,"centerX":0},"child":[{"type":"Image","props":{"y":13,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":40}},{"type":"Image","props":{"y":30,"x":220,"skin":"ebgang_ui/game_ui/ebgang/zjh_title.png","anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":142,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.HudUI",ui.ajqp.game_ui.tongyong.HudUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.EBGang_HUDUI.uiView);
        }
    }
}

module ui.ajqp.game_ui.ebgang {
    export class JieSuanUI extends View {
		public lab_xinxi:Laya.Label;
		public list_settle:Laya.List;
		public btn_continue:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"JieSuan_1","props":{"runtime":"ui.ajqp.game_ui.tongyong.JieSuan_1UI"}},{"type":"Box","props":{"width":1280,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":546,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"50S后开始第00局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":235,"x":296,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":233,"x":504,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":234,"x":715,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":235,"x":928,"wordWrap":true,"width":63,"text":"金币","leading":6,"height":23,"fontSize":24,"color":"#f1cd82","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"width":1280,"var":"list_settle","spaceY":2,"repeatY":6,"height":243,"centerY":13,"centerX":0},"child":[{"type":"JieSuanRender","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.JieSuanRenderUI"}}]},{"type":"Button","props":{"y":631,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_an.png","sizeGrid":"18,33,31,30","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":24,"x":66,"width":152,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png","height":38}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuan_1UI",ui.ajqp.game_ui.tongyong.JieSuan_1UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuanRenderUI",ui.ajqp.game_ui.tongyong.JieSuanRenderUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.JieSuanUI.uiView);
        }
    }
}
