import React from 'react';
//import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src='https://reactjs.org/docs/getting-started.html'
                width='340px'
                height="1500px"
                style={{border:'none', overflow:'hidden'}}
                scrolling='no'
                frameborder='0'
                allowTeansparency='true'
                allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widgets;
