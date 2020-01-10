import React, { Component } from 'react';
import * as THREE from 'three';
 
class ThreeBim extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
 
    initThree(){
        threeStart();
 
        var renderer,width,height;
 
        function init() {
            width = window.innerWidth;
            height = window.innerHeight;
            renderer = new THREE.WebGLRenderer({
                antialias: true
            });
            renderer.setSize(width, height);
            document.getElementById('canvas-frame').appendChild(renderer.domElement);
            renderer.setClearColor(0x000000, 1.0);
        }
 
        var camera;
        function initCamera() {
            camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
            camera.position.set(400,400,400)
            camera.up.set(0,1,0);
            camera.lookAt(0,0,0);
        }
 
        var scene;
        function initScene() {
            scene = new THREE.Scene();
        }
 
        var light;
        function initLight() {
            light = new THREE.AmbientLight(0xFFFFFF);
            light.position.set(300, 300, 0);
            scene.add(light);
        }
 
        function initObject() {
            
            // var geometry = new THREE.SphereGeometry(60, 40, 40);
            var geometry = new THREE.CubeGeometry(100, 100, 100);
            var material = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
            var mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(0, 0, 0);
            scene.add(mesh);
        }        
        var point;
        var ambient;
        
        function aa(){
            point=new THREE.PointLight(0xffffff);
            point.position.set(100,100,100)
            scene.add(point);
            ambient=new THREE.AmbientLight(0x444444);
            scene.add(ambient);
            console.log(scene);
            
        }
 
        function threeStart() {
            init();
            initCamera();
            initScene();
            initLight();
            initObject();
            animation();
            aa();
        }
        function animation() {         
            renderer.render(scene, camera);
            requestAnimationFrame(animation);
        }
    }
 
    /**
     * 开始Three
     *
     * @memberof ThreeBim
     */
    componentDidMount(){
        this.initThree();
    }
    render() {
        return (
            <div id='canvas-frame'>
            </div>
        );
    }
}
 
export default ThreeBim;