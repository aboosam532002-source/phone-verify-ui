async function sendCode() {
  const phone = document.getElementById("phone").value;
  const result = document.getElementById("result");

  if (!phone) {
    result.innerText = "Please enter phone number";
    return;
  }

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

    if (res.ok && data.success) {
      result.innerText = "OTP sent successfully ✅";
    } else {
      result.innerText = data.error || data.msg || "Failed";
    }

  } catch (err) {
    console.error(err);
    result.innerText = "Server error";
  }
}
