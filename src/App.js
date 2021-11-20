import {Helmet} from 'react-helmet'
import './App.css';
import Cards from './components/Cards'
import {useEffect, useState} from 'react'
import {GrAdd} from 'react-icons/gr'

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const newNotes = await fetchNotes();
      setNotes(newNotes);
    }

    getNotes();
  }, [])

  const fetchNotes = async () => {
    const newNotes = await fetch('http://localhost:5000/tasks');
    const data = await newNotes.json();

    console.log(data);
    return data;
  }

  const fetchNote = async (id) => {
    const newNotes = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await newNotes.json();

    console.log(data);
    return data;
  }

  const colors = ["red", "blue", "yellow", "green", "pink", "white"];

  const deleteNote = async (id) => {
    const thisNote = await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"});
    setNotes(notes.filter((note) => note.id !== id));
  }

  const addNote = async () => {
    const data = await fetch("http://localhost:5000/tasks",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({title: "", color: "yellow"})
    })
    
    const newNote = await data.json();
    setNotes([...notes, newNote]);
  }
  
  const changeColor = async (id) => {
    let thisNote = await fetchNote(id);
    let index = colors.indexOf(thisNote.color);
    const updNote = {...thisNote, color: colors[(index+1) % colors.length]}

    console.log(`${index} ${thisNote.color}`)

    const data = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updNote)
    })

    const newNote = await data.json();
    setNotes(notes.map((note) => note.id === id ? {...note, color: newNote.color} : note));
  }
  
  const changeText = async (id, text) => {
    console.log(`Text changed, id:${id}, text: ${text}`);
    let thisNote = await fetchNote(id);
    const updNote = {...thisNote, title: text}
    const data = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updNote)
    })

    const newNote = await data.json();
    setNotes(notes.map((note) => note.id === id ? {...note, color: newNote.color} : note));
  }

  return (
    <div style={{padding: "10px"}}>
     <GrAdd className="iconplus" onClick={addNote}/>
      <div className="notesSection">
        <Helmet>
          <style>{'body { background-color: bisque; }'}</style>
        </Helmet>
        <Cards notes={notes} removeCard={deleteNote} switchColor={changeColor} switchText={changeText}></Cards>
      </div>
    </div>
  );
}

export default App;
