export default function InputBox(props){
    return(
        <div className="icon-input">
            <img className="icon" src={props.iconSrc}/>
            <label for="email"></label>
            <input id="email" type="email" placeholder="Your Email.."/>
        </div>
    );
}