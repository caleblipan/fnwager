import React from 'react';
import { Link } from 'react-router-dom';

/* Import images */
import logo from './images/Logo.png';

function Footer()
{
    return (
	<footer className="col-12 row"> 
    	<div className="container">
    		<div className="col-12">
    			<div className="col-3 logo">
    				<img src={logo} />
    			</div>
    		</div>
			<div className="col-12">
    			<div className="col-3">
            		<h2>About us</h2>
					<p>FNWager was founded by 2 brothers named Coin & 5wap. 5wap sold his ferrari dealership to invest into this business.</p>
				</div>
    			<div className="col-3">
            		<h2>Terms & Conditions</h2>
					<ul>
    					<li>
    						<Link to='/terms'>Please Read Terms</Link>
    					</li>
						<li>
                			<Link to='/privacy'>Privacy Policy</Link>
    					</li>
						<li>
                			<Link to='/contact'>Contact Us</Link>
    					</li>
    			<	/ul>
				</div>
    			<div className="col-3">
            		<h2>Terms & Conditions</h2>
					<ul>
    					<li>
    						<Link to='/terms'>Please Read Terms</Link>
    					</li>
						<li>
                			<Link to='/privacy'>Privacy Policy</Link>
    					</li>
						<li>
                			<Link to='/contact'>Contact Us</Link>
    					</li>
    				</ul>
				</div>
    			<div className="col-3">
            		<h2>Terms & Conditions</h2>
					<ul>
    					<li>
    						<Link to='/terms'>Please Read Terms</Link>
    					</li>
						<li>
                			<Link to='/privacy'>Privacy Policy</Link>
    					</li>
						<li>
                			<Link to='/contact'>Contact Us</Link>
    					</li>
    				</ul>
				</div>
			</div>
			<hr/>
            <div className="col-12">
            	<p>Copyright © 2020 FNWagers. All Rights Reserved.  FNWagers is not affiliated with Fortnite™ </p>
            </div>
    	</div>
    </footer>
    );
}

export default Footer;