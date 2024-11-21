import React from 'react';
import style from "./CardCustomizada.module.css";

const CardCustomizada = (props) => {

    return (
        <div className={style.container} style={props.styleCustomizado}>
            <h2 className={style.titulo}>{props.obj.name}</h2>
            <img className={style.image} src={props.obj.image} alt={props.obj.altImage}/>
            <p className={style.texto}>{props.obj.description}</p>
        </div>
    )
}

export default CardCustomizada;