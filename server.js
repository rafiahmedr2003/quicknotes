const express = require("express");
const PORT = 9090;

const app = express();

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
