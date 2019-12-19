import React, { useState } from 'react'; // JSX
import './YouTube.css';

export function calculateHeight( width ){
    return width / 1.333;
}

function YouTube( props ){

    const [ likes, setLikes ] = useState(0); // => [ variable=0, function ]
    const [ subscribe, setSubscribe ] = useState( false );
    // setLikes( 13 );
    const handleLike = ()=>{
        setLikes( likes + 1 );
        setSubscribe( !subscribe );
        // likes = likes + 1; // NO NO NO
    }

    return (
        // Show video
        <>
            <iframe className="yt-wrapper" width={props.width} height="315" src={"https://www.youtube.com/embed/" + props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            { subscribe && <mark>Subscribed</mark> }
            <button onClick={handleLike}>Like</button> <strong>{ likes }</strong>
        </>
    );
}

export default YouTube;

export const galaxy = 42;