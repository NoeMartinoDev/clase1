import React from "react";
import style from "./Boton.module.css";

function Boton (props) {

    return (
        <button className={style.botonpersonalizado} onClick={props.handleClick}>{props.texto}</button>
    )
}

export default Boton;