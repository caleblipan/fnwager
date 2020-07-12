import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Import logo image */
import logo from './images/Logo.png';

function Navbar()
{
    return (
	<nav className="navbar">
    	<ul>
    		<li>
    			<img src={logo}/>
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
    			<Link to='/login'>Login</Link>
    		</li>
			<li>
                <Link to='/register'>Register</Link>
    		</li>
        </ul>
	</nav>
    );
}

export default Navbar;
