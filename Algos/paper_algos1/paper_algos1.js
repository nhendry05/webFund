/*
Nicole Hendry
Paper Algos 1
*/

//Part 1
//1
function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);
//2
function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
//3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}
//4
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);
//5
for(var i=0; i<15; i+=2){
    console.log(i);
 }
 //6
 for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){       
        console.log(i*j);
    }
 }
 //7
 function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){         
           console.log(i*j);
       } 
    }
 }
 z = looping(3,3);
 console.log(z);
 //8
 function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<y; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 z = looping(3,5);
 console.log(z);
 
//Part 2
//1
function printUpTo(x){
    if(x <= 0){
        return false;
    }
    else{
        for(var i = 1; i<=x; i++){
            console.log(i);
        }
    }
  }
  printUpTo(100000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false

//2
function printSum(x){
    var sum = 0;
    for (var i = 0; i<=x; i++){
        console.log(i);
        sum = sum + i;
        console.log("the sum so far is", sum);
    }
    return sum
  }
  y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

  //3
 function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum = sum + x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6