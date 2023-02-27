var firstName = "Cr7s"

// console.log(firstName);

// var isCr7sCool =true

//console.log(isCr7sCool)

var a = 67;
var b = 60;
var c = 10;
var d = "10";
var bool1= true;
var bool2 = false;

//False values:
var data = "";
var another = false; 
var oneMore = 0;
var Nodifine = undefined;
var oneMoreAgain= null;
var defaulData = "there is no data at this point"
var otro =true

// console.log(b / a);
// console.log(c === d);
// console.log(bool1 || bool2 )

//Boolean values with not and and 
var check = bool1 || bool2;

var anothercheck = oneMore || data || defaulData;

var lastCheck = 0 && "Tony";

console.log(check);
console.log(anothercheck);
console.log(lastCheck);
console.log(!data)


//Logical Conditions
console.log("Logical conditions")

if (a>b){
    console.log("a es mayor a b");
}else{
    console.log("a es menor que b");
}

if (a > b && a ===67){
    console.log("a is the boss");
    //alert("hola perro")
}

console.log("Password if")
var password ="hola-yo"
if (password.length <= 8){
    console.log("You need a longer password");
}else if(password.length === 7){
    console.log("password iqual 7");
} else{
    console.log("This password is correct");
}

//alert
// alert("hora perro")

//for loop 
for (var i=0 ;i<5 ; i++){
    console.log("console this out"); 
}
