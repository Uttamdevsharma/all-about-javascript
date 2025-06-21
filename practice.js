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
