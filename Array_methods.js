// map - ager existing length onujayi notun array nite hobe, nahole undeFined dekhabe
// Filter - eta ager exiting array thke nirdisto kichu object nite parbo
// every / some = Boolean
// ei 3 ta method er parameter e map(el,index,array)  thakbe


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
        gender: "male",
        color : "red",
        interests: ["JavaScript", "Math"]
    },
    {
        name: "Bormon",
        age: 18,
        color : "red",
        gender : "male",
        interests: ["Movie", "Reading"]
    },
    {
        name: "Sadia",
        age: 22,
        color : "blue",
        gender: "female",
        interests: ["Coding", "Design"]
    }
];


// using map
// let newArr = users.map((el) => {
//     return {
//         name: el.name,
//         age: el.age,
//     };
// });
// console.log(newArr);



// using filter and get jader boyos 20 er upore
// let agegreaterthan20 = users.filter((el)=> {
//      return el.age > 20;
// });
// console.log(agegreaterthan20);



// jara male tader object nibo using filter
// let maleObj = users.filter((el) => el.gender == "male");
// console.log(maleObj);


// using every/some - red color sobar ache kina
// let redAll = users.some((el) => el.color == "red");
// console.log(redAll);



// Filters - ekhane ager array theke filter kore notun array create hobe

// let nums = [2, 3, 1, 8, 9];
// let newArr = nums.filter((el) => {
//     if (el > 5) {
//         return el;
//     }   
//  });
// console.log(newArr);





// every / some -> Boolean

// let arr = [1,2,2,3,4,5,6,7];
// let arr = [2,4,6,8];

// let isEven = arr.some((el) => {
//     return el % 2 == 0;
// });

// console.log(isEven);


let num1 = [3,5,1,667,23,2345,76,89];

num1.sort(function(a,b){
    return a - b;
});
console.log(num1);


// zero -> jevabe acho sevabei bosho
// negative -> a ager boshe b pore
// positive -> b age boshe a pore