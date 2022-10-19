{/* <li class="element" id='elementId'>
    Going To The Zoo
    <span class="close">X</span>
 </li> */}



let ul=document.querySelector('ul');
let li=document.createElement('li');
li.className="element";
li.setAttribute('id','elementId');
li.innerText="Going To The Zoo";


let span=document.createElement('span');
span.className="close";
span.innerText="X";

li.appendChild(span);

ul.appendChild(li);
console.log(ul);
// console.log(li);
// console.log(span);