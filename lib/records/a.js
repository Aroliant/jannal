import Validators from '../validators';

export class A {
  constructor(target) {
    if (typeof (target) !== 'string') throw new TypeError('IPv4Addr (string) is required');
    this.target = target;
    this.type = 'A';
  }

  valid() {
    const self = this
    let model = {};
    model = {
      target: Validators.IPv4,
    };
    return Validators.validate(self, model);
  }
}
