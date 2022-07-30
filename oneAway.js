const assert = require('assert');
/* 
    returns true if str1 and str2 are 0 or 1 edit away from each other.
    edit operations: insert, remove or replace a char.
*/

function oneAway(str1, str2){
    
   if( Math.abs(str1.length - str2.length) > 1 ) return false;
   if(str1 === str2) return true;
   let [bigger, minor] = str1.length >= str2.length ? [str1, str2] : [str2, str1];
   let charsDiff = [...bigger].filter(e => !minor.includes(e));
   if(charsDiff.length > 1) return false;
   if(bigger.length === minor.length){
        let diff = 0;
        for(let i = 0; i < bigger.length; i++){
            if(bigger[i] != minor[i]) diff++;
            if(diff > 1) return false;
        }
        return true;
   }
   let key = charsDiff[0];
   /*
        The book solution it is O(n), mine seems be O(n^2) 
    */
   for(let i = 0; i <bigger.length; i++){
    let candidate = minor.slice(0, i) + key + minor.slice(i);
    if(candidate === bigger) return true;
   }
   return false;
}

assert.equal( oneAway('pale','ple'), true);
assert.equal( oneAway('pales','pale'), true);
assert.equal( oneAway('pale','bale'), true);
assert.equal( oneAway('Flavio','lavio'), true);
assert.equal( oneAway('pale','bake'), false);

