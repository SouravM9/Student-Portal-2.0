function loadInfo() {
    fullname = document.getElementById("fullname")
    roll = document.getElementById("roll")
    email = document.getElementById("email")
    assignment = document.getElementById("assignment")

    storedValue = JSON.parse(localStorage.getItem("currentUser"));

    fullname.innerHTML = storedValue.name
    roll.innerHTML = storedValue.roll
    email.innerHTML = storedValue.email
    assignment.innerHTML = storedValue.assignment
}

function onSubmission() {
    currentUser = JSON.parse(localStorage.getItem("currentUser"));

    fullname = currentUser.name
    roll = currentUser.roll
    email = currentUser.email
    password = currentUser.password
    assignment = "Assignment Submitted"
    data = {
        "name": fullname,
        "roll": roll,
        "email": email,
        "password": password,
        "assignment": assignment
    }

    allUsers = JSON.parse(localStorage.getItem("users"))
    console.log(allUsers)
    for (i = 0; i < allUsers.length; ++i) {
        if (allUsers[i].email == email && allUsers[i].password == password) {
            allUsers[i] = data
        }
    }

    localStorage.setItem("users", JSON.stringify(allUsers))
    localStorage.setItem("currentUser", JSON.stringify(data))
    document.getElementById("submitbtn").innerHTML = "Submitting"
    setTimeout(function () {
        window.location.reload()
    }, 3000)

}