let database=[
    {
        name: "Rick",

        lastName: "Sekuloski",

        email: "rick@gmail.com",

        password:"password123",

        createdAt:"11/11/2023"
    },
    {
        name: "Hardik",

        lastName: "Garg",

        email: "Hardik12c@gmail.com",

        password:"1234",

        createdAt:"11/11/2023"
    },
    {
        name: "jai",

        lastName: "Jain",

        email: "jai@gmail.com",

        password:"1234",

        createdAt:"11/11/2023"
    },
    {
        name: "jubraj",

        lastName: "dev",

        email: "jubraj@gmail.com",

        password:"1234",

        createdAt:"11/11/2023"
    },
    {
        name: "dhar",

        lastName: "Mahendra",

        email: "dm@gmail.com",

        password:"1234",

        createdAt:"11/11/2023"
    }
]
let userEmail=prompt("Enter your email");
let userPassword=prompt("Enter your password");
console.log(database.length);
for(var i=0;i<database.length;i++){
    if(userEmail==database[i].email && userPassword==database[i].password){
        console.log(
            `Welcome back this is your profile page

            1. You can edit your name: ${database[i].name}
            
            2. You can edit your last name: ${database[i].lastName}
            
            3. You can edit your email address: ${database[i].email}
            
            4. You can edit your password: ${database[i].password}
            
            Your account was created at: 11/11/2023`
        )
        break;
    }else{
        console.log("PLease try it again");
    }
}