import { useEffect, useState } from "react";
import listaProductos from "../productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(id ? listaProductos.filter(item => item.category === id) : listaProductos);
            }, 2000);
            
        })
        promesa.then (data => {
            setItems(data);
        })

    }, [id]);

    return(
        <>
            {id ? "" : <Carousel /> }
            <ItemList items={items} />
        </>
    )
}

export default ItemListContainer;
