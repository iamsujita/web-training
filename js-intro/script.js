//* console.log("first program");

// console.log(document.body.style.background = "purple");

// window.setTimeout(function(){
//     document.body.style.background ="blue";
// },5000);
// window.setInterval(function()
// {
//     document.body.innerHTML = `<h1>${new Date()}</h1>`
// }, 1000);

// /*const result = window.confirm("Are you sure?");
// console.log(result);*/

// const result = window.prompt("What's your name?");
// console.log(result);*/

//Js Script
// const Title = document.getElementById("Title");
// Title.style.fontSize = "60px"
const Title = document.getElementsByClassName("red")
Title[0].style.fontSize = "60px"

const firstList = document.querySelectorAll(".red");
//firstList.style.color = "purple";

firstList.forEach(function(item)
{
    item.style.color ='purple';
})

//Events
// document.addEventListener("click",function(){
//     console.log("You pressed Clicked");
// })

const button = document.querySelector('button');
document.addEventListener("keyup",function (event) {
    console.log(event);
    document.body.style.background = "pink";

})


