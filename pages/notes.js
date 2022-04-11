import Title from "../components/Title";
import InputEmoji from "react-input-emoji";
import React, { useState } from "react";



// import 'emoji-picker-element';

// import Picker from 'emoji-picker-react';

const notes = () =>{

    const [text, setText] = useState("");


    return(
        <div>
            <Title>Your Notes</Title>
            {/* <emoji-picker></emoji-picker> */}
           
            <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

            <InputEmoji
      value={text}
      onChange={setText}
      cleanOnEnter
      placeholder="Type a message"
    />
            {/* <div> */}
      {/* {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  ); */}
        </div>
    )
}

export default notes;