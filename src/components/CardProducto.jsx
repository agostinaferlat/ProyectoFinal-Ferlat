const CardProducto = ({imagen,nombre,precio}) =>{
    return(
        <div className="card card_size border-4 color-border">
            <img src={imagen} className="card-img-top" alt={nombre}/>
            <div className="card-body centered">
                <h5 className="card-title nombre">{nombre}</h5>
                <span>${precio}</span>
                <button type="button" className="btn btnComprar mt-2">Comprar</button>
            </div>
        </div>
    )
}

export default CardProducto;