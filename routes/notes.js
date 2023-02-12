const express = require("express");
const db = require("../db");
const {
  selectNotes,
  insertNote,
  updateNote,
  deleteNote,
  selectNoteByID,
} = require("../model/notes.model");
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

//Update a note
router.put("/:id", (req, res) => {
  const { note, date, tag } = req.body;
  const { id } = req.params;

  updateNote(note, date, tag, id)
    .then((result) => {
      res.status(200).send({ updated: result });
    })
    .catch((err) => {
      res.json(err);
    });
});

//Delete a note
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  deleteNote(id)
    .then((result) => {
      res.status(204).send();
    })
    .catch((err) => {
      res.json(err);
    });
});

//Get a note by note ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  selectNoteByID(id)
    .then((result) => {
      res.status(200).send({ note: result });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
