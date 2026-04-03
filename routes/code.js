const express = require("express");
const router = express.Router();
const { exec } = require("child_process");
const fs = require("fs");

router.post("/run", (req, res) => {
  const { code, language } = req.body;

  if (language === "python") {
    fs.writeFileSync("code.py", code);

    exec("python code.py", (err, stdout, stderr) => {
      if (err) return res.json({ error: stderr });
      res.json({ output: stdout });
    });
  }

  else if (language === "cpp") {
    fs.writeFileSync("code.cpp", code);

    exec("g++ code.cpp -o code && code", (err, stdout, stderr) => {
      if (err) return res.json({ error: stderr });
      res.json({ output: stdout });
    });
  }

  else if (language === "java") {
    fs.writeFileSync("Main.java", code);

    exec("javac Main.java && java Main", (err, stdout, stderr) => {
      if (err) return res.json({ error: stderr });
      res.json({ output: stdout });
    });
  }
});

module.exports = router;