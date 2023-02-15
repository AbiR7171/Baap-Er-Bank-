document.getElementById('login-btn').addEventListener('click', function(){
 const userMail = document.getElementById('userMail');
 const userMailText = userMail.value;

 const userPassword = document.getElementById('userPassword');
 const userPasswordFeild = userPassword.value;
 if(userMailText == "abir@gmail.com" && userPasswordFeild == "123"){
    window.location = 'inside.html'
 }
 else{
    alert("plase Enter the right msg")
 }
})