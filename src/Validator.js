import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';
import ArraySchema from './ArraySchema.js';

export default class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}
