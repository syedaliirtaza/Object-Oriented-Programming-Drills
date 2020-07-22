//let's do some inheretance

class Vehicle{
    constructor(wheel,manufacturer){
        this.wheel = wheel;
        this.manufacturer = manufacturer;
        
    }
    aboutVehicle(){
        console.log(`This is ${this.manufacturer} and it has ${this.wheel} wheels .`);
    }
}

class Truck extends Vehicle{
    constructor(wheel,manufacturer,door,tbed){
    super(wheel,manufacturer);
    this.door = door;
    this.tbed = tbed;
    }
    aboutVehicle(){
        if(this.tbed){
            console.log(`This is ${this.manufacturer} and it has ${this.wheel} wheels and it also have ${this.door} doors and ${this.tbed} a truck bed.`);

        }else {
            console.log(`This is ${this.manufacturer} and it has ${this.wheel} wheels and it also have ${this.door} doors.`);
        }       
    }
    

}

class Sedans extends Vehicle{
    constructor(wheel,manufacturer,size,door,mgp){
        super(wheel,manufacturer);
        this.size = size;
        this.door = door;
        this.mgp = mgp;
    }
    aboutVehicle(){
        console.log(`This is ${this.manufacturer} and it has ${this.wheel} wheels and it also have ${this.door} doors. it has mileage of about ${this.mgp} and the size is ${this.size} .`);      
    }

}

class Motorcycles extends Vehicle{
    constructor(wheel,manufacturer,noDoor,handle){
        super(wheel,manufacturer);
        this.noDoor = noDoor;
        this.handle = handle;
    }
    aboutVehicle(){
        console.log(`This is ${this.manufacturer} and it has ${this.wheel} wheels and it dsn't have a ${this.noDoor} doors. it has ${this.handle}.`);      
       
    }
}

let n1 = new Truck(4,'truckmaker',4,'yes');
let n2 = new Sedans(4,'honda','small',4,'good mileage',);
let n3 = new Motorcycles(2,'motorcycle','door','barhandle');
n1.aboutVehicle();
n2.aboutVehicle();
n3.aboutVehicle();

// let's do this in Es6 Class way 

// class Person{
//     constructor(name,age,loc){
//         this.name = name;
//         this.age = age;
//         this.loc = loc;        
//     }
//     sayHello(){
//         console.log(`Hello! My name is ${this.name} and i'm  ${this.age} years old and i live in ${this.loc} .`);        
//     }
// }

// let p1 = new Person('Irtaza',18,'lahore');
// let p2 = new Person('Mutu',19,'NYC');
// let p3 = new Person('Will',23,'BHD');
// let p4 = new Person('Charlie',21,'LA');
// let p5 = new Person('Brown',19,'DAA');

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();

// let's do this with pseudo class way 

// function Person(name,age,loc){
//     this.name = name;
//     this.age = age;
//     this.loc = loc;
// }

// Person.prototype.sayHello = function(){
//     console.log(`Hello! My name is ${this.name} and i'm 
//     ${this.age} years old and i live in ${this.loc} .`);
// }

// let p1 = new Person('Irtaza',18,'lahore');
// let p2 = new Person('Mutu',19,'NYC');
// let p3 = new Person('Will',23,'BHD');
// let p4 = new Person('Charlie',21,'LA');
// let p5 = new Person('Brown',19,'DAA');

// p1.sayHello();
// p2.sayHello();
// p3.sayHello();
// p4.sayHello();
// p5.sayHello();




// object literal way 

// let person1 = {
//     name: 'irtaza',
//     sayHello: function(){
//         console.log(`Hello! my name is ------`);
//     }
// };
// let person2 = {
//     name: 'Will',
//     sayHello: function(){
//         console.log(`Hello! my name is ------`);
//     }
// };
// let person3 = {
//     name: 'Matt',
//     sayHello: function(){
//         console.log(`Hello! my name is ------`);
//     }
// };
// let person4 = {
//     name: 'Brown',
//     sayHello: function(){
//         console.log(`Hello! my name is ------`);
//     }
// };
// let person5 = {
//     name: 'Mutu',
//     sayHello: function(){
//         console.log(`Hello! my name is ------`);
//     }
// };
// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();