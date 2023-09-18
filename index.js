window.onload=function () {
    var seconds=0;
    var tens=0;
    var minutes=0;
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
    var appendMinutes=document.getElementById("minutes");
    var buttonStart=document.getElementById('button-start');
    var buttonStop=document.getElementById('button-stop');
    var buttonReset=document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick=function(){
        clearInterval(Interval);
        Interval=setInterval(startTimer,0.1);
    }
    buttonStop.onclick=function(){
        clearInterval(Interval);
    }
    buttonReset.onclick=function(){
        clearInterval();
        tens="00";
        seconds="00";
        minutes="00";
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
        appendMinutes.innerHTML=minutes;
    }
    function startTimer(){
        tens++;
        if(tens<9)
        {
            appendTens.innerHTML="0"+tens;
        }
        if(tens>9)
        {
            appendTens.innerHTML=tens;
        }
        if(tens>99)
        {
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+tens;
        }
        if(seconds>9)
        {
            appendSeconds.innerHTML=seconds;
        }
        if(seconds>60)
        {
            seconds=0;
            appendSeconds.innerHTML=seconds;
            minutes++;
            if(minutes<9)
            {
                appendMinutes.innerHTML="0"+minutes;
            }
            else
            {
                appendMinutes.innerHTML=minutes;
            }
        }
    }

}