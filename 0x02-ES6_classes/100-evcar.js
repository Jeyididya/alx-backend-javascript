import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // eslint-disable-line no-underscore-dangle
  }

  // eslint-disable-next-line
  cloneCar() {    // eslint-disable-next-line

    return new Car[Symbol.species]();
  }
}
