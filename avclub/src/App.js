import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from './Search.js';

require('dotenv');

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "d3d7d25597164f7a814160b10b5838f2";
console.log(clientId)
const redirectUri = "http://localhost:3000";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];
// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function(initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
window.location.hash = "";


class App extends Component {

  constructor() {
    super();
    this.state = {
      token: null
    };
  }
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
    console.log(this.state.token)
  }
render() {
  return (
    <div className="App">
      <Search />
      {/*!this.state.token && (
        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
          crossorigin="anonymous"        
        >
          Login to Spotify
        </a>
      )*/}
    </div>
  );
  }
}
export default App;