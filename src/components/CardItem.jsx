export default function CardItem(props){
    return(
        <div className="card-item">
            <li><img src={props.icon}/>{props.itemName}</li>
        </div>
    );
}