/*
Based on Youtube Tutorials
In general, there is Canvas being used
*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#29d1fa';
/*custom function to convert degrees (360) into radians (2*Pi -A. A)*/
function degToRadian(degree) {
    var factor = Math.PI/180;
    return degree*factor;
}

function renderTime() {
    //JS Object new Date() - A.A>
    var currentDate = new Date();

    var currentDay = currentDate.toDateString();

    var currentTime = currentDate.toLocaleTimeString();
//standard JS functions getHours of JS object New Date - A. A.
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    var currentMillisecond = currentDate.getMilliseconds();

    var newSecond = currentSecond+(currentMillisecond/1000);

    //Background
    //ctx.fillStyle = "#366";
    gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, '#357');
    gradient.addColorStop(1, '#07303a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 620);

    //Hours
    ctx.beginPath();
    ctx.arc(250, 250, 200, degToRadian(270), degToRadian((currentHour*15)-90));
    ctx.stroke();
    //Minutes
    ctx.beginPath();
    ctx.arc(250, 250, 160, degToRadian(270), degToRadian((currentMinute*6)-90));
    ctx.stroke();

    //Seconds
    ctx.beginPath();
    ctx.arc(250, 250, 120, degToRadian(270), degToRadian((newSecond*6)-90));
    ctx.stroke();

    //Date
    ctx.font = "25px Arial";
    ctx.fillStyle = '#28d1fa';
    ctx.fillText(currentDay, 154, 220);
    

    //Time
    ctx.font = "40px Arial";
    ctx.fillText(currentTime, 168, 280);

    //Logo
    ctx.font = "10px Arial";
    ctx.fillText('http://arthem.Info', 215, 300);

    //Seconds
    ctx.font = "57px Arial";
    ctx.fillStyle = '#fff';
    ctx.shadowBlur = 15;
    ctx.fillText(currentSecond, 220, 350);
    if (currentSecond = 20) {
        ctx.fillStyle = 'red';
    }

    var dataURL =  canvas.toDataURL();
        document.getElementById("myClock").src = dataURL;
}

function digTime() {
    var currentDay = new Date();

    var currentDay = currentDay.getDate();
    return currentDay;
}

setInterval(renderTime, 40);
//alert(digTime());
