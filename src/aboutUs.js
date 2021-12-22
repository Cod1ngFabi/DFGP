import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <section id="ueber" className="ueberSection">
            <Container style={{maxWidth: 850 + "px"}}>
                <Row>
                    <Col className="colUeber">
                    <h2 style={{textAlign: "center"}}>Wir stellen uns vor</h2>
                    <p><strong>Die Dartsfreunde Geisling Pfatter e.V. (DFGP)</strong> sind ein eingetragener gemeinnütziger Dartsportverein mit der Spiel- und Trainingsstätte im „Gasthaus Posthorn“.
                         Als ein paar enthusiastische Dartspieler von  Geisling und Pfatter die Idee hatten, sich am Dartboard mit anderen Dartern in einer Liga zu messen, entstand die Vision einen Verein zu gründen.
                          Die Gründung des Vereins im Oktober 2021 war dann nur logische Konsequenz.
                         Seit der Saison 2021/20222 nehmen wir am <a href="https://bdv-dart.liga.nu/cgi-bin/WebObjects/nuLigaDARTDE.woa/wa/clubInfoDisplay?club=2081" target="blank">Ligabetrieb in der Kreisliga Deggendorf/Straubing</a> teil.</p>
                         <h2 style={{textAlign: "center", marginTop: 30 + "px"}}>Game on!</h2>
                         <p>
                         Als neu gegründeter Steeldart Verein würden wir uns natürlich freuen, neue Gesichter, genauso aber auch alte Bekannte, bei uns begrüßen zu dürfen.
                         Wenn du interesse am Dartspiel hast, dann willst du ja vielleicht sogar bei uns Mitglied werden. 
                         <strong>Training</strong> ist jeden <strong>Mittwoch und Sonntag ab 19:00</strong>. Schau doch gerne mal vorbei! 
                         </p>
                         <p>
                         Für alle weiteren Neuigkeiten von unserer Mannschaft an sich und den weiteren Spielbetrieb folge uns doch einfach hier bei <a href="https://www.facebook.com/Dartfreunde-Geisling-Pfatter-eV-102601505575227" target="blank">Facebook</a>.
                         </p>
                         <p>
                         Bei Fragen stehen wir auch gerne per Mail an <a href="mailto:DartfreundeGeislingPfatter@gmx.de">DartfreundeGeislingPfatter@gmx.de</a> zur Verfügung.    
                         </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


export default AboutUs;
