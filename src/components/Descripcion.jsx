import React from "react";
import Boton from "./Boton";
import style from "./Descripcion.module.css";

function Descripcion ( {name, lastname} ) {

    const handleClick = () => {
        alert("Este es el botón del componente Descripción")
    }

    return (
        <>
            <p className={style.parrafo}>Mi nombre es {name} {lastname} y soy desarrollador front-end</p>
            <Boton texto={"Más sobre " + name} handleClick={handleClick}/>
        </>
    )

}

export default Descripcion;