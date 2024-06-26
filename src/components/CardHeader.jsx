
export default function CardHeader(props){
    return (
        <div className="card-head">
            
            <span>
                {props.headIcon && <img src={props.headIcon}/>}
                {props.headText}
            </span>
        </div>
    );
}