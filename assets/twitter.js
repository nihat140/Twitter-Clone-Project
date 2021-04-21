/*
$(document).ready(function() {
    var len = 0;
    var maxchar = 50;
  
    $( '#name' ).keyup(function(){
      len = this.value.length
      if(len > maxchar){
          return false;
      }
      else if (len > 0) {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar - len ) );
      }
      else {
          $( "#remainingC" ).html( "Remaining characters: " +( maxchar ) );
      }
    })
  });

*/

/*
//name
var inputdata = document.querySelector(".inputText");
//password-Login
var inputdata2 = document.querySelector(".inputText2");
//password-Sign Up
var inputPassword = document.querySelector(".inputPassword");
//phone
var inputPhone = document.querySelector(".inputTel");
//verification input
var inputVerification = document.querySelector(".verificationCode");
//birth data
var inputYear = document.querySelector(".year");
var inputMonth = document.querySelector(".month");
var inputDay = document.querySelector(".day");
//Login Button
var loginbtn = document.querySelector(".login-page-btn");
//Next Button
var nextBtn = document.querySelector(".next");



    function stoppedTyping(){
        if(((inputdata.value.length > 0) && (inputdata2.value.length > 0)))|| 
        (((inputdata.value.length > 0) && (inputPhone.value.length > 0) && (inputYear.value.length > 0) && (inputMonth.value.length > 0) && (inputDay.value.length > 0)) || 
        (inputVerification.value.length > 0) || 
        (inputPassword.value.length > 0){ 
            loginbtn.disabled = false; 
            loginbtn.style.opacity = 1

            nextBtn.disabled = false; 
            nextBtn.style.opacity = 1

        }else{ 
            loginbtn.disabled = true;
            loginbtn.style.opacity = 0.5

            nextBtn.disabled = true;
            nextBtn.style.opacity = 0.5
        };
    };

*/
