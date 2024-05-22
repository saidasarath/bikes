import "../styles/signform.css"
function SigninForm(){
    return(
        <div className="s-container">
            <div className="s-card">
            <from>  
                <input placeholder="UserName"/><br/>
                <input type="password"placeholder="Password"/><br/>
                <button>SignIn</button>
            </from>
            </div>
            </div>
    );
}
export default SigninForm