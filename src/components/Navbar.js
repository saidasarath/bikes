
import { Component } from "react";
import "../styles/navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {
        isOpen: false,
        isMobile: false 
    };

    componentDidMount() {
        if (window.innerWidth <= 960) {
            this.setState({ isMobile: true });
        }
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        if (window.innerWidth <= 960) {
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    };

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <nav className="navbaritems">
                <Link className="navbarlogo" to='/'>Phoenix</Link>
                {this.state.isMobile && ( 
                    <div className="menu-icon" onClick={this.toggleMenu}>
                        <i className={this.state.isOpen ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                )}
                <ul className={this.state.isMobile && this.state.isOpen ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        const { title, url, cName, icon } = item;
                        return (
                            <li key={index}>
                                <Link className={cName} to={url}>
                                    {icon && <i className={icon}></i>}
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                   
                </ul>
            </nav>
        );
    }
}

export default Navbar;

