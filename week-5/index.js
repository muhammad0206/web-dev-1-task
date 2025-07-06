const a = 10;
//end line, go to new line
const b = "20";
const e = null;
const f = undefined;

const a1 = 10;
const a2 = 20;

console.log(a1 > a2);

console.log(a1 < a2);

function sum(){
    return a1 === a2;
}

console.log(sum());

console.log(a1 + e);
console.log(f);

//array

const fruits = ["mango","pear","apple"];

console.log(fruits);

const personalinfo = {
     name : "john",
     Age : 24,
     adress : "Bandar Utama",
     favfood :{
        food:["nasi lemak","spegeti"],
        drink:["jus oren","milo"],
     },

};

function A1(){
    return "hello world";
}

const A2 =()=>{
    return "hello world";
}

console.log(A2);

const A = document.getElementsByClassName('gambar');

const slideshow = () =>{
    A.src('')
}