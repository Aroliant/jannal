import Validators from '../validators';

export class SOA {

  constructor(host, opts) {
    if (typeof (host) !== 'string')
      throw new TypeError('host (string) is required');

    if (!opts)
      opts = {};

    var defaults = {
      admin: 'hostmaster.' + host,
      serial: 0,
      refresh: 10,
      retry: 10,
      expire: 10,
      ttl: 10
    };

    for (let key in defaults) {
      if (key in opts) continue;
      opts[key] = defaults[key];
    }

    this.host = host;
    this.admin = opts.admin;
    this.serial = opts.serial;
    this.refresh = opts.refresh;
    this.retry = opts.retry;
    this.expire = opts.expire;
    this.ttl = opts.ttl;
    this._type = 'SOA';
  }

  valid() {
    var self = this, model = {};

    model = {
      host: Validators.nsName,
      admin: Validators.nsName,
      serial: Validators.UInt32BE,
      refresh: Validators.UInt32BE,
      retry: Validators.UInt32BE,
      expire: Validators.UInt32BE,
      ttl: Validators.UInt32BE
    };

    return Validators.validate(self, model);
  }

}