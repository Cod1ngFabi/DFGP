import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React from 'react';
import ScheibenZu from './img/location/ScheibenZu.jpg';
import ScheibenOffen from './img/location/ScheibenOffen.jpg';

const Location = () => {
return (
    <section id="anfahrt" className="locationSection">
        <Container style={{maxWidth: 850 + "px"}}>
            <Row>
            <h2 style={{textAlign: "center"}}>Anfahrt</h2>
            <p className="locationText">Gasthaus Posthorn | Hauptstraße 52, 93102 Geising | <a href="tel:0948 1351">Tel.: 0948 1351</a></p>
            </Row>
        </Container>
        <Container fluid style={{padding: 0}}>
            <Row style={{margin: 0}}>
                <iframe title="location" className="mapStyle" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.1200506805394!2d12.325154515856449!3d48.970239100778564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fddd1e76bb949%3A0xd4e09ab49083a06a!2sDartfreunde%20Geisling-Pfatter%20e.V.!5e0!3m2!1sde!2sde!4v1637694129161!5m2!1sde!2sde"></iframe>
            </Row>
        </Container>
        
        <Container style={{maxWidth: 850 + "px"}}>
            <Row style={{marginTop: 30 + "px"}}>
                <Col>
                    <div>
                        <img className="img-fluid swapImage" src={ScheibenZu} alt="Die Spielstätte des DFGP"></img>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img className="img-fluid swapImage" src={ScheibenOffen} alt="Die Spielstätte des DFGP" ></img>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)
}

export default Location;
