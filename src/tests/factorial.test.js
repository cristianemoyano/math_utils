import {factorial} from '../math/factorial';


it('Factorial of a integer number', () => {
	expect(factorial(1)).toEqual(1);
	expect(factorial(2)).toEqual(2);
	expect(factorial(3)).toEqual(6);
	expect(factorial(4)).toEqual(24);
	expect(factorial(5)).toEqual(120);
	expect(factorial(6)).toEqual(720);
});

it('Factorial of a float number', () => {
	//The value is casted to int.
	expect(factorial(1.2)).toEqual(1);
	expect(factorial(2.2)).toEqual(2);
	expect(factorial(3.2)).toEqual(6);
	expect(factorial(4.2)).toEqual(24);
	expect(factorial(5.2)).toEqual(120);
	expect(factorial(6.2)).toEqual(720);
});

it('Factorial of a string number', () => {
	//The value is casted to int.
	expect(factorial("1")).toEqual(1);
	expect(factorial("2")).toEqual(2);
	expect(factorial("3")).toEqual(6);
	expect(factorial("4")).toEqual(24);
	expect(factorial("5")).toEqual(120);
	expect(factorial("6")).toEqual(720);
});


it('Factorial of a null value', () => {
	expect(factorial(null)).toEqual(null);
});

it('Factorial of a undefined value', () => {
	expect(factorial(undefined)).toEqual(null);
});
