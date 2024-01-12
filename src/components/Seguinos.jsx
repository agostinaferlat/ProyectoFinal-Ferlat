import logoInstagram from "../assets/instagram2.png"
import logoFacebook from "../assets/facebook3.png"

const Seguinos = () => {

    return(
        <div> 
            <h6 className="text-center fw-bold">Seguinos</h6>

            <div className="centered-links m-1"> 
                <a href="https://www.instagram.com/" target="_blank">    
                    <img className="icon-link" src={logoInstagram} alt="icono instagram"/>
                </a>
                                    
                <a href="https://www.facebook.com/" target="_blank">
                    <img className="icon-link" src={logoFacebook} alt="icono facebook"/>     
                </a>
            </div>
        </div>
    )
}

export default Seguinos;