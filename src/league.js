import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';

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
                        <p>Downloads: <a href="././img/Spielplan.pdf" download="Spielplan.pdf" target="blank">Aktueller Spielplan</a> | <a href="././img/Kalender.ics" download="Kalender.ics" target="blank">Kalender</a></p>
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
    const hiddenRef = useRef();
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
