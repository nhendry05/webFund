/*
Nicole Hendry
Arrays
*/

//1
function greaterThanY(arr,y){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if (arr[i]>y ){
            count = count + 1;
        }
    }
    console.log("number of values greater than y :",count);

}
var arr = [];
var y;
arr = [1,2,3,4];
y = 2;
greaterThanY(arr,y);

//2
function max(arr){
    var max = arr[0];
    for(var i = 0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    console.log("The max value is", max);
}
function min(arr){
    var min = arr[0];
    for(var i = 0; i<arr.length; i++){
        if (arr[i]<max){
            min = arr[i];
        }
    }
    console.log("The min value is", min);
}
function avg(arr){
    var sum = 0;
    var avg;
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    console.log("The average value is", avg);

}

var arr = [];
arr = [3,5,7,1];
max(arr);
min(arr);
avg(arr);

//3
function replaceNeg(arr){
    for(var i = 0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

var arr = [];
arr = [2, -3, 5, -6, 1];
a = replaceNeg(arr);
console.log(a);

//4
function removeVal(arr, x, y){
    var newArr = [];
    var newNum;
    for ( var i = 0; i <arr.length; i++){
        if ((i < x) || (i > y)){
            newNum = arr[i];
            newArr.push(newNum);
        }
    }
    return newArr;
}
var arr = [];
var x;
var y;
var a;
arr = [1, 2, 3, 4, 5, 6];
x = 2;
y = 4;
a = removeVal(arr, x, y);
console.log(a);
