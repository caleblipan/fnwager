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
import Lobby from './components/pages/Lobby';
import ChangeEmail from './components/pages/ChangeEmail';
import Login from "./components/pages/Login";

class App extends Component {

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
        		},
        		{
                	lobbyName: "029359",
        			id: "329490dfsaSFJ23049",
                	status: "NEW",
                	arena: "Duo",
                	usersJoined: "2",
                	entryFee: "$25",
                	prizePool: "1st (22)",
                	winner: 'N/A',
                	schedule: 'May 2, 2021, 6:20.44 AM'
        		}
        	],
        	lobby: []
        }
  	}

    getSpecificLobby = async (id) => {
    	/* Put axios.get (or fetch API) here... */

    	const res = this.state.lobbies[0];
    	this.setState({lobby: res});
    }

  	liftStateUp = data => {
    	this.setState({ transparent: data })
  	}

	render() {
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
                    	<OpenGames liftStateUp={this.liftStateUp} lobbies={this.state.lobbies}/>
                    </Route>
                    <Route exact path="/lobby/:id" render={props => (
						<Lobby { ...props } liftStateUp={this.liftStateUp} getSpecificLobby={this.getSpecificLobby} lobby={this.state.lobby}/>
					)}/>
        			<Route path='/changeemail'>
                    	<ChangeEmail liftStateUp={this.liftStateUp} />
                    </Route>
					<Route path='/login'>
						<Login liftStateUp={this.liftStateUp} />
					</Route>
        		</Switch>
				<Footer />
    		</Fragment>
        </Router>
  		);
	}
}

export default App;
