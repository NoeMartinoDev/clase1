import './App.css';
import Descripcion from './components/Descripcion';
import ListaPersonas from './components/ListaPersonas';
import Boton from "./components/Boton";
import CardCustomizada from './components/cardCustomizada/CardCustomizada';

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
  alert ("Hiciste click en el botón del componente App")
}

const martin = {
  name: "Martín Peréz",
  image: "https://th.bing.com/th/id/OIP.E2lwe-_bLJWe3ohKGzh6sAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain",
  altImage: "Foto de perfil del empleado Martín Pérez",
  description: "Empleado hace 9 años"
}

  return (
    <div className="App">
     <h1>Hola, {name}</h1>
     <Descripcion name={name} lastname={lastname}/>
     <ListaPersonas lista={lista}/>
     <Boton handleClick={handleClick} texto="CLICK ME!"></Boton>
     <CardCustomizada obj={martin} styleCustomizado={{ backgroundColor: "lightgreen" }}/>
    </div>
  );
}

export default App;
