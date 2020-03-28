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

    musicCallback = (childData) => {
        this.setState({ song: childData }, ()=>console.log(this.state.song));
        console.log(this.state)
    }

    async getMusic(query){
        let state = this.state;
        
        await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, 
        {
            headers:{
                'Authorization': `Bearer ${this.props.token}`
            }
        })
        .then(response =>
            response.json()
        )
        .then(json =>
            state.data = json.tracks
        )
        .catch(function (err) {
            console.error(err);
        });
        this.setState(state)
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
                <audio controls>
                    <source src={this.state.song} type="audio/mpeg"/>
                    Your browser does not support the audio element.
                </audio>
                <ul>  
                {this.state && this.state.data.items && this.state.data.items.map((track,index)=>
                        <div key={index}>
                            <MediaControlCard data={track} callbackAudio={this.musicCallback} />
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}

export default Audio;