/*
Group 5
Basic Foundations II
*/

//1
function big(arr){
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            arr[i] = 'big';
        }
    }
    return arr;
}
var arr = [-1, 1, -2, 2, -3, 3];
big(arr);

//2
function lowHigh(arr){
    var high = 0;
    var low = arr[0];
    for (var i = 0; i<arr.length; i++){
        if( arr[i]>high){
            high = arr[i];
        }
        if (arr[i]<low){
            low = arr[i];
        }
    }
    console.log("the lowest value is", low);
    return high;
}
var arr = [3, 4, 2, 1];
lowHigh(arr);

//3
function secondAndOdd(arr){
    var odd = 0;
    console.log("The second to last value is", arr[arr.length-2]);
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2!=0){
            odd = odd + 1;
        }
        if (odd == 2){
            return arr[i];
        }
    }
}
var arr = [1, 2, 3, 4, 5, 6];
secondAndOdd(arr);

//4
function double(arr){
    var newArr = [];
    for (var i = 0; i<arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}
var arr = [1, 2, 3, 4];
double(arr);

//5
function countPositives(arr){
    var count = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>0){
            count = count + 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}
var arr = [-1, 1, 1, 1];
countPositives(arr);

//6
function EvenOdd(arr){
    var countOdd = 0;
    var countEven = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]%2!=0 && arr[i+1]%2!=0 && arr[i+2]%2!=0){
            console.log("That's odd!")
        }
        if (arr[i]%2==0 && arr[i+1]%2==0 && arr[i+2]%2==0){
            console.log("Even more so!");
        }
    }
}
var arr = [1, 3, 5, 2, 4, 10];
EvenOdd(arr);

//7
function addOne(arr){
    for (var i = 1; i<arr.length; i+=2){
        arr[i] = arr[i] + 1;
        console.log(arr[i]);
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(addOne(arr));

//8
function previousLength(arr){
    var temp;
    var newArr = [];
    newArr.push(arr[0]);
    for (var i = 0; i<arr.length-1; i++){
        newArr.push(arr[i].length);
    }
    return newArr;
}
var arr = ["hello", "goodbye", "dojo", "coding"];
console.log(previousLength(arr));

//9
function addSeven(arr){
    var newArr = [];
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
var arr = [1,2,3,4];
addSeven(arr);

//10
function reverse(arr){
    var temp;
    for (var i = 0; i<(arr.length/2); i++){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var arr = [1,2,3,4,5];
console.log(reverse(arr));

//11
function negative(arr){
    var newArr = [];
    for( var i = 0; i<arr.length; i++){
        if(arr[i]<=0){
            newArr.push(arr[i]);
        }
        else if(arr[i]>0){
            newArr.push(arr[i]* -1);
        }
    }
    return newArr;

}
var arr = [-1, 2, -3, 4, -5];
negative(arr);

//12
function hungry(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            count = count + 1;
        }
    }
    if(count == 0){
        console.log("I'm hungry");
    }
}
var arr = ["happy", "yay"];
hungry(arr);

//13
function swapCenter(arr){
    var temp;
    for (var i = 0; i<(arr.length/2); i+=2){
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
var arr = [1,2,3,4,5, 6, 7, 8];
swapCenter(arr);

//14
function scaleArray(arr, num){
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
var arr = [1,2,3,4,5];
var num = 2;
scaleArray(arr, num);