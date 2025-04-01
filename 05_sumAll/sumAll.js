const sumAll = function(a,b) {
    let total = 0;
    if(a < 0 || b < 0 || a%1 !== 0 || b%1 !==0 || 
        typeof a !== "number" || typeof b !== "number"){
        return 'ERROR';
    }
    else{
        if(a>b && b>0){
            for(let i=b; i<=a; i++){
                total += i; 
            };
        }
        else if(b>a && a>0){
            for(let i=a; i<=b; i++){
                total += i; 
            };
        }
        else{
            total = a;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;


/*
1,4 (a,b)
1+1 = 2 
2+1 = 3 
2,3 

a+b 



*/