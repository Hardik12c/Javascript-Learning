/*
ES7 EXERCISES 
TRY THEM BEFORE YOU RUN THEM IN THE CONSOLE
*/
const cars = ['BMW','FORD','AUDI', 'PORSCHE','MERCEDES'];
//1) check if the cars array includes name of the car lincoln
//2) Find if the array have these 3 letters MER, if it does then
//print back the name in separate array, TIP: use filter with condition

//3) CALCULATE THE POWER OF 10 OF A NUMBER ENTERED IN THE FUNCTION AS ARGUMENT

console.log(cars.includes('lincoln'));
const newarr=cars.filter(carname=>carname.includes('MER'));
console.log(newarr);

const powerfunc=(num)=>{
    console.log(num**10);
}
powerfunc(2);