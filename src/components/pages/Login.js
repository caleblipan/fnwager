import React, { Fragment, Component } from 'react';

// Layout Components
import LoginJumbotron from "../layout/LoginJumbotron";
import LoginMain from "../layout/LoginMain";

class Login extends Component {
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
        return (
            <Fragment>
                <LoginJumbotron />
                <LoginMain />
            </Fragment>
        );
    }
}

export default Login;
