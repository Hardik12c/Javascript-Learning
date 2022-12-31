// const promist=new Promise((res,rej)=>{
//     setTimeout(res,3000,"resolved");
// });

// promist
// .then(result=> console.log(result));

// fetch('https://pokeapi.co/api/v2/pokemon/2')
// .then(response=> response.json())
// .then(data=>console.log(data));

const pokemonURL=[
    'https://pokeapi.co/api/v2/pokemon/1',
    'https://pokeapi.co/api/v2/pokemon/2',
    'https://pokeapi.co/api/v2/pokemon/3',
    'https://pokeapi.co/api/v2/pokemon/4'
]

Promise.all(pokemonURL.map((url) =>
    fetch(url).then(pokemon=>pokemon.json())
))
.then(data=> {
    console.log(data[0].name);
    console.log(data[1].name);
    console.log(data[2].name);
    console.log(data[3].name);
})
.catch(()=> console.log("error"));