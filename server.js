const express = require("express");
const notesRouter = require("./routes/notes");

const app = express();
const PORT = 9090;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "health check ok" });
});

app.use("/api/notes", notesRouter);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
