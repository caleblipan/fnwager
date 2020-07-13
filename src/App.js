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

  	liftStateUp = data => {
    	this.setState({ transparent: data })
  	}
    
	render() {
    	const { lobbies } = this.state;
    
    	let navbarBackgroundColor = this.state.transparent ? "transparent" : "black";
    	let navbarClassNames = "navbar " + navbarBackgroundColor;
    
  		return (
        <Router>
    		<Fragment>
        		<Navbar navbarClassNames={navbarClassNames}/>
        		<Switch>
        			<Route exact path='/'>
                    	<Home liftStateUp={this.liftStateUp} />
                    </Route>
        			<Route path='/playnow'>
                    	<PlayNow liftStateUp={this.liftStateUp} />
                    </Route>
        			<Route path='/contact'>
                    	<Contact liftStateUp={this.liftStateUp} />
                    </Route>
        			<Route path='/opengames'>
                    	<OpenGames liftStateUp={this.liftStateUp} lobbies={lobbies}/>
                    </Route>
        		</Switch>
				<Footer />
    		</Fragment>
        </Router>	
  		);
	}
}

export default App;
