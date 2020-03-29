import React, {useState, useEffect} from "react";

const Visualizer = ({trackId, token}) => {
    const [metrics, setMetrics] = useState('');

    useEffect(()=>{
        console.log(trackId + ' ' + token)
        if(trackId){    
            getMetrics(trackId, token)
        }
    },[trackId, token])

    async function getMetrics(trackId, token) {
        const request = new Request(`https://api.spotify.com/v1/audio-analysis/${trackId}`, {
            headers: new Headers({
                'Authorization': `Bearer ${token}`
            })
        });
        await fetch(request)
            .then(response => {
                console.log(response)
                return response.json()
            }
            )
            .then(json =>{
                console.log(json)
                setMetrics(json)
            })
            .catch(function (err) {
                console.error(err);
            }
        );
        console.log(metrics)
    }

    return(
        <div>
            Visualizer
        </div>
    )
}

export default Visualizer