const Loading = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className="spinner-border loading-color" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;