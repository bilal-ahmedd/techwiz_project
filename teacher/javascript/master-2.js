// CALLING THE VARIABLE FROM SIDEBAR SECTION
let sidebar = document.getElementById("side");
let closeBtn = document.getElementById("btn");
let searchBtn = document.getElementById("search");

// ADD CLICK EVENT TO SIDEBAR MENU BARS
closeBtn.addEventListener("click", ()=>{
  side.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// calling name from the login page through localStorage on the sidebar
document.getElementById("std_name").innerHTML="Welcome! " + localStorage.getItem("name_add");
document.getElementById("std_names").innerHTML= localStorage.getItem("name_add");

// returning to login page by clicking logout button
function log_out() {
  localStorage.removeItem("name_add")
  window.open("../index.html","_self")

}

// angular functionality starts here
var app = angular.module("myapp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : "../teacher/portal.html"
  })
    .when('/marks', {
        templateUrl : "../teacher/studentmarks.html"
    })
    .when("/academic", {
        templateUrl : "../teacher/academic_std.html"
    })
    .when("/study", {
        templateUrl : "../teacher/study_std.html"
    })
    .when("/revision", {
        templateUrl : "../teacher/revision_std.html"
    })
    .when("/feedback", {
      templateUrl : "../teacher/feedback_std.html"
  })
  .when("/contact", {
    templateUrl : "../teacher/contact_std.html"
});
});

// onclicking the browser back button page will not return to the login page
function preback() {window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};


// Marks function for passing and fail number
function marks() {
  
  var obtained =document.getElementById('obtained').value;
  if(obtained >=50) {
    document.getElementById('result').innerText="Pass"
    document.getElementById('result').style.color="green"
  }

  else if(obtained <50) {
    document.getElementById('result').innerText="Failed"
    document.getElementById('result').style.color="Red"
  }


}

function Empty()
{var obtained =document.getElementById('obtained').value;
if(obtained=="")
{
  
  document.getElementById('result').innerText=""

}
else
{

}
}

// Fuction of enrollment number
function enroll(){
  var a = document.getElementById("options").value;


if(a=="Enrollment-No")
{
  alert("Kindly select Enrollment")
}
else if (a=="Enrollment-1")
{
 document.getElementById("name").value=("Bilal Ahmed");
 document.getElementById("f-name").value=("Imran Ahmed");
 document.getElementById("class").value=("Inter") ;
}
else if (a=="Enrollment-2")
{
 document.getElementById("name").value=("Aamir Jiwani");
 document.getElementById("f-name").value=("Adam Jiwani");
 document.getElementById("class").value=("Inter") ;
}
else if (a=="Enrollment-3")
{
 document.getElementById("name").value=("Rana Moksh Kumar");
 document.getElementById("f-name").value=("Rana Mahesh");
 document.getElementById("class").value=("Matric") ;
}
else if (a=="Enrollment-4")
{
 document.getElementById("name").value=("Anas");
 document.getElementById("f-name").value=("Abid");
 document.getElementById("class").value=("Matric") ;
}else if (a=="Enrollment-5")
{
 document.getElementById("name").value=("Muhammad Khan");
 document.getElementById("f-name").value=("Muhammad Latif");
 document.getElementById("class").value=("Inter") ;
}
}


// Sidebar Responsive
const nav = document.querySelector('#side');
  const header = document.querySelector('.header');
  console.log(nav);
  window.onresize = function(){
    console.log(window.innerWidth)
    if(window.innerWidth < 555){
      nav.style.marginLeft = '-250px'
    }
    else{
      nav.style.marginLeft = '0px'

    }
  }

  // Date and location scripting
  const span_date = document.querySelector('#date')
  const span_loc = document.querySelector('#loc')
  let today_date = new Date()
  // console.log(today_date.getDate() + '/' + today_date.getMonth() + '/' + today_date.getFullYear())
  
  let date_str = `${today_date.getDate()}/${today_date.getMonth()+1}/${today_date.getFullYear()}`
  span_date.innerText = date_str;




  if(navigator){
      navigator.geolocation.getCurrentPosition(function(pos){
          let loc_str = `${pos.coords.latitude}, ${pos.coords.longitude}`
          span_loc.innerText = loc_str
      })
  }
  else{
      alert('navigator not supported!')
  }
 
  
  function onempty(){ 
    var a = document.getElementById("atten").value;
    var b = document.getElementById("prog").value;
    var c = document.getElementById("con").value;
    var d = document.getElementById("hw").value;

    if(a == "" && b == "" && c == "" && d == ""){
      document.getElementById('atten').style.border="1px solid red";
      document.getElementById('prog').style.border="1px solid red";
      document.getElementById('con').style.border="1px solid red";
      document.getElementById('hw').style.border="1px solid red";
    }
    else if (a == "")
    {
      
    }
}

function onempty1(){ 
  var a = document.getElementById("atten1").value;
  var b = document.getElementById("prog1").value;
  var c = document.getElementById("con1").value;
  var d = document.getElementById("hw1").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten1').style.border="1px solid red";
    document.getElementById('prog1').style.border="1px solid red";
    document.getElementById('con1').style.border="1px solid red";
    document.getElementById('hw1').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty2(){ 
  var a = document.getElementById("atten2").value;
  var b = document.getElementById("prog2").value;
  var c = document.getElementById("con2").value;
  var d = document.getElementById("hw2").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten2').style.border="1px solid red";
    document.getElementById('prog2').style.border="1px solid red";
    document.getElementById('con2').style.border="1px solid red";
    document.getElementById('hw2').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty3(){ 
  var a = document.getElementById("atten3").value;
  var b = document.getElementById("prog3").value;
  var c = document.getElementById("con3").value;
  var d = document.getElementById("hw3").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten3').style.border="1px solid red";
    document.getElementById('prog3').style.border="1px solid red";
    document.getElementById('con3').style.border="1px solid red";
    document.getElementById('hw3').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty4(){ 
  var a = document.getElementById("atten4").value;
  var b = document.getElementById("prog4").value;
  var c = document.getElementById("con4").value;
  var d = document.getElementById("hw4").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten4').style.border="1px solid red";
    document.getElementById('prog4').style.border="1px solid red";
    document.getElementById('con4').style.border="1px solid red";
    document.getElementById('hw4').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty5(){ 
  var a = document.getElementById("atten5").value;
  var b = document.getElementById("prog5").value;
  var c = document.getElementById("con5").value;
  var d = document.getElementById("hw5").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten5').style.border="1px solid red";
    document.getElementById('prog5').style.border="1px solid red";
    document.getElementById('con5').style.border="1px solid red";
    document.getElementById('hw5').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty6(){ 
  var a = document.getElementById("atten6").value;
  var b = document.getElementById("prog6").value;
  var c = document.getElementById("con6").value;
  var d = document.getElementById("hw6").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten6').style.border="1px solid red";
    document.getElementById('prog6').style.border="1px solid red";
    document.getElementById('con6').style.border="1px solid red";
    document.getElementById('hw6').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty7(){ 
  var a = document.getElementById("atten7").value;
  var b = document.getElementById("prog7").value;
  var c = document.getElementById("con7").value;
  var d = document.getElementById("hw7").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten7').style.border="1px solid red";
    document.getElementById('prog7').style.border="1px solid red";
    document.getElementById('con7').style.border="1px solid red";
    document.getElementById('hw7').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function onempty8(){ 
  var a = document.getElementById("atten8").value;
  var b = document.getElementById("prog8").value;
  var c = document.getElementById("con8").value;
  var d = document.getElementById("hw8").value;

  if(a == "" && b == "" && c == "" && d == ""){
    document.getElementById('atten8').style.border="1px solid red";
    document.getElementById('prog8').style.border="1px solid red";
    document.getElementById('con8').style.border="1px solid red";
    document.getElementById('hw8').style.border="1px solid red";
  }
  else if (a == "")
  {
    
  }
}

function feedbackform(){ 
  var a = document.getElementById("feedbackname").value;
  var b = document.getElementById("feedbackemail").value;
  var c = document.getElementById("feedbackno").value;
  var d = document.getElementById("feedbacktext").value;

  if(a != "" && b != "" && c != "" && d != ""){
    document.getElementById("feedbackname").value=("");
    document.getElementById("feedbackemail").value=("");
    document.getElementById("feedbackno").value=("");
    document.getElementById("feedbacktext").value=("");
    document.getElementById('alert').innerHTML=("Form Sended");
    document.getElementById('alert').style.color="green";
    document.getElementById("feedbackname").style.borderBottom="1px solid #999";
    document.getElementById("feedbackemail").style.borderBottom="1px solid #999";
    document.getElementById("feedbackno").style.borderBottom="1px solid #999";
    document.getElementById("feedbacktext").style.borderBottom="1px solid #999";
  }
  else
  {
    document.getElementById("feedbackname").style.borderBottom="2px solid red";
    document.getElementById("feedbackemail").style.borderBottom="2px solid red";
    document.getElementById("feedbackno").style.borderBottom="2px solid red";
    document.getElementById("feedbacktext").style.borderBottom="2px solid red";
    document.getElementById('alert').innerHTML=("Kindly Fill All The Fields");
    document.getElementById('alert').style.color="red";
  }
}
