import { emailIcon, nameIcon } from "../materials/icons";

export default function ContactPage(){
    return (
        <div className="contact-container">
            <div className="sub-container">
                <h1>Contact</h1>
                    <form className="contact-form ">
                        <div className="icon-input">
                            {/* <img className="icon"s src={nameIcon}/>     */}
                            <label for="name">Name</label>
                            <input id="name" type="input" placeholder="Name.."/>
                        </div>
                        <div className="icon-input">
                            {/* <img className="icon" src={emailIcon}/> */}
                            <label for="email">Email</label>
                            <input id="email" type="email" placeholder="Your Email.."/>
                        </div>
                        <div className="icon-input">
                            <label for="message">Message</label>
                            <textarea id="message" placeholder="Message.." cols="30" rows="10"></textarea>
                            <button className="cv-btn">Send</button>
                        </div>
                    </form>
            </div> 
        </div>
    );
}