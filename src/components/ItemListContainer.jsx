const ItemListContainer = ({greeting}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col justify-content-center text-center">
                    <div class="alert styleGreeting animate__animated animate__repeat-3 animate__pulse" role="alert">
                        <h5>{greeting}</h5>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ItemListContainer;
