const btn = document.getElementById("btn-1");
const box = document.getElementById("box");

/*btn.addEventListener("click",() =>{
    const colour = ["red","green","blue"];
    const randomIndex = Math.floor(Math.random() * colour.length);
    btn.style.backgroundColor = colour[randomIndex];
});*/

const colour = ["red","green","blue","lightblue"];
const randomIndex  = () =>{
    Math.floor(Math.random() * colour.length);
    btn.style.backgroundColor = colour[randomIndex];
}

const growbox = () =>{
    box.style.width ="300px";
    box.style.height ="300px";
    box.style.backgroundColor="lightgreen";

}

const shrinkbox = () =>{
    box.style.width ="100px";
    box.style.height ="100px";
    box.style.backgroundColor="red";

}

box.addEventListener("mouseover",growbox);
box.addEventListener("mouseout",shrinkbox);
box.addEventListener("click",shrinkbox);

btn.addEventListener("click",randomIndex)