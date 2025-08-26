export async function log(stack, level, pkg, message) {
  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack,  
        level, 
        package: pkg, 
        message,
      }),
    });

    const data = await response.json();
    console.log("Log sent:", data.message);
  } catch (err) {
    console.error("Failed to send log:", err);
  }
}
