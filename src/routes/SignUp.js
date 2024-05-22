import Footer1 from "../components/Footer1";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import rr from "../assets/6.jpg"
import SignUpForm from "../components/SignUpfrom";
function SignUp (){
    return(
        <>
        
        <Navbar/>
        <Hero
        cname="hero-mid"
        heroimg={rr}
        title="SignUp"
        />
        <SignUpForm/>
        <Footer1/>
        </>
    )
}
export default  SignUp;