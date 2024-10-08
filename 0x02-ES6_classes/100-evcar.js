import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this[Symbol.species];
  }
}
