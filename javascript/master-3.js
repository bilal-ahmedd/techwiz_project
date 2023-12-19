let sidebar = document.getElementById("side");
let closeBtn = document.getElementById("btn");
let searchBtn = document.getElementById("search");

closeBtn.addEventListener("click", ()=>{
  side.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(side.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
document.getElementById("std_name").innerHTML="Welcome! " + localStorage.getItem("name_add");
document.getElementById("std_names").innerHTML= localStorage.getItem("name_add");
function log_out() {
  localStorage.removeItem("name_add")
  window.open("index.html","_self")

}
