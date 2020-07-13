import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout Components
import OpenGamesJumbotron from '../layout/OpenGamesJumbotron';

class OpenGames extends Component {

	render() {
  		return (
    		<Fragment>
        		<OpenGamesJumbotron />
    		</Fragment>
  		);
	}
}

export default OpenGames;