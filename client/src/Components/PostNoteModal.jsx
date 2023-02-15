import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { postNote } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostNoteModal = ({ show, handleClose, handleRefresh }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTag, setNoteTag] = useState("");
  const [noteDate, setNoteDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = { note: noteText, date: noteDate, tag: noteTag };
    postNote(input).then(({ addedComment }) => {
      console.log(addedComment[0]);
      setNoteText("");
      setNoteDate("");
      setNoteTag("");
    });
    toast.success("Note posted successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      onClose: () => {
        handleRefresh();
        handleClose();
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Post a Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="noteText">
              <Form.Label>Note Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteDate">
              <Form.Label>Note Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note tag"
                value={noteDate}
                onChange={(e) => setNoteDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteTag">
              <Form.Label>Note Tag</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter note tag"
                value={noteTag}
                onChange={(e) => setNoteTag(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PostNoteModal;
