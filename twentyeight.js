let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() =>{
    let currentTime = new Date();

    if(currentTime.getHours() > 12){
        let time = currentTime.getHours() - 12;
        hrs.innerHTML = (time<10?"0":"") + time;
    }
    else{
        hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    }
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000);

