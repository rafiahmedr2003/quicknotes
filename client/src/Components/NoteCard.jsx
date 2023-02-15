import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { deleteNote } from "../services/api";
import { toast } from "react-toastify";

const NoteCard = ({ note, refreshNotes }) => {
  const handleDeleteNote = () => {
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
          onClick={() => {
            handleDeleteNote();
          }}
        >
          X
        </Button>
        <Card.Title>{note.note_id}</Card.Title>
        <Card.Text>{note.note_text}</Card.Text>
        <Card.Link href="#">{note.note_tag}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NoteCard;
