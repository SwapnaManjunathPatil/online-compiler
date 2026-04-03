async function runCode() {
  const code = document.getElementById("code").value;
  const language = document.getElementById("language").value;

  try {
    const response = await fetch("http://localhost:5000/api/code/run", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code, language })
    });

    const data = await response.json();

    console.log(data); // 👈 IMPORTANT (check console)

    document.getElementById("output").innerText =
      data.output || data.error || "No output";

  } catch (err) {
    document.getElementById("output").innerText = "Error connecting to server";
    console.error(err);
  }
}