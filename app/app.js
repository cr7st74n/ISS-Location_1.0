const url = "https://api.wheretheiss.at/v1/satellites/25544"

const time_ISS = document.querySelector("#real-time");
//Set the interval when we add the current date and time
setInterval(()=>{
    let date = Date()
    time_ISS.innerHTML = date
}, 1000)

//get all the elememt to display the information 
const isslat = document.querySelector("#ISS-lat");
const isslong = document.querySelector("#ISS-long");

// Fetch the information to added to our p elements.
fetch(url).then((res)=>{
    return res.json()
}).then((issData)=>{
    console.log(issData);
    // call lat and long from our json data.
    isslat.innerHTML = issData.latitude;
    isslong.innerHTML = issData.longitude;
 }).catch((err)=>{
    console.log('ERROR in the fetch', err);
 })

 //map part 
let zoomLevel = 4;
let US_coordinates = [40.0379411,-98.5021668,5]
// Create the map 
let map = L.map('Map-ISS').setView(US_coordinates, zoomLevel);

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map);