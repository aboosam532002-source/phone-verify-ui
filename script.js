async function sendOTP() {
  const phone = document.getElementById("phone").value;
  const result = document.getElementById("result");
  result.innerText = "Sending...";
  try {
    fetch("https://phone-verify-api-eight.vercel.app/api/send-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });
    const data = await res.json();
    result.innerText = data.success ? "OTP Sent" : (data.error || "Error");
  } catch {
    result.innerText = "Server error";
  }
}
