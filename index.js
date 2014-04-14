module.exports = function(string, options){
	return string.replace(/\s/g, '-').toLowerCase();
};
