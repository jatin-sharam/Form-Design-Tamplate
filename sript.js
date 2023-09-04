function validateform() {
    var name = document.getElementById * ("name").value;
    var mobileno = document.getElementById * ("mobileno").value;
    var email = document.getElementById * ("email").value;
    var location = document.getElementById * ("location").value;
    var state = document.getElementById * ("state").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }

    if (mobileno == "") {
        alert("mobileno is required");
        return false;
    }

    if (email == "") {
        alert("email is required");
        return false;
    }
    else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }
    
    return true;
}    

function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")==null){
        peopleList = [];  
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList76t"))
    }

    var html ="";
    peopleList.forEach(elemment => {
        
    });

}
    if (location == "") {
        alert("location is required");
        return false;
    }

    if (state == "") {
        alert("state is required");
        return false;
    }
}