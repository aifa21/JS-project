let dt=new Date(new Date().setTime(0));
let time=dt.getTime();
let seconds=Math.floor((time%(100*60))/1000);
let minutes=Math.floor((time%(1000*60*60))/(60*1000));
// console.log("g"+time);

let timex=0;
let myTime =setInterval(function(){
    if(seconds<59){
        seconds++;
    }
    else{
        minutes++;
        seconds=0;
    }
// timex++;
// console.log(timex);
let format_secs=seconds<10?`0${seconds}`:`${seconds}`;
let format_mins=seconds<10?`0${minutes}`:`${minutes}`;
document.querySelector(".time").innerHTML=`${format_mins}:${format_secs}`;
},1000)