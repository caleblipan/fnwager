import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Layout Components
import Jumbotron from '../layout/Jumbotron';
import Info from '../layout/Info';

class Home extends Component {
	render() {
  		return (
    		<Fragment>
        		<Jumbotron />
        		<Info />
    		</Fragment>
  		);
	}
}

export default Home;