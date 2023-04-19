function contact() {
    if (document.getElementById("name").value == "") {
        alert("The name field cannot be left blank.");
    }
    else if (document.getElementById("surname").value == "") {
        alert("The surname field cannot be left blank.");
    }
    else if (document.getElementById("email1").value == "") {
        alert("The e-mail field cannot be left blank.");
    }
    else if (document.getElementById("subject").value == "") {
        alert("The subject field cannot be left blank.");
    }
    else if (document.getElementById("message").value == "") {
        alert("The message field cannot be left blank.");
    }


}