


(function(){

    var p1scoreDisplay=document.getElementById('p1score');
var p2scoreDisplay=document.getElementById('p2score');

var inputScore=document.getElementById('inputScore');
var winScoreDisplay=document.querySelector('p span');

var p1Btn=document.getElementById('p1btn');
var p2Btn=document.getElementById('p2btn');
var btnReset=document.getElementById('resetBtn');

let p1Score=0;
let p2Score=0;
let WinDisplay=5;

let game=false;

function winner(oldScore,WinDisplay){
    if(oldScore===WinDisplay){

        if(p1Score===WinDisplay){
            p1scoreDisplay.classList.add('winner');
        }
        else{
            p2scoreDisplay.classList.add('winner');
        }
        game=true;
        p1Btn.setAttribute('disabled','disabled');
        p2Btn.setAttribute('disabled','disabled');
    }
 }

function reset(){
    p1Score=0;
     p2Score=0;
     game=false;
     p1scoreDisplay.textContent=0;
     p2scoreDisplay.textContent=0;
     p1scoreDisplay.classList.remove('winner');
     p1Btn.removeAttribute('disabled');
     p2Btn.removeAttribute('disabled');

}


p1Btn.addEventListener('click',()=>{
   
    if(!game){
        p1Score++;

        winner(p1Score,WinDisplay);
    }

   p1scoreDisplay.textContent=p1Score;

})

p2Btn.addEventListener('click',()=>{
    
    if(!game){
        p2Score++;
 
    winner(p2Score,WinDisplay);

    }
    p2scoreDisplay.textContent=p2Score;
 
 })

 inputScore.addEventListener('change',()=>{
//   console.log(typeof inputScore.value);
     WinDisplay=Number(inputScore.value);
     winScoreDisplay.textContent=inputScore.value;
     inputScore.value=' ';
     reset();
 })

 btnReset.addEventListener('click',reset);


})();