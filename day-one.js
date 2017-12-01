const reducer = (accumulator, currentValue) =>  {
    return parseInt(accumulator) + parseInt(currentValue)
}

module.exports = (number) => {

    var x = [];
    for(var i = 0; i < number.length; i++ ) {
        if(i + 1 === number.length && number[i] === number[0]) {
            x.push(number[i])
        }

        if(number[i] === number[i + 1]) {
            x.push(number[i])
        }
    }

    if(x.length > 0) {
        if(x.length === 1) {
            return parseInt(x[0])
        }

        return x.reduce(reducer);
    }

    return 0;
}
