function onFormSubmit() {
    email = document.getElementById("email")
    password = document.getElementById("password")
    errormsg = document.getElementById("errormsg")

    storedValue = JSON.parse(localStorage.getItem("users"))
    notFound = true
    for (i = 0; i < storedValue.length; ++i) {
        if (storedValue[i].email == email.value && storedValue[i].password == password.value) {
            localStorage.setItem("currentUser", JSON.stringify(storedValue[i]));
            location.href = "detail.html";
            notFound = false;
        }
    }
    if(notFound)
    errormsg.innerHTML = "Invalid Credentials" 
}

