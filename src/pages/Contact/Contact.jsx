import "./Contact.css"
import React from "react"
import { ReactComponent as SideBlob } from "../../assets/blob.svg";

const Contact = () => {

    const handleEmailClick = () => {
        window.open('mailto:leocucinell@gmail.com?subject=Portfolio%20Contact');
    }

    return(
        <>

        <div className="Contact-container main-container">
            <div className="phone-container">
                <span className="Phone-number">Phone number: </span>
                <span>571-439-5077</span>
            </div>
            <div className="socials-container">
                <span className="linkedin-acct">Linkedin: </span>
                <span><a href="https://www.linkedin.com/in/leocucinell/">https://www.linkedin.com/in/leocucinell/</a></span>
            </div>
            <div className="email-container">
                <span>Email: leocucinell@gmail.com</span>
                <span onClick={handleEmailClick}>Click here to open email!</span>
            </div>
        </div>

        <SideBlob id='bottomBlob' />

        </>
    )
}

export default Contact