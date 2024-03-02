import { useState, useEffect } from "react";
import './Actividad08.css';

const Actividad08 = () =>{
    const url = 'https://api.chucknorris.io/jokes/random';
    const [dat, setDat] = useState("");

    const traerData = async () => {
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        setDat(data);    
    };

    useEffect(() => {        
        traerData();
    },[]);

    const joker = <div className="boxJoker">
        <p>{dat.value}</p>
        <button className="btnNext" onClick={traerData}>Siguiente</button>
    </div>;  
    

    return (
        <>
        {joker}
        </>
    );
};

export default Actividad08;