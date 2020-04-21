import React from 'react';
import '../css/home.css';
 import portfolio from '/Users/omar/Desktop/omar-jimenez3.github.io/src/Images/portfolio.jpeg';



 function Home(){
    
        return(

            <div className="home">
            <h1>Hi! </h1>
            <h2>I am Omar Jimenez</h2>

            <div  styles={{ backgroundImage:`url(${portfolio})` }}>
        </div>
          </div>

       


        );
    }


export default Home