

function generateRandomString(size){
    let result = [];
    for(let i = 0; i < size; i++){
        let charCode = 97 + Math.floor(Math.random() * 25);
        result.push(String.fromCharCode(charCode));
    }
    return result.join('');
}

function benchmark(fn1, fn2, input, nbIterations){
    let timeFn1 = Date.now();
    for(let i = 0; i < nbIterations; i++){
        fn1(input);
    }
    timeFn1 = Date.now() - timeFn1; 

    let timeFn2 = Date.now();
    for(let i = 0; i < nbIterations; i++){
        fn2(input);
    }
    timeFn2 = Date.now() - timeFn2; 

    console.log(`time fn1: ${timeFn1} time fn2: ${timeFn2}`);
}


module.exports = {
    generateRandomString,
    benchmark

};
