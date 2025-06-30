

// Arrow Function
// let sayHello = (name) => 5;
// console.log(sayHello());

// const add = (a, b) => a + b;
// console.log(add(2,3));





//Factory function

// function createPerson(name,addr,interest){
//     return {
//         name,
//         addr ,
//         interest ,
//         sayHello(){
//             console.log("Hello Uttam");
//         },
//     };
// }

// let person1=createPerson('uttam','dinajput',['read','cricket']);


// let person2 = createPerson('akash','pabna',['love','song']);
// person2.roll = 32;

// console.log(person2);




// This keyword
//  {}-object create = (new)ekta keyword, mane ekta object nicchi
// function CreatePerson(name,age,interest){
//     (this.name = name),
//     (this.age = age),
//     (this.interest = interest);

// }

// let person1 = new CreatePerson('uttam',25,['js','php']);
// console.log(person1);




// Constructor Function

// class CreatePerson{
//     constructor(name,age,interest){
//         this.name = name;
//         this.age = age;
//         this.interest = interest;

//     }

//     sayHello(){
//         console.log("Hello " , this.name);
//     }

// }

// let person1 = new CreatePerson('uttam',25,['js','php']);

// person1.sayHello();




















// foreach example
// const fruits = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit, index) {
//   console.log(index + 1 + ". " + fruit);
// });




// IIFE - immidaiately invoked function expression
// setinterval, settimeout
// ((name) =>{
//     console.log("Hello ",name);
// }) ('uttam');


// setInterval(function(){
//     console.log("hello world");
// },1000);

// setInterval((name) => {
//     console.log("Hello Uttam");
// }, 1000);

// setTimeout((msg)=>{
//     console.log("Hello Riddi");
// },3000);
