import React from "react";
import '../css/Boton.css';

function Boton(props){

    const esOperador = valor =>{
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}>
            {props.children}
        </div>
    );
}

export default Boton;

//trimEnd elimina espacios al final
// Podemos ejecutar funciones dentro de classname gracias a Javascript