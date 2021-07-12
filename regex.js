
var str = "Coding is the best things in life"
var str1 = "coding is thE best things in life"

//str.match
// var res = str.match('[A-Z]')

// new RegExp
var patt = new RegExp('^[A-Z]')
var res = patt.test(str)

// console.log(res);

console.log('hello world');

const validatePIN = pin => {
    // const patt = new RegExp("[0-9]{4,4}")
    // const patt = new RegExp('[\d\d\d\d]||[\d\d\d\d\d\d]')
    // const pattern = /\d/
    const patt = /^[0-9]{4}$|^[0-9]{6}$/
    const res = patt.test(pin)
    return res 
}

// console.log( validatePIN('1234') );
// console.log( validatePIN('123456') );
// console.log( validatePIN('12') );
// console.log( validatePIN('1') );
// console.log( validatePIN('a122') );
// console.log( validatePIN('122222222cxcvd') );

// var patt = /^[0-2]([0-5]?[0-9]?)\.[0-2][0-5]?[0-9]?\.[0-2][0-5]?[0-9]?\.[0-2][0-5]?[0-9]?$/


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

// const disemvowel = (str) => {
//     let newString = str
//     let patt = /[auieo]/
//     for( let i = 0 ; i<str.length ; i++  ){
//       if(patt.test(str[i])){
//         // newString.slice(i, i+1)
//         newString = newString.replace(str[i], '')
//         // newString.slice(i, i+1)
//       }
//     }
//     return newString;
// }

console.log(disemvowel("This website is for losers LOL!"));