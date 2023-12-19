let sidebar = document.getElementById("side");
let closeBtn = document.getElementById("btn");
let searchBtn = document.getElementById("search");

closeBtn.addEventListener("click", ()=>{
  side.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});


document.getElementById("std_name").innerHTML="Welcome! " + localStorage.getItem("name_add");
document.getElementById("std_names").innerHTML= localStorage.getItem("name_add");

function log_out() {
  localStorage.removeItem("name_add")
  window.open("../index.html","_self")

}

var app = angular.module("myapp", ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : "../guardians/portal.html"
  })
    .when('/marks', {
        templateUrl : "../guardians/viewmarks.html"
    })
    .when("/academic", {
        templateUrl : "../guardians/viewacademic.html"
    })
   
    .when("/feedback", {
      templateUrl : "../guardians/feedback_guardian.html"
  })
  .when("/contact", {
    templateUrl : "../guardians/contact_guardian.html"
});
});
app.controller('myctrl',function ($scope , $http) {
  $http.get('people.json')
  .then(function (response) {
      $scope.data=response.data
  })
})

app.controller('myctr',function ($scope , $http) {
  $http.get('academic.json')
  .then(function (response) {
      $scope.data=response.data
  })
})


function preback() {window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};


// Sidebar Responsive
const nav = document.querySelector('#side');
  const header = document.querySelector('.header');
  console.log(nav);
  window.onresize = function(){
    console.log(window.innerWidth)
    if(window.innerWidth < 548){
      nav.style.marginLeft = '-250px'
    }
    else{
      nav.style.marginLeft = '0px'

    }
  }

  const span_date = document.querySelector('#date')
  const span_loc = document.querySelector('#loc')
  let today_date = new Date()
  // console.log(today_date.getDate() + '/' + today_date.getMonth() + '/' + today_date.getFullYear())
  
  let date_str = `${today_date.getDate()}/${today_date.getMonth()+1}/${today_date.getFullYear()}`
  span_date.innerText = date_str

  if(navigator){
      navigator.geolocation.getCurrentPosition(function(pos){
          let loc_str = `${pos.coords.latitude}, ${pos.coords.longitude}`
          span_loc.innerText = loc_str
      })
  }
  else{
      alert('navigator not supported!')
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