import { useRef } from 'react';
import imagen0 from '../src/img/kid-bruja.jpg';
import imagen1 from '../src/img/kid-loki.jpg';
import './Actividad02.css';

function Actividad02() {
    const cambio = 800;
    const refBox = useRef();

    const incrementar = (e) => {
       e.target.innerHTML = Number(e.target.innerHTML) + 1;
       //e.target.style.backgroundColor = 'red';
    };

    const conversor = () => {
        refBox.current.innerHTML = Number(refBox.current.innerHTML) * cambio;
    };

    const cambiar = (e) => {
        e.target.src=imagen1;
    };

    const editar = (e) => {
        refBox.current.innerHTML = e.target.value
    };
  

    return (
        <div className='container'>
            <div ref={refBox} className='box marco' onClick={incrementar}>1</div>
            <button className='marco' onClick={conversor}>Aceptar</button>
            <img className='imagen' onClick={cambiar} src={imagen0}/>
            <input className='campo marco' onChange={editar} />           
        </div>
    );
};

export default Actividad02;