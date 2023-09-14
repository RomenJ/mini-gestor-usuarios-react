import foto1 from './Default_blue_mailbox_neon_wires_highly_detailed_digital_painti_1.jpg';
import './Header.css'

const Header = ({children})=>{

    return(
        <div className="header">
        <h1 > Gestione sus usuari@s con React</h1>
        <a href="https://app.leonardo.ai/" title="Made with Leonardo.ai">
          <div className="photo-container">
            <img className="PhotoHeader" src={foto1} alt="fotoheader" />
         </div>
          
        </a>
        </div>
    )
}
export default Header