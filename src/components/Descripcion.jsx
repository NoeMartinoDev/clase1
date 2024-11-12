import React from "react";
import Boton from "./Boton"

function Descripcion ( {name, lastname} ) {

    return (
        <>
            <p>Mi nombre es {name} {lastname} y soy desarrollador front-end</p>
            <Boton name={name}/>
        </>
    )

}

export default Descripcion;