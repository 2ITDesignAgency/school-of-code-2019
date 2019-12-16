import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [ videos, setVideos ] = useState([]);
    const [counter, setCounter] = useState(0);
    useEffect(()=>{
        console.log("useEffect callback executed");
    },[counter]); // run once by initial render

    useEffect(()=>{
        console.log("use Effect callback triuggered by counter!")
    }, [counter]); // run once and on every specific change

    function loadVideos(){
        fetch("https://api.myjson.com/bins/1d653q")
        .then((res)=> res.json())
        .then((data)=>{
            console.log("data:", data);
            setVideos( data );
        }) 
        // const vIDs = ["uTxRF5ag27A", "PGUMRVowdv8", "XxVg_s8xAms" ];
        // setVideos(vIDs);
    }

    return(
        <>
        <h1 onClick={()=>setCounter(counter + 1) }>My Videos {counter}</h1>
    <button onClick ={loadVideos}>Load Videos</button>
        <br/>
        {videos.map( function(vID){
            console.log(vID);
            return (<YoutubeEmbed key={vID} id={vID}/>);
        })}
        </>
    );
}

function YoutubeEmbed(props) {
    return (
    <>
    <iframe width="30%" height="315" src={"https://www.youtube.com/embed/"+props.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {props.children};
    </>
    );
}


ReactDOM.render( <App/>, document.querySelector('#root'));