import React from 'react';

/* Import images */

function GeneralTitleJumbotron({children})
{
    return (
        <div className="jumbotron col-12 row" id="open-games">
            <div className="col-12">
                <h1>{children}</h1>
            </div>
        </div>
    );
}

export default GeneralTitleJumbotron;
