import './Comp06.css';


const Comp06 = ({ nombre, img, precio, color, pagar, setPagar }) => {

    const sumar = () => {
        setPagar(pagar + precio);
    }

    return (
        <div className='card' style={{backgroundColor: `${color}`}}>
            <h3>{nombre}</h3>
            <img src={img} alt="" />
            <p>Precio $ {precio}</p>
            <button className='btnbuy' onClick={sumar}>Comprar</button>
        </div>
    );
};

export default Comp06;