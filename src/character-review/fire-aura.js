import {RisingFireWisps} from './rising-fire-wisps.js';
import * as THREE from 'three';
const noise=`float hash(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float fbm(vec3 p){return .62*noise3(p)+.27*noise3(p*2.03)+.11*noise3(p*4.01);}`;
export class FireAura{
 constructor(gltf){this.time={value:0};this.enabled=true;this.records=[];this.volumes=[];this.lids=[];this.root=gltf.scene;this.fireTexture=new THREE.TextureLoader().load('textures/living-fire-wrap-v1.webp');this.fireTexture.colorSpace=THREE.SRGBColorSpace;this.fireTexture.wrapS=this.fireTexture.wrapT=THREE.RepeatWrapping;this.fireTexture.anisotropy=4;
 const bodyBone=gltf.scene.getObjectByName('Sparky_Body')||gltf.scene;let body=null;
 gltf.scene.traverse(o=>{if(o.isMesh&&o.name.startsWith('geometry_0'))body=o});this.body=body;
 if(body){const si=body.geometry.getAttribute('skinIndex'),sw=body.geometry.getAttribute('skinWeight'),features=new Float32Array(si.count);for(let i=0;i<si.count;i++){let w=0;for(let k=0;k<4;k++){const j=si.getComponent(i,k);if(body.skeleton.bones[j]?.name.includes('_Brow_'))w+=sw.getComponent(i,k);}features[i]=Math.min(1,w*1.6);}body.geometry.setAttribute('featureWeight',new THREE.BufferAttribute(features,1));const mat=body.material.clone();body.material=mat;mat.emissive.set(0);mat.roughnessMap=null;mat.roughness=1;mat.metalness=0;mat.transparent=true;mat.side=THREE.FrontSide;
 mat.onBeforeCompile=s=>{
 s.uniforms.uFireTime=this.time;s.uniforms.uFireArt={value:this.fireTexture};s.uniforms.uFireRest={value:body.skeleton.boneInverses[body.skeleton.bones.findIndex(b=>b.name==='Sparky_Body')].clone()};
 s.vertexShader='attribute float featureWeight;uniform mat4 uFireRest;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;\n'+s.vertexShader;
 s.vertexShader=s.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
 vFirePos=(uFireRest*vec4(position,1.)).xyz;vFeatureWeight=featureWeight;
 float crown=smoothstep(.0,.42,vFirePos.y);
 float edgeFlame=smoothstep(.27,.40,abs(vFirePos.x))*smoothstep(-.27,-.04,vFirePos.y);
 float flameMove=max(crown,edgeFlame);
 transformed.x+=.004*flameMove*sin(vFirePos.y*13.-uFireTime*1.3+vFirePos.x*11.);
 transformed.y+=.005*flameMove*sin(vFirePos.x*12.+uFireTime*1.5+vFirePos.z*8.);`);
 s.fragmentShader='uniform sampler2D uFireArt;varying float vFeatureWeight;varying vec3 vFirePos;uniform float uFireTime;\n'+noise+'\n'+`float wrapDistance(float a,float b){return abs(atan(sin(a-b),cos(a-b)));}
float wrappedFlames(vec3 p,float time){
 float theta=atan((p.x+.02)/.42,p.z/.39);
 float heat=.035;
 for(int i=0;i<11;i++){
  float fi=float(i);
  float endHeight=.12+.26*(.5+.5*sin(fi*2.31+.4));
  float h=clamp((p.y+.49)/(endHeight+.49),0.,1.);
  float center=fi*6.2831853/11.+.22*sin(h*3.1+fi*.92)*h-.48*h*h;
  center+=.018*sin(time*.75+fi*1.7+h*4.)*h;
  float width=.035+.33*pow(max(0.,sin(h*3.14159)),.68)*(1.-.44*h);
  float distance=wrapDistance(theta,center);
  float gate=smoothstep(0.,.08,h)*(1.-smoothstep(.94,1.,h));
  float orange=.35*(1.-smoothstep(width*.65,width*1.65,distance));
  float gold=.38*(1.-smoothstep(width*.27,width*.95,distance));
  float yellow=.24*(1.-smoothstep(width*.04,width*.48,wrapDistance(theta,center+.055*(1.-h))));
  heat=max(heat,(orange+gold+yellow)*gate);
 }
 return heat;
}`+'\n'
 +s.fragmentShader;
 s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`
 vec3 painted=diffuseColor.rgb;
 float brightColour=smoothstep(.18,.52,painted.r)*(1.-smoothstep(.45,.80,painted.b/max(painted.r,.001)));
 float eyeL=1.-smoothstep(.87,1.03,length(vec2((vFirePos.x+.152)/.087,(vFirePos.y+.135)/.100)));
 float eyeR=1.-smoothstep(.87,1.03,length(vec2((vFirePos.x-.095)/.091,(vFirePos.y+.139)/.101)));
 float faceFront=smoothstep(.17,.27,vFirePos.z);
 float mouthZone=(1.-smoothstep(.75,1.1,length(vec2((vFirePos.x+.028)/.105,(vFirePos.y+.25)/.045))))*faceFront;float mouthInk=mouthZone*(1.-smoothstep(.025,.10,painted.r));float whiteDetail=smoothstep(.55,.80,painted.b/max(painted.r,.001))*smoothstep(.65,.85,painted.g/max(painted.r,.001));float fireMask=(1.-max(eyeL,eyeR)*faceFront)*(1.-vFeatureWeight)*(1.-mouthInk)*(1.-whiteDetail*faceFront);
 float field=fbm(vFirePos*5.+vec3(0.,-uFireTime*.55,0.));
 float flow=sin(vFirePos.y*23.-uFireTime*1.8+field*6.+vFirePos.x*11.);
 float heat=pow(clamp(painted.g/max(painted.r,.001),0.,1.),.65);
 float wrapBlend=1.-smoothstep(.06,.25,vFirePos.z);heat=mix(heat,wrappedFlames(vFirePos,uFireTime),wrapBlend);heat=clamp(heat+(field-.5)*.045+flow*.035*smoothstep(-.02,.12,vFirePos.y),0.,1.);
 vec3 red=vec3(1.,.018,.001),orange=vec3(1.,.20,.004),gold=vec3(1.,.48,.009),yellow=vec3(1.,.76,.055);
 vec3 fire=mix(red,orange,smoothstep(.0,.32,heat));
 fire=mix(fire,gold,smoothstep(.28,.72,heat));
 fire=mix(fire,yellow,smoothstep(.68,1.,heat));
 float frontCore=(1.-smoothstep(.45,1.1,length(vec2((vFirePos.x+.02)/.39,(vFirePos.y+.20)/.32))))*faceFront;
 float viewEdge=1.-abs(dot(normalize(normal),normalize(vViewPosition)));
 float densityLight=.88+.34*(1.-viewEdge)+.14*frontCore;
 float cleanCore=(1.-smoothstep(.55,1.1,length(vec2((vFirePos.x+.02)/.38,(vFirePos.y+.20)/.32))))*faceFront;fire=mix(fire,vec3(1.,.66,.022),cleanCore*.62);float theta=atan((vFirePos.x+.02)/.42,vFirePos.z/.39);vec2 fireUV=vec2(theta/6.2831853+.5,(vFirePos.y+.49)/1.06-uFireTime*.016);fireUV.x+=.007*sin(vFirePos.y*12.-uFireTime*.6);fireUV=fract(fireUV);vec3 art=textureLod(uFireArt,fireUV,1.0).rgb;float seamU=1.-smoothstep(0.,.045,min(fireUV.x,1.-fireUV.x));art=mix(art,(art+textureLod(uFireArt,vec2(1.-fireUV.x,fireUV.y),1.0).rgb)*.5,seamU);float seamV=1.-smoothstep(0.,.045,min(fireUV.y,1.-fireUV.y));art=mix(art,(art+textureLod(uFireArt,vec2(fireUV.x,1.-fireUV.y),1.0).rgb)*.5,seamV);float artBlend=max(1.-smoothstep(.06,.25,vFirePos.z),smoothstep(-.01,.16,vFirePos.y))*(1.-cleanCore*.96)*smoothstep(-.48,-.35,vFirePos.y);fire=mix(fire,art*1.10,artBlend*.45);float warmRim=smoothstep(.76,1.10,length(vec2((vFirePos.x+.02)/.40,(vFirePos.y+.19)/.37)))*(1.-smoothstep(-.03,.08,vFirePos.y))*faceFront;fire=mix(fire,vec3(1.,.13,.002),warmRim*.78);float rear=1.-smoothstep(-.10,.08,vFirePos.z);float rearCenter=clamp(1.-length(vec2((vFirePos.x+.01)/.46,(vFirePos.y+.17)/.50)),0.,1.);fire=mix(fire,mix(vec3(1.,.055,.001),vec3(1.,.20,.003),rearCenter),rear);outgoingLight=mix(outgoingLight,fire*densityLight*1.04,fireMask);
 diffuseColor.a*=1.-.33*pow(viewEdge,4.)*fireMask*(1.-frontCore);
 #include <opaque_fragment>
 `);
 };
 mat.customProgramCacheKey=()=> 'sparky-reference-lively-polish-v1';this.bodyMaterial=mat;
 }
 this.root.traverse(o=>{if(!o.isMesh||(!o.name.includes('ArmMesh')&&!o.name.includes('ShoulderCap')))return;o.material=o.material.clone();o.material.roughnessMap=null;o.material.roughness=.92;o.material.metalness=0;o.material.color.multiplyScalar(1.08);});this.backLayers=[];this.root.traverse(o=>{if(!o.isMesh||!o.name.startsWith('BackFlame_'))return;const material=o.material.clone();o.material=material;material.roughness=1;material.metalness=0;material.transparent=true;material.depthWrite=true;material.side=THREE.FrontSide;material.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`float facing=abs(dot(normalize(normal),normalize(vViewPosition)));outgoingLight=diffuseColor.rgb*(.98+.14*facing);diffuseColor.a*=.97-.18*pow(1.-facing,4.);\n#include <opaque_fragment>`);};material.customProgramCacheKey=()=> 'back-flame-intrinsic-soft-v1';this.backLayers.push(o);});this.root.updateMatrixWorld(true);this.root.traverse(o=>{if(!o.isMesh||!o.name.startsWith('Eyelid_')||o.name.includes('Lash'))return;const u={value:new THREE.Matrix4()};const material=o.material.clone();o.material=material;material.onBeforeCompile=s=>{s.uniforms.uLidRest=u;s.vertexShader='uniform mat4 uLidRest;varying vec3 vLidPos;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <project_vertex>','vLidPos=(uLidRest*vec4(transformed,1.)).xyz;\n#include <project_vertex>');s.fragmentShader='varying vec3 vLidPos;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <opaque_fragment>',`float core=1.-smoothstep(.45,1.1,length(vec2((vLidPos.x+.02)/.39,(vLidPos.y+.20)/.32)));float edge=1.-abs(dot(normalize(normal),normalize(vViewPosition)));outgoingLight=vec3(1.,.66,.022)*(.88+.34*(1.-edge)+.14*core)*1.04;\n#include <opaque_fragment>`);};material.customProgramCacheKey=()=> 'sparky-lid-core-match-v1';this.lids.push({object:o,uniform:u});});
 this.wisps=new RisingFireWisps(bodyBone,this.time);
 }
 update(t,camera){this.time.value=t;this.wisps.update(t,camera,this.enabled);const bone=this.root.getObjectByName('Sparky_Body');bone.updateWorldMatrix(true,false);const inv=bone.matrixWorld.clone().invert();for(const r of this.lids){r.object.updateWorldMatrix(true,false);r.uniform.value.multiplyMatrices(inv,r.object.matrixWorld);}for(const o of this.volumes){o.visible=this.enabled;o.updateWorldMatrix(true,false);o.material.uniforms.uCamera.value.copy(camera.position);o.worldToLocal(o.material.uniforms.uCamera.value);}for(const o of this.records)o.visible=this.enabled;}
 dispose(){this.wisps.dispose();for(const o of [...this.records,...this.volumes]){o.removeFromParent();o.material.dispose();}this.volumes[0]?.geometry.dispose();}
}
