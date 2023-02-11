const express = require("express");
const db = require("../db");
const { selectNotes, insertNote } = require("../model/notes.model");
const router = express.Router();

//Get all notes
router.get("/", (req, res) => {
  selectNotes().then((result) => {
    res.status(200).send({ notes: result });
  });
});

//Add a note
router.post("/", (req, res) => {
  const { note, date, tag } = req.body;
  insertNote(note, date, tag).then((result) => {
    res.status(201).send({ addedComment: result });
  });
});

module.exports = router;
