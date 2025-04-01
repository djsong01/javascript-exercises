const reverseString = function(string) {
    let reverse = '';
    let num = string.length;
    for(let i=0; i < string.length; i++){
        reverse += string.at(num-1)
        num--;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;


/*
PAUL (0,1,2,3)
length() = 4 
    string.at(4) 
new = string.at(4) + string.at(3) .. 
LUAP 
*/