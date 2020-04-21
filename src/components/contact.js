import React from 'react';
import '../css/contact.css'

class  Contact extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           
                name:"",
                Subject: "",
                Email: ""

        }

    }
    render(){
    return(
       <div className = "Container">

           <div>
               <h2> Contact Form </h2>
           </div>
         <form onSubmit= {this.onFormSubmit} >
               
                    {/*Name Label  */}
                <label for = "name"> Name </label>
                <input 
                type="text"
                    value={this.state.name}
                    onChange={this.updateNamelabel}
                    
                />
                {/* Email Label */}
            <label for = "Email"> Email </label>
                <input 
                type="text"
                    value={this.state.Email}
                    onChange={this.updateEmaillabel}
                    
                />
                {/* Subject label */}
                <label for = "Subject"> Subject </label>
                <input 
                type = "text"
                    value = {this.state.Subject}
                    onChange = {this.updateSubjectLabel}

                />
            <div>  </div>
                <button type = "submit"> Submit </button> 
            </form>
        </div>
    )
    }

    updateNamelabel = (event) => {
        this.setState({
            name: event.target.value
        })}

     updateEmaillabel = (event) => {
        this.setState({
           Email: event.target.value
            })}    

    updateSubjectLabel = (event) => {
            this.setState({
                Subject: event.target.value
            })
        }


    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        this.setState({
            name: "",
            Subject: "",
            Email:"",

        })
        alert("Your Message was sent");
            
    }
    
}


export default Contact