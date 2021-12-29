import React from 'react';
import { Link } from 'react-router-dom';
import Imprint from './imprint.js';

const NotFound = () => {
    return (
        <div style={{padding: 50 + "px"}}>
            <h2>404 Nicht gefunden</h2>
            <p>Es tut uns leid, aber die von Ihnen gesuchte Seite existiert nicht.</p>
            <p><Link to="/Impressum" element={<Imprint />}>Meinten Sie /Impressum ?</Link></p>
        </div>
    )
}
export default NotFound;
