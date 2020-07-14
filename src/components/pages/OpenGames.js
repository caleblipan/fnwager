import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// Layout Components
import OpenGamesJumbotron from '../layout/OpenGamesJumbotron';
import OpenGamesMain from '../layout/OpenGamesMain';

class OpenGames extends Component {
  	constructor(props) {
    	super(props);
		this.state = {
    		lobbies: [
        		{
                	lobbyName: "029357",
        			id: "329490dfsaSFJ23048",
                	status: "NEW",
                	arena: "Duo",
                	usersJoined: "2",
                	entryFee: "$25",
                	prizePool: "1st (22)",
                	winner: 'N/A',
                	schedule: 'May 2, 2021, 6:19.44 AM'
        		}
        	]
        }
    	this.setTransparency = this.setTransparency.bind(this);
  	}

 	componentDidMount() {
    	window.addEventListener('load', this.setTransparency);
        var evt = document.createEvent('Event');  
        evt.initEvent('load', false, false);  
        window.dispatchEvent(evt);
 	}

  	setTransparency() {
		let booleanValue = false;	
    	this.setState({ transparent: booleanValue });
    	this.props.liftStateUp(booleanValue);
  	}

	render() {
    	const lobbies = this.state.lobbies;
		OpenGames.propTypes = {
			lobbies: PropTypes.array.isRequired
		}
  		return (
    		<Fragment>
        		<OpenGamesJumbotron />
        		<OpenGamesMain lobbies={lobbies}/>
    		</Fragment>
  		);
	}
}

export default OpenGames;