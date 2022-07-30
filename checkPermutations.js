const assert = require('assert');
const {generateRandomStrings} = require('./utils');
/* 
    checks if a string is permutation from another
    run time: O(n)
    space: O(n)
*/

function checkPermutations(str1, str2){
    if(str1.length != str2.length) return false;
    let memo1 = {};
    let memo2 = {};
    for(let i = 0; i < str1.length; i++){
        memo1[str1[i]] = (memo1[str1[i]] || 0) + 1;
        memo2[str2[i]] = (memo2[str2[i]] || 0) + 1;
    }
    for(let key in memo1) if(memo2[key] !== memo1[key]) return false;
    return true;
}

assert.equal(checkPermutations('a', 'a'), true);
assert.equal(checkPermutations('a', 'b'), false);
assert.equal(checkPermutations('ab', 'ba'), true);
assert.equal(checkPermutations('abc', 'ba'), false);
assert.equal(checkPermutations('abc', 'abb'), false);
assert.equal(checkPermutations('abcc', 'abca'), false);