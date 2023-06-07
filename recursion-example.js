//sort the array using recursion
//array=[1,5,2,3,4]

// let array = [1,5,2,3,4];
let result = [];
let i=0;
let j=1;

function isSorted(array) {
    for(let i=0;i<array.length;i++) {
        if(array[i] > array[i+1]) {
            return false;
        }
    }
    return true;
}

function sortArray(array) {
    if(isSorted(array)) {
        result = array;
        return;
    }
    else if(array[i] < array[j]) {
        i++;
        j++;
        sortArray(array);
    } else {
        [array[i],array[j]] = [array[j],array[i]];
        i=0;
        j=1;
        sortArray(array);
    }
}

sortArray([1,5,2,3,4])
console.log("Result: ", JSON.stringify(result));
//time complexity = O(n) binary complexity
//Space complexity = O(1)