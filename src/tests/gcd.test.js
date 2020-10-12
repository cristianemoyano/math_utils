import React from 'react';

import {gcd} from '../math/gcd';


it('Greatest common divisor of two whole numbers', () => {
    expect(gcd(5, 10)).toEqual(5);
});

it('Greatest common divisor of two floating numbers', () => {
	//The value is casted to int.
	expect(gcd(5.1, 10.1)).toEqual(5);
});

it('Greatest common divisor of two string numbers', () => {
	//The value is casted to int.
	expect(gcd("1", "2")).toEqual(1);
});


it('Greatest common divisor of two null values', () => {
	expect(gcd(null, null)).toEqual(null);
});

it('Greatest common divisor of two undefined values', () => {
	expect(gcd(undefined, undefined)).toEqual(null);
});