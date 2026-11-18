import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {SavePass} from 'three/addons/postprocessing/SavePass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {MeshoptDecoder} from 'meshoptimizer';
import {SparkyPlayer} from '../player.js';
import {FireAura} from './fire-aura.js';
const canvas=document.querySelector('canvas'),r=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true});
r.setPixelRatio(Math.min(devicePixelRatio,1.5));r.toneMapping=THREE.NeutralToneMapping;r.toneMappingExposure=1.0;
const scene=new THREE.Scene();scene.background=new THREE.Color('#18222e');
const camera=new THREE.PerspectiveCamera(30,1,.01,30),controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;controls.enablePan=false;controls.minDistance=1.1;controls.maxDistance=5;
controls.target.set(0,.015,0);camera.position.set(1.1,.035,2.65);
scene.add(new THREE.HemisphereLight(0xfff5dd,0x8a6371,2));
for(const [pos,intensity,col]of [[[-2,3,3],2,0xffe9c9],[[3,2,1],.6,0xcce5ff],[[1,2,-3],1,0xff8c30]]){const l=new THREE.DirectionalLight(col,intensity);l.position.set(...pos);scene.add(l);}
const composer=new EffectComposer(r);composer.addPass(new RenderPass(scene,camera));const baseTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType});composer.addPass(new SavePass(baseTarget));const bloom=new UnrealBloomPass(new THREE.Vector2(600,600),.10,.38,1.10);composer.addPass(bloom);
const faceSafe=new ShaderPass({uniforms:{tDiffuse:{value:null},tBase:{value:baseTarget.texture},uFace:{value:new THREE.Vector2(.5,.4)},uRadius:{value:new THREE.Vector2(.15,.18)},uVisible:{value:1}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform sampler2D tDiffuse,tBase;uniform vec2 uFace,uRadius;uniform float uVisible;varying vec2 vUv;void main(){vec4 a=texture2D(tDiffuse,vUv),b=texture2D(tBase,vUv);float d=length((vUv-uFace)/uRadius);float protect=(1.-smoothstep(.72,1.30,d))*uVisible;gl_FragColor=mix(a,b,protect*.97);}'});faceSafe.uniforms.tBase.value=baseTarget.texture;composer.addPass(faceSafe);composer.addPass(new OutputPass());
function protectFace(){const bone=fx?.root.getObjectByName('Sparky_Body');if(!bone)return;bone.updateWorldMatrix(true,false);const c=new THREE.Vector3(-.02,-.17,.35).applyMatrix4(bone.matrixWorld).project(camera),right=new THREE.Vector3(.28,-.17,.35).applyMatrix4(bone.matrixWorld).project(camera),up=new THREE.Vector3(-.02,.07,.35).applyMatrix4(bone.matrixWorld).project(camera);faceSafe.uniforms.uFace.value.set(c.x*.5+.5,c.y*.5+.5);faceSafe.uniforms.uRadius.value.set(Math.max(.025,Math.abs(right.x-c.x)*.5),Math.max(.04,Math.abs(up.y-c.y)*.5));faceSafe.uniforms.uVisible.value=Math.max(0,Math.min(1,(camera.position.z+.2)*3.));}

let player,fx,rig,t=0;
function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;r.setSize(w,h,false);composer.setSize(w,h);baseTarget.setSize(r.domElement.width,r.domElement.height);camera.aspect=w/h;camera.updateProjectionMatrix();}
new ResizeObserver(resize).observe(canvas);
const clock=new THREE.Clock();function draw(){requestAnimationFrame(draw);const dt=Math.min(clock.getDelta(),.05);if(player&&fx){if(player.playing)t+=dt;player.update(dt);fx.update(t,camera);rig.updateMatrixWorld(true);}controls.update();protectFace();composer.render();}draw();
const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync('assets/sparky.glb');
const manifest=await(await fetch('data/animations.json')).json();
player=new SparkyPlayer(gltf,manifest);scene.add(player.object);fx=new FireAura(gltf);rig=new THREE.SkeletonHelper(player.object);rig.visible=false;scene.add(rig);
const menu=document.getElementById('animation');for(const a of manifest){const o=document.createElement('option');o.value=a.name;o.textContent=a.label;menu.append(o);}
menu.onchange=()=>{player.play(menu.value);player.playing=true;};for(const b of document.querySelectorAll('[data-pose]'))b.onclick=()=>{menu.value=b.dataset.pose;menu.onchange();};player.play('Idle_Blink');document.getElementById('loading').hidden=true;
document.getElementById('pause').onclick=()=>{player.playing=!player.playing;document.getElementById('pause').textContent=player.playing?'Pause':'Play';};
document.getElementById('fire').onchange=e=>{fx.enabled=e.target.checked;bloom.enabled=e.target.checked;};
document.getElementById('rig').onchange=e=>rig.visible=e.target.checked;
document.getElementById('wire').onchange=e=>{gltf.scene.traverse(o=>{if(o.isMesh&&!o.name.startsWith('Fire')&&o.material?.wireframe!==undefined)o.material.wireframe=e.target.checked;});};
function view(name){const views={front:[0,.02,2.85],quarter:[1.4,.03,2.6],side:[2.85,.02,0],back:[0,.02,-2.85]};camera.position.set(...views[name]);controls.target.set(0,.015,0);controls.update();}
for(const b of document.querySelectorAll('[data-view]'))b.onclick=()=>view(b.dataset.view);
window.sparkyFireball={renderer:r,scene,camera,controls,composer,player,fx,rig,manifest,view,render(){controls.update();fx.update(t,camera);protectFace();composer.render();}};


const initialView=new URLSearchParams(location.search).get('view');if(['front','quarter','side','back'].includes(initialView))view(initialView);
