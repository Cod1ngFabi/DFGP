import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';


const News = () => {
    return (
        <section id="aktuelles" className="newsSection">
            <Container style={{maxWidth: 850 + "px"}}>
                <Row>
                    <h2 style={{textAlign: "center"}}>Folge uns</h2>
                    <center>
                        <iframe className="newsFeed" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDartfreunde-Geisling-Pfatter-eV-102601505575227&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                        width="500" height="600" scrolling="no" frameborder="0" allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                    </center>
                </Row>
            </Container>
        </section>
        )
}

export default News;
