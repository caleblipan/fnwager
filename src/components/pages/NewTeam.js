import React, { Fragment, Component } from 'react';
import axios from 'axios'


// Layout Components


/* Import images */

import Legend from '../layout/images/legend.png';
import Discord from '../layout/images/small-discord-logo.png';
import Youtube from '../layout/images/small-youtube-logo.png';
import Twitter from '../layout/images/small-twitter-logo.png';
import GeneralTitleJumbotron from "../layout/GeneralTitleJumbotron";
import NewTeamMain from "../layout/NewTeamMain";

class NewTeam extends Component {
    state = {

    }

    constructor(props) {
        super(props);
        this.setTransparency = this.setTransparency.bind(this);
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.getSpecificLobby(this.props.match.params.id);

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
        const {
            lobbyName,
            id,
            status,
            arena,
            usersJoined,
            entryFee,
            prizePool,
            schedule
        } = this.props.lobby;

        return (
            <Fragment>
                <GeneralTitleJumbotron children='Join game' />
                <div className="info-section col-12 row" id="open-games-main">
                    <div className="container-padding">
                        <div className='col-9'>
                            <NewTeamMain lobbyId={this.props.match.params.id}/>
                        </div>
                        <div className="col-3 lobbies">
                            <div className="col-12">
                                <div className="card text-center" id="lobby-card">
                                    <h3>Lobby Name</h3>
                                    <p className="lobbyName">#{lobbyName}</p>
                                    <br/>
                                    <p>Id: <span className="data-id">{id}</span></p>
                                    <p>Status: <span className="data">{status}</span></p>
                                    <p>Arena: <span className="data">{arena}</span></p>
                                    <p>Users Joined: <span className="data">{usersJoined}/98</span></p>
                                    <p>Entry Fee: <span className="data">{entryFee}</span></p>
                                    <p>Prize Pool: <span className="data">{prizePool}</span></p>
                                    <br/>
                                    <p>Schedule on {schedule}</p>
                                    <br/>
                                    <p id="schedule">*Game will start when schedule, or at the time set if a minimum number of people joined. If we do not have enough people the game will be refunded</p>
                                    <div className="button-wrapper">
                                        <input type="submit" value="Leave Tournament" className="btn btn-red"/>
                                    </div>
                                </div>
                                <img src={Legend} alt="Legend" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 yellow-strip">
                        <img src={Discord} alt="Small Discord button" />
                        <img src={Youtube} alt="Small Youtube button" />
                        <img src={Twitter} alt="Small Twitter button" />
                    </div>
                </div>
                <div className="divider">
                </div>
            </Fragment>
        );
    }
}

export default NewTeam;
