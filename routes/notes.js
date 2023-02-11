const express = require("express");
const db = require("../db");
const { selectNotes } = require("../model/notes.model");
const router = express.Router();

//Get all notes
router.get("/", (req, res) => {
  selectNotes().then((result) => {
    res.status(200).send({ notes: result });
  });
});

module.exports = router;
