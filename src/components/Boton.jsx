import React from "react";
import style from "./Boton.module.css";

function Boton (props) {

    const handleClick = () => {
        alert ("Este es el botón del componente Boton")
    }

    return (
        <button className={style.botonpersonalizado} onClick={handleClick}>{props.texto}</button>
    )

}

export default Boton;