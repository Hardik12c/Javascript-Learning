let input=document.querySelector('.input');
let btn=document.querySelector('.addBtn');
let ul=document.querySelector('ul');
let list=Array.from(document.querySelectorAll('.element'));
let spanelement=Array.from(document.querySelectorAll('.close'));
let appdnfunction=()=>{
    if(input.value!=""){
        let span=document.createElement('span');
        let li=document.createElement('li');
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


btn.addEventListener('click',appdnfunction);
input.addEventListener('keydown',(e)=>{
    if(e.keyCode=='13'){
        appdnfunction();
    }
})

list.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.classList.toggle('checked');
    })
})

spanelement.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.parentElement.remove();
    })
})