import React, {
    Component
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';

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
                {this.state && this.state.data && this.state.data.map(find =>
                        <li>
                            <a href={find.link}>{find.title} - {find.artist.name}</a>
                        </li>
                    ) }
                </ul>
            </div>
        )
    }
}

export default Audio;