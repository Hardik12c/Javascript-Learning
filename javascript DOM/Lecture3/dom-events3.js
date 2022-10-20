let input=document.querySelector('.input');
var btn=document.querySelector('.addBtn');
let ul=document.querySelector('ul');
let span=document.createElement('span');
let li=document.createElement('li');


let appdnfunction=()=>{
    if(input.value!=""){
        li.className="element";
        li.setAttribute('id','elementId');
        li.innerText=input.value;
        span.className="close";
        span.innerText="X";
        li.appendChild(span);
        ul.appendChild(li);
        input.value="";
    }else{
        alert("task bar is empty");
    }
}
btn.addEventListener('click',appdnfunction());

input.addEventListener('keydown',(e)=>{
    if(e.keyCode=='13'){
        appdnfunction();
    }
})

