let user_name=sessionStorage.getItem("name");
let user_point=sessionStorage.getItem("points");
let user_time=sessionStorage.getItem("time");

document.querySelector("span.name").innerHTML=user_name;
document.querySelector("span.point").innerHTML=user_point;
document.querySelector("span.time").innerHTML=user_time;