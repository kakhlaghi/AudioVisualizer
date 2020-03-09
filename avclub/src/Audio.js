import React, {Component} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button';

class Audio extends Component
{
    constructor(props){
        super()
        this.state={
            isPlaying: false,
            volume: 1.0,
            isBuffering: false,
            song: 'unselected',
            data: ''
        }
    }
    
    async componentDidUpdate () {
        let state = this.state;
        let query = this.props.query;
        await fetch(`https://api.deezer.com/search?q=${query}`,{mode: 'cors'})
        .then(response => response.json())
        .then(json => {
            this.setState((state) => ({data: json}))
        })
        .catch(function(err){
            console.log(err);
        });
        console.log(this.state)
    }

    getMusic = (query) => {


    }

    render(){
        return(
            <div>
                <Button><PlayArrowIcon /></Button>
                {this.state.data}
            </div>
        )
    }
}

export default Audio;