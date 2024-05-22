import "../styles/signupfrom.css"
function  SignUpForm() {
    return(
        <div className="s-container">
            <div className="s-card">
            <from>  
                <input placeholder="UserName"/><br/>
                <input placeholder="Email"/><br/>
                <input type="password"placeholder="Password"/><br/>
                <input type="password" placeholder="Confirm Password"/><br/>
                <button>SignUp</button>
                <p>Already have an account?<a href="/login">Login</a></p>
            </from>
            </div>
            </div>
        
    )
}
export default  SignUpForm;