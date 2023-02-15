import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Notes from "./Components/Notes";
import PostNoteModal from "./Components/PostNoteModal";
import { useState } from "react";
import { getNotes } from "./services/api";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleRefresh = () => {
    getNotes().then(({ notes }) => {
      setNotes(notes);
    });
  };

  const handlePostNote = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <TopNavbar
        handleRefresh={handleRefresh}
        handlePostNote={handlePostNote}
      />
      <div className="NotesWrapper">
        <Notes notes={notes} setNotes={setNotes} />
      </div>
      <PostNoteModal
        show={showModal}
        handleClose={handleCloseModal}
        handleRefresh={handleRefresh}
      />
    </>
  );
};

export default App;
