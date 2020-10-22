
export const factorial = (num) => {
	/*
	Useful function to calculate the factorial of a given integer number.
	*/
	if (num === undefined || num === null) {
		return null;
	}
	const numParsed = parseInt(Math.abs(Number(num)), 10);
	if (numParsed===0) {
		return 1;
	} 
		return numParsed*factorial(numParsed-1);
	
}
