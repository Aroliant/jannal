import Validators from '../validators';

export class SRV {

	constructor(target, port, opts) {
		if (typeof (target) !== 'string')
			throw new TypeError('host (string) is required');
		if (!port)
			throw new TypeError('port (integer) is required'); //XXX

		if (!opts)
			opts = {};

		var defaults = {
			priority: 0,
			weight: 10,
		};

		for (key in defaults) {
			if (key in opts) continue;
			opts[key] = defaults[key];
		}

		this.target = target;
		this.port = port;
		this.weight = opts.weight;
		this.priority = opts.priority;
		this._type = 'SRV';
	}
	
	valid() {
		var self = this, model = {};
		model = {
			target: Validators.nsText, // XXX
			port: Validators.UInt16BE,
			weight: Validators.UInt16BE,
			priority: Validators.UInt16BE
		};
		return Validators.validate(self, model);
	}

}

