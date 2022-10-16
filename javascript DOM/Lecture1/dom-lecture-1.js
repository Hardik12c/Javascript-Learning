//DOM SELECTORS
/*
1) TAG NAME ---  getElementsByTagName
2) CLASS NAME --- getElementsByClassName
3) ID --- getElementById
4) Query Selector --- querySelector
5) Query Selector --- querySelectorAll
6) Get Attribute --- getAttribute
7) Set Attribute ---setAttribute
8) style.property
9) className
10) classList 
    = add
    = remove
    = toggle
11)innerHTML & innerTEXT
12) parentElement
13) parentElement.children

Check the features if they are working on this page
This will tell you if the browser support any of javascript
or css features you will type
So can i use is very popular website for features and browsers compatibilty
Now some new features will not work on each browser, make sure you do understand
this
https://caniuse.com/
*/
let heading1=document.querySelector("h2");
let inputele=document.querySelector("input")
console.log(heading1.getAttribute("id"));
// let li=document.querySelectorAll(".element")[1].setAttribute('class','no-check');
heading1.style.backgroundColor="red";
console.log(inputele);
inputele.className="hello";
document.querySelector("li").classList.add("element");
document.querySelector("li").classList.remove("element");