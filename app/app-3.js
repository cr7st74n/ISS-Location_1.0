

var submitBtn = document.querySelector("#btn");
var startBtn = document.querySelector("#start");
var textHold = document.querySelector("#text");
var link = document.querySelector("#link");

console.log("value" , textHold.value);

function Addelement(event){

    var ValueInFunt = textHold.value;
    event.preventDefault();  // CHECK THIS OUT 
    //console.log("called");     //This functions works and is called
    console.log(ValueInFunt);

    // Conditoins to validate if the text that the user pass is at least 8 characteres
    if (ValueInFunt.length < 8){
        alert("mas de 8 letras ");
    }else{
        console.log("good");
    }

}

var eventObj={  addEventListener(TypeOfEvent, cb){
    var eventObj = { 
        target: {name:"colas"}// tris is just and object of information 
    };
    cb(eventObj)
  } // nooooooo (=)  just  .
}

submitBtn.addEventListener("click", function(argun){
    argun.preventDefault();
    console.log(argun);

})


link.addEventListener("click", function(estoPrevieneDefault){
    estoPrevieneDefault.preventDefault();
})





// startBtn = addEventListener("click", function(whatisthis){
//     console.log(whatisthis);

// } )


//Funtion Callback 

// function TimeApp(num, strg , appFun){

//     setTimeout(function(){
//         appFun("hola que tal ")
//     },num );
// }

// TimeApp(3000,"hey",function(arg){
//     console.log(arg);
// });