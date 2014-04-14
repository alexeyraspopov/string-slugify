'use strict';

function replace(string, flow){
	return flow.filter(function(method){
		return method[0];
	}).reduce(function(string, method){
		return string.replace(method[1], method[2]);
	}, string);
}

function removeSymbols(symbols){
	return symbols && new RegExp('[' + symbols + ']', 'g');
}

module.exports = function(string, options){
	options = options || {};

	string = replace(string.trim(), [
		[options.remove, removeSymbols(options.remove), ''],
		[true, /\s+/g, '-'],
		[options.camelCase, /([A-Z])/g, '-$1']
	]);

	return string.toLowerCase();
};
