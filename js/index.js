function setName(){
    var name=document.getElementById('name').value;
    if(name==""){
        alert("Please Enter Your Name");
    }else{
        localStorage.setItem('lastName', name);
        window.location.href = window.location.href.replace("/index.html","")+"/questionPage.html";
    }
}