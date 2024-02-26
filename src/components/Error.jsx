import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <h4 className="display-3">Error</h4>
                    <h6 className="display-5">La página que estás buscando no existe</h6>
                    <Link to={"/"} className="btn btnComprar my-5">Volver a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Error;