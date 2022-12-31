let input=()=>{
    let proffession=prompt("What is your profession?");
    let age=prompt("How old are you?");
    let experience=prompt("Do You Have Working Experience in web development? Enter Numbers from 0 or 10...?");
    thisIsMe(proffession,age,experience);
}
let thisIsMe=(profession,age,experience)=>{
    console.log(profession+"\n");
    console.log(age+" years of age");
    console.log(experience+" years of Experience");
    console.log((experience>5)? "That Means you are Senior Web Developer":"That Means you are Junior Web Developer");
}
input();