/**
* name 
*/
module gameebgang.data {
	export class EBGangChip extends gamecomponent.object.PlayingChip {
		constructor() {
			super();
		}
		//筹码起始位置(主玩家，座位0，座位1，座位2)  
		private _chipStart = [[450, 620, 70], [1190, 350, 70], [770, 90, 70], [70, 320, 70]];
		private _chipEnd = [650, 340];  //筹码终点位置  只需要一个中心点
		private _radius: number = 110; // 圆的半径
		private _startIndex: number;
		private _targetIndex: number;
		public _seatIndex: number;//精灵座位归属
		//初始位置，终点位置，筹码类型，筹码大小，筹码层级
		setData(startIdx: number, targetIdx: number, type: number, value: number, index: number, unitIndex: number) {
			this.size = 0.4;
			this.sortScore = 999 - index;
			this.pos = new Vector2(this._chipStart[startIdx][0], this._chipStart[startIdx][1]);
			this._val = value.toString();
			this._type = type;
			this._startIndex = startIdx;
			this._targetIndex = targetIdx - 1;
			this.rotateAngle = MathU.randomRange(0, 360);
			this._seatIndex = unitIndex;
		}

		sendChip() {
			if (!this.pos) {
				this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
			}
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.targe_pos.x = posX;
			this.targe_pos.y = posY;
			super.sendChip();
		}

		flyChip(index: number, isBanker: boolean, count: number) {
			if (!this.pos) {
				this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
			}
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			let target = isBanker ? this._chipEnd : this._chipStart;
			this.targe_pos.x = target[index][0];
			this.targe_pos.y = target[index][1];
			if(!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 500 + count * 15, Laya.Ease.backIn, Handler.create(this, () => {
				this.isFinalPos = true;
			}));
		}

		backFlyChip(index: number, isClear: boolean) {
			if (!this.pos) {
				this.pos = new Vector2(this._chipStart[this._startIndex][0], this._chipStart[this._startIndex][1]);
			}
			if (!this.targe_pos) {
				this.targe_pos = new Vector2();
			}
			this.isFinalPos = false;
			this.targe_pos.x = this._chipStart[index][0];
			this.targe_pos.y = this._chipStart[index][1];
			this.isCanClear = isClear;
			if(!this.pos) return;
			Laya.Tween.to(this.pos, { x: this.targe_pos.x, y: this.targe_pos.y }, 700, Laya.Ease.backIn, Handler.create(this, () => {
				this.isFinalPos = true;
			}));
		}

		drawChip() {
			let posX = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).x;
			let posY = MathU.randomPointInCicle(new Vector2(this._chipEnd[0], this._chipEnd[1]), 0, this._radius).y;
			if (!this.targe_pos) {
				this.targe_pos = new Vector2(posX, posY);
			}
			if (!this.pos) {
				this.pos = new Vector2(posX, posY);
			}
			this.pos.x = posX;
			this.pos.y = posY;
		}
	}
}