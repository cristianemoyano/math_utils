export const fibonacci = (num) => {
    /*
    Useful function to calculate the fibonacci of a given integer number.
    */
    if (num === undefined || num === null) {
        return null;
    }
    const numParsed = parseInt(Number(num), 10);
    if (numParsed===1) {
        return [0, 1];
    } 
        const serie = fibonacci(numParsed - 1);
        serie.push(serie[serie.length - 1] + serie[serie.length - 2]);
        return serie;
    
}
