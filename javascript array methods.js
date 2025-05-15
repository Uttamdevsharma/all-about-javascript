// existing array ke modify kora - map
// let nums =[2,3,1,8,9];

// let newArr = nums.map((el) => {
//     return el * 2;
// })
// console.log(newArr);



let users = [
    {
        name: "Uttam Sharma",
        age: 25,
        interests: ["JavaScript", "Math"]
    },
    {
        name: "Bormon",
        age: 18,
        interests: ["Movie", "Reading"]
    },
    {
        name: "Sadia",
        age: 22,
        interests: ["Coding", "Design"]
    }
];


let newArr = users.map((el) => {
    return {
        name: el.name,
        age: el.age,
    };
});

console.log(newArr);


let agegreaterthan20 = users.filter((el)=> {
     return el.age > 20;
});
console.log(agegreaterthan20);



// Filters - ekhane ager array theke filter kore notun array create hobe

// let nums = [2, 3, 1, 8, 9];
// let newArr = nums.filter((el) => {
//     if (el > 5) {
//         return el;
//     }   
//  });
// console.log(newArr);

