import React, { useState } from 'react';
import './App.css';
import Note from './Note';
import { Button, FormControl, TextareaAutosize } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

function App() {

  const [notes, setNotes] = useState([]);
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
        {/* <textarea cols="50" rows="7"}></textarea> */}
        {/* <button>Save</button>   */}

        <FormControl>
          <TextareaAutosize rowsMin={5} placeholder="Write a Note" value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button type="submit" onClick={addNote} variant="contained" color="secondary"><AddIcon />Save</Button>
      </form>  
      

    <ul>
      {notes.map(note => (
        <Note text={note} />
      ))}
      </ul>  


    </div>
  );

}

export default App;
