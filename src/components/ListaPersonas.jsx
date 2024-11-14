import React from "react";
import TarjetaPersona from "./TarjetaPersona";

const ListaPersonas = ( {lista} ) => {
    return (
        <div>
            {lista.map ((p, index) =>
            <TarjetaPersona name={p.name} lastname={p.lastname} mail={p.mail} phone={p.phone} key={index}/>
            )}      
        </div>
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