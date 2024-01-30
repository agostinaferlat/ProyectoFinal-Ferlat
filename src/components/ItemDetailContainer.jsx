import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listaProductos from "../productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        const promesa = new Promise (resolve => {
            setTimeout(() => {
                let producto = listaProductos.find (item =>item.id === parseInt (id));
                resolve(producto);
            }, 2000);
            
        })
        promesa.then (data => {
            setItem(data);
        })
    
    }, [id]);
    
    return(
        <>
            <ItemDetail item = {item} />
        </>
    )
    
}

export default ItemDetailContainer;