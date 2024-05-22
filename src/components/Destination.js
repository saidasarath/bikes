import "../styles/destination.css"
import DestinationData from "./DestinationData";
import mm from "../assets/90.jpeg"
import mr from "../assets/99.jpg"
import r from "../assets/1002.jpg"
import m from "../assets/1001.jpg"
import rrr from "../assets/1003.jpg"
import mmm from "../assets/1004.jpg"
import r1 from "../assets/1005.jpg"
import m2 from "../assets/1006.jpg"
const Destination=()=>{
    return(
        <div className="destination">
            <h1>Popular Races</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
            <DestinationData
            classname="first-des"
            heading="Cafe Racers"
            text=" BMW cafe racers blend classic design with modern performance, featuring stripped-down frames, retro aesthetics, and upgraded engines, paying homage to the speed-focused culture of the 1960s."
            img1={mm}
            img2={mr}/>
            <DestinationData
            classname="first-des-reverse"
            heading="Sport Bikes"
            text=" Sport bikes epitomize the fusion of speed and agility, boasting powerful engines and razor-sharp handling for an adrenaline-packed riding experience rooted in their racing heritage."
            img1={m}
            img2={r}/>
            <DestinationData
            classname="first-des"
            heading="Touring Bikes"
            text="Built for long-distance travel, featuring comfortable seats, ample storage space, and wind protection. They're ideal for cross-country trips."
            img1={mmm}
            img2={rrr}/>
            <DestinationData
            classname="first-des-reverse"
            heading="Standard Bikes"
            text=" Sport bikes epitomize the fusion of speed and agility, boasting powerful engines and razor-sharp handling for an adrenaline-packed riding experience rooted in their racing heritage."
            img1={m2}
            img2={r1}/>
        </div>
        

    );
};
export default Destination