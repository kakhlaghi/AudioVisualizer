import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import Audio from './Audio.js';

function Search(){
    const [query, setQuery] = useState('');

    return(
        <form>
            <TextField id="standard-basic" label="Standard" onChange={(event)=>setQuery(event.target.value)}/>
            <Audio query={query}/>
            {query}
        </form>
    )
}

export default Search