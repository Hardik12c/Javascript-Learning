//1) DO THE FOLLOWING EVALUATION
//YOU CAN USE CONSOLE.LOG OR THE BROWSER
const firstArray = [1,2,3];
const secondArray = [1,2,3];
const obj1 = {};
const obj2 = {};
//EVALUATE
console.log(firstArray === secondArray);
//EVALUATE
console.log(obj1 === obj2);

//2 WHAT ARE THE VALUES OF EACH OBJECT 
const obj3 = { x: 3};
const obj4 = obj3;
const obj5 = obj4;
const obj6 = { x: 4};
//EXAMPLE value of obj3.x
//1) ? 
console.log(obj3.x)
//2) ?
console.log(obj4.x)
//3) ?
console.log(obj5.x)
//4) ? 
console.log(obj6.x)

//3)Set the value of the x for object3 to be 7
obj3.x = 7;
//1) ?  for object 3 value will be 7
//2) ?  for object 4 value will be 7 because as object 3 changes object 4 will also get changed
console.log(obj4.x);
//3) ?  for object 5 the value will be 7 as for object 4
console.log(obj5.x);
//4) ? for object 6 the value will be 4 as it is

/*THIS IS ANIMAL CLASS, THE CLASS HAS ITS OWN CONSTRUCTOR
THAT IS SETTING THE NAME,
ALSO THE CLASS ANIMAL HAS THREE METHODS INSIDE
*/
class Animal {
    constructor(name) {
      this.name = name;
    }
    setSpeed(speed){
        this.speed = speed;
    }
    run() {
      console.log(`${this.name} runs with speed ${this.speed} km/h.`);
    }
    stop() {
      this.speed = 0;
      console.log(`Stop running ${this.name}, you need to stands still and your speed needs to ${this.speed}.`);
    }
  }
/*CREATING INSTANCE OF THE ANIMAL CLASS WITH KEYWORD NEW */
let animal = new Animal("Animal");
console.log(animal);


class Rabbit extends Animal{
    constructor(name){
        super(name);
        this.name=name;
    }
    setlegs(legs){
        this.legs=legs;
    }
    hide(){
        console.log(`The ${this.name} has ${this.legs} legs but now wants to hide!!`)
    }
}
let arabbit=new Rabbit("cutie");
arabbit.setSpeed(5);
arabbit.setlegs(4);
arabbit.run();
arabbit.stop();
arabbit.hide();
/*And we would like to create another class Rabbit.

As rabbits are animals, Rabbit class should be based on Animal class
so this class must have access to all of the animal methods/

The syntax to extend another class is: Child extends Parent Class.
1) So you need to create class Rabbit that inherits from Animal:
2) Need to add another property for the Rabbit and that is number of legs
3) Object of Rabbit class needs another method called hide
this method will use the name that was set in the parent class
and and say for example: "The White Rabbit has 4 legs but now wants to hide!"
So the output should be something like this
Animal {name: "Animal"}
The White Rabbit runs with speed 5 km/h.
The White Rabbit has 4 legs but now wants to hide!!
let rabbit = new Rabbit("The White Rabbit",4);
rabbit.setSpeed(5);
rabbit.run();
rabbit.hide();
*/
