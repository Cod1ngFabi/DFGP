import React from 'react';
import { Link } from 'react-router-dom';
import Imprint from './imprint.js';
import Privacy from './privacy.js';
import App from './App.js';

const NotFound = () => {
    return (
        <div style={{padding: 50 + "px"}}>
            <h2>404: Seite nicht gefunden</h2>
            <p>Es tut uns leid, aber die von Ihnen gesuchte Seite existiert nicht.</p>
            <h3><Link to="/" element={<App/>}>Zur Home Seite</Link></h3>
            <p><Link to="/Impressum" element={<Imprint />}>Meinten Sie /Impressum ?</Link></p>
            <p><Link to="/Datenschutz" element={<Privacy />}>Meinten Sie /Datenschutz ?</Link></p>
        </div>
    )
}
export default NotFound;
