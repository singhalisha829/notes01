import Notes from "./Notes";
import AddNote from "./AddNote";
import styles from "../styles/Home.module.css";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className={styles.notes_list}>
      {notes.map((note) => (
        <Notes
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
