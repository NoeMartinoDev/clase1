import React from 'react';
import { Card } from 'react-bootstrap';
import Boton from "./Boton";

//Estilo en línea o inline styling o style inline:
//Definir un objeto JS y pasarlo al elemento a través del atributo style

const titulo = {
    color: "crimson",
    backgroundColor: "burlywood",
    borderRadius: "5px"
}

const cardStyle = {
    width: "18rem",
    margin: "5px",
    height: "18rem",
    borderRadius: "5px",
    border: "1px solid gray"
}

const TarjetaPersona = ( {name, lastname, mail, phone} ) => {

    const handleClick = () => {
        alert("Este es el botón del componente TarjetaPersona")
    }

    return (
        <Card style={cardStyle}>
            <Card.Title >Nombre:<br/>{name}</Card.Title>
            <h2 style={titulo}>Apellido: {lastname}</h2>
            <Card.Text style={{fontSize: "13px"}}>
                Correo electrónico: {mail}
                <br/>
                Teléfono: {phone}
            </Card.Text>
            <Boton texto={"Contactar a " + name} handleClick={handleClick}></Boton>
        </Card>
        )
}

// class TarjetaPersona extends React.Component {
//     //constructor () {}

//     render () {
//         const {name, lastname, mail, phone} = this.props;
//         return (
//             <div>
//                 <h2>Nombre: {name}</h2>
//                 <h2>Apellido: {lastname}</h2>
//                 <p>Correo electrónico: {mail}</p>
//                 <p>Teléfono: {phone}</p>
//              <hr/>
//          </div>
//         )
//     }
// }

export default TarjetaPersona;