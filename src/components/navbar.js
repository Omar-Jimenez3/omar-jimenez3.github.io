import React from "react";
import "../css/NavBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

 class Navbar extends React.Component {
  render() {
    return (
        
        <div>
          <nav>
            <ul>
              <li>
                <Link to ="/home">Home </Link>
              </li>
              <li>
                <Link to = "/about">About </Link>
              </li>
              <li>
                <Link to = "/Projects">Projects</Link>
              </li>
              <li>
                <Link to = "/Contact">Contact</Link>
              </li>

            </ul>
          </nav>
        </div>
        
    );
  }
}

export default Navbar