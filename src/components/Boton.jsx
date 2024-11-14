import React from "react";

function Boton (props) {

    const handleClick = () => {
        alert ("Este es el botón del componente Boton")
    }

    return (
        <button onClick={handleClick}>Más sobre {props.name}</button>
    )

}

export default Boton;