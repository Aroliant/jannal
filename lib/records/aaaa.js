import Validators from '../validators';

export class AAAA {

  constructor(target) {
    if (typeof (target) !== 'string')
      throw new TypeError('IPv6Addr (string) is required');

    this.target = target;
    this._type = 'AAAA';
  }

  valid() {
    var self = this, model = {};
    model = {
      target: Validators.IPv6
    };
    return Validators.validate(self, model);
  }


}
