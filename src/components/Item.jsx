import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <div className="col-md-4 p-4">
            <div className="card card_size border-0 offset-md-2">   
                <Link className="text-decoration-none text-dark" to={"/item/" + item.id}>
                    <img src={item.image} className="card-img-top" alt={item.title}/>
                    <div className="card-body centered align-items">
                        <h5 className="card-title nombre text-center">{item.title}</h5>
                        <p>${item.price}</p>
                        <button type="button" className="btn btnComprar mt-2">Comprar</button>
                    </div>
                </Link>    
            </div>
        </div>
    )
}

export default Item;