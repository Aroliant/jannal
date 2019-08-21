import Validators from '../validators';

export class TXT {

	constructor(target) {
		if (typeof (target) !== 'string')
			throw new TypeError('target (string) is required');

		this.target = target;
		this._type = 'TXT';
	}


	valid() {
		var self = this, model = {};
		model = {
			target: Validators.nsText
		};
		return validators.validate(self, model);
	}

}
