import {Helmet} from 'react-helmet'
import './App.css';
import Cards from './components/Cards'
import {useState} from 'react'
import {GrAdd} from 'react-icons/gr'

const App = () => {
  const [notes, setNotes] = useState([{
    id: 1,
    title: "Bruh 1",
    color: "red"
  },
  {
    id: 2,
    title: "Bruh 2",
    color: "blue"
  },
  {
    id: 3,
    title: "Bruh 3",
    color: "yellow"
  },
  {
    id: 4,
    title: "Bruh 4",
    color: "green"
  },
  {
    id: 5,
    title: "Bruh 5",
    color: "pink"
  }]);

  const colors = ["red", "blue", "yellow", "green", "pink", "white"];

  const deleteTask = (id) => {
    console.log(id);
    console.log(notes.filter((note) => note.id !== id));
    setNotes(notes.filter((note) => note.id !== id));
  }

  const addTask = () => {
    setNotes([...notes, {id: Math.random()*10000, title: "", color: "yellow"}]);
  }
  
  const changeColor = (id) => {
    let thisNote = notes.find((note) => note.id === id);
    let index = colors.indexOf(thisNote.color);
    setNotes(notes.map((note) => note.id === id ? {...note, color: colors[(index+1) % colors.length]} : note));
  }
  
  const changeText = (id, text) => {
    console.log(`Text changed, id:${id}, text: ${text}`);
    setNotes(notes.map((note) => note.id === id ? {...note, title: text} : note));
  }

  return (
    <div style={{padding: "10px"}}>
     <GrAdd className="iconplus" onClick={addTask}/>
      <div className="notesSection">
        <Helmet>
          <style>{'body { background-color: bisque; }'}</style>
        </Helmet>
        <Cards notes={notes} removeCard={deleteTask} switchColor={changeColor} switchText={changeText}></Cards>
      </div>
    </div>
  );
}

export default App;
