module.exports = (number) => {
    console.log(number);

    const stringNumber = number.split('');

    var x = [];
    for(var i = 0; i < stringNumber.length; i++ ) {
        if(i + 1 === stringNumber.length && stringNumber[i] === stringNumber[0]) {
            x.push(stringNumber[i])
        }

        if(stringNumber[i] === stringNumber[i + 1]) {
            x.push(stringNumber[i])
        }
    }

    if(x.length > 0) {
        if(x.length === 1) {
            return parseInt(x[0])
        }

        const reducer = (accumulator, currentValue) =>  {
            return parseInt(accumulator) + parseInt(currentValue)
        }
        return x.reduce(reducer);
    }

    return 0;
}
