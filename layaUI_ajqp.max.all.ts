
module ui.ajqp.game_ui.ebgang.component {
    export class Effect_xqpUI extends View {
		public ani1:Laya.FrameAnimation;
		public box_qiang:Laya.Box;
		public banker_clip:Laya.Clip;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public bet_clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":0,"x":78,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":0,"anchorX":0.8},"compId":4,"child":[{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_cz1.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":50,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":4,"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":9,"x":64,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":9,"x":22,"width":43,"height":20},"child":[{"type":"Clip","props":{"var":"banker_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz1.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":11,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":16,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":9,"x":66,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":15,"x":44,"width":38,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"bet_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz.png","clipX":10,"centerY":0,"centerX":0}}]}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":6,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":6,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":16,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":26,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.component.Effect_xqpUI.uiView);
        }
    }
}

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
		public banker_clip:Laya.Clip;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public bet_clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":60,"x":77,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":0.9,"anchorX":0.8},"compId":4,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_cz.png"}},{"type":"Box","props":{"y":32,"x":49,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":4,"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":9,"x":64,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":9,"x":22,"width":43,"height":20},"child":[{"type":"Clip","props":{"var":"banker_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz1.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":33,"x":48,"width":84,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":11,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":33,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":14,"x":15,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":8,"x":65,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":15,"x":42,"width":38,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"bet_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz.png","clipX":10,"centerY":0,"centerX":0}}]}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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
		public banker_clip:Laya.Clip;
		public box_buqiang:Laya.Box;
		public box_bet:Laya.Box;
		public bet_clip:Laya.Clip;

        public static  uiView:any ={"type":"View","props":{"width":97,"height":67},"child":[{"type":"Box","props":{"y":67,"x":19,"width":97,"scaleY":1,"scaleX":1,"height":67,"anchorY":1,"anchorX":0.2},"compId":4,"child":[{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_cz.png","scaleX":-1,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Box","props":{"y":34,"x":50,"width":84,"var":"box_qiang","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":4,"x":0,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_1.png"}},{"type":"Image","props":{"y":9,"x":64,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":9,"x":22,"width":43,"height":20},"child":[{"type":"Clip","props":{"var":"banker_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz1.png","clipX":10,"centerY":0,"centerX":0}}]}]},{"type":"Box","props":{"y":34,"x":49,"width":84,"var":"box_buqiang","height":32,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":2,"x":11,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_0.png"}}]},{"type":"Box","props":{"y":35,"x":49,"width":86,"var":"box_bet","height":30,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":15,"x":16,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/tu_xia.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":9,"x":66,"skin":"ebgang_ui/game_ui/ebgang/effect/qp/qiang_b.png"}},{"type":"Box","props":{"y":15,"x":44,"width":38,"height":27,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Clip","props":{"var":"bet_clip","skin":"ebgang_ui/game_ui/ebgang/effect/qp/clip_sz.png","clipX":10,"centerY":0,"centerX":0}}]}]}]}],"animations":[{"nodes":[{"target":4,"keyframes":{"y":[{"value":61,"tweenMethod":"linearNone","tween":false,"target":4,"key":"y","index":0},{"value":55,"tweenMethod":"linearNone","tween":false,"target":4,"label":null,"key":"y","index":5},{"value":55,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":6},{"value":45,"tweenMethod":"linearNone","tween":true,"target":4,"key":"y","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":4,"label":null,"key":"y","index":27}],"scaleY":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":5}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":0},{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":94,"var":"img_frame","runtime":"ui.ajqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":135,"x":176,"var":"view_type","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":370,"height":180},"child":[{"type":"Ying_2","props":{"y":43,"x":87,"visible":false,"var":"img_frame","runtime":"ui.ajqp.game_ui.ebgang.component.Ying_2UI"}},{"type":"PaiXing","props":{"y":139,"x":194,"visible":false,"var":"view_type","scaleY":0.8,"scaleX":0.8,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":365,"height":178},"child":[{"type":"Image","props":{"y":69,"x":95,"width":350,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":163,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"y":69,"x":95,"width":350,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":163,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":1,"x":77,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_win.png","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":4},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":6}],"scaleX":[{"value":1,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":1.3,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":4},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":6}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":4}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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

        public static  uiView:any ={"type":"View","props":{"width":175,"height":140},"child":[{"type":"Image","props":{"width":175,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":125,"centerY":-2,"centerX":0,"anchorY":0.5,"anchorX":0.5},"compId":2},{"type":"Image","props":{"width":175,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_ying01.png","sizeGrid":"30,30,30,30","height":125,"centerY":-2,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":1},"compId":3},{"type":"Image","props":{"y":7,"x":44,"skin":"tongyong_ui/game_ui/tongyong/nyl/tu_win.png","scaleY":0.55,"scaleX":0.55,"anchorY":0.5,"anchorX":0.5},"compId":4}],"animations":[{"nodes":[{"target":2,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleY","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleY","index":6}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"scaleX","index":0},{"value":1.15,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":4},{"value":1,"tweenMethod":"linearNone","tween":true,"target":2,"label":null,"key":"scaleX","index":6}]}},{"target":3,"keyframes":{"scaleY":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":0},{"value":1.1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleY","index":4}],"scaleX":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":0},{"value":1.2,"tweenMethod":"linearNone","tween":true,"target":3,"key":"scaleX","index":4}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0.3,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":3},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":5}]}},{"target":4,"keyframes":{"scaleY":[{"value":0.55,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleY","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":5},{"value":0.55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleY","index":7}],"scaleX":[{"value":0.55,"tweenMethod":"linearNone","tween":false,"target":4,"key":"scaleX","index":0},{"value":0.7,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":5},{"value":0.55,"tweenMethod":"linearNone","tween":true,"target":4,"key":"scaleX","index":7}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":false,"target":4,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":4,"key":"alpha","index":5}]}}],"name":"ani1","id":1,"frameRate":24,"action":0}]};
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
		public view_head0:ui.ajqp.game_ui.tongyong.TouXiangqzUI;
		public box_tips:Laya.Box;
		public bg_tips:Laya.Image;
		public txt_tips:Laya.Label;
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
		public box_opt3:ui.ajqp.game_ui.ebgang.component.Effect_zqpUI;
		public box_opt1:ui.ajqp.game_ui.ebgang.component.Effect_yqpUI;
		public ani_first:ui.ajqp.game_ui.ebgang.component.Effect_xscxUI;
		public view_first3:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_first0:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_first1:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_first2:ui.ajqp.game_ui.ebgang.component.Effect_xsUI;
		public view_think3:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public view_think1:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public view_think2:ui.ajqp.game_ui.tongyong.effect.Effect_skzUI;
		public box_opt0:ui.ajqp.game_ui.ebgang.component.Effect_zqpUI;
		public box_opt2:ui.ajqp.game_ui.ebgang.component.Effect_yqpUI;
		public box_top_left:Laya.Box;
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
		public btn_cards:Laya.Button;
		public img_menu:Laya.Image;
		public btn_rules:Laya.Button;
		public btn_record:Laya.Button;
		public btn_set:Laya.Button;
		public btn_menu:Laya.Button;
		public box_top_right:Laya.Box;
		public btn_qifu:Laya.Button;
		public btn_back:Laya.Button;
		public box_bottom_right:Laya.Box;
		public btn_chongzhi:ui.ajqp.game_ui.tongyong.effect.ChongzhiUI;
		public box_room_left:Laya.Box;
		public text_round:laya.display.Text;
		public text_roomtype:laya.display.Text;
		public text_info:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":360,"x":640,"width":1280,"var":"box_view","mouseEnabled":true,"height":720,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"TouXiangqz","props":{"y":568,"var":"view_head0","centerX":-176,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"Box","props":{"y":460,"width":687,"visible":false,"var":"box_tips","height":41,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":319.5,"width":350,"var":"bg_tips","skin":"ebgang_ui/game_ui/ebgang/tu_h.png","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"alpha":0.5}},{"type":"Label","props":{"width":400,"var":"txt_tips","text":"请选择本局能承受的最大赔付倍数进行抢庄","height":21,"fontSize":20,"color":"#dadada","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}}]},{"type":"TouXiangqz","props":{"y":277,"var":"view_head1","right":20,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":38,"var":"view_head2","right":438,"runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"TouXiangqz","props":{"y":277,"x":18,"var":"view_head3","runtime":"ui.ajqp.game_ui.tongyong.TouXiangqzUI"}},{"type":"PaiXing","props":{"y":677,"x":609,"width":160,"var":"view_player0","scaleY":0.8,"scaleX":0.8,"height":80,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.ebgang.component.PaiXingUI"}},{"type":"WanJia_R","props":{"y":246,"var":"view_player1","right":35,"runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_R","props":{"y":7,"var":"view_player2","right":453,"runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_RUI"}},{"type":"WanJia_L","props":{"y":250,"x":28,"var":"view_player3","runtime":"ui.ajqp.game_ui.ebgang.component.WanJia_LUI"}},{"type":"Box","props":{"y":518,"width":937,"var":"box_banker","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_banker_no","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_2.png","labelColors":"#ffffff"},"child":[{"type":"Image","props":{"y":32,"x":94,"skin":"ebgang_ui/game_ui/ebgang/tu_bqz.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":0,"x":188,"var":"btn_banker1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_banker1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":375,"var":"btn_banker2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_banker2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":563,"var":"btn_banker3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_banker3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":750,"var":"btn_banker4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_banker4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]}]},{"type":"Box","props":{"y":516,"width":937,"var":"box_bet","height":59,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"btn_bet1","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff","disabled":false},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_bei1","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":188,"var":"btn_bet2","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_bei2","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":375,"var":"btn_bet3","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_bei3","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":563,"var":"btn_bet4","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_bei4","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]},{"type":"Button","props":{"y":0,"x":750,"var":"btn_bet5","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-4","labelColors":"#ffffff"},"child":[{"type":"Box","props":{"y":18,"x":18,"width":150,"height":31},"child":[{"type":"Clip","props":{"var":"clip_bei5","skin":"tongyong_ui/game_ui/tongyong/general/clip_bs.png","index":1,"clipX":11,"centerY":0,"centerX":0}}]}]}]},{"type":"DaoJiShi","props":{"y":311,"x":640,"var":"img_time","scaleY":1.2,"scaleX":1.2,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.DaoJiShiUI"}},{"type":"Button","props":{"width":230,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_5.png","sizeGrid":"0,20,0,20","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelColors":"#ffffff","height":90,"centerY":40,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":22,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png","centerX":0}}]},{"type":"ShaiZi","props":{"var":"view_dice","centerY":-102,"centerX":0,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ShaiZiUI"}},{"type":"Effect_zqp","props":{"y":261,"x":126,"var":"box_opt3","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":241,"x":1052,"var":"box_opt1","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_yqpUI"}},{"type":"Effect_xscx","props":{"y":232,"x":539,"var":"ani_first","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xscxUI"}},{"type":"Effect_xs","props":{"y":260,"x":2,"var":"view_first3","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":551,"x":399,"var":"view_first0","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":259,"x":1143,"var":"view_first1","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_xs","props":{"y":20,"x":731,"var":"view_first2","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_xsUI"}},{"type":"Effect_skz","props":{"y":424,"x":22,"var":"view_think3","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":427,"x":1161,"var":"view_think1","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_skz","props":{"y":184,"x":745,"var":"view_think2","runtime":"ui.ajqp.game_ui.tongyong.effect.Effect_skzUI"}},{"type":"Effect_zqp","props":{"y":551,"x":523,"var":"box_opt0","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_zqpUI"}},{"type":"Effect_yqp","props":{"y":19,"x":636,"var":"box_opt2","runtime":"ui.ajqp.game_ui.ebgang.component.Effect_yqpUI"}}]},{"type":"Box","props":{"width":112,"var":"box_top_left","top":0,"mouseThrough":true,"left":14,"height":337,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":130,"x":86,"width":253,"var":"box_cards","height":141,"anchorY":0.25},"child":[{"type":"Image","props":{"y":143,"x":10,"width":237,"skin":"tongyong_ui/game_ui/tongyong/general/tu_kk.png","sizeGrid":"78,0,24,27","scaleX":-1,"height":140,"anchorY":1,"anchorX":1}},{"type":"Image","props":{"y":14,"x":28,"skin":"ebgang_ui/game_ui/ebgang/tu_tj.png"}},{"type":"Box","props":{"y":104,"x":48,"var":"box_text_card1"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards0","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards1","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards2","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards3","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards4","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]},{"type":"Box","props":{"y":45,"x":48,"var":"box_text_card2"},"child":[{"type":"Text","props":{"x":168,"wordWrap":true,"width":18,"var":"text_cards5","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":126,"wordWrap":true,"width":18,"var":"text_cards6","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":85,"wordWrap":true,"width":18,"var":"text_cards7","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"x":42,"wordWrap":true,"width":18,"var":"text_cards8","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Text","props":{"wordWrap":true,"width":18,"var":"text_cards9","text":"0","strokeColor":"#7c3600","stroke":4,"leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Button","props":{"y":144,"x":53,"var":"btn_cards","stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/tu_tj1.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":84,"x":56,"var":"img_menu","skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_1.png","sizeGrid":"20,20,20,20","anchorY":0,"anchorX":0.5},"child":[{"type":"Image","props":{"y":94,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Image","props":{"y":175,"x":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/cd_2.png"}},{"type":"Button","props":{"y":55,"x":56,"var":"btn_rules","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gz.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":136,"x":56,"var":"btn_record","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_zj.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":217,"x":56,"var":"btn_set","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_sz.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Button","props":{"y":53,"x":53,"var":"btn_menu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_cd.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":178,"var":"box_top_right","top":16,"right":28,"height":76,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":35,"x":42.5,"var":"btn_qifu","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_qf.png","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":38,"x":140.5,"var":"btn_back","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh1.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"width":121,"var":"box_bottom_right","right":12,"height":125,"bottom":0},"child":[{"type":"Chongzhi","props":{"y":63,"x":61,"var":"btn_chongzhi","scaleY":0.85,"scaleX":0.85,"anchorY":0.5,"anchorX":0.5,"runtime":"ui.ajqp.game_ui.tongyong.effect.ChongzhiUI"}}]},{"type":"Box","props":{"width":360,"var":"box_room_left","top":-1,"left":115,"height":39},"child":[{"type":"Image","props":{"y":0,"x":0,"width":360,"skin":"tongyong_ui/game_ui/tongyong/general/tu_pjhd.png","sizeGrid":"0,10,0,10","height":39}},{"type":"Text","props":{"y":42,"x":136,"wordWrap":false,"width":170,"visible":true,"var":"text_round","text":"局数：X/Y","leading":6,"height":25,"fontSize":20,"color":"#dadada","align":"left"}},{"type":"Text","props":{"y":42,"x":7,"wordWrap":false,"width":190,"var":"text_roomtype","text":"底注：1000","leading":6,"height":25,"fontSize":20,"color":"#dadada","align":"left"}},{"type":"Text","props":{"y":8,"x":0,"wordWrap":false,"width":360,"var":"text_info","valign":"middle","text":"牌局号：123456789012345678900004","leading":6,"height":24,"fontSize":20,"color":"#ffffff","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.TouXiangqzUI",ui.ajqp.game_ui.tongyong.TouXiangqzUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ChongzhiUI",ui.ajqp.game_ui.tongyong.effect.ChongzhiUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.WanJia_RUI",ui.ajqp.game_ui.ebgang.component.WanJia_RUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.WanJia_LUI",ui.ajqp.game_ui.ebgang.component.WanJia_LUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.DaoJiShiUI",ui.ajqp.game_ui.tongyong.DaoJiShiUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.ShaiZiUI",ui.ajqp.game_ui.tongyong.effect.ShaiZiUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.PaiXingUI",ui.ajqp.game_ui.ebgang.component.PaiXingUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_yqpUI",ui.ajqp.game_ui.ebgang.component.Effect_yqpUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_xscxUI",ui.ajqp.game_ui.ebgang.component.Effect_xscxUI);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_xsUI",ui.ajqp.game_ui.ebgang.component.Effect_xsUI);
			View.regComponent("ui.ajqp.game_ui.tongyong.effect.Effect_skzUI",ui.ajqp.game_ui.tongyong.effect.Effect_skzUI);
			View.regComponent("Text",laya.display.Text);
			View.regComponent("ui.ajqp.game_ui.ebgang.component.Effect_zqpUI",ui.ajqp.game_ui.ebgang.component.Effect_zqpUI);

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

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":110,"x":232,"width":816,"height":504,"centerX":0},"child":[{"type":"ZhongKuang","props":{"y":-110,"x":-232,"centerX":0,"runtime":"ui.ajqp.game_ui.tongyong.effect.ZhongKuangUI"}},{"type":"Image","props":{"y":23,"x":408,"skin":"tongyong_ui/game_ui/tongyong/hud/tit_game_rule.png","anchorY":0.5,"anchorX":0.5}},{"type":"Tab","props":{"y":54,"x":0,"width":168,"var":"btn_tab","height":252},"child":[{"type":"Button","props":{"y":0,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_wjjs.png","name":"item0"}},{"type":"Button","props":{"y":85,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_pxdx.png","name":"item1"}},{"type":"Button","props":{"y":170,"x":3,"stateNum":2,"skin":"tongyong_ui/game_ui/tongyong/dating/btn_jsjf.png","name":"item2"}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_rule","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_wanfa","skin":"ebgang_ui/game_ui/ebgang/guize_1.png","height":520}}]},{"type":"Panel","props":{"y":54,"x":170,"width":647,"var":"panel_type","height":450},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"lab_type","skin":"ebgang_ui/game_ui/ebgang/guize_2.png","height":592}}]},{"type":"Image","props":{"y":54,"x":170,"var":"lab_settle","skin":"ebgang_ui/game_ui/ebgang/guize_3.png"}},{"type":"Button","props":{"y":12,"x":803,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_gb.png","anchorY":0.5,"anchorX":0.5}}]}]};
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

        public static  uiView:any ={"type":"View","props":{"width":1280,"staticCache":false,"height":720},"child":[{"type":"Image","props":{"top":-1,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_bj.png","right":-1,"left":-1,"bottom":-1}},{"type":"Hud","props":{"y":0,"x":0,"var":"view_hud","top":0,"runtime":"ui.ajqp.game_ui.tongyong.HudUI","right":0,"left":0,"bottom":0}},{"type":"Box","props":{"y":206,"width":1233,"var":"box_right","height":300,"centerX":0},"child":[{"type":"Box","props":{"y":0,"x":0,"width":300,"var":"img_room0","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_cjc.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen0","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least0","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}}]},{"type":"Box","props":{"y":0,"x":311,"width":300,"var":"img_room1","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_xzc.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen1","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least1","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}}]},{"type":"Box","props":{"y":0,"x":622,"width":300,"var":"img_room2","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_lbc.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least2","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}}]},{"type":"Box","props":{"y":0,"x":933,"width":300,"var":"img_room3","height":300},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ebgang_ui/game_ui/ebgang/btn_fhc.png"}},{"type":"Label","props":{"y":220,"x":155,"width":54,"var":"txt_difen3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":246,"x":155,"width":54,"var":"txt_least3","height":22,"fontSize":22,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":246,"x":104,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_zr.png"}},{"type":"Image","props":{"y":220,"x":103,"skin":"tongyong_ui/game_ui/tongyong/hud/tu_df.png"}}]}]},{"type":"Image","props":{"skin":"ebgang_ui/game_ui/ebgang/zjh_title.png","left":163,"bottom":33,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":21,"x":142,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":21,"x":-29,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/di.png","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"skin":"tongyong_ui/game_ui/tongyong/hud/tu_wrzx.png","right":30,"bottom":33}}]};
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
		public btn_close:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"width":1280,"height":427,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"JieSuan_1","props":{"y":-154,"x":0,"runtime":"ui.ajqp.game_ui.tongyong.JieSuan_1UI"}},{"type":"Label","props":{"y":391,"wordWrap":true,"width":495,"var":"lab_xinxi","text":"50S后开始第00局，本轮共5局","leading":6,"height":23,"fontSize":20,"color":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":102,"x":375,"wordWrap":true,"width":63,"text":"昵称","leading":6,"height":24,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":587,"wordWrap":true,"width":63,"text":"底分","leading":6,"height":24,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":794,"wordWrap":true,"width":63,"text":"倍数","leading":6,"height":24,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":103,"x":1003,"wordWrap":true,"width":63,"text":"金币","leading":6,"height":24,"fontSize":24,"color":"#f1cd82","anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"List","props":{"width":1280,"var":"list_settle","spaceY":2,"repeatY":6,"height":250,"centerY":33,"centerX":0},"child":[{"type":"JieSuanRender","props":{"y":0,"x":0,"name":"render","runtime":"ui.ajqp.game_ui.tongyong.JieSuanRenderUI"}}]},{"type":"Button","props":{"y":487,"var":"btn_continue","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_an.png","sizeGrid":"18,33,31,30","labelStrokeColor":"#9d8c27","labelStroke":2,"labelSize":26,"labelPadding":"-6","labelFont":"Microsoft YaHei","labelColors":"#ffffff","centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":24,"x":66,"width":152,"skin":"tongyong_ui/game_ui/tongyong/general/tu_jxyx.png","height":38}}]},{"type":"Button","props":{"y":16,"x":1190,"var":"btn_close","stateNum":1,"skin":"tongyong_ui/game_ui/tongyong/general/anniu/btn_fh.png","anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuan_1UI",ui.ajqp.game_ui.tongyong.JieSuan_1UI);
			View.regComponent("ui.ajqp.game_ui.tongyong.JieSuanRenderUI",ui.ajqp.game_ui.tongyong.JieSuanRenderUI);

            super.createChildren();
            this.createView(ui.ajqp.game_ui.ebgang.JieSuanUI.uiView);
        }
    }
}
