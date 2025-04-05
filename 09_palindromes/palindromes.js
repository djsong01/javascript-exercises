const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let len = Math.floor(string.length/2);
    let a = string.length

    if(string.length > 1){
        for (let i=0; i < len; i++){
            if(string[i] !== string[a-1-i]){
                return false;
            };
        }
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;


/*
Check first & last word is same 
    first: string.at(0)
    last: string.at(len-1)
Check first next & last nest word is same 
    Loops 

5 words 1-5, 2-4, 3 
4 words 1-4, 2-3 
6 words 1-6, 2-5, 3-4 
3 cycles 
1+ 1 + 1 
6 - 1 - 


*/