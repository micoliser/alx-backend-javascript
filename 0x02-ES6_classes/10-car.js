/* eslint-disable no-underscore-dangle */
export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    // if (typeof brand !== 'string') {
    //   throw new TypeError('Brand must be a string');
    // }
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    // if (typeof motor !== 'string') {
    //   throw new TypeError('Motor must be a string');
    // }
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    // if (typeof color !== 'string') {
    //   throw new TypeError('Color must be a string');
    // }
    this._color = color;
  }

  // Method to clone a car
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
