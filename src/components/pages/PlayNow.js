import React, { Fragment, Component } from 'react';

// Layout Components
import PlayNowJumbotron from '../layout/PlayNowJumbotron';
import PlayNowInfo from '../layout/PlayNowInfo';

class PlayNow extends Component {
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
        		<PlayNowJumbotron />
        		<PlayNowInfo />
    		</Fragment>
  		);
	}
}

export default PlayNow;