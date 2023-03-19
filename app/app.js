const url = "https://api.wheretheiss.at/v1/satellites/25544"

const time_ISS = document.querySelector("#real-time");
//Set the interval when we add the current date and time
setInterval(()=>{
    let date = Date()
    time_ISS.innerHTML = date
}, 1000)

//get tge ISS data every 10 sec
const update =10000
let ISSmarker

get_ISSData()
setInterval(get_ISSData,update);

//get all the elememt to display the information 
const isslat = document.querySelector("#ISS-lat");
const isslong = document.querySelector("#ISS-long");

// Create the map 
let map = L.map('Map-ISS').setView([0,0], 1);

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map);


//set icon 
const ISSIcon =  L.icon({
    iconUrl: "./css/icons8-space-station-60.png",
    iconSize:     [20, 27]
});

// Fetch the information to added to our p elements.

function get_ISSData(){

fetch(url).then((res)=>{
    return res.json()
}).then((issData)=>{
    // call lat and long from our json data.
    isslat.innerHTML = issData.latitude;
    isslong.innerHTML = issData.longitude;

    //create the marker
    if(!ISSmarker){
        ISSmarker = L.marker([issData.latitude,issData.longitude],{icon:ISSIcon}).addTo(map);
    }else {
        ISSmarker.setLatLng([issData.latitude,issData.longitude]);
    }

 }).catch((err)=>{
    console.log('ERROR in the fetch', err);
 })


}