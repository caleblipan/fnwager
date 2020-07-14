import React from 'react';
import { Link } from 'react-router-dom';

/* Import images */
import Lock from '../layout/images/Lock.png';

function PlayNowJumbotron()
{
    return (
	<div className="jumbotron col-12 row" id="play-now">
    	<div className="col-12">
			<h1>Get Started Now!</h1>
    	<div className="container">
    		<div className="col-12 choice-wrapper">
    			<div className="col-6">
    				<div className="center-col-12" id="left-background">
    					<div className="col-12">
    						<h2>16 Player Lobby</h2>
    						<br/>
    						<br/>
    						<br/>
    						<button className="btn btn-primary"><Link to='/opengames' style={{ color: 'inherit' }}>OPEN</Link></button>
    					</div>
    				</div>
    			</div>
    			<div className="col-6">
    				<div className="center-col-12" id="right-background">
    					<div className="col-12">
    						<img src={Lock} alt="Lock icon"/>
    						<h2>100 Player Lobby</h2>
    						<br/>
    						<br/>
    						<br/>
    						<button className="btn btn-dashed">COMING SOON</button>
    					</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	</div>
    </div>
    );
}

export default PlayNowJumbotron;
