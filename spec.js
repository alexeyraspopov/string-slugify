/* global describe, it, expect */
'use strict';
var slugify = require('./index');

describe('slugify', function(){
	it('should convert spaces to dash', function(){
		var actual = slugify('hello world'),
			expected = 'hello-world';

		expect(actual).toBe(expected);
	});

	it('should trim string', function(){
		var actual = slugify(' hello world     '),
			expected = 'hello-world';

		expect(actual).toBe(expected);
	});

	it('should convert to lower case', function(){
		var actual = slugify('Hello World'),
			expected = 'hello-world';

		expect(actual).toBe(expected);
	});

	it('should convert camelcase (by option)', function(){
		var actual = slugify('helloWorldCamelCase', { camelCase: true }),
			expected = 'hello-world-camel-case';

		expect(actual).toBe(expected);
	});
});
