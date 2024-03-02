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
            nombre:"ironman",
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

    const tags = avengers.map(hero =>
        <div className="tag" key={hero.nombre}> 
        <p>El superheroe <span>{hero.nombre}</span> su principal poder es la <span>{hero.poder}</span></p>
        </div>
    );

    return (

        <div className="box-main">
            {tags}            
        </div>
    );
};

export default Actividad07;