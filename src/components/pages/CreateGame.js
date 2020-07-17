import React, { Fragment, Component } from 'react';

// Layout Components
import GeneralTitleJumbotron from "../layout/GeneralTitleJumbotron";
import CreateGameMain from "../layout/CreateGameMain";

class CreateGame extends Component {
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
                <GeneralTitleJumbotron children={'Create Game'} />
                <CreateGameMain />
            </Fragment>
        );
    }
}

export default CreateGame;
