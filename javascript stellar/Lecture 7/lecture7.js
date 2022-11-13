
//ES9 SPREAD OPERATOR OVER OBJ
//1)WHAT WILL BE THE OUTPUT
let { x, ...rest } = { x: 1, a: 2, b: 3, c: 4 };

//A)
console.log(x);

// 1
//B)
console.log(rest); 
// complete object without 1

//2)SHALLOW CLONING EXAMPLE
//WHAT WILL BE THE OUTPUT
let { ...shallowCloneObj } = { x: 1, foo: () => {} };
console.log(shallowCloneObj); 
//3 NESTED OBJECTS 
/*
Sometimes we’ve nested objects. In that case, 
we could use the rest operator multiple times
to pick off the values we actually want. You
can see how is done in this example:
try finding the answer before peeking into the answers :)
*/
 let nestedObject = {
    x: [1, 2, 3],
    y: { a: 4, b: 5, foo: () => {} }
  };
  let { x: [x1, ...remainingX1], ...allRemaining } = nestedObject;
  console.log(x1); 
  console.log(remainingX1); 
  console.log(allRemaining); 

  //4) OBJECT MERGE
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3 };
let obj3 = { d: [ 'e', 'f' ] };
let mergedObj = { ...obj1, ...obj2, ...obj3 };
console.log(mergedObj); 