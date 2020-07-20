import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {  Link } from "react-router-dom";

function LobbyItem({lobby: {
    	lobbyName,
    	id,
    	status,
    	arena,
    	usersJoined,
    	entryFee,
    	prizePool,
    	winner,
    	schedule }}) {

	return (
    	<Fragment>
        <div className="card text-center">
    		<h3>Lobby Name</h3>
        	<p className="lobbyName">#{lobbyName}</p>
    		<br/>
    		<p>Id: <span className="data-id">{id}</span></p>
    		<p>Status: <span className="data">{status}</span></p>
    		<p>Arena: <span className="data">{arena}</span></p>
    		<p>Users Joined: <span className="data">{usersJoined}/98</span></p>
    		<p>Entry Fee: <span className="data">{entryFee}</span></p>
    		<p>Prize Pool: <span className="data">{prizePool}</span></p>
            <br/>
            <p>Winner:</p>
			<div className="col-12 winner-box">
            	<p className="data">{winner}</p>
            </div>
            <p>Schedule on {schedule}</p>
			<div style={{ display: 'inline-flex', width: '100%', padding: '16px 0' }}>
            <button className="btn btn-yellow" id="btn-yellow"><Link to={`lobby/${id}`} style={{ color: 'inherit' }}>View</Link></button>
            <button className="btn btn-grey" id="btn-grey"><Link to={`createteam/${id}`} style={{ color: 'inherit' }}>Create Team</Link></button>
			</div>
		</div>
		</Fragment>
        );
};

LobbyItem.propTypes = {
	lobby: PropTypes.object.isRequired
}

export default LobbyItem;
