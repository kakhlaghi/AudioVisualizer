import React, {Component} from 'react';
import * as THREE from 'three';
import { Vector3 } from 'three';

const ThreeJsContainer = ({data}) => {
    console.log('data', data)
    var camera, scene, renderer;
    var geometry, material, mesh;
    
 
    function init() {
    
        camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
        camera.position.z = 1;
    
        scene = new THREE.Scene();
    
        geometry = new THREE.SphereGeometry( .2, 32, 32 );
        material = new THREE.MeshNormalMaterial();
    
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
    
        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    
    }
 
    function animate(data) {
        
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
               mesh.scale.x += data[i].pitches[x];
           }
        }
        console.log(mesh.scale.x)
        //while(metrics.segments)
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        mesh.rotation.z += 0.03;
        
        renderer.render( scene, camera );
        
    }

    function metricsCheck(data)
    {
        if(data){
            return(
                <div>
                    {init()}
                    {animate(data)}
                </div>
            )
        }
    }

    return(
        <div>
            {metricsCheck(data)}
        </div>
    )
}

export default ThreeJsContainer;