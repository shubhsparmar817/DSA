//Checking sum in another array
//array1 = [1,2,3,4], array2=[1,9,4,16]
//array1 = [1,2,4,2], array2=[1,4,4,16]

//map1 = {1: 1, 2:2, 4:1}
//map2 = {1: 1, 4:2, 16:1}

function getSquareInAnother(array1, array2){
    let map1 = {};
    let map2 = {};

    for(let item of array1) {
        map1[item] = (map1[item] || 0) + 1;
    }
    for(let item of array2) {
        map2[item] = (map2[item] || 0) + 1;
    }
    for(let key in map1) {
        if(!map2[key * key] || map1[key] !== map2[key * key]) {
            return false;
        }
    }
    return true;
}

console.log("Result1: ", JSON.stringify(getSquareInAnother([1,2,4,2],[1,4,4,16])));
//time complexity = O(n) binary complexity
//Space complexity = O(1)