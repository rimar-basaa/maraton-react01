import { useState } from "react";
import './Actividad03.css';

const Actividad03 = () => {

    const [nombre,setNombre] = useState('rimar');
    const [contador,setContador] = useState(0);

    const cambiar = () => {
        if (nombre == 'rimar') {
            setNombre('basaa') 
        } else {
            setNombre('rimar')
        };
    };

    const disminuir = () => {
        setContador(contador - 1);
    };

    const aumentar = () => {
        setContador(contador + 1);
    };

    const reset = () => {
        setContador(0);
    };

    return (
        
        <div className="gral03">
            <h3>Hola me llamo {nombre}</h3>
            <button onClick={cambiar} >Cambiar Nombre</button>
            <hr />

            <label className="counter">{contador}</label>
            <br />
            <button onClick={disminuir} >Disminuir</button>
            <button onClick={aumentar} >Aumentar</button>
            <button onClick={reset} >Reset</button>
        </div>
    );
};

export default Actividad03;