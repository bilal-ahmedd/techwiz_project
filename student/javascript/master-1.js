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
      templateUrl : "../student/std.html"
  })
    .when('/marks', {
        templateUrl : "../student/marks_std.html"
    })
    .when("/academic", {
        templateUrl : "../student/academic_std.html"
    })
    .when("/study", {
        templateUrl : "../student/study_std.html"
    })
    .when("/revision", {
        templateUrl : "../student/revision_std.html"
    })
    .when("/feedback", {
      templateUrl : "../student/feedback_std.html"
  })
  .when("/contact", {
    templateUrl : "../student/contact_std.html"
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

app.controller('myct',function ($scope , $http) {
  $http.get('resources.json')
  .then(function (response) {
      $scope.data=response.data
  })
})

app.controller('myc',function ($scope , $http) {
  $http.get('revision.json')
  .then(function (response) {
      $scope.data=response.data
  })
})

// onclicking the browser back button page will not return to the login page
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


// Date and location scripting
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