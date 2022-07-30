/* 
    gets a string and replaces spaces for %20
*/

function URLfy(str){
    return str.trim().replace(/\s/g, '%20');
}

console.log(URLfy('  foo bar foo bar  '));