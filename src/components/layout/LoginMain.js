import React, {Fragment, useState} from 'react';

/* Import images */
import Discord from './images/small-discord-logo.png';
import Youtube from './images/small-youtube-logo.png';
import Twitter from './images/small-twitter-logo.png';
import axios from "axios";

function LoginMain() {

    const [inputs, setInputs] = useState({remember: false});

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        await axios.post('/LoginForm', inputs).then(r => {
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
                            <label>Email or Gamertag</label>
                            <input name='tag' type="text" onChange={handleInputChange}/>
                            <label>Password</label>
                            <input name='password' type="password" onChange={handleInputChange}/>
                            <input name='remember' type="checkbox" onChange={handleInputChange}/>
                            <label> Remember me</label>
                            <div className="center-col-12 submit-btn-wrapper">
                                <input type="submit" value="Login" className="btn btn-yellow"/>
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

export default LoginMain;
