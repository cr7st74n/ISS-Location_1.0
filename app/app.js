const url = "https://api.wheretheiss.at/v1/satellites/25544"

const time_ISS = document.querySelector("#real-time");

setInterval(()=>{
    let date = Date()
    time_ISS.innerHTML = date
}, 1000)

const isslat = document.querySelector("#ISS-lat");
const isslong = document.querySelector("#ISS-long");


fetch(url).then((res)=>{
    return res.json()
}).then((issData)=>{
    console.log(issData);
    isslat.innerHTML = issData.latitude;
    isslong.innerHTML = issData.longitude;
 })