/* global describe, it, expect */
'use strict';
var slugify = require('./index');

describe('slugify', function(){
	it('should convert spaces to dash', function(){
		var actual = slugify('hello world'),
			expected = 'hello-world';

		expect(actual).toBe(expected);
	});

	// should convert to lower case
	// should convert camelcase (by option)
});
