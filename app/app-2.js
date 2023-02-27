// function rps(){
//     var choices = ["r",'p','s'];
//     var userChoice = prompt("Choose r, p or s");
//     var winningConditions = ["pr",'sp','rs'];
//     var compChoise = choices[Math.floor(Math.random()*choices.length)];
//     var won = winningConditions.includes(userChoice+compChoise);

//     // if(won){

//     // }
// }

// prompt("hola jilipolla");

var headerE1 = document.querySelector(".main-header");
var wrapperE1 = document.querySelector(".wrapper");

console.log(headerE1.innerText);
console.log(headerE1.attributes);

//headerE1.remove();
headerE1.innerText = "hola desde JS";
headerE1.style.color = "rgb(10, 200,80)";
headerE1.setAttribute("class" , "change")

console.log(wrapperE1); // CALL AND PRINT THE  function 

//Event  Listener  - Web API
var btnEl = document.querySelector("#start");
var count = 0;


btnEl.addEventListener('click',function(){
    count++;
    console.log(count);
});


// var data = {
//     name:"Cris"
// }
// var headerAll = document.querySelectorAll(".main-header");

// for (var i=0; i < headerAll.length;i++){
//     console.log(headerAll[i]);
// }

function querySelector(selector){

    //code lines ....
    return {};
}

var result = querySelector();

// console.log(result);
