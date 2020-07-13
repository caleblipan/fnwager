import React from 'react';

/* Import images */
import character1 from './images/character-1.png';
import character2 from './images/character-2.png';
import strip from './images/yellow-strip.png';
import discord from './images/discord.png';
import youtube from './images/youtube.png';
import twitter from './images/twitter.png';

function Info()
{
    return (
	<div className="info-section col-12 row"> 
    	<div className="container">
    		<div className="wrapper center-col-12">
    			<div className="col-6 image-div">
    				<img src={character1} />
    			</div>
				<div className="center-col-6">
    				<div className="col-12 text-info">
						<h2>How Does it Work?</h2>
						<hr />
    					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
    				</div>
				</div>
			</div>
    		<div className="center-col-12">
				<div className="center-col-6">
    				<div className="col-12 text-info">
						<h2>Get Connected With VNWagers</h2>
						<hr />
                    	<p>Follow us on all our socials and never missout on new updates and changes!</p>    
                        <div className="col-12">
                        	<div className="col-4 stay-still">
                        		<img src={discord} />
							</div>
                        	<div className="col-4 stay-still">
                        		<img src={youtube} />
							</div>
                        	<div className="col-4 stay-still">
                        		<img src={twitter} />
							</div>
                        </div>
                   	</div>
				</div>
    			<div className="col-6 image-div">
    				<img src={character2} />
    			</div>
			</div>
    	</div>
		<img src={strip} id="yellow-strip" />
    </div>
    );
}

export default Info;