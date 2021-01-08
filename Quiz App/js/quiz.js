

let questions = [
    {
      id: 1,
      question: "What is the full form of RAM ?",
      answer: "Random Access Memory",
      options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
      ]
    },
    {
      id: 2,
      question: "What is the full form of CPU?",
      answer: "Central Processing Unit",
      options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None of these"
      ]
    },
    {
      id: 3,
      question: "What is the full form of E-mail?",
      answer: "Electronic Mail",
      options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
      ]
    }
  ];

  let question_count=0;
  let points =0;

  window.onload = function() {
    show(question_count);
  
  };

  function next(){
    let user_name=document.querySelector("li.option.active").innerHTML;
    if(user_name==questions[question_count].answer){
      points =points+10;
      sessionStorage.setItem("points",points);

    }

    if(question_count==questions.length-1){
      sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds.`)
      clearInterval(myTime);
      location.href="end.html";
      return;
    }

    

   
    
    // console.log(user_name);
    
    
    question_count++;
    // console.log(question_count);
    show(question_count);
  }




function show(count){
var question =document.getElementById("questions");

question.innerHTML=`<h2>Q${question_count+1}. ${questions[count].question}</h2>
<ul class="option_group">
<li class="option">${questions[count].options[0]}</li>
<li class="option">${questions[count].options[1]}</li>
<li class="option">${questions[count].options[2]}</li>
<li class="option">${questions[count].options[3]}</li>
</ul>`;
toogleActive();
}

function toogleActive(){

  var option =document.querySelectorAll("li.option");

  for(let i=0;i<option.length;i++){
    option[i].onclick=function(){
      for(let j=0;j<option.length;j++){
        if(option[j].classList.contains("active")){
          option[j].classList.remove("active")
        }
      }
      option[i].classList.add("active");
    }
  }
}