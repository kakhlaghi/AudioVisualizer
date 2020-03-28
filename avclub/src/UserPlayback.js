import React, {
    Component
} from 'react';
import Button from '@material-ui/core/Button';


class UserPlayback extends Component {
    constructor(props){
        super()
        this.state = {
            items: null, 
            device: ' ',
            token: ' ',
            data: ' '
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

    getMusic(){
        let state = this.state;
        fetch(`https://api.spotify.com/v1/me/player`, 
            {
                method: 'GET',
                headers:{
                    'Authorization': `Bearer ${this.props.token}`
                    
                }
            })
            .then(response => {
                console.log(response)
                response.json()
            }
            )
            .then(json =>{
                console.log(json)
                state.data = json
            })
            .catch(function (err) {
                console.error(err);
            }
        );
        console.log(state)
        this.setState(state)
    }

    render(){
        return(
            <div>
                {this.tokenCheck()}
                TEST
            </div>
        )

    }
}

export default UserPlayback