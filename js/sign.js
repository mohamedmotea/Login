document.querySelector("#homeMsg").innerHTML = `Welcome ${localStorage.getItem("userName")}`;
document.querySelector("#logOut").addEventListener("click",function(){
    location.href = "../index.html";
})