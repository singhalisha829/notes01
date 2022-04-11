import React, { Component } from 'react'

import { TextAreaEmoji } from 'react-textarea-emoji'

 
class Another extends Component {
    render() {
      return (
          <div>
        <TextAreaEmoji
          style={{
            position: 'fixed',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          textAreaStyle={{
          fontSize: '20pt',
          }}/>
        <TextAreaEmoji 
        style={{
            position:'fixed',
            top: '30%',
            left: '50%',
            transform: 'translateX(-50%)'
        }} 
        textAreaStyle={{
            fontSize:'20pt'
        }}/>
        <TextAreaEmoji />
        <TextAreaEmoji />
        <TextAreaEmoji />

        </div>
      );
    }
  }
  
  export default Another;