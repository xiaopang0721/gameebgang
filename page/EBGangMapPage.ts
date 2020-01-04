/**
* 二八杠-房间
*/
module gameebgang.page {
    const BANKER_RATE_DEFAULT = [0, 3, 0, 0, 0];     //抢庄的默认倍数;
    //音效url
    const MUSIC_PATH = {
        musicBGM: "28g_BGM.mp3",
        musicSendCard: "bar_send_card.mp3",
        musicOpenCard: "bar_open_card.mp3",
        musicDice: "bar_throw_dice.mp3",
        musicFlyChip: "chouma_fly.mp3",
        musicBanker: "dingzhuang.mp3",
        musicRandBanker: "suijizhuangjia.mp3",
        musicStart: "start.mp3",
        loseMusic: "lose",
        winMusic: "win",
    }
    const enum MAP_STATUS {
        MAP_STATE_NONE = 0, 	//初始化
        MAP_STATE_CARDROOM_CREATED = 1, 	//房卡等人中
        MAP_STATE_CARDROOM_WAIT = 2,		//房卡等人中
        MAP_STATE_SHUFFLE = 3,		//洗牌中
        MAP_STATE_DEAL = 4,		//准备发牌
        MAP_STATE_BANKER = 5,		//准备开始抢庄
        MAP_STATE_SET_BANKER = 6,		//抢庄定庄动画
        MAP_STATE_BET = 7,		//准备下注
        MAP_STATE_AFTER_BET = 8,		//准备下注
        MAP_STATE_CHOOSE_SHOW_CARDS = 9,		//选择开牌顺序
        MAP_STATE_SORT_SHOW_CARDS = 10,	//摆牌
        MAP_STATE_BEFORE_SHOW_CARDS = 11,	//准备开牌
        MAP_STATE_SHOW_CARDS = 12,	//开牌
        MAP_STATE_COMPARE = 13,	//准备比牌
        MAP_STATE_SETTLE = 14,	//准备结算
        MAP_STATE_SETTLEING = 15,	//结算中
        MAP_STATE_WAIT = 16,	//等待下一局开始
        MAP_STATE_END = 17,	//结束
    }
    export class EBGangMapPage extends game.gui.base.Page {
        private _viewUI: ui.ajqp.game_ui.ebgang.EBGangUI;
        private _mapInfo: EBGangMapInfo;
        private _EBGangMgr: EBGangMgr;
        private _EBGangStory: EBGangStory;
        private _battleIndex: number = -1;
        private _kuang: LImage;//随机庄家框
        private _curState: number; //当前地图状态
        private _countDown: number; //倒计时结束时间
        private _bankerRate: Array<number> = [0, 3, 0, 0, 0]; // 抢庄倍数  固定3倍起
        private _betRate: Array<number> = [1, 0, 0, 0, 0]; // 下注倍数  固定3倍起
        private _bankerTemp: any = [];  //所有抢庄的人
        private _mainIdx: number = 0;   //主玩家座位号
        private _bankerIdx: number = 0; //庄家位置
        private _bankerBet: number = 0; //庄家抢庄倍数
        private _chips: Array<Array<EBGangChip>> = new Array<Array<EBGangChip>>();//所有筹码 
        private _chipSortScore: number = 0;//筹码层级
        private _showCardDice1: number = 1; // 开牌顺序1(逆时针)
        private _showCardDice2: number = 1; // 开牌顺序2(逆时针)
        private _showCardCountList: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];  // 已出牌数量统计
        private _unitCards: any = []; // 所有精灵拿到的牌  
        private _unitBets: any = [];    //所有精灵下注倍数  庄家为抢庄倍数
        private _settleWinInfo: any = [];  //结算信息,闲家赢 index是座位号
        private _settleLoseInfo: any = [];  //结算信息，闲家输 index是座位号
        private _settleInfo: any = [];  //所有结算信息 index是座位号
        private _betTemps: any = [];    //除庄家外各个精灵下注倍数
        private _bankerMoneyChange: number; //庄家结算金币
        private _moneyChange: number;   //主玩家金币变化
        private _totalPoint: Array<number> = [0, 0, 0, 0, 0];  // 当前玩家累计积分 分别是座位号-积分值 
        private _chipIndex: number = 1; // 桌上筹码的显示层级
        private _isPlaying: boolean = false;    //是否进行中
        private _isGameEnd: boolean = false;    //是否本局游戏结束
        private _ui_tongyong_effect_shanzi = PathGameTongyong.ui_tongyong_general + "effect/shaizi/shaizi%s.png" // 决定出牌顺序时的骰子
        private _clipList: Array<EbgangClip> = [];//飘字
        private _imgdiList: Array<LImage> = [];//飘字底

        constructor(v: Game, onOpenFunc?: Function, onCloseFunc?: Function) {
            super(v, onOpenFunc, onCloseFunc);
            this._isNeedDuang = false;
            this._asset = [
                DatingPath.atlas_dating_ui + "qifu.atlas",
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
                PathGameTongyong.atlas_game_ui_tongyong_general + "anniu.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "skz.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "shaizi.atlas",
                PathGameTongyong.atlas_game_ui_tongyong_general_effect + "hulu.atlas",
            ];
        }

        // 页面初始化函数
        protected init(): void {
            this._viewUI = this.createView('game_ui.ebgang.EBGangUI');
            this.addChild(this._viewUI);
            if (!this._pageHandle) {
                this._pageHandle = PageHandle.Get("EBGangMapPage");//额外界面控制器
            }
            if (!this._EBGangMgr) {
                this._EBGangStory = this._game.sceneObjectMgr.story as EBGangStory;
                this._EBGangMgr = this._EBGangStory.ebgMgr;
                this._EBGangMgr.on(EBGangMgr.CONTINUE_GAME, this, this.onClickContinueGame);
            }
            this._game.playMusic(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicBGM);
        }

        // 页面打开时执行函数
        protected onOpen(): void {
            super.onOpen();
            //api充值不显示
            this._viewUI.btn_chongzhi.visible = !WebConfig.enterGameLocked;

            this.initBeiClip();
            this.updateViewUI();
            this.onUpdateUnitOffline();
            this.resetData();
            if (this._EBGangStory.isReConnected) {
                this.onUpdateMapInfo();
            } else {
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }

            this._viewUI.view_dice.ani1.on(LEvent.COMPLETE, this, this.afterDicePlay);
            this._game.qifuMgr.on(QiFuMgr.QIFU_FLY, this, this.qifuFly);

            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.on(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

            this._viewUI.btn_menu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_back.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_rules.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_set.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_record.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_qifu.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_banker1.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_banker2.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_banker3.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_banker4.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_banker_no.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_cards.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_chongzhi.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            this._viewUI.btn_continue.on(LEvent.CLICK, this, this.onBtnClickWithTween);
            for (let i = 1; i < 6; i++) {
                this._viewUI["btn_bet" + i] && this._viewUI["btn_bet" + i].on(LEvent.CLICK, this, this.onBet, [i]);
            }
        }

        protected layout(): void {
            super.layout();
            if (this._viewUI) {
                //全面屏
                if (this._game.isFullScreen) {
                    this._viewUI.box_top_left.left = 14 + 56;
                    this._viewUI.box_room_left.left = 115 + 56;
                    this._viewUI.box_top_right.right = 28 + 56;
                    this._viewUI.box_bottom_right.right = 12 + 56;
                } else {
                    this._viewUI.box_top_left.left = 14;
                    this._viewUI.box_room_left.left = 115;
                    this._viewUI.box_top_right.right = 28;
                    this._viewUI.box_bottom_right.right = 12;
                }
            }
        }

        //倍数
        private _beiClip1: EbgangClip;
        private _beiClip2: EbgangClip;
        private _beiClip3: EbgangClip;
        private _beiClip4: EbgangClip;
        private _beiClip5: EbgangClip;
        //抢庄倍数
        private _bankerClip1: EbgangClip;
        private _bankerClip2: EbgangClip;
        private _bankerClip3: EbgangClip;
        private _bankerClip4: EbgangClip;
        initBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                this["_beiClip" + i] = new EbgangClip(EbgangClip.BEI_FONT);
                this["_beiClip" + i].centerX = this._viewUI["clip_bei" + i].centerX;
                this["_beiClip" + i].centerY = this._viewUI["clip_bei" + i].centerY;
                this._viewUI["clip_bei" + i].parent.addChild(this["_beiClip" + i]);
                this._viewUI["clip_bei" + i].visible = false;
            }
            for (let i = 1; i < 5; i++) {
                this["_bankerClip" + i] = new EbgangClip(EbgangClip.BEI_FONT);
                this["_bankerClip" + i].centerX = this._viewUI["clip_banker" + i].centerX;
                this["_bankerClip" + i].centerY = this._viewUI["clip_banker" + i].centerY;
                this._viewUI["clip_banker" + i].parent.addChild(this["_bankerClip" + i]);
                this._viewUI["clip_banker" + i].visible = false;
            }
        }

        clearBeiClip(): void {
            for (let i = 1; i < 6; i++) {
                if (this["_beiClip" + i]) {
                    this["_beiClip" + i].removeSelf();
                    this["_beiClip" + i].destroy();
                    this["_beiClip" + i] = null;
                }
            }
            for (let i = 1; i < 5; i++) {
                if (this["_bankerClip" + i]) {
                    this["_bankerClip" + i].removeSelf();
                    this["_bankerClip" + i].destroy();
                    this["_bankerClip" + i] = null;
                }
            }
        }

        private _curDiffTime: number;
        update(diff: number) {
            super.update(diff);
            if (!this._curDiffTime || this._curDiffTime < 0) {
                this._viewUI.btn_chongzhi.ani1.play(0, false);
                this._curDiffTime = TongyongPageDef.CZ_PLAY_DIFF_TIME;
            } else {
                this._curDiffTime -= diff;
            }
        }

        //打开时要处理的东西
        private updateViewUI(): void {
            this._viewUI.img_menu.visible = false;
            this.setUITextRound(false);
            for (let i = 0; i < 4; i++) {
                this._viewUI["view_head" + i].visible = false;
            }
            this._kuang = new LImage(PathGameTongyong.ui_tongyong + "qz/k.png");
            this.setGameStartViewUI();
            this.resetBetButtonX(false);
            this.resetBankerButton(false);
        }

        // 游戏回合开始时的UI状态
        private setGameStartViewUI() {
            this._viewUI.box_bet.visible = false;
            this._viewUI.box_banker.visible = false;
            this._viewUI.btn_continue.visible = false;
            this._viewUI.img_time.visible = false;
            this._viewUI.view_dice.visible = false;
            this._viewUI.view_dice.ani1.gotoAndStop(2);
            this._viewUI.box_cards.visible = false;
            this._viewUI.ani_first.visible = false;
            this._viewUI.box_room_left.visible = false;

            for (let i = 0; i < 4; i++) {
                this._viewUI["view_head" + i].img_banker.visible = false;
                this._viewUI["view_head" + i].effWin.visible = false;
                this._viewUI["view_head" + i].clip_money.visible = false;
                this._viewUI["view_player" + i].visible = false;
                this._viewUI["view_first" + i].visible = false;
                this._viewUI["box_opt" + i].visible = false;
                this._viewUI["box_opt" + i].box_qiang.visible = false;
                this._viewUI["box_opt" + i].box_buqiang.visible = false;
                this._viewUI["box_opt" + i].box_bet.visible = false;
                if (i > 0) {
                    this._viewUI["view_player" + i].view_type.visible = false;
                    this._viewUI["view_player" + i].img_frame.visible = false;
                    this._viewUI["view_think" + i].visible = false;
                }
            }
            this.resetBetButtonX(false);
            this.resetBankerButton(false);
        }

        //地图状态
        private onUpdateMapState(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            this.updateCountDown();
            this._viewUI.img_time.visible = false;
            this._curState = this._mapInfo.GetMapState();
            this.setUITextRound(this._curState >= MAP_STATUS.MAP_STATE_CARDROOM_WAIT);
            this.hideBankerTips(this._curState);
            this._isPlaying = this._curState >= MAP_STATUS.MAP_STATE_SHUFFLE && this._curState < MAP_STATUS.MAP_STATE_END;
            this._viewUI.box_tips.visible = this._curState == MAP_STATUS.MAP_STATE_BANKER || this._curState == MAP_STATUS.MAP_STATE_BET;
            switch (this._curState) {
                case MAP_STATUS.MAP_STATE_NONE:
                    this._pageHandle.pushClose({ id: EbgangPageDef.PAGE_EBG_SETTLEMENT, parent: this._game.uiRoot.general });
                    break;
                case MAP_STATUS.MAP_STATE_SHUFFLE:
                    this.setGameStart(this._curState);
                    break;
                case MAP_STATUS.MAP_STATE_BANKER:
                    this._pageHandle.pushClose({ id: EbgangPageDef.PAGE_EBG_BEGIN, parent: this._game.uiRoot.HUD });
                    this.setBankerButtonState(this._curState);
                    for (let i: number = 1; i < 4; i++) {
                        this._viewUI["view_think" + i].visible = true;
                        this._viewUI["view_think" + i].ani1.play(0, true);
                    }
                    break;
                case MAP_STATUS.MAP_STATE_SET_BANKER:
                    this.setRandomBanker();
                    break;
                case MAP_STATUS.MAP_STATE_BET:
                    Laya.timer.clear(this, this.randBanker);
                    this.setBetButtonState(this._curState, mainUnit);
                    for (let i: number = 1; i < 4; i++) {
                        this._viewUI["view_think" + i].visible = i != this.getUIUnitIndex(this._bankerIdx);
                        this._viewUI["view_think" + i].ani1.play(0, true);
                    }
                    break;
                case MAP_STATUS.MAP_STATE_CHOOSE_SHOW_CARDS:
                    Laya.timer.once(400, this, this.setChooseShowCards, [this._curState]);
                    break;
                case MAP_STATUS.MAP_STATE_SORT_SHOW_CARDS:
                    this._viewUI.view_dice.visible = false;
                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicSendCard, false);
                    break;
                case MAP_STATUS.MAP_STATE_COMPARE:
                    break;
                case MAP_STATUS.MAP_STATE_SETTLEING:
                    this.setCardRecord();
                    this.showCardCountList();
                    let isTongSha = this._settleWinInfo.length <= 0;
                    let isTongPei = this._settleLoseInfo.length <= 0;
                    let time_delay = isTongPei || isTongSha ? 1000 : 0;//飘筹码延迟
                    let fly_delay = isTongSha || isTongPei ? 2700 : 1700;//飘字延迟
                    if (isTongSha) {//庄家通杀
                        this._game.playSound(Path_game_ebgang.music_ebgang + "zjtongchi.mp3", false);
                        this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTS, parent: this._game.uiRoot.HUD });
                    } else if (isTongPei) {//庄家通赔
                        // this._game.playSound(Path_game_ebgang.music_ebgang + "zjtongpei.mp3", false);Z
                        this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_ZJTP, parent: this._game.uiRoot.HUD });
                    }
                    //结算飘筹码
                    Laya.timer.once(time_delay, this, () => {
                        this.showSettleEff();
                    });
                    //胜利动画
                    Laya.timer.once(fly_delay, this, () => {
                        if (this._moneyChange >= 0) { //再播你赢了
                            this._pageHandle.pushOpen({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                            let musicType = MathU.randomRange(1, 3);
                            this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.winMusic + musicType + ".mp3", true);
                        } else { //再播你输了
                            let musicType = MathU.randomRange(1, 4);
                            this._game.playSound(PathGameTongyong.music_tongyong + MUSIC_PATH.loseMusic + musicType + ".mp3", true);
                        }
                        this._pageHandle.updatePageHandle();//更新额外界面的开关状态
                        this._pageHandle.reset();//清空额外界面存储数组
                    });
                    break;
                case MAP_STATUS.MAP_STATE_WAIT:
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                    this.onUpdateUnit();
                    //传数据，打开单局结算界面
                    this.openSettlePage();
                    this.resetRoundData();
                    this._EBGangMgr.resetData();
                    break;
                case MAP_STATUS.MAP_STATE_END:
                    this._pageHandle.pushClose({ id: TongyongPageDef.PAGE_TONGYONG_GAMEWIN, parent: this._game.uiRoot.HUD });
                    //传数据，打开单局结算界面
                    this.openSettlePage();
                    this.setGameEnd();
                    break;
                default:
                    break;
            }

            this._pageHandle.updatePageHandle();//更新额外界面的开关状态
            this._pageHandle.reset();//清空额外界面存储数组
        }

        // 房间信息
        private setUITextRound(isVisible) {
            this._viewUI.box_room_left.visible = isVisible;
            this._viewUI.text_info.visible = isVisible;
            this._viewUI.text_roomtype.visible = isVisible;
            this._viewUI.text_round.visible = isVisible;
            if (isVisible) {
                let gameNo = this._mapInfo.GetGameNo();
                let hasGameNo: boolean = gameNo != "";
                this._viewUI.text_info.visible = hasGameNo;
                if (hasGameNo) this._viewUI.text_info.text = "牌局号：" + gameNo;
                let str = "底注：" + EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv];
                this._viewUI.text_roomtype.text = str;
                let total_roundcount: number = EBGangMgr.MAX_ROUND_COUNT;
                this._viewUI.text_round.text = "局数：" + (this._mapInfo.GetRound() + 1).toString() + "/" + total_roundcount.toString();
            }
        }

        // 重置 下注按纽的坐标
        private resetBetButtonX(isVisible: boolean) {
            this._viewUI.btn_bet1.visible = isVisible;
            let _width: number = this._viewUI.btn_bet1.width;
            for (let i = 2; i <= 5; i++) {
                this._viewUI["btn_bet" + i].visible = isVisible;
            }
        }

        private resetBankerButton(isVisible: boolean) {
            this._viewUI.btn_banker_no.visible = true;
            for (let i = 1; i < 5; i++) {
                this._viewUI["btn_banker" + i].visible = isVisible;
            }
        }

        // 抢庄相关的提示
        private hideBankerTips(state: number) {
            this._viewUI.box_banker.visible = this._curState == MAP_STATUS.MAP_STATE_BANKER;
            if (state > MAP_STATUS.MAP_STATE_SET_BANKER) {

            }
        }

        //选择下注倍数
        private onBet(index: number, e: LEvent): void {
            if (e.currentTarget) {
                this._game.uiRoot.btnTween(e.currentTarget);
            }
            //下注按钮的倍数
            this._viewUI.box_bet.visible = false;
            let val = this._betRate[index - 1];
            this._game.network.call_ebgang_bet(val);
        }

        //精灵显示
        private onUpdateUnit(qifu_index?: number): void {
            let mapinfo: EBGangMapInfo = this._mapInfo as EBGangMapInfo;
            if (!mapinfo) return;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let idx = mainUnit.GetIndex();
            if (!idx) return
            for (let index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                let posIdx = (idx + index) % EBGangMgr.MAX_SEATS_COUNT == 0 ? EBGangMgr.MAX_SEATS_COUNT : (idx + index) % EBGangMgr.MAX_SEATS_COUNT;
                let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx)
                let viewHead = this._viewUI["view_head" + index];
                viewHead.visible = unit;
                if (unit) {
                    //庄家存一下
                    if (unit.GetIdentity() == 1) {
                        this._bankerIdx = unit.GetIndex();
                        this._bankerBet = unit.GetLzNum();
                        if (unit.GetIndex() == idx) {
                            this._viewUI.box_bet.visible = false;
                        }
                    }
                    viewHead.txt_name.text = getMainPlayerName(unit.GetName());
                    viewHead.txt_money.text = EnumToString.getPointBackNum(TongyongUtil.getMoneyChange(unit.GetMoney()), 2);
                    //头像框
                    viewHead.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unit.GetHeadKuangImg());
                    viewHead.img_vip.visible = unit.GetVipLevel() > 0;
                    viewHead.img_vip.skin = TongyongUtil.getVipUrl(unit.GetVipLevel());
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        this.playTween(viewHead.qifu_type, qifu_index);
                    }
                    //祈福成功 头像上就有动画
                    if (qifu_index && posIdx == qifu_index) {
                        viewHead.qifu_type.visible = true;
                        viewHead.qifu_type.skin = this._qifuTypeImgUrl;
                        //时间戳变化 才加上祈福标志
                        this.playTween(viewHead.qifu_type, qifu_index);
                        Laya.timer.once(2500, this, () => {
                            viewHead.img_qifu.visible = true;
                            viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                        })
                    }
                    else {
                        viewHead.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unit, this._game.sync.serverTimeBys);
                        viewHead.img_icon.skin = TongyongUtil.getHeadUrl(unit.GetHeadImg(), 2);
                    }
                }
            }
        }

        private _diff: number = 500;
        private _timeList: { [key: number]: number } = {};
        private _firstList: { [key: number]: number } = {};
        private playTween(img: LImage, index: number, isTween?: boolean) {
            if (!img) return;
            if (!this._timeList[index]) {
                this._timeList[index] = 0;
            }
            if (this._timeList[index] >= 2500) {
                this._timeList[index] = 0;
                this._firstList[index] = 0;
                img.visible = false;
                return;
            }
            Laya.Tween.to(img, { alpha: isTween ? 1 : 0.2 }, this._diff, Laya.Ease.linearNone, Handler.create(this, this.playTween, [img, index, !isTween]), this._firstList[index] ? this._diff : 0);
            this._timeList[index] += this._diff;
            this._firstList[index] = 1;
        }

        //地图监听
        private onUpdateMapInfo(): void {
            let mapInfo = this._game.sceneObjectMgr.mapInfo;
            this._mapInfo = mapInfo as EbgangMapInfo;
            if (mapInfo) {
                this._viewUI.btn_continue.visible = false;
                this.onUpdateUnit();
                if (this._EBGangStory.isReConnected) {
                    this._EBGangStory.mapLv = this._mapInfo.GetMapLevel();
                    this.clearAllSeatMoneyClip();
                    // this._game.sceneObjectMgr.clearOfflineObject();
                    this._isGameEnd = false;
                    this.setCardRecord();
                    this.resetBattleIdx();
                    this.updateBattledInfo();
                    this.onUpdateMapState();
                    this.resetBankerHeadIcon();
                    this._EBGangStory.isReConnected = false;
                }
            } else {
                this.onUpdateUnitOffline();
                this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                    this._viewUI.btn_continue.visible = page.dataSource;
                });
                this._viewUI.btn_continue.visible = false;
            }
        }

        //假精灵数据
        private onUpdateUnitOffline() {
            if (!this._EBGangMgr.unitOffline) return;
            let unitOffline = this._EBGangMgr.unitOffline;
            let mPlayer = this._game.sceneObjectMgr.mainPlayer;
            if (unitOffline) {
                this._viewUI.view_head0.visible = true;
                let money;
                if (mPlayer) {
                    if (!mPlayer.playerInfo) return;
                    money = mPlayer.playerInfo.money;
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(mPlayer.playerInfo.nickname);
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(mPlayer.playerInfo.headimg, 2);
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(mPlayer, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(mPlayer.playerInfo.headKuang);
                    //vip标识
                    this._viewUI.view_head0.img_vip.visible = mPlayer.playerInfo.vip_level > 0;
                    this._viewUI.view_head0.img_vip.skin = TongyongUtil.getVipUrl(mPlayer.playerInfo.vip_level);
                } else {
                    money = TongyongUtil.getMoneyChange(unitOffline.GetMoney());
                    this._viewUI.view_head0.txt_name.text = getMainPlayerName(unitOffline.GetName());
                    this._viewUI.view_head0.img_icon.skin = TongyongUtil.getHeadUrl(unitOffline.GetHeadImg(), 2);
                    this._viewUI.view_head0.img_qifu.visible = TongyongUtil.getIsHaveQiFu(unitOffline, this._game.sync.serverTimeBys);
                    //头像框
                    this._viewUI.view_head0.img_txk.skin = TongyongUtil.getTouXiangKuangUrl(unitOffline.GetHeadKuangImg());
                }
                money = EnumToString.getPointBackNum(money, 2);
                this._viewUI.view_head0.txt_money.text = money.toString();
            }
        }

        //获取两位小数
        private GetDoubleFloat(val: number): string {
            let moneyStr: string;
            moneyStr = EnumToString.getPointBackNum(val, 2).toString();

            return moneyStr;
        }

        //随一个庄家
        private _randCount: number = 0;
        private _curIndex: number = 0;
        private _diff_ran: number = 100;
        private randBanker() {
            if (!this._game.mainScene || !this._game.mainScene.camera) return;
            if (!this._bankerTemp.length) return;
            if (this._curIndex >= this._bankerTemp.length) {
                this._curIndex = 0;
            }
            let idx = this._bankerTemp[this._curIndex];
            let posIdx = this.getUIUnitIndex(idx);
            let posX = this._game.mainScene.camera.getScenePxByCellX(this._viewUI["view_head" + posIdx].x - 1);
            let posY = this._game.mainScene.camera.getScenePxByCellY(this._viewUI["view_head" + posIdx].y - 1);
            this._kuang.visible = true;
            this._kuang.pos(posX, posY);
            if (this._randCount >= 1500) {
                for (let i = 1; i < 5; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                    let index = this.getUIUnitIndex(i);
                    if (unit) {
                        if (unit.GetIdentity() == 1) {
                            this._viewUI["view_head" + index].img_banker.visible = true;
                            this._viewUI["view_head" + index].img_banker.ani1.play(0, false);
                            this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicBanker, false);
                            this._bankerIdx = unit.GetIndex();
                            this._bankerBet = unit.GetLzNum();
                            if (this._viewUI["box_opt" + index].box_buqiang.visible) {
                                this.setBankerNum(this._viewUI["box_opt" + index], this._bankerBet);
                            }
                        } else {
                            this._viewUI["view_head" + index].img_banker.visible = false;
                            //清除非庄家的抢庄气泡                    
                            this._viewUI["box_opt" + index].visible = false;
                        }
                    }

                }
                this._kuang.removeSelf();
                Laya.timer.clear(this, this.randBanker);
            }
            this._curIndex++;
            this._randCount += this._diff_ran;
            if (this._bankerTemp.length > 1) {
                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicRandBanker, false);
            }
        }

        // 根据精灵对象得到最大抢庄倍数
        private getMaxBankerNumByUnit(unit): number {
            if (!unit) return 0;
            let _max_banker_num: number = Math.floor(TongyongUtil.getMoneyChange(unit.GetMoney()) / EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv]);
            if (_max_banker_num > EBGangMgr.MAX_BANKER_NUM) {
                _max_banker_num = EBGangMgr.MAX_BANKER_NUM;
            }
            return _max_banker_num;
        }

        // 根据当前庄家抢庄倍数得到最大下注倍数
        private getMaxBetNumByUnit(unit): number {
            if (!unit) return 0;
            let _max_bet_num: number = Math.floor(this._bankerBet / (this._EBGangMgr.totalUnitCount - 1));
            let _self_max_bet_num: number = Math.floor(TongyongUtil.getMoneyChange(unit.GetMoney()) / EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv]);
            if (_self_max_bet_num > _max_bet_num) {
                _self_max_bet_num = _max_bet_num;
            }
            return _self_max_bet_num;
        }

        // 设置抢庄按纽状态
        private setBankerButtonState(state) {
            if (this._viewUI.box_banker.visible) {
                this.resetBankerButton(false);
                this._viewUI.txt_tips.text = "请选择本局能承受的最大赔付倍数进行抢庄";
                this._viewUI.bg_tips.width = 550;
                this._bankerRate = BANKER_RATE_DEFAULT;
                let _max_banker_num: number = this.getMaxBankerNumByUnit(this._game.sceneObjectMgr.mainUnit);
                this._viewUI.btn_banker1.visible = _max_banker_num >= EBGangMgr.MIN_BANKER_NUM;
                this._bankerClip1.setText(this._bankerRate[1].toString(), true, false, "", Path_game_ebgang.ui_ebgang + "tu_bqz1.png");
                if (this._viewUI.btn_banker1.visible) {
                    let _banker2_num: number = Math.floor(_max_banker_num / 3)
                    this._viewUI.btn_banker2.visible = _banker2_num > EBGangMgr.MIN_BANKER_NUM;
                    if (this._viewUI.btn_banker2.visible) {
                        this._bankerRate[2] = _banker2_num;
                        this._bankerClip2.setText(_banker2_num.toString(), true, false, "", Path_game_ebgang.ui_ebgang + "tu_bqz1.png");
                        let _banker3_num: number = Math.floor(_max_banker_num * 2 / 3)
                        this._viewUI.btn_banker3.visible = _banker3_num > _banker2_num;
                        if (this._viewUI.btn_banker3.visible) {
                            this._bankerRate[3] = _banker3_num;
                            this._bankerClip3.setText(_banker3_num.toString(), true, false, "", Path_game_ebgang.ui_ebgang + "tu_bqz1.png");
                            this._viewUI.btn_banker4.visible = _max_banker_num > _banker3_num;
                            if (this._viewUI.btn_banker4.visible) {
                                this._bankerRate[4] = _max_banker_num;
                                this._bankerClip4.setText(_max_banker_num.toString(), true, false, "", Path_game_ebgang.ui_ebgang + "tu_bqz1.png");
                            }
                        }
                    }
                }
            }
        }

        // 下注状态
        private setBetButtonState(state, mainUnit) {
            // 庄家就不显示下注了
            let isBetState: boolean = state == MAP_STATUS.MAP_STATE_BET;
            let isBanker: boolean = mainUnit.GetIdentity() == 1;
            this._viewUI.box_bet.visible = !isBanker;
            this._viewUI.box_opt0.visible = isBanker;
            this._viewUI.txt_tips.text = !isBanker ? "请选择下注倍数" : "请等待其他玩家下注";
            this._viewUI.bg_tips.width = 350;
            if (isBetState) {
                this.resetBetButtonX(false);
                if (!this._viewUI.box_bet.visible) return;
                // 下注按钮的倍数显示 
                let _self_max_bet_num: number = this.getMaxBetNumByUnit(mainUnit);
                if (_self_max_bet_num >= 1) {
                    this._viewUI.btn_bet1.disabled = false;
                    this._betRate[0] = 1;
                    this._beiClip1.setText(this._betRate[0].toString(), true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                    let _bet_num2: number = Math.floor(_self_max_bet_num / 4);
                    if (_bet_num2 < 2) _bet_num2 = 2;
                    this._viewUI.btn_bet2.disabled = _bet_num2 > _self_max_bet_num;
                    this._beiClip2.setText(_bet_num2.toString(), true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                    this._betRate[1] = _bet_num2;
                    let _bet_num3: number = Math.floor(_self_max_bet_num / 2);
                    if (_bet_num3 < 3) _bet_num3 = 3;
                    this._viewUI.btn_bet3.disabled = !(_bet_num3 <= _self_max_bet_num && _bet_num3 > _bet_num2);
                    this._beiClip3.setText(_bet_num3.toString(), true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                    this._betRate[2] = _bet_num3;
                    let _bet_num4: number = Math.floor(_self_max_bet_num * (3 / 4));
                    if (_bet_num4 < 4) _bet_num4 = 4;
                    this._viewUI.btn_bet4.disabled = !(_bet_num4 <= _self_max_bet_num && _bet_num4 > _bet_num3);
                    this.resetBetButtonX(true);
                    this._viewUI.btn_bet5.disabled = _bet_num4 >= _self_max_bet_num;
                    this._beiClip4.setText(_bet_num4.toString(), true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                    this._betRate[3] = _bet_num4;
                    this.resetBetButtonX(true);
                    this._beiClip5.setText(_self_max_bet_num.toString(), true, false, "", PathGameTongyong.ui_tongyong_general + "tu_bei.png");
                    this._betRate[4] = _self_max_bet_num;
                }
            }
        }

        // 抢庄后随机一个庄家的动画
        private setRandomBanker() {
            if (this._bankerTemp.length == 0) {
                for (let i = 1; i < 5; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                    if (unit) {
                        this._bankerTemp.push(i);
                    }
                }
            }
            if (this._bankerTemp.length > 1) {
                this._viewUI.addChild(this._kuang);
                this._kuang.visible = false;
                Laya.timer.loop(this._diff_ran, this, this.randBanker);
                this.randBanker();
            } else {
                let idx = this._bankerTemp[0];
                let posIdx = this.getUIUnitIndex(idx);
                Laya.timer.once(1000, this, () => {
                    for (let i = 0; i < 4; i++) {
                        this._viewUI["box_opt" + i].visible = i == posIdx;
                    }
                    this._viewUI["view_head" + posIdx].img_banker.visible = true;
                    this._viewUI["view_head" + posIdx].img_banker.ani1.play(0, false);
                    this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicBanker, false);
                })
            }
        }

        // 摇完骰子后显示
        private setChooseShowCards(state) {
            let isChooseShowCard: boolean = state == MAP_STATUS.MAP_STATE_CHOOSE_SHOW_CARDS;
            this._viewUI.view_dice.visible = isChooseShowCard;
            if (isChooseShowCard) {
                this._viewUI.view_dice.img_dice1.skin = this._ui_tongyong_effect_shanzi.replace("%s", this._showCardDice1.toString());
                this._viewUI.view_dice.img_dice2.skin = this._ui_tongyong_effect_shanzi.replace("%s", this._showCardDice2.toString());
                this._viewUI.view_dice.ani1.play(1, false);
                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicDice, false);
            }
        }

        private getFirstShowCardUnitSeatIndex() {
            let showCardSeatIndex = (this._bankerIdx + this._showCardDice1 + this._showCardDice2 - 1) % EBGangMgr.MAX_SEATS_COUNT;
            showCardSeatIndex = showCardSeatIndex == 0 ? EBGangMgr.MAX_SEATS_COUNT : showCardSeatIndex;
            return showCardSeatIndex;
        }

        // 按顺序开牌
        private playFirstShowCardAni() {
            this._viewUI.box_bet.visible = false;
            let seat_index: number = this.getFirstShowCardUnitSeatIndex();
            let ui_index: number = this.getUIUnitIndex(seat_index);
            this._viewUI.ani_first.visible = true;
            this._viewUI.ani_first.ani1.play(0, false);
            this._viewUI.ani_first.ani1.on(LEvent.COMPLETE, this, this.firstViewAniCopmplete, [ui_index]);
        }

        //先手动画播放完
        private firstViewAniCopmplete(first_pos: number): void {
            //飞过去
            this._viewUI.ani_first.ani1.off(LEvent.COMPLETE, this, this.firstViewAniCopmplete);
            let view_first_end = this._viewUI["view_first" + first_pos];
            Laya.Tween.to(this._viewUI.ani_first, { x: view_first_end.x, y: view_first_end.y, scaleX: 0, scaleY: 0 }, 700, null,
                Handler.create(this, () => {
                    view_first_end.visible = true;
                    view_first_end.ani1.play(0, false);
                    this._viewUI.ani_first.visible = false;
                    //回到原先位置
                    this._viewUI.ani_first.x = 539;
                    this._viewUI.ani_first.y = 232;
                    this._viewUI.ani_first.scale(1, 1);
                }))
        }

        // 游戏结束 场景恢复
        private setGameEnd() {
            this._viewUI.btn_continue.visible = true;
            this._isGameEnd = true;
            // this._EBGangMgr.clear();
            this._EBGangMgr.resetData();
            this.resetData();
        }

        //更新倒计时时间戳
        private updateCountDown(): void {
            if (!this._mapInfo) return;
            this._countDown = this._mapInfo.GetCountDown();
        }

        //操作倒计时
        private _noTimer: number[] = [
            MAP_STATUS.MAP_STATE_BANKER,
            MAP_STATUS.MAP_STATE_BET,
        ];
        deltaUpdate() {
            if (!(this._mapInfo instanceof EBGangMapInfo)) return;
            if (!this._viewUI) return;
            if (this._noTimer.indexOf(this._curState) == -1) {
                this._viewUI.img_time.visible = false;
                return;
            }
            let curTime = this._game.sync.serverTimeBys;
            let time = Math.floor(this._countDown - curTime);
            if (time > 0) {
                this._viewUI.img_time.visible = true;
                this._viewUI.img_time.txt_time.text = time.toString();
                // if (time <= 3 && !this._viewUI.img_time.ani1.isPlaying) {
                //     this._viewUI.img_time.ani1.play(1, true);
                // }
                if (time > 3) {
                    this._viewUI.img_time.ani1.gotoAndStop(24);
                }
            } else {
                this._viewUI.img_time.visible = false;
            }
        }

        // 通过当前玩家的座位号 得到对应的UI界面上的控件index
        private getUIUnitIndex(idx) {
            return (idx - this._mainIdx + EBGangMgr.MAX_SEATS_COUNT) % EBGangMgr.MAX_SEATS_COUNT;
        }

        // 已出牌数量统计
        private setShowedCardList(cardValue) {
            let _index = cardValue - 1;
            let _count = this._showCardCountList[_index] + 1;
            this._showCardCountList[_index] = _count;
            this._viewUI["text_cards" + _index].text = _count.toString();
        }

        // 根据地图数据重置已出牌数量
        private setCardRecord() {
            let str_cardRecord: string = this._mapInfo.GetCardRecord();
            if (str_cardRecord != "") {
                this._showCardCountList = JSON.parse(str_cardRecord);
            }
        }

        // 已出牌数量统计
        private showCardCountList() {
            if (this._showCardCountList.length > 0) {
                for (let index = 0; index < this._showCardCountList.length; index++) {
                    this._viewUI["text_cards" + index].text = this._showCardCountList[index].toString();
                }
            }
        }

        // 牌点数图片 0是背景色 1是点数图
        private getCardTypeSkin(type, v1, v2) {
            let skin: Array<String> = new Array<String>();
            let num: number = (v1 + v2) % 10;
            switch (type) {
                // 对子                
                case EBGangMgr.EBG_CARDS_TYPE_DOUBLE:
                    skin[0] = "4";
                    skin[1] = "b" + v1.toString();
                    break;
                // 单张
                case EBGangMgr.EBG_CARDS_TYPE_SINGLE:
                    skin[0] = num < 7 ? "1" : "2";
                    skin[1] = num.toString();
                    break;
                // 二八杠
                case EBGangMgr.EBG_CARDS_TYPE_EBGANG:
                    skin[0] = "3";
                    skin[1] = "28";
                    break;
                // 点半
                case EBGangMgr.EBG_CARDS_TYPE_DIANBAN:
                    skin[0] = num < 7 ? "1" : "2";
                    skin[1] = v2 > v1 ? v1.toString() + "5" : v2.toString() + "5";
                    break;
                // 鳖十
                case EBGangMgr.EBG_CARDS_TYPE_BIESHI:
                    skin[0] = "0";
                    skin[1] = "0";
                    break;
                default:
                    break;
            }
            return skin;
        }

        //已选择抢庄倍数的人数
        private _battleBankerNum: number = 0;
        //已选择下注倍数的人数
        private _battleBetNum: number = 0;
        //战斗日志
        private updateBattledInfo(): void {
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            let mainIdx = mainUnit.GetIndex();
            if (!mainIdx) return;
            if (this._mainIdx != mainIdx) {
                this._mainIdx = mainIdx;
            }
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                switch (battleInfo.Type) {
                    case 2: {   // 摇骰子结果
                        if (this._battleIndex < i) {
                            this._battleIndex = i
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBet;
                            this._showCardDice1 = info.BetVal;
                            this._showCardDice2 = info.SeeCard;
                            // 找下庄家
                            if (this._bankerIdx == 0) {
                                for (let k = 1; k <= EBGangMgr.MAX_SEATS_COUNT; k++) {
                                    let unit = this._game.sceneObjectMgr.getUnitByIdx(k);
                                    if (unit && unit.GetIdentity() == 1) {
                                        this._bankerIdx = unit.GetIndex();
                                        this._bankerBet = unit.GetLzNum();
                                    }
                                }
                            }
                            this._EBGangMgr.firstPos = this.getFirstShowCardUnitSeatIndex();
                            //断线重连发牌，要在摇了骰子之后
                            if (this._EBGangStory._isDealCard) {
                                this._EBGangStory.reDealCards();
                            }
                        }
                        break;
                    }
                    case 11: {  // 结算
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
                            if (info.SeatIndex != this._bankerIdx) {
                                if (info.SettleVal > 0) {
                                    this._settleWinInfo.push(info.SeatIndex);
                                    this._settleWinInfo.push(info.SettleVal);
                                } else {
                                    this._settleLoseInfo.push(info.SeatIndex);
                                    this._settleLoseInfo.push(info.SettleVal);
                                }
                            } else {
                                this._bankerMoneyChange = info.SettleVal;
                            }
                            this._settleInfo.push(info.SeatIndex);
                            this._settleInfo.push(info.SettleVal);
                            if (info.SettleVal) {
                                this._totalPoint[info.SeatIndex] = this._totalPoint[info.SeatIndex] + info.SettleVal;
                                //记下主玩家货币变化
                                if (info.SeatIndex == mainIdx) this._moneyChange = info.SettleVal;
                            }
                        }
                        break;
                    }
                    case 12: {   // 抢庄
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
                            let idx = info.SeatIndex;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            if (unit) {
                                let posIdx = this.getUIUnitIndex(idx);
                                //玩家自己
                                this._battleBankerNum++;
                                if (idx == mainIdx) {
                                    this.setBankerNum(this._viewUI.box_opt0, info.BetVal);
                                    this._viewUI.box_banker.visible = false;
                                    if (this._battleBankerNum == this.getUnitCount()) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家抢庄";
                                        this._viewUI.bg_tips.width = 350;
                                    }
                                } else {//其他玩家
                                    this.setBankerNum(this._viewUI["box_opt" + posIdx], info.BetVal);
                                    this._viewUI["view_think" + posIdx].visible = false;
                                    this._viewUI["view_think" + posIdx].ani1.stop();
                                }
                                if (info.BetVal > 0) {
                                    this._bankerTemp.push(idx);
                                }
                            }
                        }
                        break;
                    }
                    case 13: {   // 下注
                        if (this._battleIndex < i) {
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
                            let idx = info.SeatIndex;
                            let val = info.BankerRate;
                            let unit = this._game.sceneObjectMgr.getUnitByIdx(idx);
                            let startIdx: number = 0;
                            if (unit.GetIdentity() == 0) this._unitBets[idx] = val;
                            if (unit) {
                                this._battleBetNum++;
                                //玩家自己
                                if (idx == mainIdx) {
                                    this.setBetNum(this._viewUI.box_opt0, val);
                                    this._viewUI.box_bet.visible = false;
                                    if (this._battleBetNum == this.getUnitCount() - 1) {
                                        this._viewUI.box_tips.visible = false;
                                    } else {
                                        this._viewUI.box_tips.visible = true;
                                        this._viewUI.txt_tips.text = "请等待其他玩家下注";
                                        this._viewUI.bg_tips.width = 350;
                                    }
                                } else {
                                    let posIdx = this.getUIUnitIndex(idx);
                                    startIdx = posIdx;
                                    this.setBetNum(this._viewUI["box_opt" + posIdx], val);
                                    this._viewUI["view_think" + posIdx].visible = false;
                                    this._viewUI["view_think" + posIdx].ani1.stop();
                                }
                                //存下下注倍数
                                this._betTemps.push(idx);
                                this._betTemps.push(val);
                                this.flyCreateChip(startIdx, info.SeatIndex, val);
                                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);
                            }
                        }
                        break;
                    }
                    case 25: {   // 摊牌
                        if (this._battleIndex < i) {
                            this._viewUI.view_dice.visible = false;
                            this._battleIndex = i;
                            let info = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowEBGCard;
                            let idx = info.SeatIndex;
                            let cards = [];
                            let pos = info.CardType;
                            for (let index = 0; index < info.Cards.length; index++) {
                                let cardValue = info.Cards[index] % 10;
                                if (cardValue == 0) cardValue = 10;
                                cards.push(cardValue);
                                this.setShowedCardList(cardValue);
                            }
                            let posIdx = this.getUIUnitIndex(idx);
                            this._EBGangMgr.showCards(cards, idx);
                            this._unitCards[posIdx] = cards;
                            let card_skin: Array<String> = this.getCardTypeSkin(info.CardType, cards[0], cards[1]);
                            if (posIdx == 0) {
                                this._viewUI.view_player0.visible = true;
                                this._viewUI.view_player0.ani1.play(1, false)
                                this._viewUI.view_player0.img_bg.skin = Path_game_ebgang.ui_ebgang + "brnntype_bgimg_" + card_skin[0] + ".png";
                                this._viewUI.view_player0.img_type.skin = Path_game_ebgang.ui_ebgang + "brnntype_normal_" + card_skin[1] + ".png";
                            } else {
                                this._viewUI["view_player" + posIdx].visible = true;
                                this._viewUI["view_player" + posIdx].view_type.visible = true;
                                this._viewUI["view_player" + posIdx].view_type.ani1.play(1, false);
                                this._viewUI["view_player" + posIdx].view_type.img_bg.skin = Path_game_ebgang.ui_ebgang + "brnntype_bgimg_" + card_skin[0] + ".png";
                                this._viewUI["view_player" + posIdx].view_type.img_type.skin = Path_game_ebgang.ui_ebgang + "brnntype_normal_" + card_skin[1] + ".png";
                            }
                            this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicOpenCard, false);
                        }
                        break;
                    }
                    case 4: { // 比牌
                        break;
                    }
                }
            }
        }

        //设置抢庄倍数
        private _bankerClipList: any[] = [];
        private setBankerNum(view: any, val: number, isplay: boolean = true): void {
            val = this._curState == MAP_STATUS.MAP_STATE_BANKER ? val : this._bankerBet;
            view.visible = true;
            view.box_bet.visible = false;
            view.box_qiang.visible = val > 0;
            view.box_buqiang.visible = !view.box_qiang.visible;
            if (view.box_qiang.visible) {
                let clip_money = new EbgangClip(EbgangClip.BANKER_CLIP_FONT);
                clip_money.setText(Math.abs(val), true);
                clip_money.centerX = view.banker_clip.centerX;
                clip_money.centerY = view.banker_clip.centerY;
                view.banker_clip.parent.addChild(clip_money);
                this._bankerClipList.push(clip_money);
                view.banker_clip.visible = false;
                if (isplay && this._curState <= MAP_STATUS.MAP_STATE_SET_BANKER) {
                    view.ani1.play(0, false);
                } else {
                    view.ani1.gotoAndStop(27);
                }
            }
        }

        //设置下注倍数
        private _betClipList: any[] = [];
        private setBetNum(view: any, val: number): void {
            view.visible = true;
            view.box_bet.visible = true;
            view.box_qiang.visible = false;
            view.box_buqiang.visible = false;
            let clip_money = new EbgangClip(EbgangClip.BET_CLIP_FONT);
            clip_money.setText(Math.abs(val), true);
            clip_money.scale(0.85, 0.85);
            clip_money.centerX = view.bet_clip.centerX;
            clip_money.centerY = view.bet_clip.centerY;
            view.bet_clip.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            view.bet_clip.visible = false;
            if (this._curState == MAP_STATUS.MAP_STATE_BET) {
                view.ani1.play(0, false);
            } else {
                view.ani1.gotoAndStop(27);
            }
        }

        //判断下是不是有人钱不够了
        private chkUnitMoneyNotEnough(): boolean {
            let flag: boolean = false;
            for (let i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                let unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                if (unit) {
                    if (TongyongUtil.getMoneyChange(unit.GetMoney()) < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                        flag = true;
                        break;
                    }
                }
            }
            return flag;
        }

        // 下注后飞筹码到牌桌上 起始位置  回收位置  下注额
        private flyCreateChip(startIdx, seatIdx, betValue) {
            // 需求变更 这边直接按倍数扔对应面值的筹码
            let chipArr: Array<number> = EBGangMgr.ROOM_CHIP_CONFIG["111"];
            if (chipArr && chipArr.length > 0) {
                //从最大筹码开始循环，优先丢出大额筹码，剩下零头再由小额筹码去拼凑
                for (let j = chipArr.length - 1; j >= 0; j--) {
                    if (betValue <= 0) break;
                    let num = Math.floor(betValue / chipArr[j]);
                    if (num > 0) {
                        betValue = betValue - chipArr[j] * num;
                        for (let k = 0; k < num; k++) {
                            this._chipIndex++;
                            this.createChip(startIdx, this._bankerIdx, j + 1, chipArr[j], this._chipIndex, seatIdx);
                        }
                    }
                }
            } else {
                this._chipIndex++;
                this.createChip(startIdx, this._bankerIdx, 1, betValue, this._chipIndex, seatIdx);
            }
        }

        //金币变化 飘金币特效
        public addChipFly(fromPos: number, tarPos: number) {
            let _unitChips = this._chips[fromPos];
            if (_unitChips) {
                for (let i = 0; i < _unitChips.length; i++) {
                    let chip: EBGangChip = _unitChips[i];
                    if (chip) {
                        chip.backFlyChip(tarPos, true, this._game);
                    }
                }
            }
        }

        //金币变化 飘字clip
        public addMoneyClip(value: number, seatIndex: number): void {
            let clip_money = value >= 0 ? new EbgangClip(EbgangClip.ADD_MONEY_FONT) : new EbgangClip(EbgangClip.SUB_MONEY_FONT);
            let preSkin = value >= 0 ? PathGameTongyong.ui_tongyong_general + "tu_jia.png" : PathGameTongyong.ui_tongyong_general + "tu_jian.png";
            let img_di = value >= 0 ? new LImage(PathGameTongyong.ui_tongyong_general + "tu_yingqian.png") : new LImage(PathGameTongyong.ui_tongyong_general + "tu_shuqian.png");
            let index = this.getUIUnitIndex(seatIndex);
            let playerIcon = this._viewUI["view_head" + index];
            //飘字底
            img_di.centerX = playerIcon.img_di.centerX;
            img_di.centerY = playerIcon.img_di.centerY;
            playerIcon.img_di.parent.addChild(img_di);
            this._imgdiList.push(img_di);
            playerIcon.img_di.visible = false;
            //飘字
            clip_money.setText(Math.abs(value), true, false, preSkin);
            clip_money.centerX = playerIcon.clip_money.centerX - 4;
            clip_money.centerY = playerIcon.clip_money.centerY;
            playerIcon.clip_money.parent.addChild(clip_money);
            this._clipList.push(clip_money);
            playerIcon.clip_money.visible = false;
            //飘字box缓动
            playerIcon.box_clip.y = 57;
            playerIcon.box_clip.visible = true;
            Laya.Tween.clearAll(playerIcon.box_clip);
            Laya.Tween.to(playerIcon.box_clip, { y: playerIcon.box_clip.y - 55 }, 700);
            //赢钱动画
            playerIcon.effWin.visible = value > 0;
            value > 0 && playerIcon.effWin.ani1.play(0, false);
        }

        //清理飘钱动画
        private clearAllSeatMoneyClip(): void {
            if (this._clipList && this._clipList.length) {
                for (let i: number = 0; i < this._clipList.length; i++) {
                    let clip = this._clipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._clipList = [];

            if (this._bankerClipList && this._bankerClipList.length) {
                for (let i: number = 0; i < this._bankerClipList.length; i++) {
                    let clip = this._bankerClipList[i];
                    clip.removeSelf();
                    clip.destroy(true);
                    clip = null;
                }
            }
            this._bankerClipList = [];

            if (this._imgdiList && this._imgdiList.length) {
                for (let j: number = 0; j < this._imgdiList.length; j++) {
                    let imgdi = this._imgdiList[j];
                    imgdi.removeSelf();
                    imgdi.destroy(true);
                    imgdi = null;
                }
            }
            this._imgdiList = [];
        }

        //结算表现
        private showSettleEff(): void {
            this.addBankerWinEff();
            Laya.timer.once(1000, this, () => {
                this.addBankerLoseEff();
                this.addMoneyClip(this._bankerMoneyChange, this._bankerIdx);
            });
        }

        //庄家赢钱
        private addBankerWinEff(): void {
            // EBGangMapPage.MONEY_NUM * EBGangMapPage.MONEY_FLY_TIME;
            let mainUnit = this._game.sceneObjectMgr.mainUnit;
            if (!mainUnit) return;
            if (!this._bankerIdx) return;
            let bankerPos = this.getUIUnitIndex(this._bankerIdx);
            for (let index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                this.addChipFly(index, bankerPos);
            }
            this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);

            if (this._settleLoseInfo.length <= 0) {
                //通赔
                return;
            }
            for (let i: number = 0; i < this._settleLoseInfo.length / 2; i++) {
                let index = i * 2;
                if (i < this._settleLoseInfo.length / 2) {
                    this.addMoneyClip(this._settleLoseInfo[index + 1], this._settleLoseInfo[index]);
                }
            }
        }

        //庄家输钱
        private addBankerLoseEff(): void {
            if (this._settleWinInfo.length <= 0) {
                //通吃
                return;
            }
            let mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
            let bankerPos = this.getUIUnitIndex(this._bankerIdx);
            for (let i: number = 0; i < this._settleWinInfo.length / 2; i++) {
                let index = i * 2;
                let unitPos = this.getUIUnitIndex(this._settleWinInfo[index]);
                if (i < this._settleWinInfo.length / 2) {
                    this.addChipFly(unitPos, unitPos);
                    this.addMoneyClip(this._settleWinInfo[index + 1], this._settleWinInfo[index]);
                }
            }
            this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicFlyChip, false);
        }

        // 摇骰子动画之后
        private afterDicePlay() {
            this.playFirstShowCardAni();
        }

        //重连之后，战斗日志从哪开始刷
        private resetBattleIdx(): void {
            //非首回合需特殊处理
            if (this._mapInfo.GetRound() == 0) return;
            let battleInfoMgr = this._mapInfo.battleInfoMgr;
            for (let i = 0; i < battleInfoMgr.info.length; i++) {
                let battleInfo = battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
                if (battleInfo.Type == 11) {
                    this._battleIndex = i;
                }
            }
        }

        // 重连后重新设置庄家头象
        private resetBankerHeadIcon() {
            if (this._curState >= MAP_STATUS.MAP_STATE_BET) {
                for (let i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                    let unit = this._game.sceneObjectMgr.getUnitByIdx(i)
                    if (unit) {
                        let ui_index = this.getUIUnitIndex(i);
                        let is_banker: boolean = unit.GetIdentity() == 1;
                        this._viewUI["view_head" + ui_index].img_banker.visible = is_banker;
                        this._viewUI["view_head" + ui_index].img_banker.visible = is_banker;
                        if (is_banker) {
                            this._viewUI["view_head" + ui_index].img_banker.ani1.gotoAndStop(3);
                            this._viewUI["view_head" + ui_index].img_banker.ani1.play(1, false);
                        }
                    }
                }
            }
        }

        //充值弹框
        private onNotEnoughMoney(): void {
            if (!this._game.sceneObjectMgr.mainPlayer) return;
            if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                TongyongPageDef.ins.alertRecharge(StringU.substitute("老板，您的金币少于{0}哦~\n补充点金币去大杀四方吧~", EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]), () => {
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                }, () => {
                }, true, TongyongPageDef.TIPS_SKIN_STR["cz"]);
            }
        }

        // 单局重置数据
        private resetRoundData() {
            this._bankerTemp = [];
            this._randCount = 0;
            this._bankerIdx = 0;
            this._bankerBet = 0;
            this._betRate = [0, 0, 0, 0, 0];
            this._bankerRate = [1, 3, 0, 0, 0];
            this._showCardDice1 = 1;
            this._showCardDice2 = 1;
            this._unitCards = [];
            this._chipIndex = 1;
            this._unitBets = [];
            this._settleWinInfo = [];
            this._settleLoseInfo = [];
            this._settleInfo = [];
            this._betTemps = [];
            this._moneyChange = 0;
            for (let index = 0; index < EBGangMgr.MAX_SEATS_COUNT; index++) {
                if (this._chips[index]) {
                    for (let chipIndex = 0; chipIndex < this._chips[index].length; chipIndex++) {
                        this._game.sceneObjectMgr.clearOfflineObject(this._chips[index][chipIndex]);
                    }
                }
                this._chips[index] = [];
            }
            this._EBGangStory._isDealCard = false;
            this._EBGangStory._isSortCard = false;
        }

        //重置数据
        private resetData(): void {
            this.resetRoundData();
            this._battleIndex = -1;
            this._battleBankerNum = 0;
            this._battleBetNum = 0;
            this._showCardCountList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            this._totalPoint = [0, 0, 0, 0, 0];
        }

        // 所有下注倍数总和
        private getTotalBetNum(): number {
            let betNum: number = 0;
            for (let index = 0; index < this._unitBets.length; index++) {
                if (this._unitBets[index] != undefined && this._unitBets[index] > 0) {
                    betNum += this._unitBets[index];
                }
            }
            return betNum;
        }

        //打开结算界面
        private openSettlePage(): void {
            if (this._betTemps.length == 0 || this._unitBets.length == 0 || this._settleInfo.length == 0 || !this._mapInfo) return;
            let temps = [];
            let infoTemps = [];
            let bankerNum: number = 0; //庄家倍数
            let point: number = EBGangMgr.ROOM_CONFIG[this._EBGangStory.mapLv];
            // 第一次只是为了算出庄家输赢的倍数而已
            for (let i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                let unit: Unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                let money: string;  //结算金币
                for (let j = 0; j < this._settleInfo.length / 2; j++) {
                    if (i == this._settleInfo[j * 2]) {
                        money = this._settleInfo[j * 2 + 1];
                    }
                }
                // 庄家的倍数取三个闲家加起来的倍数取绝对值，如闲家A赢50倍，闲家B输66倍，闲家C赢33倍，那么庄家就是17倍
                let betNum: number; //下注倍数
                for (let k = 0; k < this._betTemps.length / 2; k++) {
                    if (i == this._betTemps[k * 2]) {
                        betNum = this._betTemps[k * 2 + 1];
                    }
                }
                if (betNum) {
                    let val = parseFloat(money) >= 0 ? betNum : -betNum;
                    bankerNum = bankerNum + val;
                }
            }
            for (let i = 1; i <= EBGangMgr.MAX_SEATS_COUNT; i++) {
                let unit: Unit = this._game.sceneObjectMgr.getUnitByIdx(i);
                let money: string;  //结算金币
                for (let j = 0; j < this._settleInfo.length / 2; j++) {
                    if (i == this._settleInfo[j * 2]) {
                        money = this._settleInfo[j * 2 + 1];
                    }
                }
                let betNum: number = 0; //下注倍数
                for (let k = 0; k < this._betTemps.length / 2; k++) {
                    if (i == this._betTemps[k * 2]) {
                        betNum = this._betTemps[k * 2 + 1];
                    }
                }
                if (unit) {
                    let obj = {
                        isMain: this._mainIdx == i,
                        isbanker: unit.GetIdentity() == 1,
                        name: unit.GetName(),
                        point: point,
                        betmultiple: betNum ? betNum : Math.abs(bankerNum),
                        money: this.GetDoubleFloat(Number(money)),
                        totalPoint: TongyongUtil.getMoneyChange(unit.GetMoney()),
                    }
                    temps.push(obj);
                }
            }

            infoTemps.push(this._mapInfo.GetRound());
            infoTemps.push(this.chkUnitMoneyNotEnough());
            infoTemps.push(this._countDown);
            infoTemps.push(temps);
            infoTemps.push(EBGangMgr.MAX_ROUND_COUNT);
            this._pageHandle.pushOpen({
                id: EbgangPageDef.PAGE_EBG_SETTLEMENT,
                dataSource: infoTemps,
                parent: this._game.uiRoot.general
            });
        }


        private clearMapInfoListen(): void {
            this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
            this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
            this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新                
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
            this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);
            Laya.Tween.clearAll(this);
            Laya.timer.clearAll(this);
        }

        //创建筹码
        private createChip(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
            let chip = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.CHIP_MARK, EBGangChip) as EBGangChip;
            chip.setData(startIdx, targetIdx, type, value, index, unitIndex);
            this._chips[startIdx].push(chip);
            chip.visible = false;
            if (this._EBGangStory.isReConnected && (this._curState > MAP_STATUS.MAP_STATE_BET && this._curState < MAP_STATUS.MAP_STATE_END)) {
                chip.visible = true;
                chip.drawChip();
            }
            else {
                Laya.timer.once(350, this, () => {
                    chip.visible = true;
                    chip.sendChip();
                    this._game.playSound(Path_game_ebgang.music_ebgang + "chouma.mp3", false);
                })
            }
            this._chipSortScore = index;//存下来最后一个筹码层级
        }

        protected onMouseClick(e: LEvent) {
            if (e.target != this._viewUI.btn_menu) {
                this.menuTween(false);
            }
            if (e.target != this._viewUI.btn_cards) {
                this.cardsTween(false);
            }
        }

        //菜单栏
        private menuTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.img_menu.visible = true;
                this._viewUI.img_menu.scale(0.2, 0.2);
                this._viewUI.img_menu.alpha = 0;
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.img_menu, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.img_menu.visible = false;
                }));
            }
        }

        //出牌统计
        private cardsTween(isOpen: boolean) {
            if (isOpen) {
                this._viewUI.box_cards.visible = true;
                this._viewUI.box_cards.scale(0.2, 0.2);
                this._viewUI.box_cards.alpha = 0;
                Laya.Tween.to(this._viewUI.box_cards, { scaleX: 1, scaleY: 1, alpha: 1 }, 300, Laya.Ease.backInOut);
            } else {
                Laya.Tween.to(this._viewUI.box_cards, { scaleX: 0.2, scaleY: 0.2, alpha: 0 }, 300, Laya.Ease.backInOut, Handler.create(this, () => {
                    this._viewUI.box_cards.visible = false;
                }));
            }
        }

        //点击继续游戏操作
        private onClickContinueGame(): void {
            this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_MATCH, null, (page) => {
                this._viewUI.btn_continue.visible = page.dataSource;
            });
            this._viewUI.btn_continue.visible = false;
            this._battleIndex = -1;
            this.clearAllSeatMoneyClip();
            this.resetData();
            this.updateViewUI();
            this._EBGangMgr.clear();
            this._EBGangMgr.resetData();
            this._game.sceneObjectMgr.leaveStory();
            this.showCardCountList();
        }

        private onUnitAdd(u: Unit): void {
            this.onUpdateUnit();
        }

        //玩家出去了
        private onUnitRemove(u: Unit) {
            this.onUpdateUnit();
            let seatIndex: number = u.GetIndex();
            this._EBGangMgr.clearSeatCards(seatIndex);
            let uiIdx = this.getUIUnitIndex(u.GetIndex());
            this._viewUI["view_head" + uiIdx].visible = false;
            this._viewUI["view_player" + uiIdx].visible = false;
            this._viewUI["view_first" + uiIdx].visible = false;
            this._viewUI["box_opt" + uiIdx].visible = false;
            uiIdx > 0 && (this._viewUI["view_think" + uiIdx].visible = false);
        }

        // 开始游戏动画
        private setGameStart(state) {
            this.clearAllSeatMoneyClip();
            this._game.sceneObjectMgr.clearOfflineObject();
            if (state == MAP_STATUS.MAP_STATE_SHUFFLE) {
                this._EBGangMgr.totalUnitCount = EBGangMgr.MAX_SEATS_COUNT;
                this._pageHandle.pushOpen({ id: EbgangPageDef.PAGE_EBG_BEGIN, parent: this._game.uiRoot.HUD });
                if (this._game.sceneObjectMgr.mainUnit) {
                    this._mainIdx = this._game.sceneObjectMgr.mainUnit.GetIndex();
                }
                this.setGameStartViewUI();
                this._game.playSound(Path_game_ebgang.music_ebgang + MUSIC_PATH.musicStart, false);
                this._isGameEnd = false;
            }
        }

        private _qifuTypeImgUrl: string;
        private qifuFly(dataSource: any): void {
            if (!dataSource) return;
            let dataInfo = dataSource;
            if (!this._game.sceneObjectMgr || !this._game.sceneObjectMgr.mainUnit || this._game.sceneObjectMgr.mainUnit.GetIndex() != dataSource.qifu_index) return;
            this._game.qifuMgr.showFlayAni(this._viewUI.view_head0, this._viewUI, dataSource, (dataInfo) => {
                //相对应的玩家精灵做出反应
                this._qifuTypeImgUrl = TongyongUtil.getQFTypeImg(dataInfo.qf_id);
                this.onUpdateUnit(dataInfo.qifu_index);
            });
        }

        //按钮点击
        protected onBtnTweenEnd(e: LEvent, target: any) {
            switch (target) {
                case this._viewUI.btn_banker_no://不抢庄
                    this._game.network.call_ebgang_banker(0);
                    break;
                case this._viewUI.btn_banker1://抢庄倍率1
                    this._game.network.call_ebgang_banker(this._bankerRate[1]);
                    this._viewUI.box_banker.visible = false;
                    break;
                case this._viewUI.btn_banker2://抢庄倍率2
                    this._game.network.call_ebgang_banker(this._bankerRate[2]);
                    this._viewUI.box_banker.visible = false;
                    break;
                case this._viewUI.btn_banker3://抢庄倍率3
                    this._game.network.call_ebgang_banker(this._bankerRate[3]);
                    this._viewUI.box_banker.visible = false;
                    break;
                case this._viewUI.btn_banker4://抢庄倍率4
                    this._game.network.call_ebgang_banker(this._bankerRate[4]);
                    this._viewUI.box_banker.visible = false;
                    break;
                case this._viewUI.btn_menu://菜单
                    this.menuTween(!this._viewUI.img_menu.visible);
                    break;
                case this._viewUI.btn_back://返回
                    let mapinfo: EBGangMapInfo = this._mapInfo as EBGangMapInfo;
                    if (mapinfo && mapinfo.GetPlayState() == 1) {
                        this._game.showTips("游戏尚未结束，请先打完这局哦~");
                        return;
                    }
                    this._battleIndex = -1;
                    this.clearMapInfoListen();
                    this.clearAllSeatMoneyClip();
                    this.resetData();
                    this._game.sceneObjectMgr.leaveStory(true);
                    break;
                case this._viewUI.btn_rules://规则
                    this._game.uiRoot.general.open(EbgangPageDef.PAGE_EBG_RULE, (page) => {
                        page.dataSource = PageDef.TYPE_HOT;
                    });
                    break;
                case this._viewUI.btn_set://设置
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_SETTING);
                    break;
                case this._viewUI.btn_qifu://祈福
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_QIFU);
                    break;
                case this._viewUI.btn_record://战绩
                    this._game.uiRoot.general.open(TongyongPageDef.PAGE_TONGYONG_RECORD, (page) => {
                        page.dataSource = EbgangPageDef.GAME_NAME;
                    });
                    break;
                case this._viewUI.btn_continue://继续游戏
                    // 房卡模式下继续游戏则重新创建房间
                    if (this._game.sceneObjectMgr.mainPlayer.playerInfo.money < EBGangMgr.ROOM_JOIN_CONFIG[this._EBGangStory.mapLv]) {
                        this.onNotEnoughMoney();
                        return;
                    }
                    if (this._mapInfo instanceof MapInfo) {
                        this._battleIndex = -1;
                        this.clearAllSeatMoneyClip();
                        this.resetData();
                        this.updateViewUI();
                        // this._EBGangStory.removeListen();
                        // this.clearMapInfoListen();
                        this._EBGangMgr.clear();
                        this._EBGangMgr.resetData();
                        this._game.sceneObjectMgr.leaveStory();
                        this.showCardCountList();
                    } else {
                        this.onUpdateMapInfo();
                    }
                    break;
                case this._viewUI.btn_cards://出牌统计
                    this.cardsTween(!this._viewUI.box_cards.visible);
                    if (this._viewUI.box_cards.visible) {
                        this.showCardCountList();
                    }
                    break;
                case this._viewUI.btn_chongzhi://充值
                    this._game.uiRoot.general.open(DatingPageDef.PAGE_CHONGZHI);
                    break;
                default:
                    break;
            }
        }

        private getUnitCount() {
            let count: number = 0;
            let unitDic = this._game.sceneObjectMgr.unitDic;
            if (unitDic) {
                for (let key in unitDic) {
                    count++;
                }
            }
            return count;
        }

        public close(): void {
            if (this._viewUI) {
                this._viewUI.btn_menu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_continue.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_back.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_rules.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_set.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_record.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_qifu.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker1.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker2.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker3.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker4.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_banker_no.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_cards.off(LEvent.CLICK, this, this.onBtnClickWithTween);
                this._viewUI.btn_chongzhi.off(LEvent.CLICK, this, this.onBtnClickWithTween);

                this._viewUI.view_dice.ani1.off(LEvent.COMPLETE, this, this.afterDicePlay);
                this._game.qifuMgr.off(QiFuMgr.QIFU_FLY, this, this.qifuFly);

                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_STATUS_CHECK, this, this.onUpdateMapState);
                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_BATTLE_CHECK, this, this.updateBattledInfo);
                this._game.sceneObjectMgr.off(EBGangMapInfo.EVENT_EBG_COUNT_DOWN, this, this.updateCountDown);//倒计时更新                
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_ADD_UNIT, this, this.onUnitAdd);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_REMOVE_UNIT, this, this.onUnitRemove);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_MONEY_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_ACTION, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAIN_UNIT_CHANGE, this, this.onUpdateUnit);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onUpdateMapInfo);
                this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_UNIT_QIFU_TIME_CHANGE, this, this.onUpdateUnit);

                Laya.Tween.clearAll(this);
                Laya.timer.clearAll(this);
                this._chips = [];
                if (this._EBGangMgr) {
                    this._EBGangMgr.off(EBGangMgr.CONTINUE_GAME, this, this.onClickContinueGame);
                }
                this._EBGangMgr.clear();
                this._EBGangStory.clear();
                this._mapInfo = null;
                this._game.stopMusic();
                this._game.stopAllSound();
                this.clearBeiClip();
            }
            super.close();
        }
    }
}