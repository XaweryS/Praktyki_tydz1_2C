import * as THREE from 'three';

sz= window.innerWidth;
wys= window.innerHeight;
ani= new THREE.Scene();
wid= new THREE.PerspectiveCamera(75 ,sz / wys, 0.1, 100);
wid.position.z=5;
rani= new THREE.WebGLRenderer();
rani.setSize(sz,wys);
document.body.appendChild(rani.domElement);
op= new THREE.BoxGeometry();
od= new THREE.MeshBasicMaterial({color: 0xff9900});
rani.render(ani, wid);