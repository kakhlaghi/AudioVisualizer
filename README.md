# AudioVisualizer

Work in Progress

Uses Spotify's SDK and Web API to present a visual representation of a song using ThreeJS.
Uses the pitch of the song for changes to the geometry.
Uses the timbre of the song for changes to the mesh.

## Installation
Clone cd to avclub (not the root folder)
npm install
npm start

Runs on port:3000 by default


TODO:
So much right now.
Here are some:
better visualization.
refactor code.

big one:
I can't really figure out how to get the stream object from the SDK but I imagine there must be a way. When I get that, there will be a massive overhaul/adjustment to get the infromation that way. Right now I get a fetch that returns analysis of the song from Spotify and then I will sync up the song and the visualization by getting the state changes from Spotify and finding the "position" in the song visualization data.

