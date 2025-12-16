async function sendOTP() {
  const phone = document.getElementById("phone").value;
  const result = document.getElementById("result");

  result.innerText = "Sending...";

  try {
    const res = await fetch(
      "https://phone-verify-api-eight.vercel.app/api/send-code",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone })
      }
    );

    const data = await res.json();

    if (data.success) {
      result.innerText = "OTP Sent ✅";
    } else {
      result.innerText = data.error || "Error ❌";
    }
  } catch (err) {
    console.error(err);
    result.innerText = "Server error ❌";
  }
}
