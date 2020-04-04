import React, {useState, useEffect} from "react";
import ThreeJsContainer from './ThreeJsContainer.js';


const Visualizer = ({trackId, token}) => {
    const [metrics, setMetrics] = useState('');

    useEffect(()=>{
        console.log(trackId + ' ' + token)
        if(trackId){    
            getMetrics(trackId, token)
        }
    },[trackId, token])

    useEffect(()=>{
        console.log('metrics', metrics);
    },[metrics])

    async function getMetrics(trackId, token) {
        const request = new Request(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        });
        let tmp = ' ';
        await fetch(request)
            .then(response => {
                return response.json()
            }
            )
            .then(json =>{
                return tmp = json
            })
            .catch(function (err) {
                console.error(err);
            }
        );
        return setMetrics(tmp);
    }

    return(
        <div>
            <ThreeJsContainer metrics={metrics}/>
        </div>
    )
}

export default Visualizer