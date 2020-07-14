import React, { Fragment } from 'react';

/* Import images */
import Discord from './images/small-discord-logo.png';
import Youtube from './images/small-youtube-logo.png';
import Twitter from './images/small-twitter-logo.png';

function ChangeEmailMain() {
    return (
    <Fragment>
    	<div className="info-section col-12 row" id="open-games-main">
    			<div className="center-col-12" id="change-email-box">
    				<div className="col-12 form-box">
    					<form>
    						<label>Current Email</label>
    						<input type="email" placeholder="Your Current Email"/>
    						<label>New Email</label>
    						<input type="email" placeholder="Person's Email Here"/>
    						<label>Confirm Email</label>
    						<input type="email" placeholder="Person's Email Here"/>
    						<div className="center-col-12 submit-btn-wrapper">
    							<input type="submit" value="Change Email" className="btn btn-yellow"/>
    						</div>
    					</form>
    				</div>
				</div>
				<div className="col-12 yellow-strip">
                	<img src={Discord} alt="Small Discord button" />
                	<img src={Youtube} alt="Small Youtube button" />
                	<img src={Twitter} alt="Small Twitter button" />
                </div>
    	</div>
    	<div className="divider">
    	</div>
    </Fragment>
    );
}

export default ChangeEmailMain;