import Validators from '../validators';

export class CNAME {

  constructor(target) {
    if (typeof (target) !== 'string')
      throw new TypeError('target (string) is required');

    this.target = target;
    this._type = 'CNAME';
  }


  valid() {
    var self = this, model = {};
    model = {
      target: Validators.nsName
    };
    return Validators.validate(self, model);
  }


}

