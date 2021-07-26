

/////////////*******************/////////////
/* const object = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
}

let check = Object.entries(object);

const removeDuplicateIds = (objectEntries) => {
    let allChars = {};
    let tempObje = {};
    const removeChar = (current, prev, char) => {
            tempObje[prev.num]= deleteChar(tempObje[prev.num], char);
            allChars[char].num = current.num;
            allChars[char].index = current.index;
      
    }
    for (let i = 0; i < objectEntries.length; i++) {
        const element = objectEntries[i];
        let newChars = cleanVals(element[1]);
        tempObje[element[0]] = newChars;
        newChars.forEach((char, i) => {
            allChars[char]
                ? removeChar({ num: element[0], index: i }, { num: allChars[char].num, index: allChars[char].index }, char)
                : allChars[char] = { num: element[0], index: i };
        });
    }
    console.log('all chars', allChars);
    console.log('temp obje', tempObje);
}

const deleteChar = (array, letter) => {
    let tempArr = [...array];
    array.forEach((char, i) => {
        if(char === letter){
            tempArr.splice(i, 1);
        }
    });
    return tempArr;
}

const cleanVals = (array) => {
    let temp = {};
    array.forEach(char => {
        temp[char] ? null : temp[char] = 1;
    });
    return Object.keys(temp);
}
console.log(removeDuplicateIds(check));
 */
/////////////*******************/////////////
/////////////*******************/////////////
/////////////*******************/////////////

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

// Courtesy of projecteuler.net
/* 
const isMultiples35 = num => num % 3 === 0 || num % 5 === 0 ? true : false;

const solution = (number) => {
    let sum = 0;
    if(number >= 0){
        for (let i = 0; i < number; i++) {
            if (isMultiples35(i)){
                sum += i
            }
        }
    }
    else {
        return 0;
    }

    return sum;
}

console.log(solution(10));
 */

/////////////*******************/////////////
/////////////*******************/////////////
/////////////*******************/////////////
const digital_root = (n) => {
    let num = n;
    if (num > 9){
        let array = num.toString().split("");
        let sum = 0;
        array.forEach(element =>  sum +=   parseInt(element) );
        if (sum > 9) {
            digital_root(sum )
        } else {
            return sum;
        }
    }else {
        return num
    }

}

console.log(digital_root(942));

// const sumNums = array => array.forEach(element =>  sum += element);

// while(array.length > 1){
// }
