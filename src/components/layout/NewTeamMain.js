import React, {Fragment, useState} from 'react';

/* Import images */
import axios from "axios";

function NewTeamMain(props) {

    const [inputs, setInputs] = useState();

    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        await axios.post('/team_join', {...inputs, 'id': props.lobbyId }).then(r => {
            if(r.data.status === 'success'){
                window.location.replace('/lobby/'+props.lobbyId);
            }
            else {console.log(r.data)}
        })
    }

    return (
        <Fragment>
                <div className="col-12 form-box">
                    <form onSubmit={handleSubmit}>
                        <label>Participants</label>
                        <input disabled placeholder='Just you' name='tag' type="text" onChange={handleInputChange}/>
                        <div className="center-col-12 submit-btn-wrapper">
                            <input type="submit" value="Join" className="btn btn-yellow"/>
                        </div>
                    </form>
                </div>
        </Fragment>
    );
}

export default NewTeamMain;
