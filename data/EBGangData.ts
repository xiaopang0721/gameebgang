/**
* 二八杠
*/
module gameebgang.data {
	export class EBGangData extends gamecomponent.object.PlayingMahjong {
		private _b: boolean;
		private _posTemp = [[580, 615, 70], [1040, 320, 70], [610, 80, 70], [170, 320, 70]];
		private _mainPlayerIndex: number;
		public _ownerIdx;	//牌的归属座位
		myOwner(v: Unit, b: boolean, index: number, seat: number) {
			this.owner = v;
			this._b = b;
			this.size = 0.8;
			this._mainPlayerIndex = index;
			this._ownerIdx = seat;
		}

		protected Analyze(): void {
			this._card_val = this._val % 10;
			if (this._card_val == 0) this._card_val = 10;
			this._card_color = Math.floor(this._val / 10);
        }

		fapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 4) % 4; 
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX + this.index * space;
			this.targe_pos.y = posY;
			this.time_interval = 400;
			if (!this.pos) {
				logd("EBGang DATA fapai fail...this pos is nil");
				return
			}
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, this.time_interval);
		}

		//重连发牌
		refapai() {
			let idx = this._ownerIdx;
			let posIdx = (idx - this._mainPlayerIndex + 4) % 4;
			let posX = this._posTemp[posIdx][0];
			let posY = this._posTemp[posIdx][1];
			let space = this._posTemp[posIdx][2];
			this.pos.x = posX + this.index * space;
			this.pos.y = posY;
			if (this._b) {
				if (this.owner.IsSeeCard()) {
					super.fanpai();
				}
			}
		}

		fanpai() {
			super.fanpai();
		}

		fanpaiall() {
			if (this.isShow) return;
			if (!this.owner.IsCompare())
				if (this.owner.IsGiveUp()) return;
			super.fanpai();
		}
	}
}