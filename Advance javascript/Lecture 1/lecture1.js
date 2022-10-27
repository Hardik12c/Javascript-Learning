let first='first';
let second='second';
let third='third';

// changing the value of second
// second='2nd';
console.log(second);

// destructuring
var personObj = {
    firstName : 'Hardik',
    lastName : 'Garg',
    age : 18,
    student : true,
    height : 5.9
}
let {firstName,lastName,age,student,height}=personObj;
console.log(`Hello my name is ${firstName} ${lastName} and my age is ${age} with height equal ot ${height} and i study is ${student}`);

let details = `Hi there my name is: ${firstName} and my last name is ${lastName} I am ${age} years old, \n and my student status is: ${student}. Also my height is: ${height} meters.`;

console.log(details);

// default arguments
let thisCourse1=(studentName="dharmahendra", difficulty="hard")=>{
    if(studentName && difficulty){
        return studentName + " is still taking this course so its " + difficulty +" for me.";
    }
    else{
        return "This student is not taking this course so its very difficult for him/her.";
    }
}

console.log(thisCourse1());



// arrow function
let thisCourse=(studentName, difficulty)=>{
    if(studentName && difficulty){
        return studentName + " is still taking this course so its " + difficulty +" for me.";
    }
    else{
        return "This student is not taking this course so its very difficult for him/her.";
    }
}
console.log(thisCourse("hardik","hard"));
