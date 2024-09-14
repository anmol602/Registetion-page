function validation(){
if (document.formfill.username.value=="") {
        document.getElementById("result").innerHTML='Enter username*';
        return false;
    } 
    
else if(document.formfill.username.value.length<6){
    document.getElementById("result").innerHTML="Atleast six letter*";
    return false;
} 


else if(document.formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter your Email";
    return false;
} 
else if(document.formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter your Password";
    return false;
} 

else if(document.formfill.Password.value.length<10){
    document.getElementById("result").innerHTML="Password must be strong 10-characters";
    return false;
} 

else if(document.formfill.CPassword.value==""){
    document.getElementById("result").innerHTML="Enter Confim password";
    return false;
} 

else if(document.formfill.CPassword.value !== document.formfill.Password.value){
    document.getElementById("result").innerHTML="Password does'nt match";
    return false;
} 

else if(document.formfill.Password.value == document.formfill.CPassword.value){
    popup.classList.add("open-slide")
    return false;
} 
}
var popup=document.getElementById('popup');
function Closeslide(){
    popup.classList.remove('open-slide')
}

// $(".toggle-password").click(function pass(){
//     $(this).toggle-password("bx bx-show bx bx-hide");
//     var input =$($(this).attr("toggle"));
//     if (input.attr("type") == "password") {
//         input.attr("type" , "text");
//     } else {
//         input.attr("type", "password");
//     }
// })

// function pass(){
//     var x =document.getElementById('show-hide');
//     if (x.type ==="check") {
//         x.type = "show";
//     } else {
//        x.type="check" ;
//     }
// }
function pass() {
    var x = document.getElementById('password-field');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function show() {
    var x = document.getElementById('Cpassword-Field');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}