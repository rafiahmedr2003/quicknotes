const express = require("express");
const {
  selectNotes,
  insertNote,
  updateNote,
  deleteNote,
  selectNoteByID,
} = require("../model/notes.model");
const router = express.Router();

//Get all notes
router.get("/", (req, res, next) => {
  selectNotes()
    .then((result) => {
      res.status(200).send({ notes: result });
    })
    .catch((err) => {
      next(err);
    });
});

//Add a note
router.post("/", (req, res, next) => {
  const { note, date, tag } = req.body;
  insertNote(note, date, tag)
    .then((result) => {
      res.status(201).send({ addedComment: result });
    })
    .catch((err) => {
      next(err);
    });
});

//Update a note
router.put("/:id", (req, res, next) => {
  const { note, date, tag } = req.body;
  const { id } = req.params;

  updateNote(note, date, tag, id)
    .then((result) => {
      res.status(200).send({ updated: result });
    })
    .catch((err) => {
      next(err);
    });
});

//Delete a note
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  deleteNote(id)
    .then((result) => {
      res.status(204).send();
    })
    .catch((err) => {
      next(err);
    });
});

//Get a note by note ID
router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  selectNoteByID(id)
    .then((result) => {
      res.status(200).send({ note: result });
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
