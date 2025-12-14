async function sendOTP() {
  const phone = document.getElementById("phone").value;
  const result = document.getElementById("result");

  result.innerText = "Sending...";

  try {
    const res = await fetch(
      "https://phone-verify-api-eight.vercel.app/api/send-otp",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone })
      }
    );

    const data = await res.json();
    result.innerText = data.message || "Done";
  } catch (err) {
    result.innerText = "Error connecting to server";
  }
}

