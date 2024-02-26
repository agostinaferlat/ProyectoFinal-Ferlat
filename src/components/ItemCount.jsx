import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const incrementar = () => {
        if (counter < itemStock) {
            setCounter(counter + 1);
        }
    }

    const decrementar = () => {
        if (counter > 1){
            setCounter(counter - 1);
        }
    }

    const addToCart = () => {
        if (counter <= itemStock) {
            setItemStock(itemStock - counter);
            setCounter(1);
            onAdd(counter);
            setItemAdded(true);

            Toastify({
                text: "Se agregó el producto al carrito",
                duration: 3000,
                gravity: "top", 
                position: "right",
                style: {
                  background: "linear-gradient(to right, #e5cde8, #cdeeff)",
                  color: "black",
                }
              }).showToast();
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return(
        <>
            <div className="row my-1">
                <div className="col-md-4">
                    <div className="btn-group p-2" role="group" aria-label="Basic example">
                        <button type="button" className="btn btnComprar" onClick={decrementar}>-</button>
                        <button type="button" className="btn btnComprar">{counter}</button>
                        <button type="button" className="btn btnComprar" onClick={incrementar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    {itemAdded ? <Link to={"/cart"} className="btn btnComprar pe-5 text-center">Ir al carrito </Link> : <button type="button" className="btn btnComprar" onClick={addToCart}>Agregar al carrito</button>}
                </div>
            </div>

        </>
    )

}

export default ItemCount;