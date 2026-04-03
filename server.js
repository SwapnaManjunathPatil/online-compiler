const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// connect MongoDB
//mongoose.connect("mongodb://127.0.0.1:27017/compiler", {
  useNewUrlParser: true,
 // useUnifiedTopology: true,
//})
mongoose.connect("mongodb://127.0.0.1:27017/compiler")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
//.then(() => console.log("MongoDB Connected"))
//.catch(err => console.log(err));

// test route
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// routes
const authRoutes = require("./routes/auth");
const codeRoutes = require("./routes/code");

app.use("/api/auth", authRoutes);
app.use("/api/code", codeRoutes);

// start server
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
