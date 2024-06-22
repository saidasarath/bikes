import "../styles/trip.css"
import { Link } from "react-router-dom";
function TripData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.img1} alt="image"/>

            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <div className="t-card1"><Link to={`/productpage/${props.id}`} className="show">Explore</Link></div>
        </div>
    );
}
export default TripData