import React, { Fragment, Component } from 'react';

// Layout Components
import Jumbotron from '../layout/Jumbotron';
import Info from '../layout/Info';

class Home extends Component {
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
		let booleanValue = true;	
    	this.setState({ transparent: booleanValue });
    	this.props.liftStateUp(booleanValue);
  	}

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