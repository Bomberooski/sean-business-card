import React from "react";
import EmailButton from "./EmailButton";




export default function Info() {

    const recipientEmail = 'seantwidmer@gmail.com';
    const navigateToLinkedIn = () => {
        window.open('https://www.linkedin.com/in/sean-widmer-98113730/', '_blank');
    }

    return (
        <div className="info">
            <img src="https://www.seanslife.com/images/bizcard/seancharicature.jpg" alt="Sean Logo" class="profile-img" />
            <div className="info--data">
                <h3>Sean Widmer</h3>
                <h4>Frontend Developer</h4>
                <a href="https://seanslife.com" target="_blank" class="info-link">seanslife.com</a>
                <div className="buttons">
                    <EmailButton email={recipientEmail} className="btn-email" />
                    <button type="button" id="linkedin" value="linkedin" className="btn-linkedin" onClick={navigateToLinkedIn} >LinkedIn</button>                   
                </div>
            </div>
        </div>
    )        
}