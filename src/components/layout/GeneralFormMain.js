import React, {Fragment, useState} from 'react';
import axios from 'axios'

/* Import images */
import Discord from './images/small-discord-logo.png';
import Youtube from './images/small-youtube-logo.png';
import Twitter from './images/small-twitter-logo.png';

function GeneralFormMain({inputs}) {

    const [inputs, setInputs] = useState({Remember: false});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (inputs.Password === inputs.PasswordAgain) {
            await axios.post('/register', inputs).then(r => {
                console.log(r.data)
            })
        } else {
            console.log({status: 'failure', reason: 'invalid_password'})
        }
    }


    return (
        <Fragment>
            <div className="info-section col-12 row" id="open-games-main">
                <div className="center-col-12" id="change-email-box">
                    <div className="col-12 form-box">
                        <form onSubmit={handleSubmit}>
                            {inputs.map(input => <div>
                                <label>{input[0]}</label>
                                <input name={input[0]} type={input[1]} onChange={handleInputChange}/>
                            </div>)}
                            <div className="center-col-12 submit-btn-wrapper">
                                <input type="submit" value="Register" className="btn btn-yellow"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 yellow-strip">
                    <img src={Discord} alt="Small Discord button"/>
                    <img src={Youtube} alt="Small Youtube button"/>
                    <img src={Twitter} alt="Small Twitter button"/>
                </div>
            </div>
            <div className="divider">
            </div>
        </Fragment>
    );
}

export default GeneralFormMain;
