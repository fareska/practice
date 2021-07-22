/*
var str = "Coding is the best things in life"
var str1 = "coding is thE best things in life"

//str.match
// var res = str.match('[A-Z]')

// new RegExp
var patt = new RegExp('^[A-Z]')
var res = patt.test(str)

// console.log(res);

console.log('hello world');
*/
////////////////// disemvowel (removes aieuo) //////////////////
/*
var disemvowel = function(str) {
    var newString = str
    var patt = /[auieo]/
    for( var i = 0 ; i<str.length ; i++  ){
      if(patt.test(str[i])){
         newString = newString.replace(str[i], '')
        // newString.slice(i, i+1)
      }
    }
    return newString;
}
console.log(disemvowel("This website is for losers LOL!"));

*/
////////////////////////////////////////////////////



////////////////// Match E-mail //////////////////
// let checkEmail = str =>  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)
/*

var checkEmail = function(str) {
    var patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var result = patt.test(str)
    return result;
}

// var input  = prompt('Test')

// console.log(checkEmail());
 */
////////////////////////////////////////////////////


////////////////// Regexp Basics - is it IPv4 address? //////////////////
// Implement String#ipv4_address?, 
// which should return true if given object is an IPv4 address 
// - four numbers (0-255) separated by dots.
// It should only accept addresses in canonical representation, 
// so no leading 0s, spaces etc.

// var checkIp = function (ip) {
//     return /^(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/.test(ip)
// }

// console.log(checkIp(""), false);
// console.log(checkIp("127.0.0.1"), true);
// console.log(checkIp("0.0.0.0"), true);
// console.log(checkIp("255.255.255.255"), true);
// console.log(checkIp("10.20.30.40"), true);
// console.log(checkIp("10.256.30.40"), false);
// // console.log(checkIp(""), false);
// console.log(checkIp("127"), true);
// console.log(checkIp("0"), true);
// console.log(checkIp("255"), true);
// console.log(checkIp("10"), true);
// console.log(checkIp("39"), true);
// console.log(checkIp("149"), true);
// console.log(checkIp("10.256.30.40"), false);
// console.log(checkIp());
// console.log(checkIp());

////////////////////////////////////////////////////


// var toCamelCase =function (str) {

//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === '-' || str[i] === '_') {
//             str = str.replace(str[i], '').replace(str[i+1], str[i+1].toUpperCase());

//         }
//     }
//     return str;
// }

var toCamelCase =function (str) {
    var patt = /[-_](.)/g
    str = str.replace(patt, function(match){
       return match.charAt(1).toUpperCase();
    })
    return str;
}

console.log(toCamelCase('The-code-is-amazing'));
console.log(toCamelCase('the-code-is-amazing'));