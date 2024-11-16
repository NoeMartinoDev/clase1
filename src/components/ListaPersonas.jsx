import React from "react";
import TarjetaPersona from "./TarjetaPersona";
import { CardGroup } from "react-bootstrap";

const ListaPersonas = ( {lista} ) => {
    return (
        <CardGroup>
            {lista.map ((p, index) =>
            <TarjetaPersona name={p.name} lastname={p.lastname} mail={p.mail} phone={p.phone} key={index}/>
            )}      
        </CardGroup>
    )
}

// class ListaPersonas extends React.Component {
//     //constructor () {}

//     render () {
//         return (
//             <div>
//              {this.props.lista.map ((p, index) =>
//                  <TarjetaPersona name={p.name} lastname={p.lastname} mail={p.mail} phone={p.phone} key={index}/>
//             )}      
//         </div>
//         )
//     }
// }

export default ListaPersonas;