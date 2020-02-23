/*
//Nicole Hendry
//Algorithm Book pgs 16, 20, 22

//setting and swapping
var myNumber = 42;
var myName = "Nicole";
var swap = myNumber;
myNumber = myName;
myName = swap;


//print and count
total = 0;
for(num = 512; num<4096; num++)
{   
    if(num%5 == 0)
    {
        console.log(num);
        var total = total +1;
    }

}
console.log("There were " + total + " multiples of 5 between 512 and 4096");

//print -5 to 1066

for(num = -52; num<=1066; num++)
{
    console.log(num);
}

//multiples of 6
num = 6;
while(num<=60000)
{
    if(num%6 == 0)
    {
        console.log(num);
    }
    num++;
}

//don't worry be happy
function beCheerful()
{
    console.log("good morning!");
}

for (x=1; x<96; x++)
{
    beCheerful();
}

//counting the dojo way
for (num=1; num<=100; num++)
{
    if (num%5 == 0)
    {
        console.log("Coding");
        if (num%10 == 0)
        {
            console.log(" Dojo");
        }
    }
    else{
        console.log(num);
    }
}

//multiples of three but not all
for(num=-300; num<=0; num++)
{
    if (num == -3 || num == -6)
    {}
    else 
    {
        if(num < 0)
        {
            var negNum
            negNum = num;
            negNum = negNum * -1;
            if (negNum%3 == 0)
            {
                console.log(num);
            }
        }
    }
}

//what do you know?
function func(incoming)
{
    console.log(incoming);
}
var inc = "incoming";
func(inc);

//printing integers with while
var num = 2000;
while(num<=5280)
{
    console.log(num);
    num++;
}

//whoa that suckers huge
var total;
for (num = -300000; num <= 300000; num++)
{
    if(num < 0)
    {
        var negNum;
        negNum = num * -1;
        if (negNum%2 == 0)
        {}
        else
        {
            total = total + num;
        }
    }
    else if (num > 0)
    {
        if (num%2 == 0)
        {}
        else
        {
            total = total + num;
        }
    }
}
console.log(total);

//you say its your birthday
var month;
var day;

if (month == 1 && day == 19)
{
    console.log("How did you know?");
}
else
{
    console.log("Just another day...")
}

//countdown by fours
var num = 2016;
while (num>0)
{
        console.log(num);
        num = num - 4;
}

//leap year
var year;

if (year%400 == 0)
{
    console.log("leap year");
}
else if (year%100 == 0)
{
    console.log("not a leap year");
}
else if (year%4 == 0)
{
    console.log("leap year");
}
else
{
    console.log("not a leap year");
}

//flexible countdown
var lowNum = 2;
var highNum = 9;
var mult = 3;

for (num = highNum; num > lowNum; num = num - mult )
{
   console.log(num);
}

//final countdown
var param1 = 3;
var param2 = 5;
var param3 = 17;
var param4 = 9;

var num = param3;

while (num >= param2)
{
    if ((num != param4) && (num%3 == 0))
    {
        console.log(num);
    }
    
    num --;
}

//countdown
var num = 5;
function countdown(num)
{
    var arr = [];
    for (x = num; x >= 0; x--)
    {
        arr.push(x);
    }
    return arr;
}
var array = countdown(num);
console.log(array);

//print and return
var  arr = [2, 3];
function printReturn(arr)
{
    console.log(arr[0]);
    return arr[1];
}
var sec = printReturn(arr);

//first plus length
var arr = [2, 3, 4, 5, 6];
function firstPlus(arr)
{
    var first;
    first = arr[0];
    plus = first + arr.length;
    return plus;
}
var total = firstPlus(arr);

//values greater than second
var arr = [1, 3, 5, 7, 9, 13];

function greaterSecond(arr)
{
    var i = 0;
    var x;
    var total = 0;

    for(x = arr[i]; i < arr.length; i++)
    {
        if(i>1)
        {
            console.log(arr[i]);
            total = total + 1;
        }
    }
    return total;
}

var totalValue = greaterSecond(arr);

//Values Greater than second, generalized
var firstArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function greaterSecondGen (firstArr)
{
    var newArray = [];
    var numValues = 0;
    var i = 0;
    var x;
    if (firstArr.length == 1 || firstArr.length == 2)
    {
        console.log("There are no values that meet this criteria");
    }
    for(x = firstArr[i]; i < firstArr.length; i++)
    {
        if (i>1)
        {
            newArray.push(firstArr[i]);
            numValues = numValues + 1;
        }
    }


    console.log(numValues);
    return newArray;
}
var newArr = greaterSecondGen(firstArr);

//this length, that value
var num1;
var num2;

function thisThat (num1, num2)
{
    var i;
    var arr = [];
    
    if(num1 == num2)
    {
        console.log("Jinx!");
    }
    for (i = 0; i < num1; i++)
    {
        arr.push(num2);
    }
return arr;

}
var newArr = thisThat(num1, num2);
console.log(newArr);

//fit the first value
var arr = [];
function firstValue(arr)
{
    if (arr[0] > arr.length)
    {
        console.log("Too big!");
    }
    else if (arr[0] < arr.length)
    {
        console.log("Too small!")
    }
    else
    {
        console.log("Just right!")
    }
}
firstValue(arr);

//fahrenheit to celsius
var fDegrees;
function fahrenheitToCelsius(fDegrees)
{
    var cDegrees;
    cDegrees= (fDegrees - 32) * (5/9)
    return cDegrees;
}
fahrenheitToCelsius(fDegrees);

//calsius to fahrenheit
var cDegrees;
function celsiusToFahrenheit(cDegrees)
{
    var fDegrees;
    fDegrees = (cDegrees * (5/9)) + 32;
    return fDegrees;
}
var x = celsiusToFahrenheit(cDegrees);
console.log(x);

//biggie size
var arr = [];
function makeItBig(arr)
{
    var idx;
    for(idx = 0; idx <arr.length; idx++)
    {
        if(arr[idx] > 0)
        {
            arr[idx] = "big";
        }
    }
    return arr;
}
var x = makeItBig(arr);
console.log(x);

//previous lengths
var lenArr = ["it", "his", "talk"];

function prevLength(lenArr)
{
    var idx;
    var prev = 0;
    
    for(idx = 0; idx < lenArr.length; idx++)
    {
        var lengNew = lenArr[idx].length;
        lenArr[idx] = prev;
        prev = lengNew;
    }
    console.log(lenArr);
    return lenArr;
}
prevLength(lenArr);

//print low, return high
var num = [4, 7, 9, 2];
function lowHigh(num)
{
    var highIdx = 0;
    var lowIdx = 0;
    var idx;
    var low;
    var high;

    for (idx = 0; idx < num.length; idx++)
    {
        if(num[idx] <= num[lowIdx])
        {
            lowIdx = idx;
        }
        else if (num[idx] >= num[highIdx])
        {
            highIdx = idx;
        }
    }
    low = num[lowIdx];
    high = num[highIdx];
    console.log(low);
    return high;
}
lowHigh(num);

//add seven to most
var origArr = [];
function seven(origArr)
{
    var idx;
    var newArr = [origArr[0]];
    for (idx = 1; idx < origArr.length; idx++)
    {
        newArr[idx] = origArr[idx] + 7;
    }
    return newArr;
}
seven(origArr);

//print one, return another
var myArr = [2, 2, 3, 4, 5];
function printOneReturnOne (myArr)
{
    var secondToLast;
    var firstOdd;
    var second = myArr.length - 2;
    secondToLast = myArr[second];
    console.log(secondToLast);
    var idx;
    for (idx = 0; idx<myArr.length; idx++)
    {
        if(myArr[idx]%2 != 0)
        {
            firstOdd = myArr[idx];
            break;
        }
    }
    return firstOdd;
}
printOneReturnOne(myArr);

//reverse array
var arr = [3, 1, 6, 4, 2];
function reverse(arr)
{
    var idx;
    var newArr = [];
    var newIdx = 0;
    for(idx = arr.length - 1; idx >= 0; idx--)
    {
        newArr[newIdx] = arr[idx];
        newIdx++;
    }
    arr = newArr;
    return arr;
}
reverse(arr);
*/
//double vision
var arr = [1, 2, 3, 4];
function double(arr)
{
    var newArr = [];
    var idx;
    for (idx = 0; idx < arr.length; idx++)
    {
        
    }

}
//outlook: negative
//count positives
//always hungry
//evens and odds
//swap toward the center
//increment the seconds
//scale the array

