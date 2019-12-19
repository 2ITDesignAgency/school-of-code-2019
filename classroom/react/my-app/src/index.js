import React from 'react';
import ReactDOM from 'react-dom';
import YouTube, { galaxy, calculateHeight } from './components/YouTube';
// import { galaxy, calculateHeight } from './components/YouTube';

const title = <h1>Hello</h1>;
const pot = document.querySelector("#root");
const videos = [
    "uTxRF5ag27A",
    "PGUMRVowdv8",
    "XxVg_s8xAms"
];

function App(){
    return (
        <>
            {/* Ctrl + / -> JSX Comments */}
            <div>App: {title}</div>
            {videos.map(function(video,index){
                return (
                    <YouTube key={video} id={video} width="560" />                    
                );
            })}
            {/* <YouTube id="PGUMRVowdv8" width="560" />
            <YouTube id="XxVg_s8xAms" width="560" /> */}
        </>
    );
}

// ReactDOM.render( WHAT, WHERE );
ReactDOM.render( <App></App>, pot );