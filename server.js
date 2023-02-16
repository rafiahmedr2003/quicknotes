const express = require("express");
const notesRouter = require("./routes/notes");
const corsMiddleware = require("./middleware/corsMiddleware");
const errorHandler = require("./middleware/errorHandler");
const serveStaticFiles = require("./middleware/staticMiddleware");

const app = express();

//Middleware
app.use(serveStaticFiles());
app.use(express.json());
app.use(corsMiddleware);

//Routes
app.get("/", (req, res) => {
  res.json({ message: "health check ok" });
});
app.use("/api/notes", notesRouter);

//Error Handling
app.use(errorHandler);

//Server Listening
const port = process.env.PORT || 9090;
app.listen(port, () => console.log(`Server listening on port ${port}`));
