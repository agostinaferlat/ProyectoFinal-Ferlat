import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/dash.svg";

const Cart = () => {
    const {cart, removeItem, clear, CantTotalProductos, SumaTotalProductos} = useContext(CartContext);
    

    if (CantTotalProductos () == 0) {
        return(
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert styleOrdenGenerada" role="alert">No se encontraron productos en el Carrito!</div>
                        <Link to={"/"} className="btn btnComprar my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return( 
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h2 className="m-4">Productos Seleccionados</h2>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td> <img src={product.image} alt={product.title} width={60} /></td>
                                    <td className="align-middle">{product.title}</td>
                                    <td className="align-middle">${product.price}</td>
                                    <td className="align-middle p-1">{product.quantity}</td>
                                    <td className="align-middle">${product.quantity * product.price}</td>
                                    <td className="align-middle"> <a href="#" onClick={() => {removeItem(product.id)}}> <img src={trash} alt="Eliminar Producto" title="Eliminar Producto"/></a></td>
                                </tr>
                            )}
                            <tr>
                                <td colSpan={3}>&nbsp;</td>
                                <td className="align-middle fw-bold">Precio total</td>
                                <td className="align-middle fw-bold">${SumaTotalProductos()}</td>
                                <td><button className="btn btnComprar align-middle" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            <tr>
                                <td colSpan={8}><Link to={"/checkout"}className="btn btnComprar align-middle">Finalizar compra</Link></td>
                            </tr>        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;