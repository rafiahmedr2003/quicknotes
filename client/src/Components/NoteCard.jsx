import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { deleteNote, updateNote } from "../services/api";
import { toast } from "react-toastify";

const NoteCard = ({ note, refreshNotes }) => {
  const [editing, setEditing] = useState(false);
  const [editedNoteText, setEditedNoteText] = useState(note.note_text);
  const [editedNoteTag, setEditedNoteTag] = useState(note.note_tag);

  const handleEditNote = () => {
    setEditing(true);
  };

  const handleSaveNote = () => {
    const id = note.note_id;
    const input = {
      note: editedNoteText,
      date: note.note_date,
      tag: editedNoteTag,
    };
    updateNote(id, input).then((res) => {
      refreshNotes();
    });
    setEditing(false);
  };

  const handleDeleteNote = () => {
    if (editing) {
      setEditing(false);
      return;
    }

    deleteNote(note.note_id).then((res) => {
      console.log(res);
      toast.success("Note deleted successfully!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
        onClose: () => {
          refreshNotes();
        },
      });
    });
  };

  return (
    <Card border="secondary">
      <Card.Body>
        <Button
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            color: "black",
            backgroundColor: "white",
            borderColor: "white",
          }}
          onClick={handleDeleteNote}
        >
          X
        </Button>
        <Button
          style={{
            position: "absolute",
            top: "0",
            right: "40px",
            color: "black",
            backgroundColor: "white",
            borderColor: "white",
          }}
          onClick={handleEditNote}
        >
          Edit
        </Button>
        {editing ? (
          <Button
            style={{
              position: "absolute",
              top: "0",
              right: "80px",
              color: "black",
              backgroundColor: "white",
              borderColor: "white",
            }}
            onClick={handleSaveNote}
          >
            Save
          </Button>
        ) : null}
        <Card.Title>{note.note_id}</Card.Title>
        {editing ? (
          <div>
            <Form.Group controlId="formNoteText">
              <Form.Control
                as="textarea"
                rows={3}
                value={editedNoteText}
                onChange={(event) => setEditedNoteText(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formNoteTag">
              <Form.Control
                type="text"
                placeholder="Enter tag"
                value={editedNoteTag}
                onChange={(event) => setEditedNoteTag(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleSaveNote();
                  }
                }}
              />
            </Form.Group>
          </div>
        ) : (
          <div>
            <Card.Text>{note.note_text}</Card.Text>
            <Card.Link href="#">{note.note_tag}</Card.Link>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
