import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout Components
import PlayNowJumbotron from '../layout/PlayNowJumbotron';
import PlayNowInfo from '../layout/PlayNowInfo';

class PlayNow extends Component {
	render() {
  		return (
    		<Fragment>
        		<PlayNowJumbotron />
        		<PlayNowInfo />
    		</Fragment>
  		);
	}
}

export default PlayNow;