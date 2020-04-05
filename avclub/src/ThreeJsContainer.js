import React, {useState, useEffect} from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';

const ThreeJsContainer = ({data, track, trackId}) => {
    const [rendered, setRendered] = useState(false);
    console.log('data', data)
    console.log('track', track);
    console.log('trackId', trackId)
    var camera, scene, renderer;
    var geometry, material, mesh;
    
 
    function init() {
    
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;
    
        scene = new THREE.Scene();
    
        geometry = new THREE.SphereGeometry( .2, 32, 32 );
        material = new THREE.MeshBasicMaterial();
    
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById('renderer').appendChild( renderer.domElement );

    }
 
    function animate(data, tempo) {
        requestAnimationFrame( animate );
        //let pitches = [];
        //let timbre = [];
        //for(let i=0; i<metrics.segments.length; i++)
        //{
        //   pitches += mesh.segments[i].pitches
        //}
        for(let i=0; i<data.length; i++)
        {
           for(let x=0; x<data[i].pitches.length; x++)
           {
               setInterval(function(){
                    mesh.scale.x = data[i].pitches[x];
                    mesh.scale.y = data[i].pitches[x];
                    mesh.material.color.setRGB(data[i].timbre[x]/10, data[i].timbre[x]/100, data[i].timbre[x]/20);

               }, track.tempo/60000)
           }
        }
        //while(metrics.segments)
        mesh.rotation.z += 0.01;
        //mesh.rotation.y += 1;
        
        renderer.render( scene, camera );
        
    }

    function metricsCheck(data, track)
    {
        if(data && track && !rendered){
            console.log('hit)')
            setRendered(true);
            return(
                <div>
                    {init()}
                    {animate(data, track.tempo)}
                </div>
            )
        }
        /*else if(data && track){
            renderer = document.getElementById('renderer').childNodes;
            return(
                <div>
                    {animate(data, track.tempo)}
                </div>
            )
        }*/
    }

    return(
        <div>
            {metricsCheck(data, track)}
        </div>
    )
}

export default ThreeJsContainer;