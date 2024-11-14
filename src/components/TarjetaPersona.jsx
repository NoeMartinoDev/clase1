import React from 'react';

const TarjetaPersona = ( {name, lastname, mail, phone} ) => {

    return (
        <div>
            <h2>Nombre: {name}</h2>
            <h2>Apellido: {lastname}</h2>
            <p>Correo electrónico: {mail}</p>
            <p>Teléfono: {phone}</p>
            <hr/>
        </div>
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