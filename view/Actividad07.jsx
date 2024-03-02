import './Actividad07.css';

const Actividad07 = () => {
    const avengers=[
        {
            nombre:"bruja",
            poder:"brujeria"
        },{
            nombre:"deadpool",
            poder:"regeneracion"
        },{
            nombre:"hulk",
            poder:"fuerza"
        },{
            nombre:"iroman",
            poder:"tecnologia"
        },{
            nombre:"loki",
            poder:"mentira"
        },{
            nombre:"spiderman",
            poder:"telaraña"
        },{
            nombre:"stranger",
            poder:"magia"
        }
      ];
    
    const borrar = (e) => {
        e.target.parentNode.remove();
    };    

    const tags = avengers.map(hero =>
        <div className="tag" key={hero.nombre}> 
            <p>El superheroe <span className='rojo'>{hero.nombre.toUpperCase()}</span> su principal poder es la <span>{hero.poder}</span></p>
            <img src={"../src/img/kid-" + hero.nombre + "-removebg.png"} alt="" />
            <button className='btnErase' onClick={borrar}>Borrar</button>
        </div>
    );

    return (
        <div className="box-main">
            {tags}            
        </div>
    );
};

export default Actividad07;