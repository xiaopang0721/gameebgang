/**
* 二八杠-地图 
*/
module gameebgang.data {
	export class EbgangMapInfo extends gamecomponent.object.MapInfoT<EBGangData> {
		//地图状态变更
		static EVENT_EBG_STATUS_CHECK: string = "EbgangMapInfo.EVENT_EBG_STATUS_CHECK";
		//战斗体更新
		static EVENT_EBG_BATTLE_CHECK: string = "EbgangMapInfo.EVENT_EBG_BATTLE_CHECK";
		//倒计时时间戳更新
		static EVENT_EBG_COUNT_DOWN: string = "EbgangMapInfo.EVENT_EBG_COUNT_DOWN";		
		// 房卡信息更新
		static EVENT_EBG_CARDROOMID_UPDATE: string = "EbgangMapInfo.EVENT_EBG_CARDROOMID_UPDATE";

		constructor(v: SceneObjectMgr) {
			super(v, () => { return new EBGangData() });
		}

		onUpdate(flags: number, mask: UpdateMask, strmask: UpdateMask): void {
			super.onUpdate(flags, mask, strmask);
			let isNew = flags & core.obj.OBJ_OPT_NEW;
			if (isNew || mask.GetBit(MapField.MAP_INT_BATTLE_INDEX)) {
				this._battleInfoMgr.OnUpdate();
				this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_BATTLE_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_MAP_BYTE)) {
				this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_STATUS_CHECK);
			}
			if (isNew || mask.GetBit(MapField.MAP_INT_COUNT_DOWN)) {
				this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_COUNT_DOWN);
			}
			if (isNew || mask.GetBit(MapField.MAP_STR_CARD_ROOM_ID)) {
				this._sceneObjectMgr.event(EbgangMapInfo.EVENT_EBG_CARDROOMID_UPDATE);
			}
		}
		static cardType = ['鳖十', '一点', '二点', '三点', '四点', '五点', '六点', '七点', '八点', '九点', '一点半', '二点半', '三点半', '四点半', '五点半',
						'六点半', '七点半', '八点半', '九点半', '一宝', '二宝', '三宝', '四宝', '五宝', '六宝', '七宝', '八宝', '九宝', '天王', '二八杠']
		public getBattleInfoToString(): string {
			let str: string = "";
			for (let i = 0; i < this._battleInfoMgr.info.length; i++) {
				let battleInfo = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBase;
				let name = this.GetPlayerNameFromSeat(battleInfo.SeatIndex)
				if (battleInfo.Type == 12) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBanker;
					let newString: string;
					if (info.BetVal == 0) {
						newString = name + "：" + "不抢庄";
					} else {
						newString = name + "：" + "抢庄" + info.BetVal + "倍";
					}
					if (str == "") {
						str = newString;
					} else {
						str = str + "#" + newString;
					}
				} else if (battleInfo.Type == 1) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoPass;
					let newString = "庄家是：" + name;
					str = str + "#" + newString;
				} else if (battleInfo.Type == 13) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoBetRate;
					let newString = name + "：" + "下注" + info.BankerRate + "倍";
					str = str + "#" + newString;
				} else if (battleInfo.Type == 25) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoShowEBGCard;
					let newString = name + "：" + "摊牌，牌型是：" + EbgangMapInfo.cardType[this.getCardType(info)];
					str = str + "#" + newString;
				} else if (battleInfo.Type == 11) {
					let info = this._battleInfoMgr.info[i] as gamecomponent.object.BattleInfoSettle;
					let newString = name + "盈利：" + info.SettleVal;
					str = str + "#" + newString;
				}
			}
			return str;
		}

		private getCardType(info:gamecomponent.object.BattleInfoShowEBGCard):number {
			let cards = [];
            for (let index = 0; index < info.Cards.length; index++) {
                let cardValue = info.Cards[index] % 10;
                if (cardValue == 0) cardValue = 10;
                cards.push(cardValue);
            }
            let num: number = (cards[0] + cards[1]) % 10;
			let index:number = 0;
            switch (info.CardType) {
                // 对子--19-28                
                case EBGangMgr.EBG_CARDS_TYPE_DOUBLE:
                    index = cards[0] + 18
                    break;
                // 单张--1-9
                case EBGangMgr.EBG_CARDS_TYPE_SINGLE:
                    index = num;
					break;
                // 二八杠
                case EBGangMgr.EBG_CARDS_TYPE_EBGANG:
                    index = 29;
                    break;
                // 点半--10-18
                case EBGangMgr.EBG_CARDS_TYPE_DIANBAN:
                     index = cards[1] > cards[0] ? cards[0] + 9 : cards[1] + 9;
                    break;
                // 鳖十--0
                case EBGangMgr.EBG_CARDS_TYPE_BIESHI:
                    break;
                default:
                    break;
            }
            return index;
        }

		//通过座位取玩家名字
		private GetPlayerNameFromSeat(index: number): string {
			let name: string;
			let users = this._battleInfoMgr.users;
			name = users[index - 1].name;
			return name
		}
	}
}