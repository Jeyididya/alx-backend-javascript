export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand; // eslint-disable-line no-underscore-dangle
  }

  set brand(brand) {
    this._brand = brand; // eslint-disable-line no-underscore-dangle
  }

  get motor() {
    return this._motor; // eslint-disable-line no-underscore-dangle
  }

  set motor(motor) {
    this._motor = motor; // eslint-disable-line no-underscore-dangle
  }

  get color() {
    return this._color; // eslint-disable-line no-underscore-dangle
  }

  set color(color) {
    this._color = color; // eslint-disable-line no-underscore-dangle
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
