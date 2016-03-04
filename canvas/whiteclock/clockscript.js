/*
Simple countdown (stopwatch)
In JavaScript
Example - http://arthem.info/canvas/whiteclock/
*/
var time = 0;
var running = 0;

function startStop () {
    if(running == 0) {
        running = 1;
        increment();
        document.getElementById('startStop').innerHTML = 'Pause';
    } else {
        running = 0;
        document.getElementById('startStop').innerHTML = 'Resume';
    }
}

function increment() {
    if (running == 1) {
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);

            if (mins < 10) {
                mins = "0" + mins;
            }


            var secs = Math.floor(time/10);
            if (secs < 10) {
                secs = "0" + secs;
            } 


            var tenths = time%10;
            document.getElementById('output').innerHTML = mins + ":" + secs + ":" + "0" + tenths;
            increment();
        }, 100);
        
    }
}

/*function increment() {
    setTimeout(startStop, 1000);
    time = time + 1;
    document.getElementById('secs').innerHTML = time;

}*/

function reset() {
    running = 0;
    time = 0;
    document.getElementById('startStop').innerHTML = 'Start';
    document.getElementById('output').innerHTML = '00:00:00';
}


