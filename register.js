function onFormSubmit() {
    fullname = document.getElementById("fullname")
    roll = document.getElementById("roll")
    email = document.getElementById("email")
    password = document.getElementById("password")
    data = {
        "name": fullname.value,
        "roll": roll.value,
        "email": email.value,
        "password": password.value,
        "assignment": "Assignment Not Submitted"
    }
    datas = JSON.parse(localStorage.getItem("users"));
    datas[datas.length] = data
    localStorage.setItem("users", JSON.stringify(datas));
    storedValue = JSON.parse(localStorage.getItem("users"));
    console.log(storedValue)
    location.href = "login.html";
}

