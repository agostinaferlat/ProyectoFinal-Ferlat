import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    


    const addItem = (item, quantity) => {
        if (isInCart (item.id)) {
            let position = cart.findIndex(product => product.id === id);
            cart[position].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        
        const items = cart.filter(product => product.id != id);
            setCart([...items]);
        
    }

    const increaseCount = (quantityProduct) => {
        if (quantityProduct >= 1) {
            quantityProduct = (parseInt(quantityProduct) + 1)
        };

    }

    const decreaseCount = () => {
         if (quantity >=2) {
             setQuantity(quantity - 1);
         }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    const CantTotalProductos = () => {
        return cart.reduce ((acum, product) => acum += product.quantity, 0);
    }

    const SumaTotalProductos = () => {
        return cart.reduce((acum, product) => acum += product.quantity * product.price, 0);
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos, increaseCount, decreaseCount}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;