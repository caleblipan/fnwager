import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Routing Components
import Home from './components/pages/Home';
import PlayNow from './components/pages/PlayNow';
import Contact from './components/pages/Contact';
import OpenGames from './components/pages/OpenGames';

class App extends Component {
  	constructor(props) {
    	super(props)
    	this.state = {
      		transparent: true,
    	}
  	}

  	liftStateUp = data =>{
    	this.setState({ transparent: data})
  	}
    
	render() {
  		return (
        <Router>
    		<Fragment>
        		<Navbar />
        		<Switch>
        			<Route exact path='/' component={Home} />
        			<Route exact path='/playnow' component={PlayNow} />
        			<Route exact path='/contact' component={Contact} />
        			<Route path='/opengames'>
                    	<OpenGames liftStateUp={this.liftStateUp} />
                    </Route>
        		</Switch>
				<Footer />
    		</Fragment>
        </Router>	
  		);
	}
}

export default App;
