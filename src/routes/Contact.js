import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ab from"../assets/9.jpg";
import Footer1 from "../components/Footer1";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <>
     <Navbar/>
     <Hero
        cname="hero-mid"
        heroimg={ab}
        title="Contact"
        
        />
        <ContactForm/>
        <Footer1/>
        
        </>
    )
    }
    export default Contact;