import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';


const Membership = () => {
    return(
        <section id="mitgliedschaft" className="membershipSection">
            <Container style={{maxWidth: 850 + "px"}}>
                <Row className="membershipRow">
                    <h2 style={{textAlign: "center"}}>Jetzt Mitglied werden!</h2>
                    <Col>
                        <QuestionList />
                        <MotivationText />
                    </Col>
                    <Col className="memberImg">
                        <img className="img-fluid" src="././img/Teamfoto_buehne.jpg" alt="DFGP Team Foto vom ersten Spieltag" ></img>
                        <div className="slideShow">
                            <FaAngleLeft /><FaAngleRight />
                        </div>
                    </Col>
                </Row>
                <Row className="applicationRow">
                    <input type="button" value="Mitgliederantrag" className="applicationButton"/>
                </Row>
            </Container>
        </section>
    )
}



const QuestionList = () => {
    return (
        <ul className="questions">
           <li>Du interessiert dich für den Dartsport?</li>
           <li>Du willst am Ligabetrieb teilnehmen?</li>
           <li>Du willst einen lebendigen Verein?</li>
           <li>Du willst den Verein unterstützen?</li> 
        </ul>
    )
}

const MotivationText = () => {
    return (
       <div class="motivationText"> 
       <p>Es trifft mindestens einer der Punkte auf dich zu? Na dann los! Wir freuen uns über jedes weitere Mitglied, dass wir begrüßen dürfen!</p>
       <p>Training ist immer Mittwochs und Sonntags um 19:00.</p>
       <p>Schaut gerne einfach mal vorbei!</p>
       <p><strong>Euer DFGP</strong></p>
       </div>
    )
}


export default Membership;
