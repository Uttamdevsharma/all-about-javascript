let person = {
    name : 'Uttamdev',
    addr : {
        city : 'Dhaka',
        zip : 1800,
    },
    Interst : ['js','PHP','Python'],
    sayHello() {
        console.log('Hello :' , this.name);
    },
    printinterest(){
        this.Interst.forEach((el)=>{
            console.log(this.name + ' Loves ' + el);
        });
    },

};
person.printinterest();