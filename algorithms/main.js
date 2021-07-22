/////////////  Bubble Sort
/////////////best     worst
/////////////O(n)       O(n^2)

const swap = (leftIndex, rightIndex, arr) => {
    let newArr = [...arr];
    let left = arr[rightIndex];
    let right = arr[leftIndex];
    newArr[leftIndex] = left;
    newArr[rightIndex] = right;
    return newArr
}

// const bubbleSort = arr => {
    // temp = ...arr ; 
    // i -> length
    // temp = moveMax(arr)


    // for (let i = 0; i < arr.length; i++) {
        
        
    // }

//     let tempArr
//     for (let i = 0; i < arr.tempArr; i++) {
//         let left = arr[i];
//         let right = arr[i + 1];
//         if (left >= right) arr = swap(i, i + 1, arr)
//     }
//     tempArr = arr;
// } //.splice(0, arr.length-1);

 const moveMax = arr => {
    let tempArr 
    for (let i = 0; i < arr.length; i++) {
    let left = arr[i];
    let right = arr[i+1];
    if(left >= right) arr = swap(i, i+1, arr);
    }
    return arr
 }

const bubbleSort = arr => {
    let tempArr = arr;
    for (let i = 0; i < arr.length; i++) {
        tempArr = moveMax(tempArr)
        
    }
}

let arr1 =  moveMax([5, 4, 5, 3, 2, 1]);
let arr2 =  moveMax(arr1);
let arr3 =  moveMax(arr2);
let arr4 =  moveMax(arr3);
let arr5 =  moveMax(arr4);
console.log(arr5);
