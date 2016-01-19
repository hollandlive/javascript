function clock(){
    //calculate angle
    //Initializing ***LOCAL*** (within function)
    //variables for d-date, h-hour, m-minutes, s-seconds
    var d, h, m, s;
    d = new Date;

    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60); 
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
console.log(h);

    //move clock
    setAttr('hour', h);
    setAttr('min', m);
    setAttr('sec', s);
    setAttr('sec-tail', s+180);

    //display time
    h = d.getHours();
    console.log(h);
    m = d.getMinutes();
    s = d.getSeconds();

    if (h >= 12) {
        setText('suffix', 'PM');
    } else {
        setText('suffix', 'AM');
    } 
    if (h != 12) {
        h %= 12;
    }
console.log(h);
console.log(setText('hr', h));

    setText('hr', h);
    setText('mn', m);
    setText('sc', s);

    //call every second
    setTimeout(clock, 1000);

};

function setAttr(id, val){

    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v)

};

function setText(id, val){
    if (val < 10) {
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;

};

window.onload=clock;
