import * as THREE from 'three';
const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t)};
export class RisingFireWisps{
 constructor(parent,time){this.items=[];this.time=time;this.temp=new THREE.Vector3();this.quat=new THREE.Quaternion();
 const starts=[[.08,.455,.035],[-.27,.29,.02],[.29,.17,.01],[-.375,-.015,.02],[.36,-.08,.01],[-.17,.22,-.26],[.2,.15,-.25],[.06,.34,-.12]];
 for(let i=0;i<starts.length;i++){const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,uniforms:{uTime:time,uPhase:{value:i*1.7},uLife:{value:0}},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'uniform float uTime,uPhase,uLife;varying vec2 vUv;void main(){float h=vUv.y;float bend=.18*sin(h*3.+uTime*1.1+uPhase)*h+.13*h*h;float x=(vUv.x-.5)-bend;float width=.26*pow(max(.001,sin(h*3.14159)),.65)*(1.-.58*h);float edge=1.-smoothstep(width*.42,width,abs(x));float alpha=edge*smoothstep(0.,.13,h)*(1.-smoothstep(.72,1.,h))*uLife;float hot=pow(max(0.,1.-abs(x)/max(width,.001)),2.);vec3 c=mix(vec3(1.6,.07,.001),vec3(2.0,1.05,.022),hot);if(alpha<.006)discard;gl_FragColor=vec4(c,alpha*.70);}'});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(1,1),material);mesh.name='Rising flame wisp '+i;mesh.renderOrder=3;parent.add(mesh);this.items.push({mesh,base:new THREE.Vector3(...starts[i]),period:3.8+i*.29,offset:i*.73,size:.075+(i%3)*.007});}
 }
 update(t,camera,enabled=true){camera.getWorldQuaternion(this.quat);for(let i=0;i<this.items.length;i++){const r=this.items[i],cycle=(t+r.offset)%r.period,life=cycle/1.6;r.mesh.visible=enabled&&life<1;if(!r.mesh.visible)continue;const a=smooth(0,.18,life)*(1-smooth(.48,1,life));r.mesh.material.uniforms.uLife.value=a*.48;r.mesh.position.copy(r.base);r.mesh.position.y+=life*.035;r.mesh.position.x+=Math.sin(life*2.3+i)*.006;r.mesh.scale.set(r.size*.52,r.size*(.85+.15*life),1);r.mesh.parent.getWorldQuaternion(r.mesh.quaternion);r.mesh.quaternion.invert().multiply(this.quat);}}
 dispose(){for(const r of this.items){r.mesh.removeFromParent();r.mesh.geometry.dispose();r.mesh.material.dispose();}}
}
