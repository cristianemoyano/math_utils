export const fibonacci = (num) => {
    /*
    Useful function to calculate the fibonacci of a given integer number.
    */
    if (num === undefined || num === null) {
        return null;
    }
    const numParsed = parseInt(Number(num), 10);
    if (numParsed<=1) {
        return numParsed;
    } 
    return fibonacci(numParsed-1) + fibonacci(numParsed-2);
}