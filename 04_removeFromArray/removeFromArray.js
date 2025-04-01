const removeFromArray = function(array, ...rm) {
    let newArr = [];
    newArr = array.filter(x => !rm.includes(x));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;


/*
array [1,2,3],3
    check 1 != 3 
    add 1 to new Arry 

for (let i=0; i < array.length; i++){
    if(array[i] !== rm){
        newArr.push(array[i])
    }
    else{
        continue;
    }
}    
*/