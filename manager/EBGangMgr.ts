/**
* 二八杠-牌 
*/
module gameebgang.manager {
	const MIN_CHECKTIME: number = 1000;//最小检测时间间隔(毫秒)
	export class EBGangMgr extends gamecomponent.managers.PlayingCardMgrBase<EBGangData>{
		static readonly MIN_BANKER_NUM: number = 3; // 最小抢庄倍数
		static readonly MAX_BANKER_NUM: number = 200; // 最大抢庄倍数
		static readonly MAX_SEATS_COUNT: number = 4; // 最大座位数
		static readonly MAX_ROUND_COUNT: number = 5; // 最大局数
		static readonly CARD_ROOM_CONFIG: string = "111"; // 房卡模式下房间底注等信息
		static readonly LEAST_BET_MONEY: Array<number> = [1, 10, 50, 200];	// 底注
		static readonly LEAST_JOIN_MONEY: Array<number> = [20, 100, 500, 1000];	// 准入
		static readonly WXSHARE_TITLE = "大众棋牌-游戏邀请";	// 分享标题
		static readonly WXSHARE_DESC = "开好房喽,就等你们一起来玩二八杠啦!房间号是({0}),晚了位置就没了哟~";	// 分享内容
		// 底注
		static readonly ROOM_CONFIG: any = {
			"111": EBGangMgr.LEAST_BET_MONEY[0],       //新手场
			"112": EBGangMgr.LEAST_BET_MONEY[1],      //小资场
			"113": EBGangMgr.LEAST_BET_MONEY[2],      //老板场
			"114": EBGangMgr.LEAST_BET_MONEY[3],     //富豪场
		};
		// 准入
		static readonly ROOM_JOIN_CONFIG: any = {
			"111": EBGangMgr.LEAST_JOIN_MONEY[0],       //新手场
			"112": EBGangMgr.LEAST_JOIN_MONEY[1],      //小资场
			"113": EBGangMgr.LEAST_JOIN_MONEY[2],      //老板场
			"114": EBGangMgr.LEAST_JOIN_MONEY[3],     //富豪场
		};
		// 筹码面值
		static readonly ROOM_CHIP_CONFIG = {
			"111": [1, 5, 10, 20, 50],     //新手
			"112": [10, 20, 50, 100, 200],   //小资
			"113": [50, 100, 200, 5000, 1000],  //老板
			"114": [200, 500, 1000, 2000, 5000],  //富豪
		};
		// 牌型
		static readonly EBG_CARDS_TYPE_DOUBLE = 1;        // 对子
		static readonly EBG_CARDS_TYPE_EBGANG = 2;        // 二八杠(单张特殊牌 8-2)
		static readonly EBG_CARDS_TYPE_DIANBAN = 3;       //单张中的半牌(九点半)
		static readonly EBG_CARDS_TYPE_SINGLE = 4;        // 单张
		static readonly EBG_CARDS_TYPE_BIESHI = 5;       // 鳖十
		static readonly EBG_CARDS_TYPE_INVALID = -1;       // 无效牌

		static readonly MAPINFO_OFFLINE: string = "EBGangMgr.MAPINFO_OFFLINE";//假精灵
		static readonly DEAL_CARDS: string = "EBGangMgr.DEAL_CARDS";//发牌结束
		static readonly CONTINUE_GAME: string = "EBGangMgr.CONTINUE_GAME";//继续游戏
		private _offsetTime: number//剩余检测时间(毫秒)
		private _unitOffline: UnitOffline;//假精灵信息
		private _firstPos: number = 0;	// 第一个发牌的座位号
		private _cardsTemp: any = [];	//牌数据
		private _partPos: any = [];		//分牌过的位置
		private _totalUnitCount: number = 4;	// 玩家数量

		constructor(game: Game) {
			super(game);
		}

		get unitOffline() {
			return this._unitOffline;
		}

		set unitOffline(v) {
			this._unitOffline = v;
			this.event(EBGangMgr.MAPINFO_OFFLINE)
		}

		get firstPos() {
			return this._firstPos;
		}

		set firstPos(v) {
			this._firstPos = v;
		}

		get totalUnitCount() {
			return this._totalUnitCount;
		}

		set totalUnitCount(v: number) {
			this._totalUnitCount = v;
		}

		//心跳更新
		update(diff: number) {
			if (this._offsetTime > 0) {
				this._offsetTime -= diff;
				return;
			}
			this._offsetTime = MIN_CHECKTIME;
		}

		createObj(u: Unit) {
			let card = this._game.sceneObjectMgr.createOfflineObject(SceneRoot.MAHJONG_MARK, EBGangData) as EBGangData;
			return card;
		}

		//定下牌的初始位置
		private _cardPos: any = [[540, 350, 30], [600, 350, 30], [660, 350, 30], [720, 350, 30]];
		sort() {
			let max = EBGangMgr.MAX_SEATS_COUNT;
			let mainUnit: Unit = this._game.sceneObjectMgr.mainUnit;
			if (!mainUnit) return;
			let mainIdx = mainUnit.GetIndex();
			let cardIdx = 0;

			for (let index = 0; index < max; index++) {
				let posIdx = (this._firstPos + index) % EBGangMgr.MAX_SEATS_COUNT == 0 ? EBGangMgr.MAX_SEATS_COUNT : (this._firstPos + index) % EBGangMgr.MAX_SEATS_COUNT;
				let unit = this._game.sceneObjectMgr.getUnitByIdx(posIdx);
				if (unit) {
					for (let i = 0; i < 2; i++) {
						let card = this._cards[cardIdx * 2 + i] as EBGangData;						
						if (card) {
							card.pos = new Vector2(this._cardPos[cardIdx][0], this._cardPos[cardIdx][1] + i * this._cardPos[cardIdx][2]);							
							card.myOwner(unit, mainUnit == unit, mainIdx, posIdx);
							card.index = i;
							card.sortScore = i;
						}
					}
					cardIdx++;
				}
			}
		}

		//发牌
		fapai() {
			let count = 1;
			for (let i = 0; i < this._cards.length / 2; i++) {
				Laya.timer.once(300 * count, this, () => {
					for (let k = 0; k < 2; k++) {
						let card = this._cards[i * 2 + k] as EBGangData;
						//播音效
						this._game.playSound(PathGameTongyong.music_tongyong + "fapai.mp3", false);
						card.fapai();
					}
				});
				count++;
			}
		}

		//重连发牌
		refapai() {
			for (let i = 0; i < this._cards.length; i++) {
				let card = this._cards[i];
				card.refapai();
			}
		}

		// 删除指定座位上的牌
		clearSeatCards(seatIndex: number) {
			for (let index = 0; index < this._cards.length; index++) {
				if (this._cards[index]._ownerIdx == seatIndex) {
					this._game.sceneObjectMgr.clearOfflineObject(this._cards[index]);
				}
			}
		}

		//翻牌
		showCards(cards: any, pos: number) {
			let max = EBGangMgr.MAX_SEATS_COUNT;

			// 和首次摊牌的玩家间隔的座位数 据此来翻牌
			let _diffIdx = 0;
			if (pos != this._firstPos) {
				// 和第一个发牌的位置偏差多少 
				for (let index = 1; index <= max; index++) {
					let seat_idx = (this._firstPos + index) % max;
					if (seat_idx == 0) seat_idx = max; 
					let unit = this._game.sceneObjectMgr.getUnitByIdx(seat_idx);
					if (unit) {
						_diffIdx++;
						if (pos == seat_idx) break;
					}					
				}
			} 
			// 固定只翻两张牌
			for (let index = 0; index < cards.length; index++) {
				let cardIdx = _diffIdx * 2 + index;
				let card = this._cards[cardIdx];
				if (card) {
					card.Init(cards[index]);
					card.fanpai();
				}
			}			
		}

		//重置数据
		resetData(): void {	
			this._firstPos = 0;
			this._totalUnitCount = 4;
			this._cardsTemp = [];
		}
	}
}