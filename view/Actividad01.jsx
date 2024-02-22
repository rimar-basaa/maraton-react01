import imagen0 from '../src/img/kid-bruja.jpg';
import imagen1 from '../src/img/kid-loki.jpg';
import imagen2 from '../src/img/kid-Stranger.jpg';
import vista from '../src/img/kid-visto.jpg';
import vacia from '../src/img/kid-vacia.jpg';
import './Actividad01.css';

function Actividad01() {
  const nombres = ["Bruja", "Loki", "Stranger"];

  function nombre(e) {
    if(e.target.innerHTML == "Visto") {
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    };       
  };

  function imagen(e) {
    if (e.target.src.includes('visto')) {
      e.target.src = vacia;
    } else {
      e.target.src = vista;
    };    
  };

  return (
    <div className='contenedor'>
      <div className='caja'>
        <img src={imagen0} onClick={imagen} />
        <div className='texto' onClick={nombre}>{nombres[0]}</div>
      </div>
      <div className='caja'>
        <img src={imagen1} onClick={imagen} />
        <div className='texto' onClick={nombre}>{nombres[1]}</div>        
      </div>
      <div className='caja'>
        <img src={imagen2} onClick={imagen} />
        <div className='texto' onClick={nombre}>{nombres[2]}</div>       
      </div>      
    </div>
  );
};

export default Actividad01;