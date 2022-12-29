let arr1=[1,2,3,[4,5]];
console.log(arr1);

console.log(arr1.flat()); 

let arr2=[1,2,3,[4,[5,6]],7,[8,[9,10,11,[12]]]];
console.log(arr2);
console.log(arr2.flat());
console.log(arr2.flat(2));

let firstname="     Hardik";
let lastname="Garg     ";
console.log(`hello my name is ${firstname} ${lastname}.`);
firstname=firstname.trimStart();
lastname=lastname.trimEnd();
console.log(`hello my name is ${firstname} ${lastname}.`);

// formentries

const usernames=[
    ['Hardik','India'],
    ['jai','japan'],
    ['Dharmahendra','Usa']
];
console.log(usernames);
const userobj=Object.fromEntries(usernames);
console.log(userobj);