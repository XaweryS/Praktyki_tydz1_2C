import * as THREE from 'three';
const sz= window.innerWidth
const wys= window.innerHeight
const ani = new THREE.Scene();
const wid = new THREE.PerspectiveCamera( 160, sz/wys, 0.001, 10 );
const anir = new THREE.WebGLRenderer();
anir.setSize( sz, wys );
anir.setAnimationLoop( animate );
document.body.appendChild( anir.domElement );
const geo = new THREE.BoxGeometry( 500, 3, 3);
const ruch = new THREE.MeshMatcapMaterial( { color: 0x00ff00 } );
const tdzc = new THREE.Mesh( geo, ruch );
ani.add( tdzc );
wid.position.z = 5;
function animate() {
	tdzc.rotation.x += -0.0015;
    tdzc.rotation.y += 1000000000;
	anir.render( ani, wid);
}