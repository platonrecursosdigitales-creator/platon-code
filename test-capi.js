(async () => {
  try {
    const res = await fetch("https://platoncode.com/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: "TestEvent_CLI",
        eventId: `test_${Date.now()}`,
        eventUrl: "https://platoncode.com/test",
        userAgent: "NodeTest"
      })
    });
    const data = await res.text();
    console.log("Status:", res.status);
    console.log("Response:", data);
  } catch (err) {
    console.error("Error:", err);
  }
})();
