// By using treditional for looping method 
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
};

// By using Array.forEach method 
var map = function(arr, fn) {
    let newArr = [];
    arr.forEach((element, index) => {
        newArr.push(fn(element, index));
    });
    return newArr;
};