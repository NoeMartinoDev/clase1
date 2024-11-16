import React from "react";
import Boton from "./Boton";
import style from "./Descripcion.module.css";

function Descripcion ( {name, lastname} ) {

    return (
        <>
            <p className={style.titulo}>Mi nombre es {name} {lastname} y soy desarrollador front-end</p>
            <Boton texto={"Más sobre " + name}/>
        </>
    )

}

export default Descripcion;