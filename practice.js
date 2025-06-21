// let person = {
//     name : 'Uttam dev',
//     addr : 'dinajpur',
//     interest : ['books','Bike'],
//     sayHello : function (){
//         console.log('Hello World');
//     },
// };


// console.log(person);
// person.addr =" Dahaka";
// console.log(person);
// delete person.addr;
// console.log(person);

// for(let el in person){
//     if (typeof person[el] == 'function'){
//         person[el]();
//     }else{
//         console.log(person[el]);
//     }
// }


// function adder(...nums){
//     let res = 0;
//     for(let i =0; i < nums.length; i++){
//         res += nums[i];
//     }
//     return res;
// }
// console.log(adder(2,3,4,5));


// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [...arr1];
// arr1[0] = 1000;
// console.log(arr2); // আগেরটা থাকছে
// console.log(arr1); // পরিবর্তিত হচ্ছে


// let arr = [1,2,3,4,5,6,7];
// console.log(...arr);



// let person = {
//     name : 'Uttamdev',
//     addr : {
//         city : 'Dhaka',
//         zip : 1800,
//     },
//     Interst : ['js','PHP','Python'],
//     sayHello() {
//         console.log('Hello :' , this.name);
//     },
//     printinterest(){
//         this.Interst.forEach((el)=>{
//             console.log(this.name + ' Loves ' + el);
//         });
//     },
// };
// person.sayHello();



// let sayHello = (name) => 5;
// console.log(sayHello());

// const add = (a,b) => a+b;
// console.log(add(2,3));


// function createPerson(name, addr, interest) {
//     return {
//         name,
//         addr,
//         interest,
//         sayHello() {
//             console.log("Hello Uttam");
//         },
//     };
// }

// let person1 = createPerson('uttam', 'dinajpur', ['read', 'cricket']);
// let person2 = createPerson('akash', 'pabna', ['love', 'song']);
// person2.roll = 32;

// console.log(person2.name);



// let person = {
//     name : "Uttam Sharma",
//     sayHello :  f {
//         console.log("Hello : " + this.name);
//      },

// }
// for(let el in person){
//     if (typeof person[el] == 'function'){
//         person[el]();
//     }else{
//         console.log(person[el]);
//     }
// }


// const add = (a,b) => a+b;
// console.log(add(3,4));


// function createperson(name,addr,interest){
//     this.name = name;
//     this.addr = addr;
//     this.interest = interest;
// }

// let person1 = new createperson("utttam",'dinajpur',['book','music']);
// let person2 = new createperson("sharma",'dhaka',['book','music']);
// console.log(person1.addr);



// class createPerson {
//     constructor(name,age,addr){
//         this.name=name;
//         this.age = age;
//         this.addr =addr;
//     }

//     sayhello(){
//         console.log("Hello : " +this.name);
//     }
// }

// let person1 = new createPerson("Uttam",21,"dinajpur");
// console.log(person1.age);




// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit, index) {
//   console.log(index + 1 + ". " + fruit);
// });




// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 }
// ];

// products.forEach(function(p) {
//   console.log(`${p.name} costs Tk ${p.price}`);
// });


// ((name)=> {
//     console.log("Hello" , name);
// })("uttam");


// setInterval(function(){
//     console.log("Hello uttam");
// },1000);


// let nums = [2, 3, 1, 8, 9];

// let newArray = nums.map((el) => {
//     return el*2;
// });
// console.log(newArray);

let nums = [2, 3, 1, 8, 9];

let newArray = nums.map(el => el*2);
console.log(newArray);