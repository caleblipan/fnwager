import React, {Fragment, useState} from 'react';

/* Import images */
import Discord from './images/small-discord-logo.png';
import Youtube from './images/small-youtube-logo.png';
import Twitter from './images/small-twitter-logo.png';
import axios from "axios";

function CreateGameMain() {

    const [inputs, setInputs] = useState({Remember: false});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        console.log(event.target)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        await axios.post('/create_game', inputs).then(r => {
            if(r.data.status === 'success'){
                window.location.replace('/');
            }
            else {console.log(r.data)}

        })
    }

    return (
        <Fragment>
            <div className="info-section col-12 row" id="open-games-main">
                <div className="center-col-12" id="change-email-box">
                    <div className="col-12 form-box">
                        <form onSubmit={handleSubmit}>
                            <label>Lobby name</label>
                            <input name='lobbyName' type="text" onChange={handleInputChange}/>
                            <label>Arena</label>
                            <select type='select' name='arena' onChange={handleInputChange}>
                                <option disabled selected value> -- select an option -- </option>
                                <option value="solo">Solo</option>
                            </select>
                            <label>Entry Fee</label>
                            <input name='entryFee' type="text" onChange={handleInputChange}/>
                            <label>Prize Pool</label>
                            <input name='prizePool' type="text" onChange={handleInputChange}/>
                            <label>Schedule</label>
                            <input name='schedule' type="text" onChange={handleInputChange}/>
                            <div className="center-col-12 submit-btn-wrapper">
                                <input type="submit" value="Submit" className="btn btn-yellow"/>
                            </div>
                        </form>
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

export default CreateGameMain;
