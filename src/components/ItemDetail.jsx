import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }


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
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;