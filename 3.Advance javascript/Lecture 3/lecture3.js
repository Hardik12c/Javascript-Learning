let mainarr=[
    {
        firstName: 'Tom',
        lastName: 'Cruise',
        country: 'USA',
        items: ['phone', 'laptop', 'jumping ropes']
    },
    {
        firstName: 'Hardik',
        lastName: 'Garg',
        country: 'India',
        items: ['phone', 'laptop', 'jumping ropes']
    },{
        firstName: 'Jubraj',
        lastName: 'Dev',
        country: 'India',
        items: ['phone', 'laptop', 'jumping ropes']
    },{
        firstName: 'Dhar',
        lastName: 'Mahendra',
        country: 'Australia',
        items: ['phone', 'laptop', 'jumping ropes']
    },{
        firstName: 'jai',
        lastName: 'jain',
        country: 'Australia',
        items: ['phone', 'laptop', 'jumping ropes']
    }
]

console.log('first:',mainarr);

//2) NOW CREATE NEW ARRAY WITH ONLY THE FIRST AND LAST NAMES OF USERS USING FOREACH
let foreacharr=[];
mainarr.forEach((e)=>{
    let obj={firstName:"",lastName:""};
    obj.firstName=e.firstName;
    obj.lastName=e.lastName;
    foreacharr.push(obj);
})
console.log('second:',foreacharr);

//3)NOW CREATE NEW ARRAY WITH ONLY THE FIRST AND LAST NAMES OF USERS USING MAPlet newUsersForEach = [];
let newarr=mainarr.map((e)=>{
    return `${e.firstName} ${e.lastName}`;
})
console.log('third:',newarr);

//4)FILTER THE USERS ARRAY TO A NEW ARRAY THAT WILL INCLUDE ONLY USERS FROM AUSTRALIA
let filteredArray=mainarr.filter((e)=>{
    if(e.country==='Australia'){
        return e;
    }
})

console.log('fourth: ',filteredArray);

// 5) BONUS: CREATE NEW ARRAY THAT WILL CONTAIN ALL USER INFORMATION BUT ADD "-CHECKED" TO THE END OF EACH ITEMS FOR THE USERS
// REMEMBER THE ITEMS ARE SEPARATE ARRAY INSIDE THE OBJ

let newmappedarray=mainarr.filter((e)=>{
    e.items=e.items.map((e)=>{
        return (`${e} -checked`);
    })
    return e;
})
console.log(newmappedarray);