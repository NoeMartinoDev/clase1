import React from "react";
import TarjetaPersona from "./TarjetaPersona";
import { CardGroup } from "react-bootstrap";
import CardCustomizada from "./cardCustomizada/CardCustomizada";

const ListaPersonas = ( {lista} ) => {

    const licuadora = {
        image: "https://th.bing.com/th/id/OIP.ZUvEHRvOddvecyM6NK3gsAHaHa?rs=1&pid=ImgDetMain",
        altImage: "Foto de una licuadora",
        description: "Licuadora con 5 velocidades y potente motor",
        name: "Licuadora"
    }

    return (
        <>
        <CardGroup>
            {lista.map ((p, index) =>
            <TarjetaPersona name={p.name} lastname={p.lastname} mail={p.mail} phone={p.phone} key={index}/>
            )}   
        </CardGroup>
        <CardCustomizada obj={licuadora}/>   
        </>
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