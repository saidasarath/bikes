import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ab from"../assets/5.jpg";
import Footer1 from "../components/Footer1";
import Trip from "../components/Trip";
function Service(){
    return(
        <>
        <Navbar/>
     <Hero
        cname="hero-mid"
        heroimg={ab}
        title="Service"
        
        />
        <Trip/>
        <Footer1/>
        </>
    )
    }
    export default Service;