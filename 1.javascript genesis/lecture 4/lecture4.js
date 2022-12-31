let username=prompt("what is your name");
let userage=prompt(`How old are you ${username}`);
if(userage<18){
    alert("Sorry, I can't serve you a drink because you are minor! Security!!");
}else{
    let ans=prompt("Sure what you want to drink, alcohol or non alcohol drink?");
    alert((ans=="yes")? "Here is your whisky!":"Here is your orange juice!");
}