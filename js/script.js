let errorMsg = document.getElementById("error")

let userName = document.getElementById("userName");
let signSave ;

    if(localStorage.getItem("accout") === null){
        signSave = [];
    }else{
        signSave = JSON.parse(localStorage.getItem("accout"));
        
    }
    
       
  
console.log(signSave)
//! Validation Name
function validName(){
    let reg = /^[a-zA-Z]{2,}$/;
    let nameValue = userName.value;

    if(reg.test(nameValue)){
        return true;    
    }else {
        return false;
    }
}
// userName.onkeyup = function (){
//     validName()
//  }
// End Validation Name

//! Validation Email
let signEmail = document.getElementById("signEmail");
function validEmail(){
    let reg = /^([a-z]{2,}[@])/;
    let emailValue = signEmail.value;
    if(reg.test(emailValue)){
        return true;
    }else {
        return false;
    }
}
// signEmail.onkeyup = function (){
//     validEmail()
//  }
// End Validation Email

//! Validation Pass
let signPassword = document.getElementById("signPassword");
function validPass(){
    let reg = /^/;
    let passValue = signPassword.value;
    if(reg.test(passValue) && passValue != ""){
        return true;
    }else {
        return false;
    }
}
// signPassword.onkeyup = function (){
//     validPass()
//  }
// End Validation Pass

//! EX Sign ;

function createAcc(){
    let allData = 
        {
            name:userName.value,
            email:signEmail.value,
            password:signPassword.value,
        }
    signSave.push(allData);
    localStorage.setItem("accout",JSON.stringify(signSave));
    reset()
}


document.getElementById("signUp").addEventListener("click",function(){
 
    if(validName() === true && validEmail() === true && validPass() === true){
        if(checkValidation() === true){
            errorMsg.innerHTML = "email already exists";
            errorMsg.style.color = "red";
        }
        else{
            createAcc()
            errorMsg.innerHTML = "Success";
            errorMsg.style.color = "green";
        }
    }
    else{
        errorMsg.innerHTML = "All inputs is required";
        errorMsg.style.color = "red";
    
    }
  
} )  

function reset(){
    userName.value = "";
    signEmail.value = "";
    signPassword.value = "";
}
// userName.value === signSave[i].name
function checkValidation (){
            for(let i = 0; i < signSave.length;i++){
            if(signSave[i].email === signEmail.value){
                return true;
            }
        }

}


/********************* */
let userAcc = document.getElementById("userAcc");
let userPass = document.getElementById("userPass");
let ind;

function signAcc (){
    for(let i = 0; i < signSave.length;i++){
        if(userAcc.value === signSave[i].email){
            ind = i;
            if(userPass.value ===signSave[ind].password){
                
                return true
            }
        }
       
    }    
}


let xx = document.querySelector("#homeMsg");

document.getElementById("accSign").addEventListener("click",function(){;
    if(signAcc() === true){
let message = `Welcome ${signSave[ind].name}`;
localStorage.setItem("userName", signSave[ind].name);
console.log(message);
location.href = "../home.html";

    }else{
      errorMsg.innerHTML = "All inputs is required";
        errorMsg.style.color = "red";

    }
  });


