import React from 'react';
import { Card } from 'react-bootstrap';

const titulo = {
    color: "blue",
    backgroundColor: "gray",
    borderRadius: "5px"
}

const TarjetaPersona = ( {name, lastname, mail, phone} ) => {

    return (
        <Card>
            <Card.Title >Nombre: {name}</Card.Title>
            <h2 style={titulo}>Apellido: {lastname}</h2>
            <Card.Text>Correo electrónico: {mail}</Card.Text>
            <Card.Text>Teléfono: {phone}</Card.Text>
            <hr/>
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