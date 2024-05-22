import "../styles/trip.css"
import TripData from "./TripData";
import t1 from "../assets/1.jpg"
import t2 from "../assets/3.jpg"
import t3 from "../assets/4.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Bikes</h1>
           <div className="tripcard">
           <TripData img1={t1} heading="BMW S1000RR "
           text="Tourism contributed around US$9.8 billion to GDP in 2020, and in the previous year, Indonesia received 15.4 million visitors. 

           "/>
           <TripData img1={t2} heading="Ducati Panigale v4"
           text="Tourism contributed around US$9.8 billion to GDP in 2020, and in the previous year, Indonesia received 15.4 million visitors.

           "/>
           <TripData img1={t3} heading="MV Agusta F3 RR"
           text="Tourism contributed around US$9.8 billion to GDP in 2020, and in the previous year, Indonesia received 15.4 million visitors. 

           "/></div> 
            
        </div>
    );
}
export default Trip;