let jsobj={
    firstname:"hardik",
    lastname:"Garg"
}
console.log(jsobj);

// converting it to JSON format

let json=JSON.stringify(jsobj);
console.log(json);

// converting it again to js file

let jsconverobj=JSON.parse(json);
console.log(jsconverobj);