import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { nanoid } from 'nanoid';

import Title from '../components/Title';
import Search from '../components/Search';
import NotesList from "../components/NotesList";
import Header from '../components/Header';


export default function Home() {
  const [notes,setNotes]=useState([])

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode]= useState(false);

  const addNote = (text) =>{
    const date = new Date();
    const newNote ={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) =>{
    const newNotes=notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  const modestyle = darkMode? styles.darkmode: null;
  
  return (
    <div className={modestyle} >
    <div className={styles.container}>
      <br />
      <br />
      <Header darkModeHandler={setDarkMode}/>
      <br/>
      <Search handleSearchNote={setSearchText}/>
      <br/>
      <br/>
      <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote} handleDeleteNote={deleteNote}/>

    </div></div>
  )
}
