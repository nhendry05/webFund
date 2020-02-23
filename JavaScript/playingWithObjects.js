/*
Nicole Hendry
Playing with Objects
*/

var users = [
    {
        name: "Michael", 
        age:37
    }, 
    {
        name: "John", 
        age:30
    }, 
    {
        name: "David", 
        age:27
    }
];
//print Michaels name
console.log(users[0].name);

//print name of first object
console.log(users[1].name);

//print name and age of all users
for(var i = 0; i<users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}

