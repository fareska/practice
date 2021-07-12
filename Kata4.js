//Challenge Fun #22: Count The Lies
const countTheLies = (n, introductions) => {


    let falseCounters
    let animals = {}
    const canEat = (animal1, animal2) => {
        if (typeof animals[animal2] === 'array') {
            animals[animal2].forEach(a => {
                if (a === animal1) {
                    return false
                }

            })
        } else if (animals[animal2] === animal1) {
            return false
        } else {
            return true
        }
    }
    // const areASame = () => {
    //     if (animals[animal2] === animals[animal1]) return true 
    // }
    // const areASame = (animal1, animal2) => animals[animal2] === animals[animal1] ? true : false

    for (let i = 0; i < introductions.length; i++) {
        const introduction = introductions[i];
        if (introduction[1] > n || introduction[2] > n) falseCounters++
        if (introduction[0] === 1) {
            if (introduction[1] === introduction[2]) falseCounters++
            else animals[introduction[1]] === introduction[2]
        } else {
            ans = canEat(introduction[1], introduction[2])
            ans ? animals[introduction[1]] = introduction[2] : falseCounters++
        }
        // let ans
        // if(introduction[0] === 1){
        //      ans = areASame(introduction[1], introduction[2])
        //      animals[introduction[1]] = introduction[2]
        // }else {

        // }

        // ans ? null : falseCounters++
    }
    return falseCounters
}

/*
const object = {
    1: 2,
    3: 4,
    7:2,

}

console.log(Object.entries(object));

// 0: (2) ["1", 2]
// 1: (2) ["3", 4]
// 2: (2) ["7", 2]

*/

// Traffic Lights - multiple cars //Kata 5

// const trafficLights = (road, n) => {
//     let roads = []
//     for (let i = 0; i < n.length; i++) {


//     }
// }






/////////////  From..To..Series #5: from word1 to word2. How many steps should shift   ////////////////
const getClosest = (array1, array2) => {
    let shifts = []
    for (let i = 0; i < array1.length; i++) {
        let sub
        array1[i]
        for (let j = 0; j < array2.length; j++) {
            if (sub === undefined) {
                sub = getShifts(array1[i], array2[j])
            } else {
                let shift = getShifts(array1[i], array2[j])
                sub = shift < sub ? shift : sub
            }

        }
        shifts.push(sub)
    }

    return shifts
}

const getShifts = (num1, num2) => {
    let sub = num1 - num2 < 0 ? num2 - num1 : num1 - num2
    return sub
}

const getSum = (array) => {
    let sum = 0
    array.forEach(num => sum += num);
    return sum
}


const howManyShift = function (word1, word2) {
    let wordOne = [];
    let wordTwo = [];
    let shiftsCounter = 0
    let word1Arr = word1.split("")
    let word2Arr = word2.split("")
    word1Arr.forEach(w => wordOne.push(w.codePointAt()))
    word2Arr.forEach(w => wordTwo.push(w.codePointAt()))

    let shifts = getClosest(wordOne, wordTwo)
    let sumShifts = getSum(shifts)
    console.log(sumShifts);
    // return wordTwo - wordOne
    // return shiftsCounter
}

console.log(howManyShift("dog","cat"));
// console.log(howManyShift("word","text"));
// console.log(howManyShift("code","wars"));
// console.log(howManyShift("same","same"));

// 10
// kata4.js:124 9
// kata4.js:124 12
// kata4.js:124 0

// Test.assertSimilar(howManyShift("dog","cat") , 12)
// Test.assertSimilar(howManyShift("word","text") , 9)
// Test.assertSimilar(howManyShift("code","wars") , 24)
// Test.assertSimilar(howManyShift("same","same") , 0)









//////////////////////////// Sum of Intervals ////////////////////////////
/*
const getNewSub = (givenLeft, givenRight, interval) => {
    let numbers = interval
    numbers.push(givenLeft, givenRight)
    let newInterval = ['min', 'max']
    for (let i = 0; i < numbers.length; i++) {
        if (isNaN(newInterval[0])) newInterval[0] = numbers[i]
        else if (numbers[i] < newInterval[0]) newInterval[0] = numbers[i]
        if (isNaN(newInterval[1])) newInterval[1] = numbers[i]
        else if (numbers[i] > newInterval[1]) newInterval[1] = numbers[i]
    }
    // let min
    // let max
    // for (let i = 0; i < numbers.length; i++) {
    //     if (min === undefined) min = numbers[i]
    //     else if (numbers[i] < min) min = numbers[i]
    //     if (max === undefined) max = numbers[i]
    //     else if (numbers[i] > max) max = numbers[i]
    // }
    return newInterval
    // return min, max

}
// console.log(getNewSub(3, 5 , [1,4]));
// console.log(getNewSub(3, 5 , [1,4])[1]);

const checkInterval = function (givenLeft, givenRight, intervals) {
    let updatedIntervals = []

    for (let i = 0; i < intervals.length; i++) {
        let left = intervals[i][0];
        let right = intervals[i][1];

        if (givenLeft - right >= 0 || left - givenRight >= 0) {
            updatedIntervals = false
        } else {
            let interval = getNewSub(givenLeft, givenRight, intervals[i])
            updatedIntervals.push(interval)
        }
    }
    // for (let i = 0; i < intervals.length; i++) {
    //     let left = intervals[i][0];
    //     let right = intervals[i][1];

    //     if (givenLeft - right >= 0) {
    //         updatedIntervals.push(intervals[i])
    //     }
    //     else if (left - givenRight >= 0) {
    //         updatedIntervals.push(intervals[i])
    //     } else {
    //         let interval = getNewSub(givenLeft, givenRight, intervals[i])
    //         updatedIntervals.push(interval)
    //     }
    // }

    return updatedIntervals
}

// console.log(checkInterval(3, 10 , [[1,4]]));
// console.log(checkInterval(2, 15 , [[1,4],[7,10]]));

const getIntervalSum = (intervals) => {
    let sum = 0
    for (let i = 0; i < intervals.length; i++) {
        sum += intervals[i][1] - intervals[i][0]
    }
    return sum
}

const sumIntervals = function (intervals) {
    let checked = []

    for (let i = 0; i < intervals.length; i++) {
        let left = intervals[i][0];
        let right = intervals[i][1];
        let long = right - left;
        if (checked.length > 0) {
            let check = checkInterval(left, right, checked)
            if (!check) {
                checked.push(intervals[i])
            } else {
                checked = check
                // checked.push(intervals[i])
            }
        } else {
            checked.push(intervals[i])
        }
    }

    let sum = getIntervalSum(checked)
    return sum
}

console.log(sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]));

*/