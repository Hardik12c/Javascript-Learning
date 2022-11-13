/* 
Async / await 

*/

//1) convert the fetch promise into async await
// fetch('https://pokeapi.co/api/v2/pokemon/1')
// .then(resp => resp.json())
// .then(data => console.log(data.name));


const func=async()=>{
    try {
        const response=await fetch('https://pokeapi.co/api/v2/pokemon/1');
        const data=await response.json();
        console.log(data.weight);
    } catch (error) {
        console.log(error);
    }
}

func();
//2 Update the async function from the lecture to not have .then methods inside
const jsonList = [
    'https://jsonplaceholder.typicode.com/userss',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(jsonList.map(url=>{
            return fetch(url).then(response => response.json())
        }));
    
        console.log('users ', users);
        console.log('posts ', posts);
        console.log('albums ', albums);
    }catch(error){
        console.log('Error, something happened, fix me!',error);
    }
}

getData();