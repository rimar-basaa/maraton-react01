import { useState } from "react";
import './Actividad03.css';

const Actividad03 = () => {

    const [nombre,setNombre] = useState('rimar');
    const [contador,setContador] = useState(0);
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [resultado,setResultado] = useState();

    const cambiar = () => {
        if (nombre == 'rimar') {
            setNombre('basaa') 
        } else {
            setNombre('rimar')
        };
    };
// contador
    const disminuir = () => {
        setContador(contador - 1);
    };

    const aumentar = () => {
        setContador(contador + 1);
    };

    const reset = () => {
        setContador(0);
    };
// sumador
    const modifica1 = (e) => {
        setNum1(e.target.value);
    };
    const modifica2 = (e) => {
        setNum2(e.target.value);
    };

    const sumar = () => {
        setResultado(Number(num1) + Number(num2));
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
            <hr />

            <div className="sumador">
                <input type="number" value={num1} onChange={modifica1} /> +
                <input type="number" value={num2} onChange={modifica2} /> =
                <input type="number" value={resultado} readOnly />
                <button onClick={sumar} className="btnSumar">Sumar</button>
            </div>
            
        </div>
    );
};

export default Actividad03;