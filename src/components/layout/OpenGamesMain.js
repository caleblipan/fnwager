import React, { Fragment } from 'react';

/* Import components */
import LobbyItem from './LobbyItem';

/* Import images */
import Discord from './images/small-discord-logo.png';
import Youtube from './images/small-youtube-logo.png';
import Twitter from './images/small-twitter-logo.png';

const OpenGamesMain = ({ lobbies }) => {
    return (
    <Fragment>
    	<div className="info-section col-12-row" id="open-games-main">
    			<div className="container-padding">
    				<div className="col-6">
    					<h2>Note:</h2>
    					<p>Game will start when scheduled, or at the time set if a minimum number of people joined. If we do not have enough people the game will be refunded</p>
    				</div>
					<div className="col-12 lobbies">
        				{lobbies.map(lobby => {
             				return (
    							<div className="col-3">
    								<LobbyItem key={lobby} lobby={lobby} />
    							</div>
    						)
            			})}
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

export default OpenGamesMain;