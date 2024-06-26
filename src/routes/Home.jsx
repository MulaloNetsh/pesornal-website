import github_icon from "../materials/icons8-github-48.png";
import linkedin_icon from "../materials/icons8-linkedin-50.png";

export default function HomePage(){
    return (
        <div className="home-container fade-in">
            <div className="home-text ">
                <p >Hi my name is ...</p>
                <h1 className="typing">Mulalo Netshiavha</h1>
                <h2 className="typing">I'm A Full Stack Developer</h2>
            </div>
            <div className="image-socials-container">
                <div className="profile-img"></div>
                        
                <div className="social-links">
                    <ul>
                        <li><a href="#"><img src={github_icon} width="50" height="50"/></a></li>
                        <li><a href="https://www.linkedin.com/in/mulalo-netshiavha-508a93217/"><img src={linkedin_icon} width="50" height="50"/></a></li>
                    </ul>
                </div>
            </div>
            
            <div class='btn-container'>
                <button className="cv-btn">Download CV</button>
            </div>
            
        </div>
    );
}