import Validators from '../validators';


export class NS {

  constructor(target) {
    if (typeof (target) !== 'string')
      throw new TypeError('target (string) is required');

    this.target = target;
    this._type = 'NS';
  }

  valid() {
    var self = this, model = {};
    model = {
      target: Validators.nsName
    };
    return Validators.validate(self, model);
  }

}
