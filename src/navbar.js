import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FaBars } from "react-icons/fa";

const Navbar  = () => {
    return (
       <header id="home">
                <Container fluid className="nav">
                    <Row className="nav-row" fluid>
                        <Col className="col1">
                            <Logo /> 
                        </Col>
                        <Col className="col2">   
                            <Navigation />
                            <Hamburger />
                        </Col>
                    </Row>
                </Container>    
                <Stage />
       </header>
    )
}

const Navigation = () => {
return (
    <ul className="navigation-parent">
        <li className="nav-element" ><a href="#ueber" className="nav-element">Über Uns</a></li>
        <li className="nav-element" ><a href="#mitgliedschaft" className="nav-element">Mitgliedschaft</a></li>
        <li className="nav-element" ><a href="#anfahrt" className="nav-element">Anfahrt</a></li>
        <li className="nav-element" ><a href="#liga" className="nav-element">Liga</a></li>
        <li className="nav-element" ><a href="#aktuelles" className="nav-element">Aktuelles</a></li>
    </ul>
);
}

const Logo = () => {
return (
    <a className="logo-container" href="#home">
        <img className="" src="././img/DFGP_Logo_nav.png" alt="DFGP Logo"></img>
    </a>
);
}

const Stage = () => {
return (
    <>
    <img className="img-fluid stage" src="././img/Teamfoto_buehne.jpg" alt="DFGP Team Foto vom ersten Spieltag" ></img>
    <div class="centerStageText"><h1>Herzlich Wilkommen beim DFGP!</h1></div>
    </>
);
}

const Hamburger = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }
      
    return (

<div class="topnav">
  <ul id="hamburger" className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
    <li className="nav-element" onClick={handleToggle}><a href="#ueber" className="nav-element">Über Uns</a></li>
    <li><a href="#mitgliedschaft" className="nav-element" onClick={handleToggle}>Mitgliedschaft</a></li>
    <li><a href="#anfahrt" className="nav-element" onClick={handleToggle}>Anfahrt</a></li>
    <li><a href="#liga" className="nav-element" onClick={handleToggle}>Liga</a></li>
    <li><a href="#kontakt" className="nav-element" onClick={handleToggle}>Kontakt</a></li>
  </ul>
  
  <button className="toggleButton" onClick={handleToggle}>
    <FaBars />
    </button>
</div>
    )
}

export default Navbar;


