import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


const Location = () => {
return (
    <section id="anfahrt" className="locationSection">
        <Container fluid style={{padding: 0}}>
            <Row style={{margin: 0}}>
                <h2 style={{textAlign: "center"}}>Anfahrt</h2>
                <iframe className="mapStyle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.1200506805394!2d12.325154515856449!3d48.970239100778564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fddd1e76bb949%3A0xd4e09ab49083a06a!2sDartfreunde%20Geisling-Pfatter%20e.V.!5e0!3m2!1sde!2sde!4v1637694129161!5m2!1sde!2sde"></iframe>
            </Row>
        </Container>
        <Container style={{maxWidth: 850 + "px"}}>
            <Row style={{marginTop: 30 + "px"}}>
                <Col className="locationText">
                <h3 className="gameAreaHeading">Spielstätte:</h3>  
                <p>Gasthaus Posthorn</p>     
                <p>Hauptstraße 52, 93102 Pfatter</p>
                <p><a href="tel:0948 1351">Tel.: 0948 1351</a></p>
                </Col>
                <Col>
                    <div>
                        <img className="img-fluid swapImage" src="././img/Teamfoto_buehne.jpg" alt="Die Spielstätte des DFGP" ></img>
                    </div>
                    <p>DFGP's Heiligtum 🙏 Danke an alle Helfer!</p>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default Location;
