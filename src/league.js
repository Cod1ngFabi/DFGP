import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';

const League = () => {
    return (
        <section id="liga" className="ligaSection">
            <Container style={{maxWidth: 850 + "px"}}>
                <Row className="ligaRow">
                <h2 style={{textAlign: "center"}}>Wichtiges zum Ligabetrieb</h2>
                    <Col>
                        <p>Der DFGP ist aktuell mit einer Mannschaft für die Saison 2021/2022 Ostbayern in der Kreisliga Deggendorf/Straubing angemeldet.</p>
                        <p>Hier kommen Sie Zu der aktuellen <a href="https://bdv-dart.liga.nu/cgi-bin/WebObjects/nuLigaDARTDE.woa/wa/groupPage?championship=DVO+2021%2F22&group=209483" target="_blank" rel="noreferrer">Tabelle.</a></p>
                        <p>Downloads: <a href="././img/Spielplan.pdf"  target="_blank" rel="noreferrer">Aktueller Spielplan</a> | <a href="././img/Kalender.ics"  target="_blank" rel="noreferrer">Kalender | </a></p>
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
    const label = "Anzahl Aktiver";
    const number = 0;
    const duration = 4;
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        let start = 0;
        const end = 15;
        
            if (start === end){
                return;
            } 
     
            let totalMilSecDur = duration;
            let incrementTime = (totalMilSecDur / end) * 1000;
            
            let timer = setInterval(() => {
                start += 1;
                setCount(start + number);
                if(start === end) {
                    clearInterval(timer);
                    return;
                }
            }, incrementTime)
        
    }, [number, duration]);
    
    return (
        <div className="Count">
          <h3>
            <i>{label}: {count}</i>
          </h3>
        </div>
      )
}


export default League;
