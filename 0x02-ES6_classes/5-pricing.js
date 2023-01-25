export default class Building {
  constructor(sqft) {
    if (
      new.target !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }
}
