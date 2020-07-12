import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Jumbotron from './components/layout/Jumbotron';
import Info from './components/layout/Info';
import Footer from './components/layout/Footer';

class App extends Component {
	render() {
  		return (
        <Router>
    		<Fragment>
        		<Navbar />
        		<Jumbotron />
        		<Info />
        		<Footer />
    		</Fragment>
        </Router>	
  		);
	}
}

export default App;
