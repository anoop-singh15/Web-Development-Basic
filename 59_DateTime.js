
function time() {
    let date = new Date();
    let h = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(h>12)
    {
        h-=12;
    }
    
    document.getElementById('hr').innerHTML=h;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

}
setInterval(time, 1000);
