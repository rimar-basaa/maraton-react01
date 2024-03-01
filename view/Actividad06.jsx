import { useState } from 'react';
import './Actividad06.css';
import Comp06 from '../src/components/comp06';
import bruja from '../src/img/kid-bruja-removebg.png';
import capitan from '../src/img/kid-captain-america-removebg.png';
import deadpool from '../src/img/kid-deadpool-removebg.png';
import hulk from '../src/img/kid-hulk-removebg.png';
import ironman from '../src/img/kid-iroman-removebg.png';
import loki from '../src/img/kid-loki-removebg.png';
import spiderman from '../src/img/kid-spiderman-removebg.png';
import stranger from '../src/img/kid-stranger-removebg.png';

const Actividad06 = () => {
    const avengers = [
        {nombre: "Bruja Escarlata", precio: 1500},
        {nombre: "Capitan America", precio: 2000},
        {nombre: "DeadPool", precio: 1800},
        {nombre: "Hulk", precio: 1600},
        {nombre: "Ironman", precio: 1800},
        {nombre: "Loki", precio: 2000},
        {nombre: "Spiderman", precio: 1900},
        {nombre: "Dr.Stranger", precio: 1500}        
    ];

    const [pagar,setPagar] = useState(0);

    return (

        <div className='main'>
        <h3>Total a Pagar $ {pagar}</h3>
        <div className='display'>
            <Comp06 nombre={avengers[0].nombre} precio={avengers[0].precio} img={bruja} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[1].nombre} precio={avengers[1].precio} img={capitan} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[2].nombre} precio={avengers[2].precio} img={deadpool} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[3].nombre} precio={avengers[3].precio} img={hulk} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[4].nombre} precio={avengers[4].precio} img={ironman} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[5].nombre} precio={avengers[5].precio} img={loki} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[6].nombre} precio={avengers[6].precio} img={spiderman} pagar={pagar} setPagar={setPagar} />
            <Comp06 nombre={avengers[7].nombre} precio={avengers[7].precio} img={stranger} pagar={pagar} setPagar={setPagar} />
        </div>
            
        </div>
    );
};

export default Actividad06;