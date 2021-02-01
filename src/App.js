import React, { useState } from 'react';
import './App.css';

function App() {

  const [notes, setNotes] = useState(['everyday start day with code', 'start doing some own projects']);
  const [input, setInput] = useState('');
  // console.log(input)
  console.log(notes);

  const addNote = event => {
    event.preventDefault(); 

    setNotes([...notes, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hi Ender Daily Journal 🚀</h1>

      <form>
        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <button type="submit" onClick={addNote}>Save</button>  
      </form>  
      

    <ul>
      {notes.map(note => (<li>{note}</li>))}
      </ul>  


    </div>
  );

}

export default App;
