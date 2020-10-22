import {gcd} from '../math/gcd';


it('Greatest common divisor of two whole numbers', () => {
	expect(gcd(5, 10)).toEqual(5);
	expect(gcd(50, 25)).toEqual(25);
	expect(gcd(100, 50)).toEqual(50);
	expect(gcd(150, 300)).toEqual(150);
	expect(gcd(475, 950)).toEqual(475);
});

it('Greatest common divisor of two negative numbers', () => {
	expect(gcd(-5, 10)).toEqual(5);
	expect(gcd(-50, 25)).toEqual(25);
	expect(gcd(-100, 50)).toEqual(50);
	expect(gcd(-150, 300)).toEqual(150);
	expect(gcd(-475, 950)).toEqual(475);
});

it('Greatest common divisor of two floating numbers', () => {
	//The value is casted to int.
	expect(gcd(5.1, 10.1)).toEqual(5);
	expect(gcd(15.1, 30.1)).toEqual(15);
	expect(gcd(65.1, 130.1)).toEqual(65);
	expect(gcd(280.1, 140.1)).toEqual(140);
	expect(gcd(1280.1, 640.1)).toEqual(640);
});

it('Greatest common divisor of two string numbers', () => {
	//The value is casted to int.
	expect(gcd("38", "76")).toEqual(38);
	expect(gcd("125", "250")).toEqual(125);
	expect(gcd("775", "1550")).toEqual(775);
	expect(gcd("5500", "11000")).toEqual(5500);
	expect(gcd("124800", "62400")).toEqual(62400);
});


it('Greatest common divisor of two null values', () => {
	expect(gcd(null, null)).toEqual(null);
});

it('Greatest common divisor of two undefined values', () => {
	expect(gcd(undefined, undefined)).toEqual(null);
});