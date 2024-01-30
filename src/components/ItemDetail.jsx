const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row ms-3 justify-content-center">
                <div className="col-md-3">
                    <img src={item.image} alt={item.title} className="img-fluid p-4"/>
                </div>
                <div className="col-md-4 p-2 text-center">
                    <h2>{item.title}</h2>
                    <p className="texto-descripcion">{item.description}</p>
                    <h4>${item.price}</h4>
                    <button type="button" className="btn btnComprar mt-2">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;