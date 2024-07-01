import Navbar from'../components/Navbar'
import Hero from '../components/Hero';
import Destination from '../components/Destination.js';
import t1 from '../assets/96.gif'
import Footer1 from '../components/Footer1.js';
import rr from"../assets/111.jpg"
function Home(){
    return(
        <>
        <Navbar/>
        <Hero
        cname="hero"
        heroimg={t1}
        title="The road to a more successful Races"
        par="Choose Your Favourite Motorcycle"
        btntext="Explore More"
        url="/"
        btnclass="show"
        />
        <Destination/>
        
        <Footer1/>
        </>
    )
    }
    export default Home;