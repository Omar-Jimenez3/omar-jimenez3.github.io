import React from 'react';
import '../css/Projects.css'
import favLinks from '../Images/favLinks.png'
import image from '../Images/captured.gif'


function Projects(){

    return(

       <div className = "projects"> 
        <h3> Created a React app that lists your favorite links on the web</h3>
        <img src={favLinks} className="App-logo" alt="" />
        <div>
        <a 
                        className="App-link"
                        href="https://github.com/Omar-Jimenez3/favLinks"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check out the code
                    </a>

        </div>
        <h3> As part of a team created a react app that is a design pad, where users can drag and drop 
            inputs to change the pads. </h3>

        <img src={image} className="App-logo" alt="" />
        <div>
        <a 
                        className="App-link"
                        href="https://github.com/Omar-Jimenez3/design-pad"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check out the code
                    </a>

        </div>


       </div>




    )
}

export default Projects