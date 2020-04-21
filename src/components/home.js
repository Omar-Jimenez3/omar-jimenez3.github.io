import React from 'react';
import '../css/home.css';
 import portfolio from '/Users/omar/Desktop/omar-jimenez3.github.io/src/Images/portfolio.jpeg';
 import Omar from '/Users/omar/Desktop/omar-jimenez3.github.io/src/Images/Omar.jpg';


 function Home(){
    
        return(

            <div className="home">
            <h1>Hi! </h1>
            <h2>I am Omar Jimenez</h2>
            <h2> Welcome to my portfolio </h2>

            <img src={Omar} className="App-logo" alt="" />
            <div>
            <a 
                        className="App-link"
                        href="https://github.com/Omar-Jimenez3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                       Check out my Github
                    </a>

                    </div>
          </div>

            


        );
    }


export default Home