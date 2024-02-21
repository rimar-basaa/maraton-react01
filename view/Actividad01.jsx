import imagen0 from '../src/img/kid-bruja.jpg';
import imagen1 from '../src/img/kid-loki.jpg';
import imagen2 from '../src/img/kid-Stranger.jpg';
import './Actividad01.css';

function Actividad01() {
  const nombres = ["Bruja", "Loki", "Stranger"];

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={imagen0} alt="" />
        <div className='texto'>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={imagen1} alt="" />
        <div className='texto'>{nombres[1]}</div>        
      </div>
      <div className='caja'>
        <img src={imagen2} alt="" />
        <div className='texto'>{nombres[2]}</div>       
      </div>      
    </div>
  );
};

export default Actividad01;