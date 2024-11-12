import './App.css';
import Descripcion from './components/Descripcion';

function App() {

  const name = "Martín"
  const lastname = "Perez"

  return (
    <div className="App">
     <h1>Hola, {name}</h1>
     <Descripcion name={name} lastname={lastname}/>
    </div>
  );
}

export default App;
