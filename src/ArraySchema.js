export default class ArraySchema {
  constructor(validator) {
    this.validators = [...validator];
  }

  isValid(array) {
    return this.validators.every((validator) => validator(array) === true);
  }

  allIntegers() {
    const validator = (arr) => arr.every((number) => Number.isInteger(number));
    return new ArraySchema([...this.validators, validator]);
  }

  custom(fn) {
    const validator = (arr) => arr.every((number) => fn(number));
    return new ArraySchema([...this.validators, validator]);
  }
}
