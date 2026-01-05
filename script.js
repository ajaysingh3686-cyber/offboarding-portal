function login() {
    var uid = document.getElementById("uid").value;
    var pwd = document.getElementById("pwd").value;

    if (uid === "52222978" && pwd === "M@h@dev_1991") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}

