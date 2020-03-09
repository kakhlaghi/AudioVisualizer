import React, {Component} from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button'

class Audio extends Component
{
    constructor(props){
        super()
        this.state={
            isPlaying: false,
            volume: 1.0,
            isBuffering: false,
            song: 'unselected'
        }
    }

    render(){
        return(
            <div>
                <Button><PlayArrowIcon /></Button>
            </div>
        )
    }
}

export default Audio;