/*
Nicole Hendry
More Arrays
*/

//1
function resetNegatives(arr){
    for( var i = 0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
var arr = [1, -2, 3, -4, 5];
resetNegatives(arr);

//2
function moveForward(arr){
    var newArr = [];
    for(var i = 1; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    newArr.push(0);
    return newArr;
}
var arr = [1, 2, 3, 4, 5];
moveForward(arr);

//3
function reverse(arr){
    var y = 0;
    var newArr = [];
    for(var i = (arr.length-1); i>=0 ; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
var arr = [1,2,3,4,5];
reverse(arr);

//4
function repeatTwice(arr){
    var newArr = [];
    for (var i = 0; i <arr.length; i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return newArr;
}
var arr = [1, 2, 3];
repeatTwice(arr);

