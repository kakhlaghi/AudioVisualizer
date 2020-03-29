import React, {
    Component
} from 'react';

class Sdk extends Component {
    constructor(props){
        super(props)
        this.handleLoadSuccess = this.handleLoadSuccess.bind(this);
        this.handleLoadFailure = this.handleLoadSuccess.bind(this);
        this.cb = this.cb.bind(this);
        this.state={
            
        }
    }

    componentDidMount(){
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = 'BQDebeRnymlpUVsf8IFNEqNb2GV1LZ4qXCl_CG0eheMAmEU_zr8VHwzwy3t4-bKPBM8QQZgbH4hj34OHNvAb7aAOhkf2B_l5NcwlNxyzBhysomnebe0A6CIrvaARwtaO_r8KftM4jCjZcyl8PuLaZAvAxg8ijoCLo58';
            const player = new Spotify.Player({
              name: 'Web Playback SDK Quick Start Player',
              getOAuthToken: cb => { cb(token); }
            });
          
            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });
          
            // Playback status updates
            player.addListener('player_state_changed', state => { console.log(state); });
          
            // Ready
            player.addListener('ready', ({ device_id }) => {
              console.log('Ready with Device ID', device_id);
            });
          
            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
              console.log('Device ID has gone offline', device_id);
            });
          
            // Connect to the player!
            player.connect();
          };
    }

    render(){
        return(
            <div>
                Player
            </div>
        )
    }
}

export default Sdk