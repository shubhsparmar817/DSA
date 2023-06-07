//Count largest sum of cunsucutive digits
//[1,2,3,4,3,5,4,6,7,8]
//n->4

//Algorithm
//step 1: n > array -> return error
//step 2: 10 - n + 1 loops 

function getMaxSum(array, num) {
    if(num > array.length) {
        throw new Error
    } else {
        let max = 0;
        for(let i=0;i<array.length-num+1;i++) {
            // console.log("i",array[i]);
            let temp = 0;
            for(let j=i;j<i+num;j++) {
                temp += array[j];
                // console.log("j",array[j]);
            }
            if(temp > max) {
                max = temp;
            }
            // break;
        }
        return max;
    }
}
console.log("Result1: ", JSON.stringify(getMaxSum([1,2,3,4,3,5,4,6,7,8], 4)));
//time complexity = O(n2) quadratic complexity
//Space complexity = O(1)