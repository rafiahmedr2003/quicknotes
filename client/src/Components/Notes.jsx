import { useEffect, useState } from "react";
import { getNotes } from "../services/api";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Pagination from "./Pagination";
import NoteCard from "./NoteCard";

const Notes = ({ notes, setNotes, handleRefresh }) => {
  const [chunkedNotes, setChunkedNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const refreshNotes = () => {
    handleRefresh();
  };

  useEffect(() => {
    getNotes().then(({ notes }) => {
      setNotes(notes);
    });
  }, []);

  useEffect(() => {
    // divide notes into chunks of 10 and set them in state
    const chunked = [];
    for (let i = 0; i < notes.length; i += 8) {
      chunked.push(notes.slice(i, i + 8));
    }
    setChunkedNotes(chunked);
  }, [notes]);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {chunkedNotes.length > 0 &&
          chunkedNotes[currentPage].map((note) => (
            <Col key={note.note_id}>
              <NoteCard note={note} refreshNotes={refreshNotes} />
            </Col>
          ))}
      </Row>
      <Pagination
        chunkedNotes={chunkedNotes}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </Container>
  );
};

export default Notes;
