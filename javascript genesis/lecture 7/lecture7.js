let database=[];
let username=prompt("give your Name");
let userPassword=prompt("Enter the password");
let useremail=prompt("enter your email");

let adddata=(username,userPassword,useremail)=>{
    database.push({
        Name:username,
        email:useremail,
        password:userPassword
    })
}
if(username!=null && userPassword!=null && useremail!=null){
    adddata(username,userPassword,useremail);
}else{
    alert("there is something missing in the form");
}

if(database[0].Name==username){
    console.log(` Welcome To Your Profile Page Dear ${username}`);
}

console.log(database);