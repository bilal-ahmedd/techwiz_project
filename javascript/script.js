function login(){
    var a = document.getElementById("name").value;
    localStorage.setItem("name_add",a)
    var d = document.getElementById("teacher");
    var e = document.getElementById("guardians");
    var f = document.getElementById("student");

if (a=="")
{
    document.getElementById('error').innerText="*Kindly Enter Your Name*"
    document.getElementById('name').style.border="1px solid red"
}

else if(d.checked==true)
    {
        window.open("teacher/teacher.html","_self");
    }
else if(e.checked==true)
    {
        window.open("guardians/guardians.html","_self");
    }

else if(f.checked==true)
    {
        window.open("student/student.html","_self");
    }
else if (e.checked!=true){
    document.getElementById('error').innerText="*Kindly Select Any Category*"
}
else if (d.checked!=true){
    document.getElementById('error').innerText="*Kindly Select Any Category*"
}
else if (f.checked!=true){
    document.getElementById('error').innerText="*Kindly Select Any Category*"
}
    
}
function preback() {window.history.forward();}
setTimeout("preback()", 0);
window.onunload=function() {null};