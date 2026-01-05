function showLoader(text) {
    document.getElementById("loaderText").innerText = text;
    document.getElementById("loader").style.display = "flex";
}

function hideLoader() {
    document.getElementById("loader").style.display = "none";
}

function showOtp() {
    showLoader("Authenticating...");

    setTimeout(() => {
        hideLoader();

        document.getElementById("otp-row").style.display = "table-row";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("verifyBtn").style.display = "inline-block";
        document.getElementById("otp").focus();
    }, 1200); // ⏳ realistic delay
}

function verifyOtp() {
    const otp = document.getElementById("otp").value;

    if (otp === "123456") {
        showLoader("Verifying OTP...");

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1300); // ⏳ realistic delay

    } else {
        alert("Invalid OTP. Please enter the correct OTP.");
    }
}
