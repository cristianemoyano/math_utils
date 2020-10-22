import {fibonacci} from '../math/fibonacci';


it('fibonacci of a integer number', () => {
	expect(fibonacci(1)).toEqual([0, 1]);
	expect(fibonacci(4)).toEqual([0, 1, 1, 2, 3]);
});

it('fibonacci of a float number', () => {
	//The value is casted to int.
	expect(fibonacci(1.2)).toEqual([0, 1]);
});

it('fibonacci of a string number', () => {
	//The value is casted to int.
	expect(fibonacci("1")).toEqual([0, 1]);
});


it('fibonacci of a null value', () => {
	expect(fibonacci(null)).toEqual(null);
});

it('fibonacci of a undefined value', () => {
	expect(fibonacci(undefined)).toEqual(null);
});
