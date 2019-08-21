import Validators from '../validators';


export class MX {

  constructor(exchange, opts) {
    if (typeof (exchange) !== 'string')
      throw new TypeError('exchange (string) is required');

    if (!opts)
      opts = {};

    var defaults = {
      priority: 0,
      ttl: 600,
    };

    for (key in defaults) {
      if (key in opts) continue;
      opts[key] = defaults[key];
    }

    this.exchange = exchange;
    this.ttl = opts.ttl;
    this.priority = opts.priority;
    this._type = 'MX';
  }

  valid() {
    var self = this, model = {};
    model = {
      exchange: Validators.nsName,
      ttl: Validators.UInt32BE,
      priority: Validators.UInt16BE
    };
    return Validators.validate(self, model);
  }

}

