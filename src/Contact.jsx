import React from "react";

function Contact() {
    return(
        <div>
            <div className="contact">
                <h1>Contact me here:</h1>
                <h3>Email: mkendra917@gmail.com</h3>
                <h3>Phone Number: (226)-503-2974</h3>
                <h3>Address: 322 Finkle Street Woodstock Ontario</h3>
            </div>
            <div className="contactform">
               
                <form>
                     <h3>Contact me in the form below:</h3>
                    <input type="text" name="FirstName" placeholder="First Name" required></input>
                    <input type="text" name="LastName" placeholder="Last Name" required></input>
                </form>
                <form>
                    <textarea name="message" rows="4" cols="43" placeholder="Message"></textarea>
                </form>
                <form >
                    <input type="submit"></input>
                </form>
            </div>
        </div>


        
    )

}

export default Contact;
