import React from 'react';
import { Link } from 'react-router-dom';

/* Import images */
import pickaxe from './images/pickaxe.png';
import grenade from './images/grenade.png';
import bottle from './images/bottle.png';
import blueBottle from './images/blue-bottle.png';

function Jumbotron()
{
    return (
	<div className="jumbotron center-col-12 row"> 
    	<div className="col-3">
    		<div className="col-12">
    			<img src={pickaxe} id="pickaxe" alt="Fortnite Pickaxe"/>
			</div>
			<div className="col-12">
				<img src={grenade} alt="Fortnite Grenade"/>
            </div>
    	</div>
    	<div className="col-6">
			<h1>Practice like a pro.<br/>Play like a pro.</h1>
    		<button className="btn btn-yellow"><Link to='/playnow' style={{ color: 'inherit' }}>Play Now</Link></button>
    	</div>
		<div className="col-3">
    		<div className="col-12">
    			<img src={bottle} alt="Fortnite Bottle"/>
			</div>
			<div className="col-12">
				<img src={blueBottle} id="blue-bottle" alt="Fortnite Blue Bottle" />
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;
