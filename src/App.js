import './App.css';
import Descripcion from './components/Descripcion';
import ListaPersonas from './components/ListaPersonas';

function App() {

  const name = "Martín"
  const lastname = "Perez"

  const lista = [
    {   name: "Pablo",
        lastname: "González",
        mail: "pgonzalez@mail.com",
        phone: "5485259"
    },
    {   name: "Mercedes",
        lastname: "Quiroga",
        mail: "mquiroga@mail.com",
        phone: "8485934"
    },
    {   name: "Laura",
        lastname: "Martínez",
        mail: "lmartinez@mail.com",
        phone: "8469211"
    },
    {   name: "Ariel",
        lastname: "Fernández",
        mail: "afernandez@mail.com",
        phone: "8456217"
    },
    {   name: "Fátima",
        lastname: "Ruiz",
        mail: "fruiz@mail.com",
        phone: "4519997"
    }
]

const handleClick = () => {
  alert ("Hiciste click en el botón")
}

  return (
    <div className="App">
     <h1>Hola, {name}</h1>
     <Descripcion name={name} lastname={lastname}/>
     <ListaPersonas lista={lista}/>
     <button onClick={handleClick}>CLICK ME!</button>
    </div>
  );
}

export default App;
