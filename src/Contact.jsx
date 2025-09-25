// Portfolio-KendraMatthews Kendra Matthews Comp229 Assignment 1 2025-09-23 301499660

//Contact Page
import React from "react";
import { useNavigate } from "react-router-dom";

//Redirects user to homepage on submit of form, with contact information.

function Contact() {
    const redirect =useNavigate();

    const redirectuser = (e) => {
        redirect("/");
    }
    return(
        <div>
            <div className="information">
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
                <form onSubmit={redirectuser} >
                    <input type="submit"></input>
                </form>
            </div>
        </div>


        
    )

}

export default Contact;
