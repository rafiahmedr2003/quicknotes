const express = require("express");
const path = require("path");
const cors = require("cors");
const notesRouter = require("./routes/notes");

const app = express();
const port = process.env.PORT || 9090;

//Static folder
app.use(express.static(path.join(__dirname, "client/build")));

app.use(express.json());

// cors middleware
app.use(
  cors({
    origin: ["http://localhost:9090", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "health check ok" });
});

app.use("/api/notes", notesRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));
