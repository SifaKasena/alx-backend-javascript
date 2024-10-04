export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !(this.evacuationWarningMessage instanceof Function)) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a Number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a Number');
    }
    this._sqft = sqft;
  }
}
