import styles from "../styles/Home.module.css";
import { useState } from "react";

import InputEmoji from "react-input-emoji";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.length >= 0) {
      setNoteText(event);
      console.log(event);
    }
  };

  const saveTextHandler = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className={styles.note_new}>
      {/* <textarea className={styles.text} rows='8' cols='10' placeholder="Type to add a note" value={noteText}
            onChange={handleChange} /> */}

      <InputEmoji
        rows="8"
        cols="10"
        value={noteText}
        onChange={handleChange}
        cleanOnEnter
        placeholder="Type a message"
      />
      <div className={styles.note_footer}>
        <small>{characterLimit - noteText.length} remaining...</small>
        <button className={styles.save} onClick={saveTextHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
