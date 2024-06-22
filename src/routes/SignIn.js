import NavBar from "../components/Navbar";
import Footer1 from"../components/Footer1";
import Hero from"../components/Hero";
import SigninForm from "../components/SignInForm";
import ar from"../assets/8.jpg"
const SignIn=()=>{
    return(
        <>
             <NavBar/>
        <>
       
        {/* <Hero
        cname="hero-mid"
        heroimg={ar}> */}
        <SigninForm/>
        {/* <Footer1/> */}
        </>
        </>
    )
}
export default SignIn;