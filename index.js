'use strict';

module.exports = function(string, options){
	options = options || {};
	string = string.trim().replace(/\s+/g, '-');

	if(options.camelCase){
		string = string.replace(/([A-Z])/g, '-$1');
	}

	return string.toLowerCase();
};
