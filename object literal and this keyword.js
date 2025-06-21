// Function basics
// Function declaration
// function jogKoro(a, b) {
//   return a + b;
// }
// let result = jogKoro(5, 7);
// console.log("Jogfol holo:", result); // Output: Jogfol holo: 12



// Object create and access 
// let person = {
//     name : 'Uttam dev',
//     addr : 'dinajpur',
//     interest : ['books','Bike'],
//     sayHello : function (){         //protita method ekta Function hote pare , kintu jokhon kono Function object e use hoy tokhon seta method
//         console.log('Hello World');
//     },
// };

// console.log(person);
// person.favlan = 'JS';

// console.log(person);

// delete person.addr;
// console.log(person);

// for(let el in person){

//     if(typeof person[el] == 'function'){
//         person[el]();  //invoke
//     }else{
//            console.log( person[el]);
//     }
// }






// onekgula parameter eksathe nite parbo

// function adder(...nums){
//     let res = 0;
//   for (let i = 0; i< nums.length;i++){
//     res += nums[i];
//   }
//   return res;

// }

// console.log(adder(2,3,4,5,6));





// kono array er value gula just copy kora(shortcut)
// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [...arr1];
// arr1[0] = 1000;
// console.log(arr2);
// console.log(arr1);



// koma chara individual protek value access(shortcut)

// let arr = [1,2,3,4,5,6,7];
// console.log(...arr);



//This keyword

//  Functions = global object(nodejs and browser o ache)
// method/object = parent object
// javascript run korbo windows and nodejs e . jokhon browser r run kori global object reFer korbe window ke ar node js e korle global object ache
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
// person.printinterest();


