import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Audio from './Audio.js';
import "./Audio.css";

function Search({token}){
    const [query, setQuery] = useState('');
    /* const [data, setData] = useState('');

    useEffect(()=>{
        getMusic(query)
    }, [query])


    async function getMusic(query){
        let state = this.state;
        await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
        .then(response => 
            response.json()
        )
        .then(json =>
            state.data = json
        )
        .catch(function (err) {
            console.error(err);
        });
        this.setState(state)
        console.log(this.state.data)
    } */

    useEffect(()=>{
        
    })


    return(
        <div>
            <form>
                <TextField id="standard-basic" defaultValue=' ' label="Search" onChange={(event)=>setQuery(event.target.value)}/>        
            </form>
            <div id="audio">
                <Audio query={query} token={token}/>
            </div>
        </div>
    )
}

export default Search