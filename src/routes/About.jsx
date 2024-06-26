import CardHeader from "../components/CardHeader";
import { 
    expIcon, eduIcon, reactIcon, fluterIcon, expresIcon, postmanIcon,pythonIcon,cIcon,cppIcon,htmlIcon,cssIcon,
    javascriptIcon}from '../materials/icons';
import CardItem from "../components/CardItem";

export default function AboutPage(){
    return (
        <div className="about-container">
            <h1>About</h1>
            <div className="edu-exp-flex" >
                <div className="edu-card card-style">
                    <CardHeader headText="Education" headIcon={eduIcon}/>
                    <div className="edu-content">
                        <p>Degree: <span>Bachelor of Science</span></p>
                        <p>Major: <span>Computer Science</span></p>
                    </div>
                </div>
                <div className="exp-card card-style">
                    <CardHeader headText="Experience" headIcon={expIcon}/>
                    <div className="edu-content">
                        <p>I don't have work exprerice</p>
                    </div>
                </div>
                <div className="framework-card card-style">
                    <CardHeader headText="Framework"/>
                    <ul>
                        <CardItem icon={reactIcon} itemName="React"/>
                        <CardItem icon={expresIcon} itemName="Express js"/>
                        <CardItem icon={fluterIcon} itemName="Flutter"/>
                        <CardItem icon={postmanIcon} itemName="Postman"/>
                        
                    </ul>
                </div>
                <div className="framework-card card-style">
                    <CardHeader headText="Langauges"/>
                    <ul>
                        <CardItem icon={javascriptIcon} itemName="Javascript"/>
                        <CardItem icon={htmlIcon} itemName="Html"/>
                        <CardItem icon={cssIcon} itemName="CSS"/>
                        <CardItem icon={pythonIcon} itemName="Python"/>
                        <CardItem icon={cppIcon} itemName="Cpp"/>
                        <CardItem icon={cIcon} itemName="C"/>
                    </ul>
                </div>
                
                
            </div>
        </div>
    );
}