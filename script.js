function loginpage(){
    let user;
    user=document.getElementById("inpnam").value;
    sessionStorage.setItem("username", user);
    window.location.replace("index.html")
}

document.addEventListener("DOMContentLoaded",function(){
    let storeduser=sessionStorage.getItem("username");
    if(document.getElementById("chngcont")){
        if (storeduser){
            document.getElementById("chngcont").textContent=`${storeduser}`;
        }
        else{
            document.getElementById("chngcont").textContent=``;
        }
    }

})

