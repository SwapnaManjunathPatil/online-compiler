async function runCode() {
  const code = document.getElementById("code").value;
  const language = document.getElementById("language").value;

  try {
    const response = await fetch("https://online-compiler-ui6a.onrender.com/run", {
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
