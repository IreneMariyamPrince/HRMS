const express = require("express");
const cors = require("cors")
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", router);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(8000, () => {
  console.log("Server Running");
});
