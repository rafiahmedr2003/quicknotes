import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Notes from "./Components/Notes";
import { useState } from "react";
import { getNotes } from "./services/api";

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleRefresh = () => {
    getNotes().then(({ notes }) => {
      setNotes(notes);
    });
  };

  const handlePostNote = () => {
    // TODO - logic to open the post note form
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
    </>
  );
};

export default App;
