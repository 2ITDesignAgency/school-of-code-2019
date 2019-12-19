import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import YoutubeEmbed from './components/YoutubeEmbed';
​
// const videos = [ "uTxRF5ag27A", "PGUMRVowdv8", "XxVg_s8xAms" ];
// https://api.myjson.com/bins/1d653q
​
function App(){
​
    const [ videos, setVideos ] = useState([]);
    const [ counter, setCounter ] = useState(0);
​
    useEffect(()=>{
        console.log("useEffect callback executed");
        loadVideos();
    },[]); // Run only once after initial render
​
    useEffect(()=>{
        console.log("useEffect callback triggered by counter!");
    },[counter]); // Run once and on every specific change
​
    function loadVideos(){
        fetch("https://api.myjson.com/bins/1d653q")
        .then((res)=> res.json())
        .then((data)=>{
            console.log("data:", data);
            setVideos( data );
        });
    }
​
    return (
        <>
            <h1 onClick={()=> setCounter( counter + 1 ) }>My Videos {counter}</h1>
            <button onClick={loadVideos}>Load Videos</button>
            <br/>
            {videos.map( function(vID){
                console.log(vID);
                return (<YoutubeEmbed key={vID} id={vID} />);
            })}
        </>
    );
}
function YoutubeEmbed( props ){
    return (
        <>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/"+props.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        { props.children }
        </>
    );
}
​
// ReactDOM.render( WHAT, WHERE );
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);