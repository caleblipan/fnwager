import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

// Layout Components
import OpenGamesJumbotron from '../layout/OpenGamesJumbotron';
import OpenGamesMain from '../layout/OpenGamesMain';

class OpenGames extends Component {
	constructor(props) {
		super(props);
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
    	const lobbies = this.props.lobbies;
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