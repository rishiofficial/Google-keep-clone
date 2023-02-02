import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Createarea from "./components/Createarea";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNotes];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <div className="main">
        <Createarea addNote={addNote} />
        <div>
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
