import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import App from './App.js';

class Imprint extends React.Component{
    render(){
        return (
                <Container>
                    <Row>
                        <Col>
                            <h1>Impressum</h1>
                            <br />
                            <p>Dartfreunde Geisling-Pfatter e.V.</p>
                            <p>93102 Geisling</p>
                            <p>E-Mail: DartfreundeGeislingPfatter@gmx.de</p>
                            <p>Tel: 2001705876077</p>
                            <button><Link to="/" element={<App />}>Zurück zur Home Seite</Link></button>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default Imprint;
