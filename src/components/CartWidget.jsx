import CartIcon from "../assets/cart2.svg"

const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-cart-color position-relative">
            <img src={CartIcon} alt="imagen carrito" width={20} />
            <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger mt-1">3</span>
        </button>
    )
}

export default CartWidget;