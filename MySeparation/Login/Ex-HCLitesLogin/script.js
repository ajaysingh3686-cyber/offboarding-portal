function validateCredentials() {
    const uid = document.getElementById("uid").value.trim();
    const pwd = document.getElementById("pwd").value.trim();

    if (uid === "" || pwd === "") {
        showPopup("Please enter Login ID and Password");
        return;
    }

    if (uid === "52222978" && pwd === "M@h@dev_1991") {
        document.getElementById("otpRow").style.display = "table-row";
        showPopup("OTP sent to your registered mobile number");
    } else {
        showPopup("Invalid Login ID or Password");
    }
}


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

    if (otp === "161128") {
        showLoader("Verifying OTP...");

        setTimeout(() => {
            window.location.href = "/MySeparation/Emp/EMPLanding/";
        }, 1300); // ⏳ realistic delay

    } else {
        alert("Invalid OTP. Please enter the correct OTP.");
    }
}




