import { useState } from 'react';
import './Actividad04.css';

const Actividad04 = () => {

    const data = [
        {nombre: "rimar", aficion: "programar frontend"},
        {nombre: "nana", aficion: "ver tik tok"},
        {nombre: "magda", aficion: "ver netflix"}
    ];
    const [counter,setCounter] = useState(0);
    const [frase,setFrase] = useState();
    

    const mostrar = () => {
        setCounter(counter+1);
        if (counter+1 == 3){
            setCounter(0);
        };
        setFrase(<h3>La aficion principal de <span className='royal'>{data[counter].nombre}</span> es <span className='gold'>{data[counter].aficion}</span></h3>)

    }

    return (

        <div className='boxAficion'>
            <button onClick={mostrar}>ver siguiente</button>
            <div>{frase}</div>
        </div>
    );
};

export default Actividad04;