const doTest = (fun, input, output) => {
    let funOutput = fun(input)
    let check = output === funOutput ?  true : false
    return check 
}


const overTheRoad = (address, n) => {
    let oddSide = {}
    let evenSide = {}
    let counter = 1
    let answer
    for (let i = 0; i < n; i++) {
        let even = 2 * (n-i)
        oddSide[counter] = even
        evenSide[even] = counter
        counter += 2
    }
    answer = address % 2 === 0 ? evenSide[address] : oddSide[address]
    return answer
}
// const ans = overTheRoad(1, 3) // = 6
// const ans = overTheRoad(3, 3) // = 4
// const ans = overTheRoad(2, 3) // = 5
// const ans = overTheRoad(3, 5) // = 8
// const ans = overTheRoad(23633656673,310027696726) // = 596421736780
// console.log(ans);


// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
const findOdd = (array) => {
    let object = {}
    let oddValueIndex
    for (let i = 0; i < array.length; i++) {
        if(object[array[i]] === undefined){
            object[array[i]] = 1
        }else object[array[i]] += 1
    }
    let keys = Object.keys(object)
    let values = Object.values(object)
    values.forEach((v, i) => v%2 !== 0? oddValueIndex = i  : null)
    let answer = keys[oddValueIndex]
    return parseInt(answer);
}
// console.log( doTest( findOdd, [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5) );
// console.log( doTest( findOdd, [1,1,2,-2,5,2,4,4,-1,-2,5], -1)); 
// console.log( doTest( findOdd, [20,1,1,2,2,3,3,5,5,4,20,4,5], 5));
// console.log( doTest( findOdd, [10], 10));
// console.log( doTest( findOdd, [1,1,1,1,1,1,10,1,1,1,1], 10));
// console.log( doTest( findOdd, [5,4,3,2,1,5,4,3,2,10,10], 1));