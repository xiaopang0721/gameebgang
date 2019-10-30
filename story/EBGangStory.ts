/**
* name 二八杠剧情
*/
module gameebgang.story {
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
	export class EbgangStory extends gamecomponent.story.StoryNormalBase {
		private _ebgMgr: EBGangMgr;
		private _cardsTemp: any = [];
		private _ebgMapInfo: EBGMapInfo;
		public _isDealCard: boolean = false;	//是否发过牌了
		public _isSortCard: boolean = false;

		constructor(v: Game, mapid: string, mapLv: number) {
			super(v, mapid, mapLv);
			this.init();
		}

		init() {
			super.init();
			if (!this._ebgMgr) {
				this._ebgMgr = new EBGangMgr(this._game);
			}
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.on(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.on(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			this.onIntoNewMap();
		}

		get ebgMgr() {
			return this._ebgMgr;
		}

		set mapLv(lv: number) {
			this.maplv = lv;
		}

		get mapLv() {
			return this.maplv;
		}

		private onIntoNewMap(info?: MapAssetInfo): void {
			if (!info) return;
			this.onMapInfoChange();
			this._game.uiRoot.closeAll();
			this._game.uiRoot.HUD.open(EBGPageDef.PAGE_EBG_MAP);
		}

		enterMap() {
			//各种判断
			if (this.mapinfo) return false;
			if (!this.maplv) {
				this.maplv = this._last_maplv;
			}
			this._game.network.call_match_game(this._mapid, this.maplv)
			return true;
		}

		private onMapInfoChange(): void {
			let mapinfo = this._game.sceneObjectMgr.mapInfo;
			this._ebgMapInfo = mapinfo as EBGMapInfo;
			if (mapinfo) {
				this.onUpdateState();
				this.onUpdateCardInfo();
			} else {
				this._ebgMgr.unitOffline = this._offlineUnit;
			}
		}

		private onUpdateState(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			if (!mapinfo) return;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			let state = mapinfo.GetMapState();
			switch (state) {
				case MAP_STATUS.MAP_STATE_SORT_SHOW_CARDS://摆牌,准备开牌
					if (this._isSortCard) return;
					this.updateCardsCount();
					let handle = new Handler(this, this._ebgMgr.createObj);
					this._ebgMgr.Init(this._cardsTemp, handle);
					this._ebgMgr.sort();
					this._isSortCard = true;
					break;
				case MAP_STATUS.MAP_STATE_BEFORE_SHOW_CARDS://发牌
					this._ebgMgr.fapai();
					break;
				default:
					break;
			}
		}

		//重发下牌
		reDealCards(): void {
			if (this._isSortCard) return;
			this.updateCardsCount();
			let handle = new Handler(this, this.ebgMgr.createObj);
			this.ebgMgr.Init(this._cardsTemp, handle);
			this.ebgMgr.sort();
			this.ebgMgr.refapai();
			this._isSortCard = true;
		}

		//断线重连,重发下牌
		private onUpdateCardInfo(): void {
			let mapinfo: MapInfo = this._game.sceneObjectMgr.mapInfo;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mapinfo) return;
			if (!mainUnit) return;
			if (!mainUnit.GetIndex()) return;
			if (!this.isReConnected) return;
			let state = mapinfo.GetMapState();
			if (state > MAP_STATUS.MAP_STATE_NONE && state < MAP_STATUS.MAP_STATE_END) {
				if (this._isDealCard) return;
				if (state > MAP_STATUS.MAP_STATE_SORT_SHOW_CARDS) {
					this._isDealCard = true;
				}
			}
		}

		//算下在场几个人来定牌数
		private updateCardsCount(): void {
			let card = [1, 2];
			this._cardsTemp = [];
			for (let index = 1; index < 5; index++) {
				let unit = this._game.sceneObjectMgr.getUnitByIdx(index)
				if (unit) {
					this._cardsTemp = this._cardsTemp.concat(card);
				}
			}
		}

		createofflineUnit() {
			//创建假的地图和精灵
			let unitOffline = new UnitOffline(this._game.sceneObjectMgr);
			let mainPlayer = this._game.sceneObjectMgr.mainPlayer;
			if (mainPlayer) {
				unitOffline.SetStr(UnitField.UNIT_STR_NAME, mainPlayer.playerInfo.nickname);
				unitOffline.SetStr(UnitField.UNIT_STR_HEAD_IMG, mainPlayer.playerInfo.headimg);
				unitOffline.SetDouble(UnitField.UNIT_INT_MONEY, mainPlayer.playerInfo.money);
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_END_TIME, mainPlayer.GetQiFuEndTime(mainPlayer.playerInfo.qifu_type - 1));
				unitOffline.SetUInt32(UnitField.UNIT_INT_QI_FU_TYPE, mainPlayer.playerInfo.qifu_type);
				unitOffline.SetUInt32(UnitField.UNIT_INT_VIP_LEVEL, mainPlayer.playerInfo.vip_level);
			}
			unitOffline.SetUInt16(UnitField.UNIT_INT_UINT16, 0, 1);

			this._offlineUnit = unitOffline;
		}

		leavelMap() {
			//各种判断
			this._game.network.call_leave_game();
			return true;
		}

		clear() {
			super.clear();
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_LOAD_MAP, this, this.onIntoNewMap);
			this._game.sceneObjectMgr.off(SceneObjectMgr.EVENT_MAPINFO_CHANGE, this, this.onMapInfoChange);
			this._game.sceneObjectMgr.off(MapInfo.EVENT_STATUS_CHECK, this, this.onUpdateState);
			if (this._ebgMgr) {
				this._ebgMgr.clear();
				this._ebgMgr = null;
			}
			this._ebgMapInfo = null;
		}
	}
}