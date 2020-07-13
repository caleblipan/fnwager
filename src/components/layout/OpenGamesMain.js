import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/* Import components */
import LobbyItem from './LobbyItem';

/* Import images */

const OpenGamesMain = ({ lobbies }) => {
    return (
    <Fragment>
    	<div className="info-section col-12-row" id="open-games-main">
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
    	<div className="divider">
    	</div>
    </Fragment>
    );
}

export default OpenGamesMain;