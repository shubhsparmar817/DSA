//Divide & Conquerer Technique
//find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

//min 0 element 1
//max array.length - 1 element 15
//midIndex = (min+max)/2=7 index element 8

function getIndexOfValue(array, value) {
    let min = 0;
    let max = array.length - 1;
    while(min <= max) {
        let mid = Math.floor((min + max)/2);
        if(array[mid] < value) {
            min = mid + 1;
        } else if(array[mid] > value) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return false;
}
console.log("Result: ", JSON.stringify(getIndexOfValue([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 7)));
//time complexity = O(log(n)) binary complexity
//Space complexity = O(1)