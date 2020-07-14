import React from 'react';

/* Import images */
import strip from './images/yellow-strip.png';
import discord from './images/discord.png';
import youtube from './images/youtube.png';
import twitter from './images/twitter.png';

function PlayNowInfo()
{
    return (
	<div className="info-section col-12 row"> 
    	<div className="container" style={{ paddingTop: '64px' }}>
    		<div className="col-12">
				<div className="col-12" style={{ height: 'auto' }}>
    				<div className="col-12 text-info play-now">
                    	<div className="center-col-12">
                        	<div>
								<h2>Get Connected With FNWagers</h2>
								<hr style={{ margin: '16px auto', width: '100px' }}/>
                    			<p>Follow us on all our socials and never missout on new updates and changes!</p>  
							</div>
						</div>
                        <div className="col-12">
                        	<div className="col-4 stay-still">
                        		<img src={discord} alt="Discord button"/>
							</div>
                        	<div className="col-4 stay-still">
                        		<img src={youtube} alt="Youtube button"/>
							</div>
                        	<div className="col-4 stay-still">
                        		<img src={twitter} alt="Twitter button"/>
							</div>
                        </div>
                   	</div>
				</div>
			</div>
    	</div>
		<img src={strip} id="yellow-strip" style={{ top: '0' }} alt="Yellow strip"/>
    </div>
    );
}

export default PlayNowInfo;