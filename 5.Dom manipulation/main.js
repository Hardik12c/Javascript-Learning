const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const button = document.querySelector(".btn-reset");


{/* <li class="todo-list-element">
  <span class="todo-list-element-title">Add Extra Course Lectures.</span>
  <a href="" class="todo-list-element-trash">
    <i class="fa fa-trash"></i>
  </a>
</li> */}


let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items',JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

console.log(itemsArray);
console.log(data);

const makeLi = text =>{
    //create an li element
const li = document.createElement('li');

//add class
li.className = 'todo-list-element';

//append text
// li.textContent = 'Text goes here';
li.textContent = text;
//create an a href element
const link = document.createElement('a');

//class name
link.className = 'todo-list-element-trash';

//innerHTML
link.innerHTML = '<i class="fa fa-trash" ></i>';

li.appendChild(link);

//append to ul
ul.appendChild(li);

// console.log(li);
}

button.addEventListener('click',function(){

  localStorage.clear();
  itemsArray = [];
  while(ul.firstChild){
      ul.removeChild(ul.firstChild);
  }
});

function removeItem(e){
  e.preventDefault();

  if(e.target.parentElement.classList.contains('todo-list-element-trash')){
      // console.log('success');
      if(confirm('Are You Sure You Want To Delete This Item?')){
          e.target.parentElement.parentElement.remove();
      }
      removeFromStorage(e.target.parentElement.parentElement);
  }
  // else{
  //     console.log('you clicked the li');
  // }
  // console.log(e.target);
}

form.addEventListener('submit',function(e){

  e.preventDefault();
  itemsArray.push(input.value);
  localStorage.setItem('items',JSON.stringify(itemsArray));
  makeLi(input.value);
  input.value = '';
});


data.forEach(item =>{
  // console.log(item);
  makeLi(item);
  ul.addEventListener('click',removeItem);
});


function removeFromStorage(liItem){
 // console.log(liItem);
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
//  console.log(itemsArray);

  itemsArray.forEach(function(singleElement, index){

      console.log(singleElement,index);

      if(liItem.textContent === singleElement){
          
          itemsArray.splice(index,1);
      }
  });
 console.log(itemsArray);
 localStorage.setItem('items',JSON.stringify(itemsArray));
}