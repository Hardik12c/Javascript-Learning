/*
TRY TO GUESS THE OUTPUT
WITHOUT EXECUTING THE FUNCTION INTO THE BROWSER OR LINKING
IT TO THE INDEX.HTML FILE

Note:
In Pass by Value, Function is called by directly passing the value of the variable as the argument. 
Changing the argument inside the function doesn’t affect the variable passed from outside the function.
*/
//1)PASS BY VALUE
function passByValue(a, b) { 
    console.log(`This is  from Inside the function passByValue`); 
    a = 15; 
    b = 20; 
    console.log(`a = ${a} & b =${b}`);     // a=15,b=20
  } 
  let a = 10; 
  let b = 20; 
  console.log(`Values of the variables a & b before passByValue`); 
  console.log(`a = ${a} & b =${b}`);   // a=10,b=20
  //CALL THE METHOD TO SEE THE CHANGES
  passByValue(a, b);
  console.log("Values of the variables a & b after call the passByValue function"); 
  console.log(`a = ${a} & b =${b}`);    // a=10,b=20

  //PASS BY REFERENCE OBJECTS AND ARRAYS

  /*NOTE THIS:
    In Pass by Reference, Function is called by directly passing the reference/address
    of the variable as the argument. Changing the argument inside the function affect the 
    variable passed from outside the function. 
    In Javascript objects and arrays follows pass by reference.
  */
  //2
  function passByReference(obj) { 
    console.log(`What is obj Inside Call by Reference Method`); 
    obj.a = 100; 
    console.log(obj);   //100
  } 
  let obj = {a:1};
  console.log(`What is obj Before Call by passByReference Method`); 
  console.log(obj);    //1
  //CALL THE METHOD TO SEE THE CHANGES
  passByReference(obj);
  console.log(`After Call by Reference Method`); 
  console.log(obj);   //100