import * as THREE from 'three';
const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1, 1000);
// fov - aspect - near - far
// near and far : render distance limits
const renderer = new THREE.WebGL1Renderer();
// creating renderer instance 
renderer.setSize( window.innerWidth, window.innerHeight,);
document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:0x00ff00});
const cube =  new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
// cube position is at 0,0,0 we move camera position from inside cube to outside.

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render( scene, camera );
}

animate();
