/*
Nicole Hendry
Basic Foundations 1
*/

//1
function newArr(){
    var arr = [];
    for(var i = 0; i<=255; i++){
        arr.push(i);
    }
    return arr;

}

//2
function sumEven(){
    var sum = 0;
    for(var i = 0; i<=1000; i++){
        if(i%2==0){
            sum = sum + i;
        }
    }
    return sum;
}

//3
function sumOdd(){
    var sum = 0;
    for(var i = 0; i<=5000; i++){
        if(i%2!=0){
            sum = sum + i;
        }
    }
    return sum;
}

//4
function sumArr(){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
var arr = [1, 2, 3, 5];

//5
function max(arr){
    var max = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}
var arr = [4, 2, 5];

//6
function avg(arr){
    var sum = 0;
    for (var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
        }
    return sum/arr.length;
}
var arr = [4, 2, 5];

//7
function oddArr(){
    var newArr = [];
    for ( var i = 0; i <=50; i++){
        if(i%2!=0){
            newArr.push(i);
        }
    }
    return newArr;
}
console.log(oddArr());

//8
function greaterThan(arr, y){
    var count = 0;
    for (var i = 0; i<arr.length; i++){
        if(arr[i]>y){
            count = count + 1;
        }
    }
    return count;
}
var arr = [1, 2, 3, 4, 5, 6, 7];
var y = 4;
greaterThan(arr, y);

//9
function square(arr){
    var newArr = [];
    for (var i = 0; i<arr.length; i++){
        newArr.push(arr[i]*arr[i]);
    }
    return newArr;
}
var arr = [1, 2, 3, 4];
square(arr);

//10
function negative(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
var arr = [-1, 1, -2, 2, -3, 3];
negative(arr);

//11
function maxMinAvg(arr){
    var max = 0;
    var min = 0;
    var sum = 0;
    var avg;
    var newArr = [];
    for (var i = 0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = sum/arr.length;
    newArr = [max, min, avg];
    return newArr;
    }
var arr = [-3, 5, 7];
maxMinAvg(arr);

//12
function swap(arr){
    var temp_first;
    var temp_last;
    temp_first = arr[0];
    temp_last = arr[arr.length-1];
    arr[0] = temp_last;
    arr[arr.length-1] = temp_first;
    return arr;
}
var arr = [1, 2, 3];
swap(arr);

//13
function string(arr){
    for (var i =0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
 var arr = [-1, 1, -2, 2, -3, 3];
 string(arr);