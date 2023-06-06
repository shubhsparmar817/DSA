//check Unique number
//[1,1,2,2,3,4,4,5,6,7,8,8]
//output->8

function getUniqueCount(array) {
    if(array.length > 0) {
        let i=0;
        for(let j=1;j<array.length;j++) {
            if(array[i]!==array[j]) {
                i++;
                array[i]=array[j];
            }
        }
        return i+1;
    } else {
        throw new Error("Array is empty!");
    }
}
console.log("Result1: ", JSON.stringify(getUniqueCount([1,2,2,5,6,7,8,9,9,10,10,20])));
//time complexity = O(n)
//Space complexity = O(1)