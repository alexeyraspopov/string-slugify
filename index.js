'use strict';

module.exports = function(string){
	return string.replace(/\s/g, '-').toLowerCase();
};
