import React from 'react';
import './App.css';
import Home from "./components/home";
import About from "./components/about"
import Projects from './components/projects';
import Contact from './components/contact'
import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
    <Switch>
      <Route path = "/About"> 
        <About/>
      </Route>

      <Route path = "/Projects">
        <Projects/>
      </Route>

      <Route path = "/Home">
        <Home/>

      </Route>
      <Route path = "/Contact">
        <Contact/>

      </Route>

    </Switch>
    
      </Router>
      
      


      
    </div>
  );
}

export default App;
