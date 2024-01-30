import Item from "./Item";

const ItemList = ({items}) => {
    return(
    <div className="container-fluid p-4">
        <div className="row justify-content-center">
            {items.map(item => (
                    <Item key={item.id} item={item} />
            ))}    
        </div>
    </div>
    )
}

export default ItemList;