import ImagenLickimat from "../assets/lickimat.jpg"
import ImagenAlfombra from "../assets/alfombraolfativa.jpg"
import ImagenRascador from "../assets/rascador.jpg"
import ImagenSoga from "../assets/soganudos.jpg"
import CardProducto from "./CardProducto"


const LosMasVendidos = () =>{
    return(

        <div>
            <h2 className="styleTitulo p-4 ms-2">Los más vendidos</h2>
            
            <div className="row justify-content-between p-4 m-3">
                <div className="col">
                    <CardProducto imagen={ImagenLickimat} nombre={"Lickimat"} precio={5000} />
                </div>    

                <div className="col">
                    <CardProducto imagen={ImagenAlfombra} nombre={"Alfombra olfativa"} precio={8000} />
                </div>
                        
                <div className="col">
                    <CardProducto imagen={ImagenRascador} nombre={"Rascador"} precio={10000} />
                </div>

                <div className="col">
                    <CardProducto imagen={ImagenSoga} nombre={"Soga con nudos"} precio={4000} />
                </div>

            </div>
        </div>
    )
}

export default LosMasVendidos;

