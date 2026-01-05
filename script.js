function showOtp() {
    // Show OTP field
    document.getElementById("otp-row").style.display = "table-row";

    // Toggle buttons
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("verifyBtn").style.display = "inline-block";
}

function verifyOtp() {
    var otp = document.getElementById("otp").value;

    if (otp === "123456") {
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid OTP. Please enter the correct OTP.");
    }
}
