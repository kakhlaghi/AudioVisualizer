import React, {
    Component
} from 'react';

import { makeStyles } from '@material-ui/core/styles';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';
import MediaControlCard from './Card';
import "./Audio.css";

class Audio extends Component {
    constructor(props) {
        super()
        this.state = {
            isPlaying: false,
            volume: 1.0,
            isBuffering: false,
            song: 'unselected',
            data: [],
            filter: 'artist',
            artist: '',
            album: ''
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.query !== prevProps.query){
            this.getMusic(this.props.query)
        }
    }

    async getMusic(query){
        let state = this.state;
        await fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
        .then(response => 
            response.json()
        )
        .then(json =>
            state.data = json.data
        )
        .catch(function (err) {
            console.error(err);
        });
        this.setState(state)
        //console.log(this.state.data)
    }

    showData = () => {
        if(this.state.data !== ''){
            return this.state.data.map(find =>
               find.link
            )
        }
    }

    render() {
        return ( 
            <div>
                <Button> <PlayArrowIcon / > </Button> 
                <ul>  
                {this.state && this.state.data && this.state.data.map((find,index)=>
                        <div key={index}>
                            <MediaControlCard data={find} />
                        </div>
                    ) }
                </ul>
            </div>
        )
    }
}

export default Audio;