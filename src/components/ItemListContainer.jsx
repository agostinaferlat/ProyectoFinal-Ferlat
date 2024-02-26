import { useEffect, useState } from "react";
import listaProductos from "../productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // useEffect(() => {
    //     const promesa = new Promise ((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? listaProductos.filter(item => item.category === id) : listaProductos);
    //         }, 2000);
            
    //     })
    //     promesa.then (data => {
    //         setItems(data);
    //     })

    // }, [id]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemsCollection = collection(db, "items");

    //     listaProductos.forEach(producto => {
    //         addDoc(itemsCollection, producto);
    //     });    
    // }, [])

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const consultaProductos = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
        getDocs(consultaProductos).then(resultado => {
            setLoading(false);
            setItems(resultado.docs.map(producto =>({id:producto.id, ...producto.data()})));
        })
    }, [id]);


    return(
        <>
            {id ? "" : <Carousel /> }
            {loading ? <Loading /> : <ItemList items={items} />}
        </>
    )
}

export default ItemListContainer;
