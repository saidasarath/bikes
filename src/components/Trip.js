import "../styles/trip.css"
import TripData from "./TripData";

import { bikesData } from "./bikesData";
function Trip(){
    return(
        <div className="trip">
            <h1>Bikes</h1>
           <div className="tripcard">
            { bikesData.map((items,index)=>{
                return(
           <TripData id={items.id}img1={items.img1} heading={items.name}
           text={items.samedes}/>
                )
            }
            )}
           </div>  
            
        </div>
    );
}
export default Trip;