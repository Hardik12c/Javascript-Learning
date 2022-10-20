let input=document.querySelector('.input');

// input.addEventListener('keydown',(e)=>{
//     console.log(e);
//     console.log(`${e.keyCode} with value ${e.key}`);
// })
// input.addEventListener('keyup',(e)=>{
//     console.log(e);
//     console.log(`${e.keyCode} with value ${e.key}`);
// })
input.addEventListener('keypress',(e)=>{
    console.log(e);
    console.log(`${e.keyCode} with value ${e.key}`);
})