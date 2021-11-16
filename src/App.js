import {Helmet} from 'react-helmet'
import './App.css';
import Cards from './components/Cards'
import {useState} from 'react'

function App() {
  const [notes, setNotes] = useState([{
    title: "Bruh 1",
    color: "red"
  },
  {
    title: "Bruh 2",
    color: "blue"
  },
  {
    title: "Bruh 3",
    color: "yellow"
  },
  {
    title: "Bruh 4",
    color: "green"
  },
  {
    title: "Bruh 5",
    color: "pink"
  }]);

  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: bisque; }'}</style>
      </Helmet>
      <Cards notes={notes}></Cards>
    </div>
  );
}

export default App;
