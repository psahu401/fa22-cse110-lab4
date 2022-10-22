function timeCheck() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var timeSec = setInterval(timeCheck, 1000);
console.log(timeSec);
