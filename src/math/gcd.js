export const gcd = (firstNum, secondNum) =>{   
    
    // Useful function to calculate the greatest common divisor of two numbers.
    
    // It checks if the two variables exist or are null, if so, the function ends.

    if (firstNum === undefined || firstNum === null) {
        return null;    
    } 

    if (secondNum === undefined || secondNum === null) {
        return null;    
    } 

    // Cast both variables, that is, convert any value to integer.
    
    const firstNumParsed = parseInt(Math.abs(Number(firstNum)), 10);
    const secondNumParsed = parseInt(Math.abs(Number(secondNum)), 10);
    
    // If the first number is greater than the second, and the second is equal to 0. Returns the first.

    if (firstNumParsed > secondNumParsed){
        if (secondNumParsed === 0){
            return firstNumParsed;
        }

    // It calls itself to get the greatest common divisor.

        return gcd (secondNumParsed, firstNumParsed%secondNumParsed);

    } 

    // If both values are equal, it returns the first one.

    if (firstNumParsed === secondNumParsed){
        return firstNumParsed;
    }

    // If the first condition is not met, create a new function with the values backwards.

    return gcd (secondNumParsed, firstNumParsed);
    
}
