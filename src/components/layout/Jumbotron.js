import React from 'react';

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
    			<img src={pickaxe} id="pickaxe"/>
			</div>
			<div className="col-12">
				<img src={grenade} />
            </div>
    	</div>
    	<div className="col-6">
			<h1>Practice like a pro.<br/>Play like a pro.</h1>
    		<button className="btn btn-yellow">Play Now</button>
    	</div>
		<div className="col-3">
    		<div className="col-12">
    			<img src={bottle} />
			</div>
			<div className="col-12">
				<img src={blueBottle} id="blue-bottle" />
            </div>
        </div>
    </div>
    );
}

export default Jumbotron;
