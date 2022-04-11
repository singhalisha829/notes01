import React, { useState, Component } from 'react';
// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

// import 'emoji-mart/css/emoji-mart.css'
// import { Picker } from 'emoji-mart'

import { Editor } from "@tinymce/tinymce-react";
class Emoji extends Component {
    state={
        text:''
    };
    handleChange = e => {
        this.setState({ text: e.target.value })
      }
      render(){
      return(
//           <div>
//         <form onSubmit={this.handleSubmit}>
//   <input 
//      type="text" 
//      value={this.state.text}
//      onChange={this.handleChange}
//      placeholder="Type a message here then hit ENTER"
//    />
// </form>
// <span>
//    <Picker onSelect={this.addEmoji} />
// </span>
// </div>
<Editor
      apiKey="no-api-key"
      init={{
        plugins: "emoticons",
        toolbar: "emoticons",
        toolbar_location: "bottom",
        menubar: false,
      }}
    />
      )}
}   

export default Emoji;