import React from 'react';

import {fibonacci} from '../math/fibonacci';


it('fibonacci of a integer number', () => {
	expect(fibonacci(1)).toEqual(1);
	expect(fibonacci(2)).toEqual(1);
	expect(fibonacci(3)).toEqual(2);
	expect(fibonacci(4)).toEqual(3);
	expect(fibonacci(5)).toEqual(5);
	expect(fibonacci(6)).toEqual(8);
});

it('fibonacci of a float number', () => {
	//The value is casted to int.
	expect(fibonacci(1.2)).toEqual(1);
	expect(fibonacci(2.2)).toEqual(1);
	expect(fibonacci(3.2)).toEqual(2);
	expect(fibonacci(4.2)).toEqual(3);
	expect(fibonacci(5.2)).toEqual(5);
	expect(fibonacci(6.2)).toEqual(8);
});

it('fibonacci of a string number', () => {
	//The value is casted to int.
	expect(fibonacci("1")).toEqual(1);
	expect(fibonacci("2")).toEqual(1);
	expect(fibonacci("3")).toEqual(2);
	expect(fibonacci("4")).toEqual(3);
	expect(fibonacci("5")).toEqual(5);
	expect(fibonacci("6")).toEqual(8);
});


it('fibonacci of a null value', () => {
	expect(fibonacci(null)).toEqual(null);
});

it('fibonacci of a undefined value', () => {
	expect(fibonacci(undefined)).toEqual(null);
});
