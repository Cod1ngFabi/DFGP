import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import React from 'react';


const Membership = () => {
    const [count, setCount] = React.useState(0);
    const imgs = ["TeamfotoGruene.jpg", "WeihnachtsfeierTeamfoto.jpg","Weihnachtsturnier.jpg", "GruppenfotoHelmut.jpg"];
    let actualFoto = "././img/galery/"+imgs[count];
    
    const handleLeftClick = () => {
        if(count == 0){
            setCount(imgs.length-1);
            return;
        }
        setCount(count-1)
    }
    const handleRightClick = () => {
        if(count == imgs.length-1){
            setCount(0);
            return;
        }
        setCount(count+1)
    }
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
                        <img className="img-fluid" src={actualFoto} alt="DFGP Team Foto vom ersten Spieltag" ></img>
                        <div className="slideShow">
                            <FaAngleLeft onClick={handleLeftClick}/><FaAngleRight onClick={handleRightClick}/>
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
