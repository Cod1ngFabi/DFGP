import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const mapStyle= {
  height: 450 + "px",
  border: '4px solid rgb(0,0,0)',
  padding: 0 
}

const Location = () => {
return (
    <section id="anfahrt" className="locationSection">
        <Container>
            <Row>
            <h2 style={{textAlign: "center"}}>Anfahrt</h2>
            <iframe style={mapStyle} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.1200506805394!2d12.325154515856449!3d48.970239100778564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479fddd1e76bb949%3A0xd4e09ab49083a06a!2sDartfreunde%20Geisling-Pfatter%20e.V.!5e0!3m2!1sde!2sde!4v1637694129161!5m2!1sde!2sde"></iframe>
            </Row>
        </Container>
    </section>
)
}

export default Location;
