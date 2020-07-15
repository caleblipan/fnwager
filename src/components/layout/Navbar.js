import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/* Import logo image */
import logo from './images/Logo.png';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    openState = () => {
        this.setState({open: true})
    }

    closeState = () => {
        this.setState({open: false})
    }

    render() {
        let buttonClass = this.state.open ? "openSidenav" : "closeSidenav";
        let classNames = "sidenav " + buttonClass;

        const {navbarClassNames, user} = this.props;


        return (
            <nav className={navbarClassNames}>
                <ul>
                    <li className="navbar-logo">
                        <img src={logo} alt="The FNWager Logo"/>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/playnow'>Play Now</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        {user === false ?
                            <Link to='/login'>Login</Link> :
                            <Link to={'/' + user.GamerTag}>{user.GamerTag}</Link>}
                    </li>
                    <li>
                        {user === false ?
                            <Link to='/register'>Register</Link> :
                            <Link to='/logout'>Log out</Link>}
                    </li>
                </ul>
                <div id="hamburger-menu">
                    <i className="fa fa-bars" onClick={this.openState}></i>
                    <div id="sidenav" className={classNames}>
                        <Link to="#" className="closebtn" id="close-button" onClick={this.closeState}>&times;</Link>
                        <Link to="/">Home</Link>
                        <Link to="/playnow">Play Now</Link>
                        <Link to="/contact">Contact</Link>
                        <br/>
                        {user === false ?
                            <div>
                                <Link to='/login'>Login</Link>
                                <Link to='/register'>Register</Link></div> :
                            <div>
                                <Link to={'/' + user.GamerTag}>{user.GamerTag}</Link>
                                <Link to='/logout'>Log out</Link>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
