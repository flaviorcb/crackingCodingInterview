const assert = require('assert');
/* 
    receives a string and returns if it is possible
    make a palidrome of some pemutation of the string
    my idea was: if str.length is even all char has to be
    a quantity even, if str.length is odd, must have one char
    with a odd quantity, the others must be even.
*/
function hasPalindromePermutation(str){
    
    let data = {};
    for(let c of str){
        data[c] = data[c] + 1 || 1;
    }
    
    //test if all chars has quantity even
    if(str.length % 2 === 0){
        for(let key in data)
            if(data[key] % 2 != 0) return false;
    }else{
        let odds = 0;
        for(let key in data){
            if(data[key] % 2 != 0) odds++;
            if(odds > 1) return false;
        }
    }


    return true;
}

assert.equal(hasPalindromePermutation('ABA'), true);
assert.equal(hasPalindromePermutation('ABC'), false);
assert.equal(hasPalindromePermutation('x'), true);
assert.equal(hasPalindromePermutation('xx'), true);
assert.equal(hasPalindromePermutation('yyy'), true);
assert.equal(hasPalindromePermutation('AABBCC'), true);
assert.equal(hasPalindromePermutation('ABCC'), false);

