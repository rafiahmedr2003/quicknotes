import { useEffect, useState } from "react";
import { getNotes } from "../services/api";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Notes = ({ notes, setNotes }) => {
  useEffect(() => {
    getNotes().then(({ notes }) => {
      setNotes(notes);
    });
  }, []);

  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        {notes.map((note) => {
          return (
            <Col key={note.note_id}>
              <Card border="secondary">
                <Card.Body>
                  <Card.Title>{note.note_id}</Card.Title>
                  <Card.Text>{note.note_text}</Card.Text>
                  <Card.Link href="#">{note.note_tag}</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Notes;
