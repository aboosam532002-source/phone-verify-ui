fetch("https://phone-verify-api-eight.vercel.app/api/send-code", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    phone: phone
  })
});
