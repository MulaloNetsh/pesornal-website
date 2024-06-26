import { Outlet } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { Logo } from "../materials/icons";

export default function SideBar (){
    return (
        <div className= "main-container" >
            <div className="side-bar-menu">
                <nav>
                    <div className="logo">
                        <img className="web-logo"src={Logo} />
                    </div>
                    <ul className="menu-links">
                        <MenuItem linkName="Home" linkUrl="/home" />
                        <MenuItem linkName="About" linkUrl="/about" />
                        <MenuItem linkName="Projects" linkUrl="/projects" />
                        <MenuItem linkName="Contact" linkUrl="/contact" />
                    </ul>
                </nav>
            </div>
            <div className="mobile-top-menu">
                <nav>

                    <ul className="menu-links">
                        <MenuItem linkName="Home" linkUrl="/home" />
                        <MenuItem linkName="About" linkUrl="/about" />
                        <MenuItem linkName="Projects" linkUrl="/projects" />
                        <MenuItem linkName="Contact" linkUrl="/contact" />
                    </ul>
                </nav>
            </div>
            <div className= "content-page"><Outlet/> </div>
        </div>
    );
}