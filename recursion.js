//Recursion: function call itself

function recursion(number) {
    console.log("recursive function called");
    number--;
    if(number > 0) {
        recursion(number);
    }
}
recursion(10);