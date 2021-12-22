import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link} from 'react-router-dom';



const Footer = () => {
    return (
      <footer className="footerSection">
          <Container style={{marginBottom: 30 + "px"}} >
            <Row>
                <Col>
                    <FooterNavList />
                </Col>
                <Col>
                    <a className="footerLogo" href="#home">
                        <img className="" src="././img/DFGP_Logo_nav.png" alt="DFGP Logo"></img>
                    </a>
                    <p className="infoFooter">Gasthaus Posthorn | Hauptstraße 52, 93102 Pfatter | <a href="mailto: DartfreundeGeislingPfatter@gmx.de">DartfreundeGeislingPfatter@gmx.de</a></p>
                </Col>
                <Col>
                <Legal />
                <SocialIcons />
                </Col>
            </Row>  
          </Container>
          <Row style={{padding: 0, margin: 0, borderTop: "solid 1px #FFFFFF7A"}}>
            <p className="creator">Designed by <a href="https://github.com/Cod1ngFabi" target="_blank">Cod1ngFabi</a></p>    
          </Row>
      </footer>  
    )
}

const FooterNavList = () => {
    return (
        <ul className="navList">
           <li><a href="#ueber">Über Uns</a></li>
           <li><a href="#mitgliedschaft">Mitgliedschaft</a></li>
           <li><a href="#anfahrt">Anfahrt</a></li>
           <li><a href="#liga">Liga</a></li> 
           <li><a href="#aktuelles">Aktuelles</a></li> 
        </ul>
    )
}

const Legal = () => 
{
    return (
        <ul className="legal">
            <li><Link to="/Impressum"><a href="">Impressum</a></Link></li>
            <li><a href="">Datenschutz</a></li>
        </ul>
    )
}

const SocialIcons = () => {
    return (
        <div className="socialIconsBox">
         <div className="socialIcons">
             <span><a href="https://www.facebook.com/Dartfreunde-Geisling-Pfatter-eV-102601505575227/" target="_blank"><FaFacebookSquare /></a></span>
             <span><a href="tel: 01705876077"><FaPhoneSquare /></a></span>
             <span><a href="mailto: DartfreundeGeislingPfatter@gmx.de"><FaEnvelope /></a></span>
         </div>
        </div>
    )
}

export default Footer;
