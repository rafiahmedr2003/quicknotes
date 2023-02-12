import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:9090/api/notes").then((res) => {
      console.log(res.data.data);
    });
  });

  return (
    <div className="App">
      <p>hello</p>
    </div>
  );
}

export default App;
