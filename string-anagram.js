//String Anagram
//hello -> llheo

//Algorithm
//step 1: length check (for both string)
//step 2: letter with same occurrence

function isAnagram(string1, string2) {
    if(string1.length !== string2.length) {
        return false;
    }
    let counter = {};
    for(let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1;
    }
    for(let item of string2) {
        if(!counter[item]) {
            return false;
        }
        counter[item]-=1;
    }
    return true;
}
console.log("Result1: ", JSON.stringify(isAnagram("hello","llheo")));
//time complexity = O(n)
//Space complexity = O(1)