function submitForm(e){
    // console.log("form submit");
    e.preventDefault();
   let name= document.forms["welcome_form"]["name"].value;
   sessionStorage.setItem("name",name);
   
   location.href="quiz.html";
    
}