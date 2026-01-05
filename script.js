function login() {
    var uid = document.getElementById("uid").value;
    var pwd = document.getElementById("pwd").value;

    if (uid === "DEMO123" && pwd === "Welcome@123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
}
