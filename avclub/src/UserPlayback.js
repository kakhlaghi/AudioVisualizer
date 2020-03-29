import React, {
    Component
} from 'react';
import Button from '@material-ui/core/Button';
import Visualizer from './Visualizer.js'


class UserPlayback extends Component {
    constructor(props){
        super()
        this.state = {
            items: null, 
            device: ' ',
            token: ' ',
            data: ' ',
            id: ' '
        }
    }

    /*componentDidUpdate(){
        if(this.state.token != this.props.token){
            this.setState({token: this.props.token}, () => console.log(this.state))
            this.getMusic()
        }
    }*/
    tokenCheck(){
        if(this.props.token)
        {
           return <Button onClick={this.getMusic.bind(this)}> Check Song </Button>
        }
    }

    async getMusic(){
        let state = this.state;
        const request = new Request('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: new Headers({
                'Authorization': `Bearer ${this.props.token}`
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
                state.id = json.item.id;
                return state.data = json
            })
            .catch(function (err) {
                console.error(err);
            }
        );
        this.setState(state, ()=>{console.log(state)})    
    }

    visualizerGate = () => {
        if(this.state.id !== ' '){
            return <Visualizer token={this.props.token} trackId={this.state.id} />
        } else {
            console.log(this.state.data.id)
            return <span>Nothing Streaming</span>
        }
    }

    infoGate = () => {
        if(this.state.id !== ' '){
            return <span>{this.state.data.item.name} - {this.state.data.item.artists[0].name}</span>
        } else {
            return <span>Nothing Streaming</span>
        }
    }

    render(){
        return(
            <div>
                {this.tokenCheck()}
                <div>
                    {this.infoGate()}
                </div>
                <div>
                    {/*this.visualizerGate()*/}
                </div>
            </div>
        )

    }
}

export default UserPlayback