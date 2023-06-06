//checking sum of zero - Problem 1
//[-5,-4,-3,-2,-1,0,1,2,3,4,5] -> Input
// [?, ?] -> Output

//Approch 1
function getSumZero(inputArray) {
    for(let i=0;i<inputArray.length;i++) {
        for(let j=i+1;j<inputArray.length;j++){
            if((inputArray[i]+inputArray[j]) == 0) {
                return [inputArray[i], inputArray[j]];
            }
        }
    }
}
console.log("Result1: ", JSON.stringify(getSumZero([-5,-4,-3,-2,0,2,4,8])));
//time complexity = O(n2) quadratic complexity
//Space complexity = O(1)

//Approch 2 (Optimized)
function findSumPaired(array) {
    let left = 0;
    let right = array.length-1;
    while(left < right) {
        let sum = array[left] + array[right];
        if(sum === 0) {
            return [array[left], array[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.log("Result2: ", JSON.stringify(findSumPaired([-5,-4,-3,-2,0,2,4,8])));
//time complexity = O(n) linear complexity
//Space complexity = O(1)