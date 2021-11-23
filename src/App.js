import './styles/App.scss';
import Navbar from './navbar';
import AboutUs from './aboutUs';
import Membership from './membership';
import Location from './location.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleUp } from 'react-icons/fa';

function App() {  
    return ( 
    <div className = "App" >
      <Navbar />
      <AboutUs />
      <Membership />
      <Location />
      <button style={topButton}><a href="#top"><FaAngleUp style={arrowUp}/></a></button>
    </div>  
    );
}

const topButton = {
  backgroundColor: "transparent",
  color: "none",
  border: "none",
  position: "fixed",
  bottom: 10,
  right: 10
}

const arrowUp = {
  color: "#FFF",
  backgroundColor: "#989898",
  height: 50 + "px",
  width: 50 + "px",
  borderRadius: 200 + "px",
  opacity: 0.5
}

export default App;
