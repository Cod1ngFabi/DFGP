import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const League = () => {
    return (
        <section id="liga" className="ligaSection">
            <Container style={{maxWidth: 850 + "px"}}>
                <Row className="ligaRow">
                <h2 style={{textAlign: "center"}}>Liga</h2>
                    <Col>
                        <p>Ostbayern 2021/2022</p>
                        <p>Kreisliga Deggendorf/Straubing</p>
                        <p>Zur aktuellen <a href="https://bdv-dart.liga.nu/cgi-bin/WebObjects/nuLigaDARTDE.woa/wa/groupPage?championship=DVO+2021%2F22&group=209483" target="_blank">Tabelle</a></p>
                        <p>Downloads: <a href="././img/Spielplan.pdf" download="Spielplan.pdf" target="_blank">Aktueller Spielplan</a> | <a href="././img/Kalender.ics" download="Kalender.ics" target="_blank">Kalender</a></p>
                    </Col>
                    <Col>
                        <Counter />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


const Counter = () => {
    return (
        <div className="Count">
          <h3>
              Anzahl Spielberechtigter:
            <i></i>
            
          </h3>
        </div>
      )
}


export default League;
