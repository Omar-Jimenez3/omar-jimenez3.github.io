import React from 'react';
import '../css/about.css'
import logo from '/Users/omar/Desktop/omar-jimenez3.github.io/src/Images/Omar.jpg';

function About(){

    return(
        <div className="about">
            <p>
           I'm a senior at lehman college majoring in Computer Science.
           I developing apps and improving my skills and knowledge.
             </p>

             <p>
                When I'm not programming I enjoy Playing video games, reading and
                building computers.
             </p>

             <img src={logo} className="App-logo" alt="Omar Jimenez" />



        </div>
    )
}

export default About