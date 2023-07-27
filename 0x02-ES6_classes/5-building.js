/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    if (
      // eslint-disable-next-line operator-linebreak
      typeof this.evacuationWarningMessage !== 'function' &&
      this.constructor !== Building
    ) {
      throw new Error(
        // eslint-disable-next-line comma-dangle
        'Class extending Building must override evacuationWarningMessage'
      );
    }
    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Sqft must be a number');
    this._sqft = sqft;
  }
}
