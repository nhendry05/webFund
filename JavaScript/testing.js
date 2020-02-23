function sum_even(){
    var sum=0
    for(x = 2; x < 94; x++)
    {
        if(x%2 == 0)
        {
            sum=sum+x;
        }
    }
    return sum;
}

x = sum_even();
console.log(x)