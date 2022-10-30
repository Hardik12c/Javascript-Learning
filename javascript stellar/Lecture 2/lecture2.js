let btn =document.querySelector('.btn');

console.log(btn);
btn.addEventListener('click',()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
})