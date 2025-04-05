const fibonacci = function(num) {
let list = [1,1]; // 0 & 1 
let total = 1; 
num = Number(num);

    if(num === 0){
        return 0;
    }
    else if(num < 0){
        return "OOPS"
    }
    else if(typeof num !== 'number'){

    }
    else if(num === 1 || num === 2){
        return 1;
    }

    else{
        for (let i=1; i <= num; i++){
            total = total + list[i-1]
            list.push(total);
        };
        return list[num-1];
    };

};

// Do not edit below this line
module.exports = fibonacci;


/*
num = 5 
1 1 2 3 5 8
deafult 1 
i=0 / total = 0+1 (total=1) / push(total) >> [1,1] //list[0] = 1 

num 3 // total = 1 // [1,1]
i=1 / total = 1+1 (total=2) / push(total) >> [1,1,2] // list[0] = 1 
i=2 / total = 2+1 (total=3) / push(total) >> [1,1,2,3] // list[1] = 1
i=3 / total = 3+2 (total=5) / push(total) >> [1,1,2,3,5] // list[2] = 2
i=4 / total = 5+3 (total=8) //push total >> [1,1,2,3,5] // list[3] = 3



i = 1 a = 1 > total = 0 + 1 // total = 1 > push(1) = [1,1]
i = 2 a = 2 > total = 1 + 2 // total = 3 > push(2) = [1,1,2]
i = 3 a = 3 > total = 3 + 3 

CLEANER VERSION

const fibonacci = function(num) {
  num = Number(num);

  if (isNaN(num) || num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1) return 1;

  let list = [0, 1];

  for (let i = 2; i <= num; i++) {
    list[i] = list[i - 1] + list[i - 2];
  }

  return list[num];
};


*/