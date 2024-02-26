import { useContext } from "react";
import CartIcon from "../assets/cart2.svg"
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () =>{
    const {CantTotalProductos} = useContext(CartContext);

    return(
        CantTotalProductos() > 0 ? <Link to = {"/cart"} className="btn btn-cart-color position-relative">
            <img src={CartIcon} alt="imagen carrito" width={20} />
            <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger mt-1">{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;