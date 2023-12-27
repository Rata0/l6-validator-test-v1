export default class ArraySchema {
  constructor(vals = [(arr) => Array.isArray(arr)]) {
    this.validators = [...vals];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  allIntegers() {
    return new ArraySchema([...this.validators,
      (arr) => arr.every((item) => Number.isInteger(item))]);
  }

  custom(fn) {
    return new ArraySchema([...this.validators, (arr) => arr.every((item) => fn(item) === true)]);
  }
}
