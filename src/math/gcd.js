export const gcd = (firstNum, secondNum) =>{
    /*
    Useful function to calculate the greatest common divisor of two numbers.
    */
    if (firstNum === undefined || firstNum === null) {
        return null;    
    }    
    if (secondNum === undefined || secondNum === null) {
        return null;    
    }   
    const firstNumParsed = parseInt(Number(firstNum), 10);
    const secondNumParsed = parseInt(Number(secondNum), 10);

    if (firstNumParsed > secondNumParsed){
        if (secondNumParsed === 0){
            return firstNumParsed;
        }

        return gcd (secondNumParsed, firstNumParsed%secondNumParsed);

    } 
        return gcd (secondNumParsed, firstNumParsed);
    
}
