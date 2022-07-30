const assert = require('assert');
const {generateRandomString, benchmark} = require('./utils');
/*
    returns true if the string has unique characters
    version BIG O(n^2) ?
*/
function isUnique(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]) return false;
        }
    }
    return true;
}

/* 
    version Big O(n) runtime?
*/
function isUnique2(str){
    const memo = {};
    for(let i = 0; i < str.length; i++){
        if (memo[str[i]]) return false;
        memo[str[i]] = true;
    }
    return true;
}


function basicTests(){
    assert.equal(isUnique('a'), true);
    assert.equal(isUnique('aa'), false);
    assert.equal(isUnique2('a'), true);
    assert.equal(isUnique('abca'), false);
}

basicTests();
let str = generateRandomString(500);
console.log(str);
benchmark(isUnique, isUnique2, str, 100_000);


