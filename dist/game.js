(()=>{var Gl=0,Tc=1,Hl=2;var Rc=1,Vl=2,Ra=3,ba=0,Lt=1,jt=2,Za=0,Tn=1,Ic=2,kc=3,Cc=4,Wl=5,fn=100,Xl=101,ql=102,Kl=103,Jl=104,Yl=200,Zl=201,Ql=202,$l=203,us=204,bs=205,ed=206,td=207,ad=208,nd=209,id=210,rd=211,sd=212,od=213,cd=214,Ps=0,Ds=1,Ls=2,Rn=3,Fs=4,Us=5,Os=6,zs=7,Nc=0,hd=1,ld=2,Qa=0,dd=1,fd=2,ud=3,bd=4,pd=5,md=6,Bs=7,yc="attached",gd="detached",Pc=300,zn=301,Bn=302,js=303,Gs=304,Sr=306,un=1e3,va=1001,pi=1002,wt=1003,Hs=1004;var jn=1005;var Dt=1006,Si=1007;var xa=1008;var Ia=1009,Dc=1010,Lc=1011,Ei=1012,Vs=1013,pn=1014,ia=1015,Ti=1016,Ws=1017,Xs=1018,Gn=1020,Fc=35902,Uc=1021,Oc=1022,$t=1023,zc=1024,Bc=1025,En=1026,In=1027,qs=1028,Ks=1029,jc=1030,Js=1031;var Ys=1033,Er=33776,Tr=33777,Rr=33778,Ir=33779,Zs=35840,Qs=35841,$s=35842,eo=35843,to=36196,ao=37492,no=37496,io=37808,ro=37809,so=37810,oo=37811,co=37812,ho=37813,lo=37814,fo=37815,uo=37816,bo=37817,po=37818,mo=37819,go=37820,xo=37821,kr=36492,yo=36494,vo=36495,Gc=36283,_o=36284,Mo=36285,wo=36286,Ao=2200,Cr=2201,xd=2202,kn=2300,Cn=2301,fs=2302,An=2400,Sn=2401,Yi=2402,So=2500,yd=2501,Hc=0,Nr=1,Ri=2,vd=3200,_d=3201;var Vc=0,Md=1,$a="",ut="srgb",At="srgb-linear",Zi="linear",et="srgb";var wn=7680;var vc=519,wd=512,Ad=513,Sd=514,Wc=515,Ed=516,Td=517,Rd=518,Id=519,ps=35044;var Xc="300 es",_a=2e3,Qi=2001,Ma=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let a=this._listeners;return a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let a=this._listeners[e.type];if(a!==void 0){e.target=this;let n=a.slice(0);for(let r=0,s=n.length;r<s;r++)n[r].call(this,e);e.target=null}}},Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sl=1234567,Ki=Math.PI/180,Nn=180/Math.PI;function ua(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[a&255]+Tt[a>>8&255]+Tt[a>>16&255]+Tt[a>>24&255]).toLowerCase()}function Ue(i,e,t){return Math.max(e,Math.min(t,i))}function qc(i,e){return(i%e+e)%e}function Nf(i,e,t,a,n){return a+(i-e)*(n-a)/(t-e)}function Pf(i,e,t){return i!==e?(t-i)/(e-i):0}function Ji(i,e,t){return(1-t)*i+t*e}function Df(i,e,t,a){return Ji(i,e,1-Math.exp(-t*a))}function Lf(i,e=1){return e-Math.abs(qc(i,e*2)-e)}function Ff(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Uf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Of(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zf(i,e){return i+Math.random()*(e-i)}function Bf(i){return i*(.5-Math.random())}function jf(i){i!==void 0&&(sl=i);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gf(i){return i*Ki}function Hf(i){return i*Nn}function Vf(i){return(i&i-1)===0&&i!==0}function Wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qf(i,e,t,a,n){let r=Math.cos,s=Math.sin,o=r(t/2),c=s(t/2),h=r((e+a)/2),l=s((e+a)/2),d=r((e-a)/2),u=s((e-a)/2),p=r((a-e)/2),x=s((a-e)/2);switch(n){case"XYX":i.set(o*l,c*d,c*u,o*h);break;case"YZY":i.set(c*u,o*l,c*d,o*h);break;case"ZXZ":i.set(c*d,c*u,o*l,o*h);break;case"XZX":i.set(o*l,c*x,c*p,o*h);break;case"YXY":i.set(c*p,o*l,c*x,o*h);break;case"ZYZ":i.set(c*x,c*p,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function fa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Kc={DEG2RAD:Ki,RAD2DEG:Nn,generateUUID:ua,clamp:Ue,euclideanModulo:qc,mapLinear:Nf,inverseLerp:Pf,lerp:Ji,damp:Df,pingpong:Lf,smoothstep:Ff,smootherstep:Uf,randInt:Of,randFloat:zf,randFloatSpread:Bf,seededRandom:jf,degToRad:Gf,radToDeg:Hf,isPowerOfTwo:Vf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:qf,normalize:$e,denormalize:fa},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,a=this.y,n=e.elements;return this.x=n[0]*t+n[3]*a+n[6],this.y=n[1]*t+n[4]*a+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Ue(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let a=Math.cos(t),n=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*a-s*n+e.x,this.y=r*n+s*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ne=class i{constructor(e,t,a,n,r,s,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,n,r,s,o,c,h)}set(e,t,a,n,r,s,o,c,h){let l=this.elements;return l[0]=e,l[1]=n,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=a,l[7]=s,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,n=t.elements,r=this.elements,s=a[0],o=a[3],c=a[6],h=a[1],l=a[4],d=a[7],u=a[2],p=a[5],x=a[8],g=n[0],b=n[3],f=n[6],_=n[1],w=n[4],m=n[7],M=n[2],A=n[5],T=n[8];return r[0]=s*g+o*_+c*M,r[3]=s*b+o*w+c*A,r[6]=s*f+o*m+c*T,r[1]=h*g+l*_+d*M,r[4]=h*b+l*w+d*A,r[7]=h*f+l*m+d*T,r[2]=u*g+p*_+x*M,r[5]=u*b+p*w+x*A,r[8]=u*f+p*m+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[1],n=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*s*l-t*o*h-a*r*l+a*o*c+n*r*h-n*s*c}invert(){let e=this.elements,t=e[0],a=e[1],n=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=l*s-o*h,u=o*c-l*r,p=h*r-s*c,x=t*d+a*u+n*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(n*h-l*a)*g,e[2]=(o*a-n*s)*g,e[3]=u*g,e[4]=(l*t-n*c)*g,e[5]=(n*r-o*t)*g,e[6]=p*g,e[7]=(a*c-h*t)*g,e[8]=(s*t-a*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,n,r,s,o){let c=Math.cos(r),h=Math.sin(r);return this.set(a*c,a*h,-a*(c*s+h*o)+s+e,-n*h,n*c,-n*(-h*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,a=e.elements;for(let n=0;n<9;n++)if(t[n]!==a[n])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ko=new Ne;function Jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kd(){let i=mi("canvas");return i.style.display="block",i}var ol={};function Hn(i){i in ol||(ol[i]=!0,console.warn(i))}function Cd(i,e,t){return new Promise(function(a,n){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:n();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:a()}}setTimeout(r,t)})}function Nd(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pd(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var cl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kf(){let i={enabled:!0,workingColorSpace:At,spaces:{},convert:function(n,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===et&&(n.r=Wa(n.r),n.g=Wa(n.g),n.b=Wa(n.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===et&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$a?Zi:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,s){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[At]:{primaries:e,whitePoint:a,transfer:Zi,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ut},outputColorSpaceConfig:{drawingBufferColorSpace:ut}},[ut]:{primaries:e,whitePoint:a,transfer:et,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ut}}}),i}var ze=Kf();function Wa(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ti,ms=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ti===void 0&&(ti=mi("canvas")),ti.width=e.width,ti.height=e.height;let a=ti.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),t=ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=mi("canvas");t.width=e.width,t.height=e.height;let a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);let n=a.getImageData(0,0,e.width,e.height),r=n.data;for(let s=0;s<r.length;s++)r[s]=Wa(r[s]/255)*255;return a.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Wa(t[a]/255)*255):t[a]=Wa(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jf=0,$i=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let a={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?r.push(Jo(n[s].image)):r.push(Jo(n[s]))}else r=Jo(n);a.url=r}return t||(e.images[this.uuid]=a),a}};function Jo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ms.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yf=0,_t=class i extends Ma{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,a=va,n=va,r=Dt,s=xa,o=$t,c=Ia,h=i.DEFAULT_ANISOTROPY,l=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=ua(),this.name="",this.source=new $i(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=n,this.magFilter=r,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case va:e.x=e.x<0?0:1;break;case pi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case va:e.y=e.y<0?0:1;break;case pi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=Pc;_t.DEFAULT_ANISOTROPY=1;var Je=class i{constructor(e=0,t=0,a=0,n=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,n){return this.x=e,this.y=t,this.z=a,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,a=this.y,n=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*a+s[8]*n+s[12]*r,this.y=s[1]*t+s[5]*a+s[9]*n+s[13]*r,this.z=s[2]*t+s[6]*a+s[10]*n+s[14]*r,this.w=s[3]*t+s[7]*a+s[11]*n+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,n,r,c=e.elements,h=c[0],l=c[4],d=c[8],u=c[1],p=c[5],x=c[9],g=c[2],b=c[6],f=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-b)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+b)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(h+1)/2,m=(p+1)/2,M=(f+1)/2,A=(l+u)/4,T=(d+g)/4,R=(x+b)/4;return w>m&&w>M?w<.01?(a=0,n=.707106781,r=.707106781):(a=Math.sqrt(w),n=A/a,r=T/a):m>M?m<.01?(a=.707106781,n=0,r=.707106781):(n=Math.sqrt(m),a=A/n,r=R/n):M<.01?(a=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),a=T/r,n=R/r),this.set(a,n,r,t),this}let _=Math.sqrt((b-x)*(b-x)+(d-g)*(d-g)+(u-l)*(u-l));return Math.abs(_)<.001&&(_=1),this.x=(b-x)/_,this.y=(d-g)/_,this.z=(u-l)/_,this.w=Math.acos((h+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this.w=Ue(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this.w=Ue(this.w,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gs=class extends Ma{constructor(e=1,t=1,a={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);let n={width:e,height:t,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);let r=new _t(n,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);r.flipY=!1,r.generateMipmaps=a.generateMipmaps,r.internalFormat=a.internalFormat,this.textures=[];let s=a.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=a;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,n=e.textures.length;a<n;a++)this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new $i(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wa=class extends gs{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}},er=class extends _t{constructor(e=null,t=1,a=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xs=class extends _t{constructor(e=null,t=1,a=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:n},this.magFilter=wt,this.minFilter=wt,this.wrapR=va,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pt=class{constructor(e=0,t=0,a=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=n}static slerpFlat(e,t,a,n,r,s,o){let c=a[n+0],h=a[n+1],l=a[n+2],d=a[n+3],u=r[s+0],p=r[s+1],x=r[s+2],g=r[s+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=x,e[t+3]=g;return}if(d!==g||c!==u||h!==p||l!==x){let b=1-o,f=c*u+h*p+l*x+d*g,_=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let M=Math.sqrt(w),A=Math.atan2(M,f*_);b=Math.sin(b*A)/M,o=Math.sin(o*A)/M}let m=o*_;if(c=c*b+u*m,h=h*b+p*m,l=l*b+x*m,d=d*b+g*m,b===1-o){let M=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=M,h*=M,l*=M,d*=M}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,a,n,r,s){let o=a[n],c=a[n+1],h=a[n+2],l=a[n+3],d=r[s],u=r[s+1],p=r[s+2],x=r[s+3];return e[t]=o*x+l*d+c*p-h*u,e[t+1]=c*x+l*u+h*d-o*p,e[t+2]=h*x+l*p+o*u-c*d,e[t+3]=l*x-o*d-c*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,n){return this._x=e,this._y=t,this._z=a,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let a=e._x,n=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,h=o(a/2),l=o(n/2),d=o(r/2),u=c(a/2),p=c(n/2),x=c(r/2);switch(s){case"XYZ":this._x=u*l*d+h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d-u*p*x;break;case"YXZ":this._x=u*l*d+h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d+u*p*x;break;case"ZXY":this._x=u*l*d-h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d-u*p*x;break;case"ZYX":this._x=u*l*d-h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d+u*p*x;break;case"YZX":this._x=u*l*d+h*p*x,this._y=h*p*d+u*l*x,this._z=h*l*x-u*p*d,this._w=h*l*d-u*p*x;break;case"XZY":this._x=u*l*d-h*p*x,this._y=h*p*d-u*l*x,this._z=h*l*x+u*p*d,this._w=h*l*d+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let a=t/2,n=Math.sin(a);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,a=t[0],n=t[4],r=t[8],s=t[1],o=t[5],c=t[9],h=t[2],l=t[6],d=t[10],u=a+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(s-n)*p}else if(a>o&&a>d){let p=2*Math.sqrt(1+a-o-d);this._w=(l-c)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(r+h)/p}else if(o>d){let p=2*Math.sqrt(1+o-a-d);this._w=(r-h)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+d-a-o);this._w=(s-n)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<Number.EPSILON?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ue(this.dot(e),-1,1)))}rotateTowards(e,t){let a=this.angleTo(e);if(a===0)return this;let n=Math.min(1,t/a);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let a=e._x,n=e._y,r=e._z,s=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=a*l+s*o+n*h-r*c,this._y=n*l+s*c+r*o-a*h,this._z=r*l+s*h+a*c-n*o,this._w=s*l-a*o-n*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let a=this._x,n=this._y,r=this._z,s=this._w,o=s*e._w+a*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=a,this._y=n,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*s+t*this._w,this._x=p*a+t*this._x,this._y=p*n+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-t)*l)/h,u=Math.sin(t*l)/h;return this._w=s*d+this._w*u,this._x=a*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),n=Math.sqrt(1-a),r=Math.sqrt(a);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,a=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ll.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,a=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*a+r[6]*n,this.y=r[1]*t+r[4]*a+r[7]*n,this.z=r[2]*t+r[5]*a+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,a=this.y,n=this.z,r=e.elements,s=1/(r[3]*t+r[7]*a+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*a+r[8]*n+r[12])*s,this.y=(r[1]*t+r[5]*a+r[9]*n+r[13])*s,this.z=(r[2]*t+r[6]*a+r[10]*n+r[14])*s,this}applyQuaternion(e){let t=this.x,a=this.y,n=this.z,r=e.x,s=e.y,o=e.z,c=e.w,h=2*(s*n-o*a),l=2*(o*t-r*n),d=2*(r*a-s*t);return this.x=t+c*h+s*d-o*l,this.y=a+c*l+o*h-r*d,this.z=n+c*d+r*l-s*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,a=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*a+r[8]*n,this.y=r[1]*t+r[5]*a+r[9]*n,this.z=r[2]*t+r[6]*a+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ue(this.x,e.x,t.x),this.y=Ue(this.y,e.y,t.y),this.z=Ue(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ue(this.x,e,t),this.y=Ue(this.y,e,t),this.z=Ue(this.z,e,t),this}clampLength(e,t){let a=this.length();return this.divideScalar(a||1).multiplyScalar(Ue(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let a=e.x,n=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=n*c-r*o,this.y=r*s-a*c,this.z=a*o-n*s,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let a=this.dot(e)/t;return Math.acos(Ue(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,a=this.y-e.y,n=this.z-e.z;return t*t+a*a+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){let n=Math.sin(t)*e;return this.x=n*Math.sin(a),this.y=Math.cos(t)*e,this.z=n*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new L,ll=new Pt,Jt=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ha.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ha.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let a=ha.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let a=e.geometry;if(a!==void 0){let r=a.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,ha):ha.fromBufferAttribute(r,s),ha.applyMatrix4(e.matrixWorld),this.expandByPoint(ha);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gr.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Gr.copy(a.boundingBox)),Gr.applyMatrix4(e.matrixWorld),this.union(Gr)}let n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ha),ha.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),Hr.subVectors(this.max,Bi),ai.subVectors(e.a,Bi),ni.subVectors(e.b,Bi),ii.subVectors(e.c,Bi),rn.subVectors(ni,ai),sn.subVectors(ii,ni),yn.subVectors(ai,ii);let t=[0,-rn.z,rn.y,0,-sn.z,sn.y,0,-yn.z,yn.y,rn.z,0,-rn.x,sn.z,0,-sn.x,yn.z,0,-yn.x,-rn.y,rn.x,0,-sn.y,sn.x,0,-yn.y,yn.x,0];return!Zo(t,ai,ni,ii,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,ai,ni,ii,Hr))?!1:(Vr.crossVectors(rn,sn),t=[Vr.x,Vr.y,Vr.z],Zo(t,ai,ni,ii,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ha).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ha).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Oa=[new L,new L,new L,new L,new L,new L,new L,new L],ha=new L,Gr=new Jt,ai=new L,ni=new L,ii=new L,rn=new L,sn=new L,yn=new L,Bi=new L,Hr=new L,Vr=new L,vn=new L;function Zo(i,e,t,a,n){for(let r=0,s=i.length-3;r<=s;r+=3){vn.fromArray(i,r);let o=n.x*Math.abs(vn.x)+n.y*Math.abs(vn.y)+n.z*Math.abs(vn.z),c=e.dot(vn),h=t.dot(vn),l=a.dot(vn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}var Zf=new Jt,ji=new L,Qo=new L,Ot=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let a=this.center;t!==void 0?a.copy(t):Zf.setFromPoints(e).getCenter(a);let n=0;for(let r=0,s=e.length;r<s;r++)n=Math.max(n,a.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);let t=ji.lengthSq();if(t>this.radius*this.radius){let a=Math.sqrt(t),n=(a-this.radius)*.5;this.center.addScaledVector(ji,n/a),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(Qo)),this.expandByPoint(ji.copy(e.center).sub(Qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},za=new L,$o=new L,Wr=new L,on=new L,ec=new L,Xr=new L,tc=new L,Pn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,za)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=za.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(za.copy(this.origin).addScaledVector(this.direction,t),za.distanceToSquared(e))}distanceSqToSegment(e,t,a,n){$o.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),on.copy(this.origin).sub($o);let r=e.distanceTo(t)*.5,s=-this.direction.dot(Wr),o=on.dot(this.direction),c=-on.dot(Wr),h=on.lengthSq(),l=Math.abs(1-s*s),d,u,p,x;if(l>0)if(d=s*c-o,u=s*o-c,x=r*l,d>=0)if(u>=-x)if(u<=x){let g=1/l;d*=g,u*=g,p=d*(d+s*u+2*o)+u*(s*d+u+2*c)+h}else u=r,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*c)+h;else u<=-x?(d=Math.max(0,-(-s*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+h):(d=Math.max(0,-(s*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h);else u=s>0?-r:r,d=Math.max(0,-(s*u+o)),p=-d*d+u*(u+2*c)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy($o).addScaledVector(Wr,u),p}intersectSphere(e,t){za.subVectors(e.center,this.origin);let a=za.dot(this.direction),n=za.dot(za)-a*a,r=e.radius*e.radius;if(n>r)return null;let s=Math.sqrt(r-n),o=a-s,c=a+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){let a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,n,r,s,o,c,h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(a=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(a=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),l>=0?(r=(e.min.y-u.y)*l,s=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,s=(e.min.y-u.y)*l),a>s||r>n||((r>a||isNaN(a))&&(a=r),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),a>c||o>n)||((o>a||a!==a)&&(a=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(a>=0?a:n,t)}intersectsBox(e){return this.intersectBox(e,za)!==null}intersectTriangle(e,t,a,n,r){ec.subVectors(t,e),Xr.subVectors(a,e),tc.crossVectors(ec,Xr);let s=this.direction.dot(tc),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;on.subVectors(this.origin,e);let c=o*this.direction.dot(Xr.crossVectors(on,Xr));if(c<0)return null;let h=o*this.direction.dot(ec.cross(on));if(h<0||c+h>s)return null;let l=-o*on.dot(tc);return l<0?null:this.at(l/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,a,n,r,s,o,c,h,l,d,u,p,x,g,b){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,n,r,s,o,c,h,l,d,u,p,x,g,b)}set(e,t,a,n,r,s,o,c,h,l,d,u,p,x,g,b){let f=this.elements;return f[0]=e,f[4]=t,f[8]=a,f[12]=n,f[1]=r,f[5]=s,f[9]=o,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=u,f[3]=p,f[7]=x,f[11]=g,f[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){let t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,a=e.elements,n=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),s=1/ri.setFromMatrixColumn(e,2).length();return t[0]=a[0]*n,t[1]=a[1]*n,t[2]=a[2]*n,t[3]=0,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=0,t[8]=a[8]*s,t[9]=a[9]*s,t[10]=a[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,a=e.x,n=e.y,r=e.z,s=Math.cos(a),o=Math.sin(a),c=Math.cos(n),h=Math.sin(n),l=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=s*l,p=s*d,x=o*l,g=o*d;t[0]=c*l,t[4]=-c*d,t[8]=h,t[1]=p+x*h,t[5]=u-g*h,t[9]=-o*c,t[2]=g-u*h,t[6]=x+p*h,t[10]=s*c}else if(e.order==="YXZ"){let u=c*l,p=c*d,x=h*l,g=h*d;t[0]=u+g*o,t[4]=x*o-p,t[8]=s*h,t[1]=s*d,t[5]=s*l,t[9]=-o,t[2]=p*o-x,t[6]=g+u*o,t[10]=s*c}else if(e.order==="ZXY"){let u=c*l,p=c*d,x=h*l,g=h*d;t[0]=u-g*o,t[4]=-s*d,t[8]=x+p*o,t[1]=p+x*o,t[5]=s*l,t[9]=g-u*o,t[2]=-s*h,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){let u=s*l,p=s*d,x=o*l,g=o*d;t[0]=c*l,t[4]=x*h-p,t[8]=u*h+g,t[1]=c*d,t[5]=g*h+u,t[9]=p*h-x,t[2]=-h,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){let u=s*c,p=s*h,x=o*c,g=o*h;t[0]=c*l,t[4]=g-u*d,t[8]=x*d+p,t[1]=d,t[5]=s*l,t[9]=-o*l,t[2]=-h*l,t[6]=p*d+x,t[10]=u-g*d}else if(e.order==="XZY"){let u=s*c,p=s*h,x=o*c,g=o*h;t[0]=c*l,t[4]=-d,t[8]=h*l,t[1]=u*d+g,t[5]=s*l,t[9]=p*d-x,t[2]=x*d-p,t[6]=o*l,t[10]=g*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qf,e,$f)}lookAt(e,t,a){let n=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),cn.crossVectors(a,Xt),cn.lengthSq()===0&&(Math.abs(a.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),cn.crossVectors(a,Xt)),cn.normalize(),qr.crossVectors(Xt,cn),n[0]=cn.x,n[4]=qr.x,n[8]=Xt.x,n[1]=cn.y,n[5]=qr.y,n[9]=Xt.y,n[2]=cn.z,n[6]=qr.z,n[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let a=e.elements,n=t.elements,r=this.elements,s=a[0],o=a[4],c=a[8],h=a[12],l=a[1],d=a[5],u=a[9],p=a[13],x=a[2],g=a[6],b=a[10],f=a[14],_=a[3],w=a[7],m=a[11],M=a[15],A=n[0],T=n[4],R=n[8],v=n[12],y=n[1],k=n[5],O=n[9],C=n[13],U=n[2],X=n[6],B=n[10],V=n[14],z=n[3],Z=n[7],ae=n[11],de=n[15];return r[0]=s*A+o*y+c*U+h*z,r[4]=s*T+o*k+c*X+h*Z,r[8]=s*R+o*O+c*B+h*ae,r[12]=s*v+o*C+c*V+h*de,r[1]=l*A+d*y+u*U+p*z,r[5]=l*T+d*k+u*X+p*Z,r[9]=l*R+d*O+u*B+p*ae,r[13]=l*v+d*C+u*V+p*de,r[2]=x*A+g*y+b*U+f*z,r[6]=x*T+g*k+b*X+f*Z,r[10]=x*R+g*O+b*B+f*ae,r[14]=x*v+g*C+b*V+f*de,r[3]=_*A+w*y+m*U+M*z,r[7]=_*T+w*k+m*X+M*Z,r[11]=_*R+w*O+m*B+M*ae,r[15]=_*v+w*C+m*V+M*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],a=e[4],n=e[8],r=e[12],s=e[1],o=e[5],c=e[9],h=e[13],l=e[2],d=e[6],u=e[10],p=e[14],x=e[3],g=e[7],b=e[11],f=e[15];return x*(+r*c*d-n*h*d-r*o*u+a*h*u+n*o*p-a*c*p)+g*(+t*c*p-t*h*u+r*s*u-n*s*p+n*h*l-r*c*l)+b*(+t*h*d-t*o*p-r*s*d+a*s*p+r*o*l-a*h*l)+f*(-n*o*l-t*c*d+t*o*u+n*s*d-a*s*u+a*c*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=a),this}invert(){let e=this.elements,t=e[0],a=e[1],n=e[2],r=e[3],s=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],x=e[12],g=e[13],b=e[14],f=e[15],_=d*b*h-g*u*h+g*c*p-o*b*p-d*c*f+o*u*f,w=x*u*h-l*b*h-x*c*p+s*b*p+l*c*f-s*u*f,m=l*g*h-x*d*h+x*o*p-s*g*p-l*o*f+s*d*f,M=x*d*c-l*g*c-x*o*u+s*g*u+l*o*b-s*d*b,A=t*_+a*w+n*m+r*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=_*T,e[1]=(g*u*r-d*b*r-g*n*p+a*b*p+d*n*f-a*u*f)*T,e[2]=(o*b*r-g*c*r+g*n*h-a*b*h-o*n*f+a*c*f)*T,e[3]=(d*c*r-o*u*r-d*n*h+a*u*h+o*n*p-a*c*p)*T,e[4]=w*T,e[5]=(l*b*r-x*u*r+x*n*p-t*b*p-l*n*f+t*u*f)*T,e[6]=(x*c*r-s*b*r-x*n*h+t*b*h+s*n*f-t*c*f)*T,e[7]=(s*u*r-l*c*r+l*n*h-t*u*h-s*n*p+t*c*p)*T,e[8]=m*T,e[9]=(x*d*r-l*g*r-x*a*p+t*g*p+l*a*f-t*d*f)*T,e[10]=(s*g*r-x*o*r+x*a*h-t*g*h-s*a*f+t*o*f)*T,e[11]=(l*o*r-s*d*r-l*a*h+t*d*h+s*a*p-t*o*p)*T,e[12]=M*T,e[13]=(l*g*n-x*d*n+x*a*u-t*g*u-l*a*b+t*d*b)*T,e[14]=(x*o*n-s*g*n-x*a*c+t*g*c+s*a*b-t*o*b)*T,e[15]=(s*d*n-l*o*n+l*a*c-t*d*c-s*a*u+t*o*u)*T,this}scale(e){let t=this.elements,a=e.x,n=e.y,r=e.z;return t[0]*=a,t[4]*=n,t[8]*=r,t[1]*=a,t[5]*=n,t[9]*=r,t[2]*=a,t[6]*=n,t[10]*=r,t[3]*=a,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,n))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let a=Math.cos(t),n=Math.sin(t),r=1-a,s=e.x,o=e.y,c=e.z,h=r*s,l=r*o;return this.set(h*s+a,h*o-n*c,h*c+n*o,0,h*o+n*c,l*o+a,l*c-n*s,0,h*c-n*o,l*c+n*s,r*c*c+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,n,r,s){return this.set(1,a,r,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,a){let n=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,h=r+r,l=s+s,d=o+o,u=r*h,p=r*l,x=r*d,g=s*l,b=s*d,f=o*d,_=c*h,w=c*l,m=c*d,M=a.x,A=a.y,T=a.z;return n[0]=(1-(g+f))*M,n[1]=(p+m)*M,n[2]=(x-w)*M,n[3]=0,n[4]=(p-m)*A,n[5]=(1-(u+f))*A,n[6]=(b+_)*A,n[7]=0,n[8]=(x+w)*T,n[9]=(b-_)*T,n[10]=(1-(u+g))*T,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,a){let n=this.elements,r=ri.set(n[0],n[1],n[2]).length(),s=ri.set(n[4],n[5],n[6]).length(),o=ri.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],la.copy(this);let h=1/r,l=1/s,d=1/o;return la.elements[0]*=h,la.elements[1]*=h,la.elements[2]*=h,la.elements[4]*=l,la.elements[5]*=l,la.elements[6]*=l,la.elements[8]*=d,la.elements[9]*=d,la.elements[10]*=d,t.setFromRotationMatrix(la),a.x=r,a.y=s,a.z=o,this}makePerspective(e,t,a,n,r,s,o=_a){let c=this.elements,h=2*r/(t-e),l=2*r/(a-n),d=(t+e)/(t-e),u=(a+n)/(a-n),p,x;if(o===_a)p=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Qi)p=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,a,n,r,s,o=_a){let c=this.elements,h=1/(t-e),l=1/(a-n),d=1/(s-r),u=(t+e)*h,p=(a+n)*l,x,g;if(o===_a)x=(s+r)*d,g=-2*d;else if(o===Qi)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,a=e.elements;for(let n=0;n<16;n++)if(t[n]!==a[n])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){let a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}},ri=new L,la=new Ce,Qf=new L(0,0,0),$f=new L(1,1,1),cn=new L,qr=new L,Xt=new L,dl=new Ce,fl=new Pt,pa=class i{constructor(e=0,t=0,a=0,n=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,n=this._order){return this._x=e,this._y=t,this._z=a,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){let n=e.elements,r=n[0],s=n[4],o=n[8],c=n[1],h=n[5],l=n[9],d=n[2],u=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ue(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return dl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dl,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pa.DEFAULT_ORDER="XYZ";var tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},eu=0,ul=new L,si=new Pt,Ba=new Ce,Kr=new L,Gi=new L,tu=new L,au=new Pt,bl=new L(1,0,0),pl=new L(0,1,0),ml=new L(0,0,1),gl={type:"added"},nu={type:"removed"},oi={type:"childadded",child:null},ac={type:"childremoved",child:null},ot=class i extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new pa,a=new Pt,n=new L(1,1,1);function r(){a.setFromEuler(t,!1)}function s(){t.setFromQuaternion(a,void 0,!1)}t._onChange(r),a._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ne}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(pl,e)}rotateZ(e){return this.rotateOnAxis(ml,e)}translateOnAxis(e,t){return ul.copy(e).applyQuaternion(this.quaternion),this.position.add(ul.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(pl,e)}translateZ(e){return this.translateOnAxis(ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ba.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Kr.copy(e):Kr.set(e,t,a);let n=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ba.lookAt(Gi,Kr,this.up):Ba.lookAt(Kr,Gi,this.up),this.quaternion.setFromRotationMatrix(Ba),n&&(Ba.extractRotation(n.matrixWorld),si.setFromRotationMatrix(Ba),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gl),oi.child=e,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),ac.child=e,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gl),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,n=this.children.length;a<n;a++){let s=this.children[a].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,au,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let a=0,n=t.length;a<n;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(e.animations,c))}}if(t){let o=s(e.geometries),c=s(e.materials),h=s(e.textures),l=s(e.images),d=s(e.shapes),u=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(a.geometries=o),c.length>0&&(a.materials=c),h.length>0&&(a.textures=h),l.length>0&&(a.images=l),d.length>0&&(a.shapes=d),u.length>0&&(a.skeletons=u),p.length>0&&(a.animations=p),x.length>0&&(a.nodes=x)}return a.object=n,a;function s(o){let c=[];for(let h in o){let l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){let n=e.children[a];this.add(n.clone())}return this}};ot.DEFAULT_UP=new L(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var da=new L,ja=new L,nc=new L,Ga=new L,ci=new L,hi=new L,xl=new L,ic=new L,rc=new L,sc=new L,oc=new Je,cc=new Je,hc=new Je,dn=class i{constructor(e=new L,t=new L,a=new L){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,n){n.subVectors(a,t),da.subVectors(e,t),n.cross(da);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,a,n,r){da.subVectors(n,t),ja.subVectors(a,t),nc.subVectors(e,t);let s=da.dot(da),o=da.dot(ja),c=da.dot(nc),h=ja.dot(ja),l=ja.dot(nc),d=s*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(h*c-o*l)*u,x=(s*l-o*c)*u;return r.set(1-p-x,x,p)}static containsPoint(e,t,a,n){return this.getBarycoord(e,t,a,n,Ga)===null?!1:Ga.x>=0&&Ga.y>=0&&Ga.x+Ga.y<=1}static getInterpolation(e,t,a,n,r,s,o,c){return this.getBarycoord(e,t,a,n,Ga)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ga.x),c.addScaledVector(s,Ga.y),c.addScaledVector(o,Ga.z),c)}static getInterpolatedAttribute(e,t,a,n,r,s){return oc.setScalar(0),cc.setScalar(0),hc.setScalar(0),oc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,a),hc.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(oc,r.x),s.addScaledVector(cc,r.y),s.addScaledVector(hc,r.z),s}static isFrontFacing(e,t,a,n){return da.subVectors(a,t),ja.subVectors(e,t),da.cross(ja).dot(n)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,n){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,a,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return da.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),da.cross(ja).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,n,r){return i.getInterpolation(e,this.a,this.b,this.c,t,a,n,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let a=this.a,n=this.b,r=this.c,s,o;ci.subVectors(n,a),hi.subVectors(r,a),ic.subVectors(e,a);let c=ci.dot(ic),h=hi.dot(ic);if(c<=0&&h<=0)return t.copy(a);rc.subVectors(e,n);let l=ci.dot(rc),d=hi.dot(rc);if(l>=0&&d<=l)return t.copy(n);let u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(a).addScaledVector(ci,s);sc.subVectors(e,r);let p=ci.dot(sc),x=hi.dot(sc);if(x>=0&&p<=x)return t.copy(r);let g=p*h-c*x;if(g<=0&&h>=0&&x<=0)return o=h/(h-x),t.copy(a).addScaledVector(hi,o);let b=l*x-p*d;if(b<=0&&d-l>=0&&p-x>=0)return xl.subVectors(r,n),o=(d-l)/(d-l+(p-x)),t.copy(n).addScaledVector(xl,o);let f=1/(b+g+u);return s=g*f,o=u*f,t.copy(a).addScaledVector(ci,s).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,t),this}setRGB(e,t,a,n=ze.workingColorSpace){return this.r=e,this.g=t,this.b=a,ze.toWorkingColorSpace(this,n),this}setHSL(e,t,a,n=ze.workingColorSpace){if(e=qc(e,1),t=Ue(t,0,1),a=Ue(a,0,1),t===0)this.r=this.g=this.b=a;else{let r=a<=.5?a*(1+t):a+t-a*t,s=2*a-r;this.r=lc(s,r,e+1/3),this.g=lc(s,r,e),this.b=lc(s,r,e-1/3)}return ze.toWorkingColorSpace(this,n),this}setStyle(e,t=ut){function a(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return a(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ut){let a=Dd[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ut){return ze.fromWorkingColorSpace(Rt.copy(this),e),Math.round(Ue(Rt.r*255,0,255))*65536+Math.round(Ue(Rt.g*255,0,255))*256+Math.round(Ue(Rt.b*255,0,255))}getHexString(e=ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ze.workingColorSpace){ze.fromWorkingColorSpace(Rt.copy(this),t);let a=Rt.r,n=Rt.g,r=Rt.b,s=Math.max(a,n,r),o=Math.min(a,n,r),c,h,l=(o+s)/2;if(o===s)c=0,h=0;else{let d=s-o;switch(h=l<=.5?d/(s+o):d/(2-s-o),s){case a:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-a)/d+2;break;case r:c=(a-n)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=ze.workingColorSpace){return ze.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=ut){ze.fromWorkingColorSpace(Rt.copy(this),e);let t=Rt.r,a=Rt.g,n=Rt.b;return e!==ut?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(n*255)})`}offsetHSL(e,t,a){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Jr);let a=Ji(hn.h,Jr.h,t),n=Ji(hn.s,Jr.s,t),r=Ji(hn.l,Jr.l,t);return this.setHSL(a,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,a=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*a+r[6]*n,this.g=r[1]*t+r[4]*a+r[7]*n,this.b=r[2]*t+r[5]*a+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new we;we.NAMES=Dd;var iu=0,zt=class extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iu++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Tn,this.side=ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=us,this.blendDst=bs,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Rn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wn,this.stencilZFail=wn,this.stencilZPass=wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(a):n&&n.isVector3&&a&&a.isVector3?n.copy(a):this[t]=a}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Tn&&(a.blending=this.blending),this.side!==ba&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==us&&(a.blendSrc=this.blendSrc),this.blendDst!==bs&&(a.blendDst=this.blendDst),this.blendEquation!==fn&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Rn&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wn&&(a.stencilFail=this.stencilFail),this.stencilZFail!==wn&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==wn&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function n(r){let s=[];for(let o in r){let c=r[o];delete c.metadata,s.push(c)}return s}if(t){let r=n(e.textures),s=n(e.images);r.length>0&&(a.textures=r),s.length>0&&(a.images=s)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,a=null;if(t!==null){let n=t.length;a=new Array(n);for(let r=0;r!==n;++r)a[r]=t[r].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ma=class extends zt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pt=new L,Yr=new Be,mt=class{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=ps,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[a+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix3(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)pt.fromBufferAttribute(this,t),pt.applyMatrix4(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)pt.fromBufferAttribute(this,t),pt.applyNormalMatrix(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)pt.fromBufferAttribute(this,t),pt.transformDirection(e),this.setXYZ(t,pt.x,pt.y,pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=fa(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$e(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=n,this}setXYZW(e,t,a,n,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ps&&(e.usage=this.usage),e}};var ar=class extends mt{constructor(e,t,a){super(new Uint16Array(e),t,a)}};var nr=class extends mt{constructor(e,t,a){super(new Uint32Array(e),t,a)}};var Kt=class extends mt{constructor(e,t,a){super(new Float32Array(e),t,a)}},ru=0,na=new Ce,dc=new ot,li=new L,qt=new Jt,Hi=new Jt,yt=new L,Yt=class i extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jc(e)?nr:ar)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let a=this.attributes.normal;if(a!==void 0){let r=new Ne().getNormalMatrix(e);a.applyNormalMatrix(r),a.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return na.makeRotationFromQuaternion(e),this.applyMatrix4(na),this}rotateX(e){return na.makeRotationX(e),this.applyMatrix4(na),this}rotateY(e){return na.makeRotationY(e),this.applyMatrix4(na),this}rotateZ(e){return na.makeRotationZ(e),this.applyMatrix4(na),this}translate(e,t,a){return na.makeTranslation(e,t,a),this.applyMatrix4(na),this}scale(e,t,a){return na.makeScale(e,t,a),this.applyMatrix4(na),this}lookAt(e){return dc.lookAt(e),dc.updateMatrix(),this.applyMatrix4(dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let a=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];a.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Kt(a,3))}else{let a=Math.min(e.length,t.count);for(let n=0;n<a;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,n=t.length;a<n;a++){let r=t[a];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ot);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let a=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){let o=t[r];Hi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(qt.min,Hi.min),qt.expandByPoint(yt),yt.addVectors(qt.max,Hi.max),qt.expandByPoint(yt)):(qt.expandByPoint(Hi.min),qt.expandByPoint(Hi.max))}qt.getCenter(a);let n=0;for(let r=0,s=e.count;r<s;r++)yt.fromBufferAttribute(e,r),n=Math.max(n,a.distanceToSquared(yt));if(t)for(let r=0,s=t.length;r<s;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)yt.fromBufferAttribute(o,h),c&&(li.fromBufferAttribute(e,h),yt.add(li)),n=Math.max(n,a.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let a=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*a.count),4));let s=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<a.count;R++)o[R]=new L,c[R]=new L;let h=new L,l=new L,d=new L,u=new Be,p=new Be,x=new Be,g=new L,b=new L;function f(R,v,y){h.fromBufferAttribute(a,R),l.fromBufferAttribute(a,v),d.fromBufferAttribute(a,y),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),x.fromBufferAttribute(r,y),l.sub(h),d.sub(h),p.sub(u),x.sub(u);let k=1/(p.x*x.y-x.x*p.y);isFinite(k)&&(g.copy(l).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(k),b.copy(d).multiplyScalar(p.x).addScaledVector(l,-x.x).multiplyScalar(k),o[R].add(g),o[v].add(g),o[y].add(g),c[R].add(b),c[v].add(b),c[y].add(b))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,v=_.length;R<v;++R){let y=_[R],k=y.start,O=y.count;for(let C=k,U=k+O;C<U;C+=3)f(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let w=new L,m=new L,M=new L,A=new L;function T(R){M.fromBufferAttribute(n,R),A.copy(M);let v=o[R];w.copy(v),w.sub(M.multiplyScalar(M.dot(v))).normalize(),m.crossVectors(A,v);let k=m.dot(c[R])<0?-1:1;s.setXYZW(R,w.x,w.y,w.z,k)}for(let R=0,v=_.length;R<v;++R){let y=_[R],k=y.start,O=y.count;for(let C=k,U=k+O;C<U;C+=3)T(e.getX(C+0)),T(e.getX(C+1)),T(e.getX(C+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new mt(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let u=0,p=a.count;u<p;u++)a.setXYZ(u,0,0,0);let n=new L,r=new L,s=new L,o=new L,c=new L,h=new L,l=new L,d=new L;if(e)for(let u=0,p=e.count;u<p;u+=3){let x=e.getX(u+0),g=e.getX(u+1),b=e.getX(u+2);n.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),l.subVectors(s,r),d.subVectors(n,r),l.cross(d),o.fromBufferAttribute(a,x),c.fromBufferAttribute(a,g),h.fromBufferAttribute(a,b),o.add(l),c.add(l),h.add(l),a.setXYZ(x,o.x,o.y,o.z),a.setXYZ(g,c.x,c.y,c.z),a.setXYZ(b,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),l.subVectors(s,r),d.subVectors(n,r),l.cross(d),a.setXYZ(u+0,l.x,l.y,l.z),a.setXYZ(u+1,l.x,l.y,l.z),a.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){let h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l),p=0,x=0;for(let g=0,b=c.length;g<b;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*l;for(let f=0;f<l;f++)u[x++]=h[p++]}return new mt(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,a=this.index.array,n=this.attributes;for(let o in n){let c=n[o],h=e(c,a);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){let u=h[l],p=e(u,a);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,c=s.length;o<c;o++){let h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let a=this.attributes;for(let c in a){let h=a[c];e.data.attributes[c]=h.toJSON(e.data)}let n={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];l.push(p.toJSON(e.data))}l.length>0&&(n[c]=l,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let a=e.index;a!==null&&this.setIndex(a.clone(t));let n=e.attributes;for(let h in n){let l=n[h];this.setAttribute(h,l.clone(t))}let r=e.morphAttributes;for(let h in r){let l=[],d=r[h];for(let u=0,p=d.length;u<p;u++)l.push(d[u].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;let s=e.groups;for(let h=0,l=s.length;h<l;h++){let d=s[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yl=new Ce,_n=new Pn,Zr=new Ot,vl=new L,Qr=new L,$r=new L,es=new L,fc=new L,ts=new L,_l=new L,as=new L,St=class extends ot{constructor(e=new Yt,t=new ma){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let a=this.geometry,n=a.attributes.position,r=a.morphAttributes.position,s=a.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=o[c],d=r[c];l!==0&&(fc.fromBufferAttribute(d,e),s?ts.addScaledVector(fc,l):ts.addScaledVector(fc.sub(t),l))}t.add(ts)}return t}raycast(e,t){let a=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Zr.copy(a.boundingSphere),Zr.applyMatrix4(r),_n.copy(e.ray).recast(e.near),!(Zr.containsPoint(_n.origin)===!1&&(_n.intersectSphere(Zr,vl)===null||_n.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(yl.copy(r).invert(),_n.copy(e.ray).applyMatrix4(yl),!(a.boundingBox!==null&&_n.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,_n)))}_computeIntersections(e,t,a){let n,r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,g=u.length;x<g;x++){let b=u[x],f=s[b.materialIndex],_=Math.max(b.start,p.start),w=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let m=_,M=w;m<M;m+=3){let A=o.getX(m),T=o.getX(m+1),R=o.getX(m+2);n=ns(this,f,e,a,h,l,d,A,T,R),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=b.materialIndex,t.push(n))}}else{let x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let b=x,f=g;b<f;b+=3){let _=o.getX(b),w=o.getX(b+1),m=o.getX(b+2);n=ns(this,s,e,a,h,l,d,_,w,m),n&&(n.faceIndex=Math.floor(b/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let x=0,g=u.length;x<g;x++){let b=u[x],f=s[b.materialIndex],_=Math.max(b.start,p.start),w=Math.min(c.count,Math.min(b.start+b.count,p.start+p.count));for(let m=_,M=w;m<M;m+=3){let A=m,T=m+1,R=m+2;n=ns(this,f,e,a,h,l,d,A,T,R),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=b.materialIndex,t.push(n))}}else{let x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let b=x,f=g;b<f;b+=3){let _=b,w=b+1,m=b+2;n=ns(this,s,e,a,h,l,d,_,w,m),n&&(n.faceIndex=Math.floor(b/3),t.push(n))}}}};function su(i,e,t,a,n,r,s,o){let c;if(e.side===Lt?c=a.intersectTriangle(s,r,n,!0,o):c=a.intersectTriangle(n,r,s,e.side===ba,o),c===null)return null;as.copy(o),as.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(as);return h<t.near||h>t.far?null:{distance:h,point:as.clone(),object:i}}function ns(i,e,t,a,n,r,s,o,c,h){i.getVertexPosition(o,Qr),i.getVertexPosition(c,$r),i.getVertexPosition(h,es);let l=su(i,e,t,a,Qr,$r,es,_l);if(l){let d=new L;dn.getBarycoord(_l,Qr,$r,es,d),n&&(l.uv=dn.getInterpolatedAttribute(n,o,c,h,d,new Be)),r&&(l.uv1=dn.getInterpolatedAttribute(r,o,c,h,d,new Be)),s&&(l.normal=dn.getInterpolatedAttribute(s,o,c,h,d,new L),l.normal.dot(a.direction)>0&&l.normal.multiplyScalar(-1));let u={a:o,b:c,c:h,normal:new L,materialIndex:0};dn.getNormal(Qr,$r,es,u.normal),l.face=u,l.barycoord=d}return l}var gi=class i extends Yt{constructor(e=1,t=1,a=1,n=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:n,heightSegments:r,depthSegments:s};let o=this;n=Math.floor(n),r=Math.floor(r),s=Math.floor(s);let c=[],h=[],l=[],d=[],u=0,p=0;x("z","y","x",-1,-1,a,t,e,s,r,0),x("z","y","x",1,-1,a,t,-e,s,r,1),x("x","z","y",1,1,e,a,t,n,s,2),x("x","z","y",1,-1,e,a,-t,n,s,3),x("x","y","z",1,-1,e,t,a,n,r,4),x("x","y","z",-1,-1,e,t,-a,n,r,5),this.setIndex(c),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(d,2));function x(g,b,f,_,w,m,M,A,T,R,v){let y=m/T,k=M/R,O=m/2,C=M/2,U=A/2,X=T+1,B=R+1,V=0,z=0,Z=new L;for(let ae=0;ae<B;ae++){let de=ae*k-C;for(let Ae=0;Ae<X;Ae++){let je=Ae*y-O;Z[g]=je*_,Z[b]=de*w,Z[f]=U,h.push(Z.x,Z.y,Z.z),Z[g]=0,Z[b]=0,Z[f]=A>0?1:-1,l.push(Z.x,Z.y,Z.z),d.push(Ae/T),d.push(1-ae/R),V+=1}}for(let ae=0;ae<R;ae++)for(let de=0;de<T;de++){let Ae=u+de+X*ae,je=u+de+X*(ae+1),W=u+(de+1)+X*(ae+1),$=u+(de+1)+X*ae;c.push(Ae,je,$),c.push(je,W,$),z+=6}o.addGroup(p,z,v),p+=z,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vn(i){let e={};for(let t in i){e[t]={};for(let a in i[t]){let n=i[t][a];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=n.clone():Array.isArray(n)?e[t][a]=n.slice():e[t][a]=n}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let a=Vn(i[t]);for(let n in a)e[n]=a[n]}return e}function ou(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}var Ld={clone:Vn,merge:It},cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ga=class extends zt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=hu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vn(e.uniforms),this.uniformsGroups=ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let a={};for(let n in this.extensions)this.extensions[n]===!0&&(a[n]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}},ir=class extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=_a}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ln=new L,Ml=new Be,wl=new Be,vt=class extends ir{constructor(e=50,t=1,a=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nn*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ln.x,ln.y).multiplyScalar(-e/ln.z),ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ln.x,ln.y).multiplyScalar(-e/ln.z)}getViewSize(e,t){return this.getViewBounds(e,Ml,wl),t.subVectors(wl,Ml)}setViewOffset(e,t,a,n,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ki*.5*this.fov)/this.zoom,a=2*t,n=this.aspect*a,r=-.5*n,s=this.view;if(this.view!==null&&this.view.enabled){let c=s.fullWidth,h=s.fullHeight;r+=s.offsetX*n/c,t-=s.offsetY*a/h,n*=s.width/c,a*=s.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},di=-90,fi=1,ys=class extends ot{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new vt(di,fi,e,t);n.layers=this.layers,this.add(n);let r=new vt(di,fi,e,t);r.layers=this.layers,this.add(r);let s=new vt(di,fi,e,t);s.layers=this.layers,this.add(s);let o=new vt(di,fi,e,t);o.layers=this.layers,this.add(o);let c=new vt(di,fi,e,t);c.layers=this.layers,this.add(c);let h=new vt(di,fi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[a,n,r,s,o,c]=t;for(let h of t)this.remove(h);if(e===_a)a.up.set(0,1,0),a.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qi)a.up.set(0,-1,0),a.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:a,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,s,o,c,h,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,n),e.render(t,r),e.setRenderTarget(a,1,n),e.render(t,s),e.setRenderTarget(a,2,n),e.render(t,o),e.setRenderTarget(a,3,n),e.render(t,c),e.setRenderTarget(a,4,n),e.render(t,h),a.texture.generateMipmaps=g,e.setRenderTarget(a,5,n),e.render(t,l),e.setRenderTarget(d,u,p),e.xr.enabled=x,a.texture.needsPMREMUpdate=!0}},rr=class extends _t{constructor(e,t,a,n,r,s,o,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:zn,super(e,t,a,n,r,s,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vs=class extends wa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let a={width:e,height:e,depth:1},n=[a,a,a,a,a,a];this.texture=new rr(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new gi(5,5,5),r=new ga({name:"CubemapFromEquirect",uniforms:Vn(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Lt,blending:Za});r.uniforms.tEquirect.value=t;let s=new St(n,r),o=t.minFilter;return t.minFilter===xa&&(t.minFilter=Dt),new ys(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,a,n){let r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,a,n);e.setRenderTarget(r)}};var sr=class extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pa,this.environmentIntensity=1,this.environmentRotation=new pa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},xi=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ps,this.updateRanges=[],this.version=0,this.uuid=ua()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[a+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nt=new L,yi=class i{constructor(e,t,a,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=fa(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$e(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fa(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fa(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fa(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fa(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=n,this}setXYZW(e,t,a,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),a=$e(a,this.array),n=$e(n,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let n=a*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let a=0;a<this.count;a++){let n=a*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Al=new L,Sl=new Je,El=new Je,lu=new L,Tl=new Ce,is=new L,uc=new Ot,Rl=new Ce,bc=new Pn,or=class extends St{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yc,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,is),this.boundingBox.expandByPoint(is)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ot),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,is),this.boundingSphere.expandByPoint(is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let a=this.material,n=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(n),e.ray.intersectsSphere(uc)!==!1&&(Rl.copy(n).invert(),bc.copy(e.ray).applyMatrix4(Rl),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Je,t=this.geometry.attributes.skinWeight;for(let a=0,n=t.count;a<n;a++){e.fromBufferAttribute(t,a);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let a=this.skeleton,n=this.geometry;Sl.fromBufferAttribute(n.attributes.skinIndex,e),El.fromBufferAttribute(n.attributes.skinWeight,e),Al.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let s=El.getComponent(r);if(s!==0){let o=Sl.getComponent(r);Tl.multiplyMatrices(a.bones[o].matrixWorld,a.boneInverses[o]),t.addScaledVector(lu.copy(Al).applyMatrix4(Tl),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},vi=class extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},cr=class extends _t{constructor(e=null,t=1,a=1,n,r,s,o,c,h=wt,l=wt,d,u){super(null,s,o,c,h,l,n,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Il=new Ce,du=new Ce,hr=class i{constructor(e=[],t=[]){this.uuid=ua(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,n=this.bones.length;a<n;a++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let a=new Ce;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){let e=this.bones,t=this.boneInverses,a=this.boneMatrices,n=this.boneTexture;for(let r=0,s=e.length;r<s;r++){let o=e[r]?e[r].matrixWorld:du;Il.multiplyMatrices(o,t[r]),Il.toArray(a,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let a=new cr(t,e,e,$t,ia);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,n=e.bones.length;a<n;a++){let r=e.bones[a],s=t[r];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),s=new vi),this.bones.push(s),this.boneInverses.push(new Ce().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,a=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let s=t[n];e.bones.push(s.uuid);let o=a[n];e.boneInverses.push(o.toArray())}return e}},bn=class extends mt{constructor(e,t,a,n=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ui=new Ce,kl=new Ce,rs=[],Cl=new Jt,fu=new Ce,Vi=new St,Wi=new Ot,lr=class extends St{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bn(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<a;n++)this.setMatrixAt(n,fu)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,ui),Cl.copy(e.boundingBox).applyMatrix4(ui),this.boundingBox.union(Cl)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ot),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,ui),Wi.copy(e.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let a=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=a.length+1,s=e*r+1;for(let o=0;o<a.length;o++)a[o]=n[s+o]}raycast(e,t){let a=this.matrixWorld,n=this.count;if(Vi.geometry=this.geometry,Vi.material=this.material,Vi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(a),e.ray.intersectsSphere(Wi)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,ui),kl.multiplyMatrices(a,ui),Vi.matrixWorld=kl,Vi.raycast(e,rs);for(let s=0,o=rs.length;s<o;s++){let c=rs[s];c.instanceId=r,c.object=this,t.push(c)}rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let a=t.morphTargetInfluences,n=a.length+1;this.morphTexture===null&&(this.morphTexture=new cr(new Float32Array(n*this.count),n,this.count,qs,ia));let r=this.morphTexture.source.data.data,s=0;for(let h=0;h<a.length;h++)s+=a[h];let o=this.geometry.morphTargetsRelative?1:1-s,c=n*e;r[c]=o,r.set(a,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},pc=new L,uu=new L,bu=new Ne,ya=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,n){return this.normal.set(e,t,a),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){let n=pc.subVectors(a,t).cross(uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let a=e.delta(pc),n=this.normal.dot(a);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let a=t||bu.getNormalMatrix(e),n=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(a).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mn=new Ot,ss=new L,_i=class{constructor(e=new ya,t=new ya,a=new ya,n=new ya,r=new ya,s=new ya){this.planes=[e,t,a,n,r,s]}set(e,t,a,n,r,s){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(a),o[3].copy(n),o[4].copy(r),o[5].copy(s),this}copy(e){let t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=_a){let a=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],c=n[3],h=n[4],l=n[5],d=n[6],u=n[7],p=n[8],x=n[9],g=n[10],b=n[11],f=n[12],_=n[13],w=n[14],m=n[15];if(a[0].setComponents(c-r,u-h,b-p,m-f).normalize(),a[1].setComponents(c+r,u+h,b+p,m+f).normalize(),a[2].setComponents(c+s,u+l,b+x,m+_).normalize(),a[3].setComponents(c-s,u-l,b-x,m-_).normalize(),a[4].setComponents(c-o,u-d,b-g,m-w).normalize(),t===_a)a[5].setComponents(c+o,u+d,b+g,m+w).normalize();else if(t===Qi)a[5].setComponents(o,d,g,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(e){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(e){let t=this.planes,a=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(a)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let a=0;a<6;a++){let n=t[a];if(ss.x=n.normal.x>0?e.max.x:e.min.x,ss.y=n.normal.y>0?e.max.y:e.min.y,ss.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mi=class extends zt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_s=new L,Ms=new L,Nl=new Ce,Xi=new Pn,os=new Ot,mc=new L,Pl=new L,Dn=class extends ot{constructor(e=new Yt,t=new Mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[0];for(let n=1,r=t.count;n<r;n++)_s.fromBufferAttribute(t,n-1),Ms.fromBufferAttribute(t,n),a[n]=a[n-1],a[n]+=_s.distanceTo(Ms);e.setAttribute("lineDistance",new Kt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let a=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),os.copy(a.boundingSphere),os.applyMatrix4(n),os.radius+=r,e.ray.intersectsSphere(os)===!1)return;Nl.copy(n).invert(),Xi.copy(e.ray).applyMatrix4(Nl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=a.index,u=a.attributes.position;if(l!==null){let p=Math.max(0,s.start),x=Math.min(l.count,s.start+s.count);for(let g=p,b=x-1;g<b;g+=h){let f=l.getX(g),_=l.getX(g+1),w=cs(this,e,Xi,c,f,_);w&&t.push(w)}if(this.isLineLoop){let g=l.getX(x-1),b=l.getX(p),f=cs(this,e,Xi,c,g,b);f&&t.push(f)}}else{let p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let g=p,b=x-1;g<b;g+=h){let f=cs(this,e,Xi,c,g,g+1);f&&t.push(f)}if(this.isLineLoop){let g=cs(this,e,Xi,c,x-1,p);g&&t.push(g)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cs(i,e,t,a,n,r){let s=i.geometry.attributes.position;if(_s.fromBufferAttribute(s,n),Ms.fromBufferAttribute(s,r),t.distanceSqToSegment(_s,Ms,mc,Pl)>a)return;mc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mc);if(!(c<e.near||c>e.far))return{distance:c,point:Pl.clone().applyMatrix4(i.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:i}}var Dl=new L,Ll=new L,dr=class extends Dn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,a=[];for(let n=0,r=t.count;n<r;n+=2)Dl.fromBufferAttribute(t,n),Ll.fromBufferAttribute(t,n+1),a[n]=n===0?0:a[n-1],a[n+1]=a[n]+Dl.distanceTo(Ll);e.setAttribute("lineDistance",new Kt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fr=class extends Dn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},wi=class extends zt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fl=new Ce,_c=new Pn,hs=new Ot,ls=new L,ur=class extends ot{constructor(e=new Yt,t=new wi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let a=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,s=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),hs.copy(a.boundingSphere),hs.applyMatrix4(n),hs.radius+=r,e.ray.intersectsSphere(hs)===!1)return;Fl.copy(n).invert(),_c.copy(e.ray).applyMatrix4(Fl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=a.index,d=a.attributes.position;if(h!==null){let u=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let x=u,g=p;x<g;x++){let b=h.getX(x);ls.fromBufferAttribute(d,b),Ul(ls,b,c,n,e,t,this)}}else{let u=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let x=u,g=p;x<g;x++)ls.fromBufferAttribute(d,x),Ul(ls,x,c,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){let n=t[a[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ul(i,e,t,a,n,r,s){let o=_c.distanceSqToPoint(i);if(o<t){let c=new L;_c.closestPointToPoint(i,c),c.applyMatrix4(a);let h=n.ray.origin.distanceTo(c);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}var Zt=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};var br=class extends _t{constructor(e,t,a,n,r,s,o,c,h,l=En){if(l!==En&&l!==In)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&l===En&&(a=pn),a===void 0&&l===In&&(a=Gn),super(null,n,r,s,o,c,l,a,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wt,this.minFilter=c!==void 0?c:wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var pr=class i extends Yt{constructor(e=1,t=1,a=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:n};let r=e/2,s=t/2,o=Math.floor(a),c=Math.floor(n),h=o+1,l=c+1,d=e/o,u=t/c,p=[],x=[],g=[],b=[];for(let f=0;f<l;f++){let _=f*u-s;for(let w=0;w<h;w++){let m=w*d-r;x.push(m,-_,0),g.push(0,0,1),b.push(w/o),b.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){let w=_+h*f,m=_+h*(f+1),M=_+1+h*(f+1),A=_+1+h*f;p.push(w,m,A),p.push(m,M,A)}this.setIndex(p),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(g,3)),this.setAttribute("uv",new Kt(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ln=class extends zt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ws=class extends zt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},As=class extends zt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ds(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function mu(i){function e(n,r){return i[n]-i[r]}let t=i.length,a=new Array(t);for(let n=0;n!==t;++n)a[n]=n;return a.sort(e),a}function Ol(i,e,t){let a=i.length,n=new i.constructor(a);for(let r=0,s=0;s!==a;++r){let o=t[r]*e;for(let c=0;c!==e;++c)n[s++]=i[o+c]}return n}function Fd(i,e,t,a){let n=1,r=i[0];for(;r!==void 0&&r[a]===void 0;)r=i[n++];if(r===void 0)return;let s=r[a];if(s!==void 0)if(Array.isArray(s))do s=r[a],s!==void 0&&(e.push(r.time),t.push.apply(t,s)),r=i[n++];while(r!==void 0);else if(s.toArray!==void 0)do s=r[a],s!==void 0&&(e.push(r.time),s.toArray(t,t.length)),r=i[n++];while(r!==void 0);else do s=r[a],s!==void 0&&(e.push(r.time),t.push(s)),r=i[n++];while(r!==void 0)}var Xa=class{constructor(e,t,a,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,a=this._cachedIndex,n=t[a],r=t[a-1];e:{t:{let s;a:{n:if(!(e<n)){for(let o=a+2;;){if(n===void 0){if(e<r)break n;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===o)break;if(r=n,n=t[++a],e<n)break t}s=t.length;break a}if(!(e>=r)){let o=t[1];e<o&&(a=2,r=o);for(let c=a-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===c)break;if(n=r,r=t[--a-1],e>=r)break t}s=a,a=0;break a}break e}for(;a<s;){let o=a+s>>>1;e<t[o]?s=o:a=o+1}if(n=t[a],r=t[a-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,r,n)}return this.interpolate_(a,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,n=this.valueSize,r=e*n;for(let s=0;s!==n;++s)t[s]=a[r+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ss=class extends Xa{constructor(e,t,a,n){super(e,t,a,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:An,endingEnd:An}}intervalChanged_(e,t,a){let n=this.parameterPositions,r=e-2,s=e+1,o=n[r],c=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case Sn:r=e,o=2*t-a;break;case Yi:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=a}if(c===void 0)switch(this.getSettings_().endingEnd){case Sn:s=e,c=2*a-t;break;case Yi:s=1,c=a+n[1]-n[0];break;default:s=e-1,c=t}let h=(a-t)*.5,l=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-a),this._offsetPrev=r*l,this._offsetNext=s*l}interpolate_(e,t,a,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(a-t)/(n-t),g=x*x,b=g*x,f=-u*b+2*u*g-u*x,_=(1+u)*b+(-1.5-2*u)*g+(-.5+u)*x+1,w=(-1-p)*b+(1.5+p)*g+.5*x,m=p*b-p*g;for(let M=0;M!==o;++M)r[M]=f*s[l+M]+_*s[h+M]+w*s[c+M]+m*s[d+M];return r}},mr=class extends Xa{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e,t,a,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=(a-t)/(n-t),d=1-l;for(let u=0;u!==o;++u)r[u]=s[h+u]*d+s[c+u]*l;return r}},Es=class extends Xa{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Qt=class{constructor(e,t,a,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ds(t,this.TimeBufferType),this.values=ds(a,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:ds(e.times,Array),values:ds(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(a.interpolation=n)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new Es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ss(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case kn:t=this.InterpolantFactoryMethodDiscrete;break;case Cn:t=this.InterpolantFactoryMethodLinear;break;case fs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kn;case this.InterpolantFactoryMethodLinear:return Cn;case this.InterpolantFactoryMethodSmooth:return fs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let a=0,n=t.length;a!==n;++a)t[a]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let a=0,n=t.length;a!==n;++a)t[a]*=e}return this}trim(e,t){let a=this.times,n=a.length,r=0,s=n-1;for(;r!==n&&a[r]<e;)++r;for(;s!==-1&&a[s]>t;)--s;if(++s,r!==0||s!==n){r>=s&&(s=Math.max(s,1),r=s-1);let o=this.getValueSize();this.times=a.slice(r,s),this.values=this.values.slice(r*o,s*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let a=this.times,n=this.values,r=a.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==r;o++){let c=a[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(s!==null&&s>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,s),e=!1;break}s=c}if(n!==void 0&&pu(n))for(let o=0,c=n.length;o!==c;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),n=this.getInterpolation()===fs,r=e.length-1,s=1;for(let o=1;o<r;++o){let c=!1,h=e[o],l=e[o+1];if(h!==l&&(o!==1||h!==e[0]))if(n)c=!0;else{let d=o*a,u=d-a,p=d+a;for(let x=0;x!==a;++x){let g=t[d+x];if(g!==t[u+x]||g!==t[p+x]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];let d=o*a,u=s*a;for(let p=0;p!==a;++p)t[u+p]=t[d+p]}++s}}if(r>0){e[s]=e[r];for(let o=r*a,c=s*a,h=0;h!==a;++h)t[c+h]=t[o+h];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*a)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),a=this.constructor,n=new a(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Qt.prototype.TimeBufferType=Float32Array;Qt.prototype.ValueBufferType=Float32Array;Qt.prototype.DefaultInterpolation=Cn;var qa=class extends Qt{constructor(e,t,a){super(e,t,a)}};qa.prototype.ValueTypeName="bool";qa.prototype.ValueBufferType=Array;qa.prototype.DefaultInterpolation=kn;qa.prototype.InterpolantFactoryMethodLinear=void 0;qa.prototype.InterpolantFactoryMethodSmooth=void 0;var gr=class extends Qt{};gr.prototype.ValueTypeName="color";var Aa=class extends Qt{};Aa.prototype.ValueTypeName="number";var Ts=class extends Xa{constructor(e,t,a,n){super(e,t,a,n)}interpolate_(e,t,a,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(a-t)/(n-t),h=e*o;for(let l=h+o;h!==l;h+=4)Pt.slerpFlat(r,0,s,h-o,s,h,c);return r}},Sa=class extends Qt{InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends Qt{constructor(e,t,a){super(e,t,a)}};Ka.prototype.ValueTypeName="string";Ka.prototype.ValueBufferType=Array;Ka.prototype.DefaultInterpolation=kn;Ka.prototype.InterpolantFactoryMethodLinear=void 0;Ka.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends Qt{};Ea.prototype.ValueTypeName="vector";var Fn=class{constructor(e="",t=-1,a=[],n=So){this.name=e,this.tracks=a,this.duration=t,this.blendMode=n,this.uuid=ua(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],a=e.tracks,n=1/(e.fps||1);for(let s=0,o=a.length;s!==o;++s)t.push(xu(a[s]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],a=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,s=a.length;r!==s;++r)t.push(Qt.toJSON(a[r]));return n}static CreateFromMorphTargetSequence(e,t,a,n){let r=t.length,s=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);let l=mu(c);c=Ol(c,1,l),h=Ol(h,1,l),!n&&c[0]===0&&(c.push(r),h.push(h[0])),s.push(new Aa(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/a))}return new this(e,-1,s)}static findByName(e,t){let a=e;if(!Array.isArray(e)){let n=e;a=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<a.length;n++)if(a[n].name===t)return a[n];return null}static CreateClipsFromMorphTargetSequences(e,t,a){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let h=e[o],l=h.name.match(r);if(l&&l.length>1){let d=l[1],u=n[d];u||(n[d]=u=[]),u.push(h)}}let s=[];for(let o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,a));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let a=function(d,u,p,x,g){if(p.length!==0){let b=[],f=[];Fd(p,b,f,x),b.length!==0&&g.push(new d(u,b,f))}},n=[],r=e.name||"default",s=e.fps||30,o=e.blendMode,c=e.length||-1,h=e.hierarchy||[];for(let d=0;d<h.length;d++){let u=h[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){let p={},x;for(x=0;x<u.length;x++)if(u[x].morphTargets)for(let g=0;g<u[x].morphTargets.length;g++)p[u[x].morphTargets[g]]=-1;for(let g in p){let b=[],f=[];for(let _=0;_!==u[x].morphTargets.length;++_){let w=u[x];b.push(w.time),f.push(w.morphTarget===g?1:0)}n.push(new Aa(".morphTargetInfluence["+g+"]",b,f))}c=p.length*s}else{let p=".bones["+t[d].name+"]";a(Ea,p+".position",u,"pos",n),a(Sa,p+".quaternion",u,"rot",n),a(Ea,p+".scale",u,"scl",n)}}return n.length===0?null:new this(r,c,n,o)}resetDuration(){let e=this.tracks,t=0;for(let a=0,n=e.length;a!==n;++a){let r=this.tracks[a];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function gu(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Aa;case"vector":case"vector2":case"vector3":case"vector4":return Ea;case"color":return gr;case"quaternion":return Sa;case"bool":case"boolean":return qa;case"string":return Ka}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function xu(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=gu(i.type);if(i.times===void 0){let t=[],a=[];Fd(i.keys,t,a,"value"),i.times=t,i.values=a}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Va={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Rs=class{constructor(e,t,a){let n=this,r=!1,s=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.itemStart=function(l){o++,r===!1&&n.onStart!==void 0&&n.onStart(l,s,o),r=!0},this.itemEnd=function(l){s++,n.onProgress!==void 0&&n.onProgress(l,s,o),s===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(l){n.onError!==void 0&&n.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){let d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){let p=h[d],x=h[d+1];if(p.global&&(p.lastIndex=0),p.test(l))return x}return null}}},Ud=new Rs,Ta=class{constructor(e){this.manager=e!==void 0?e:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let a=this;return new Promise(function(n,r){a.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha={},Mc=class extends Error{constructor(e,t){super(e),this.response=t}},Ai=class extends Ta{constructor(e){super(e)}load(e,t,a,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Va.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ha[e]!==void 0){Ha[e].push({onLoad:t,onProgress:a,onError:n});return}Ha[e]=[],Ha[e].push({onLoad:t,onProgress:a,onError:n});let s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;let l=Ha[e],d=h.body.getReader(),u=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),p=u?parseInt(u):0,x=p!==0,g=0,b=new ReadableStream({start(f){_();function _(){d.read().then(({done:w,value:m})=>{if(w)f.close();else{g+=m.byteLength;let M=new ProgressEvent("progress",{lengthComputable:x,loaded:g,total:p});for(let A=0,T=l.length;A<T;A++){let R=l[A];R.onProgress&&R.onProgress(M)}f.enqueue(m),_()}},w=>{f.error(w)})}}});return new Response(b)}else throw new Mc(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return h.arrayBuffer().then(x=>p.decode(x))}}}).then(h=>{Va.add(e,h);let l=Ha[e];delete Ha[e];for(let d=0,u=l.length;d<u;d++){let p=l[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{let l=Ha[e];if(l===void 0)throw this.manager.itemError(e),h;delete Ha[e];for(let d=0,u=l.length;d<u;d++){let p=l[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Is=class extends Ta{constructor(e){super(e)}load(e,t,a,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=Va.get(e);if(s!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s;let o=mi("img");function c(){l(),Va.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){l(),n&&n(d),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var xr=class extends Ta{constructor(e){super(e)}load(e,t,a,n){let r=new _t,s=new Is(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},a,n),r}},Un=class extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yr=class extends Un{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gc=new Ce,zl=new L,Bl=new L,vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,a=this.matrix;zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(zl),Bl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bl),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=class extends vr{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,a=Nn*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(a!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=a,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_r=class extends Un{constructor(e,t,a=0,n=Math.PI/3,r=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=a,this.angle=n,this.penumbra=r,this.decay=s,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},jl=new Ce,qi=new L,xc=new L,Ac=class extends vr{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let a=this.camera,n=this.matrix,r=e.distance||a.far;r!==a.far&&(a.far=r,a.updateProjectionMatrix()),qi.setFromMatrixPosition(e.matrixWorld),a.position.copy(qi),xc.copy(a.position),xc.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(xc),a.updateMatrixWorld(),n.makeTranslation(-qi.x,-qi.y,-qi.z),jl.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl)}},Mr=class extends Un{constructor(e,t,a=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=n,this.shadow=new Ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ja=class extends ir{constructor(e=-1,t=1,a=1,n=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=n,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,n,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=n,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=a-e,s=a+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,s=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sc=class extends vr{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},On=class extends Un{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ya=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let a=0,n=e.length;a<n;a++)t+=String.fromCharCode(e[a]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var wr=class extends Ta{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,a,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,s=Va.get(e);if(s!==void 0){if(r.manager.itemStart(e),s.then){s.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{n&&n(h)});return}return setTimeout(function(){t&&t(s),r.manager.itemEnd(e)},0),s}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Va.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){n&&n(h),Va.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Va.add(e,c),r.manager.itemStart(e)}};var ks=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}};var Cs=class{constructor(e,t,a){this.binding=e,this.valueSize=a;let n,r,s;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:n=this._lerp,r=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let a=this.buffer,n=this.valueSize,r=e*n+n,s=this.cumulativeWeight;if(s===0){for(let o=0;o!==n;++o)a[r+o]=a[o];s=t}else{s+=t;let o=t/s;this._mixBufferRegion(a,r,0,o,n)}this.cumulativeWeight=s}accumulateAdditive(e){let t=this.buffer,a=this.valueSize,n=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,a),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,a=this.buffer,n=e*t+t,r=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(a,n,c,1-r,t)}s>0&&this._mixBufferRegionAdditive(a,n,this._addIndex*t,1,t);for(let c=t,h=t+t;c!==h;++c)if(a[c]!==a[c+t]){o.setValue(a,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,a=this.valueSize,n=a*this._origIndex;e.getValue(t,n);for(let r=a,s=n;r!==s;++r)t[r]=t[n+r%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let a=e;a<t;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[t+a]=this.buffer[e+a]}_select(e,t,a,n,r){if(n>=.5)for(let s=0;s!==r;++s)e[t+s]=e[a+s]}_slerp(e,t,a,n){Pt.slerpFlat(e,t,e,t,e,a,n)}_slerpAdditive(e,t,a,n,r){let s=this._workIndex*r;Pt.multiplyQuaternionsFlat(e,s,e,t,e,a),Pt.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,a,n,r){let s=1-n;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*s+e[a+o]*n}}_lerpAdditive(e,t,a,n,r){for(let s=0;s!==r;++s){let o=t+s;e[o]=e[o]+e[a+s]*n}}},Zc="\\[\\]\\.:\\/",yu=new RegExp("["+Zc+"]","g"),Qc="[^"+Zc+"]",vu="[^"+Zc.replace("\\.","")+"]",_u=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Mu=/(WCOD+)?/.source.replace("WCOD",vu),wu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Su=new RegExp("^"+_u+Mu+wu+Au+"$"),Eu=["material","materials","bones","map"],Ec=class{constructor(e,t,a){let n=a||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let a=this._targetGroup.nCachedObjects_,n=this._bindings[a];n!==void 0&&n.getValue(e,t)}setValue(e,t){let a=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=a.length;n!==r;++n)a[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}},tt=class i{constructor(e,t,a){this.path=t,this.parsedPath=a||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,a):new i(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yu,"")}static parseTrackName(e){let t=Su.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=a.nodeName&&a.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=a.nodeName.substring(n+1);Eu.indexOf(r)!==-1&&(a.nodeName=a.nodeName.substring(0,n),a.objectName=r)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){let a=function(r){for(let s=0;s<r.length;s++){let o=r[s];if(o.name===t||o.uuid===t)return o;let c=a(o.children);if(c)return c}return null},n=a(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let a=this.resolvedProperty;for(let n=0,r=a.length;n!==r;++n)e[t++]=a[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let a=this.resolvedProperty;for(let n=0,r=a.length;n!==r;++n)a[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let a=this.resolvedProperty;for(let n=0,r=a.length;n!==r;++n)a[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let a=this.resolvedProperty;for(let n=0,r=a.length;n!==r;++n)a[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,a=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=t.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let s=e[n];if(s===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=r}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};tt.Composite=Ec;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ns=class{constructor(e,t,a=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=a,this.blendMode=n;let r=t.tracks,s=r.length,o=new Array(s),c={endingStart:An,endingEnd:An};for(let h=0;h!==s;++h){let l=r[h].createInterpolant(null);o[h]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cr,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,a){if(e.fadeOut(t),this.fadeIn(t),a){let n=this._clip.duration,r=e._clip.duration,s=r/n,o=n/r;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,a){return e.crossFadeFrom(this,t,a)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,a){let n=this._mixer,r=n.time,s=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,h=o.sampleValues;return c[0]=r,c[1]=r+a,h[0]=e/s,h[1]=t/s,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,a,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*a;c<0||a===0?t=0:(this._startTime=null,t=a*c)}t*=this._updateTimeScale(e);let s=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case yd:for(let l=0,d=c.length;l!==d;++l)c[l].evaluate(s),h[l].accumulateAdditive(o);break;case So:default:for(let l=0,d=c.length;l!==d;++l)c[l].evaluate(s),h[l].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let a=this._weightInterpolant;if(a!==null){let n=a.evaluate(e)[0];t*=n,e>a.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let a=this._timeScaleInterpolant;if(a!==null){let n=a.evaluate(e)[0];t*=n,e>a.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,a=this.loop,n=this.time+e,r=this._loopCount,s=a===xd;if(e===0)return r===-1?n:s&&(r&1)===1?t-n:n;if(a===Ao){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let h=e<0;this._setEndings(h,!h,s)}else this._setEndings(!1,!1,s);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(s&&(r&1)===1)return t-n}return n}_setEndings(e,t,a){let n=this._interpolantSettings;a?(n.endingStart=Sn,n.endingEnd=Sn):(e?n.endingStart=this.zeroSlopeAtStart?Sn:An:n.endingStart=Yi,t?n.endingEnd=this.zeroSlopeAtEnd?Sn:An:n.endingEnd=Yi)}_scheduleFading(e,t,a){let n=this._mixer,r=n.time,s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);let o=s.parameterPositions,c=s.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=a,this}},Tu=new Float32Array(1),Ar=class extends Ma{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let a=e._localRoot||this._root,n=e._clip.tracks,r=n.length,s=e._propertyBindings,o=e._interpolants,c=a.uuid,h=this._bindingsByRootAndName,l=h[c];l===void 0&&(l={},h[c]=l);for(let d=0;d!==r;++d){let u=n[d],p=u.name,x=l[p];if(x!==void 0)++x.referenceCount,s[d]=x;else{if(x=s[d],x!==void 0){x._cacheIndex===null&&(++x.referenceCount,this._addInactiveBinding(x,c,p));continue}let g=t&&t._propertyBindings[d].binding.parsedPath;x=new Cs(tt.create(a,p,g),u.ValueTypeName,u.getValueSize()),++x.referenceCount,this._addInactiveBinding(x,c,p),s[d]=x}o[d].resultBuffer=x.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let a=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,a)}let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let r=t[a];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let r=t[a];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,a){let n=this._actions,r=this._actionsByClip,s=r[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=s;else{let o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[a]=e}_removeInactiveAction(e){let t=this._actions,a=t[t.length-1],n=e._cacheIndex;a._cacheIndex=n,t[n]=a,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,s=this._actionsByClip,o=s[r],c=o.knownActions,h=c[c.length-1],l=e._byClipCacheIndex;h._byClipCacheIndex=l,c[l]=h,c.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],c.length===0&&delete s[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let a=0,n=t.length;a!==n;++a){let r=t[a];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,a=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=a,t[a]=r}_takeBackAction(e){let t=this._actions,a=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=a,t[a]=r}_addInactiveBinding(e,t,a){let n=this._bindingsByRootAndName,r=this._bindings,s=n[t];s===void 0&&(s={},n[t]=s),s[a]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,a=e.binding,n=a.rootNode.uuid,r=a.path,s=this._bindingsByRootAndName,o=s[n],c=t[t.length-1],h=e._cacheIndex;c._cacheIndex=h,t[h]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete s[n]}_lendBinding(e){let t=this._bindings,a=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=a,t[a]=r}_takeBackBinding(e){let t=this._bindings,a=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=a,t[a]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,a=e[t];return a===void 0&&(a=new mr(new Float32Array(2),new Float32Array(2),1,Tu),a.__cacheIndex=t,e[t]=a),a}_takeBackControlInterpolant(e){let t=this._controlInterpolants,a=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=a,t[a]=r}clipAction(e,t,a){let n=t||this._root,r=n.uuid,s=typeof e=="string"?Fn.findByName(n,e):e,o=s!==null?s.uuid:e,c=this._actionsByClip[o],h=null;if(a===void 0&&(s!==null?a=s.blendMode:a=So),c!==void 0){let d=c.actionByRoot[r];if(d!==void 0&&d.blendMode===a)return d;h=c.knownActions[0],s===null&&(s=h._clip)}if(s===null)return null;let l=new Ns(this,s,t,a);return this._bindAction(l,h),this._addInactiveAction(l,o,r),l}existingAction(e,t){let a=t||this._root,n=a.uuid,r=typeof e=="string"?Fn.findByName(a,e):e,s=r?r.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let a=t-1;a>=0;--a)e[a].stop();return this}update(e){e*=this.timeScale;let t=this._actions,a=this._nActiveActions,n=this.time+=e,r=Math.sign(e),s=this._accuIndex^=1;for(let h=0;h!==a;++h)t[h]._update(n,e,r,s);let o=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)o[h].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,a=e.uuid,n=this._actionsByClip,r=n[a];if(r!==void 0){let s=r.knownActions;for(let o=0,c=s.length;o!==c;++o){let h=s[o];this._deactivateAction(h);let l=h._cacheIndex,d=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,d._cacheIndex=l,t[l]=d,t.pop(),this._removeInactiveBindingsForAction(h)}delete n[a]}}uncacheRoot(e){let t=e.uuid,a=this._actionsByClip;for(let s in a){let o=a[s].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let s in r){let o=r[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let a=this.existingAction(e,t);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}};function $c(i,e,t,a){let n=Ru(a);switch(t){case Uc:return i*e;case zc:return i*e;case Bc:return i*e*2;case qs:return i*e/n.components*n.byteLength;case Ks:return i*e/n.components*n.byteLength;case jc:return i*e*2/n.components*n.byteLength;case Js:return i*e*2/n.components*n.byteLength;case Oc:return i*e*3/n.components*n.byteLength;case $t:return i*e*4/n.components*n.byteLength;case Ys:return i*e*4/n.components*n.byteLength;case Er:case Tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:case eo:return Math.max(i,16)*Math.max(e,8)/4;case Zs:case $s:return Math.max(i,8)*Math.max(e,8)/2;case to:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case kr:case yo:case vo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Gc:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ru(i){switch(i){case Ia:case Dc:return{byteLength:1,components:1};case Ei:case Lc:case Ti:return{byteLength:2,components:1};case Ws:case Xs:return{byteLength:2,components:4};case pn:case Vs:case ia:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"171"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="171");function cf(){let i=null,e=!1,t=null,a=null;function n(r,s){t(r,s),a=i.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(a=i.requestAnimationFrame(n),e=!0)},stop:function(){i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ku(i){let e=new WeakMap;function t(o,c){let h=o.array,l=o.usage,d=h.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,h,l),o.onUploadCallback();let p;if(h instanceof Float32Array)p=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=i.SHORT;else if(h instanceof Uint32Array)p=i.UNSIGNED_INT;else if(h instanceof Int32Array)p=i.INT;else if(h instanceof Int8Array)p=i.BYTE;else if(h instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function a(o,c,h){let l=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,l);else{d.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<d.length;p++){let x=d[u],g=d[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++u,d[u]=g)}d.length=u+1;for(let p=0,x=d.length;p<x;p++){let g=d[p];i.bufferSubData(h,g.start*l.BYTES_PER_ELEMENT,l,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,o,c),h.version=o.version}}return{get:n,remove:r,update:s}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ou=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ab=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,db=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ib=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$b=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Zp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Le={alphahash_fragment:Cu,alphahash_pars_fragment:Nu,alphamap_fragment:Pu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Fu,aomap_fragment:Uu,aomap_pars_fragment:Ou,batching_pars_vertex:zu,batching_vertex:Bu,begin_vertex:ju,beginnormal_vertex:Gu,bsdfs:Hu,iridescence_fragment:Vu,bumpmap_pars_fragment:Wu,clipping_planes_fragment:Xu,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:Ju,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Qu,color_vertex:$u,common:eb,cube_uv_reflection_fragment:tb,defaultnormal_vertex:ab,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:rb,emissivemap_pars_fragment:sb,colorspace_fragment:ob,colorspace_pars_fragment:cb,envmap_fragment:hb,envmap_common_pars_fragment:lb,envmap_pars_fragment:db,envmap_pars_vertex:fb,envmap_physical_pars_fragment:wb,envmap_vertex:ub,fog_vertex:bb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:yb,lights_lambert_fragment:vb,lights_lambert_pars_fragment:_b,lights_pars_begin:Mb,lights_toon_fragment:Ab,lights_toon_pars_fragment:Sb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Tb,lights_physical_fragment:Rb,lights_physical_pars_fragment:Ib,lights_fragment_begin:kb,lights_fragment_maps:Cb,lights_fragment_end:Nb,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Lb,logdepthbuf_vertex:Fb,map_fragment:Ub,map_pars_fragment:Ob,map_particle_fragment:zb,map_particle_pars_fragment:Bb,metalnessmap_fragment:jb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Hb,morphcolor_vertex:Vb,morphnormal_vertex:Wb,morphtarget_pars_vertex:Xb,morphtarget_vertex:qb,normal_fragment_begin:Kb,normal_fragment_maps:Jb,normal_pars_fragment:Yb,normal_pars_vertex:Zb,normal_vertex:Qb,normalmap_pars_fragment:$b,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ap,iridescence_pars_fragment:np,opaque_fragment:ip,packing:rp,premultiplied_alpha_fragment:sp,project_vertex:op,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:lp,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:up,shadowmap_vertex:bp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:xp,skinnormal_vertex:yp,specularmap_fragment:vp,specularmap_pars_fragment:_p,tonemapping_fragment:Mp,tonemapping_pars_fragment:wp,transmission_fragment:Ap,transmission_pars_fragment:Sp,uv_pars_fragment:Ep,uv_pars_vertex:Tp,uv_vertex:Rp,worldpos_vertex:Ip,background_vert:kp,background_frag:Cp,backgroundCube_vert:Np,backgroundCube_frag:Pp,cube_vert:Dp,cube_frag:Lp,depth_vert:Fp,depth_frag:Up,distanceRGBA_vert:Op,distanceRGBA_frag:zp,equirect_vert:Bp,equirect_frag:jp,linedashed_vert:Gp,linedashed_frag:Hp,meshbasic_vert:Vp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:Yp,meshnormal_frag:Zp,meshphong_vert:Qp,meshphong_frag:$p,meshphysical_vert:em,meshphysical_frag:tm,meshtoon_vert:am,meshtoon_frag:nm,points_vert:im,points_frag:rm,shadow_vert:sm,shadow_frag:om,sprite_vert:cm,sprite_frag:hm},ie={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ka={basic:{uniforms:It([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:It([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:It([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:It([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:It([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new we(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:It([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:It([ie.points,ie.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:It([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:It([ie.common,ie.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:It([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:It([ie.sprite,ie.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:It([ie.common,ie.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:It([ie.lights,ie.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ka.physical={uniforms:It([ka.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};var Eo={r:0,b:0,g:0},Wn=new pa,lm=new Ce;function dm(i,e,t,a,n,r,s){let o=new we(0),c=r===!0?0:1,h,l,d=null,u=0,p=null;function x(w){let m=w.isScene===!0?w.background:null;return m&&m.isTexture&&(m=(w.backgroundBlurriness>0?t:e).get(m)),m}function g(w){let m=!1,M=x(w);M===null?f(o,c):M&&M.isColor&&(f(M,1),m=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?a.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,s),(i.autoClear||m)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(w,m){let M=x(m);M&&(M.isCubeTexture||M.mapping===Sr)?(l===void 0&&(l=new St(new gi(1,1,1),new ga({name:"BackgroundCubeMaterial",uniforms:Vn(ka.backgroundCube.uniforms),vertexShader:ka.backgroundCube.vertexShader,fragmentShader:ka.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Wn.copy(m.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),l.material.uniforms.envMap.value=M,l.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Wn)),l.material.toneMapped=ze.getTransfer(M.colorSpace)!==et,(d!==M||u!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,u=M.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new St(new pr(2,2),new ga({name:"BackgroundMaterial",uniforms:Vn(ka.background.uniforms),vertexShader:ka.background.vertexShader,fragmentShader:ka.background.fragmentShader,side:ba,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=ze.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||u!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,u=M.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function f(w,m){w.getRGB(Eo,Yc(i)),a.buffers.color.setClear(Eo.r,Eo.g,Eo.b,m,s)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(w,m=1){o.set(w),c=m,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(o,c)},render:g,addToRenderList:b,dispose:_}}function fm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},n=u(null),r=n,s=!1;function o(y,k,O,C,U){let X=!1,B=d(C,O,k);r!==B&&(r=B,h(r.object)),X=p(y,C,O,U),X&&x(y,C,O,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(X||s)&&(s=!1,m(y,k,O,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function l(y){return i.deleteVertexArray(y)}function d(y,k,O){let C=O.wireframe===!0,U=a[y.id];U===void 0&&(U={},a[y.id]=U);let X=U[k.id];X===void 0&&(X={},U[k.id]=X);let B=X[C];return B===void 0&&(B=u(c()),X[C]=B),B}function u(y){let k=[],O=[],C=[];for(let U=0;U<t;U++)k[U]=0,O[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:O,attributeDivisors:C,object:y,attributes:{},index:null}}function p(y,k,O,C){let U=r.attributes,X=k.attributes,B=0,V=O.getAttributes();for(let z in V)if(V[z].location>=0){let ae=U[z],de=X[z];if(de===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;B++}return r.attributesNum!==B||r.index!==C}function x(y,k,O,C){let U={},X=k.attributes,B=0,V=O.getAttributes();for(let z in V)if(V[z].location>=0){let ae=X[z];ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));let de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),U[z]=de,B++}r.attributes=U,r.attributesNum=B,r.index=C}function g(){let y=r.newAttributes;for(let k=0,O=y.length;k<O;k++)y[k]=0}function b(y){f(y,0)}function f(y,k){let O=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;O[y]=1,C[y]===0&&(i.enableVertexAttribArray(y),C[y]=1),U[y]!==k&&(i.vertexAttribDivisor(y,k),U[y]=k)}function _(){let y=r.newAttributes,k=r.enabledAttributes;for(let O=0,C=k.length;O<C;O++)k[O]!==y[O]&&(i.disableVertexAttribArray(O),k[O]=0)}function w(y,k,O,C,U,X,B){B===!0?i.vertexAttribIPointer(y,k,O,U,X):i.vertexAttribPointer(y,k,O,C,U,X)}function m(y,k,O,C){g();let U=C.attributes,X=O.getAttributes(),B=k.defaultAttributeValues;for(let V in X){let z=X[V];if(z.location>=0){let Z=U[V];if(Z===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){let ae=Z.normalized,de=Z.itemSize,Ae=e.get(Z);if(Ae===void 0)continue;let je=Ae.buffer,W=Ae.type,$=Ae.bytesPerElement,fe=W===i.INT||W===i.UNSIGNED_INT||Z.gpuType===Vs;if(Z.isInterleavedBufferAttribute){let re=Z.data,Se=re.stride,ke=Z.offset;if(re.isInstancedInterleavedBuffer){for(let Fe=0;Fe<z.locationSize;Fe++)f(z.location+Fe,re.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Fe=0;Fe<z.locationSize;Fe++)b(z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Fe=0;Fe<z.locationSize;Fe++)w(z.location+Fe,de/z.locationSize,W,ae,Se*$,(ke+de/z.locationSize*Fe)*$,fe)}else{if(Z.isInstancedBufferAttribute){for(let re=0;re<z.locationSize;re++)f(z.location+re,Z.meshPerAttribute);y.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let re=0;re<z.locationSize;re++)b(z.location+re);i.bindBuffer(i.ARRAY_BUFFER,je);for(let re=0;re<z.locationSize;re++)w(z.location+re,de/z.locationSize,W,ae,de*$,de/z.locationSize*re*$,fe)}}else if(B!==void 0){let ae=B[V];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(z.location,ae);break;case 3:i.vertexAttrib3fv(z.location,ae);break;case 4:i.vertexAttrib4fv(z.location,ae);break;default:i.vertexAttrib1fv(z.location,ae)}}}}_()}function M(){R();for(let y in a){let k=a[y];for(let O in k){let C=k[O];for(let U in C)l(C[U].object),delete C[U];delete k[O]}delete a[y]}}function A(y){if(a[y.id]===void 0)return;let k=a[y.id];for(let O in k){let C=k[O];for(let U in C)l(C[U].object),delete C[U];delete k[O]}delete a[y.id]}function T(y){for(let k in a){let O=a[k];if(O[y.id]===void 0)continue;let C=O[y.id];for(let U in C)l(C[U].object),delete C[U];delete O[y.id]}}function R(){v(),s=!0,r!==n&&(r=n,h(r.object))}function v(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:b,disableUnusedAttributes:_}}function um(i,e,t){let a;function n(h){a=h}function r(h,l){i.drawArrays(a,h,l),t.update(l,a,1)}function s(h,l,d){d!==0&&(i.drawArraysInstanced(a,h,l,d),t.update(l,a,d))}function o(h,l,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,l,0,d);let p=0;for(let x=0;x<d;x++)p+=l[x];t.update(p,a,1)}function c(h,l,d,u){if(d===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h.length;x++)s(h[x],l[x],u[x]);else{p.multiDrawArraysInstancedWEBGL(a,h,0,l,0,u,0,d);let x=0;for(let g=0;g<d;g++)x+=l[g]*u[g];t.update(x,a,1)}}this.setMode=n,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function bm(i,e,t,a){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){return!(T!==$t&&a.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let R=T===Ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ia&&a.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ia&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp",l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=x>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:b,maxAttributes:f,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:m,vertexTextures:M,maxSamples:A}}function pm(i){let e=this,t=null,a=0,n=!1,r=!1,s=new ya,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||a!==0||n;return n=u,a=d.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=l(d,u,0)},this.setState=function(d,u,p){let x=d.clippingPlanes,g=d.clipIntersection,b=d.clipShadows,f=i.get(d);if(!n||x===null||x.length===0||r&&!b)r?l(null):h();else{let _=r?0:a,w=_*4,m=f.clippingState||null;c.value=m,m=l(x,u,w,p);for(let M=0;M!==w;++M)m[M]=t[M];f.clippingState=m,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function l(d,u,p,x){let g=d!==null?d.length:0,b=null;if(g!==0){if(b=c.value,x!==!0||b===null){let f=p+g*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(b===null||b.length<f)&&(b=new Float32Array(f));for(let w=0,m=p;w!==g;++w,m+=4)s.copy(d[w]).applyMatrix4(_,o),s.normal.toArray(b,m),b[m+3]=s.constant}c.value=b,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,b}}function mm(i){let e=new WeakMap;function t(s,o){return o===js?s.mapping=zn:o===Gs&&(s.mapping=Bn),s}function a(s){if(s&&s.isTexture){let o=s.mapping;if(o===js||o===Gs)if(e.has(s)){let c=e.get(s).texture;return t(c,s.mapping)}else{let c=s.image;if(c&&c.height>0){let h=new vs(c.height);return h.fromEquirectangularTexture(i,s),e.set(s,h),s.addEventListener("dispose",n),t(h.texture,s.mapping)}else return null}}return s}function n(s){let o=s.target;o.removeEventListener("dispose",n);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:a,dispose:r}}var ki=4,Od=[.125,.215,.35,.446,.526,.582],Kn=20,eh=new Ja,zd=new we,th=null,ah=0,nh=0,ih=!1,qn=(1+Math.sqrt(5))/2,Ii=1/qn,Bd=[new L(-qn,Ii,0),new L(qn,Ii,0),new L(-Ii,0,qn),new L(Ii,0,qn),new L(0,qn,-Ii),new L(0,qn,Ii),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,n=100){th=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,a,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(th,ah,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zn||e.mapping===Bn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),ah=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ti,format:$t,colorSpace:At,depthBuffer:!1},n=jd(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jd(e,t,a);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=xm(r,e,t)}return n}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,eh)}_sceneToCubeUV(e,t,a,n){let o=new vt(90,1,t,a),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(zd),l.toneMapping=Qa,l.autoClear=!1;let p=new ma({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),x=new St(new gi,p),g=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,g=!0):(p.color.copy(zd),g=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));let w=this._cubeSize;To(n,_*w,f>2?w:0,w,w),l.setRenderTarget(n),g&&l.render(x,o),l.render(e,o)}x.geometry.dispose(),x.material.dispose(),l.toneMapping=u,l.autoClear=d,e.background=b}_textureToCubeUV(e,t){let a=this._renderer,n=e.mapping===zn||e.mapping===Bn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gd());let r=n?this._cubemapMaterial:this._equirectMaterial,s=new St(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;To(t,0,0,3*c,2*c),a.setRenderTarget(t),a.render(s,eh)}_applyPMREM(e){let t=this._renderer,a=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let r=1;r<n;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Bd[(n-r-1)%Bd.length];this._blur(e,r-1,r,s,o)}t.autoClear=a}_blur(e,t,a,n,r){let s=this._pingPongRenderTarget;this._halfBlur(e,s,t,a,n,"latitudinal",r),this._halfBlur(s,e,a,a,n,"longitudinal",r)}_halfBlur(e,t,a,n,r,s,o){let c=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,d=new St(this._lodPlanes[n],h),u=h.uniforms,p=this._sizeLods[a]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),g=r/x,b=isFinite(r)?1+Math.floor(l*g):Kn;b>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Kn}`);let f=[],_=0;for(let T=0;T<Kn;++T){let R=T/g,v=Math.exp(-R*R/2);f.push(v),T===0?_+=v:T<b&&(_+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/_;u.envMap.value=e.texture,u.samples.value=b,u.weights.value=f,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:w}=this;u.dTheta.value=x,u.mipInt.value=w-a;let m=this._sizeLods[n],M=3*m*(n>w-ki?n-w+ki:0),A=4*(this._cubeSize-m);To(t,M,A,3*m,2*m),c.setRenderTarget(t),c.render(d,eh)}};function gm(i){let e=[],t=[],a=[],n=i,r=i-ki+1+Od.length;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let c=1/o;s>i-ki?c=Od[s-i+ki-1]:s===0&&(c=0),a.push(c);let h=1/(o-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,x=6,g=3,b=2,f=1,_=new Float32Array(g*x*p),w=new Float32Array(b*x*p),m=new Float32Array(f*x*p);for(let A=0;A<p;A++){let T=A%3*2/3-1,R=A>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(v,g*x*A),w.set(u,b*x*A);let y=[A,A,A,A,A,A];m.set(y,f*x*A)}let M=new Yt;M.setAttribute("position",new mt(_,g)),M.setAttribute("uv",new mt(w,b)),M.setAttribute("faceIndex",new mt(m,f)),e.push(M),n>ki&&n--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function jd(i,e,t){let a=new wa(i,e,t);return a.texture.mapping=Sr,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function To(i,e,t,a,n){i.viewport.set(e,t,a,n),i.scissor.set(e,t,a,n)}function xm(i,e,t){let a=new Float32Array(Kn),n=new L(0,1,0);return new ga({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Gd(){return new ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function Hd(){return new ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Za,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(i){let e=new WeakMap,t=null;function a(o){if(o&&o.isTexture){let c=o.mapping,h=c===js||c===Gs,l=c===zn||c===Bn;if(h||l){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Io(i)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return h&&p&&p.height>0||l&&p&&n(p)?(t===null&&(t=new Io(i)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function n(o){let c=0,h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:s}}function vm(i){let e={};function t(a){if(e[a]!==void 0)return e[a];let n;switch(a){case"WEBGL_depth_texture":n=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=i.getExtension(a)}return e[a]=n,n}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){let n=t(a);return n===null&&Hn("THREE.WebGLRenderer: "+a+" extension not supported."),n}}}function _m(i,e,t,a){let n={},r=new WeakMap;function s(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",s),delete n[u.id];let p=r.get(u);p&&(e.remove(p),r.delete(u)),a.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function c(d){let u=d.attributes;for(let p in u)e.update(u[p],i.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,x=d.attributes.position,g=0;if(p!==null){let _=p.array;g=p.version;for(let w=0,m=_.length;w<m;w+=3){let M=_[w+0],A=_[w+1],T=_[w+2];u.push(M,A,A,T,T,M)}}else if(x!==void 0){let _=x.array;g=x.version;for(let w=0,m=_.length/3-1;w<m;w+=3){let M=w+0,A=w+1,T=w+2;u.push(M,A,A,T,T,M)}}else return;let b=new(Jc(u)?nr:ar)(u,1);b.version=g;let f=r.get(d);f&&e.remove(f),r.set(d,b)}function l(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function Mm(i,e,t){let a;function n(u){a=u}let r,s;function o(u){r=u.type,s=u.bytesPerElement}function c(u,p){i.drawElements(a,p,r,u*s),t.update(p,a,1)}function h(u,p,x){x!==0&&(i.drawElementsInstanced(a,p,r,u*s,x),t.update(p,a,x))}function l(u,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,p,0,r,u,0,x);let b=0;for(let f=0;f<x;f++)b+=p[f];t.update(b,a,1)}function d(u,p,x,g){if(x===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let f=0;f<u.length;f++)h(u[f]/s,p[f],g[f]);else{b.multiDrawElementsInstancedWEBGL(a,p,0,r,u,0,g,0,x);let f=0;for(let _=0;_<x;_++)f+=p[_]*g[_];t.update(f,a,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function wm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:a}}function Am(i,e,t){let a=new WeakMap,n=new Je;function r(s,o,c){let h=s.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0,u=a.get(o);if(u===void 0||u.count!==d){let v=function(){T.dispose(),a.delete(o),o.removeEventListener("dispose",v)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],w=0;p===!0&&(w=1),x===!0&&(w=2),g===!0&&(w=3);let m=o.attributes.position.count*w,M=1;m>e.maxTextureSize&&(M=Math.ceil(m/e.maxTextureSize),m=e.maxTextureSize);let A=new Float32Array(m*M*4*d),T=new er(A,m,M,d);T.type=ia,T.needsUpdate=!0;let R=w*4;for(let y=0;y<d;y++){let k=b[y],O=f[y],C=_[y],U=m*M*4*y;for(let X=0;X<k.count;X++){let B=X*R;p===!0&&(n.fromBufferAttribute(k,X),A[U+B+0]=n.x,A[U+B+1]=n.y,A[U+B+2]=n.z,A[U+B+3]=0),x===!0&&(n.fromBufferAttribute(O,X),A[U+B+4]=n.x,A[U+B+5]=n.y,A[U+B+6]=n.z,A[U+B+7]=0),g===!0&&(n.fromBufferAttribute(C,X),A[U+B+8]=n.x,A[U+B+9]=n.y,A[U+B+10]=n.z,A[U+B+11]=C.itemSize===4?n.w:1)}}u={count:d,texture:T,size:new Be(m,M)},a.set(o,u),o.addEventListener("dispose",v)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];let x=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Sm(i,e,t,a){let n=new WeakMap;function r(c){let h=a.render.frame,l=c.geometry,d=e.get(c,l);if(n.get(d)!==h&&(e.update(d),n.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;n.get(u)!==h&&(u.update(),n.set(u,h))}return d}function s(){n=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:s}}var hf=new _t,Vd=new br(1,1),lf=new er,df=new xs,ff=new rr,Wd=[],Xd=[],qd=new Float32Array(16),Kd=new Float32Array(9),Jd=new Float32Array(4);function Ni(i,e,t){let a=i[0];if(a<=0||a>0)return i;let n=e*t,r=Wd[n];if(r===void 0&&(r=new Float32Array(n),Wd[n]=r),e!==0){a.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function xt(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Co(i,e){let t=Xd[e];t===void 0&&(t=new Int32Array(e),Xd[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function Em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),xt(t,e)}}function Rm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),xt(t,e)}}function Im(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),xt(t,e)}}function km(i,e){let t=this.cache,a=e.elements;if(a===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,a))return;Jd.set(a),i.uniformMatrix2fv(this.addr,!1,Jd),xt(t,a)}}function Cm(i,e){let t=this.cache,a=e.elements;if(a===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,a))return;Kd.set(a),i.uniformMatrix3fv(this.addr,!1,Kd),xt(t,a)}}function Nm(i,e){let t=this.cache,a=e.elements;if(a===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(gt(t,a))return;qd.set(a),i.uniformMatrix4fv(this.addr,!1,qd),xt(t,a)}}function Pm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),xt(t,e)}}function Lm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),xt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),xt(t,e)}}function Um(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),xt(t,e)}}function zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),xt(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),xt(t,e)}}function jm(i,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(i.uniform1i(this.addr,n),a[0]=n);let r;this.type===i.SAMPLER_2D_SHADOW?(Vd.compareFunction=Wc,r=Vd):r=hf,t.setTexture2D(e||r,n)}function Gm(i,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(i.uniform1i(this.addr,n),a[0]=n),t.setTexture3D(e||df,n)}function Hm(i,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(i.uniform1i(this.addr,n),a[0]=n),t.setTextureCube(e||ff,n)}function Vm(i,e,t){let a=this.cache,n=t.allocateTextureUnit();a[0]!==n&&(i.uniform1i(this.addr,n),a[0]=n),t.setTexture2DArray(e||lf,n)}function Wm(i){switch(i){case 5126:return Em;case 35664:return Tm;case 35665:return Rm;case 35666:return Im;case 35674:return km;case 35675:return Cm;case 35676:return Nm;case 5124:case 35670:return Pm;case 35667:case 35671:return Dm;case 35668:case 35672:return Lm;case 35669:case 35673:return Fm;case 5125:return Um;case 36294:return Om;case 36295:return zm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Xm(i,e){i.uniform1fv(this.addr,e)}function qm(i,e){let t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Km(i,e){let t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Jm(i,e){let t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Ym(i,e){let t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zm(i,e){let t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qm(i,e){let t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $m(i,e){i.uniform1iv(this.addr,e)}function eg(i,e){i.uniform2iv(this.addr,e)}function tg(i,e){i.uniform3iv(this.addr,e)}function ag(i,e){i.uniform4iv(this.addr,e)}function ng(i,e){i.uniform1uiv(this.addr,e)}function ig(i,e){i.uniform2uiv(this.addr,e)}function rg(i,e){i.uniform3uiv(this.addr,e)}function sg(i,e){i.uniform4uiv(this.addr,e)}function og(i,e,t){let a=this.cache,n=e.length,r=Co(t,n);gt(a,r)||(i.uniform1iv(this.addr,r),xt(a,r));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||hf,r[s])}function cg(i,e,t){let a=this.cache,n=e.length,r=Co(t,n);gt(a,r)||(i.uniform1iv(this.addr,r),xt(a,r));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||df,r[s])}function hg(i,e,t){let a=this.cache,n=e.length,r=Co(t,n);gt(a,r)||(i.uniform1iv(this.addr,r),xt(a,r));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ff,r[s])}function lg(i,e,t){let a=this.cache,n=e.length,r=Co(t,n);gt(a,r)||(i.uniform1iv(this.addr,r),xt(a,r));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||lf,r[s])}function dg(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Km;case 35666:return Jm;case 35674:return Ym;case 35675:return Zm;case 35676:return Qm;case 5124:case 35670:return $m;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ag;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return cg;case 35680:case 36300:case 36308:case 36293:return hg;case 36289:case 36303:case 36311:case 36292:return lg}}var sh=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Wm(t.type)}},oh=class{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dg(t.type)}},ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){let n=this.seq;for(let r=0,s=n.length;r!==s;++r){let o=n[r];o.setValue(e,t[o.id],a)}}},rh=/(\w+)(\])?(\[|\.)?/g;function Yd(i,e){i.seq.push(e),i.map[e.id]=e}function fg(i,e,t){let a=i.name,n=a.length;for(rh.lastIndex=0;;){let r=rh.exec(a),s=rh.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&s+2===n){Yd(t,h===void 0?new sh(o,i,e):new oh(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new ch(o),Yd(t,d)),t=d}}}var Ci=class{constructor(e,t){this.seq=[],this.map={};let a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<a;++n){let r=e.getActiveUniform(t,n),s=e.getUniformLocation(t,r.name);fg(r,s,this)}}setValue(e,t,a,n){let r=this.map[t];r!==void 0&&r.setValue(e,a,n)}setOptional(e,t,a){let n=t[a];n!==void 0&&this.setValue(e,a,n)}static upload(e,t,a,n){for(let r=0,s=t.length;r!==s;++r){let o=t[r],c=a[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let a=[];for(let n=0,r=e.length;n!==r;++n){let s=e[n];s.id in t&&a.push(s)}return a}};function Zd(i,e,t){let a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}var ug=37297,bg=0;function pg(i,e){let t=i.split(`
`),a=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=n;s<r;s++){let o=s+1;a.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return a.join(`
`)}var Qd=new Ne;function mg(i){ze._getMatrix(Qd,ze.workingColorSpace,i);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch(ze.getTransfer(i)){case Zi:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function $d(i,e,t){let a=i.getShaderParameter(e,i.COMPILE_STATUS),n=i.getShaderInfoLog(e).trim();if(a&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let s=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+pg(i.getShaderSource(e),s)}else return n}function gg(i,e){let t=mg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xg(i,e){let t;switch(e){case dd:t="Linear";break;case fd:t="Reinhard";break;case ud:t="Cineon";break;case bd:t="ACESFilmic";break;case md:t="AgX";break;case Bs:t="Neutral";break;case pd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ro=new L;function yg(){ze.getLuminanceCoefficients(Ro);let i=Ro.x.toFixed(4),e=Ro.y.toFixed(4),t=Ro.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pr).join(`
`)}function _g(i){let e=[];for(let t in i){let a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function Mg(i,e){let t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let n=0;n<a;n++){let r=i.getActiveAttrib(e,n),s=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Pr(i){return i!==""}function ef(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(i){return i.replace(wg,Sg)}var Ag=new Map;function Sg(i,e){let t=Le[e];if(t===void 0){let a=Ag.get(e);if(a!==void 0)t=Le[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}var Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(i){return i.replace(Eg,Tg)}function Tg(i,e,t,a){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=a.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function nf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ra&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zn:case Bn:e="ENVMAP_TYPE_CUBE";break;case Sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bn&&(e="ENVMAP_MODE_REFRACTION"),e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case hd:e="ENVMAP_BLENDING_MIX";break;case ld:e="ENVMAP_BLENDING_ADD";break}return e}function Ng(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function Pg(i,e,t,a){let n=i.getContext(),r=t.defines,s=t.vertexShader,o=t.fragmentShader,c=Rg(t),h=Ig(t),l=kg(t),d=Cg(t),u=Ng(t),p=vg(t),x=_g(r),g=n.createProgram(),b,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),b.length>0&&(b+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Pr).join(`
`),f.length>0&&(f+=`
`)):(b=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),f=[nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qa?"#define TONE_MAPPING":"",t.toneMapping!==Qa?Le.tonemapping_pars_fragment:"",t.toneMapping!==Qa?xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),s=hh(s),s=ef(s,t),s=tf(s,t),o=hh(o),o=ef(o,t),o=tf(o,t),s=af(s),o=af(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,f=["#define varying in",t.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=_+b+s,m=_+f+o,M=Zd(n,n.VERTEX_SHADER,w),A=Zd(n,n.FRAGMENT_SHADER,m);n.attachShader(g,M),n.attachShader(g,A),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function T(k){if(i.debug.checkShaderErrors){let O=n.getProgramInfoLog(g).trim(),C=n.getShaderInfoLog(M).trim(),U=n.getShaderInfoLog(A).trim(),X=!0,B=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(n,g,M,A);else{let V=$d(n,M,"vertex"),z=$d(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+O+`
`+V+`
`+z)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(C===""||U==="")&&(B=!1);B&&(k.diagnostics={runnable:X,programLog:O,vertexShader:{log:C,prefix:b},fragmentShader:{log:U,prefix:f}})}n.deleteShader(M),n.deleteShader(A),R=new Ci(n,g),v=Mg(n,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(g,ug)),y},this.destroy=function(){a.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=A,this}var Dg=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,a=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(a),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){let t=this.shaderCache,a=t.get(e);return a===void 0&&(a=new dh(e),t.set(e,a)),a}},dh=class{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}};function Lg(i,e,t,a,n,r,s){let o=new tr,c=new lh,h=new Set,l=[],d=n.logarithmicDepthBuffer,u=n.vertexTextures,p=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return h.add(v),v===0?"uv":`uv${v}`}function b(v,y,k,O,C){let U=O.fog,X=C.geometry,B=v.isMeshStandardMaterial?O.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),z=V&&V.mapping===Sr?V.image.height:null,Z=x[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=ae!==void 0?ae.length:0,Ae=0;X.morphAttributes.position!==void 0&&(Ae=1),X.morphAttributes.normal!==void 0&&(Ae=2),X.morphAttributes.color!==void 0&&(Ae=3);let je,W,$,fe;if(Z){let Qe=ka[Z];je=Qe.vertexShader,W=Qe.fragmentShader}else je=v.vertexShader,W=v.fragmentShader,c.update(v),$=c.getVertexShaderID(v),fe=c.getFragmentShaderID(v);let re=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),ke=C.isInstancedMesh===!0,Fe=C.isBatchedMesh===!0,ct=!!v.map,We=!!v.matcap,ft=!!V,N=!!v.aoMap,ea=!!v.lightMap,Ge=!!v.bumpMap,He=!!v.normalMap,ye=!!v.displacementMap,rt=!!v.emissiveMap,ve=!!v.metalnessMap,I=!!v.roughnessMap,S=v.anisotropy>0,j=v.clearcoat>0,J=v.dispersion>0,Q=v.iridescence>0,K=v.sheen>0,xe=v.transmission>0,ce=S&&!!v.anisotropyMap,be=j&&!!v.clearcoatMap,Xe=j&&!!v.clearcoatNormalMap,te=j&&!!v.clearcoatRoughnessMap,pe=Q&&!!v.iridescenceMap,Ee=Q&&!!v.iridescenceThicknessMap,Te=K&&!!v.sheenColorMap,me=K&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,De=!!v.specularColorMap,it=!!v.specularIntensityMap,P=xe&&!!v.transmissionMap,se=xe&&!!v.thicknessMap,q=!!v.gradientMap,Y=!!v.alphaMap,le=v.alphaTest>0,he=!!v.alphaHash,Pe=!!v.extensions,ht=Qa;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ht=i.toneMapping);let Et={shaderID:Z,shaderType:v.type,shaderName:v.name,vertexShader:je,fragmentShader:W,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&C._colorsTexture!==null,instancing:ke,instancingColor:ke&&C.instanceColor!==null,instancingMorph:ke&&C.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:At,alphaToCoverage:!!v.alphaToCoverage,map:ct,matcap:We,envMap:ft,envMapMode:ft&&V.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:ea,bumpMap:Ge,normalMap:He,displacementMap:u&&ye,emissiveMap:rt,normalMapObjectSpace:He&&v.normalMapType===Md,normalMapTangentSpace:He&&v.normalMapType===Vc,metalnessMap:ve,roughnessMap:I,anisotropy:S,anisotropyMap:ce,clearcoat:j,clearcoatMap:be,clearcoatNormalMap:Xe,clearcoatRoughnessMap:te,dispersion:J,iridescence:Q,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:Te,sheenRoughnessMap:me,specularMap:Ve,specularColorMap:De,specularIntensityMap:it,transmission:xe,transmissionMap:P,thicknessMap:se,gradientMap:q,opaque:v.transparent===!1&&v.blending===Tn&&v.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:he,combine:v.combine,mapUv:ct&&g(v.map.channel),aoMapUv:N&&g(v.aoMap.channel),lightMapUv:ea&&g(v.lightMap.channel),bumpMapUv:Ge&&g(v.bumpMap.channel),normalMapUv:He&&g(v.normalMap.channel),displacementMapUv:ye&&g(v.displacementMap.channel),emissiveMapUv:rt&&g(v.emissiveMap.channel),metalnessMapUv:ve&&g(v.metalnessMap.channel),roughnessMapUv:I&&g(v.roughnessMap.channel),anisotropyMapUv:ce&&g(v.anisotropyMap.channel),clearcoatMapUv:be&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(v.sheenRoughnessMap.channel),specularMapUv:Ve&&g(v.specularMap.channel),specularColorMapUv:De&&g(v.specularColorMap.channel),specularIntensityMapUv:it&&g(v.specularIntensityMap.channel),transmissionMapUv:P&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:Y&&g(v.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(He||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!X.attributes.uv&&(ct||Y),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Se,skinning:C.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:ht,decodeVideoTexture:ct&&v.map.isVideoTexture===!0&&ze.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:rt&&v.emissiveMap.isVideoTexture===!0&&ze.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===jt,flipSided:v.side===Lt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pe&&v.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&v.extensions.multiDraw===!0||Fe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Et.vertexUv1s=h.has(1),Et.vertexUv2s=h.has(2),Et.vertexUv3s=h.has(3),h.clear(),Et}function f(v){let y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(let k in v.defines)y.push(k),y.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(_(y,v),w(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function _(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function w(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function m(v){let y=x[v.type],k;if(y){let O=ka[y];k=Ld.clone(O.uniforms)}else k=v.uniforms;return k}function M(v,y){let k;for(let O=0,C=l.length;O<C;O++){let U=l[O];if(U.cacheKey===y){k=U,++k.usedTimes;break}}return k===void 0&&(k=new Pg(i,y,v,r),l.push(k)),k}function A(v){if(--v.usedTimes===0){let y=l.indexOf(v);l[y]=l[l.length-1],l.pop(),v.destroy()}}function T(v){c.remove(v)}function R(){c.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:m,acquireProgram:M,releaseProgram:A,releaseShaderCache:T,programs:l,dispose:R}}function Fg(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function a(s){i.delete(s)}function n(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:a,update:n,dispose:r}}function Ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sf(){let i=[],e=0,t=[],a=[],n=[];function r(){e=0,t.length=0,a.length=0,n.length=0}function s(d,u,p,x,g,b){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:b},i[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=b),e++,f}function o(d,u,p,x,g,b){let f=s(d,u,p,x,g,b);p.transmission>0?a.push(f):p.transparent===!0?n.push(f):t.push(f)}function c(d,u,p,x,g,b){let f=s(d,u,p,x,g,b);p.transmission>0?a.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function h(d,u){t.length>1&&t.sort(d||Ug),a.length>1&&a.sort(u||rf),n.length>1&&n.sort(u||rf)}function l(){for(let d=e,u=i.length;d<u;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:a,transparent:n,init:r,push:o,unshift:c,finish:l,sort:h}}function Og(){let i=new WeakMap;function e(a,n){let r=i.get(a),s;return r===void 0?(s=new sf,i.set(a,[s])):n>=r.length?(s=new sf,r.push(s)):s=r[n],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Bg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var jg=0;function Gg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hg(i){let e=new zg,t=Bg(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new L);let n=new L,r=new Ce,s=new Ce;function o(h){let l=0,d=0,u=0;for(let v=0;v<9;v++)a.probe[v].set(0,0,0);let p=0,x=0,g=0,b=0,f=0,_=0,w=0,m=0,M=0,A=0,T=0;h.sort(Gg);for(let v=0,y=h.length;v<y;v++){let k=h[v],O=k.color,C=k.intensity,U=k.distance,X=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)l+=O.r*C,d+=O.g*C,u+=O.b*C;else if(k.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(k.sh.coefficients[B],C);T++}else if(k.isDirectionalLight){let B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let V=k.shadow,z=t.get(k);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,a.directionalShadow[p]=z,a.directionalShadowMap[p]=X,a.directionalShadowMatrix[p]=k.shadow.matrix,_++}a.directional[p]=B,p++}else if(k.isSpotLight){let B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(O).multiplyScalar(C),B.distance=U,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,a.spot[g]=B;let V=k.shadow;if(k.map&&(a.spotLightMap[M]=k.map,M++,V.updateMatrices(k),k.castShadow&&A++),a.spotLightMatrix[g]=V.matrix,k.castShadow){let z=t.get(k);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,a.spotShadow[g]=z,a.spotShadowMap[g]=X,m++}g++}else if(k.isRectAreaLight){let B=e.get(k);B.color.copy(O).multiplyScalar(C),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),a.rectArea[b]=B,b++}else if(k.isPointLight){let B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){let V=k.shadow,z=t.get(k);z.shadowIntensity=V.intensity,z.shadowBias=V.bias,z.shadowNormalBias=V.normalBias,z.shadowRadius=V.radius,z.shadowMapSize=V.mapSize,z.shadowCameraNear=V.camera.near,z.shadowCameraFar=V.camera.far,a.pointShadow[x]=z,a.pointShadowMap[x]=X,a.pointShadowMatrix[x]=k.shadow.matrix,w++}a.point[x]=B,x++}else if(k.isHemisphereLight){let B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(C),B.groundColor.copy(k.groundColor).multiplyScalar(C),a.hemi[f]=B,f++}}b>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ie.LTC_FLOAT_1,a.rectAreaLTC2=ie.LTC_FLOAT_2):(a.rectAreaLTC1=ie.LTC_HALF_1,a.rectAreaLTC2=ie.LTC_HALF_2)),a.ambient[0]=l,a.ambient[1]=d,a.ambient[2]=u;let R=a.hash;(R.directionalLength!==p||R.pointLength!==x||R.spotLength!==g||R.rectAreaLength!==b||R.hemiLength!==f||R.numDirectionalShadows!==_||R.numPointShadows!==w||R.numSpotShadows!==m||R.numSpotMaps!==M||R.numLightProbes!==T)&&(a.directional.length=p,a.spot.length=g,a.rectArea.length=b,a.point.length=x,a.hemi.length=f,a.directionalShadow.length=_,a.directionalShadowMap.length=_,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=m,a.spotShadowMap.length=m,a.directionalShadowMatrix.length=_,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=m+M-A,a.spotLightMap.length=M,a.numSpotLightShadowsWithMaps=A,a.numLightProbes=T,R.directionalLength=p,R.pointLength=x,R.spotLength=g,R.rectAreaLength=b,R.hemiLength=f,R.numDirectionalShadows=_,R.numPointShadows=w,R.numSpotShadows=m,R.numSpotMaps=M,R.numLightProbes=T,a.version=jg++)}function c(h,l){let d=0,u=0,p=0,x=0,g=0,b=l.matrixWorldInverse;for(let f=0,_=h.length;f<_;f++){let w=h[f];if(w.isDirectionalLight){let m=a.directional[d];m.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(b),d++}else if(w.isSpotLight){let m=a.spot[p];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),m.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),m.direction.sub(n),m.direction.transformDirection(b),p++}else if(w.isRectAreaLight){let m=a.rectArea[x];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),s.identity(),r.copy(w.matrixWorld),r.premultiply(b),s.extractRotation(r),m.halfWidth.set(w.width*.5,0,0),m.halfHeight.set(0,w.height*.5,0),m.halfWidth.applyMatrix4(s),m.halfHeight.applyMatrix4(s),x++}else if(w.isPointLight){let m=a.point[u];m.position.setFromMatrixPosition(w.matrixWorld),m.position.applyMatrix4(b),u++}else if(w.isHemisphereLight){let m=a.hemi[g];m.direction.setFromMatrixPosition(w.matrixWorld),m.direction.transformDirection(b),g++}}}return{setup:o,setupView:c,state:a}}function of(i){let e=new Hg(i),t=[],a=[];function n(l){h.camera=l,t.length=0,a.length=0}function r(l){t.push(l)}function s(l){a.push(l)}function o(){e.setup(t)}function c(l){e.setupView(t,l)}let h={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function Vg(i){let e=new WeakMap;function t(n,r=0){let s=e.get(n),o;return s===void 0?(o=new of(i),e.set(n,[o])):r>=s.length?(o=new of(i),s.push(o)):o=s[r],o}function a(){e=new WeakMap}return{get:t,dispose:a}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qg(i,e,t){let a=new _i,n=new Be,r=new Be,s=new Je,o=new ws({depthPacking:_d}),c=new As,h={},l=t.maxTextureSize,d={[ba]:Lt,[Lt]:ba,[jt]:jt},u=new ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Yt;x.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new St(x,u),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let f=this.type;this.render=function(A,T,R){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),y=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Za),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let C=f!==Ra&&this.type===Ra,U=f===Ra&&this.type!==Ra;for(let X=0,B=A.length;X<B;X++){let V=A[X],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);let Z=z.getFrameExtents();if(n.multiply(Z),r.copy(z.mapSize),(n.x>l||n.y>l)&&(n.x>l&&(r.x=Math.floor(l/Z.x),n.x=r.x*Z.x,z.mapSize.x=r.x),n.y>l&&(r.y=Math.floor(l/Z.y),n.y=r.y*Z.y,z.mapSize.y=r.y)),z.map===null||C===!0||U===!0){let de=this.type!==Ra?{minFilter:wt,magFilter:wt}:{};z.map!==null&&z.map.dispose(),z.map=new wa(n.x,n.y,de),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();let ae=z.getViewportCount();for(let de=0;de<ae;de++){let Ae=z.getViewport(de);s.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),O.viewport(s),z.updateMatrices(V,de),a=z.getFrustum(),m(T,R,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Ra&&_(z,R),z.needsUpdate=!1}f=this.type,b.needsUpdate=!1,i.setRenderTarget(v,y,k)};function _(A,T){let R=e.update(g);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wa(n.x,n.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,p,g,null)}function w(A,T,R,v){let y=null,k=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(k!==void 0)y=k;else if(y=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let O=y.uuid,C=T.uuid,U=h[O];U===void 0&&(U={},h[O]=U);let X=U[C];X===void 0&&(X=y.clone(),U[C]=X,T.addEventListener("dispose",M)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,v===Ra?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=i.properties.get(y);O.light=R}return y}function m(A,T,R,v,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ra)&&(!A.frustumCulled||a.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);let C=e.update(A),U=A.material;if(Array.isArray(U)){let X=C.groups;for(let B=0,V=X.length;B<V;B++){let z=X[B],Z=U[z.materialIndex];if(Z&&Z.visible){let ae=w(A,Z,v,y);A.onBeforeShadow(i,A,T,R,C,ae,z),i.renderBufferDirect(R,null,C,ae,A,z),A.onAfterShadow(i,A,T,R,C,ae,z)}}}else if(U.visible){let X=w(A,U,v,y);A.onBeforeShadow(i,A,T,R,C,X,null),i.renderBufferDirect(R,null,C,X,A,null),A.onAfterShadow(i,A,T,R,C,X,null)}}let O=A.children;for(let C=0,U=O.length;C<U;C++)m(O[C],T,R,v,y)}function M(A){A.target.removeEventListener("dispose",M);for(let R in h){let v=h[R],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}var Kg={[Ps]:Ds,[Ls]:Os,[Fs]:zs,[Rn]:Us,[Ds]:Ps,[Os]:Ls,[zs]:Fs,[Us]:Rn};function Jg(i,e){function t(){let P=!1,se=new Je,q=null,Y=new Je(0,0,0,0);return{setMask:function(le){q!==le&&!P&&(i.colorMask(le,le,le,le),q=le)},setLocked:function(le){P=le},setClear:function(le,he,Pe,ht,Et){Et===!0&&(le*=ht,he*=ht,Pe*=ht),se.set(le,he,Pe,ht),Y.equals(se)===!1&&(i.clearColor(le,he,Pe,ht),Y.copy(se))},reset:function(){P=!1,q=null,Y.set(-1,0,0,0)}}}function a(){let P=!1,se=!1,q=null,Y=null,le=null;return{setReversed:function(he){if(se!==he){let Pe=e.get("EXT_clip_control");se?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT);let ht=le;le=null,this.setClear(ht)}se=he},getReversed:function(){return se},setTest:function(he){he?re(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(he){q!==he&&!P&&(i.depthMask(he),q=he)},setFunc:function(he){if(se&&(he=Kg[he]),Y!==he){switch(he){case Ps:i.depthFunc(i.NEVER);break;case Ds:i.depthFunc(i.ALWAYS);break;case Ls:i.depthFunc(i.LESS);break;case Rn:i.depthFunc(i.LEQUAL);break;case Fs:i.depthFunc(i.EQUAL);break;case Us:i.depthFunc(i.GEQUAL);break;case Os:i.depthFunc(i.GREATER);break;case zs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=he}},setLocked:function(he){P=he},setClear:function(he){le!==he&&(se&&(he=1-he),i.clearDepth(he),le=he)},reset:function(){P=!1,q=null,Y=null,le=null,se=!1}}}function n(){let P=!1,se=null,q=null,Y=null,le=null,he=null,Pe=null,ht=null,Et=null;return{setTest:function(Qe){P||(Qe?re(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Qe){se!==Qe&&!P&&(i.stencilMask(Qe),se=Qe)},setFunc:function(Qe,oa,Ua){(q!==Qe||Y!==oa||le!==Ua)&&(i.stencilFunc(Qe,oa,Ua),q=Qe,Y=oa,le=Ua)},setOp:function(Qe,oa,Ua){(he!==Qe||Pe!==oa||ht!==Ua)&&(i.stencilOp(Qe,oa,Ua),he=Qe,Pe=oa,ht=Ua)},setLocked:function(Qe){P=Qe},setClear:function(Qe){Et!==Qe&&(i.clearStencil(Qe),Et=Qe)},reset:function(){P=!1,se=null,q=null,Y=null,le=null,he=null,Pe=null,ht=null,Et=null}}}let r=new t,s=new a,o=new n,c=new WeakMap,h=new WeakMap,l={},d={},u=new WeakMap,p=[],x=null,g=!1,b=null,f=null,_=null,w=null,m=null,M=null,A=null,T=new we(0,0,0),R=0,v=!1,y=null,k=null,O=null,C=null,U=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,V=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(z)[1]),B=V>=1):z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),B=V>=2);let Z=null,ae={},de=i.getParameter(i.SCISSOR_BOX),Ae=i.getParameter(i.VIEWPORT),je=new Je().fromArray(de),W=new Je().fromArray(Ae);function $(P,se,q,Y){let le=new Uint8Array(4),he=i.createTexture();i.bindTexture(P,he),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<q;Pe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return he}let fe={};fe[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(i.DEPTH_TEST),s.setFunc(Rn),Ge(!1),He(Tc),re(i.CULL_FACE),N(Za);function re(P){l[P]!==!0&&(i.enable(P),l[P]=!0)}function Se(P){l[P]!==!1&&(i.disable(P),l[P]=!1)}function ke(P,se){return d[P]!==se?(i.bindFramebuffer(P,se),d[P]=se,P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=se),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Fe(P,se){let q=p,Y=!1;if(P){q=u.get(se),q===void 0&&(q=[],u.set(se,q));let le=P.textures;if(q.length!==le.length||q[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Pe=le.length;he<Pe;he++)q[he]=i.COLOR_ATTACHMENT0+he;q.length=le.length,Y=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Y=!0);Y&&i.drawBuffers(q)}function ct(P){return x!==P?(i.useProgram(P),x=P,!0):!1}let We={[fn]:i.FUNC_ADD,[Xl]:i.FUNC_SUBTRACT,[ql]:i.FUNC_REVERSE_SUBTRACT};We[Kl]=i.MIN,We[Jl]=i.MAX;let ft={[Yl]:i.ZERO,[Zl]:i.ONE,[Ql]:i.SRC_COLOR,[us]:i.SRC_ALPHA,[id]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[ed]:i.DST_ALPHA,[$l]:i.ONE_MINUS_SRC_COLOR,[bs]:i.ONE_MINUS_SRC_ALPHA,[nd]:i.ONE_MINUS_DST_COLOR,[td]:i.ONE_MINUS_DST_ALPHA,[rd]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[od]:i.CONSTANT_ALPHA,[cd]:i.ONE_MINUS_CONSTANT_ALPHA};function N(P,se,q,Y,le,he,Pe,ht,Et,Qe){if(P===Za){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(re(i.BLEND),g=!0),P!==Wl){if(P!==b||Qe!==v){if((f!==fn||m!==fn)&&(i.blendEquation(i.FUNC_ADD),f=fn,m=fn),Qe)switch(P){case Tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ic:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,w=null,M=null,A=null,T.set(0,0,0),R=0,b=P,v=Qe}return}le=le||se,he=he||q,Pe=Pe||Y,(se!==f||le!==m)&&(i.blendEquationSeparate(We[se],We[le]),f=se,m=le),(q!==_||Y!==w||he!==M||Pe!==A)&&(i.blendFuncSeparate(ft[q],ft[Y],ft[he],ft[Pe]),_=q,w=Y,M=he,A=Pe),(ht.equals(T)===!1||Et!==R)&&(i.blendColor(ht.r,ht.g,ht.b,Et),T.copy(ht),R=Et),b=P,v=!1}function ea(P,se){P.side===jt?Se(i.CULL_FACE):re(i.CULL_FACE);let q=P.side===Lt;se&&(q=!q),Ge(q),P.blending===Tn&&P.transparent===!1?N(Za):N(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),s.setFunc(P.depthFunc),s.setTest(P.depthTest),s.setMask(P.depthWrite),r.setMask(P.colorWrite);let Y=P.stencilWrite;o.setTest(Y),Y&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(P){y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),y=P)}function He(P){P!==Gl?(re(i.CULL_FACE),P!==k&&(P===Tc?i.cullFace(i.BACK):P===Hl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),k=P}function ye(P){P!==O&&(B&&i.lineWidth(P),O=P)}function rt(P,se,q){P?(re(i.POLYGON_OFFSET_FILL),(C!==se||U!==q)&&(i.polygonOffset(se,q),C=se,U=q)):Se(i.POLYGON_OFFSET_FILL)}function ve(P){P?re(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function I(P){P===void 0&&(P=i.TEXTURE0+X-1),Z!==P&&(i.activeTexture(P),Z=P)}function S(P,se,q){q===void 0&&(Z===null?q=i.TEXTURE0+X-1:q=Z);let Y=ae[q];Y===void 0&&(Y={type:void 0,texture:void 0},ae[q]=Y),(Y.type!==P||Y.texture!==se)&&(Z!==q&&(i.activeTexture(q),Z=q),i.bindTexture(P,se||fe[P]),Y.type=P,Y.texture=se)}function j(){let P=ae[Z];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(P){je.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),je.copy(P))}function me(P){W.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),W.copy(P))}function Ve(P,se){let q=h.get(se);q===void 0&&(q=new WeakMap,h.set(se,q));let Y=q.get(P);Y===void 0&&(Y=i.getUniformBlockIndex(se,P.name),q.set(P,Y))}function De(P,se){let Y=h.get(se).get(P);c.get(se)!==Y&&(i.uniformBlockBinding(se,Y,P.__bindingPointIndex),c.set(se,Y))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Z=null,ae={},d={},u=new WeakMap,p=[],x=null,g=!1,b=null,f=null,_=null,w=null,m=null,M=null,A=null,T=new we(0,0,0),R=0,v=!1,y=null,k=null,O=null,C=null,U=null,je.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:re,disable:Se,bindFramebuffer:ke,drawBuffers:Fe,useProgram:ct,setBlending:N,setMaterial:ea,setFlipSided:Ge,setCullFace:He,setLineWidth:ye,setPolygonOffset:rt,setScissorTest:ve,activeTexture:I,bindTexture:S,unbindTexture:j,compressedTexImage2D:J,compressedTexImage3D:Q,texImage2D:pe,texImage3D:Ee,updateUBOMapping:Ve,uniformBlockBinding:De,texStorage2D:Xe,texStorage3D:te,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:be,scissor:Te,viewport:me,reset:it}}function Yg(i,e,t,a,n,r,s){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Be,l=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(I,S){return p?new OffscreenCanvas(I,S):mi("canvas")}function g(I,S,j){let J=1,Q=ve(I);if((Q.width>j||Q.height>j)&&(J=j/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let K=Math.floor(J*Q.width),xe=Math.floor(J*Q.height);d===void 0&&(d=x(K,xe));let ce=S?x(K,xe):d;return ce.width=K,ce.height=xe,ce.getContext("2d").drawImage(I,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+xe+")."),ce}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),I;return I}function b(I){return I.generateMipmaps}function f(I){i.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(I,S,j,J,Q=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=S;if(S===i.RED&&(j===i.FLOAT&&(K=i.R32F),j===i.HALF_FLOAT&&(K=i.R16F),j===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(K=i.R8UI),j===i.UNSIGNED_SHORT&&(K=i.R16UI),j===i.UNSIGNED_INT&&(K=i.R32UI),j===i.BYTE&&(K=i.R8I),j===i.SHORT&&(K=i.R16I),j===i.INT&&(K=i.R32I)),S===i.RG&&(j===i.FLOAT&&(K=i.RG32F),j===i.HALF_FLOAT&&(K=i.RG16F),j===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(K=i.RG8UI),j===i.UNSIGNED_SHORT&&(K=i.RG16UI),j===i.UNSIGNED_INT&&(K=i.RG32UI),j===i.BYTE&&(K=i.RG8I),j===i.SHORT&&(K=i.RG16I),j===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(K=i.RGB8UI),j===i.UNSIGNED_SHORT&&(K=i.RGB16UI),j===i.UNSIGNED_INT&&(K=i.RGB32UI),j===i.BYTE&&(K=i.RGB8I),j===i.SHORT&&(K=i.RGB16I),j===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),j===i.UNSIGNED_INT&&(K=i.RGBA32UI),j===i.BYTE&&(K=i.RGBA8I),j===i.SHORT&&(K=i.RGBA16I),j===i.INT&&(K=i.RGBA32I)),S===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){let xe=Q?Zi:ze.getTransfer(J);j===i.FLOAT&&(K=i.RGBA32F),j===i.HALF_FLOAT&&(K=i.RGBA16F),j===i.UNSIGNED_BYTE&&(K=xe===et?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function m(I,S){let j;return I?S===null||S===pn||S===Gn?j=i.DEPTH24_STENCIL8:S===ia?j=i.DEPTH32F_STENCIL8:S===Ei&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===pn||S===Gn?j=i.DEPTH_COMPONENT24:S===ia?j=i.DEPTH_COMPONENT32F:S===Ei&&(j=i.DEPTH_COMPONENT16),j}function M(I,S){return b(I)===!0||I.isFramebufferTexture&&I.minFilter!==wt&&I.minFilter!==Dt?Math.log2(Math.max(S.width,S.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?S.mipmaps.length:1}function A(I){let S=I.target;S.removeEventListener("dispose",A),R(S),S.isVideoTexture&&l.delete(S)}function T(I){let S=I.target;S.removeEventListener("dispose",T),y(S)}function R(I){let S=a.get(I);if(S.__webglInit===void 0)return;let j=I.source,J=u.get(j);if(J){let Q=J[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(I),Object.keys(J).length===0&&u.delete(j)}a.remove(I)}function v(I){let S=a.get(I);i.deleteTexture(S.__webglTexture);let j=I.source,J=u.get(j);delete J[S.__cacheKey],s.memory.textures--}function y(I){let S=a.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),a.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let Q=0;Q<S.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let j=I.textures;for(let J=0,Q=j.length;J<Q;J++){let K=a.get(j[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),s.memory.textures--),a.remove(j[J])}a.remove(I)}let k=0;function O(){k=0}function C(){let I=k;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),k+=1,I}function U(I){let S=[];return S.push(I.wrapS),S.push(I.wrapT),S.push(I.wrapR||0),S.push(I.magFilter),S.push(I.minFilter),S.push(I.anisotropy),S.push(I.internalFormat),S.push(I.format),S.push(I.type),S.push(I.generateMipmaps),S.push(I.premultiplyAlpha),S.push(I.flipY),S.push(I.unpackAlignment),S.push(I.colorSpace),S.join()}function X(I,S){let j=a.get(I);if(I.isVideoTexture&&ye(I),I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){let J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(j,I,S);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+S)}function B(I,S){let j=a.get(I);if(I.version>0&&j.__version!==I.version){W(j,I,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+S)}function V(I,S){let j=a.get(I);if(I.version>0&&j.__version!==I.version){W(j,I,S);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+S)}function z(I,S){let j=a.get(I);if(I.version>0&&j.__version!==I.version){$(j,I,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+S)}let Z={[un]:i.REPEAT,[va]:i.CLAMP_TO_EDGE,[pi]:i.MIRRORED_REPEAT},ae={[wt]:i.NEAREST,[Hs]:i.NEAREST_MIPMAP_NEAREST,[jn]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Si]:i.LINEAR_MIPMAP_NEAREST,[xa]:i.LINEAR_MIPMAP_LINEAR},de={[wd]:i.NEVER,[Id]:i.ALWAYS,[Ad]:i.LESS,[Wc]:i.LEQUAL,[Sd]:i.EQUAL,[Rd]:i.GEQUAL,[Ed]:i.GREATER,[Td]:i.NOTEQUAL};function Ae(I,S){if(S.type===ia&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Dt||S.magFilter===Si||S.magFilter===jn||S.magFilter===xa||S.minFilter===Dt||S.minFilter===Si||S.minFilter===jn||S.minFilter===xa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Z[S.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,de[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wt||S.minFilter!==jn&&S.minFilter!==xa||S.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||a.get(S).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),a.get(S).__currentAnisotropy=S.anisotropy}}}function je(I,S){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,S.addEventListener("dispose",A));let J=S.source,Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));let K=U(S);if(K!==I.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,j=!0),Q[K].usedTimes++;let xe=Q[I.__cacheKey];xe!==void 0&&(Q[I.__cacheKey].usedTimes--,xe.usedTimes===0&&v(S)),I.__cacheKey=K,I.__webglTexture=Q[K].texture}return j}function W(I,S,j){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);let Q=je(I,S),K=S.source;t.bindTexture(J,I.__webglTexture,i.TEXTURE0+j);let xe=a.get(K);if(K.version!==xe.__version||Q===!0){t.activeTexture(i.TEXTURE0+j);let ce=ze.getPrimaries(ze.workingColorSpace),be=S.colorSpace===$a?null:ze.getPrimaries(S.colorSpace),Xe=S.colorSpace===$a||ce===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let te=g(S.image,!1,n.maxTextureSize);te=rt(S,te);let pe=r.convert(S.format,S.colorSpace),Ee=r.convert(S.type),Te=w(S.internalFormat,pe,Ee,S.colorSpace,S.isVideoTexture);Ae(J,S);let me,Ve=S.mipmaps,De=S.isVideoTexture!==!0,it=xe.__version===void 0||Q===!0,P=K.dataReady,se=M(S,te);if(S.isDepthTexture)Te=m(S.format===In,S.type),it&&(De?t.texStorage2D(i.TEXTURE_2D,1,Te,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Te,te.width,te.height,0,pe,Ee,null));else if(S.isDataTexture)if(Ve.length>0){De&&it&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ve[0].width,Ve[0].height);for(let q=0,Y=Ve.length;q<Y;q++)me=Ve[q],De?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,q,Te,me.width,me.height,0,pe,Ee,me.data);S.generateMipmaps=!1}else De?(it&&t.texStorage2D(i.TEXTURE_2D,se,Te,te.width,te.height),P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,pe,Ee,te.data)):t.texImage2D(i.TEXTURE_2D,0,Te,te.width,te.height,0,pe,Ee,te.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,Ve[0].width,Ve[0].height,te.depth);for(let q=0,Y=Ve.length;q<Y;q++)if(me=Ve[q],S.format!==$t)if(pe!==null)if(De){if(P)if(S.layerUpdates.size>0){let le=$c(me.width,me.height,S.format,S.type);for(let he of S.layerUpdates){let Pe=me.data.subarray(he*le/me.data.BYTES_PER_ELEMENT,(he+1)*le/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,he,me.width,me.height,1,pe,Pe)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Te,me.width,me.height,te.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?P&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,te.depth,pe,Ee,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Te,me.width,me.height,te.depth,0,pe,Ee,me.data)}else{De&&it&&t.texStorage2D(i.TEXTURE_2D,se,Te,Ve[0].width,Ve[0].height);for(let q=0,Y=Ve.length;q<Y;q++)me=Ve[q],S.format!==$t?pe!==null?De?P&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Te,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,Ee,me.data):t.texImage2D(i.TEXTURE_2D,q,Te,me.width,me.height,0,pe,Ee,me.data)}else if(S.isDataArrayTexture)if(De){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Te,te.width,te.height,te.depth),P)if(S.layerUpdates.size>0){let q=$c(te.width,te.height,S.format,S.type);for(let Y of S.layerUpdates){let le=te.data.subarray(Y*q/te.data.BYTES_PER_ELEMENT,(Y+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,pe,Ee,le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,pe,Ee,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,te.width,te.height,te.depth,0,pe,Ee,te.data);else if(S.isData3DTexture)De?(it&&t.texStorage3D(i.TEXTURE_3D,se,Te,te.width,te.height,te.depth),P&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,pe,Ee,te.data)):t.texImage3D(i.TEXTURE_3D,0,Te,te.width,te.height,te.depth,0,pe,Ee,te.data);else if(S.isFramebufferTexture){if(it)if(De)t.texStorage2D(i.TEXTURE_2D,se,Te,te.width,te.height);else{let q=te.width,Y=te.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,Te,q,Y,0,pe,Ee,null),q>>=1,Y>>=1}}else if(Ve.length>0){if(De&&it){let q=ve(Ve[0]);t.texStorage2D(i.TEXTURE_2D,se,Te,q.width,q.height)}for(let q=0,Y=Ve.length;q<Y;q++)me=Ve[q],De?P&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe,Ee,me):t.texImage2D(i.TEXTURE_2D,q,Te,pe,Ee,me);S.generateMipmaps=!1}else if(De){if(it){let q=ve(te);t.texStorage2D(i.TEXTURE_2D,se,Te,q.width,q.height)}P&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ee,te)}else t.texImage2D(i.TEXTURE_2D,0,Te,pe,Ee,te);b(S)&&f(J),xe.__version=K.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function $(I,S,j){if(S.image.length!==6)return;let J=je(I,S),Q=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+j);let K=a.get(Q);if(Q.version!==K.__version||J===!0){t.activeTexture(i.TEXTURE0+j);let xe=ze.getPrimaries(ze.workingColorSpace),ce=S.colorSpace===$a?null:ze.getPrimaries(S.colorSpace),be=S.colorSpace===$a||xe===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,te=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let Y=0;Y<6;Y++)!Xe&&!te?pe[Y]=g(S.image[Y],!0,n.maxCubemapSize):pe[Y]=te?S.image[Y].image:S.image[Y],pe[Y]=rt(S,pe[Y]);let Ee=pe[0],Te=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Ve=w(S.internalFormat,Te,me,S.colorSpace),De=S.isVideoTexture!==!0,it=K.__version===void 0||J===!0,P=Q.dataReady,se=M(S,Ee);Ae(i.TEXTURE_CUBE_MAP,S);let q;if(Xe){De&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ve,Ee.width,Ee.height);for(let Y=0;Y<6;Y++){q=pe[Y].mipmaps;for(let le=0;le<q.length;le++){let he=q[le];S.format!==$t?Te!==null?De?P&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,he.width,he.height,Te,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,Ve,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,he.width,he.height,Te,me,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,Ve,he.width,he.height,0,Te,me,he.data)}}}else{if(q=S.mipmaps,De&&it){q.length>0&&se++;let Y=ve(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ve,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,pe[Y].width,pe[Y].height,Te,me,pe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,pe[Y].width,pe[Y].height,0,Te,me,pe[Y].data);for(let le=0;le<q.length;le++){let Pe=q[le].image[Y].image;De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Pe.width,Pe.height,Te,me,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,Ve,Pe.width,Pe.height,0,Te,me,Pe.data)}}else{De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,me,pe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ve,Te,me,pe[Y]);for(let le=0;le<q.length;le++){let he=q[le];De?P&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Te,me,he.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,Ve,Te,me,he.image[Y])}}}b(S)&&f(i.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}I.__version=S.version}function fe(I,S,j,J,Q,K){let xe=r.convert(j.format,j.colorSpace),ce=r.convert(j.type),be=w(j.internalFormat,xe,ce,j.colorSpace),Xe=a.get(S),te=a.get(j);if(te.__renderTarget=S,!Xe.__hasExternalTextures){let pe=Math.max(1,S.width>>K),Ee=Math.max(1,S.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,be,pe,Ee,S.depth,0,xe,ce,null):t.texImage2D(Q,K,be,pe,Ee,0,xe,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),He(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,Q,te.__webglTexture,0,Ge(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,Q,te.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(I,S,j){if(i.bindRenderbuffer(i.RENDERBUFFER,I),S.depthBuffer){let J=S.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=m(S.stencilBuffer,Q),xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=Ge(S);He(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,K,S.width,S.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,I)}else{let J=S.textures;for(let Q=0;Q<J.length;Q++){let K=J[Q],xe=r.convert(K.format,K.colorSpace),ce=r.convert(K.type),be=w(K.internalFormat,xe,ce,K.colorSpace),Xe=Ge(S);j&&He(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,be,S.width,S.height):He(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Xe,be,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,be,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(I,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=a.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);let Q=J.__webglTexture,K=Ge(S);if(S.depthTexture.format===En)He(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===In)He(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ke(I){let S=a.get(I),j=I.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==I.depthTexture){let J=I.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=J}if(I.depthTexture&&!S.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,I)}else if(j){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),re(S.__webglDepthbuffer[J],I,!1);else{let Q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,I,!1);else{let J=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,Q)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(I,S,j){let J=a.get(I);S!==void 0&&fe(J.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&ke(I)}function ct(I){let S=I.texture,j=a.get(I),J=a.get(S);I.addEventListener("dispose",T);let Q=I.textures,K=I.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,s.memory.textures++),K){j.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer[ce]=[];for(let be=0;be<S.mipmaps.length;be++)j.__webglFramebuffer[ce][be]=i.createFramebuffer()}else j.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){j.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)j.__webglFramebuffer[ce]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(xe)for(let ce=0,be=Q.length;ce<be;ce++){let Xe=a.get(Q[ce]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),s.memory.textures++)}if(I.samples>0&&He(I)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let be=Q[ce];j.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[ce]);let Xe=r.convert(be.format,be.colorSpace),te=r.convert(be.type),pe=w(be.internalFormat,Xe,te,be.colorSpace,I.isXRRenderTarget===!0),Ee=Ge(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,pe,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,j.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),re(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(i.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)fe(j.__webglFramebuffer[ce][be],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else fe(j.__webglFramebuffer[ce],I,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);b(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ce=0,be=Q.length;ce<be;ce++){let Xe=Q[ce],te=a.get(Xe);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ae(i.TEXTURE_2D,Xe),fe(j.__webglFramebuffer,I,Xe,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,0),b(Xe)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ce=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),Ae(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let be=0;be<S.mipmaps.length;be++)fe(j.__webglFramebuffer[be],I,S,i.COLOR_ATTACHMENT0,ce,be);else fe(j.__webglFramebuffer,I,S,i.COLOR_ATTACHMENT0,ce,0);b(S)&&f(ce),t.unbindTexture()}I.depthBuffer&&ke(I)}function We(I){let S=I.textures;for(let j=0,J=S.length;j<J;j++){let Q=S[j];if(b(Q)){let K=_(I),xe=a.get(Q).__webglTexture;t.bindTexture(K,xe),f(K),t.unbindTexture()}}}let ft=[],N=[];function ea(I){if(I.samples>0){if(He(I)===!1){let S=I.textures,j=I.width,J=I.height,Q=i.COLOR_BUFFER_BIT,K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=a.get(I),ce=S.length>1;if(ce)for(let be=0;be<S.length;be++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let be=0;be<S.length;be++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);let Xe=a.get(S[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Xe,0)}i.blitFramebuffer(0,0,j,J,0,0,j,J,Q,i.NEAREST),c===!0&&(ft.length=0,N.length=0,ft.push(i.COLOR_ATTACHMENT0+be),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ft.push(K),N.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let be=0;be<S.length;be++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,xe.__webglColorRenderbuffer[be]);let Xe=a.get(S[be]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,Xe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let S=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ge(I){return Math.min(n.maxSamples,I.samples)}function He(I){let S=a.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ye(I){let S=s.render.frame;l.get(I)!==S&&(l.set(I,S),I.update())}function rt(I,S){let j=I.colorSpace,J=I.format,Q=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==At&&j!==$a&&(ze.getTransfer(j)===et?(J!==$t||Q!==Ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),S}function ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=z,this.rebindTextures=Fe,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ea,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=He}function Zg(i,e){function t(a,n=$a){let r,s=ze.getTransfer(n);if(a===Ia)return i.UNSIGNED_BYTE;if(a===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Xs)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===Dc)return i.BYTE;if(a===Lc)return i.SHORT;if(a===Ei)return i.UNSIGNED_SHORT;if(a===Vs)return i.INT;if(a===pn)return i.UNSIGNED_INT;if(a===ia)return i.FLOAT;if(a===Ti)return i.HALF_FLOAT;if(a===Uc)return i.ALPHA;if(a===Oc)return i.RGB;if(a===$t)return i.RGBA;if(a===zc)return i.LUMINANCE;if(a===Bc)return i.LUMINANCE_ALPHA;if(a===En)return i.DEPTH_COMPONENT;if(a===In)return i.DEPTH_STENCIL;if(a===qs)return i.RED;if(a===Ks)return i.RED_INTEGER;if(a===jc)return i.RG;if(a===Js)return i.RG_INTEGER;if(a===Ys)return i.RGBA_INTEGER;if(a===Er||a===Tr||a===Rr||a===Ir)if(s===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(a===Er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(a===Er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ir)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Zs||a===Qs||a===$s||a===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(a===Zs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Qs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$s)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===to||a===ao||a===no)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(a===to||a===ao)return s===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(a===no)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===io||a===ro||a===so||a===oo||a===co||a===ho||a===lo||a===fo||a===uo||a===bo||a===po||a===mo||a===go||a===xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(a===io)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ro)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===so)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===oo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===co)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ho)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===lo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===uo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===bo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===po)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===mo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===go)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xo)return s===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===kr||a===yo||a===vo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(a===kr)return s===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Gc||a===_o||a===Mo||a===wo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(a===kr)return r.COMPRESSED_RED_RGTC1_EXT;if(a===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gn?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}var Qg={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let n=null,r=null,s=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(let g of e.hand.values()){let b=t.getJointPose(g,a),f=this._getHandJoint(h,g);b!==null&&(f.matrix.fromArray(b.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=b.radius),f.visible=b!==null}let l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),p=.02,x=.005;h.inputState.pinching&&u>p+x?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-x&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,a),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let a=new Zt;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}},$g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ex=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,fh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){let n=new _t,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=a.depthNear||t.depthFar!=a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,a=new ga({vertexShader:$g,fragmentShader:ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new pr(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends Ma{constructor(e,t){super();let a=this,n=null,r=1,s=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,p=null,x=null,g=new fh,b=t.getContextAttributes(),f=null,_=null,w=[],m=[],M=new Be,A=null,T=new vt;T.viewport=new Je;let R=new vt;R.viewport=new Je;let v=[T,R],y=new ks,k=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=w[W];return $===void 0&&($=new Dr,w[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=w[W];return $===void 0&&($=new Dr,w[W]=$),$.getGripSpace()},this.getHand=function(W){let $=w[W];return $===void 0&&($=new Dr,w[W]=$),$.getHandSpace()};function C(W){let $=m.indexOf(W.inputSource);if($===-1)return;let fe=w[$];fe!==void 0&&(fe.update(W.inputSource,W.frame,h||s),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function U(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",U),n.removeEventListener("inputsourceschange",X);for(let W=0;W<w.length;W++){let $=m[W];$!==null&&(m[W]=null,w[W].disconnect($))}k=null,O=null,g.reset(),e.setRenderTarget(f),p=null,u=null,d=null,n=null,_=null,je.stop(),a.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(f=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",U),n.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),n.renderState.layers===void 0){let $={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,t,$),n.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new wa(p.framebufferWidth,p.framebufferHeight,{format:$t,type:Ia,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let $=null,fe=null,re=null;b.depth&&(re=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=b.stencil?In:En,fe=b.stencil?Gn:pn);let Se={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Se),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new wa(u.textureWidth,u.textureHeight,{format:$t,type:Ia,depthTexture:new br(u.textureWidth,u.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await n.requestReferenceSpace(o),je.setContext(n),je.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(W){for(let $=0;$<W.removed.length;$++){let fe=W.removed[$],re=m.indexOf(fe);re>=0&&(m[re]=null,w[re].disconnect(fe))}for(let $=0;$<W.added.length;$++){let fe=W.added[$],re=m.indexOf(fe);if(re===-1){for(let ke=0;ke<w.length;ke++)if(ke>=m.length){m.push(fe),re=ke;break}else if(m[ke]===null){m[ke]=fe,re=ke;break}if(re===-1)break}let Se=w[re];Se&&Se.connect(fe)}}let B=new L,V=new L;function z(W,$,fe){B.setFromMatrixPosition($.matrixWorld),V.setFromMatrixPosition(fe.matrixWorld);let re=B.distanceTo(V),Se=$.projectionMatrix.elements,ke=fe.projectionMatrix.elements,Fe=Se[14]/(Se[10]-1),ct=Se[14]/(Se[10]+1),We=(Se[9]+1)/Se[5],ft=(Se[9]-1)/Se[5],N=(Se[8]-1)/Se[0],ea=(ke[8]+1)/ke[0],Ge=Fe*N,He=Fe*ea,ye=re/(-N+ea),rt=ye*-N;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(rt),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ve=Fe+ye,I=ct+ye,S=Ge-rt,j=He+(re-rt),J=We*ct/I*ve,Q=ft*ct/I*ve;W.projectionMatrix.makePerspective(S,j,J,Q,ve,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Z(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let $=W.near,fe=W.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),y.near=R.near=T.near=$,y.far=R.far=T.far=fe,(k!==y.near||O!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),k=y.near,O=y.far),T.layers.mask=W.layers.mask|2,R.layers.mask=W.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;let re=W.parent,Se=y.cameras;Z(y,re);for(let ke=0;ke<Se.length;ke++)Z(Se[ke],re);Se.length===2?z(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),ae(W,y,re)};function ae(W,$,fe){fe===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Nn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let de=null;function Ae(W,$){if(l=$.getViewerPose(h||s),x=$,l!==null){let fe=l.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let re=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,re=!0);for(let ke=0;ke<fe.length;ke++){let Fe=fe[ke],ct=null;if(p!==null)ct=p.getViewport(Fe);else{let ft=d.getViewSubImage(u,Fe);ct=ft.viewport,ke===0&&(e.setRenderTargetTextures(_,ft.colorTexture,u.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(_))}let We=v[ke];We===void 0&&(We=new vt,We.layers.enable(ke),We.viewport=new Je,v[ke]=We),We.matrix.fromArray(Fe.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Fe.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ct.x,ct.y,ct.width,ct.height),ke===0&&(y.matrix.copy(We.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),re===!0&&y.cameras.push(We)}let Se=n.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let ke=d.getDepthInformation(fe[0]);ke&&ke.isValid&&ke.texture&&g.init(e,ke,n.renderState)}}for(let fe=0;fe<w.length;fe++){let re=m[fe],Se=w[fe];re!==null&&Se!==void 0&&Se.update(re,$,h||s)}de&&de(W,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),x=null}let je=new cf;je.setAnimationLoop(Ae),this.setAnimationLoop=function(W){de=W},this.dispose=function(){}}},Xn=new pa,tx=new Ce;function ax(i,e){function t(b,f){b.matrixAutoUpdate===!0&&b.updateMatrix(),f.value.copy(b.matrix)}function a(b,f){f.color.getRGB(b.fogColor.value,Yc(i)),f.isFog?(b.fogNear.value=f.near,b.fogFar.value=f.far):f.isFogExp2&&(b.fogDensity.value=f.density)}function n(b,f,_,w,m){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(b,f):f.isMeshToonMaterial?(r(b,f),d(b,f)):f.isMeshPhongMaterial?(r(b,f),l(b,f)):f.isMeshStandardMaterial?(r(b,f),u(b,f),f.isMeshPhysicalMaterial&&p(b,f,m)):f.isMeshMatcapMaterial?(r(b,f),x(b,f)):f.isMeshDepthMaterial?r(b,f):f.isMeshDistanceMaterial?(r(b,f),g(b,f)):f.isMeshNormalMaterial?r(b,f):f.isLineBasicMaterial?(s(b,f),f.isLineDashedMaterial&&o(b,f)):f.isPointsMaterial?c(b,f,_,w):f.isSpriteMaterial?h(b,f):f.isShadowMaterial?(b.color.value.copy(f.color),b.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(b,f){b.opacity.value=f.opacity,f.color&&b.diffuse.value.copy(f.color),f.emissive&&b.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.bumpMap&&(b.bumpMap.value=f.bumpMap,t(f.bumpMap,b.bumpMapTransform),b.bumpScale.value=f.bumpScale,f.side===Lt&&(b.bumpScale.value*=-1)),f.normalMap&&(b.normalMap.value=f.normalMap,t(f.normalMap,b.normalMapTransform),b.normalScale.value.copy(f.normalScale),f.side===Lt&&b.normalScale.value.negate()),f.displacementMap&&(b.displacementMap.value=f.displacementMap,t(f.displacementMap,b.displacementMapTransform),b.displacementScale.value=f.displacementScale,b.displacementBias.value=f.displacementBias),f.emissiveMap&&(b.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,b.emissiveMapTransform)),f.specularMap&&(b.specularMap.value=f.specularMap,t(f.specularMap,b.specularMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest);let _=e.get(f),w=_.envMap,m=_.envMapRotation;w&&(b.envMap.value=w,Xn.copy(m),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),b.envMapRotation.value.setFromMatrix4(tx.makeRotationFromEuler(Xn)),b.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=f.reflectivity,b.ior.value=f.ior,b.refractionRatio.value=f.refractionRatio),f.lightMap&&(b.lightMap.value=f.lightMap,b.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,b.lightMapTransform)),f.aoMap&&(b.aoMap.value=f.aoMap,b.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,b.aoMapTransform))}function s(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform))}function o(b,f){b.dashSize.value=f.dashSize,b.totalSize.value=f.dashSize+f.gapSize,b.scale.value=f.scale}function c(b,f,_,w){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.size.value=f.size*_,b.scale.value=w*.5,f.map&&(b.map.value=f.map,t(f.map,b.uvTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function h(b,f){b.diffuse.value.copy(f.color),b.opacity.value=f.opacity,b.rotation.value=f.rotation,f.map&&(b.map.value=f.map,t(f.map,b.mapTransform)),f.alphaMap&&(b.alphaMap.value=f.alphaMap,t(f.alphaMap,b.alphaMapTransform)),f.alphaTest>0&&(b.alphaTest.value=f.alphaTest)}function l(b,f){b.specular.value.copy(f.specular),b.shininess.value=Math.max(f.shininess,1e-4)}function d(b,f){f.gradientMap&&(b.gradientMap.value=f.gradientMap)}function u(b,f){b.metalness.value=f.metalness,f.metalnessMap&&(b.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,b.metalnessMapTransform)),b.roughness.value=f.roughness,f.roughnessMap&&(b.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,b.roughnessMapTransform)),f.envMap&&(b.envMapIntensity.value=f.envMapIntensity)}function p(b,f,_){b.ior.value=f.ior,f.sheen>0&&(b.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),b.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(b.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,b.sheenColorMapTransform)),f.sheenRoughnessMap&&(b.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,b.sheenRoughnessMapTransform))),f.clearcoat>0&&(b.clearcoat.value=f.clearcoat,b.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(b.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,b.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(b.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Lt&&b.clearcoatNormalScale.value.negate())),f.dispersion>0&&(b.dispersion.value=f.dispersion),f.iridescence>0&&(b.iridescence.value=f.iridescence,b.iridescenceIOR.value=f.iridescenceIOR,b.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(b.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,b.iridescenceMapTransform)),f.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),f.transmission>0&&(b.transmission.value=f.transmission,b.transmissionSamplerMap.value=_.texture,b.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(b.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,b.transmissionMapTransform)),b.thickness.value=f.thickness,f.thicknessMap&&(b.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=f.attenuationDistance,b.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(b.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(b.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=f.specularIntensity,b.specularColor.value.copy(f.specularColor),f.specularColorMap&&(b.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,b.specularColorMapTransform)),f.specularIntensityMap&&(b.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,b.specularIntensityMapTransform))}function x(b,f){f.matcap&&(b.matcap.value=f.matcap)}function g(b,f){let _=e.get(f).light;b.referencePosition.value.setFromMatrixPosition(_.matrixWorld),b.nearDistance.value=_.shadow.camera.near,b.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:n}}function nx(i,e,t,a){let n={},r={},s=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){let m=w.program;a.uniformBlockBinding(_,m)}function h(_,w){let m=n[_.id];m===void 0&&(x(_),m=l(_),n[_.id]=m,_.addEventListener("dispose",b));let M=w.program;a.updateUBOMapping(_,M);let A=e.render.frame;r[_.id]!==A&&(u(_),r[_.id]=A)}function l(_){let w=d();_.__bindingPointIndex=w;let m=i.createBuffer(),M=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,m),i.bufferData(i.UNIFORM_BUFFER,M,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,m),m}function d(){for(let _=0;_<o;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let w=n[_.id],m=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,T=m.length;A<T;A++){let R=Array.isArray(m[A])?m[A]:[m[A]];for(let v=0,y=R.length;v<y;v++){let k=R[v];if(p(k,A,v,M)===!0){let O=k.__offset,C=Array.isArray(k.value)?k.value:[k.value],U=0;for(let X=0;X<C.length;X++){let B=C[X],V=g(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,O+U,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,w,m,M){let A=_.value,T=w+"_"+m;if(M[T]===void 0)return typeof A=="number"||typeof A=="boolean"?M[T]=A:M[T]=A.clone(),!0;{let R=M[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return M[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function x(_){let w=_.uniforms,m=0,M=16;for(let T=0,R=w.length;T<R;T++){let v=Array.isArray(w[T])?w[T]:[w[T]];for(let y=0,k=v.length;y<k;y++){let O=v[y],C=Array.isArray(O.value)?O.value:[O.value];for(let U=0,X=C.length;U<X;U++){let B=C[U],V=g(B),z=m%M,Z=z%V.boundary,ae=z+Z;m+=Z,ae!==0&&M-ae<V.storage&&(m+=M-ae),O.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=m,m+=V.storage}}}let A=m%M;return A>0&&(m+=M-A),_.__size=m,_.__cache={},this}function g(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function b(_){let w=_.target;w.removeEventListener("dispose",b);let m=s.indexOf(w.__bindingPointIndex);s.splice(m,1),i.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function f(){for(let _ in n)i.deleteBuffer(n[_]);s=[],n={},r={}}return{bind:c,update:h,dispose:f}}var ko=class{constructor(e={}){let{canvas:t=kd(),context:a=null,depth:n=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=a.getContextAttributes().alpha}else p=s;let x=new Uint32Array(4),g=new Int32Array(4),b=null,f=null,_=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ut,this.toneMapping=Qa,this.toneMappingExposure=1;let m=this,M=!1,A=0,T=0,R=null,v=-1,y=null,k=new Je,O=new Je,C=null,U=new we(0),X=0,B=t.width,V=t.height,z=1,Z=null,ae=null,de=new Je(0,0,B,V),Ae=new Je(0,0,B,V),je=!1,W=new _i,$=!1,fe=!1,re=new Ce,Se=new Ce,ke=new L,Fe=new Je,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function ft(){return R===null?z:1}let N=a;function ea(E,D){return t.getContext(E,D)}try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"171"}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){let D="webgl2";if(N=ea(D,E),N===null)throw ea(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ge,He,ye,rt,ve,I,S,j,J,Q,K,xe,ce,be,Xe,te,pe,Ee,Te,me,Ve,De,it,P;function se(){Ge=new vm(N),Ge.init(),De=new Zg(N,Ge),He=new bm(N,Ge,e,De),ye=new Jg(N,Ge),He.reverseDepthBuffer&&u&&ye.buffers.depth.setReversed(!0),rt=new wm(N),ve=new Fg,I=new Yg(N,Ge,ye,ve,He,De,rt),S=new mm(m),j=new ym(m),J=new ku(N),it=new fm(N,J),Q=new _m(N,J,rt,it),K=new Sm(N,Q,J,rt),Te=new Am(N,He,I),te=new pm(ve),xe=new Lg(m,S,j,Ge,He,it,te),ce=new ax(m,ve),be=new Og,Xe=new Vg(Ge),Ee=new dm(m,S,j,ye,K,p,c),pe=new qg(m,K,He),P=new nx(N,rt,He,ye),me=new um(N,Ge,rt),Ve=new Mm(N,Ge,rt),rt.programs=xe.programs,m.capabilities=He,m.extensions=Ge,m.properties=ve,m.renderLists=be,m.shadowMap=pe,m.state=ye,m.info=rt}se();let q=new uh(m,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=Ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(B,V,!1))},this.getSize=function(E){return E.set(B,V)},this.setSize=function(E,D,G=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,V=D,t.width=Math.floor(E*z),t.height=Math.floor(D*z),G===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(B*z,V*z).floor()},this.setDrawingBufferSize=function(E,D,G){B=E,V=D,z=G,t.width=Math.floor(E*G),t.height=Math.floor(D*G),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(de)},this.setViewport=function(E,D,G,H){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,D,G,H),ye.viewport(k.copy(de).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,D,G,H){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,D,G,H),ye.scissor(O.copy(Ae).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(E){ye.setScissorTest(je=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(E=!0,D=!0,G=!0){let H=0;if(E){let F=!1;if(R!==null){let ee=R.texture.format;F=ee===Ys||ee===Js||ee===Ks}if(F){let ee=R.texture.type,oe=ee===Ia||ee===pn||ee===Ei||ee===Gn||ee===Ws||ee===Xs,ue=Ee.getClearColor(),ge=Ee.getClearAlpha(),Re=ue.r,Ie=ue.g,_e=ue.b;oe?(x[0]=Re,x[1]=Ie,x[2]=_e,x[3]=ge,N.clearBufferuiv(N.COLOR,0,x)):(g[0]=Re,g[1]=Ie,g[2]=_e,g[3]=ge,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ee.dispose(),be.dispose(),Xe.dispose(),ve.dispose(),S.dispose(),j.dispose(),K.dispose(),it.dispose(),P.dispose(),xe.dispose(),q.dispose(),q.removeEventListener("sessionstart",$h),q.removeEventListener("sessionend",el),gn.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let E=rt.autoReset,D=pe.enabled,G=pe.autoUpdate,H=pe.needsUpdate,F=pe.type;se(),rt.autoReset=E,pe.enabled=D,pe.autoUpdate=G,pe.needsUpdate=H,pe.type=F}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pe(E){let D=E.target;D.removeEventListener("dispose",Pe),ht(D)}function ht(E){Et(E),ve.remove(E)}function Et(E){let D=ve.get(E).programs;D!==void 0&&(D.forEach(function(G){xe.releaseProgram(G)}),E.isShaderMaterial&&xe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,G,H,F,ee){D===null&&(D=ct);let oe=F.isMesh&&F.matrixWorld.determinant()<0,ue=Tf(E,D,G,H,F);ye.setMaterial(H,oe);let ge=G.index,Re=1;if(H.wireframe===!0){if(ge=Q.getWireframeAttribute(G),ge===void 0)return;Re=2}let Ie=G.drawRange,_e=G.attributes.position,qe=Ie.start*Re,Ye=(Ie.start+Ie.count)*Re;ee!==null&&(qe=Math.max(qe,ee.start*Re),Ye=Math.min(Ye,(ee.start+ee.count)*Re)),ge!==null?(qe=Math.max(qe,0),Ye=Math.min(Ye,ge.count)):_e!=null&&(qe=Math.max(qe,0),Ye=Math.min(Ye,_e.count));let bt=Ye-qe;if(bt<0||bt===1/0)return;it.setup(F,H,ue,G,ge);let lt,Ke=me;if(ge!==null&&(lt=J.get(ge),Ke=Ve,Ke.setIndex(lt)),F.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*ft()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(F.isLine){let Me=H.linewidth;Me===void 0&&(Me=1),ye.setLineWidth(Me*ft()),F.isLineSegments?Ke.setMode(N.LINES):F.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else F.isPoints?Ke.setMode(N.POINTS):F.isSprite&&Ke.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Me=F._multiDrawStarts,Mt=F._multiDrawCounts,Ze=F._multiDrawCount,ca=ge?J.get(ge).bytesPerElement:1,ei=ve.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<Ze;Wt++)ei.setValue(N,"_gl_DrawID",Wt),Ke.render(Me[Wt]/ca,Mt[Wt])}else if(F.isInstancedMesh)Ke.renderInstances(qe,bt,F.count);else if(G.isInstancedBufferGeometry){let Me=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Mt=Math.min(G.instanceCount,Me);Ke.renderInstances(qe,bt,Mt)}else Ke.render(qe,bt)};function Qe(E,D,G){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=Lt,E.needsUpdate=!0,jr(E,D,G),E.side=ba,E.needsUpdate=!0,jr(E,D,G),E.side=jt):jr(E,D,G)}this.compile=function(E,D,G=null){G===null&&(G=E),f=Xe.get(G),f.init(D),w.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==G&&E.traverseVisible(function(F){F.isLight&&F.layers.test(D.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let H=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let ee=F.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){let ue=ee[oe];Qe(ue,G,F),H.add(ue)}else Qe(ee,G,F),H.add(ee)}),w.pop(),f=null,H},this.compileAsync=function(E,D,G=null){let H=this.compile(E,D,G);return new Promise(F=>{function ee(){if(H.forEach(function(oe){ve.get(oe).currentProgram.isReady()&&H.delete(oe)}),H.size===0){F(E);return}setTimeout(ee,10)}Ge.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let oa=null;function Ua(E){oa&&oa(E)}function $h(){gn.stop()}function el(){gn.start()}let gn=new cf;gn.setAnimationLoop(Ua),typeof self<"u"&&gn.setContext(self),this.setAnimationLoop=function(E){oa=E,q.setAnimationLoop(E),E===null?gn.stop():gn.start()},q.addEventListener("sessionstart",$h),q.addEventListener("sessionend",el),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),E.isScene===!0&&E.onBeforeRender(m,E,D,R),f=Xe.get(E,w.length),f.init(D),w.push(f),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),W.setFromProjectionMatrix(Se),fe=this.localClippingEnabled,$=te.init(this.clippingPlanes,fe),b=be.get(E,_.length),b.init(),_.push(b),q.enabled===!0&&q.isPresenting===!0){let ee=m.xr.getDepthSensingMesh();ee!==null&&Xo(ee,D,-1/0,m.sortObjects)}Xo(E,D,0,m.sortObjects),b.finish(),m.sortObjects===!0&&b.sort(Z,ae),We=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,We&&Ee.addToRenderList(b,E),this.info.render.frame++,$===!0&&te.beginShadows();let G=f.state.shadowsArray;pe.render(G,E,D),$===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=b.opaque,F=b.transmissive;if(f.setupLights(),D.isArrayCamera){let ee=D.cameras;if(F.length>0)for(let oe=0,ue=ee.length;oe<ue;oe++){let ge=ee[oe];al(H,F,E,ge)}We&&Ee.render(E);for(let oe=0,ue=ee.length;oe<ue;oe++){let ge=ee[oe];tl(b,E,ge,ge.viewport)}}else F.length>0&&al(H,F,E,D),We&&Ee.render(E),tl(b,E,D);R!==null&&(I.updateMultisampleRenderTarget(R),I.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(m,E,D),it.resetDefaultState(),v=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],$===!0&&te.setGlobalState(m.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Xo(E,D,G,H){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){H&&Fe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Se);let oe=K.update(E),ue=E.material;ue.visible&&b.push(E,oe,ue,G,Fe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let oe=K.update(E),ue=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Fe.copy(E.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Fe.copy(oe.boundingSphere.center)),Fe.applyMatrix4(E.matrixWorld).applyMatrix4(Se)),Array.isArray(ue)){let ge=oe.groups;for(let Re=0,Ie=ge.length;Re<Ie;Re++){let _e=ge[Re],qe=ue[_e.materialIndex];qe&&qe.visible&&b.push(E,oe,qe,G,Fe.z,_e)}}else ue.visible&&b.push(E,oe,ue,G,Fe.z,null)}}let ee=E.children;for(let oe=0,ue=ee.length;oe<ue;oe++)Xo(ee[oe],D,G,H)}function tl(E,D,G,H){let F=E.opaque,ee=E.transmissive,oe=E.transparent;f.setupLightsView(G),$===!0&&te.setGlobalState(m.clippingPlanes,G),H&&ye.viewport(k.copy(H)),F.length>0&&Br(F,D,G),ee.length>0&&Br(ee,D,G),oe.length>0&&Br(oe,D,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function al(E,D,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new wa(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ti:Ia,minFilter:xa,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));let ee=f.state.transmissionRenderTarget[H.id],oe=H.viewport||k;ee.setSize(oe.z,oe.w);let ue=m.getRenderTarget();m.setRenderTarget(ee),m.getClearColor(U),X=m.getClearAlpha(),X<1&&m.setClearColor(16777215,.5),m.clear(),We&&Ee.render(G);let ge=m.toneMapping;m.toneMapping=Qa;let Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),$===!0&&te.setGlobalState(m.clippingPlanes,H),Br(E,G,H),I.updateMultisampleRenderTarget(ee),I.updateRenderTargetMipmap(ee),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let _e=0,qe=D.length;_e<qe;_e++){let Ye=D[_e],bt=Ye.object,lt=Ye.geometry,Ke=Ye.material,Me=Ye.group;if(Ke.side===jt&&bt.layers.test(H.layers)){let Mt=Ke.side;Ke.side=Lt,Ke.needsUpdate=!0,nl(bt,G,H,lt,Ke,Me),Ke.side=Mt,Ke.needsUpdate=!0,Ie=!0}}Ie===!0&&(I.updateMultisampleRenderTarget(ee),I.updateRenderTargetMipmap(ee))}m.setRenderTarget(ue),m.setClearColor(U,X),Re!==void 0&&(H.viewport=Re),m.toneMapping=ge}function Br(E,D,G){let H=D.isScene===!0?D.overrideMaterial:null;for(let F=0,ee=E.length;F<ee;F++){let oe=E[F],ue=oe.object,ge=oe.geometry,Re=H===null?oe.material:H,Ie=oe.group;ue.layers.test(G.layers)&&nl(ue,D,G,ge,Re,Ie)}}function nl(E,D,G,H,F,ee){E.onBeforeRender(m,D,G,H,F,ee),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(m,D,G,H,E,ee),F.transparent===!0&&F.side===jt&&F.forceSinglePass===!1?(F.side=Lt,F.needsUpdate=!0,m.renderBufferDirect(G,D,H,F,E,ee),F.side=ba,F.needsUpdate=!0,m.renderBufferDirect(G,D,H,F,E,ee),F.side=jt):m.renderBufferDirect(G,D,H,F,E,ee),E.onAfterRender(m,D,G,H,F,ee)}function jr(E,D,G){D.isScene!==!0&&(D=ct);let H=ve.get(E),F=f.state.lights,ee=f.state.shadowsArray,oe=F.state.version,ue=xe.getParameters(E,F.state,ee,D,G),ge=xe.getProgramCacheKey(ue),Re=H.programs;H.environment=E.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(E.isMeshStandardMaterial?j:S).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Re===void 0&&(E.addEventListener("dispose",Pe),Re=new Map,H.programs=Re);let Ie=Re.get(ge);if(Ie!==void 0){if(H.currentProgram===Ie&&H.lightsStateVersion===oe)return rl(E,ue),Ie}else ue.uniforms=xe.getUniforms(E),E.onBeforeCompile(ue,m),Ie=xe.acquireProgram(ue,ge),Re.set(ge,Ie),H.uniforms=ue.uniforms;let _e=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(_e.clippingPlanes=te.uniform),rl(E,ue),H.needsLights=If(E),H.lightsStateVersion=oe,H.needsLights&&(_e.ambientLightColor.value=F.state.ambient,_e.lightProbe.value=F.state.probe,_e.directionalLights.value=F.state.directional,_e.directionalLightShadows.value=F.state.directionalShadow,_e.spotLights.value=F.state.spot,_e.spotLightShadows.value=F.state.spotShadow,_e.rectAreaLights.value=F.state.rectArea,_e.ltc_1.value=F.state.rectAreaLTC1,_e.ltc_2.value=F.state.rectAreaLTC2,_e.pointLights.value=F.state.point,_e.pointLightShadows.value=F.state.pointShadow,_e.hemisphereLights.value=F.state.hemi,_e.directionalShadowMap.value=F.state.directionalShadowMap,_e.directionalShadowMatrix.value=F.state.directionalShadowMatrix,_e.spotShadowMap.value=F.state.spotShadowMap,_e.spotLightMatrix.value=F.state.spotLightMatrix,_e.spotLightMap.value=F.state.spotLightMap,_e.pointShadowMap.value=F.state.pointShadowMap,_e.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Ie,H.uniformsList=null,Ie}function il(E){if(E.uniformsList===null){let D=E.currentProgram.getUniforms();E.uniformsList=Ci.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function rl(E,D){let G=ve.get(E);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Tf(E,D,G,H,F){D.isScene!==!0&&(D=ct),I.resetTextureUnits();let ee=D.fog,oe=H.isMeshStandardMaterial?D.environment:null,ue=R===null?m.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:At,ge=(H.isMeshStandardMaterial?j:S).get(H.envMap||oe),Re=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ie=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_e=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,Ye=!!G.morphAttributes.color,bt=Qa;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(bt=m.toneMapping);let lt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ke=lt!==void 0?lt.length:0,Me=ve.get(H),Mt=f.state.lights;if($===!0&&(fe===!0||E!==y)){let Ct=E===y&&H.id===v;te.setState(H,E,Ct)}let Ze=!1;H.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Mt.state.version||Me.outputColorSpace!==ue||F.isBatchedMesh&&Me.batching===!1||!F.isBatchedMesh&&Me.batching===!0||F.isBatchedMesh&&Me.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Me.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Me.instancing===!1||!F.isInstancedMesh&&Me.instancing===!0||F.isSkinnedMesh&&Me.skinning===!1||!F.isSkinnedMesh&&Me.skinning===!0||F.isInstancedMesh&&Me.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Me.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Me.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Me.instancingMorph===!1&&F.morphTexture!==null||Me.envMap!==ge||H.fog===!0&&Me.fog!==ee||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==te.numPlanes||Me.numIntersection!==te.numIntersection)||Me.vertexAlphas!==Re||Me.vertexTangents!==Ie||Me.morphTargets!==_e||Me.morphNormals!==qe||Me.morphColors!==Ye||Me.toneMapping!==bt||Me.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Me.__version=H.version);let ca=Me.currentProgram;Ze===!0&&(ca=jr(H,D,F));let ei=!1,Wt=!1,zi=!1,st=ca.getUniforms(),ta=Me.uniforms;if(ye.useProgram(ca.program)&&(ei=!0,Wt=!0,zi=!0),H.id!==v&&(v=H.id,Wt=!0),ei||y!==E){ye.buffers.depth.getReversed()?(re.copy(E.projectionMatrix),Nd(re),Pd(re),st.setValue(N,"projectionMatrix",re)):st.setValue(N,"projectionMatrix",E.projectionMatrix),st.setValue(N,"viewMatrix",E.matrixWorldInverse);let Ut=st.map.cameraPosition;Ut!==void 0&&Ut.setValue(N,ke.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Wt=!0,zi=!0)}if(F.isSkinnedMesh){st.setOptional(N,F,"bindMatrix"),st.setOptional(N,F,"bindMatrixInverse");let Ct=F.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),st.setValue(N,"boneTexture",Ct.boneTexture,I))}F.isBatchedMesh&&(st.setOptional(N,F,"batchingTexture"),st.setValue(N,"batchingTexture",F._matricesTexture,I),st.setOptional(N,F,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",F._indirectTexture,I),st.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",F._colorsTexture,I));let aa=G.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0)&&Te.update(F,G,ca),(Wt||Me.receiveShadow!==F.receiveShadow)&&(Me.receiveShadow=F.receiveShadow,st.setValue(N,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ta.envMap.value=ge,ta.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(ta.envMapIntensity.value=D.environmentIntensity),Wt&&(st.setValue(N,"toneMappingExposure",m.toneMappingExposure),Me.needsLights&&Rf(ta,zi),ee&&H.fog===!0&&ce.refreshFogUniforms(ta,ee),ce.refreshMaterialUniforms(ta,H,z,V,f.state.transmissionRenderTarget[E.id]),Ci.upload(N,il(Me),ta,I)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ci.upload(N,il(Me),ta,I),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(N,"center",F.center),st.setValue(N,"modelViewMatrix",F.modelViewMatrix),st.setValue(N,"normalMatrix",F.normalMatrix),st.setValue(N,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Ct=H.uniformsGroups;for(let Ut=0,qo=Ct.length;Ut<qo;Ut++){let xn=Ct[Ut];P.update(xn,ca),P.bind(xn,ca)}}return ca}function Rf(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function If(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,D,G){ve.get(E.texture).__webglTexture=D,ve.get(E.depthTexture).__webglTexture=G;let H=ve.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){let G=ve.get(E);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,G=0){R=E,A=D,T=G;let H=!0,F=null,ee=!1,oe=!1;if(E){let ge=ve.get(E);if(ge.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(ge.__webglFramebuffer===void 0)I.setupRenderTarget(E);else if(ge.__hasExternalTextures)I.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let _e=E.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&ve.has(_e)&&(E.width!==_e.image.width||E.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(E)}}let Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);let Ie=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[D])?F=Ie[D][G]:F=Ie[D],ee=!0):E.samples>0&&I.useMultisampledRTT(E)===!1?F=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[G]:F=Ie,k.copy(E.viewport),O.copy(E.scissor),C=E.scissorTest}else k.copy(de).multiplyScalar(z).floor(),O.copy(Ae).multiplyScalar(z).floor(),C=je;if(ye.bindFramebuffer(N.FRAMEBUFFER,F)&&H&&ye.drawBuffers(E,F),ye.viewport(k),ye.scissor(O),ye.setScissorTest(C),ee){let ge=ve.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,G)}else if(oe){let ge=ve.get(E.texture),Re=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,G||0,Re)}v=-1},this.readRenderTargetPixels=function(E,D,G,H,F,ee,oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){ye.bindFramebuffer(N.FRAMEBUFFER,ue);try{let ge=E.texture,Re=ge.format,Ie=ge.type;if(!He.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-H&&G>=0&&G<=E.height-F&&N.readPixels(D,G,H,F,De.convert(Re),De.convert(Ie),ee)}finally{let ge=R!==null?ve.get(R).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(E,D,G,H,F,ee,oe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){let ge=E.texture,Re=ge.format,Ie=ge.type;if(!He.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-H&&G>=0&&G<=E.height-F){ye.bindFramebuffer(N.FRAMEBUFFER,ue);let _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,ee.byteLength,N.STREAM_READ),N.readPixels(D,G,H,F,De.convert(Re),De.convert(Ie),0);let qe=R!==null?ve.get(R).__webglFramebuffer:null;ye.bindFramebuffer(N.FRAMEBUFFER,qe);let Ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Cd(N,Ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ee),N.deleteBuffer(_e),N.deleteSync(Ye),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,G=0){E.isTexture!==!0&&(Hn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);let H=Math.pow(2,-G),F=Math.floor(E.image.width*H),ee=Math.floor(E.image.height*H),oe=D!==null?D.x:0,ue=D!==null?D.y:0;I.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,oe,ue,F,ee),ye.unbindTexture()};let kf=N.createFramebuffer(),Cf=N.createFramebuffer();this.copyTextureToTexture=function(E,D,G=null,H=null,F=0,ee=null){E.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],D=arguments[2],ee=arguments[3]||0,G=null),ee===null&&(F!==0?(Hn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=F,F=0):ee=0);let oe,ue,ge,Re,Ie,_e,qe,Ye,bt,lt=E.isCompressedTexture?E.mipmaps[ee]:E.image;if(G!==null)oe=G.max.x-G.min.x,ue=G.max.y-G.min.y,ge=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Ie=G.min.y,_e=G.isBox3?G.min.z:0;else{let aa=Math.pow(2,-F);oe=Math.floor(lt.width*aa),ue=Math.floor(lt.height*aa),E.isDataArrayTexture?ge=lt.depth:E.isData3DTexture?ge=Math.floor(lt.depth*aa):ge=1,Re=0,Ie=0,_e=0}H!==null?(qe=H.x,Ye=H.y,bt=H.z):(qe=0,Ye=0,bt=0);let Ke=De.convert(D.format),Me=De.convert(D.type),Mt;D.isData3DTexture?(I.setTexture3D(D,0),Mt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(I.setTexture2DArray(D,0),Mt=N.TEXTURE_2D_ARRAY):(I.setTexture2D(D,0),Mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Ze=N.getParameter(N.UNPACK_ROW_LENGTH),ca=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ei=N.getParameter(N.UNPACK_SKIP_PIXELS),Wt=N.getParameter(N.UNPACK_SKIP_ROWS),zi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ie),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_e);let st=E.isDataArrayTexture||E.isData3DTexture,ta=D.isDataArrayTexture||D.isData3DTexture;if(E.isDepthTexture){let aa=ve.get(E),Ct=ve.get(D),Ut=ve.get(aa.__renderTarget),qo=ve.get(Ct.__renderTarget);ye.bindFramebuffer(N.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let xn=0;xn<ge;xn++)st&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.get(E).__webglTexture,F,_e+xn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.get(D).__webglTexture,ee,bt+xn)),N.blitFramebuffer(Re,Ie,oe,ue,qe,Ye,oe,ue,N.DEPTH_BUFFER_BIT,N.NEAREST);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||ve.has(E)){let aa=ve.get(E),Ct=ve.get(D);ye.bindFramebuffer(N.READ_FRAMEBUFFER,kf),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cf);for(let Ut=0;Ut<ge;Ut++)st?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,aa.__webglTexture,F,_e+Ut):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,aa.__webglTexture,F),ta?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.__webglTexture,ee,bt+Ut):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ct.__webglTexture,ee),F!==0?N.blitFramebuffer(Re,Ie,oe,ue,qe,Ye,oe,ue,N.COLOR_BUFFER_BIT,N.NEAREST):ta?N.copyTexSubImage3D(Mt,ee,qe,Ye,bt+Ut,Re,Ie,oe,ue):N.copyTexSubImage2D(Mt,ee,qe,Ye,Re,Ie,oe,ue);ye.bindFramebuffer(N.READ_FRAMEBUFFER,null),ye.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ta?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Mt,ee,qe,Ye,bt,oe,ue,ge,Ke,Me,lt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Mt,ee,qe,Ye,bt,oe,ue,ge,Ke,lt.data):N.texSubImage3D(Mt,ee,qe,Ye,bt,oe,ue,ge,Ke,Me,lt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ee,qe,Ye,oe,ue,Ke,Me,lt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ee,qe,Ye,lt.width,lt.height,Ke,lt.data):N.texSubImage2D(N.TEXTURE_2D,ee,qe,Ye,oe,ue,Ke,Me,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ca),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ei),N.pixelStorei(N.UNPACK_SKIP_ROWS,Wt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zi),ee===0&&D.generateMipmaps&&N.generateMipmap(Mt),ye.unbindTexture()},this.copyTextureToTexture3D=function(E,D,G=null,H=null,F=0){return E.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,E=arguments[2],D=arguments[3],F=arguments[4]||0),Hn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,G,H,F)},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&I.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?I.setTextureCube(E,0):E.isData3DTexture?I.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?I.setTexture2DArray(E,0):I.setTexture2D(E,0),ye.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,ye.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=ze._getUnpackColorSpace()}};function ph(i,e){if(e===Hc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ri||e===Nr){let t=i.getIndex();if(t===null){let s=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)s.push(c);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let a=t.count-2,n=[];if(e===Ri)for(let s=1;s<=a;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<a;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(n),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Po=class extends Ta{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Mh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Fh(t)})}load(e,t,a,n){let r=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let h=Ya.extractUrlBase(e);s=Ya.resolveURL(h,this.path)}else s=Ya.extractUrlBase(e);this.manager.itemStart(e);let o=function(h){n?n(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ai(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,s,function(l){t(l),r.manager.itemEnd(e)},o)}catch(l){o(l)}},a,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,n){let r,s={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gf){try{s[Oe.KHR_BINARY_GLTF]=new Uh(e)}catch(d){n&&n(d);return}r=JSON.parse(s[Oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let h=new Vh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){let d=this.pluginCallbacks[l](h);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){let d=r.extensionsUsed[l],u=r.extensionsRequired||[];switch(d){case Oe.KHR_MATERIALS_UNLIT:s[d]=new vh;break;case Oe.KHR_DRACO_MESH_COMPRESSION:s[d]=new Oh(r,this.dracoLoader);break;case Oe.KHR_TEXTURE_TRANSFORM:s[d]=new zh;break;case Oe.KHR_MESH_QUANTIZATION:s[d]=new Bh;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}h.setExtensions(s),h.setPlugins(o),h.parse(a,n)}parseAsync(e,t){let a=this;return new Promise(function(n,r){a.parse(e,t,n,r)})}};function ix(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yh=class{constructor(e){this.parser=e,this.name=Oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let a=0,n=t.length;a<n;a++){let r=t[a];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,a="light:"+e,n=t.cache.get(a);if(n)return n;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],h,l=new we(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],At);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new On(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Mr(l),h.distance=d;break;case"spot":h=new _r(l),h.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,en(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),n=Promise.resolve(h),t.cache.add(a,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,a=this.parser,r=a.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return a._getNodeRef(t.cache,o,c)})}},vh=class{constructor(){this.name=Oe.KHR_MATERIALS_UNLIT}getMaterialType(){return ma}extendParams(e,t,a){let n=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],At),e.opacity=s[3]}r.baseColorTexture!==void 0&&n.push(a.assignTexture(e,"map",r.baseColorTexture,ut))}return Promise.all(n)}},_h=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Mh=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(a.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(a.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(a.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(a.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(a.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SHEEN}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){let o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],At)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(a.assignTexture(t,"sheenColorMap",s.sheenColorTexture,ut)),s.sheenRoughnessTexture!==void 0&&r.push(a.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(a.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}},Th=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_VOLUME}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(a.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let o=s.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],At),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_IOR}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=n.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ih=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(a.assignTexture(t,"specularIntensityMap",s.specularTexture));let o=s.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],At),s.specularColorTexture!==void 0&&r.push(a.assignTexture(t,"specularColorMap",s.specularColorTexture,ut)),Promise.all(r)}},kh=class{constructor(e){this.parser=e,this.name=Oe.EXT_MATERIALS_BUMP}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&r.push(a.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=Oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Bt}extendMaterialParams(e,t){let a=this.parser,n=a.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();let r=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&r.push(a.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=Oe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,a=t.json,n=a.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}},Ph=class{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,a=this.parser,n=a.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return a.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Dh=class{constructor(e){this.parser=e,this.name=Oe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,a=this.parser,n=a.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],o=n.images[s.source],c=a.textureLoader;if(o.uri){let h=a.options.manager.getHandler(o.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return a.loadTextureImage(e,s.source,c);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return a.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lh=class{constructor(e){this.name=Oe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){let n=a.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=n.byteOffset||0,h=n.byteLength||0,l=n.count,d=n.byteStride,u=new Uint8Array(o,c,h);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(l,d,u,n.mode,n.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(l*d);return s.decodeGltfBuffer(new Uint8Array(p),l,d,u,n.mode,n.filter),p})})}else return null}},Fh=class{constructor(e){this.name=Oe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;let n=t.meshes[a.mesh];for(let h of n.primitives)if(h.mode!==ra.TRIANGLES&&h.mode!==ra.TRIANGLE_STRIP&&h.mode!==ra.TRIANGLE_FAN&&h.mode!==void 0)return null;let s=a.extensions[this.name].attributes,o=[],c={};for(let h in s)o.push(this.parser.getDependency("accessor",s[h]).then(l=>(c[h]=l,c[h])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(h=>{let l=h.pop(),d=l.isGroup?l.children:[l],u=h[0].count,p=[];for(let x of d){let g=new Ce,b=new L,f=new Pt,_=new L(1,1,1),w=new lr(x.geometry,x.material,u);for(let m=0;m<u;m++)c.TRANSLATION&&b.fromBufferAttribute(c.TRANSLATION,m),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,m),c.SCALE&&_.fromBufferAttribute(c.SCALE,m),w.setMatrixAt(m,g.compose(b,f,_));for(let m in c)if(m==="_COLOR_0"){let M=c[m];w.instanceColor=new bn(M.array,M.itemSize,M.normalized)}else m!=="TRANSLATION"&&m!=="ROTATION"&&m!=="SCALE"&&x.geometry.setAttribute(m,c[m]);ot.prototype.copy.call(w,x),this.parser.assignFinalMaterial(w),p.push(w)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}},gf="glTF",Lr=12,uf={JSON:1313821514,BIN:5130562},Uh=class{constructor(e){this.name=Oe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Lr),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-Lr,r=new DataView(e,Lr),s=0;for(;s<n;){let o=r.getUint32(s,!0);s+=4;let c=r.getUint32(s,!0);if(s+=4,c===uf.JSON){let h=new Uint8Array(e,Lr+s,o);this.content=a.decode(h)}else if(c===uf.BIN){let h=Lr+s;this.body=e.slice(h,h+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Oh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Oe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let a=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},h={};for(let l in s){let d=Gh[l]||l.toLowerCase();o[d]=s[l]}for(let l in e.attributes){let d=Gh[l]||l.toLowerCase();if(s[l]!==void 0){let u=a.accessors[e.attributes[l]],p=Pi[u.componentType];h[d]=p.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(d,u){n.decodeDracoFile(l,function(p){for(let x in p.attributes){let g=p.attributes[x],b=c[x];b!==void 0&&(g.normalized=b)}d(p)},o,h,At,u)})})}},zh=class{constructor(){this.name=Oe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bh=class{constructor(){this.name=Oe.KHR_MESH_QUANTIZATION}},Do=class extends Xa{constructor(e,t,a,n){super(e,t,a,n)}copySampleValue_(e){let t=this.resultBuffer,a=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let s=0;s!==n;s++)t[s]=a[r+s];return t}interpolate_(e,t,a,n){let r=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=o*2,h=o*3,l=n-t,d=(a-t)/l,u=d*d,p=u*d,x=e*h,g=x-h,b=-2*p+3*u,f=p-u,_=1-b,w=f-u+d;for(let m=0;m!==o;m++){let M=s[g+m+o],A=s[g+m+c]*l,T=s[x+m+o],R=s[x+m]*l;r[m]=_*M+w*A+b*T+f*R}return r}},rx=new Pt,jh=class extends Do{interpolate_(e,t,a,n){let r=super.interpolate_(e,t,a,n);return rx.fromArray(r).normalize().toArray(r),r}},ra={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Pi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bf={9728:wt,9729:Dt,9984:Hs,9985:Si,9986:jn,9987:xa},pf={33071:va,33648:pi,10497:un},mh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sx={CUBICSPLINE:void 0,LINEAR:Cn,STEP:kn},gh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ox(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ln({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ba})),i.DefaultMaterial}function Jn(i,e,t){for(let a in t.extensions)i[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function en(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cx(i,e,t){let a=!1,n=!1,r=!1;for(let h=0,l=e.length;h<l;h++){let d=e[h];if(d.POSITION!==void 0&&(a=!0),d.NORMAL!==void 0&&(n=!0),d.COLOR_0!==void 0&&(r=!0),a&&n&&r)break}if(!a&&!n&&!r)return Promise.resolve(i);let s=[],o=[],c=[];for(let h=0,l=e.length;h<l;h++){let d=e[h];if(a){let u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;s.push(u)}if(n){let u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c)]).then(function(h){let l=h[0],d=h[1],u=h[2];return a&&(i.morphAttributes.position=l),n&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=u),i.morphTargetsRelative=!0,i})}function hx(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let a=0,n=t.length;a<n;a++)i.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lx(i){let e,t=i.extensions&&i.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xh(t.attributes):e=i.indices+":"+xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let a=0,n=i.targets.length;a<n;a++)e+=":"+xh(i.targets[a]);return e}function xh(i){let e="",t=Object.keys(i).sort();for(let a=0,n=t.length;a<n;a++)e+=t[a]+":"+i[t[a]]+";";return e}function Hh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var fx=new Ce,Vh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ix,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,n=-1,r=!1,s=-1;if(typeof navigator<"u"){let o=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);n=a&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,s=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&n<17||r&&s<98?this.textureLoader=new xr(this.options.manager):this.textureLoader=new wr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ai(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let a=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(s){let o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:a,userData:{}};return Jn(r,o,n),en(o,n),Promise.all(a._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let s=t[n].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(a[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;let n=a.clone(),r=(s,o)=>{let c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(let[h,l]of s.children.entries())r(l,o.children[h])};return r(a,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){let n=e(t[a]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let a=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&a.push(r)}return a}getDependency(e,t){let a=e+":"+t,n=this.cache.get(a);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(a,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let a=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,s){return a.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,s){a.load(Ya.resolveURL(t.uri,n.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){let n=t.byteLength||0,r=t.byteOffset||0;return a.slice(r,r+n)})}loadAccessor(e){let t=this,a=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let s=mh[n.type],o=Pi[n.componentType],c=n.normalized===!0,h=new o(n.count*s);return Promise.resolve(new mt(h,s,c))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(s){let o=s[0],c=mh[n.type],h=Pi[n.componentType],l=h.BYTES_PER_ELEMENT,d=l*c,u=n.byteOffset||0,p=n.bufferView!==void 0?a.bufferViews[n.bufferView].byteStride:void 0,x=n.normalized===!0,g,b;if(p&&p!==d){let f=Math.floor(u/p),_="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count,w=t.cache.get(_);w||(g=new h(o,f*p,n.count*p/l),w=new xi(g,p/l),t.cache.add(_,w)),b=new yi(w,c,u%p/l,x)}else o===null?g=new h(n.count*c):g=new h(o,u,n.count*c),b=new mt(g,c,x);if(n.sparse!==void 0){let f=mh.SCALAR,_=Pi[n.sparse.indices.componentType],w=n.sparse.indices.byteOffset||0,m=n.sparse.values.byteOffset||0,M=new _(s[1],w,n.sparse.count*f),A=new h(s[2],m,n.sparse.count*c);o!==null&&(b=new mt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let T=0,R=M.length;T<R;T++){let v=M[T];if(b.setX(v,A[T*c]),c>=2&&b.setY(v,A[T*c+1]),c>=3&&b.setZ(v,A[T*c+2]),c>=4&&b.setW(v,A[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=x}return b})}loadTexture(e){let t=this.json,a=this.options,r=t.textures[e].source,s=t.images[r],o=this.textureLoader;if(s.uri){let c=a.manager.getHandler(s.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,a){let n=this,r=this.json,s=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];let h=this.loadImageSource(t,a).then(function(l){l.flipY=!1,l.name=s.name||o.name||"",l.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(l.name=o.uri);let u=(r.samplers||{})[s.sampler]||{};return l.magFilter=bf[u.magFilter]||Dt,l.minFilter=bf[u.minFilter]||xa,l.wrapS=pf[u.wrapS]||un,l.wrapT=pf[u.wrapT]||un,l.generateMipmaps=!l.isCompressedTexture&&l.minFilter!==wt&&l.minFilter!==Dt,n.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){let a=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let s=n.images[e],o=self.URL||self.webkitURL,c=s.uri||"",h=!1;if(s.bufferView!==void 0)c=a.getDependency("bufferView",s.bufferView).then(function(d){h=!0;let u=new Blob([d],{type:s.mimeType});return c=o.createObjectURL(u),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let l=Promise.resolve(c).then(function(d){return new Promise(function(u,p){let x=u;t.isImageBitmapLoader===!0&&(x=function(g){let b=new _t(g);b.needsUpdate=!0,u(b)}),t.load(Ya.resolveURL(d,r.path),x,void 0,p)})}).then(function(d){return h===!0&&o.revokeObjectURL(c),en(d,s),d.userData.mimeType=s.mimeType||dx(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=l,l}assignTexture(e,t,a,n){let r=this;return this.getDependency("texture",a.index).then(function(s){if(!s)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(s=s.clone(),s.channel=a.texCoord),r.extensions[Oe.KHR_TEXTURE_TRANSFORM]){let o=a.extensions!==void 0?a.extensions[Oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(s);s=r.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),r.associations.set(s,c)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,a=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new wi,zt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,c.sizeAttenuation=!1,this.cache.add(o,c)),a=c}else if(e.isLine){let o="LineBasicMaterial:"+a.uuid,c=this.cache.get(o);c||(c=new Mi,zt.prototype.copy.call(c,a),c.color.copy(a.color),c.map=a.map,this.cache.add(o,c)),a=c}if(n||r||s){let o="ClonedMaterial:"+a.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=a.clone(),r&&(c.vertexColors=!0),s&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(a))),a=c}e.material=a}getMaterialType(){return Ln}loadMaterial(e){let t=this,a=this.json,n=this.extensions,r=a.materials[e],s,o={},c=r.extensions||{},h=[];if(c[Oe.KHR_MATERIALS_UNLIT]){let d=n[Oe.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),h.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],At),o.opacity=u[3]}d.baseColorTexture!==void 0&&h.push(t.assignTexture(o,"map",d.baseColorTexture,ut)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),h.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jt);let l=r.alphaMode||gh.OPAQUE;if(l===gh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===gh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==ma&&(h.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&s!==ma&&(h.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==ma){let d=r.emissiveFactor;o.emissive=new we().setRGB(d[0],d[1],d[2],At)}return r.emissiveTexture!==void 0&&s!==ma&&h.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,ut)),Promise.all(h).then(function(){let d=new s(o);return r.name&&(d.name=r.name),en(d,r),t.associations.set(d,{materials:e}),r.extensions&&Jn(n,d,r),d})}createUniqueName(e){let t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,a=this.extensions,n=this.primitiveCache;function r(o){return a[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return mf(c,o,t)})}let s=[];for(let o=0,c=e.length;o<c;o++){let h=e[o],l=lx(h),d=n[l];if(d)s.push(d.promise);else{let u;h.extensions&&h.extensions[Oe.KHR_DRACO_MESH_COMPRESSION]?u=r(h):u=mf(new Yt,h,t),n[l]={primitive:h,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(e){let t=this,a=this.json,n=this.extensions,r=a.meshes[e],s=r.primitives,o=[];for(let c=0,h=s.length;c<h;c++){let l=s[c].material===void 0?ox(this.cache):this.getDependency("material",s[c].material);o.push(l)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(c){let h=c.slice(0,c.length-1),l=c[c.length-1],d=[];for(let p=0,x=l.length;p<x;p++){let g=l[p],b=s[p],f,_=h[p];if(b.mode===ra.TRIANGLES||b.mode===ra.TRIANGLE_STRIP||b.mode===ra.TRIANGLE_FAN||b.mode===void 0)f=r.isSkinnedMesh===!0?new or(g,_):new St(g,_),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),b.mode===ra.TRIANGLE_STRIP?f.geometry=ph(f.geometry,Nr):b.mode===ra.TRIANGLE_FAN&&(f.geometry=ph(f.geometry,Ri));else if(b.mode===ra.LINES)f=new dr(g,_);else if(b.mode===ra.LINE_STRIP)f=new Dn(g,_);else if(b.mode===ra.LINE_LOOP)f=new fr(g,_);else if(b.mode===ra.POINTS)f=new ur(g,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(f.geometry.morphAttributes).length>0&&hx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),en(f,r),b.extensions&&Jn(n,f,b),t.assignFinalMaterial(f),d.push(f)}for(let p=0,x=d.length;p<x;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return r.extensions&&Jn(n,d[0],r),d[0];let u=new Zt;r.extensions&&Jn(n,u,r),t.associations.set(u,{meshes:e});for(let p=0,x=d.length;p<x;p++)u.add(d[p]);return u})}loadCamera(e){let t,a=this.json.cameras[e],n=a[a.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new vt(Kc.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):a.type==="orthographic"&&(t=new Ja(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),en(t,a),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],a=[];for(let n=0,r=t.joints.length;n<r;n++)a.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(n){let r=n.pop(),s=n,o=[],c=[];for(let h=0,l=s.length;h<l;h++){let d=s[h];if(d){o.push(d);let u=new Ce;r!==null&&u.fromArray(r.array,h*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new hr(o,c)})}loadAnimation(e){let t=this.json,a=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,s=[],o=[],c=[],h=[],l=[];for(let d=0,u=n.channels.length;d<u;d++){let p=n.channels[d],x=n.samplers[p.sampler],g=p.target,b=g.node,f=n.parameters!==void 0?n.parameters[x.input]:x.input,_=n.parameters!==void 0?n.parameters[x.output]:x.output;g.node!==void 0&&(s.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",_)),h.push(x),l.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(d){let u=d[0],p=d[1],x=d[2],g=d[3],b=d[4],f=[];for(let _=0,w=u.length;_<w;_++){let m=u[_],M=p[_],A=x[_],T=g[_],R=b[_];if(m===void 0)continue;m.updateMatrix&&m.updateMatrix();let v=a._createAnimationTracks(m,M,A,T,R);if(v)for(let y=0;y<v.length;y++)f.push(v[y])}return new Fn(r,void 0,f)})}createNodeMesh(e){let t=this.json,a=this,n=t.nodes[e];return n.mesh===void 0?null:a.getDependency("mesh",n.mesh).then(function(r){let s=a._getNodeRef(a.meshCache,n.mesh,r);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,h=n.weights.length;c<h;c++)o.morphTargetInfluences[c]=n.weights[c]}),s})}loadNode(e){let t=this.json,a=this,n=t.nodes[e],r=a._loadNodeShallow(e),s=[],o=n.children||[];for(let h=0,l=o.length;h<l;h++)s.push(a.getDependency("node",o[h]));let c=n.skin===void 0?Promise.resolve(null):a.getDependency("skin",n.skin);return Promise.all([r,Promise.all(s),c]).then(function(h){let l=h[0],d=h[1],u=h[2];u!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(u,fx)});for(let p=0,x=d.length;p<x;p++)l.add(d[p]);return l})}_loadNodeShallow(e){let t=this.json,a=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],s=r.name?n.createUniqueName(r.name):"",o=[],c=n._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(h){return n._getNodeRef(n.cameraCache,r.camera,h)})),n._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){o.push(h)}),this.nodeCache[e]=Promise.all(o).then(function(h){let l;if(r.isBone===!0?l=new vi:h.length>1?l=new Zt:h.length===1?l=h[0]:l=new ot,l!==h[0])for(let d=0,u=h.length;d<u;d++)l.add(h[d]);if(r.name&&(l.userData.name=r.name,l.name=s),en(l,r),r.extensions&&Jn(a,l,r),r.matrix!==void 0){let d=new Ce;d.fromArray(r.matrix),l.applyMatrix4(d)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return n.associations.has(l)||n.associations.set(l,{}),n.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){let t=this.extensions,a=this.json.scenes[e],n=this,r=new Zt;a.name&&(r.name=n.createUniqueName(a.name)),en(r,a),a.extensions&&Jn(t,r,a);let s=a.nodes||[],o=[];for(let c=0,h=s.length;c<h;c++)o.push(n.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let l=0,d=c.length;l<d;l++)r.add(c[l]);let h=l=>{let d=new Map;for(let[u,p]of n.associations)(u instanceof zt||u instanceof _t)&&d.set(u,p);return l.traverse(u=>{let p=n.associations.get(u);p!=null&&d.set(u,p)}),d};return n.associations=h(r),r})}_createAnimationTracks(e,t,a,n,r){let s=[],o=e.name?e.name:e.uuid,c=[];mn[r.path]===mn.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let h;switch(mn[r.path]){case mn.weights:h=Aa;break;case mn.rotation:h=Sa;break;case mn.position:case mn.scale:h=Ea;break;default:a.itemSize===1?h=Aa:h=Ea;break}let l=n.interpolation!==void 0?sx[n.interpolation]:Cn,d=this._getArrayFromAccessor(a);for(let u=0,p=c.length;u<p;u++){let x=new h(c[u]+"."+mn[r.path],t.array,d,l);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),s.push(x)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let a=Hh(t.constructor),n=new Float32Array(t.length);for(let r=0,s=t.length;r<s;r++)n[r]=t[r]*a;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){let n=this instanceof Sa?jh:Do;return new n(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ux(i,e,t){let a=e.attributes,n=new Jt;if(a.POSITION!==void 0){let o=t.json.accessors[a.POSITION],c=o.min,h=o.max;if(c!==void 0&&h!==void 0){if(n.set(new L(c[0],c[1],c[2]),new L(h[0],h[1],h[2])),o.normalized){let l=Hh(Pi[o.componentType]);n.min.multiplyScalar(l),n.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let h=0,l=r.length;h<l;h++){let d=r[h];if(d.POSITION!==void 0){let u=t.json.accessors[d.POSITION],p=u.min,x=u.max;if(p!==void 0&&x!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(x[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(x[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(x[2]))),u.normalized){let g=Hh(Pi[u.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}i.boundingBox=n;let s=new Ot;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,i.boundingSphere=s}function mf(i,e,t){let a=e.attributes,n=[];function r(s,o){return t.getDependency("accessor",s).then(function(c){i.setAttribute(o,c)})}for(let s in a){let o=Gh[s]||s.toLowerCase();o in i.attributes||n.push(r(a[s],o))}if(e.indices!==void 0&&!i.index){let s=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});n.push(s)}return ze.workingColorSpace!==At&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`),en(i,e),ux(i,e,t),Promise.all(n).then(function(){return e.targets!==void 0?cx(i,e.targets,t):i})}var m0=(function(){var i="b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuecj:Gdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq:Nf8Adbk;wadhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;i:I:cjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8Aar9cb83iUar9cb83i8War9cb83iyar9cb83iaar9cb83iKar9cb83izar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzcbhHincdhOcbhAdnavci6mbar9cb83i;Ooar9cb83i;Goar9cb83i;yoar9cb83i;qoadaHfgoybbhCcbhXincbhwcbhQdninaoalfhLaoybbgKaC7aQVhQawcP0meaLhoaKhCawcefgwaXfai6mbkkcbhCarc;qofhwincwhYcwh8AdnaQaC93gocFeGgEcs0mbclh8AaEci0mbcdcbaEEh8Akdnaocw4cFeGgEcs0mbclhYaEci0mbcdcbaEEhYkaYa8AfhEawydbh3cwhYcwh8Adnaocz4cFeGg5cs0mbclh8Aa5ci0mbcdcba5Eh8AkaEa3fhEdnaocFFFFb0mbclhYaocFFF8F0mbcbcdaocjjjw6EhYkawaEa8AfaYfBdbawclfhwaCcefgCcw9hmbkaLhoaKhCaXczfgXai6mbkcbhocehwazhQinawaoaQydbarc;qofaocdtfydb6EhoaQclfhQawcefgwcw9hmbkaoclthAcihOkcbhEarc;qlfcbcjdz:xjjjb8AarcbBd;ilar9cb83i;aladh8Eaqh8Fakh3inarc;qlfadaEaEcb9h9Ral2falz:wjjjb8Aaia8Faia8F6EhadnaqaiaE9RaEaqfai6EgKcsfc9WGgoaK9nmbarc;qofaKfcbaoaK9Rz:xjjjb8AkadaEal2fhhcbhginagaAVcl4hXarc;alfagcdtfh8JaHh8Kcbh8Lina8LaHfhwdndndndndndndnagPlbedibkaKTmvahawfhoarc;qlfawfRbbhQarc;qofhwaahCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaEaCcufgC9hmbxvkkaKTmla8Kc9:Ghoa8LcitcwGh8Aarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhQarc;qofhwaahCinawa3aofRbbcwta8EaofRbbVgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbaoalfhoawcefhwaYhQaEaCcufgC9hmbxlkkasa8Kc98GgQfhoa3aQfhYarc;qlfawc98GgQfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbxdkkaKTmdxekaKTmea8Lcith5ahaQfh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aX93a5486bbaYalfhYa8Aalfh8AaQhCaLcefgLaK9hmbkka8Jydbh8AcbhLarc;qofhoincdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgwaYawaY6Egwczawcz6Ea8Afh8AaoczfhoaLczfgLaK6mbka8Ja8ABdbka8Kcefh8Ka8Lcefg8Lcl9hmbkagcefggaO9hmbka8Eamfh8Ea8Faxfh8Fa3amfh3aEaxfgEai6mbkcbhocehwaPhQinawaoaQydbarc;alfaocdtfydb6EhoaQclfhQaOawcefgw9hmbkaraHcd4faAcdVaoaocdSE86bbaHclfgHal6mbkkabaefhgabcefhoalcd4g8McbaDEhkadcefh8Narc;abfceVhecbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aagao9Rak6mdadamal2gwfhxcbhHa8Nawfhzaocbakz:xjjjbg8Fakfh3aqaiam9Ramaqfai6Egscsfgocl4cifcd4hOaoc9WGg8JThPindndndndndndndndndndnaDTmbaraHcd4fRbbgQciGPlbedlbkasTmdaxaHfhoarc;abfaHfRbbhQarc;qofhwashCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaCcufgCmbxikkasTmiaHcitcwGh8Aarc;abfaHceVfRbbcwtarc;abfaHc9:GgofRbbVhQaxaofhoarc;qofhwashCinawao8VbbgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbawcefhwaoalfhoaYhQaCcufgCmbxikkaeaHc98Gg8Afhoaza8AfhYarc;abfa8AfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbkasTmdaQcl4hKaHcitcKGhEaxa8Afh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aK93aE486bbaYalfhYa8Aalfh8AaQhCaLcefgLas9hmbkkaDmbcbhoxlka8JTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8J9pmdxbkkdnavmbcehoxikcbh8AaOhLaOhKinarc;qofa8Afgocwf8Pibhyao8Pibh8PcdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgoaYaoaY6Egoczaocz6EaKfhKaocucbaya8P:e9cb9sEgwaoaw6EaLfhLa8Aczfg8Aa8J9pmdxbkka8FaHcd4fgoaoRbbcdaHcetcoGtV86bbxikdnaLas6mbaKas6mba8FaHcd4fgoaoRbbciaHcetcoGtV86bbaga39Ras6mra3arc;qofasz:wjjjbasfh3xikaLaK9phoka8FaHcd4fgwawRbbaoaHcetcoGtV86bbkaga39RaO6mla3cbaOz:xjjjbgaaOfhKdndna8JmbaPhoxekdnagaK9RcK9pmbaPhoxekaocdtc:q:G:cjbfcj:G:cjbaDEg3ydxghcetc;:FFFeGhAcuhEcuahtcu7cFeGh8Ecbh8Karc;qofhQinarc;qofa8KfhXczh8AdndndnahPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEh8AxekcbhoaAh8Aina8Aa8EaQaofRbb9nfh8Aaocefgocz9hmbkkcih5cbhYinczhwdndndna3aYcdtfydbgLPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEhwxekaLcetc;:FFFeGhwcuaLtcu7cFeGhCcbhoinawaCaQaofRbb9nfhwaocefgocz9hmbkkdndnawa8A6mbaLaE9hmeawa8A9hmea3a5cdtfydbcwSmekaYh5awh8AkaYcefgYci9hmbkaaa8Kco4fgoaoRbba5a8Kci4coGtV86bbdndndna3a5cdtfydbgEPDdbbbbbbbebkdncwaE9Tg5TmbcuaEtcu7hwdndnaEceSmbcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCaEtVhCaocefhoaYcufgYmbkaKaC86bbaXa5fhXaKcefhKa8La5fg8Lcz6mbxdkkcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCcetVhCaocefhoaYcufgYmbkaKaC:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaXa5fhXaKcefhKa8La5fg8Lcz6mbkkcbhoinaKaQaofRbbgC86bbaKaCawcFeG9pfhKaocefgocz9hmbxikkdnaEceSmbinaKcb86bbaKcefhKxbkkinaKcb86bbaKcefhKxbkkaKaX8Pbw83bwaKaX8Pbb83bbaKczfhKka8Kczfg8Ka8J9pgomeaQczfhQagaK9RcK9pmbkkaoTmlaKh3aKTmlkaHcefgHal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma3hoa3mbkcbhwxdkdnagao9RakalfgwcKcaaDEgQawaQ0EgC9pmbcbhwxdkdnawaQ9pmbaocbaCaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoara8Mz:wjjjba8Mfhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;i:I:cjbz:bjjjbk9reduaecd4gdaefgicaaica0Ecj;abae9Uc;WFbGcjdaeca0Egicl4cifcd4aifae2adfabaifcufai9U2fcefkmbcbabBd;i:I:cjbk;HPeLu8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaeaici9UgocHf6mbabcbyd;m:I:cjbgrc;GeV86bbalc;abfcFecjez:xjjjb8Aal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibabaefc9WfhwabcefgDaofhednaiTmbcmcsarcb9kgqEhkcbhxcbhmcbhPcbhscbhzindnaeaw9nmbcbhvxikazcufhvadaPcdtfgHydbhOaHcwfydbhAaHclfydbhCcbhXdndndninalc;abfavcsGcitfgoydlhQdndndnaoydbgoaO9hmbaQaCSmekdnaoaC9hmbaQaA9hmbaXcefhXxekaoaA9hmeaQaO9hmeaXcdfhXkaXc870mdascufhvaHaXcdtgAcxGgoyd:4:G:cjbcdtfydbhQaHaoyd:0:G:cjbcdtfydbhCaHaoyd:W:G:cjbcdtfydbhOcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaQaxSgvaXce9iaXak9oVgoGfhxdndndncbcsavEaXaoEgvcs9hmbarce9imbaQaQamaQcefamSgvEgmcefSmecmcsavEhvkaDavaAc;WeGV86bbavcs9hmeaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmxvkcPhvaDaAcPV86bbaQhmkavTmiavak9omicdhocehXazhAxlkavcufhvaXclfgXc;ab9hmbkkdnaHcecdcbaAaxSEaCaxSEcdtgvyd:W:G:cjbcdtfydbgOTaHavyd:0:G:cjbcdtfydbgCceSGaHavyd:4:G:cjbcdtfydbgQcdSGaxcb9hGaqGgLce9hmbal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibcbhxkcbhXascufgvhodnindnalaocsGcdtfydbaC9hmbaXhAxdkcuhAaocufhoaXcefgXcz9hmbkkcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaOaxSgKfhHdndnaAcm0mbaAcefhAxekcbcsaCaHSgvEhAaHavfhHkdndnaXcm0mbaXcefhXxekcbcsaQaHSgvEhXaHavfhHkc9:cuaKEhYcbhvaXaAcltVg8AcFeGhodndndninavc;q:G:cjbfRbbaoSmeavcefgvcz9hmbxdkkaLaOax9havcm0VVmbaDavc;WeV86bbxekaDaY86bbaea8A86bbaecefhekdnaKmbaOam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaOhmkdnaAcs9hmbaCam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaChmkdnaXcs9hmbaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmkalascdtfaOBdbascefcsGhvdndnaAPzbeeeeeeeeeeeeeebekalavcdtfaCBdbascdfcsGhvkdndnaXPzbeeeeeeeeeeeeeebekalavcdtfaQBdbavcefcsGhvkcihoalc;abfazcitfgXaOBdlaXaCBdbazcefcsGhAcdhXavhsaHhxxekcdhoalascdtfaQBdbcehXascefcsGhsazhAkalc;abfaAcitfgvaCBdlavaQBdbalc;abfazaXfcsGcitfgvaQBdlavaOBdbaDcefhDazaofcsGhzaPcifgPai6mbkkdnaeaw9nmbcbhvxekcbhvinaeavfavc;q:G:cjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meaeceadt0mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:I:cjbk:zderu8Jjjjjbcz9Rhlcbhvdnaeaicvf6mbabcbRb;m:I:cjbc;qeV86bbal9cb83iwabcefhvabaefc98fhodnaiTmbcbhecbhrcbhwindnavao6mbcbskadawcdtfydbgDalcwfaraDae9Rgeaec8F91ge7ae9Rc507grcdtfgqydb9Rgec8E91c9:Gaecdt7arVheinavcbcjeaecje6EaecFbGV86bbavcefhvaecr4gembkaqaDBdbaDheawcefgwai9hmbkkdnavao9nmbcbskavcbBbbavab9RclfhvkavkBeeucbhddninadcefgdc8F0meaeceadt0mbkkabadcwfcFeGcr9U2cvfk:dvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhralcxfIdbhqdndnakJbbbb9GTmbaxhkxekJbbjZar:l:tgkak:maxJbbbb9GEhkJbbjZax:l:tgxax:marJbbbb9GEhrkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEavNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohmxekcjjjj94hmkdndnakJbbj:;akJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;akJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaDfgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaifgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkaicwfhiaDclfhDalczfhlaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;uvdDue998Jjjjjbcjd9Rgo8Kjjjjbdndndnadcd4grTmbc:CucbavEhwaohdarhDinadawBdbadclfhdaDcufgDmbkavcd9hmbaeTmbarcdthqcbhkalhxinaohdaxhDarhwinadadydbgmaDydbcL4cFeGc:cufgPamaP9kEBdbaDclfhDadclfhdawcufgwmbkaxaqfhxakcefgkae9hmbxdkkaeTmekarcdthxavce9hhqcbhkindndndnaqmbarTmdc:CuhwalhdarhDinawadydbcL4cFeGc:cufgmawam9kEhwadclfhdaDcufgDmbxdkkdndndndnavPleddbdkarTmlaohdalhDarhwinadcbaDydbcL4cFeGgmc:cufgPaPam0EBdbadclfhdaDclfhDawcufgwmbxikkarTmicbhdarhDindnaladfIdbgsJbbbb9Bmbaoadfas:8cL4cFeGgwc8Aawc8A0Ec:cufBdbkadclfhdaDcufgDmbxdkkarTmdkc:CuhwkcbhdarhminawhDdnavceSmbaoadfydbhDkdndnaladfIdbgscjjj;8iaDai9RcefgPcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:OhDxekcjjjj94hDkabadfaDcFFFiaDcFFFi9iEcFFFrGaPcKtVBdbadclfhdamcufgmmbkkabaxfhbalaxfhlakcefgkae9hmbkkaocjdf8Kjjjjbk:Olveue99iue99iudnaeTmbceaicufthvcuaitcu7:Zhocbhradcl9hhwcbhDindndnalcwfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohixekcjjjj94hikdndnalIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9TgkaifhidndnalclfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohxxekcjjjj94hxkadaifhiaxce91avVhxdndnawmbabaDfgmai86bbamcifax86bbamcdfad86bbamcefak86bbxekabarfgmai87ebamcofax87ebamclfad87ebamcdfak87ebkarcwfhraDclfhDalczfhlaecufgembkkk;mqdQui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AdnadTmbaiTmbdndnabaeSmbaehoxekavcuadcdtgradcFFFFi0Ecbyd;q:I:cjbHjjjjbbgoBd:SeavceBd:mdaoaearz:wjjjb8AkavcbBd:Oeav9cb83i:Geavc:Gefaoadaiavc:Sefz:pjjjbavyd:Gehwadci9UgDcbyd;q:I:cjbHjjjjbbheavc:Sefavyd:mdgqcdtfaeBdbavaqcefgrBd:mdaecbaDz:xjjjbhkavc:SefarcdtfcuaicdtaicFFFFi0Ecbyd;q:I:cjbHjjjjbbgxBdbavaqcdfgmBd:mdalc;ebfhPawheaxhrinaralIdbaPaeydbgscwascw6EcdtfIdbMUdbaeclfhearclfhraicufgimbkavc:SefamcdtfcuaDcdtadcFFFF970Ecbyd;q:I:cjbHjjjjbbgmBdbdnadci6mbaoheamhraDhiinaraxaeydbcdtfIdbaxaeclfydbcdtfIdbMaxaecwfydbcdtfIdbMUdbaecxfhearclfhraicufgimbkkaqcifhzalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhscbhrcbhXcehQinaehLaoarcx2fgKydbhPaKclfydbhdabaXcx2fgecwfaKcwfydbgYBdbaeclfadBdbaeaPBdbakarfce86bbaOaYBdwaOadBdlaOaPBdbamarcdtfcbBdbcih8AdnasTmbaLhiinaOa8AcdtfaiydbgeBdba8AaeaY9haeaP9haead9hGGfh8AaiclfhiascufgsmbkkaXcefhXcbhsinaCaAaKascdtfydbcdtgifydbcdtfgYheawaifgdydbgPhidnaPTmbdninaeydbarSmeaeclfheaicufgiTmdxbkkaeaYaPcdtfc98fydbBdbadadydbcufBdbkascefgsci9hmbkdndndna8ATmbcuhrJbbbbhEcbhdavyd:KehYavyd:OehKindnawaOadcdtfydbcdtgsfydbgeTmbaxasfgiIdbh3aialcuadadcs0EcdtfclfIdbaHaecwaecw6EcdtfIdbMg5Udba5a3:th5aecdthiaKaYasfydbcdtfheinamaeydbgscdtfgPa5aPIdbMg3Udba3aEaEa39DgPEhEasaraPEhraeclfheaic98fgimbkkadcefgda8A9hmbkarcu9hmekaQaD9pmeindnakaQfRbbmbaQhrxdkaDaQcefgQ9hmbxdkka8Acza8Acz6EhsaOheaLhOarcu9hmekkazTmbaqcdtavc:Seffcwfheinaeydbcbyd;u:I:cjbH:bjjjbbaec98fheazcufgzmbkkavc:qdf8Kjjjjbk:0leoucuaicdtgvaicFFFFi0Egocbyd;q:I:cjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8AabydbhraehladhvinaralydbcdtfgoaoydbcefBdbalclfhlavcufgvmbkcbhvabydlglhoarhwaihDinaoavBdbaoclfhoawydbavfhvawclfhwaDcufgDmbkadci9Uhqdnadcd9nmbabydwhocbhvinaecwfydbhwaeclfydbhDalaeydbcdtfgbabydbgbcefBdbaoabcdtfavBdbalaDcdtfgDaDydbgDcefBdbaoaDcdtfavBdbalawcdtfgwawydbgwcefBdbaoawcdtfavBdbaecxfheaqavcefgv9hmbkkinalalydbarydb9RBdbarclfhralclfhlaicufgimbkkQbabaeadaic;G:G:cjbz:ojjjbkQbabaeadaic;i:H:cjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:3vioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:I:cjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:I:cjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkcwhvcbhiinalcxfavfc98fydbcbyd;u:I:cjbH:bjjjbbaiceGheclhvcehiaeTmbkalc;Waf8Kjjjjbk:Awliuo99iud9:cbhv8Jjjjjbca9Rgocbyd:4:I:cjbBdKaocb8Pd:W:I:cjb83izaocbyd;e:I:cjbBdwaocb8Pd:8:I:cjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:I:cjbgeabcifc98GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:I:cjbgeabcrfc94GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;y:I:cjbge9Rcifc98GaefgbBd;y:I:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk;Sddbcj:Gdk;idbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbbbbbebbbdbbbbbbbebbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;i:IdkCebbbebbbebbbdbbb9G:rbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(i),{}).then(function(p){t=p.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(1),t.exports.meshopt_encodeIndexVersion(1)});function n(p){for(var x=new Uint8Array(p.length),g=0;g<p.length;++g){var b=p.charCodeAt(g);x[g]=b>96?b-97:b>64?b-39:b+4}for(var f=0,g=0;g<p.length;++g)x[f++]=x[g]<60?e[x[g]]:(x[g]-60)*64+x[++g];return x.buffer.slice(0,f)}function r(p){if(!p)throw new Error("Assertion failed")}function s(p){return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}function o(p,x,g,b){var f=t.exports.sbrk,_=f(x.length*4),w=f(g*4),m=new Uint8Array(t.exports.memory.buffer),M=s(x);m.set(M,_),b&&b(_,_,x.length,g);var A=p(w,_,x.length,g);m=new Uint8Array(t.exports.memory.buffer);var T=new Uint32Array(g);new Uint8Array(T.buffer).set(m.subarray(w,w+g*4)),M.set(m.subarray(_,_+x.length*4)),f(_-f(0));for(var R=0;R<x.length;++R)x[R]=T[x[R]];return[T,A]}function c(p,x,g,b){var f=t.exports.sbrk,_=f(g*4),w=f(g*b),m=new Uint8Array(t.exports.memory.buffer);m.set(s(x),w),p(_,w,g,b),m=new Uint8Array(t.exports.memory.buffer);var M=new Uint32Array(g);return new Uint8Array(M.buffer).set(m.subarray(_,_+g*4)),f(_-f(0)),M}function h(p,x,g,b,f,_,w){var m=t.exports.sbrk,M=m(x),A=m(b*f),T=new Uint8Array(t.exports.memory.buffer);T.set(s(g),A);var R=p(M,x,A,b,f,_,w),v=new Uint8Array(R);return v.set(T.subarray(M,M+R)),m(M-m(0)),v}function l(p){for(var x=0,g=0;g<p.length;++g){var b=p[g];x=x<b?b:x}return x}function d(p,x){if(r(x==2||x==4),x==4)return new Uint32Array(p.buffer,p.byteOffset,p.byteLength/4);var g=new Uint16Array(p.buffer,p.byteOffset,p.byteLength/2);return new Uint32Array(g)}function u(p,x,g,b,f,_,w){var m=t.exports.sbrk,M=m(g*b),A=m(g*_),T=new Uint8Array(t.exports.memory.buffer);T.set(s(x),A),p(M,g,b,f,A,w);var R=new Uint8Array(g*b);return R.set(T.subarray(M,M+g*b)),m(M-m(0)),R}return{ready:a,supported:!0,reorderMesh:function(p,x,g){r(p instanceof Uint32Array||p instanceof Int32Array),r(!x||p.length%3==0);var b=x?g?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,p,l(p)+1,b)},reorderPoints:function(p,x){return r(p instanceof Float32Array),r(p.length%x==0),r(x>=3),c(t.exports.meshopt_spatialSortRemap,p,p.length/x,x*4)},encodeVertexBuffer:function(p,x,g){r(g>0&&g<=256),r(g%4==0);var b=t.exports.meshopt_encodeVertexBufferBound(x,g);return h(t.exports.meshopt_encodeVertexBuffer,b,p,x,g)},encodeVertexBufferLevel:function(p,x,g,b,f){r(g>0&&g<=256),r(g%4==0),r(b>=0&&b<=3),r(f===void 0||f==0||f==1);var _=t.exports.meshopt_encodeVertexBufferBound(x,g);return h(t.exports.meshopt_encodeVertexBufferLevel,_,p,x,g,b,f===void 0?-1:f)},encodeIndexBuffer:function(p,x,g){r(g==2||g==4),r(x%3==0);var b=d(p,g),f=t.exports.meshopt_encodeIndexBufferBound(x,l(b)+1);return h(t.exports.meshopt_encodeIndexBuffer,f,b,x,4)},encodeIndexSequence:function(p,x,g){r(g==2||g==4);var b=d(p,g),f=t.exports.meshopt_encodeIndexSequenceBound(x,l(b)+1);return h(t.exports.meshopt_encodeIndexSequence,f,b,x,4)},encodeGltfBuffer:function(p,x,g,b,f){var _={ATTRIBUTES:this.encodeVertexBufferLevel,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return r(_[b]),_[b](p,x,g,2,f===void 0?0:f)},encodeFilterOct:function(p,x,g,b){return r(g==4||g==8),r(b>=2&&b<=16),u(t.exports.meshopt_encodeFilterOct,p,x,g,b,16)},encodeFilterQuat:function(p,x,g,b){return r(g==8),r(b>=4&&b<=16),u(t.exports.meshopt_encodeFilterQuat,p,x,g,b,16)},encodeFilterExp:function(p,x,g,b,f){r(g>0&&g%4==0),r(b>=1&&b<=24);var _={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return r(!f||f in _),u(t.exports.meshopt_encodeFilterExp,p,x,g,b,g,f?_[f]:1)},encodeFilterColor:function(p,x,g,b){return r(g==4||g==8),r(b>=2&&b<=16),u(t.exports.meshopt_encodeFilterColor,p,x,g,b,16)}}})();var xf=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;X8:kdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:bsesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:I9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkpPesu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhDaicefgiarfhqdndnaeci9pmbaqhexekcmcsawceSEhkcbhxcbhmaqhecbhlcbhoindndnaiRbbgrc;Ve0mbavc;abfaoarcu7gPcl4fcsGcitfgwydlhsawydbhzdndnarcsGgwak9pmbavalaPfcsGcdtfydbaxawEhraxawTgHfhxxekdnaeaD9nmbc9:hoxokdndnawcsSmbcehHamawcetfcWfhrxekaecefhrae8SbbgwcFeGhPdndnawcu9mmbarhexekaecvfheaPcFbGhPcrhwdninar8SbbgHcFbGawtaPVhPaHcu9kmearcefhrawcrfgwc8J9hmbxdkkarcefhekcehHaPce4cbaPceG9R7amfhrkarhmkavc;abfaocitfgwarBdbawasBdlavalcdtfarBdbavc;abfaocefcsGcitfgwazBdbawarBdlaocdfhoaHalfhldnadcd9hmbabar87elabas87edabaz87ebabcofhbxdkabarBdwabasBdlabazBdbabcxfhbxekdnarcpe0mbavalaDarcsGfRbbgwcl4gP9RcsGcdtfydbaxcefgsaPEhravalaw9RcsGcdtfydbasaPTgzfgsawcsGgPEhwaPThPdndnadcd9hmbabaw87elabar87edabax87ebcohHxekabawBdwabarBdlabaxBdbcxhHkavalcdtfaxBdbavc;abfaocitfgOarBdbaOaxBdlavalcefglcsGcdtfarBdbavc;abfaocefcsGcitfgOawBdbaOarBdlavalazfglcsGcdtfawBdbavc;abfaocdfcsGcitfgraxBdbarawBdlaocifhoabaHfhbalaPfhlasaPfhxxekdnaeaD9nmbc9:hoxlkaxcbaeRbbgwEgHarc;:eSgrfhsawcsGhOdndnawcl4gAmbascefhzxekashzavalaA9RcsGcdtfydbhskdndnaOmbazcefhxxekazhxavalaw9RcsGcdtfydbhzkdndnarTmbaecefhrxekaecdfhrae8SbegPcFeGhwdnaPcu9kmbaecofhHawcFbGhwcrhedninar8SbbgPcFbGaetawVhwaPcu9kmearcefhraecrfgec8J9hmbkaHhrxekarcefhrkawce4cbawceG9R7amfgmhHkdndnaAcsSmbarhwxekarcefhwar8SbbgecFeGhPdnaecu9kmbarcvfhsaPcFbGhPcrhedninaw8SbbgrcFbGaetaPVhParcu9kmeawcefhwaecrfgec8J9hmbkashwxekawcefhwkaPce4cbaPceG9R7amfgmhskdndnaOcsSmbawhexekawcefheaw8SbbgrcFeGhPdnarcu9kmbawcvfhzaPcFbGhPcrhrdninae8SbbgwcFbGartaPVhPawcu9kmeaecefhearcrfgrc8J9hmbkazhexekaecefhekaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabaz87elabas87edabaH87ebcohrxekabazBdwabasBdlabaHBdbcxhrkavc;abfaocitfgwasBdbawaHBdlavalcdtfaHBdbavc;abfaocefcsGcitfgwazBdbawasBdlavalcefglcsGcdtfasBdbavc;abfaocdfcsGcitfgwaHBdbawazBdlavalaATaAcsSVfglcsGcdtfazBdbalaOTaOcsSVfhlaocifhoabarfhbkaocsGhoalcsGhlaicefgiaq6mbkkcbc99aeaDSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),a=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(i),r,s=WebAssembly.instantiate(n,{}).then(function(f){r=f.instance,r.exports.__wasm_call_ctors()});function o(f){for(var _=new Uint8Array(f.length),w=0;w<f.length;++w){var m=f.charCodeAt(w);_[w]=m>96?m-97:m>64?m-39:m+4}for(var M=0,w=0;w<f.length;++w)_[M++]=_[w]<60?a[_[w]]:(_[w]-60)*64+_[++w];return _.buffer.slice(0,M)}function c(f,_,w,m,M,A,T){var R=f.exports.sbrk,v=m+3&-4,y=R(v*M),k=R(A.length),O=new Uint8Array(f.exports.memory.buffer);O.set(A,k);var C=_(y,m,M,k,A.length);if(C==0&&T&&T(y,v,M),w.set(O.subarray(y,y+m*M)),R(y-R(0)),C!=0)throw new Error("Malformed buffer data: "+C)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},l={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function p(f){var _={object:new Worker(f),pending:0,requests:{}};return _.object.onmessage=function(w){var m=w.data;_.pending-=m.count,_.requests[m.id][m.action](m.value),delete _.requests[m.id]},_}function x(f){for(var _="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+c.toString()+b.toString(),w=new Blob([_],{type:"text/javascript"}),m=URL.createObjectURL(w),M=d.length;M<f;++M)d[M]=p(m);for(var M=f;M<d.length;++M)d[M].object.postMessage({});d.length=f,URL.revokeObjectURL(m)}function g(f,_,w,m,M){for(var A=d[0],T=1;T<d.length;++T)d[T].pending<A.pending&&(A=d[T]);return new Promise(function(R,v){var y=new Uint8Array(w),k=++u;A.pending+=f,A.requests[k]={resolve:R,reject:v},A.object.postMessage({id:k,count:f,size:_,source:y,mode:m,filter:M},[y.buffer])})}function b(f){var _=f.data;self.ready.then(function(w){if(!_.id)return self.close();try{var m=new Uint8Array(_.count*_.size);c(w,w.exports[_.mode],m,_.count,_.size,_.source,w.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:m},[m.buffer])}catch(M){self.postMessage({id:_.id,count:_.count,action:"reject",value:M})}})}return{ready:s,supported:!0,useWorkers:function(f){x(f)},decodeVertexBuffer:function(f,_,w,m,M){c(r,r.exports.meshopt_decodeVertexBuffer,f,_,w,m,r.exports[h[M]])},decodeIndexBuffer:function(f,_,w,m){c(r,r.exports.meshopt_decodeIndexBuffer,f,_,w,m)},decodeIndexSequence:function(f,_,w,m){c(r,r.exports.meshopt_decodeIndexSequence,f,_,w,m)},decodeGltfBuffer:function(f,_,w,m,M,A){c(r,r.exports[l[M]],f,_,w,m,r.exports[h[A]])},decodeGltfBufferAsync:function(f,_,w,m,M){return d.length>0?g(f,_,w,l[m],h[M]):s.then(function(){var A=new Uint8Array(f*_);return c(r,r.exports[l[m]],A,f,_,w,r.exports[h[M]]),A})}}})();var y0=(function(){var i="b9H79Tebbbe;veC9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999GDuuuuuuuuueu9Gkuuuuuuuu99uub9Gluuuueu9Gluuuub9Giuuueui3EdilvorlwDiqkrxmPszdHObAAbeAlve9Weiiviebeoweuecj:Gdkr:Sdmo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbmQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bPX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbsP9TW79O9V9Wt9FVW9TW79Obza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbA59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9WbCl79IV9RbXDwebcekdKYq:p:1dElbzOk:Q:tekYue99iuQ99eui99Due99xue9:w998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkdnamcdGTmbalcrfci4cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd;y:L:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:xjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd;C:L:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd;y:L:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd;y:L:cjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhXasc:Cefasyd;8egOcdtfaXBdbasaOcefBd;8eaHaXaialavazasc:Cefz:djjjbalcbyd;y:L:cjbHjjjjbbh5asc:Cefasyd;8egOcdtfa5BdbasaOcefBd;8ea3cbyd;y:L:cjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8ea3cbyd;y:L:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaOcFeaez:xjjjbh8EaAcFeaez:xjjjbh8FdnalTmbindnaKa8AgAcefg8AcdtfydbgCaKaAcdtgefydbgOSmbaCaO9RhYaEaOcitfhaa8Faefhha8EaefhLcbhCindndnaaaCcitfydbgQaA9hmbaLaABdbahaABdbxekdnaKaQcdtggfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheinaeydbaASmdaecwfheaOcufgOmbkka8FagfgeaAaQaeydbcuSEBdbaLaQaAaLydbcuSEBdbkaCcefgCaY9hmbkka8Aal9hmbkaHhOaXhAa8EhQa8FhCcbheindndnaeaOydbgL9hmbdnaeaAydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaHaYcdtfydbaHaLcdtfydb9hmba5aefcd86bbxika5aefhadnaeaYSmbaeaLSmbaace86bbxikaacv86bbxdkdnaeaXaLcdtgYfydb9hmbdnaCydbgacuSmbaeaaSmbaQydbggcuSmbaeagSmba8FaYfydbghcuSmbahaLSmba8EaYfydbgYcuSmbaYaLSmbaHaacdtfydbgLaHaYcdtfydb9hmbaLaHagcdtfydbgYSmbaYaHahcdtfydb9hmba5aefcd86bbxika5aefcv86bbxdka5aefcv86bbxeka5aefa5aLfRbb86bbkaOclfhOaAclfhAaQclfhQaCclfhCalaecefge9hmbkdnamcaGTmbcbh8Jindndna5a8Jfg8KRbbg8Lc9:fPlbeebekdndndnaHa8Jcdtfydbgea8J9hmbcbhYcbh8MaqTmednazTmbcbh8Ma8JheinaqazaecdtgefydbfRbbce4a8MVceGh8MaXaefydbgea8J9hmbxikkcbh8Ma8JheinaqaefRbbce4a8MVceGh8MaXaecdtfydbgea8J9hmbxdkka5aefRbbhexeka8JheindnaKaecdtg8AfgeclfydbgOaeydbgeSmbaOae9RhgaEaecitfhhaHa8AfhacbhLinahaLcitfydbgQhednindnaKaecdtgCfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheaaydbhAdninaHaeydbcdtfydbaASmeaecwfheaOcufgOTmdxbkkcbhexdkaXaCfydbgeaQ9hmbkcehekaYaeVhYaLcefgLag9hmbkkaXa8Afydbgea8J9hmbka8LclciaYceGEa8MEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaHhOalhAindnaqaeydbfRbbceGTmba5aOydbfcv86bbkaeclfheaOclfhOaAcufgAmbxdkkaqheaHhOalhAindnaeRbbceGTmba5aOydbfcv86bbkaecefheaOclfhOaAcufgAmbkkaHhealhAa5hOindna5aeydbfRbbcv9hmbaOcv86bbkaeclfheaOcefhOaAcufgAmbkkamceGTmba5healhOindndnaeRbbcufPlbeebekaecv86bbkaecefheaOcufgOmbkkcbh8Ncualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Kaialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhaxekcbhaawhecbhOindnaeIdbJbbbb9ETmbasaacdtfaOBdbaacefhakaeclfheaDaOcefgO9hmbkcuaaal2gecdtaecFFFFi0Ecbyd;y:L:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaambcbhaxekarcd4hgdnazTmbaacdthhcbhLa8PhYinaoazaLcdtfydbag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbxdkkaacdthhcbhLa8PhYinaoaLag2cdtfhQasheaYhOaahAinaOaQaeydbcdtgCfIdbawaCfIdbNUdbaeclfheaOclfhOaAcufgAmbkaYahfhYaLcefgLal9hmbkkcualc8S2gOalc;D;O;f8U0EgCcbyd;y:L:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaOz:xjjjbhIcbh8RcbhgdnaaTmbcbh8NaCcbyd;y:L:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaOz:xjjjb8Acuaaal2gecltgOaecFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaOz:xjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd;y:L:cjbHjjjjbbh8Nasc:Cefasyd;8egOcdtfa8NBdbasaOcefBd;8ea8Ncbaez:xjjjb8AkdnadTmbcbhQabhOina8KaOclfydbgLcx2fgeIdba8KaOydbgYcx2fgAIdbg8S:tgRa8KaOcwfydbghcx2fgCIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaCIdba8S:tg8XN:tg8Ya8YNa8WaCIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaHaYcdtfydbgCc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaHaLcdtfydbgLc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaHahcdtfydbgYc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8NTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8NaCcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8NaLcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8NaYcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaOcxfhOaQcifgQad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhOaHhCazhQaIhea8KhAindnaOaCydb9hmbaOhLdnazTmbaQydbhLka80hRdnaqTmbJbbjZa80aqaLfRbbclGEhRkaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaeaRaecyfgLIdbg8YNgRaeIdbMUdbaeclfgYaRaYIdbMUdbaecwfgYaRaYIdbMUdbaecKfgYaYIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgYaYIdbaRaAclfIdbg8XN:tUdbaecafgYaYIdbaRa8VN:tUdbaec8KfgYIdbh81aLa8YaRMUdbaYa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaCclfhCaQclfhQaec8SfheaAcxfhAalaOcefgO9hmbkkdnadTmbcbh8AabhLinaba8AcdtfhYcbheindna5aLaefydbgCfRbbgOTmba5aYaec:G:G:cjbfydbcdtfydbgQfRbbcFeGgATmbdnaOclSghmbaOci6mbaAclSmbaAcd0mekdnaOcd0mba8EaCcdtfydbaQ9hmekdnaAcd0mba8FaQcdtfydbaC9hmekdndnahmbaAcl9hmekaOciSmeaAciSmekJbbbZJbbbZJbbacaAcdSEaOcdSEhUdna8KaYaec:K:G:cjbfydbcdtfydbcx2fgOIdwa8KaCcx2fgAIdwg86:tg8Sa8KaQcx2fghIdwa86:tg8Xa8XNahIdbaAIdbg8U:tg80a80NahIdlaAIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaOIdba8U:tg83a80Na8VaOIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaHaCcdtfydbc8S2fgOaOIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaOa8Wa8XaRa8XNg8SNMg83aOIdlMUdlaOa8Ya81aRa81Ng8WNMg8YaOIdwMUdwaOaca8Va8SNMg8SaOIdxMUdxaOaZa8Wa8VNMgUaOIdzMUdzaOa8:a8Xa8WNMg8WaOIdCMUdCaOa87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaOIdKMUdKaOa89a8XaRNMg8XaOId3MUd3aOa85a81aRNMg81aOIdaMUdaaOa88a86aRN:tgRaOId8KMUd8KaOaBaOIdyMUdyaIaHaQcdtfydbc8S2fgOa80aOIdbMUdbaOa83aOIdlMUdlaOa8YaOIdwMUdwaOa8SaOIdxMUdxaOaUaOIdzMUdzaOa8WaOIdCMUdCaOa8VaOIdKMUdKaOa8XaOId3MUd3aOa81aOIdaMUdaaOaRaOId8KMUd8KaOaBaOIdyMUdykaeclfgecx9hmbkaLcxfhLa8Acifg8Aad6mbkkdnamcjeGTmbalTmbcbh9cindnaKa9cgecdtgOfydbghaKaecefg9ccdtfydbg8M9pmba8Kaecx2fhDaIaHaOfydbgCc8S2fh8AindnaHaEahcitfgeydbgLcdtfydbg8JaC0mbaeydlh8LcuhAaLheindnaKaecdtgYfgeclfydbgOaeydbgeSmbaOae9RhOaEaecitfheindnaHaeydbcdtfydbaC9hmbaAcu9hhQaLhAaQmbaeclfydbhAkaecwfheaOcufgOmbkkaXaYfydbgeaL9hmbkaAaLSmbaAcuSmba8KaLcx2fgeIdbaDIdbg81:tgRa8Ka8Lcx2fgOIdlaDIdlg80:tg8XNaeIdla80:tg8VaOIdba81:tg8YN:tg86a8KaAcx2fgAIdba81:tg8Za8VNaAIdla80:tg83aRN:tg8SNa8VaOIdwaDIdwgB:tg8UNaeIdwaB:tg8Wa8XN:tg85a83a8WNaAIdwaB:tg87a8VN:tgUNa8Wa8YNaRa8UN:tg88a87aRNa8Za8WN:tg89NMMa86a86Na85a85Na88a88NMM:rJ:A:z9z:;Na8Sa8SNaUaUNa89a89NMM:rN9Gmbdna8Ua8Wa8WNaRaRNa8Va8VNMMg8SNa8Wa8Ua8WNa8YaRNa8Va8XNMMg86N:tg8Ua8UNa8Ya8SNaRa86N:tg8Ya8YNa8Xa8SNa8Va86N:tg86a86NMMg8XJbbbb9ETmba8Ua8X:rg8X:vh8Ua86a8X:vh86a8Ya8X:vh8Yka8S:rg8Xa8UaBNa8Ya81Na80a86NMM:mgUNg85aUNhUa8Ua85Nh88a86a85Nh89a8Ya85Nh8:a86a8Xa8UNg85NhZa85a8YNhna8Ya8Xa86NgcNhJa8Ua85Nh8Ua86acNh86a8Ya8Xa8YNNh85dna87a8SNa8Wa87a8WNa8ZaRNa8Va83NMMg8YN:tg8Wa8WNa8Za8SNaRa8YN:tgRaRNa83a8SNa8Va8YN:tg8Va8VNMMg8YJbbbb9ETmba8Wa8Y:rg8Y:vh8Wa8Va8Y:vh8VaRa8Y:vhRka8Aa8AIdba85aRa8XaRNNMg8SMUdba8Aa86a8Va8Xa8VNg8ZNMg86a8AIdlMUdla8Aa8Ua8Wa8Xa8WNg8YNMg8Ua8AIdwMUdwa8AaJaRa8ZNMg8Za8AIdxMUdxa8Aana8YaRNMg83a8AIdzMUdza8AaZa8Va8YNMg85a8AIdCMUdCa8Aa8:aRa8Xa8WaBNaRa81Na80a8VNMMg81:mNg8YNMgRa8AIdKMUdKa8Aa89a8Va8YNMg8Va8AId3MUd3a8Aa88a8Wa8YNMg8Wa8AIdaMUdaa8AaUa81a8YN:tg8Ya8AId8KMUd8Ka8Aa8Xa8XMg8Xa8AIdyMUdyaIa8Jc8S2fgea8SaeIdbMUdbaea86aeIdlMUdlaea8UaeIdwMUdwaea8ZaeIdxMUdxaea83aeIdzMUdzaea85aeIdCMUdCaeaRaeIdKMUdKaea8VaeId3MUd3aea8WaeIdaMUdaaea8YaeId8KMUd8Kaea8XaeIdyMUdykahcefgha8M9hmbkka9cal9hmbkkdnadTmbaaTmbcbhYinJbbbbh80a8KabaYcdtfgeclfydbgLcx2fgOIdwa8Kaeydbghcx2fgAIdwg8Z:tg8Va8VNaOIdbaAIdbg83:tg8Wa8WNaOIdlaAIdlg85:tg8Xa8XNMMg8Sa8Kaecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8Pahaa2g8JcdtfhOa8Pa8Aaa2g8McdtfhAa8PaLaa2gDcdtfhCa8Z:mhJa85:mh9ea83:mhTascjdfheaahQJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aCIdbaOIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRaJa8VNa9ea8WNa8YaTa8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aOclfhOaCclfhCaAclfhAaeczfheaQcufgQmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyagaLc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8JcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8RaDcltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8Ra8McltfhLcbhOaahCinaLaOfgeascjdfaOfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbkaYcifgYad6mbkkcbhAdndnamcwGgSmbJbbbbh86cbh9hcbh9icbh6xekcbh9ha3cbyd;y:L:cjbHjjjjbbh6asc:Cefasyd;8egecdtfa6BdbasaecefBd;8ecua6alabadaHz:fjjjbgCcltaCcjjjjiGEcbyd;y:L:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ea9iaCa6a8Kalz:gjjjbJFFuuh86aCTmba9iheaChOinaeIdbgRa86a86aR9EEh86aeclfheaOcufgOmbkaCh9hkdnalTmbaKclfheaKydbhCa5hOalhQcbhAincbaeydbgLaC9RaORbbcpeGEaAfhAaOcefhOaeclfheaLhCaQcufgQmbkaAce4hAkcuadaA9Rcifg9kcx2a9kc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua9kcdta9kcFFFFi0Ecbyd;y:L:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ea3cbyd;y:L:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8ealcbyd;y:L:cjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8eaxaxNayJbbjZamclGEg9pa9pN:vh87JbbbbhUdnadak9nmbdna9kci6mbamcjdGh9qaaclth9ra0cwfh9sJbbbbh85JbbbbhUinascNefabadalaHz:cjjjbabh8Acbh3cbh9tinaba9tcdtfh8McbheindnaHa8AaefydbgAcdtghfydbgCaHa8Maec:W:G:cjbfydbcdtfydbgOcdtg8JfydbgQSmba5aOfRbbgYco2a5aAfRbbgLfRb;a:G:cjbg8LaLco2aYfgDRb;a:G:cjbg9cVcFeGTmbdnaQaC9nmbaDRb;W:G:cjbcFeGmekdnaLcufcFeGce0mbaYTmba8EahfydbaO9hmekdnaLTmbaYcufcFeGce0mba8Fa8JfydbaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEBdlaCaAaOaQEBdbaCaQa8LGcb9hBdwa3cefh3kaeclfgecx9hmbkdna9tcifg9tad9pmba8Acxfh8Aa3cifa9k9nmekka3TmdcbhDinaIaHa0aDcx2fghydbgLcdtgCfydbg8Jc8S2fgeIdwa8KahydlgYcx2fgOIdwg8WNaeIdzaOIdbg8XNaeIdaMgRaRMMa8WNaeIdlaOIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8Vdndnahydwg8MmbJFFuuhBxekJbbbbJbbjZaIaHaYcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8KaLcx2fgOIdwg81NaeIdzaOIdbg80NaeIdaMgBaBMMa81NaeIdlaOIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNhBka8VaRNh80dnaaTmbagaLc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaYaa2gQcdtfhOa8RaLaa2g8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaYc8S2fgAIdwa8KaLcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8AcdtfhOa8RaQcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBdndndna5aLfRbbc9:fPibeedkdna8Fa8Ea8EaCfydbaYSEaXaCfydbgQcdtfydbgCcu9hmbaXaYcdtfydbhCkagaQc8S2fgAIdwa8KaCcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaCaa2g8AcdtfhOa8RaQaa2g8JcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEh8Sdndna8MmbJbbbbhRxekagaCc8S2fgAIdwa8KaQcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8JcdtfhOa8Ra8AcltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaR:lgRa81aRa819DEaRa9qEhRka80a8SMh80aBaRMhBxdkaXaCfydbgCaLSmbaHaYcdtfydbh8Aindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8ASmekdna8FaQfydbgecuSmbaHaecdtfydba8ASmekaYhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbka80aR:lgRa81aRa819DEaRa9qEMh80aXaQfydbgCaL9hmbkkdna5aYfRbbgeciSmbaecl9hmeka8MTmbaXaYcdtfydbgCaYSmbindndna8EaCcdtgQfydbgecuSmbaHaecdtfydba8JSmekdna8FaQfydbgecuSmbaHaecdtfydba8JSmekaLhekagaCc8S2fgAIdwa8Kaecx2fgOIdwg8WNaAIdzaOIdbg8XNaAIdaMgRaRMMa8WNaAIdlaOIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Paeaa2cdtfhOa8RaCaa2cltfheaAIdyh81aahAinaOIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaOclfhOaeczfheaAcufgAmbkaBaR:lgRa81aRa819DEaRa9qEMhBaXaQfydbgCaY9hmbkkahaBa80aBa809DgeEUdwahaLaYaea8Mcb9hGgeEBdlahaYaLaeEBdbaDcefgDa39hmbkascjdfcbcj;qbz:xjjjb8Aa9shea3hOinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaOcufgOmbkcbhecbhOinascjdfaefgAydbhCaAaOBdbaCaOfhOaeclfgecj;qb9hmbkcbhea9shOinascjdfaOydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba9maAcdtfaeBdbaOcxfhOa3aecefge9hmbkadak9RgAci9Uh9udnalTmbcbhea9nhOinaOaeBdbaOclfhOalaecefge9hmbkkcbh9va9ocbalz:xjjjbh9caAcO9Uh9wa9uce4h9tcbh8Lcbh8Mdnina0a9ma8Mcdtfydbcx2fg8JIdwgRa879Emea8La9u9pmeJFFuuh8Vdna9ta39pmba0a9ma9tcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9w0mdkdna9caHa8JydlgDcdtg9xfg8AydbgAfg9yRbba9caHa8Jydbghcdtg9zfydbgefg9ARbbVmba5ahfRbbh9BdndnaKaecdtfgOclfydbgCaOydbgOSmbaCaO9RhCa8KaAcx2fhLa8Kaecx2fhYaEaOcitfheindna9naeydbcdtfydbgOaASmba9naeclfydbcdtfydbgQaASmbaOaQSmba8KaQcx2fgQIdba8KaOcx2fgOIdbg8W:tgRaYIdlaOIdlg8X:tg80NaQIdla8X:tg8VaYIdba8W:tgBN:tg8YaRaLIdla8X:tg8SNa8VaLIdba8W:tg8UN:tg8XNa8VaYIdwaOIdwg81:tg8ZNaQIdwa81:tg8Wa80N:tg80a8VaLIdwa81:tg83Na8Wa8SN:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaCcufgCmbkkdndna9Bc99fcFeGce0mba9na9zfaDBdbaXa9zfydbgeahSmeina8AydbhAdndna8EaecdtgOfydbgecuSmbaHaecdtfydbaASmekdna8FaOfydbgecuSmbaHaecdtfydbaASmekaDheka9naOfaeBdbaXaOfydbgeah9hmbxdkkdndna9BcFeGcdSmbaDhexekdna8Fa8Ea8Ea9zfydbaDSEaXa9zfydbghcdtfydbgecu9hmbaXa9xfydbheka9na9zfaDBdbka9nahcdtfaeBdbka9Ace86bba9yce86bba8JIdwgRaUaUaR9DEhUa9vcefh9vcecda9BcFeGceSEa8Lfh8Lxeka9tcefh9tka8Mcefg8Ma39hmbkka9vTmddnalTmbcbhLcbhhindna9nahcdtgefydbgAahSmbaHaAcdtfydbh8AdnahaHaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya8NTmba8Na8Acltfgea8NahcltfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxkaaTmbagaAc8S2fgeagahc8S2g8MfgOIdbaeIdbMUdbaeaOIdlaeIdlMUdlaeaOIdwaeIdwMUdwaeaOIdxaeIdxMUdxaeaOIdzaeIdzMUdzaeaOIdCaeIdCMUdCaeaOIdKaeIdKMUdKaeaOId3aeId3MUd3aeaOIdaaeIdaMUdaaeaOId8KaeId8KMUd8KaeaOIdyaeIdyMUdya9raA2hYa8RhOaahCinaOaYfgeaOaLfgAIdbaeIdbMUdbaeclfgQaAclfIdbaQIdbMUdbaecwfgQaAcwfIdbaQIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaOczfhOaCcufgCmbka8JmbJbbbbJbbjZaIa8MfgeIdygR:vaRJbbbb9BEaeIdwa8Ka8Acx2fgOIdwgRNaeIdzaOIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaOIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85kaLa9rfhLahcefghal9hmbkcbhOa8EheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8EaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkcbhOa8FheindnaeydbgAcuSmbdnaOa9naAcdtgCfydbgA9hmbcuhAa8FaCfydbgCcuSmba9naCcdtfydbhAkaeaABdbkaeclfhealaOcefgO9hmbkka85aUaaEh85cbhOabhecbhAindnaHa9naeydbcdtfydbgLcdtfydbgCaHa9naeclfydbcdtfydbgYcdtfydbgQSmbaCaHa9naecwfydbcdtfydbg8AcdtfydbghSmbaQahSmbabaOcdtfgCaLBdbaCcwfa8ABdbaCclfaYBdbaOcifhOkaecxfheaAcifgAad6mbkdndnaSmbaOhdxekdnaOak0mbaOhdxekdna86a859FmbaOhdxekJFFuuh86cbhdabhecbhAindna9ia6aeydbgCcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9CabadcdtfgQaCBdbaQclfa9C83dbaRa86a86aR9EEh86adcifhdkaecxfheaAcifgAaO6mbkkadak0mbxdkkascNefabadalaHz:cjjjbkdndnadak0mbadhYxekdnaSmbadhYxekdna86a879FmbadhYxekcehQina86Jbb;aZNgRa87aRa879DEh8WJbbbbhRdna9hTmba9ihea9hhOinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaOcufgOmbkkJFFuuh86cbhYabhecbhOindna9ia6aeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9CabaYcdtfgCaABdbaCclfa9C83dba8Va86a86a8V9EEh86aYcifhYkaecxfheaOcifgOad6mbkdnaQaYad9hVceGmbadhYxdkaRaUaUaR9DEhUaYak9nmecbhQaYhda86a879FmbkkdnamcjjjjdGTmba9ocbalz:xjjjbh8AdnaYTmbabheaYhOina8AaeydbgAfce86bba8AaHaAcdtfydbfce86bbaeclfheaOcufgOmbkkascNefabaYalaHz:cjjjbdndnalTmbcbhCindna8AaCfRbbTmbdna5aCfRbbPlbeebekdnaHaCcdtgLfydbgeaCSmba8KaCcx2fgOa8Kaecx2fgeydwBdwaOae8Pdb83dbxekaIaCc8S2fgQIdygnanJL:3;rUNgRMh87aQIdwgxaRMh8SaQIdlg9DaRMh8UaQIdbg9EaRMh81aQIdag9FaRa8KaCcx2fg8JIdwg88N:th8ZaQId3g9GaRa8JIdlg89N:th83aQIdKg9Ha8JIdbg8:aRN:th80JbbbbhZaQIdCg9IJbbbbMh85aQIdzg9JJbbbbMhBaQIdxg9KJbbbbMh86dndnaaTmbaChAinJbbbba87agaAc8S2fgOIdygR:vaRJbbbb9BEhRa8RaAaa2cltfheaOIdaa87Na8ZMh8ZaOId3a87Na83Mh83aOIdKa87Na80Mh80aOIdCa87Na85Mh85aOIdza87NaBMhBaOIdxa87Na86Mh86aOIdwa87Na8SMh8SaOIdla87Na8UMh8UaOIdba87Na81Mh81aahOina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaOcufgOmbkaXaAcdtfydbgAaC9hmbka8NTmba8NaCcltfgeIdxhTaeIdwhcaeIdlhJaeIdbhRxekJbbbbhTJbbbbhcJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83acaRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vgc:mhJdnJbbbbaRaRa81:vg9eN:ta86acN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80NaT:tMMa86:vhZka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:maZNa8W:ma8ZaZNa83aB:vMgBNa8V:maJaZNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aKaLfgeclfydbgOaeydbge9RhhaEaecitfhLJbbbbhRdnaOaeSg8MmbJbbbbhRaLheahhAina8Kaeclfydbcx2fgOIdwa88:tg8Va8VNaOIdba8::tg8Va8VNaOIdla89:tg8Va8VNMMg8Va8Kaeydbcx2fgOIdwa88:tg8Wa8WNaOIdba8::tg8Wa8WNaOIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaQId8KhZdna8Mmbina8KaLclfydbcx2fgeIdba8KaLydbcx2fgOIdbg8W:tgRa89aOIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aOIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmdaLcwfhLahcufghmbkkJbbbbJbbjZan:vanJbbbb9BEgRaxaBNa9Ja87Na9FMg8Va8VMMaBNa9Da85Na9IaBNa9GMg8Va8VMMa85Na9Ea87Na9Ka85Na9HMg8Va8VMMa87NaZMMM:lNaRaxa88Na9Ja8:Na9FMg8Va8VMMa88Na9Da89Na9Ia88Na9GMg8Va8VMMa89Na9Ea8:Na9Ka89Na9HMg8Va8VMMa8:NaZMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaCcefgCal9hmbkdnaambcbhaxdkcbhQindna8AaQfRbbTmbaHaQcdtgefydbaQ9hmba5aQfhhaXaefh8Ja8KaQcx2fhAa8PaQaa2cdtfh8McbhEincuhCdnahRbbc99fcFeGce0mbaQhCa8JydbgeaQSmba8PaEcdtgOfhLa8MaOfIdbhRaQhCinaChOcuhCdnaLaeaa2cdtfIdbaR9CmbaOcuSmbaOhCagaec8S2fIdyagaOc8S2fIdy9ETmbaehCkaXaecdtfydbgeaQ9hmbkka8PaEcdtfhLa8RaEcltfhKaQheinaLaeaa2cdtfJbbbbJbbjZagaeaCaCcuSEgOc8S2fIdygR:vaRJbbbb9BEaKaOaa2cltfgOIdwaAIdwNaOIdbaAIdbNaOIdlaAIdlNMMaOIdxMNUdbaXaecdtfydbgeaQ9hmbkaEcefgEaa9hmbkkaQcefgQal9hmbxdkkaambcbhakaiavaoarawaaala8Ka8Pazasayasc1efa5a8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaYTmbabhecbhLina5aeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna8EaAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8FaOcdtfydbaASEhCkaeaQaCVaAVBdba5aOfRbbc3thacjjjj94hCcjjjj94hQdna8EaOcdtfydbaHSmbcjjjj94cba8FaHcdtfydbaOSEhQkaKaaaQVaOVBdba5aHfRbbc3thOdna8EaHcdtfydbaASmbcjjjj94cba8FaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaY6mbkkdnazTmbaYTmbaYheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPa9paU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd;C:L:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8KjjjjbaYk;Yieouabydlhvabydbclfcbaicdtz:xjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd;y:L:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:xjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd;C:L:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:xjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbcvSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbcvSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbcvSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbcvSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:vgoque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:xjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd;y:L:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkaqcuavcdtavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgYBdCaqciBd2aqamcbyd;y:L:cjbHjjjjbbgzBdKaqclBd2dnalTmbaPcuf:YhwdnaoTmbcbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxdkkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaqcuaYavazaialz:mjjjbgXc8S2gvaXc;D;O;f8U0Ecbyd;y:L:cjbHjjjjbbgiBd3aqcvBd2aicbavz:xjjjbhOdnadTmbcbhraehiinaxaiclfydbgocx2fgvIdbaxaiydbgPcx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaPcdtfydbgvazaocdtfydbgASavazaYcdtfydbgoSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOaoc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaXcdtgvaXcFFFFi0Egicbyd;y:L:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd;y:L:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:xjjjbhPdnalTmbazhHinJbbbbJbbjZaOaHydbgrc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaParcdtgvfgrydbcuSmbaiavfIdbaw9ETmekaraABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaXmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaXcufgXmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd;y:L:cjbHjjjjbbgHBdyaHcFeaiz:xjjjbhXdnadTmbavcufhrcbhkcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaPavcdtfydbhAdndnaPaOcdtfydbgvaPaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabakcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavakBdbakcefhkkaxcifgxad6mbkakci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd;C:L:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:0iewuabcFeaecdtz:xjjjbhbdnalmbcbskaecufhvdndnaiTmbcbhocbhrindndndnabaiarcdtgwfydbgDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbceheinaiaxcdtgxfydbaDSmdaqaefhxaecefheabaxavGgqcdtfgkydbgxcu9hmbkkakarBdbaoheaocefhoxekadaxfydbhekadawfaeBdbarcefgral9hmbxdkkcbhocbhDindnabaDcm4aD7c:v;t;h;Ev2gecs4ae7avGgqcdtfgkydbgxcuSmbaxaDSmbceheinabaqaefavGgqcdtfgkydbgxcuSmeaecefheaxaD9hmbkkdndnaxcu9hmbakaDBdbaoheaocefhoxekadaxcdtfydbhekadaDcdtfaeBdbaDcefgDal9hmbkkaok:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:xjjjb8AdnabaeSmbabaeadcdtz:wjjjb8AkarcualcdtalcFFFFi0EgDcbyd;y:L:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd;y:L:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd;y:L:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd;C:L:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk;lOoDud99oue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:xjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd;y:L:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd;y:L:cjbHjjjjbbgxBdzawcdBd2adcd4adfhecehiinaigmcethiamae6mbkcbhPawcuamcdtgsamcFFFFi0Ecbyd;y:L:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohixekcjjjj94hikamcufhAc:bwhCcbhXadhQcbhLinaiaCcufgeaiae9iEaPcefaiaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhKindndnaiIdbaONJbbbZMgY:lJbbb9p9DTmbaY:Oh8Axekcjjjj94h8Aka8AcCth8AdndnaiclfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaEcqta8AVh8AdndnaicwfIdbaONJbbbZMgY:lJbbb9p9DTmbaY:OhExekcjjjj94hEkaea8AaEVBdbaicxfhiaeclfheaKcufgKmbkazcFeasz:xjjjbh3cbh5cbh8Eindna3axa8Ecdtfydbg8Acm4a8A7c:v;t;h;Ev2gics4ai7aAGgKcdtfgEydbgecuSmbaea8ASmbcehiina3aKaifaAGgKcdtfgEydbgecuSmeaicefhiaea8A9hmbkkaEa8ABdba5aecuSfh5a8Ecefg8Ead9hmbxdkkazcFeasz:xjjjb8Acbh5kdnaQ:ZgYaH:taD:YgOaC:Y:tg8FNaX:Zgaa5:Zgh:tNaaaH:taOaP:Y:tggNahaY:tNMg8JJbbbb9BmbaYaa:taga8FahaH:tNNNa8J:vaOMhOkaPaDa5ar0geEhPaXa5aeEhXdna5arSmbaDaCaeEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohixdkcjjjj94hixekaPaCfcd9Thika5aQaeEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekawakcbyd;y:L:cjbHjjjjbbg8ABdKawclBd2aPcuf:YhYdnadTmbaqhiaxheadhKindndnaiIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcCthEdndnaiclfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3ka3cqtaEVhEdndnaicwfIdbaYNJbbbZMgO:lJbbb9p9DTmbaO:Oh3xekcjjjj94h3kaeaEa3VBdbaicxfhiaeclfheaKcufgKmbkkawcuazama8Aaxadz:mjjjbgDc32giaDc;j:KM;jb0Ecbyd;y:L:cjbHjjjjbbgeBd3awcvBd2aecbaiz:xjjjbh3avcd4hxdnadTmbdnalTmbaxcdth8Ea8AhEaqhealhKadhAina3aEydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaKIdbaiIdxMUdxaiaKclfIdbaiIdzMUdzaiaKcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaEclfhEaecxfheaKa8EfhKaAcufgAmbxdkka8AhKaqheadhEina3aKydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKaKclfhKaecxfheaEcufgEmbkkdnaDTmba3hiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgKaOaKIdbNUdbaicwfgKaOaKIdbNUdbaicxfgKaOaKIdbNUdbaiczfgKaOaKIdbNUdbaicCfgKaOaKIdbNUdbaic3fhiaecufgembkkcbhEawcuaDcdtgCaDcFFFFi0Egicbyd;y:L:cjbHjjjjbbgeBdaawcoBd2awaicbyd;y:L:cjbHjjjjbbg8EBd8KaecFeaCz:xjjjbh5dnadTmbaoJbbjZJbbjZaY:vaPceSENgOaONhYaxcdthxalheinaYaecN:H:cjbalEgKIdwa3a8AydbgAc32fgiIdC:tgOaONaKIdbaiIdx:tgOaONaKIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna5aAcdtgifgKydbcuSmba8EaifIdbaO9ETmekaKaEBdba8EaifaOUdbka8Aclfh8AaqcxfhqaeaxfheadaEcefgE9hmbkkaba5aCz:wjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd;C:L:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk:H8Modui99lud99Aus998Jjjjjbcji9RgD8KjjjjbcbhqaDcxfcbc;Kbz:xjjjb8AaDcbBdwaD9cb83ibaDcbyd;i:L:cjbBd1eaDcb8Pd;a:L:cjb83ijeaDcbyd;u:L:cjbBd94aDcb8Pd;m:L:cjb83i9WdndnavmbJbbjFhkJbbjFhxJbbjFhmxekaocd4cdthPalhsincbhzinaDcjefazfgHasazfIdbgkaHIdbgxaxak9EEUdbaDc;WbfazfgHakaHIdbgxaxak9DEUdbazclfgzcx9hmbkasaPfhsaqcefgqav9hmbkaDId94aDId1e:thmaDIdtaDId:ee:thxaDId9WaDIdje:thkkJbbbbhOdnar:YgAJq;x8J88MaA:vJbbbbakakJbbbb9DEgkaxaxak9DEgkamamak9DENgxJbbbb9Bmbarc9:f:Yax:vhOkaDcCfhCaDcxfcxfhXcbhzinaDazfaDcjefazfIdbgkaxaDc;WbfazfIdbak:t:tJbbb:;NMUdbazclfgzcx9hmbkcbhQaDarar2gLar2gzcbyd;y:L:cjbHjjjjbbgHBdxaDceBd2aHcbazz:xjjjbgKcbcbadaialaoaraOaDawz:rjjjbcdhYaDcuaLcdtaLcFFFFi0Eg8Acbyd;y:L:cjbHjjjjbbgEBdzaDcdBd2aDcjefcbarz:xjjjb8Acbh3dnaLTmbdnarcb9kmbaKhzaEhHaLhsincbh3aHcbcuazaDcjefarz:AjjjbEBdbazarfhzaHclfhHascufgsmbxdkkaKhPcbh3cbhvindndnaKavar2faDcjefarz:AjjjbTmbcbhHaPhzarhsinazaHazRbbgqfgHcbaqE86bbazcefhzascufgsmbkaEavcdtfa3BdbaHa3fh3xekaEavcdtfcuBdbkaParfhPavcefgvaL9hmbkkdnabTmbaDcua3cotgza3cFFF8F0Ecbyd;y:L:cjbHjjjjbbgQBdCcihYaDciBd2aQcbazz:xjjjb8AaXhCkdnawceGmbaCa8Acbyd;y:L:cjbHjjjjbbg5BdbaDaYcefgzBd2aDcxfazcdtfaLcbyd;y:L:cjbHjjjjbbgzBdbaDaYcdfgYBd2azcbaLz:xjjjbh8EarcufhXdnarci9imbarc9:fhCararcef2aKfcefh8Aceh8Fina8Far2hPa8AhvcehqindnaEaqaPfcdtfydbcuSmbavhzaChHinazazRbbgscuasE86bbazcefhzaHcufgHmbkkavarfhvaqcefgqaX9hmbka8AaLfh8Aa8Fcefg8FaX9hmbkkarce9imbcbh8Acbhqcbhvina8EaqfhscbhzindnasazfgHRbbmbaHce86bba5a8AcdtfaqazfBdba8Acefh8Akarazcefgz9hmbkaqarfhqavcefgvar9hmbka8ATmbaKcefhaaKc9:fhharc9:fhgarci9ih8Jina8Ea5a8Acufg8Acdtfydbgvfcb86bbavar2hPdna8JmbaEavcdtfydbcuSmbaKaPfhHaghqindnaHcefgzRbbgscFe9hmbaHRbbmbcbhskazas86bbazhHaqcufgqmbkaharavcef2fhzaXhsindnazRbbgHcFe9hmbazcefRbbmbcbhHkazaH86bbazcufhzascufgsce9kmbkkaaaPfh8Kavavar9Ug8Lar29Rh8FcbhCindnaCceScuaCEa8Ffgzce9imbazaX9ombcuaCciSaCcdSEa8LfgHce9imbaHaX9ombaEaHar2azfg8McdtfydbcuSmba8Jmbaaa8Mar2fhzcbhqa8KhsaghvinazazRbbgHcbaHaHcFeSEasRbbEgP86bbascefhsazcefhzaPaH7aqVhqavcufgvmbkaqcFeGTmba8Ea8MfgzRbbmbazce86bba5a8Acdtfa8MBdba8Acefh8AkaCcefgCcl9hmbka8AmbkkdnaQTmbaKaEaQadaialaoaraOaDawz:rjjjba3TmbJbbjZaO:vhkawcjjjjlGhPdnawcdGTmbJbbnnaOaON:vh8NakJbbbZNhyaQhzinazczfgsIdbg8PazcCfIdbgx:vhmazcxfgqIdbgIax:vhAazcwfgvIdbg8Rax:vh8SakazydbgHcFrG:ZNhRakaHcq4cFrG:ZNh8UakaHcC4cFrG:ZNh8VdnaxJ:p;c;188Ng8WazcKfIdbMg8X:laxJ:983:g81Ngx9ETmba8Wazc3fIdbMazc8KfIdbg8Ya8Ya8X:vg8YN:tg8Z:lax9ETmba8WazcafIdbMazcyfIdbg8Wa8Wa8X:vg80N:tazc8SfIdba8Wa8YN:tg8Wa8Wa8Z:vg8WN:tg81:lax9ETmba8PJ:p;c;188NazcUfIdb:ta80a8RJ:p;c;188Nazc8WfIdb:tg8PN:ta8WaIJ:p;c;188Nazc80fIdb:ta8Ya8PN:tgIN:ta81:vgxam:tg8Ra8RNa8Pa8X:va8YaIa8Z:va8WaxN:tg8XN:ta80axN:tg8Wa8S:tg8Ya8YNa8XaA:tg8Ya8YNMMa8N9DTmbaxaRaxaR9EEgxakaRMgmaxam9DEhma8Xa8Ua8Xa8U9EEgxaka8UMgAaxaA9DEhAa8Wa8Va8Wa8V9EEgxaka8VMg8Saxa8S9DEh8SkdnaPTmbayaRMhmaya8UMhAaya8VMh8SkasamUdbaqaAUdbava8SUdbazc;abfhza3cufg3mbxdkkdnaPTmbakJbbbZNhxaQhzinazczfaxakazydbgHcFrG:ZNMUdbazcxfaxakaHcq4cFrG:ZNMUdbazcwfaxakaHcC4cFrG:ZNMUdbazc;abfhza3cufg3mbxdkkaQcCfhzinazc98fgHaHIdbazIdbgk:vUdbazc94fgHaHIdbak:vUdbazctfgHaHIdbak:vUdbazc;abfhza3cufg3mbkkcbhsdndnarcd9imbarcufh3aEarcdtfhadnabmbaKcefg8Mararcefgz2fh8JaKazfhba8MaLfh8Ecbhscbh8Kina8Kar2h8La8Mheabh8Aa8Eh8Fa8Jh5cbhXindnaEaXa8LfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbclcbaKaqar2fgzarfRbbEazRbbcb9hVczcbazaLfgzRbbEVc;abcbazarfRbbEVhPaehza8AhHa8Fhqa5hva3hQindnaPclcbaHRbbEazRbbcb9hVczcbaqRbbEVc;abcbavRbbEVgPcetVgCTmbaCcFeSmbasaCRb;W;p:cjbfhskazcefhzaHcefhHaqcefhqavcefhvaQcufgQmbkkaearfhea8Aarfh8Aa8Farfh8Fa5arfh5aXcefgXa39hmbka8MaLfh8MabaLfhba8EaLfh8Ea8JaLfh8Ja8Kcefg8Ka39hmbxdkkJbbjZaO:vgkakJk;x8J88NNh8RawcdGh8EaDIdwhkaDIdlhxaDIdbhmcbhscbhPinaPar2h8KcbhvindnaEava8KfgqcdtgzfgHclfydbaHydbGaaazfgzydbGazclfydbGcuSmbcbh8AclcbaKaqar2fgYarfRbbEaYRbbcb9hVczcbaYaLfg8JRbbEVc;abcba8JarfRbbEVh8Lindna8LclcbaYa8Ag8Mcefg8AfgzarfRbbEazRbbcb9hVczcba8Ja8AfgzRbbEVc;abcbazarfRbbEVg8LcetVgCTmbaCcFeSmbcbhqdndndnaCRb;W;n:cjbcufPdebdka8ETmeaCcC2gz8Ve;W:L:cjbcltaz8Ve;Y:L:cjbcsGVh8FaKa8Mfh5cxhzaDcjefhHinaHaQaEa8Faz4gqce4ceGavfaqcd4ceGaPfar2fgXcdtfydbcotfa5aqceGfaXar2fRbbcotfcnfBdbaHclfhHazc98fgzc989hmbkaDydjegzIdyaDyd:megHIdyMaDyd:eegqIdyaDyd1egXIdyMMg8XaqIdwaXIdwMJbbbZNgANazIdUaHIdUMaqIdUaXIdUMMg8WMg8Sa8SMazIdaaHIdaMaqIdaaXIdaMMg8YaqIdzaXIdzMJbbbZNg8SNMa8SNazId8SaHId8SMaqId8SaXId8SMMgRa8SNazId80aHId80MaqId80aXId80MMg8UMg8Sa8SMazId3aHId3MaqId3aXId3MMg8VaqIdxaXIdxMJbbbZNg8SNMa8SNazId8KaHId8KMaqId8KaXId8KMMg8Za8SNazId8WaHId8WMaqId8WaXId8WMMg80Mg8Sa8SMazIdKaHIdKMaqIdKaXIdKMMgyaANMaANazId88aHId88MaqId88aXId88MMg8PMMM:lgIa8RazIdCaHIdCMaqIdCaXIdCMMN9Ea8XazIdwaHIdwMJbbbZNgANa8WMg8Sa8SMa8YazIdzaHIdzMJbbbZNg8SNMa8SNaRa8SNa8UMg8Sa8SMa8VazIdxaHIdxMJbbbZNg8SNMa8SNa8Za8SNa80Mg8Sa8SMayaANMaANa8PMMM:laIJ;d;1UZN9DGhqxekaKa8Mfh8FcbhzcrhHindnaCaz4ceGTmba8FazceGfazce4ceGavfazcd4aPfar2fgqar2fRbbgXcFeSmbaQaEaqcdtfydbcotfaXcotfc9efRbbaH4ceGTmbcbhqxdkaHcufhHcehqazcefgzcw9hmbkkaCcC2aqcq2fgH8Ve;W:L:cjbgzTmbaHc;Y:L:cjbfhqaKa8MfhCabasc8K2fhHindnasae9pmbaHaQaEazcD4ceGavfazcq4ceGaPfar2fgXcdtfydbcotfaCazcw4ceGfaXar2fRbbcotfgXc9ifIdbamMUdbaHclfaXc9mfIdbaxMUdbaHcwfaXc9qfIdbakMUdbaHcxfamaQaEazcv4ceGavfazco4ceGaPfar2fgXcdtfydbcotfaCazcl4ceGfaXar2fRbbcotfgXc9ifIdbMUdbaHczfaxaXc9mfIdbMUdbaHcCfakaXc9qfIdbMUdbaHcKfamaQaEazce4ceGavfazcd4ceGaPfar2fgXcdtfydbcotfaCazceGfaXar2fRbbcotfgzc9ifIdbMUdbaHc3faxazc9mfIdbMUdbaHcafakazc9qfIdbMUdbkaHc8KfhHascefhsaq8Vebhzaqcdfhqazmbkka8Aa39hmbkkavcefgva39hmbkaPcefgPa39hmbkaDyd2gYTmekaYcdtaDcxffc98fhzinazydbcbyd;C:L:cjbH:bjjjbbazc98fhzaYcufgYmbkkaDcjif8Kjjjjbask;Kxmiue99due99euz99eui99eud99dud99oudnalTmbaocd4hkaqcdGhxarc99fhqarcethmawawMhPcbhsindndnawavaiascdtfgoclfydbak2cdtfgzIdwgHavaoydbak2cdtfgOIdwgA:tgCaCNazIdbgXaOIdbgQ:tgLaLNazIdlgKaOIdlgY:tg8Aa8ANMMgEavaocwfydbak2cdtfgoIdwg3aA:tg5a5NaoIdbg8EaQ:tg8Fa8FNaoIdlgaaY:tghahNMMggaEag9EEgEa3aH:tgHaHNa8EaX:tgHaHNaaaK:tgHaHNMMgHaEaH9EE:rNgHaHMgH:lJbbb9p9DTmbaH:Ohoxekcjjjj94hokdnaLahNa8Aa8FN:tgHaHNa8Aa5NaCahN:tgXaXNaCa8FNaLa5N:tgKaKNMMg3Jbbbb9BmbJbbjZhEdnaoceaoce9kEgoamaoam9iEg8Jcd9imbJbbjZa8J:Z:vhEkarcb9imbaAaDIdw:th8KaYaDIdl:th8LaQaDIdb:th8Ma8Jcba8Jcb9kEh8NdnadTmbaHJbbjZa3:rgA:vgQNg3aAa8Jcefa8Jcdf2:Y:vgANh8EaKaQNgKaANhyaXaQNgXaXaANNh8PcbhIina8Jcba8Jcb9kEcefh8RaEaI:ZNgQaCNa8KMhgaQa8ANa8LMh8SaQaLNa8MMhRcbhzindndnaPaEaz:ZNgQahNa8SMgYNgH:lJbbb9p9DTmbaH:OhOxekcjjjj94hOkaOce91goaqaoaq6Eh8UdndnaPaQa5NagMgHNga:lJbbb9p9DTmbaa:Oh8Vxekcjjjj94h8Vka8Ua8Vce91goaqaoaq6Eg8Wcefar2fcefgoar2h8XdndnaPaQa8FNaRMgQNga:lJbbb9p9DTmbaa:Oh8Yxekcjjjj94h8Ykadaeaocdtfydbcotfaba8Yce91goaqaoaq6Eg8Zfa8XfcefRbbcotfgocnfa8Ucqta8ZcCtVa8WVBdbaoc9efg8Ua8URbbcea8YceGaOcetcdGVa8VcdtclGVtV86bbaoc9ifgOaQaANaOIdbMUdbaoc9mfgOaYaANaOIdbMUdbaoc9qfgOaHaANaOIdbMUdbaoc9ufgOaAaOIdbMUdbdnaxTmbaoc9yfgOa8PaOIdbMUdbaoc9CfgOaKayNaOIdbMUdbaoc9GfgOa3a8ENaOIdbMUdbaoc9KfgOaXayNaOIdbMUdbaoc9OfgOaXa8ENaOIdbMUdbaoc2fgOaKa8ENaOIdbMUdbaoc9WfgOaXaAa3aHNaXaQNaKaYNMMgY:mNgQNaOIdbMUdbaoctfgOaKaQNaOIdbMUdbaoc94fgOa3aQNaOIdbMUdbaoc98fgoaoIdbaYaQN:tUdbka8Razcefgz9hmbka8Jcufh8JaIa8NShoaIcefhIaoTmbxdkkcbh8Vina8Jcba8Jcb9kEcefh8UaEa8V:ZNgAaCNa8KMhYaAa8ANa8LMhHaAaLNa8MMhXcbhoindndnaPaEao:ZNgAahNaHMNgQ:lJbbb9p9DTmbaQ:Ohzxekcjjjj94hzkazce91gzaqazaq6EhzdndnaPaAa5NaYMNgQ:lJbbb9p9DTmbaQ:OhOxekcjjjj94hOkazaOce91gOaqaOaq6Ecefar2fcefar2hzdndnaPaAa8FNaXMNgA:lJbbb9p9DTmbaA:OhOxekcjjjj94hOkabaOce91gOaqaOaq6Efazfcefce86bba8Uaocefgo9hmbka8Jcufh8Ja8Va8NShoa8Vcefh8VaoTmbkkascifgsal6mbkkk:Nvezu8Jjjjjbcjd9Rgb8Kjjjjbcbheabcbcjdz:xjjjbhdc:W:H:cjbhbinabRbbgicC2glabcqf8Veb87e;4:L:cjbalabcdfgv8Peb83e;W:L:cjbaiabcefRbb86b;W;n:cjbadaifce86bbalavabcxfceaetc:F:d;avGEgi8Peb83e;6:L:cjbalai8Vew87e:c:M:cjbabcQfhbaecefgecK9hmbkcbhoinc;Y:L:cjbhrcbhvindnadavfgwRbbce9hmbavcC2c;W:L:cjbfhDcbhbcehqavc;W;n:cjbfhkinabcitc:G:H:cjbfhlcbhbcbheinaeavab4ceGalabfRbbtVheabcefgbcw9hmbkdnadaecFeGgxfgmRbbmbaxcC2c;W:L:cjbfhPcbhbcehsindnaDabcq2gif8VebgbTmbaraifheaPaifhiinaialabcl4csGfRbbcltalabcw4csGfRbbcwtValabcsGfRbbV87ebaicdfhiae8VebhbaecdfheabmbkkcehbasceGhecbhsaembkamce86bbaxakRbb86b;W;n:cjbkcehbaqceGhlcbhqalmbkawcd86bbkarcCfhravcefgvcjd9hmbkaocefgoci9hmbkcbhic;W:L:cjbhvincuhlavhbinalcefhlab8Vebheabcdfhbaembkaial86b;W;p:cjbavcCfhvaicefgicjd9hmbkadcjdf8Kjjjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:xjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd;y:L:cjbHjjjjbbgvBdxavcFeaoz:xjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd;C:L:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd;G:L:cjbgeabcifc98GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;G:L:cjbgeabcrfc94GfgbBd;G:L:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;G:L:cjbge9Rcifc98GaefgbBd;G:L:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk;0vdbcj:Gdk;yvFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeeebebbeebbebbebbbeeebbbbebbbbbbbbbbbbbbbbbbbeeeeeeebebbbeeebbeebbbbbebbbbbebebbbbbbbbbbbbbbbdiorbelvlbodveribbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbibbbbbbbbbbbbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbbrbaebbbbbbbbbbbbbbbbbbsd8We8YbbbbbbbhiaebbbbbbQe8Ke9cebbbbbbbbbbbbbbbbLb8KebbbbbbbbbbbbbbbbbbKbbbbbbbbbbbbbbbbbbbbbYeJbilbbbbbbbbbbbbbbbbEe80e8WlbbbbbbzlAbbbbbbb5eJdnibbbbbbai8Kbbbbbbb8Ee9ce8Ylcibbbb8Yebbbbbbbb8FdOlAdbbbbbb80e8Ylbbbbbb88eTi8KiJv8Jlbbbbbbbbbbbb89e9td8Kv9qibbbbndlvaibbbbZd8Li8KvbbbbbbJdTibbbbbb9Pe81b9GvoiBvbbbbbbbbbbbb9Re9JbvoWibbbbvibbbbbbbb9VeWi9Gvbbbbbb8WvBbbbbbbb9:b9ceBvbbbbbbbbbbbbbbbbubWibbbbbbbbbbbbbbbbbb;Wd9hvSrbbbbbbWl9NvbbbbbbFbbbbbbbbbbbbbbbbbbbbbFFuuFFuuFFuuFFuFFFuFFFuFbc;y:Ldkxebbbdbbb;W:Obb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(i),{}).then(function(m){t=m.instance,t.exports.__wasm_call_ctors()});function n(m){for(var M=new Uint8Array(m.length),A=0;A<m.length;++A){var T=m.charCodeAt(A);M[A]=T>96?T-97:T>64?T-39:T+4}for(var R=0,A=0;A<m.length;++A)M[R++]=M[A]<60?e[M[A]]:(M[A]-60)*64+M[++A];return M.buffer.slice(0,R)}function r(m){if(!m)throw new Error("Assertion failed")}function s(m){return new Uint8Array(m.buffer,m.byteOffset,m.byteLength)}function o(m,M,A,T){var R=t.exports.sbrk,v=R(A*4),y=R(A*T*4),k=new Uint8Array(t.exports.memory.buffer);k.set(s(M),y),m(v,y,A,T*4),k=new Uint8Array(t.exports.memory.buffer);var O=new Uint32Array(A);return new Uint8Array(O.buffer).set(k.subarray(v,v+A*4)),R(v-R(0)),O}function c(m,M,A){var T=t.exports.sbrk,R=T(M.length*4),v=T(A*4),y=new Uint8Array(t.exports.memory.buffer),k=s(M);y.set(k,R);var O=m(v,R,M.length,A);y=new Uint8Array(t.exports.memory.buffer);var C=new Uint32Array(A);new Uint8Array(C.buffer).set(y.subarray(v,v+A*4)),T(R-T(0));for(var U=0;U<M.length;++U)M[U]=C[M[U]];return[C,O]}function h(m){for(var M=0,A=0;A<m.length;++A){var T=m[A];M=M<T?T:M}return M}function l(m,M,A,T,R,v,y,k,O){var C=t.exports.sbrk,U=C(4),X=C(A*4),B=C(R*v),V=C(A*4),z=new Uint8Array(t.exports.memory.buffer);z.set(s(T),B),z.set(s(M),V);var Z=m(X,V,A,B,R,v,y,k,O,U);z=new Uint8Array(t.exports.memory.buffer);var ae=new Uint32Array(Z);s(ae).set(z.subarray(X,X+Z*4));var de=new Float32Array(1);return s(de).set(z.subarray(U,U+4)),C(U-C(0)),[ae,de[0]]}function d(m,M,A,T,R,v,y,k,O,C,U,X,B){var V=t.exports.sbrk,z=V(4),Z=V(A*4),ae=V(R*v),de=V(R*k),Ae=V(O.length*4),je=V(A*4),W=C?V(R):0,$=new Uint8Array(t.exports.memory.buffer);$.set(s(T),ae),$.set(s(y),de),$.set(s(O),Ae),$.set(s(M),je),C&&$.set(s(C),W);var fe=m(Z,je,A,ae,R,v,de,k,Ae,O.length,W,U,X,B,z);$=new Uint8Array(t.exports.memory.buffer);var re=new Uint32Array(fe);s(re).set($.subarray(Z,Z+fe*4));var Se=new Float32Array(1);return s(Se).set($.subarray(z,z+4)),V(z-V(0)),[re,Se[0]]}function u(m,M,A,T,R,v,y,k,O,C,U,X,B){var V=t.exports.sbrk,z=V(4),Z=V(R*v),ae=V(R*k),de=V(O.length*4),Ae=V(A*4),je=C?V(R):0,W=new Uint8Array(t.exports.memory.buffer);W.set(s(T),Z),W.set(s(y),ae),W.set(s(O),de),W.set(s(M),Ae),C&&W.set(s(C),je);var $=m(Ae,A,Z,R,v,ae,k,de,O.length,je,U,X,B,z);W=new Uint8Array(t.exports.memory.buffer),s(M).set(W.subarray(Ae,Ae+$*4)),s(T).set(W.subarray(Z,Z+R*v)),s(y).set(W.subarray(ae,ae+R*k));var fe=new Float32Array(1);return s(fe).set(W.subarray(z,z+4)),V(z-V(0)),[$,fe[0]]}function p(m,M,A,T){var R=t.exports.sbrk,v=R(A*T),y=new Uint8Array(t.exports.memory.buffer);y.set(s(M),v);var k=m(v,A,T);return R(v-R(0)),k}function x(m,M,A,T,R,v,y,k){var O=t.exports.sbrk,C=O(k*4),U=O(A*T),X=R?O(A*v):0,B=new Uint8Array(t.exports.memory.buffer);B.set(s(M),U),R&&B.set(s(R),X);var V=m(C,U,A,T,X,v,y,k);B=new Uint8Array(t.exports.memory.buffer);var z=new Uint32Array(V);return s(z).set(B.subarray(C,C+V*4)),O(C-O(0)),z}function g(m,M,A,T,R,v,y,k,O){var C=t.exports.sbrk,U=C(4),X=C(A*4),B=C(R*v),V=C(A*4),z=y?C(R):0,Z=new Uint8Array(t.exports.memory.buffer);Z.set(s(T),B),Z.set(s(M),V),y&&Z.set(s(y),z);var ae=m(X,V,A,B,R,v,z,k,O,U);Z=new Uint8Array(t.exports.memory.buffer);var de=new Uint32Array(ae);s(de).set(Z.subarray(X,X+ae*4));var Ae=new Float32Array(1);return s(Ae).set(Z.subarray(U,U+4)),C(U-C(0)),[de,Ae[0]]}function b(m,M,A,T,R,v,y){var k=t.exports.sbrk,O=k(A*4),C=k(R*v),U=k(A*4),X=new Uint8Array(t.exports.memory.buffer);X.set(s(T),C),X.set(s(M),U);var B=m(O,U,A,C,R,v,y);X=new Uint8Array(t.exports.memory.buffer);var V=new Uint32Array(B);return s(V).set(X.subarray(O,O+B*4)),k(O-k(0)),V}function f(m,M,A,T,R,v){var y=t.exports.sbrk,k=y(A.byteLength),O=y(M.byteLength),C=new Uint8Array(t.exports.memory.buffer);C.set(s(A),k),C.set(s(M),O);var U=A.byteLength/T,X=m(0,0,O,M.length,k,U,T,R,v),B=y(X*9*4),V=m(B,X,O,M.length,k,U,T,R,v);r(V<=X),C=new Uint8Array(t.exports.memory.buffer);var z=new Float32Array(V*9);return s(z).set(C.subarray(B,B+z.byteLength)),y(k-y(0)),z}var _={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,PreserveFolds:128,ErrorClamped:256,_InternalDebug:1<<30},w={Shell:1,Solve:2,Thicken:0,_InternalDebug:1<<30};return{ready:a,supported:!0,compactMesh:function(m){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0);var M=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),A=c(t.exports.meshopt_optimizeVertexFetchRemap,M,h(m)+1);if(m!==M)for(var T=0;T<M.length;++T)m[T]=M[T];return A},generatePositionRemap:function(m,M){return r(m instanceof Float32Array),r(m.length%M==0),r(M>=3),o(t.exports.meshopt_generatePositionRemap,m,m.length/M,M)},simplify:function(m,M,A,T,R,v){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T>=0&&T<=m.length),r(T%3==0),r(R>=0);for(var y=0,k=0;k<(v?v.length:0);++k)r(v[k]in _),y|=_[v[k]];var O=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),C=l(t.exports.meshopt_simplify,O,m.length,M,M.length/A,A*4,T,R,y);return C[0]=m instanceof Uint32Array?C[0]:new m.constructor(C[0]),C},simplifyWithAttributes:function(m,M,A,T,R,v,y,k,O,C){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T instanceof Float32Array),r(T.length==R*(M.length/A)),r(R>=0),r(y==null||y instanceof Uint8Array),r(y==null||y.length==M.length/A),r(k>=0&&k<=m.length),r(k%3==0),r(O>=0),r(Array.isArray(v)),r(R>=v.length),r(v.length<=32);for(var U=0;U<v.length;++U)r(v[U]>=0);for(var X=0,U=0;U<(C?C.length:0);++U)r(C[U]in _),X|=_[C[U]];var B=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),V=d(t.exports.meshopt_simplifyWithAttributes,B,m.length,M,M.length/A,A*4,T,R*4,new Float32Array(v),y,k,O,X);return V[0]=m instanceof Uint32Array?V[0]:new m.constructor(V[0]),V},simplifyWithUpdate:function(m,M,A,T,R,v,y,k,O,C){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T instanceof Float32Array),r(T.length==R*(M.length/A)),r(R>=0),r(y==null||y instanceof Uint8Array),r(y==null||y.length==M.length/A),r(k>=0&&k<=m.length),r(k%3==0),r(O>=0),r(Array.isArray(v)),r(R>=v.length),r(v.length<=32);for(var U=0;U<v.length;++U)r(v[U]>=0);for(var X=0,U=0;U<(C?C.length:0);++U)r(C[U]in _),X|=_[C[U]];var B=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),V=u(t.exports.meshopt_simplifyWithUpdate,B,m.length,M,M.length/A,A*4,T,R*4,new Float32Array(v),y,k,O,X);if(m!==B)for(var U=0;U<V[0];++U)m[U]=B[U];return V},getScale:function(m,M){return r(m instanceof Float32Array),r(m.length%M==0),r(M>=3),p(t.exports.meshopt_simplifyScale,m,m.length/M,M*4)},simplifyPoints:function(m,M,A,T,R,v){return r(m instanceof Float32Array),r(m.length%M==0),r(M>=3),r(A>=0&&A<=m.length/M),T?(r(T instanceof Float32Array),r(T.length%R==0),r(R>=3),r(m.length/M==T.length/R),x(t.exports.meshopt_simplifyPoints,m,m.length/M,M*4,T,R*4,v||0,A)):x(t.exports.meshopt_simplifyPoints,m,m.length/M,M*4,void 0,0,0,A)},simplifySloppy:function(m,M,A,T,R,v){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T==null||T instanceof Uint8Array),r(T==null||T.length==M.length/A),r(R>=0&&R<=m.length),r(R%3==0),r(v>=0);var y=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),k=g(t.exports.meshopt_simplifySloppy,y,m.length,M,M.length/A,A*4,T,R,v);return k[0]=m instanceof Uint32Array?k[0]:new m.constructor(k[0]),k},simplifyPrune:function(m,M,A,T){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T>=0);var R=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m),v=b(t.exports.meshopt_simplifyPrune,R,m.length,M,M.length/A,A*4,T);return v=m instanceof Uint32Array?v:new m.constructor(v),v},remesh:function(m,M,A,T,R){r(m instanceof Uint32Array||m instanceof Int32Array||m instanceof Uint16Array||m instanceof Int16Array),r(m.length%3==0),r(M instanceof Float32Array),r(M.length%A==0),r(A>=3),r(T>=4&&T<=256);for(var v=0,y=0;y<(R?R.length:0);++y)r(R[y]in w),v|=w[R[y]];var k=m.BYTES_PER_ELEMENT==4?m:new Uint32Array(m);return f(t.exports.meshopt_remesh,k,M,A*4,T,v)}}})();var _0=(function(){var i="b9H79Tebbbe:neP9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gouuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9Gwuuuuuuuub9Gvuuuuub9GluuuubiQXdilvorwDqokoqxmbiibeilve9Weiiviebeoweuecj:Gdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bw39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bkE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bxL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2WtbPl79IV9RbsDwebcekdOAq;W:leXdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:88JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:rjjjb8AcuaocdtgsaocFFFFi0Ehzcbyd;0:G:cjbhHdndnalcb9imbaoal9nmbamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waihzalhsinaHazydbcdtfcbBdbazclfhzascufgsmbkaihzalhsinaHazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkaihzalhCcbhXindnaHazydbcdtgQfgsydbcb9imbaOaQfaXBdbasasydbgQcjjjj94VBdbaQaXfhXkazclfhzaCcufgCmbkalci9UhLdnalci6mbcbhzaihsinascwfydbhCasclfydbhXaOasydbcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaXcdtfgXaXydbgXcefBdbaAaXcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaihzalhsindnaHazydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaOaCfgCaCydbaQ9RBdbkazclfhzascufgsmbxdkkamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waHcbasz:rjjjbhXaihzalhsinaXazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkalci9UhLdnaoTmbcbhzaOhsaXhCaohQinasazBdbasclfhsaCydbazfhzaCclfhCaQcufgQmbkkdnalci6mbcbhzaihsinascwfydbhCasclfydbhQaOasydbcdtfgKaKydbgKcefBdbaAaKcdtfazBdbaOaQcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaoTmbcbhzaohsinaOazfgCaCydbaXazfydb9RBdbazclfhzascufgsmbkkamaLcbyd;0:G:cjbHjjjjbbgzBd:OwamclBd;8wazcbaLz:rjjjbhYamcuaLcK2alcjjjjd0Ecbyd;0:G:cjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihsa8AhzaLhrJbbbbh5inavasclfydbaK2cdtfgCIdlh8EavasydbaK2cdtfgXIdlhEavascwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgazaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbazclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyazcxfa8EaE:tg8Eagah:tggNaaah:tgaa8FaE:tghN:tgEJbbbbJbbjZa8Ja8K:tg8FahNa8Ea8La8K:tg8KN:tghahNaEaENaaa8KNa8FagN:tgEaENMMg8K:rg8E:va8KJbbbb9BEg8KNUdbazczfaEa8KNUdbazcCfaha8KNUdbazcwfa8Maya8NMMJbbnn:vUdba5a8EMh5ascxfhsazcKfhzarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;0:G:cjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhzaChsinasazBdbasclfhsaLazcefgz9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;0:G:cjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLcbz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhzaLhsJFFuuh8NJFFuuh8MinazcwfIdbgEa8Ma8MaE9EEh8MazclfIdbgEa8Na8NaE9EEh8NazIdbgEayayaE9EEhyazcKfhzascufgsmbkkah:rhEamaocetgzcuaocu9kEcbyd;0:G:cjbHjjjjbbgCBd:4wdndnaoal9nmbaihzalhsinaCazydbcetfcFFi87ebazclfhzascufgsmbxdkkaCcFeazz:rjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhsJFFuuhEa8AhzcuhIinazcwfIdba8M:tghahNazIdbay:tghahNazclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEasaIaXEhIazcKfhzaLascefgs9hmbkkamczfcbcjwz:rjjjb8Aam9cb83iwam9cb83ibaxa8JNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh5aRaENh8EaIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaHa81a3cdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhsindndnaCaiasydbgKcx2fgzclfydbgrcetf8Vebcs4aCazydbgXcetf8Vebcs4faCazcwfydbglcetf8Vebcs4fgombcbhzxekcehzaHaXcdtfydbgXceSmbcehzaHarcdtfydbgrceSmbcehzaHalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhzxekaocdfhzkdnazaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba8E:tghahNaXIdla5:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEazaQ6ahaE9DVgXEhEaKaLaXEhLazaQaXEhQkasclfhsavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama5Ud:KDama8EUd:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgHam8Piw83dwaHam8Pib83dbaPcefhPkc3hHinamc:CwfaHfydbcbyd;4:G:cjbH:bjjjbbaHc98fgHc989hmbxvkkcbh3a8Saq9pmbamydwaCaiaLcx2fgzydbcetf8Vebcs4aCazcwfydbcetf8Vebcs4faCazclfydbcetf8Vebcs4ffaw9nmekcbhzcbhsdna8ZTmbcbhsamczfhXinamczfascdtfaXydbgQBdbaXclfhXasaYaQfRbbTfhsa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDinamcjDfazfcFFF;7rBdbazclfgzcz9hmbkasc;8easclfc:bd6Eg8Zcdth80dnalTmbaeaXcdtfhocbhrindnaHaoarcdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhscuhQcuhzinaHaiasydbgKcx2fgXclfydbcdtfydbaHaXydbcdtfydbfaHaXcwfydbcdtfydbfgXazaXaz6gXEhzaKaQaXEhQasclfhsavcufgvmbkaQcuSmba8AaQcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEcbhsindndnazamc:qDfasfgvydbgX6mbazaX9hmeaEamcjDfasfIdb9FTmekavazBdbamc:GDfasfaQBdbamcjDfasfaEUdbxdkasclfgscz9hmbkkarcefgral9hmbkkamczfa80fhQcbhzcbhsindnamc:GDfazfydbgXcuSmbaQascdtfaXBdbascefhskazclfgzcz9hmbkasa8Zfg8ZTmbJFFuuhhcuhKamczfhza8ZhvcuhQina8AazydbgXcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEdndnaHaiaXcx2fgsclfydbcdtfydbaHasydbcdtfydbfaHascwfydbcdtfydbfgsaQ6mbasaQ9hmeaEah9DTmekaEhhashQaXhKkazclfhzavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaAaOaraXcdtfydbcdtgsfydbcdtfgKhzaHasfgvydbgQhsdnaQTmbdninazydbaLSmeazclfhzascufgsTmdxbkkazaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgzIdbhEazIdlhhazIdwh8KazIdxh5azIdzh8EazIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa8EMh8Xa8Wa5Mh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPkjoivuv99lu8Jjjjjbca9Rgo8Kjjjjbdndnalcw0mbaiydbhraeabcitfgwalcdtciVBdlawarBdbdnalcd6mbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkkalabfhwxekcbhqaocbBdKao9cb83izaocbBdwao9cb83ibJbbjZhkJbbjZhxinadaiaqcdtfydbcK2fhDcbhwinaoczfawfgraDawfIdbgmarIdbgP:tgsaxNaPMgPUdbaoawfgrasamaP:tNarIdbMUdbawclfgwcx9hmbkJbbjZakJbbjZMgk:vhxaqcefgqal9hmbkcbhradcbcecdaoIdlgmaoIdwgP9GEgwaoIdbgsaP9GEawasam9GEgzcdtgwfhHaoczfawfIdbhmaihwalhDinaiarcdtfgqydbhOaqawydbgABdbawaOBdbawclfhwaraHaAcK2fIdbam9DfhraDcufgDmbkdndnarcv6mbavc8X9kmbaralc98f6mekaiydbhraeabcitfgwalcdtciVBdlawarBdbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkalabfhwxekaeabcitfgwamUdbawawydlc98GazVBdlabcefaeadaiaravcefgqz:djjjbhDawawydlciGaDabcu7fcdtVBdlaDaeadaiarcdtfalar9Raqz:djjjbhwkaocaf8Kjjjjbawk;Oddvue99dninabaecitfgrydlgwcd4gDTmednawciGgqci9hmbcihqdnawcl6mbabaecitfhbcbheawhqcehkindnaiabydbgDfRbbmbcbhkadaDcK2fgwIdwalIdw:tgxaxNawIdbalIdb:tgxaxNawIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhqkabcwfhbaecefgeaqcd46mbkakceGTmikaraqciGBdlskdnabcbaDalaqcdtfIdbarIdb:tgxJbbbb9FEgwaD7aecefgDfgecitfydlabawaDfgDcitfydlVci0mbaraqBdlkabaDadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudndnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0mbakmbcbhDabydxaq6mekavawcltfgxab8Pdw83dwaxab8Pdb83dbabydbhDdnabydwgwTmbaoaDcdtfhxawhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaDawfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8VebhscehDcbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:mPrHue99eue99eue99iu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:rjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;0:G:cjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;0:G:cjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydwaC2cdtfhKavarydlaC2cdtfhYavarydbaC2cdtfh8AcbhraLhEinaQarfgma8Aarfg3Idbg5aYarfg8EIdbg8Fa5a8F9DEg5UdbamaKarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbar9cb83dzar9cb83dwaxcuascx2gralc:bjjjl0Ecbyd;0:G:cjbHjjjjbbgHBdN9GaxciBd;S9GascdthgazarfhvaxcwVhPaxclVhCaHh8Jazh8KcbhLinaxcbcj;Gbz:rjjjbhEaLas2cdthadnaAmba8Khrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaHaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbka8JhrashminaCa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydbg8EcefBdbava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaPa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbkka8Jagfh8Ja8Kagfh8KaLcefgLci9hmbkaEaocetgrcuaocu9kEcbyd;0:G:cjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:rjjjb8Akcbh8EaEascbyd;0:G:cjbHjjjjbbg8ABd:C9GaOaHaHascdtfaHascitfa8AascbazaKaiawaDaqakz:hjjjbdndnalci6mba8Ahrashmina8EarRbbfh8EarcefhramcufgmmbkaE9cb83iwaE9cb83ibalawc9:fgrfcufar9UgrasaDfcufaD9Ugmaram0EhYcbhmcbhra8Ehaincbh3dnarTmba8AarfRbbceSh3kamaEaiaHydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaHclfhHaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmeabamcltfgraE8Piw83dwaraE8Pib83dbamcefhmxekaE9cb83iwaE9cb83ibcbhmkczhrinaEc:m;Gbfarfydbcbyd;4:G:cjbH:bjjjbbarc98fgrc989hmbkkaxc;W;Gbf8Kjjjjbamk:wKDQue99iue99iul9:euw99iu8Jjjjjbc;qb9RgP8Kjjjjbaxhsaxhzdndnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:rjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9Ug8Aaka8Aak6EaHEgK9RhEaxaK9Rh3aKcufh5aKceth8EaKcdtgCc98fh8FavcitgOaC9Rarfc98fhaascufhhavcufhgaraOfh8JJbbjZas:Y:vh8KcbazceakaxSEg8Lcdtg8M9Rh8NJFFuuhycuh8PcbhIcbh8RinaPclfa8RcdtfydbhQaPcb8Pd:y:G:cjbg8S83i9iaPcb8Pd:q:G:cjbgR83inaPcb8Pd1:G:cjbg8U83iUaPcb8Pdj:G:cjbg8V83i8WaPa8S83iyaPaR83iaaPa8U83iKaPa8V83izaQavcdtgYfh8WcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaba8WaXcu7cdtfydbcK2fhAcbhzaPIdUh8ZaPId9ih80aPId80h81aPId9ehBaPId8Wh83aPIdnhUinaPczfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaraLfgza80a8Z:tg8XaUa83:tg8YNa8YaBa81:tg8ZNa8Za8XNMMUdbazaYfaPIdyaPIdK:tg8XaPIdaaPIdz:tg8YNa8YaPId8KaPIdC:tg8ZNa8Za8XNMMUdbaXcefgXav9hmbkcbh85dnaHmbcbhAaQhza8JhCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8WawaOclfydbcetfg858Vebh86awaOydbcetfgO8Vebh87aLce87eba85ce87ebaOce87ebaCaAa86cs4a87cs4fa8Wcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbka8Jh85kdndndndndndndndndndndnava8E6mba8Eax9nmeavavaK9UgzaK29Raza320mda5aE9pmqa85Th87ceh8WaEhQxwka5ag9pmDa8Eax9nmixokavaK6mea5aE9pmwcehQaEhXa85Tmixlka5ag6mlxrka5ag9pmokcbhQaghXa85mekJFFuuh8XcbhLa5hzindnazcefgCaK6mbaQavaC9RgOaK6GmbarazcdtfIdbg8YaC:YNaravaz9RcdtfaYfc94fIdbg8ZaO:YNMg80a8X9Embdndna8KaOahf:YNg81:lJbbb9p9DTmba81:OhAxekcjjjj94hAka8ZasaA2aO9R:YNh8Zdndna8Kazasf:YNg81:lJbbb9p9DTmba81:OhOxekcjjjj94hOkamasaO2aC9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgOEh8XaCaLaOEhLkaza8LfgzaX6mbxlkkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazaK6mbaQaCaK6GmbaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9Embdndna8Ka85aOfydbgYahf:YNg81:lJbbb9p9DTmba81:Oh8Wxekcjjjj94h8Wkamasa8W2aY9R:Yg81a8YNa8Za81NMNa80Mg8Ya8Xa8Ya8X9DgYEh8XazaLaYEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaX6mbxikka85Th87cbh8WaghQkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazazaK9UgXaK29RaXa320mbdna8WTmbaCaCaK9UgXaK29RaXa320mekaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9EmbazhXaChYdna87mba85aOfydbgXhYkdndna8KaYahf:YNg81:lJbbb9p9DTmba81:Oh86xekcjjjj94h86ka8Zasa862aY9R:YNh8Zdndna8KaXahf:YNg81:lJbbb9p9DTmba81:OhYxekcjjjj94hYkamasaY2aX9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgXEh8XazaLaXEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaQ6mbkkaLTmba8Xay9DTmba8XhyaLhIa8Rh8Pka8Rcefg8Rci9hmbkdndnaoc8X9kmba8Pcb9omeka8Acufh85cbhYindndndnavaY9RaxaYaxfav0Eg8WTmbcbhAaeaYcdtfgzhCa8WhXinawaDaCydbcx2fgOcwfydbcetfgQ8VebhbawaOclfydbcetfgL8VebhrawaOydbcetfgO8VebhKaQce87ebaLce87ebaOce87ebaAarcs4aKcs4fabcs4ffhAaCclfhCaXcufgXmbka8WhOinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaOcufgOmbkaAaq0mekalaYfgzce86bbazcefcba8Wcufz:rjjjb8AxekalaYfgzce86bbazcefcba85z:rjjjb8Aa8Ah8Wka8WaYfgYav9pmdxbkkaravcdtg8WfhLdnaITmbaPclfa8PcdtfydbhzaIhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnavaI9nmbaPclfa8PcdtfydbaIcdtfhzavaI9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYa8PSmbcbhzaraPclfaYcdtfydbgKa8Wz:qjjjbhCavhXaIhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaialaIaocefgCarawaDaqakaxamz:hjjjbabaeaIcdtgzfadazfaiazfalaIfavaI9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk:Seeru8Jjjjjbc:q;ab9Rgo8Kjjjjbaoc:q8WfcFecjzz:rjjjb8AcbhrdnadTmbaehwadhDinaoarcdtfawydbgqBdbaoc:q8WfaqcFiGcdtfgkydbhxakaqBdbawclfhwaraxaq9hfhraDcufgDmbkkabaeadaoaraiavz:jjjjbaoc:q;abf8Kjjjjbk;Sqloud99euD998Jjjjjbc:W;ab9Rgr8KjjjjbdndnadTmbaocd4hwcbhDcbhqindnavaeclfydbaw2cdtfgkIdbavaeydbaw2cdtfgxIdbgm:tgPavaecwfydbaw2cdtfgsIdlaxIdlgz:tgHNakIdlaz:tgOasIdbam:tgAN:tgCaCNaOasIdwaxIdwgX:tgQNakIdwaX:tgOaHN:tgHaHNaOaANaPaQN:tgPaPNMMgOJbbbb9Bmbarc8WfaDcltfgkaCaO:rgO:vgCUdwakaPaO:vgPUdlakaHaO:vgHUdbakaCaXNaHamNazaPNMM:mUdxaDcefhDkaecxfheaqcifgqad6mbkab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbaDTmearcbBd8Sar9cb83iKar9cb83izarczfavalaoarc8Sfcbcraiz:kjjjbarIdKhQarIdChLarIdzhKar9cb83iwar9cb83ibararc8WfaDczarc8Sfcbcicbz:kjjjbJbbbbhmdnarIdwgzazNarIdbgHaHNarIdlgXaXNMMgCJbbbb9BmbJbbjZaC:r:vhmkazamNhCaXamNhXaHamNhHJbbjZhmarc8WfheaDhvinaecwfIdbaCNaeIdbaHNaXaeclfIdbNMMgzamazam9DEhmaeczfheavcufgvmbkabaQUdwabaLUdlabaKUdbabarId3UdxdndnamJ;n;m;m899FmbJbbbbhzarc8WfheinaecxfIdbaQaecwfIdbgPNaKaeIdbgONaLaeclfIdbgANMMMaCaPNaHaONaXaANMM:vgPazaPaz9EEhzaeczfheaDcufgDmbkabaCUd8KabaXUdaabaHUd3abaQaCazN:tUdKabaLaXazN:tUdCabaKaHazN:tUdzabJbbjZamamN:t:rgmUdydndnaCJbbj:;aCJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aCJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohexekcjjjj94hekabae86b8UdndnaXJbbj:;aXJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aXJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohvxekcjjjj94hvkabav86bRdndnaHJbbj:;aHJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aHJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohwxekcjjjj94hwkabaw86b8SdndnaecKtcK91:YJbb;:9c:vaC:t:lavcKtcK91:YJbb;:9c:vaX:t:lawcKtcK91:YJbb;:9c:vaH:t:lamMMMJbb;:9cNJbbjZMgm:lJbbb9p9DTmbam:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbkarc:W;abf8Kjjjjbk;7woDuo99eue99euv998Jjjjjbcje9Rgw8Kjjjjbawc;abfcbaocdtgDz:rjjjb8Aawc;GbfcbaDz:rjjjb8AawcafhDawhqaohkinaqcFFF97BdbaDcFFF;7rBdbaqclfhqaDclfhDakcufgkmbkavcd4hxaicd4hmdnadTmbaocx2hPcbhsinashzdnarTmbarascdtfydbhzkaeazam2cdtfgDIdwhHaDIdlhOaDIdbhAalazax2cdtfIdbhCcbhDawcafhqawc;Gbfhvawhkawc;abfhiinaCaDc:O:G:cjbfIdbaHNaDc:G:G:cjbfIdbaANaDc:K:G:cjbfIdbaONMMgXMhQazhLdnaXaC:tgXaqIdbgK9DgYmbavydbhLkavaLBdbazhLdnaQakIdbg8A9EmbaiydbhLa8AhQkaiaLBdbakaQUdbaqaXaKaYEUdbaiclfhiakclfhkavclfhvaqclfhqaPaDcxfgD9hmbkascefgsad9hmbkkJbbbbhQcbhLawc;GbfhDawc;abfhqcbhkinalaqydbgvax2cdtfIdbalaDydbgiax2cdtfIdbaeavam2cdtfgvIdwaeaiam2cdtfgiIdw:tgCaCNavIdbaiIdb:tgCaCNavIdlaiIdl:tgCaCNMM:rMMgCaQaCaQ9EgvEhQakaLavEhLaqclfhqaDclfhDaoakcefgk9hmbkJbbbbhCdnaeawc;abfaLcdtgqfydbgkam2cdtfgDIdwaeawc;Gbfaqfydbgvam2cdtfgqIdwgH:tgXaXNaDIdbaqIdbgA:tg8Aa8ANaDIdlaqIdlgE:tgOaONMMgKJbbbb9ETmbaK:rgCalakax2cdtfIdbMalavax2cdtfIdb:taCaCM:vhCkaQJbbbZNhKaXaCNaHMhHaOaCNaEMhOa8AaCNaAMhAdnadTmbcbhqarhkinaqhDdnarTmbakydbhDkdnalaDax2cdtfIdbg3aeaDam2cdtfgDIdwaH:tgQaQNaDIdbaA:tgCaCNaDIdlaO:tgXaXNMMg5:rgEMg8EaK9ETmbJbbbbh8Adna5Jbbbb9ETmba8EaK:taEaEM:vh8Aka8AaQNaHMhHa8AaXNaOMhOa8AaCNaAMhAa3aKaEMMJbbbZNhKkakclfhkadaqcefgq9hmbkkabaKUdxabaHUdwabaOUdlabaAUdbawcjef8Kjjjjbk:reevu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwcbhDdnaiTmbarhiawhqinaiaeadRbbgkcdtfydbBdbaDakcefgkaDak0EhDaiclfhiadcefhdaqcufgqmbkkabarawaeaDalaoz:jjjjbarcj8Wf8Kjjjjbk:Eeeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrcbz:kjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk::meQu8Jjjjjbcjz9Rgv8KjjjjbcbhoavcjPfcbaez:rjjjb8Aavcjxfcbaez:rjjjb8AdnaiTmbadhoaihrinavcjxfaoRbbfgwawRbbcef86bbavcjxfaocefRbbfgwawRbbcef86bbavcjxfaocdfRbbfgwawRbbcef86bbaocifhoarcufgrmbkcbhDcjehoadhqcehkindndnalTmbcbhxcuhmaqhrakhwcuhPinawcufamaoavcjPfarcefRbbgsfRbb9RcFeGgzci6aoavcjPfarRbbgHfRbb9RcFeGgOci6faoavcjPfarcdfRbbgAfRbb9RcFeGgCci6fgXcOtaOcFr7azaCf9RcwtVavcjxfaAfRbbgzavcjxfaHfRbbgHavcjxfasfRbbgsaHas6Egsazas6EcFe7VgsaP9kgzEhmaXcd6gHaxcefgOal9iVce9hmdasaPazEhPaxaOaHEhxarcifhrawai6hsawcefhwasmbxdkkcuhmaqhrakhwcuhxinawcufamaoavcjPfarcefRbbfRbb9RcFeGci6aoavcjPfarRbbfRbb9RcFeGci6faoavcjPfarcdfRbbfRbb9RcFeGci6fgPax9kgsEhmaPce0meaPaxasEhxarcifhrawai6hPawcefhwaPmbkkadamci2fgrcdfRbbhwarcefRbbhxarRbbhPadaDci2fgrcifaramaD9Rci2zNjjjb8AaPavcjPffaocefgo86bbaPavcjxffgmamRbbcuf86bbaxavcjPffao86bbaxavcjxffgmamRbbcuf86bbarcdfaw86bbarcefax86bbaraP86bbawavcjPffao86bbawavcjxffgrarRbbcuf86bbaqcifhqakcefhkaDcefgDai9hmbkcbhzdnalcb9mmbcbhsavcjPfcbaez:rjjjb8Aadcvfhlinadasci2fgxcefgDRbbhoaxcdfgqRbbhrdndnavcjPfaxRbbgmfRbbmbavcjPfarfRbbhwdndndnavcjPfaofRbbTmbawcFeGTmexikawcFeGmdascefgAai9pmdasc980mdascifhQcbhLarcFeGhCamcFeGhXalhwcbhKcbhYinawcufRbbhPawRbbhOcehkdndnawc9:fRbbgHao9hmbaPcFeGamSmekdnaPcFeGao9hmbaOcFeGamSmekaHamSaOcFeGaoSGhkkceh8AaYceGhYdndnaHar9hmbaPcFeGaoSmekdnaPcFeGar9hmbaOcFeGaoSmekaHaoSaOcFeGarSGh8AkakaYVhYaLaHcFeGgHaXSaPcFeGgPaCSGaPaXSaOcFeGgPaCSGVaHaCSaPaXSGVVhLa8AaKceGVhKdnaAcefgPai9pmbawcifhwaAaQ6hHaPhAaHmekkaYTmeaKmekarhwaohPaohHarhOamhrxdkdnaYTaLVceGTmbaYaKTVaLVceGmekamhwarhParhHamhOaohrxekaohwamhPamhHaohOkavcjPfarfce86bbavcjPfawfce86bbaxaH86bbaqar86bbaDaO86bbavcjPfaPfce86bbalcifhlascefgsai9hmbkkavcFeaecetz:rjjjbhwaici2hrindnawadRbbgmcetfgx8Uebgocu9kmbaxaz87ebawcjlfazcdtfabamcdtfydbBdbazhoazcefhzkadao86bbadcefhdarcufgrmbkazcdthokabavcjlfaoz:qjjjb8Aavcjzf8KjjjjbkObabaiaeadcbz:njjjbk9teiucbcbyd;8:G:cjbgeabcifc98GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;8:G:cjbgeabcrfc94GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;8:G:cjbge9Rcifc98GaefgbBd;8:G:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk:3qeludndnadch6mbadTmeabaead;8qbbabskabaeSmbdnaeadabfgi9Rcbadcet9R0mbadTmeabaead;8qbbabskaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocxGcxSmbaocd4cefciGhiaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglc3Gc3Smbavalcd4cefcrGgdcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfaeczfydbBdbaicCfaecCfydbBdbaicKfaecKfydbBdbaic3faec3fydbBdbaecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaicefaecefRbb86bbaicdfaecdfRbb86bbaicifaecifRbb86bbaiclfaeclfRbb86bbaicvfaecvfRbb86bbaicofaecofRbb86bbaicrfaecrfRbb86bbaicwfhiaecwfhealc94fglmbkkabkk:pedbcj:GdktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0:Gdkxebbbdbbbj:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(i),{}).then(function(g){t=g.instance,t.exports.__wasm_call_ctors()});function n(g){for(var b=new Uint8Array(g.length),f=0;f<g.length;++f){var _=g.charCodeAt(f);b[f]=_>96?_-97:_>64?_-39:_+4}for(var w=0,f=0;f<g.length;++f)b[w++]=b[f]<60?e[b[f]]:(b[f]-60)*64+b[++f];return b.buffer.slice(0,w)}function r(g){if(!g)throw new Error("Assertion failed")}function s(g){return new Uint8Array(g.buffer,g.byteOffset,g.byteLength)}var o=48,c=16;function h(g,b){var f=g.meshlets[b*4+0],_=g.meshlets[b*4+1],w=g.meshlets[b*4+2],m=g.meshlets[b*4+3];return{vertices:g.vertices.subarray(f,f+w),triangles:g.triangles.subarray(_,_+m*3)}}function l(g,b,f,_,w,m,M,A,T,R){var v=t.exports.sbrk,y=t.exports.meshopt_buildMeshletsBound(b.length,m,M),k=v(y*c),O=v(b.length*4),C=v(b.length),U=v(b.byteLength),X=v(f.byteLength),B=new Uint8Array(t.exports.memory.buffer);B.set(s(b),U),B.set(s(f),X);var V=g(k,O,C,U,b.length,X,_,w,m,M,A,T,R);B=new Uint8Array(t.exports.memory.buffer);for(var z=B.subarray(k,k+V*c),Z=new Uint32Array(z.buffer,z.byteOffset,z.byteLength/4).slice(),ae=0;ae<V;++ae){var de=Z[ae*4+0],Ae=Z[ae*4+1],_=Z[ae*4+2],je=Z[ae*4+3];t.exports.meshopt_optimizeMeshlet(O+de*4,C+Ae,je,_)}var W=V?Z[(V-1)*4+0]+Z[(V-1)*4+2]:0,$=V?Z[(V-1)*4+1]+Z[(V-1)*4+3]*3:0,fe={meshlets:Z,vertices:new Uint32Array(B.buffer,O,W).slice(),triangles:new Uint8Array(B.buffer,C,$).slice(),meshletCount:V};return v(k-v(0)),fe}function d(g){var b=new Float32Array(t.exports.memory.buffer,g,o/4);return{centerX:b[0],centerY:b[1],centerZ:b[2],radius:b[3],coneApexX:b[4],coneApexY:b[5],coneApexZ:b[6],coneAxisX:b[7],coneAxisY:b[8],coneAxisZ:b[9],coneCutoff:b[10]}}function u(g,b,f,_){var w=t.exports.sbrk,m=[],M=w(b.byteLength),A=w(g.vertices.byteLength),T=w(g.triangles.byteLength),R=w(o),v=new Uint8Array(t.exports.memory.buffer);v.set(s(b),M),v.set(s(g.vertices),A),v.set(s(g.triangles),T);for(var y=0;y<g.meshletCount;++y){var k=g.meshlets[y*4+0],O=g.meshlets[y*4+1],C=g.meshlets[y*4+3];t.exports.meshopt_computeMeshletBounds(R,A+k*4,T+O,C,M,f,_),m.push(d(R))}return w(M-w(0)),m}function p(g,b,f,_){var w=t.exports.sbrk,m=w(o),M=w(g.byteLength),A=w(b.byteLength),T=new Uint8Array(t.exports.memory.buffer);T.set(s(g),M),T.set(s(b),A),t.exports.meshopt_computeClusterBounds(m,M,g.length,A,f,_);var R=d(m);return w(m-w(0)),R}function x(g,b,f,_,w){var m=t.exports.sbrk,M=m(o),A=m(g.byteLength),T=_?m(_.byteLength):0,R=new Uint8Array(t.exports.memory.buffer);R.set(s(g),A),_&&R.set(s(_),T),t.exports.meshopt_computeSphereBounds(M,A,b,f,T,_?w:0);var v=d(M);return m(M-m(0)),v}return{ready:a,supported:!0,buildMeshlets:function(g,b,f,_,w,m){r(g.length%3==0),r(b instanceof Float32Array),r(b.length%f==0),r(f>=3),r(_>=3&&_<=256),r(w>=1&&w<=512),m=m||0;var M=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsFlex,M,b,b.length/f,f*4,_,w,w,m,0)},buildMeshletsFlex:function(g,b,f,_,w,m,M,A){r(g.length%3==0),r(b instanceof Float32Array),r(b.length%f==0),r(f>=3),r(_>=3&&_<=256),r(w>=1&&m<=512),r(w<=m),M=M||0,A=A||0;var T=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsFlex,T,b,b.length/f,f*4,_,w,m,M,A)},buildMeshletsSpatial:function(g,b,f,_,w,m,M){r(g.length%3==0),r(b instanceof Float32Array),r(b.length%f==0),r(f>=3),r(_>=3&&_<=256),r(w>=1&&m<=512),r(w<=m),M=M||0;var A=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return l(t.exports.meshopt_buildMeshletsSpatial,A,b,b.length/f,f*4,_,w,m,M)},extractMeshlet:function(g,b){return r(b>=0&&b<g.meshletCount),h(g,b)},computeClusterBounds:function(g,b,f){r(g.length%3==0),r(g.length/3<=512),r(b instanceof Float32Array),r(b.length%f==0),r(f>=3);var _=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g);return p(_,b,b.length/f,f*4)},computeMeshletBounds:function(g,b,f){return r(b instanceof Float32Array),r(b.length%f==0),r(f>=3),u(g,b,b.length/f,f*4)},computeSphereBounds:function(g,b,f,_){return r(g instanceof Float32Array),r(g.length%b==0),r(b>=3),r(!f||f instanceof Float32Array),r(!f||f.length%_==0),r(!f||_>=1),r(!f||g.length/b==f.length/_),_=_||0,x(g,g.length/b,b*4,f,_*4)}}})();var w0=(function(){var i="b9H79Tebbbe9vx9Geueu9Geub9Gbb9Gkuuuuuuuuuuub9Gouuuuuub9Gwuuuuuu9999b9Giuuueu9Ge98e999Gvuuuuueu9Gd99ueu9Ge99e999Gd98ue98isPdilvboberrwDqklve9Weiiviebeoweuecj:Gdkr9Avo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbK9TW79O9V9Wt9F9NW9UWV9HtW9u9H9U9NW9Ut7beL9TW79O9V9Wt9F9NW9UWV9HtW9o9VV9T9H27bil79IV9RblDwebcekdorq;X9PPdbk;e8EvHuw99euv99wu8Jjjjjbc;Wb9Rgk8Kjjjjbakcxfcbc;Kbz:fjjjb8AakcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgxBdxakceBd2adci9Uhmalcd4alfhPcehsinasgzcethsazaP6mbkakcuazcdtgsazcFFFFi0Ecbyd:W:2:cjbHjjjjbbgPBdzakcdBd2aPcFeasz:fjjjbhHaDcd4hOarcd4hAavcd4hCdnalTmbazcufhrcbhvindndnaHcbaiavaC2cdtfgzydlgDaDcjjjj94SEgPcH4cbaoavaA2cdtfgsydlgXcs4aXcjjjj94SE7aP7c:F:b:DD2cbazydbgQaQcjjjj94SEgPcH4cbasydbgLcs4aLcjjjj94SE7aP7c;D;O:B8J27cbazydwgKaKcjjjj94SEgzcH4cbasydwgYcs4aYcjjjj94SE7az7c:3F;N8N27awavaO2cdtfgzydlg8AazydbgE7cFFFFrGgzcm4az7c:fjjK27arGgPcdtfgzydbgscuSmba8A::h3aE::h5aY::h8EaX::h8FaL::haaK::hhaD::hgaQ::h8JcehDinaDhzdnaiasaC2cdtfgDIdba8J9CmbaDIdlag9CmbaDIdwah9CmbaoasaA2cdtfgDIdbaa9CmbaDIdla8F9CmbaDIdwa8E9CmbawasaO2cdtfgDIdba59CmbaDIdla39BmikazcefhDaHaPazfarGgPcdtfgzydbgscu9hmbkkazavBdbavhskaxavcdtfasBdbavcefgval9hmbkkcbhPaHcbyd:0:2:cjbH:bjjjbbakceBd2ak9cb83ibakaeadaxalakcxfz:cjjjbcuamcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbh8Kakcxfakyd2gKcdtfa8KBdbakaKcefgYBd2dnadci6mbaehsa8KhzamhvindndnaeTmbascwfydbhDasclfydbhHasydbhrxekaPcdfhDaPcefhHaPhrkJbbbbh8JJbbbbJbbbbJbbbbJbbbbJbbjZJbbj:;awaHaO2cdtfgXIdbawaraO2cdtfgQIdbga:tawaDaO2cdtfgLIdlaQIdlgh:tggNaXIdlah:tghaLIdbaa:tN:tgaJbbbb9EEaaJbbbb9BEg5aiaraC2cdtfgrIdwgaaiaHaC2cdtfgHIdwg39BEa5arIdlg8FaHIdlg8L9BEa5arIdbg8EaHIdbg8M9BEg5aaaiaDaC2cdtfgDIdwg8N9BEa5a8FaDIdlgy9BEa5a8EaDIdbg8P9BEg5a3a8N9BEa5a8Lay9BEa5a8Ma8P9BEh5dnaga3aa:tNaha8Naa:tN:tgaaaNaga8Ma8E:tNaha8Pa8E:tN:tg8Ea8ENaga8La8F:tNahaya8F:tN:tggagNMMghJbbbb9Bmba5ah:r:vh8Jkazcxfa5Udbazcwfaaa8JNUdbazclfaga8JNUdbaza8Ea8JNUdbascxfhsazczfhzaPcifhPavcufgvmbkkcbhzakcxfaYcdtfcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdbakaKcdfgPBd2dnadTmbaDhsinasazBdbasclfhsadazcefgz9hmbkkakcxfaPcdtfcuamcdtadcFFFF970Ecbyd:W:2:cjbHjjjjbbgvBdbakaKcifgzBd2akcxfazcdtfamcbyd:W:2:cjbHjjjjbbgYBdbakaKclfBd2dnadci6mba8KcxfhsavhPcbhzinaPazBdbaYazfcdcbasIdbg8JJbbbb9DEa8JJbbbb9EV86bbaPclfhPasczfhsamazcefgz9hmbkkdnalTmbcbhIakydlh8Rakydbh8SinaIcdthzdna8SaIcefgIcdtfydbgsa8SazfydbgzSmbasaz9RhQa8RazcdtfhLcbhRinaLaRcdtfg8Uydbgzcd4g8Vci2g8WazciGcdtgsyd:e:G:cjbfhza8Wasydj:G:cjbfhsdnaeTmbaeazcdtfydbhzaeascdtfydbhskdnaRcefgRaQ9pmbaxazcdtfydbhKaxascdtfydbhEaYa8Vfh8Aava8Vcdtfh8XaRhwinaLawcdtfgXydbgzcd4gsci2gOazciGcdtgzyd:e:G:cjbfhPaOazydj:G:cjbfhzdnaeTmbaeaPcdtfydbhPaeazcdtfydbhzkdndnaxazcdtfydbaKSmbaxaPcdtfydbaE9hmekaYasfRbbgza8ARbbgPVciSmbdnazaPGmba8VhPdna8Va8XydbgzSmba8XhHinaHavazgPcdtfgrydbgzBdbarhHaPaz9hmbkkdnasavascdtfgHydbgzSmbinaHavazgscdtfgrydbgzBdbarhHasaz9hmbkkaPasSmbaYasfgHRbbaYaPfgzRbbVciSmeavascdtfaPBdbazazRbbaHRbbV86bbkdna8UydbciGa8WfgsaDascdtfgPydbgzSmbinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkdnaXydbciGaOfgPaDaPcdtfgHydbgzSmbinaHaDazgPcdtfgrydbgzBdbarhHaPaz9hmbkkasaPSmbaDaPcdtfasBdbkawcefgwaQ9hmbkkaRaQ9hmbkkaIal9hmbkkdnadTmbcbhrinarhsdnaraDarcdtfgwydbgzSmbawhPinaPaDazgscdtfgHydbgzBdbaHhPasaz9hmbkkawasBdbarcefgrad9hmbkcbh8Vabcbadcltz:fjjjbhQdnadci6mbaqceGhKaDhLaeh8Acbh8Windna8Ka8WcltfgPIdxJbbbb9Bmbaea8Wci2gEcdtfhXcbhsa8VhwinaQaLasfydbcltfhzdndnaeTmba8AasfydbhHaXasc:e:G:cjbfydbcdtfydbhOaXascj:G:cjbfydbcdtfydbhxxekasc:e:G:cjbfydbaEfhOascj:G:cjbfydbaEfhxawhHkazaPIdbghaoaHaA2cdtfgrIdbg8JaPIdwg8EarIdwggNaha8JNaPIdlg5arIdlghNMMgaN:tg8FJbbbbJbbjZa8EagaaN:tg8Ea8ENa8Fa8FNa5ahaaN:tgaaaNMMg8F:r:va8FJbbbb9BEJ;As6nJbbjZaiaxaC2cdtfgrIdwaiaHaC2cdtfgHIdwg3:tg8Faga8FagNarIdbaHIdbg8L:tg8Ma8JNaharIdlaHIdlg8N:tgyNMMg8FN:tg5aiaOaC2cdtfgHIdwa3:tg3aga3agNaHIdba8L:tg8Pa8JNahaHIdla8N:tg8NNMMg3N:tggNa8Ma8Ja8FN:tg8La8Pa8Ja3N:tg8JNayaha8FN:tg8Fa8Naha3N:tghNMMJbbbbJbbjZa5a5Na8La8LNa8Fa8FNMMagagNa8Ja8JNahahNMMNg8J:rgg:va8JJbbbb9BENgh:lg8Ja8JJbbjZ9EEg8Ja8JJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZa8J:t:rNg8J:ta8JahJbbbb9DENg8Jaga8JNaKEg8JNazIdbMUdbazaaa8JNazIdlMUdlaza8Ea8JNazIdwMUdwawcefhwasclfgscx9hmbkkaLcxfhLa8Acxfh8Aa8Vcifh8Va8Wcefg8Wam9hmbkcbhrinarhsdnaravarcdtfgPydbgzSmbinaPavazgscdtfgHydbgzBdbaHhPasaz9hmbkkaQarc8W2fgzc3fJbbjZJbbj:;aYasfRbbceGEg8JUdbazc8Sfa8JUdbaza8JUdxarcefgram9hmbkkaqcdGhvcbhsaDhPaQhzindnasaPydb9hmbdndnazcwfgHIdbg8Ja8JNazIdbggagNazclfgrIdbghahNMMgaJbbbb9BmbaHa8JJbbjZaa:r:vgaNUdbarahaaNUdbazagaaNg8JUdbxekaHa8JJbbbbNUdbarahJbbbbNUdbazagJbbbbNg8JUdba8JJbbjZavEh8Jkaza8JUdbkaPclfhPazczfhzadascefgs9hmbkcbhzaQhsindnazaDydbgPSmbasaQaPcltfgPydwBdwasaP8Pdb83dbkaDclfhDasczfhsadazcefgz9hmbkkdnakyd2gsTmbascdtakcxffc98fhzinazydbcbyd:0:2:cjbH:bjjjbbazc98fhzascufgsmbkkakc;Wbf8Kjjjjbk;:levucualcefgocdtaocFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdbcuadcdtadcFFFFi0Ecbyd:W:2:cjbHjjjjbbhoavavyd9GgrcdtfaoBdbavarcefBd9GabaoBdlabydbclfcbalcdtz:fjjjbhoadci9UhwdnadTmbdnaeTmbaehvadhrinaoaiavydbcdtfydbcdtfgDaDydbcefBdbavclfhvarcufgrmbxdkkadhraihvinaoavydbcdtfgDaDydbcefBdbavclfhvarcufgrmbkkdnalTmbcbhraohvinavydbhDavarBdbavclfhvaDarfhralcufglmbkkdnadci6mbabydlhrcbhlcdhvindndnaeTmbaiaealfgqydbcdtfhDaiaqcwfydbcdtfhdaiaqclfydbcdtfhqxekaialfgDcwfhdaDclfhqkadydbhdaqydbhqaoaDydbcdtfgDaDydbgDcefBdbaraDcdtfavc9:fBdbaoaqcdtfgDaDydbgDcefBdbaraDcdtfavcufBdbaoadcdtfgDaDydbgDcefBdbaraDcdtfavBdbalcxfhlavclfhvawcufgwmbkkabydbcbBdbk:SEvxui99duv99xu8Jjjjjbc;Wb9Rgw8Kjjjjbawcxfcbc;Kbz:fjjjb8AawcualcdtalcFFFFi0Ecbyd:W:2:cjbHjjjjbbgDBdxawceBd2adci9Uhqalcd4alfhkaoz:mjjjbhocehxinaxgmcethxamak6mbkawcuamcdtgxamcFFFFi0Ecbyd:W:2:cjbHjjjjbbgkBdzawcdBd2akcFeaxz:fjjjbhPavcd4hsdnalTmbamcufhzcbhHindndnaPcbaiaHas2cdtfgmydlgvavcjjjj94SEgxcH4ax7c:F:b:DD2cbamydbgOaOcjjjj94SEgxcH4ax7c;D;O:B8J27cbamydwgAaAcjjjj94SEgmcH4am7c:3F;N8N27azGgkcdtfgmydbgxcuSmbaA::hCav::hXaO::hQcehvinavhmdnaiaxas2cdtfgvIdbaQ9CmbavIdlaX9CmbavIdwaC9BmikamcefhvaPakamfazGgkcdtfgmydbgxcu9hmbkkamaHBdbaHhxkaDaHcdtfaxBdbaHcefgHal9hmbkkcbhkaPcbyd:0:2:cjbH:bjjjbbawceBd2aw9cb83ibawaeadaDalawcxfz:cjjjbcuaqcltadcFFFFd0Ecbyd:W:2:cjbHjjjjbbhLawcxfawyd2gKcdtfaLBdbawaKcefgOBd2dnadci6mbaehxaLhmaqhHindndnaeTmbaxcwfydbhzaxclfydbhvaxydbhPxekakcdfhzakcefhvakhPkJbbbbhQdnaiavas2cdtfgvIdbaiaPas2cdtfgPIdbgX:tgYaiazas2cdtfgzIdlaPIdlgC:tg8ANavIdlaC:tgCazIdbaX:tgEN:tgXaXNaCazIdwaPIdwg3:tg5NavIdwa3:tg3a8AN:tgCaCNa3aENaYa5N:tgYaYNMMg8AJbbbb9BmbJbbjZa8A:r:vhQkamcxfa8AJbbbb9CBdbamcwfaXaQNUdbamclfaYaQNUdbamaCaQNUdbaxcxfhxamczfhmakcifhkaHcufgHmbkkcbhmawcxfaOcdtfcuadcdtg8EadcFFFFi0Ecbyd:W:2:cjbHjjjjbbgvBdbawaKcdfg8FBd2dnadTmbavhxinaxamBdbaxclfhxadamcefgm9hmbkkdnalTmbcbhaawydlhhawydbhginaacdthmdnagaacefgacdtfydbgxagamfydbgmSmbaxam9RhAahamcdtfh8Jcbh8Kina8Ja8Kcdtfg8Lydbgmcd4gkci2g8MamciGcdtgxyd:e:G:cjbfhma8Maxydj:G:cjbfhxdnaeTmbaeamcdtfydbhmaeaxcdtfydbhxkdna8Kcefg8KaA9pmbaLakcltfhOaDamcdtfydbh8NaDaxcdtfydbhya8KhHina8JaHcdtfg8Pydbgmcd4gkci2gzamciGgPcdtgmyd:e:G:cjbfhxazamydj:G:cjbfhmdnaeTmbaeaxcdtfydbhxaeamcdtfydbhmkdndnaDamcdtfydba8NSmbaDaxcdtfydbay9hmekaOIdwaLakcltfgmIdwNaOIdbamIdbNaOIdlamIdlNMMao9ETmbaOydxamydx9hmbdna8LydbciGa8MfgxavaxcdtfgkydbgmSmbinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbka8PydbciGhPkdnaPazfgkavakcdtfgPydbgmSmbinaPavamgkcdtfgzydbgmBdbazhPakam9hmbkkaxakSmbavakcdtfaxBdbkaHcefgHaA9hmbkka8KaA9hmbkkaaal9hmbkkdndndnadTmbcbhzinazhxdnazavazcdtfgHydbgmSmbaHhkinakavamgxcdtfgPydbgmBdbaPhkaxam9hmbkkaHaxBdbazcefgzad9hmbkcbh8Mabcbadcx2z:fjjjbh8Padcd9nmeavhAaeh8NcbhyinaLaycltfhkaeayci2g8JcdtfhDcbhxa8MhHina8PaAaxfydbcx2fhmdndnaeTmba8NaxfydbhzaDaxc:e:G:cjbfydbcdtfydbhOaDaxcj:G:cjbfydbcdtfydbhPxekaxc:e:G:cjbfydba8JfhOaxcj:G:cjbfydba8JfhPaHhzkamakIdbaiaPas2cdtfgPIdwaiazas2cdtfgzIdwgC:tgoaoNaPIdbazIdbgY:tgQaQNaPIdlazIdlg8A:tgXaXNMMaiaOas2cdtfgPIdwaC:tgCaCNaPIdbaY:tgYaYNaPIdla8A:tg8Aa8ANMMNgE:rg3J;As6nJbbjZaoaCNaQaYNaXa8ANMMJbbbbJbbjZa3:vaEJbbbb9BENgQ:lgoaoJbbjZ9EEgoaoJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZao:t:rNgo:taoaQJbbbb9DENgoNamIdbMUdbamakIdlaoNamIdlMUdlamakIdwaoNamIdwMUdwaHcefhHaxclfgxcx9hmbkaAcxfhAa8Ncxfh8Na8Mcifh8MaycefgyaqSmdxbkkabcbadcx2z:fjjjb8Axekcbhxavhka8Phmindnaxakydb9hmbJbbbbhodnamcwfgPIdbgQaQNamIdbgXaXNamclfgzIdbgCaCNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaQaoNUdbazaCaoNUdbamaXaoNUdbkakclfhkamcxfhmadaxcefgx9hmbkkdnarJbbbb9ETmbawcxfa8Fcdtfcuadcltg8Pa8EcFFFFi0Ecbyd:W:2:cjbHjjjjbbg8JBdbdndnar:ngo:lJbbb9p9DTmbao:Ohmxekcjjjj94hmkaKcifh8Famce9imbamcqamcq9iEh8Nadci6hLcbhAina8Jcba8Pz:fjjjbhPdnaLmbcbhDavhOinavaDcx2fhecbhxinabaOaxfydbgzcx2fgmIdwhoabaeaxcj:G:cjbfydbcdtfydbgHcx2fgkIdwhQamIdbhXakIdbhCamIdlhYakIdlh8AaPazcltfgmamIdxJbbjZMUdxamamIdbaCaX:taoaQNaXaCNaYa8ANMMgXaXNJbbbbaXJbbbb9EEgXNgCMUdbamamIdla8AaY:taXNgYMUdlamaQao:taXNgoamIdwMUdwaPaHcltfgmamIdxJbbjZMUdxamamIdbaC:tUdbamamIdlaY:tUdlamamIdwao:tUdwaxclfgxcx9hmbkaOcxfhOaDcefgDaq9hmbkkdnadTmbaraA:Z:tgoJbbjZaoJbbjZ9DEJbbbZNh8AcbhxavhkabhzaPhmindnaxakydb9hmbamcxfIdbgQJbbbb9ETmbJbbbbhodnamcwfIdba8AaQ:vgQNazcwfgPIdbMgXaXNamIdbaQNazIdbMgCaCNamclfIdbaQNazclfgHIdbMgQaQNMMgYJbbbb9BmbJbbjZaY:r:vhokaPaXaoNUdbaHaQaoNUdbazaCaoNUdbkakclfhkazcxfhzamczfhmadaxcefgx9hmbkkaAcefgAa8N9hmbkkdnadTmbcbhmabhxindnamavydbgkSmbaxabakcx2fgkydwBdwaxak8Pdb83dbkavclfhvaxcxfhxadamcefgm9hmbkkdna8FTmba8Fcdtawcxffc98fhminamydbcbyd:0:2:cjbH:bjjjbbamc98fhma8Fcufg8Fmbkkawc;Wbf8Kjjjjbk9teiucbcbyd:4:2:cjbgeabcifc98GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:4:2:cjbgeabcrfc94GfgbBd:4:2:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:4:2:cjbge9Rcifc98GaefgbBd:4:2:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk9pee98abab:Igbabab:Ige:Iab9e9P9q;U;G9c:t;58::I9e8N8Es;O:h;a9w:;:G:Iae9e9c86v;H9t9v:LZ:Iab9e:b9ExpFF;F:;:I9ebbbbbb;WZ:G:G:G:2k0ed98ababab:Ige:Igdaeae:I:Iae9e:NS87:m:h;n;g8::I9et;N;k;I;5bI:;:G:Iadae9e:Y;79U:jzH:bZ:I9e93:S;l9u9v9v;f:;:G:Iab:G:G:2k:K8Flqud98zul988Jjjjjbc:Wl9Rgv8Kjjjjbcbhoadc99fcK9Tgrcbarcb9kEgwc9O2adfhDdnalcdtc:q:G:cjbfydbgqaicufgkfgdcb9imbawak9RhxdnadTmbaqaifgdceGhmawcdtaicdt9Rc:O:G:cjbfhradc9:GhPavc;adfhdcbhoin9ebbbbbbbbhs9ebbbbbbbbhzdnaxaofgHcb9imbarc98fydb:3hzkadaz85ibdnaHcu9imbarydb:3hskadcwfas85ibadczfhdarcwfhraPaocdfgo9hmbkamTmeaxaofhxkdndnaxcb9omb9ebbbbbbbbhzxekaxcdtyd:G:G:cjb:3hzkavc;adfaocitfaz85ibkaDc9OfhOcbhdaqcbaqcb9kEhmaic;:FFFrGhHaiceGhAaicitavc;adffc9WfhPinadhxdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbaPhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaATmekabarcitf8Ribavc;adfaxakfar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibaPcwfhPaxcefhdaxam9hmbkaic;:FFFrGhHaiceGhCc8VaD9RhXc8WaD9RhQavc;Gifc98fgLaqcdtfhKawcdtc:G:G:cjbfhwavc;adfc94fhYavc;Gifc9Wfh8Aavc9WfhEaDc9Nfh3aqhxdninavaxcitgdf8Ribhzdnaxce9imbcbhrdndnaxce9hmbaxhdxekaxceGhmaxc;:FFFrGhPaEadfhdcbhravc;Gifhoinaoaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbaoclfadcwf8Ribas:Ggz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbad8Ribas:Ghzaocwfhoadc9WfhdaParcdfgr9hmbkamTmeaxar9Rhdkavc;Gifarcdtfaz9ebbbbbb9W8::I;8d:3gs9ebbbbbb9W;b:Iaz:G;8dBdbavadcitfc94f8Ribas:GhzkazaOz:njjjbgz9ebbbbbb;aZ:I:C9ebbbbbba;a:Iaz:Ggzaz;8dg5:3:HhzdndndndndnaOce9ig8Embavc;Gifaxcdtfc98fgdadydbgdadaQ91gdaQt9RgoBdbaoaX91h8Fada5fh5xekaOmeavc;Gifaxcdtfc98fydbcL91h8Fka8Fce9imdxekcdh8Faz9ebbbbbb;GZ9Mmbcbh8Fxekcehodnaxce9imbcbhrcbhPdnaxceSmbaxceGhaaxc;:FFFrGhAcbhravc;GifhdcbhPinadydbhodndndndnaPTmbcFFFrhPxekaoTmecjjjwhPkadaPao9RBdbcbhPxekcehPkadclfgmydbhodndndndnaPmbcFFFrhPxekaoTmecjjjwhPkamaPao9RBdbcehPcbhoxekcbhPcehokadcwfhdaAarcdfgr9hmbkaaTmekavc;GifarcdtfgrydbhddndnaPTmbcFFFrhoxekcehoadTmecjjjwhokaraoad9RBdbcbhokdna8EmbcFFFihddndna3PdebdkcFFFehdkavc;Gifaxcdtfc98fgrarydbadGBdbka5cefh5a8Fcd9hmb9ebbbbbb;WZaz:Hhzcdh8Faombaz9ebbbbbb;WZaOz:njjjb:Hhzkdnaz9ebbbbbbbb9Imbdnaxaq9mmbaxaq9RgdciGhrcbhoaxhPdndnaqax9Rc980mbadc98Ghma8AaxcdtfhdcbhoaxhPinadydbadclfydbadcwfydbadcxfydbaoVVVVhoadc9WfhdaPc98fhPamc98fgmmbkarTmekaLaPcdtfhdinadydbaoVhoadc98fhdarcufgrmbkkaoTmbavc;Gifaxcdtfc98fhdinaxcufhxaOc9OfhOadydbhoadc98fhdaoTmbxlkkaKhdaxhPinaPcefhPadydbhoadc98fhdaoTmbkaYaiaxfcitfhminavc;adfaxaifgAcitfawaxcefgxcdtfydb:385ibdndnaice9omb9ebbbbbbbbhzxekcbhr9ebbbbbbbbhzdnakTmbamhdabhoinaocwf8Ribad8Rib:Iao8Ribadcwf8Rib:Iaz:G:Ghzadc9WfhdaoczfhoaHarcdfgr9hmbkaCTmekabarcitf8Ribavc;adfaAar9Rcitf8Rib:Iaz:Ghzkavaxcitfaz85ibamcwfhmaxaP9imbkaPhxxekkdndnazcKaD9Rz:njjjbgz9ebbbbbb9Wc9MTmbavc;Gifaxcdtfaz9ebbbbbb9W8::I;8dgd:39ebbbbbb9W;b:Iaz:G;8dBdbaxcefhxaDhOxekaz;8dhdkavc;GifaxcdtfadBdbkdnaxcb9imb9ebbbbbb;WZaOz:njjjbhzdndnaxceGTmbaxhoxekavaxcitfazavc;Gifaxcdtfydb:3:I85ibaxcufhoaz9ebbbbbb9W8::IhzkdnaxTmbaocefhraocdtavc;Giffc98fhdaocitavfc94fhoinaoaz9ebbbbbb9W8::Igsadydb:3:I85ibaocwfazadclfydb:3:I85ibadc94fhdaoc9Wfhoas9ebbbbbb9W8::Ihzarc9:fgrmbkkavaxcitfhHaxhdindndnaqaxadgi9RgAaqaA9iEgdcb9omb9ebbbbbbbbhzxekadcefgociGhrdndnadci9pmbcbhd9ebbbbbbbbhzxekcbhPcbaoc98G9Rhm9ebbbbbbbbhzcbhdinadc1:2:cjbf8RibaHadfgocKf8Rib:Iadcj:2:cjbf8Ribaoczf8Rib:Iadc;4:1:cjbf8Ribaocwf8Rib:Iadc;W:1:cjbf8Ribao8Rib:Iaz:G:G:G:GhzadcafhdamaPc98fgP9hmbkarTmecbaP9Rhdkadcithdinadc;W:1:cjbf8RibaHadf8Rib:Iaz:Ghzadcwfhdarcufgrmbkkavc:GefaAcitfaz85ibaHc94fhHaicufhdaicb9kmbkkdndndndndnalPleddblk9ebbbbbbbbhhdnaxce9imbaxhddnaxceGTmbavc:Gefaxcitfgdc94fgoao8Ribgzad8Ribgs:Ggg85ibadasazag:H:G85ibaxcufhdkaxceSmbadcdfhoadcitavc:Geffc9Wfhdinadad8Ribgsadcwfgr8RibggadczfgH8Ribg8J:Ggz:Gg8K85ibaHa8Jagaz:H:G85ibarazasa8K:H:G85ibadc9Wfhdaoc9:fgocd9kmbkaxceSmbaxcefhoaxcitavc:Geffc94fhdinadad8Ribgzadcwfgr8Ribgs:Ggg85ibarasazag:H:G85ibadc94fhdaocufgocd0mbkaxcefhoavc:Gefaxcitfhd9ebbbbbbbbhhinahad8Rib:Ghhadc94fhdaocufgocd0mbkkav8Ri:Gehza8Fmdaeaz85ibaeah85izaeav8Ri:Oe85iwxikdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibxdkdndnaxcb9omb9ebbbbbbbbhzxekdndnaxciGci9hmb9ebbbbbbbbhzaxhoxekaxcefciGhravc:Gefaxcitfhd9ebbbbbbbbhzaxhoinaocufhoazad8Rib:Ghzadc94fhdarcufgrmbkkaxci6mbaocefhraocitavc:Geffc9OfhdinazadcKf8Rib:Gadczf8Rib:Gadcwf8Rib:Gad8Rib:Ghzadc9Gfhdarc98fgrmbkkaeaz:Aaza8FE85ibav8Ri:Geaz:Hhzcehddnaxce9imbaxciGhodnaxcufci6mbaxc;8FFFrGhHavc:Gefcafhdcbhrinazadc9Of8Rib:Gadc9Wf8Rib:Gadc94f8Rib:Gad8Rib:GhzadcafhdaHarclfgr9hmbkaoTmearcefhdkavc:Gefadcitfhdinazad8Rib:Ghzadcwfhdaocufgombkkaeaz:Aaza8FE85iwxekaeaz:A85ibaeah:A85izaeav8Ri:Oe:A85iwkavc:Wlf8Kjjjjba5crGk:ediiue98eu8Jjjjjbcz9Rgd8Kjjjjbdndnab:8gicFFFFrGglc;A:F:K;Ul0mbaeab:7gvav9e:d;i;j9T8W9F;KZ:I9ebbbbbbUJ:G9ebbbbbbU;d:Ggv9ebbb9q;7h;5:;:I:Gav9e9J9I8A9H:0z9r:::I:G85ibav;8dhlxekdnalcjjj;8r6mbaeabab:t:785ibcbhlxekadalalcL4c;Q9:fgocLt9R:::785iwadcwfadaocecbz:kjjjbhlad8Ribhvdnaicu9kmbaeav:A85ibcbal9Rhlxekaeav85ibkadczf8Kjjjjbalk;piiiue99e988Jjjjjbcz9Rge8Kjjjjbdndnab:8gdcFFFFrGgic;A:F:K;6i0mbJbbjZhlaicjjj;mi6meab:7z1jjjbhlxekdnaic;r:N;T:dl0mbdnaic;K:x;Bjl6mb9eKR9e9u;7hDn9eKR9e9u;7hD;aadcb9iEab:7:Gz1jjjb:mhlxdkab:7hvdnadcu9kmbav9eKR9e9u;7h;5Z:Gz:jjjjbhlxdk9eKR9e9u;7h;5Zav:Hz:jjjjbhlxekdnaic;v;J1:hl0mbdnaic;G;B:;:fl6mb9eKR9e9u;7hYn9eKR9e9u;7hY;aadcb9iEab:7:Gz1jjjbhlxdkdnadcu9kmb9e;sh8Zu98;zO;aab:7:Hz:jjjjbhlxdkab:79e;sh8Zu98;zO;a:Gz:jjjjbhlxekdnaicjjj;8r6mbabab:thlxekabaecwfz:ljjjbhiae8RiwhvdndndndnaiciGPlbedibkavz1jjjbhlxikav:Az:jjjjbhlxdkavz1jjjb:mhlxekavz:jjjjbhlkaeczf8Kjjjjbalk:Uebdndnaecjw9imbab9ebbbbbb;Gu:IhbdnaecFs9pmbaec:b94fhexdkab9ebbbbbb;Gu:IhbaecpLaecpL6Ec:c9Wfhexekaec:b949kmbab9ebbbbbb9Gi:Ihbdnaec:49W9nmbaec;jrfhexekab9ebbbbbb9Gi:Ihbaec;W9Oaec;W9O0EcMsfhekabaecFrf:T9c80:g:;:Ikk;mQdbcj:Gdk:WQebbbdbbbbbbbebbbibbblbbblbbbobbb:d;5:Ib9e9o9Ub;88PXb;r9x8Nb;D80;1b9I;B;ab88:z:vbc:qJb9J9r;:b:7;E:Rb:39H;fb869U8Kb;s9n9cb6o;GbD;Q8Ub3M;rb;R5;:b8P:X3b;O8::Nb;181:cb9e:78Ub:C;P:eb:08M9Wbc9:9Fb;w:r85b9t:d85b:C;085b:l9F:eby;5:9b;48F87b;EF:xbs:yvbH8V;Vbq9A:lb9T8F9Tb;p9:BbD;l8NbS9p:3b:E9MZbR;Q9Fb:68N91b;L;R;hb8997;Xb;385rbM9s:kb;79R;Qb8F:X9Fbw9D:nb8Wi9wb97;8Sb;W:R9Rba:8;pbB;0:Ab;J:P5b9E9H:rbwE;Mb:f:zWb:GC9Fb:nn9Obj;yFb8N79nboo8Xb;k9wXb;j:O7b97;I9Gb9R:m;abY;e9hb;n9N;dbD;O;Cb9z:dIb:l4;eb:M3:wb9e:V;DbY9x;rb:L8:vbvrFb8Z9:Zb;c8Y;Ob:y9p;Eb:7998Yb8M89;db8E9R;Vb:F;49Eb818F86bu;Y;kb;X:h5b98:qhbf8K98b;v9U;6b8WR93bX87Jb:1C;gb;dY:Db:T;e;cb8S9ncbxb9Db:g99Sb;JGRb:B;g:Ab8Z9Ibb:0;s98b:0:N:xb839v;vb;x8:;2b:JzKb9n4;8b9K:DIb9W;x:Rb9J98;4b96:W9xbLX;Nb;a69wb87;w;zb:N:eUb8K8J;lb;w:k93b9A9u8Jbb8F:5b;XqEbY;o;Fb:F8XFb9M8Efb:z9x9Hb:S;79hb9:u;ybgW:3b8Y;O:jb;M:;9Gb;V;e;nb2BDb9DZ;ubQ;E;xb9y87;Eb;E:BMb;sgyby:g;Ob;I9y9nb;g;k8Ybw;JQb;G99;lbL;a9qb;Z5:NbK;G9Bb8UA80b:dO9Ib:d9ieb;1:o9Bb:T:Wub8E;P;Yb9i9kJbz9N;tb:Q;D;yb:U9F9cbf9H;obqy:Kb;t:z:0bo:M;Yb9C93ub:J;c:db9H881b:k794b:V:m9Ab9V;x:9bR:M9Jb;0:;;lb:n:b;Vb8M;b9Nb9v;kTb;k;zBby:O;sb;c9H:nbO;j93bl8MCbOS:Bb;e9z;eb;i;f9eb9n:Y:rbbL;Zb;uJ:Tb8P6;Lbp;vzbb::;8b8EN;mb9W;o;UbA8:;1b;S;Xjb:Z;N;db;h;4yb:tvNb;bG8:b8UD:ZbkT;Zb1O:Cb:Ra97b8U:1:Fb9hM;cb978Y8Vbx9v9TbV:N:qb9R;N8Fb8X;l:wb95Q9kbc95;Ib;0;F:jb;ON:xb;I;M:eb:z8X:xb1;T9Rb9F9FBb:7pPb9i:A:0b9N:K2bGV9cb:n9D8Yb:FX:4b:8;LDb:n8X8Lb;3t85b8Wv3bmxeb0w9Ob8S;U9yb9h:Q:qbt;Ndb:9;w8Kb;399:Mb9U9iVb:FQ;Vb:oN:Mb:0:r;2b;r9t9rb;pq;Yba:y8Zb;109:b:Y9J9Ob;D8:9Fbn9Dib:f:jub9v9s8Pb839K;ab9T;yzb8Y9i8Yb9B9m91b9oG;ubT9u9UbkD;bbI;19PbC9M;vb8Nr:Db9Dl9qb:087;Bb;Q4;fb:h;5Lb69R99b58N:6b:w9P8Pb;g;m:Sb:TC9ub:q;Ifb1;z:jb8SV9qbl:K::b93rNb;Z8W9Wbb;88Nb;QG:Ob9M;c6b9K;G89b:x;D:db:JZ:xbJNpbm:g:mb8Xc;EbM85:Db;D9W:mbL:3;Nbw;F87bX838Rb9Cj:Gb9Aj:tbzHMbs;O;yb2j:Vb;BF0bU:qsb9zK4b9I:LXb9H;l:7b;h:j:5bzn:9b;s;Ylb6918Nb;R:2;2b;Bg:7bqC:Qb:j8M8Vb9K:d4bD878ZbPN8Ab9r86:Qb5:J;cb:V;T:Ub9C8MOb9T;c9nbR96:Cb;a9w:xbiZ:dbD;W;2b8Rn:mb9T8X:zb85:0rbxaXb;y;d9Bb;1M;eb;g:T0b9o;k:Lb:N83;nb;M:PBb:RMNb;D9c9ObY9J;Eb4:m;Vb9O:l9sb;8;B83b:U:H:Rb;FX8Xbb:U:Hbx;7;Ab9K9n9Mb;Tv:3b8PW8Wb9x9w:;b9hF86bf;5:5b91::;Zby:t;Fb:Rj8Wb9M:m;2bl;lXb;6gob;z;K5b89:Z:Kb9xE:pbB;nDb9o9c;PbA:::Kb8Z8J:1b;W:Q8Ab9pW:Ob;s;b:LbkZsb9B94;nb8J;54b97:llb:jLVb;g:M9tb9V9U;Ib;V;Rbb:B9k9yb;e;A:3b:Q9M:6b4;p;pb;rd5b:X;XRb:m:z;bb;d:T93b:g9i;Ab;39D:Gb;gj;0b:S;W8Vb;D;S:AbZ9C:8b;q;E9Tb:q;h8FbI;B:2b:J8L86bb:V:Ab:T9t:tb:29xlb8PR:0b0j9:b;Ar:Nb4:QPb979z:HbQOIb;C:3Rb;6;Lpb:j;B;:b:j::pb;K42bo:P;8b8:j9Wb:f9UXbp:hFby8:rb9H9N8ZbIK:gb9n:9;Qb:Z;N:Vb:p9T9Ub:v9N85b8X:;9Bb:e;x9ib8W;FQb;hRJb8L9H81b;j9W;ob8W;l:4b:;2pb:Kb:Ibv2;Kb9A;D:Gbh9V9hb9IO;sb:59C:eb9W9H6b9R9w;Gb:z9seb9q9v83b8E;v:3b8Z;X;ebA9U9Fb9D8W;Kb:f8U:Pb5:Y;db:H8YBbw:3:Kb;Q:X;ubQ;3hb:p9P;Kb8NF93bxijb:nnRb9p;n:Gba:L:zb:Z:I;tb8V9Dqb:0;59cbH;A;lb99::;qb:B;B;bb:RL:9b;k:I:bbwf9Cb8U9vLb8Nb9vbuC;Wb;Hr:gbCk9Kb:wc:nb:h::;Eb;ApIb9R8L:2b97:j80bv;Z;:b:5:;:Eb9Of9pb9kI:Ob9p;e9AbR;4:8b;x9A:yb;0;h:vbm9n:nba86:Mb:K9x9FbCZ:XbjU:vb;maebG;D:gb;j;E:2b:;9G;1b9nWHber9Rb:m:W:Sb:Y;a;qb9r9v9ib8E;7Pb:vV;db:Jo87b;an81bo;C97b;GT;mb9o8P;6b;w;k;ib;O;Zcb989K;Eb:B9K;yb;z::8Xb:K:x;db939y;ub9P;J;fb;W;AAb:68688bSKSb9v919Fb;s:9;1b9UM;gb:S8U9DbP9e;Tb38:9cb9H;e:hb8Pp;Pb;N;w;Zbg98;kb9V:r81bw;G;fbF;x:nb9Uf;Ib:Wp;gb:tw;bb989Dtb9R:T:Yb;n9U:Db8:V97b;gHfb;3;p:Pb8P7;Fb:1;j:6b:3b9rb;I:Ymbt:68Kb;L999Gbt;y:kbmX8Sb:bKxb9:9MNbe8PQb:F964bpp::b9wT;Vb;z9:Bb;S;zAb:l:6:5b;e:x;8b8X:O8Nb;X9U;dbN;fBb;y:O9wb:0:O:1b;p;mPbO:jRb9V9x80b8S9w:jb:z;o;Jb;wa:5b9R9E:Qb8:I:CbH9F;mbpk9kb;H;0;7b:o879Tb;I:g8Sb;P;u:eb;8:0:Pb;V;U;rb8U81;jb8V859HbUh9ebE;z;ib:b;8qb;79kfb8V3;yb9t:0:eb9o:z:mb9ug;mbI9v;Cb;a;g;wbkY:wb8A9W:4b9P:v9Kb8M9A9GbZ9s;UbuHsb;0:1Hb;8;l;1b80:8Rb80:8;Ub;O9D;mb;D9E9Gb9N:o:BbM8Z;Vb;jL:4b9H9y:Bb;H9x:8b9r:d;gb;y8:zb;DG9ibR3;Db:VK:Hbh8SSb9z;Z;xb;z96:yb:E9u;ab9p:g;6b9wo;8b;L95:Ub:jgBbU:Tgb9N:t;Cb9v;O:Qb:c8MUb;k;N:Bb9rm:Kb:z8Z:Xb:P;xPb9Pv9ibW:Y;Wbu1:Nb19m:xb;5;rBbhM:Zb97:c9kb:y;phbn:F;Cb;C9h9vb;Ht86b9N;R9cb;::D;Fb9E;u9Fb979N:Kb:6:S96b9v;2:Ib8R18Jbc:69vb9z9UwbhI:gb859h:db:j;J;Mb;L:E;ub6;7nbF9w;Pb3s;kb;f9z:kbN;68Rb;t;b;fbs;f;pb;B9A:Ub9h;f:gb:fJ9Ibh:g87b8S95Nbz9H:hbI9m97bj8S8AbJ:;Ob18M:qb9488:jb:O;e;Kb;L;B97b;e86;cb8M;0;Qb;39N:kbmM:;bW:J8Rb89:t:Xb:998kb:K9r;Cb8N;D9Jb9P;H;Db:ANYb:O8P:vb9O;oybD;T:0b9e:Fab9o:y;kb9W:c9Jb9:988Jbs:58Yb:N;1:obC9w;Nbh;Xwb:1:DIb9V9:9nb:LY9rb:1;5:Rb:c;F;wb:w;D9HbQBdb;e86:Fb:d:I:HbV;T9Tb85:n96b:c:4:Pb9R8Y9CbS8N9Bbb80;Tb;sb93b;8;09vbe9z9nb;GGjbbbbbbbbbbbbn;7h;5ZbbbbR9et8:bbbj:yS;488bbb9G9r;m9487bbbj:dE;W85bbbna8L96Ubbbjg:c;JBbbbb5;Z9P81bc:W:2dkxebbbdbbbn:Bbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,a=WebAssembly.instantiate(n(i),{}).then(function(l){t=l.instance,t.exports.__wasm_call_ctors()});function n(l){for(var d=new Uint8Array(l.length),u=0;u<l.length;++u){var p=l.charCodeAt(u);d[u]=p>96?p-97:p>64?p-39:p+4}for(var x=0,u=0;u<l.length;++u)d[x++]=d[u]<60?e[d[u]]:(d[u]-60)*64+d[++u];return d.buffer.slice(0,x)}function r(l){if(!l)throw new Error("Assertion failed")}function s(l){return new Uint8Array(l.buffer,l.byteOffset,l.byteLength)}function o(l,d,u,p,x,g,b,f,_,w){var m=t.exports.sbrk,M=m(d*16),A=l?m(l.byteLength):0,T=m(u.byteLength),R=m(g.byteLength),v=m(f.byteLength),y=new Uint8Array(t.exports.memory.buffer);l&&y.set(s(l),A),y.set(s(u),T),y.set(s(g),R),y.set(s(f),v),t.exports.meshopt_generateTangents(M,A,d,T,p,x*4,R,b*4,v,_*4,w),y=new Uint8Array(t.exports.memory.buffer);var k=new Float32Array(y.buffer,M,d*4).slice();return m(M-m(0)),k}function c(l,d,u,p,x,g,b){var f=t.exports.sbrk,_=f(d*12),w=l?f(l.byteLength):0,m=f(u.byteLength),M=new Uint8Array(t.exports.memory.buffer);l&&M.set(s(l),w),M.set(s(u),m),t.exports.meshopt_generateNormals(_,w,d,m,p,x*4,g,b),M=new Uint8Array(t.exports.memory.buffer);var A=new Float32Array(M.buffer,_,d*3).slice();return f(_-f(0)),A}var h={Compatible:1,ZeroFallback:2};return{ready:a,supported:!0,generateTangents:function(l,d,u,p,x,g,b,f){r(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),r(l===null||l.length%3==0),r(d instanceof Float32Array),r(d.length%u==0),r(u>=3),r(p instanceof Float32Array),r(p.length%x==0),r(x>=3),r(g instanceof Float32Array),r(g.length%b==0),r(b>=2),r(d.length/u==p.length/x),r(d.length/u==g.length/b),r(l!==null||d.length/u%3==0);for(var _=0,w=0;w<(f?f.length:0);++w)r(f[w]in h),_|=h[f[w]];var m=d.length/u,M=l?l.length:m,A=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return o(A,M,d,m,u,p,x,g,b,_)},generateNormals:function(l,d,u,p,x){r(l===null||l instanceof Uint32Array||l instanceof Int32Array||l instanceof Uint16Array||l instanceof Int16Array),r(l===null||l.length%3==0),r(d instanceof Float32Array),r(d.length%u==0),r(u>=3),r(l!==null||d.length/u%3==0),r(p>=0&&p<=Math.PI),x=x||0;var g=d.length/u,b=l?l.length:g,f=l===null||l.BYTES_PER_ELEMENT==4?l:new Uint32Array(l);return c(f,b,d,g,u,p,x)}}})();var bx=(i,e,t)=>{let a=Math.max(0,Math.min(1,(t-i)/(e-i)));return a*a*(3-2*a)},Lo=class{constructor(e){this.records=[],this.time=0,this.warm=new we("#ff7428");let t=new Set;e.traverse(a=>{let n=a.userData?.sparkIgnition;if(!n?.energy?.length)return;let r=[];if(a.traverse(c=>{c.isMesh&&!t.has(c)&&(t.add(c),r.push(c))}),!r.length)return;let s=[],o=[];for(let c of r){let h=c.material,l=(Array.isArray(h)?h:[h]).map(d=>{let u=d.clone();return u.transparent=!0,u.depthWrite=!1,u.alphaTest=.002,o.push({material:u,color:d.color.clone(),emissive:d.emissive?.clone()||new we(0)}),u});s.push({object:c,material:h}),c.material=Array.isArray(h)?l:l[0]}this.records.push({object:a,data:n,originals:s,materials:o,energy:0})}),this.update(0)}update(e){this.time=Number.isFinite(e)?e:0;for(let t of this.records){let a=t.data,n=(this.time%a.duration+a.duration)%a.duration/a.duration*(a.energy.length-1),r=Math.floor(n),s=n-r,o=Math.max(0,Math.min(1,a.energy[r]*(1-s)+a.energy[Math.min(r+1,a.energy.length-1)]*s));t.energy=o,t.object.visible=o>.015;let c=bx(0,.16,o)*(.35+.65*o),h=.35+.65*Math.sqrt(o);for(let l of t.materials){let d=l.material;d.opacity=c,d.color.copy(l.color).multiplyScalar(h),d.emissive?.setRGB(l.emissive.r+this.warm.r*.025*o,l.emissive.g+this.warm.g*.025*o,l.emissive.b+this.warm.b*.025*o)}}}getState(){return this.records.map(e=>({name:e.object.name,energy:e.energy,visible:e.object.visible,opacity:e.materials[0].material.opacity,brightness:e.materials[0].material.color.r,kind:e.data.kind}))}dispose(){for(let e of this.records){for(let t of e.originals)t.object.material=t.material;e.object.visible=!0;for(let t of e.materials)t.material.dispose()}this.records=[]}};var Fo=class{constructor(e){this.rigidLimbs=!!e.getObjectByName("Sparky_L_DetachedFlameLimb"),this.object=new Zt,this.object.name="Sparky_Interactive_Float",this.object.add(e),this.position=[0,0,0],this.velocity=[0,0,0],this.target=[0,0,0],this.lag=[0,0,0],this.lagVelocity=[0,0,0],this.lastOffset=[0,0,0],this.halo=e.getObjectByName("Sparky_Flame_Follow"),this.crown=e.getObjectByName("Sparky_Crown_Follow"),this.frequencyHz=4.2,this.damping=.76}beforeAnimation(){for(let e=0;e<3;e++)this.halo&&this.halo.position.setComponent(e,this.halo.position.getComponent(e)-this.lastOffset[e]),this.crown&&this.crown.position.setComponent(e,this.crown.position.getComponent(e)-this.lastOffset[e]*.35);this.lastOffset=[0,0,0]}setTarget(e,t,a=0){this.target=[e,t,a].map(n=>Math.max(-.2,Math.min(.2,n)))}release(){this.target=[0,0,0]}impulse(e=0,t=.3,a=0){for(let n=0;n<3;n++)this.velocity[n]=Math.max(-.4,Math.min(.4,this.velocity[n]+[e,t,a][n]))}integrate(e,t,a,n,r,s){let o=2*Math.PI*r,c=o*Math.sqrt(1-s*s),h=Math.exp(-s*o*n),l=Math.cos(c*n),d=Math.sin(c*n),u=h*(l+s*o*d/c),p=h*d/c,x=-h*o*o*d/c,g=h*(l-s*o*d/c);for(let b=0;b<3;b++){let f=e[b]-a[b],_=u*f+p*t[b]+a[b];t[b]=x*f+g*t[b],e[b]=_}}update(e){e=Math.max(0,Math.min(e,.05)),this.integrate(this.position,this.velocity,this.target,e,this.frequencyHz,this.damping),this.integrate(this.lag,this.lagVelocity,this.position,e,3.4,.74),this.object.position.set(...this.position);let t=this.rigidLimbs?1:Math.max(.985,Math.min(1.015,1-this.velocity[1]*.04));this.object.scale.set(1/Math.sqrt(t),t,1/Math.sqrt(t));let a=this.lag.map((r,s)=>r-this.position[s]),n=Math.hypot(...a);n>.018&&(a=a.map(r=>r*.018/n));for(let r=0;r<3;r++)this.halo&&this.halo.position.setComponent(r,this.halo.position.getComponent(r)+a[r]),this.crown&&this.crown.position.setComponent(r,this.crown.position.getComponent(r)+a[r]*.35);this.lastOffset=a}reset(){this.beforeAnimation(),this.position=[0,0,0],this.velocity=[0,0,0],this.target=[0,0,0],this.lag=[0,0,0],this.lagVelocity=[0,0,0],this.object.position.set(0,0,0),this.object.scale.set(1,1,1)}};var Uo=class{constructor(e,t){this.spring=new Fo(e.scene),this.object=this.spring.object,this.mixer=new Ar(this.object),this.spark=new Lo(e.scene),this.object.traverse(a=>{if(a.isMesh)for(let n of Array.isArray(a.material)?a.material:[a.material])n.transparent&&n.side===jt&&(n.forceSinglePass=!0)}),this.animations=new Map(e.animations.map(a=>[a.name,a])),this.manifest=t,this.active=null,this.ambient=null,this.playing=!0,this.ended=!1,this.mixer.addEventListener("finished",a=>{a.action===this.active&&(this.ended=!0)})}play(e,{fade:t=.15,loop:a}={}){let n=this.animations.get(e);if(!n)throw new Error("Unknown animation: "+e);let r=this.active;this.spring.beforeAnimation(),e!=="Idle_Blink"&&e!=="Fire_Ambient"?(this.ambient=this.mixer.clipAction(this.animations.get("Fire_Ambient")),this.ambient.setLoop(Cr,1/0).setEffectiveWeight(1).play()):this.ambient&&(this.ambient.stop(),this.ambient=null);let s=this.manifest.find(h=>h.name===e),o=a??s?.loop??e.endsWith("-loop"),c=this.mixer.clipAction(n);return c.reset().setLoop(o?Cr:Ao,o?1/0:1),c.clampWhenFinished=!0,c.setEffectiveWeight(1).fadeIn(r&&r!==c?t:0).play(),r&&r!==c&&r!==this.ambient&&(r.fadeOut(t),setTimeout(()=>{r!==this.active&&r!==this.ambient&&r.stop()},(t+.08)*1e3)),this.active=c,this.name=e,this.playing=!0,this.ended=!1,c}update(e){this.spring.beforeAnimation(),this.playing&&this.mixer.update(Math.min(e,.05)),this.spring.update(e),this.spark.update(this.ambient?.isRunning()?this.ambient.time:this.active?.time||0)}seek(e){this.spring.reset(),this.mixer.stopAllAction(),this.active.reset().stopFading().setEffectiveWeight(1).play(),this.ambient&&this.ambient!==this.active&&this.ambient.reset().stopFading().setEffectiveWeight(1).play(),this.mixer.setTime(e),this.spark.update(this.ambient?.isRunning()?this.ambient.time:this.active?.time||0),this.object.updateMatrixWorld(!0),this.object.traverse(t=>{t.isSkinnedMesh&&t.skeleton.update()})}dispose(){this.spark.dispose(),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this.object);let e=new Set;this.object.traverse(t=>{if(t.isMesh){e.has(t.geometry)||(e.add(t.geometry),t.geometry.dispose());for(let a of Array.isArray(t.material)?t.material:[t.material])if(!e.has(a)){e.add(a);for(let n of["map","roughnessMap","metalnessMap","normalMap","emissiveMap"])a[n]?.dispose();a.dispose()}}}),this.object.removeFromParent()}};var px=(i,e,t)=>Math.max(e,Math.min(t,i)),Oo=i=>{let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)},zo=class{constructor(e){this.canvas=e,this.c=e.getContext("2d",{alpha:!1}),this.camera=0,this.target=0,this.pan=0,this.time=0,this.moonLit=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.images=[],this.resize(),this.ready=Promise.all(["glowwood","river","moonrise"].map((t,a)=>new Promise((n,r)=>{let s=new Image;s.onload=()=>{this.images[a]=s,n()},s.onerror=()=>r(Error("Background could not load: "+t)),s.src="assets/"+t+".png"})))}resize(){this.w=innerWidth,this.h=innerHeight,this.dpr=Math.min(devicePixelRatio,1.5),this.canvas.width=Math.round(this.w*this.dpr),this.canvas.height=Math.round(this.h*this.dpr),this.scale=this.h/1e3,this.vw=this.w/this.scale}glow(e,t,a,n){let r=this.c,s=r.createRadialGradient(e,t,0,e,t,a);s.addColorStop(0,n),s.addColorStop(1,"#00000000"),r.fillStyle=s,r.fillRect(e-a,t-a,a*2,a*2)}drawScene(e,t,a){let n=this.images[e];if(!n||t<.001)return;let r=this.c,s=this.vw,o=1e3,c=Math.max(s/n.width,o/n.height)*1.13,h=n.width*c,l=n.height*c,d=(s-h)*.5-a,u=(o-l)*.46;r.save(),r.globalAlpha=t,r.drawImage(n,d,u,h,l),r.restore()}render(e){this.time+=this.reduced?0:e,this.camera+=(this.target+this.pan-this.camera)*Math.min(1,e*3.5);let t=this.c,a=this.scale,n=this.vw,r=1e3,s=this.time;t.setTransform(this.dpr*a,0,0,this.dpr*a,0,0),t.fillStyle="#40385b",t.fillRect(0,0,n,r);let o=[Math.max(0,1080-n*.63),Math.max(0,2900-n*.63),Math.max(0,4970-n*.63)],c=this.camera<o[1]?0:1,h=px((this.camera-o[c])/(o[c+1]-o[c]),0,1),l=h*h*(3-2*h);this.drawScene(c,1,h*n*.22+this.pan*.13),this.drawScene(c+1,l,-(1-h)*n*.22+this.pan*.13);let d=t.createLinearGradient(0,0,0,r);d.addColorStop(0,"#171c3855"),d.addColorStop(.5,"#30254600"),d.addColorStop(1,"#15223233"),t.fillStyle=d,t.fillRect(0,0,n,r);for(let u=0;u<44;u++){let p=((Oo(u+5)*(n+200)-this.camera*(.09+u%3*.035)+Math.sin(s*.25+u)*16)%(n+200)+(n+200))%(n+200)-100,x=140+Oo(u+19)*720+Math.sin(s*.7+u)*18,g=.2+.5*(.5+.5*Math.sin(s*.9+u*1.7));t.globalAlpha=g,u%3===0&&this.glow(p,x,17,"#ffd18c44"),t.fillStyle="#ffe4ab",t.beginPath(),t.arc(p,x,u%4===0?2.4:1.25,0,Math.PI*2),t.fill()}if(t.globalAlpha=1,this.moonLit){this.glow(n*.6,230,250,"#ffe9b454");for(let u=0;u<16;u++){let p=n*.3+Oo(u+2)*n*.55,x=120+Oo(u+80)*300;this.glow(p,x,12,"#ffe3a622")}}}};var Wh=[{name:"Idle_Blink",label:"Idle with blink",loop:!0,duration:24},{name:"Hank_Idle_Breath1-loop",label:"Relaxed float",loop:!0,duration:2.0999999046325684},{name:"Hank_Idle_Action1",label:"Idle variation",loop:!1,duration:2.8666679859161377},{name:"Hank_Idle_Action3",label:"Curious idle",loop:!1,duration:4.4000020027160645},{name:"Hank_FeedingReact_Happy1",label:"Happy",loop:!1,duration:5.466667175292969},{name:"Hank_FeedingReact_HappyShort1",label:"Quick happy",loop:!1,duration:2.4333419799804688},{name:"Hank_FeedingReact_Amazed1",label:"Surprised",loop:!1,duration:3.766669988632202},{name:"Hank_FeedingReact_InLove1",label:"Affection",loop:!1,duration:5.833335876464844},{name:"Hank_IslandActions_Celebrate1",label:"Celebrate",loop:!1,duration:1.399999976158142},{name:"Hank_IslandActions_Celebrate2",label:"Cheer",loop:!1,duration:1.3666690587997437},{name:"Hank_Move_Jump1",label:"Hop",loop:!1,duration:.9666681289672852},{name:"Hank_Move_Walk1",label:"Floating walk",loop:!0,duration:.8000000715255737},{name:"Hank_PokeHands_Left1",label:"Left hand reaction",loop:!1,duration:2},{name:"Hank_PokeHands_Right1",label:"Right hand reaction",loop:!1,duration:2},{name:"Hank_NeedSleep_Breath1-loop",label:"Sleepy",loop:!0,duration:2.900001049041748}];var Bo={intro:"Hello, explorer! I'm Sparky. The moon has lost its light, and the forest is falling asleep. Shall we bring the moonlight home?",seeds:"Look! Three sleepy glow seeds. Tap each one to wake it up. Their little lights will help the moon shine again.",seed1:"There's our first little light!",seed2:"Two lights! You're making the forest sparkle.",seedsDone:"We found all three! Even the smallest light can make a big difference. Let's follow the path to the Wishing River.",bridge:"Oh! The stepping stones have drifted away. Put them back in order. One, two, three. You can tap them, or drag them to the matching spaces.",bridgeWrong:"Let's start with the next number. We can do it together!",bridge1:"One! A lovely first step.",bridge2:"Two! Almost across.",bridgeDone:"Three! You built a way across. Come on, explorer. The moon is waiting for us.",moon:"We made it to the moon gate! Who lights up the night sky? Is it the sun, or the moon? Tap your answer, or tell me out loud.",moonWrong:"The sun shines in the daytime. Who comes out at night? Try the other one!",moonDone:"The moon! That's right. Let's send our little lights up to the sky.",outro:"Look! The moon is glowing again. You helped the forest, built a bridge, and brought back the light. Thank you for playing with me. Until our next adventure!",unclear:"I couldn't hear that clearly. You can try again, or tap your answer.",listen:"I'm listening.",hintSeeds:"Find the three glowing seeds. Tap one to give it a little sparkle.",hintBridge:"Look for the next number, then tap it. One, two, three.",hintMoon:"Think about the night sky. What do you see when the sun has gone to sleep?"};var ne=i=>document.getElementById(i),Fa=ne("game"),at=new zo(ne("world")),Vt,Na,Pa,Di,_f=!1,nt="cover",Vo=0,dt=!1,tn=!1,an=!1,Gt=0,yf=performance.now(),Ca=new Set,Zn=0,Yn=0,Ht=null,Go=1/0,Xh=0,jo=0,sa=null,Fr=null,Mf=null,Qn=!1,Ur=!1,Li=null,xx=matchMedia("(prefers-reduced-motion: reduce)").matches,kt;function Or(i=[523,659,784],e=.08){if(!tn)try{kt??(kt=new(window.AudioContext||window.webkitAudioContext)),kt.state==="suspended"&&kt.resume();for(let t=0;t<i.length;t++){let a=kt.createOscillator(),n=kt.createGain();a.type="sine",a.frequency.value=i[t],n.gain.setValueAtTime(0,kt.currentTime+t*.1),n.gain.linearRampToValueAtTime(e,kt.currentTime+t*.1+.025),n.gain.exponentialRampToValueAtTime(.001,kt.currentTime+t*.1+.7),a.connect(n).connect(kt.destination),a.start(kt.currentTime+t*.1),a.stop(kt.currentTime+t*.1+.75)}}catch{}}function Da(){Fr?.abort(),Fr=null,clearTimeout(Mf),Qn=!1;let i=ne("listen");i&&(i.classList.remove("listening"),i.textContent="Speak your answer",i.setAttribute("aria-pressed","false"))}function Ui(){ne("speech-state").textContent="YOUR ADVENTURE BUDDY",jo++,sa&&(sa.pause(),sa=null),speechSynthesis?.cancel(),an=!1}function Ft(i){if(Da(),Ui(),ne("line").textContent=Bo[i]||i,ne("feedback").textContent="",ne("speech-state").textContent="YOUR ADVENTURE BUDDY",Xh=Gt,Ur=!1,tn||dt)return;let e=jo;an=!0,sa=new Audio("audio/"+i+"-natural.mp3"),sa.volume=.8;let t=()=>{e===jo&&(an=!1,ne("speech-state").textContent="YOUR ADVENTURE BUDDY")};sa.onended=t,sa.onerror=()=>{if(e===jo)if("speechSynthesis"in window){let a=new SpeechSynthesisUtterance(Bo[i]||i);a.lang="en-GB",a.rate=.91,a.pitch=1.15,a.onend=t,a.onerror=t,speechSynthesis.speak(a)}else t()},sa.play().catch(t),ne("speech-state").textContent="SPEAKING"}function La(i,e=3){Vt&&(Vt.play(i),Go=Gt+e)}function qh(i=innerWidth*.65,e=innerHeight*.45){for(let t=0;t<18;t++){let a=document.createElement("i");a.className="spark-particle",a.style.left=i+"px",a.style.top=e+"px",a.style.setProperty("--dx",Math.cos(t)*50+Math.random()*100-50+"px"),a.style.setProperty("--dy",-30-Math.random()*110+"px"),ne("effects").append(a),a.addEventListener("animationend",()=>a.remove(),{once:!0}),setTimeout(()=>a.remove(),1300)}}function Fi(i){Yn=Math.max(Yn,i),document.querySelectorAll("[data-light]").forEach((e,t)=>{e.classList.toggle("collected",t<Yn),e.textContent=t<Yn?"\u2726":"\u2727"});try{localStorage.setItem("sparky-lights",String(Yn))}catch{}}function $n(i){try{localStorage.setItem("sparky-checkpoint",i)}catch{}}function nn(i,e){ne("dialogue").hidden=!1,ne("next").hidden=!i,i&&(ne("next").textContent=i+" \u2192",ne("next").onclick=()=>{dt||e()})}function zr(i){Vo=i,document.querySelectorAll("[data-chapter]").forEach((e,t)=>{e.classList.toggle("current",t===i),e.classList.toggle("done",t<i)}),ne("location-text").textContent=["GLOWWOOD \xB7 FOLLOW THE LITTLE LIGHTS","WISHING RIVER \xB7 A WAY TOGETHER","MOONRISE \xB7 A LITTLE MAGIC GOES A LONG WAY"][i]}function Ho(i){let e=[1080,2900,4970][i];return Math.max(0,e-at.vw*.63)}function Kh(i){ne("activity").innerHTML=i,ne("activity").hidden=!1,Xh=Gt,Ur=!1}function Oi(){Da(),ne("activity").hidden=!0,ne("activity").replaceChildren()}function Jh(i,e){if(dt||Ht)return;Ui(),Oi(),nn(null),nt="travel",Fa.classList.add("travelling"),ne("travel-label").hidden=!1,ne("hint").textContent="Follow the path \xB7 swipe to look around",Vt?.play("Story_Travel"),Go=1/0;let t=at.target;Ht={at:Gt,duration:xx?1:4,from:t,to:Ho(i),end:()=>{Ht=null,at.pan=0,zr(i),Fa.classList.remove("travelling"),ne("travel-label").hidden=!0,Vt?.play("Idle_Blink"),e()}},Or([261,329,392],.035)}function wf(){if(!_f)return;Fa.classList.add("playing"),ne("cover").hidden=!0,ne("character").style.opacity="1";let i;try{i=localStorage.getItem("sparky-checkpoint")}catch{}i==="bridge"?(at.target=Ho(1),at.camera=at.target,Fi(1),Af()):i==="moon"?(at.target=Ho(2),at.camera=at.target,Fi(2),Sf()):(nt="intro",zr(0),Ft("intro"),La("Story_Greet",2.5),nn("Let's explore",()=>Jh(0,yx))),ne("hint").textContent="Drag the scenery to peek around"}function yx(){nt="seeds",$n("seeds"),Ca.clear(),Ft("seeds"),nn(null),Kh('<div class="activity-title">WAKE THE THREE GLOW SEEDS</div>'+[0,1,2].map(i=>`<button class="seed" data-seed="${i}" aria-label="Glow seed ${i+1}" style="--delay:-${i}s"><img src="assets/seed.png" alt="" draggable="false"></button>`).join("")),document.querySelectorAll("[data-seed]").forEach(i=>i.onclick=()=>vx(Number(i.dataset.seed),i))}function vx(i,e){if(dt||nt!=="seeds"||Ca.has(i))return;Ca.add(i),e.classList.add("found"),e.disabled=!0;let t=e.getBoundingClientRect();qh(t.x+t.width/2,t.y+t.height/2),Or([523+Ca.size*60,784+Ca.size*60]),La("Hank_FeedingReact_HappyShort1",2.4),Ca.size<3?(Ft("seed"+Ca.size),ne("feedback").textContent=Ca.size+" of 3 glow seeds awake"):(nt="seedsDone",Oi(),Fi(1),Ft("seedsDone"),La("Hank_IslandActions_Celebrate1",1.8),nn("To the river",()=>Jh(1,Af)),$n("bridge"))}function Af(){nt="bridge",$n("bridge"),Zn=0,zr(1),Ft("bridge"),nn(null),Kh('<div class="activity-title">BUILD A WAY ACROSS \xB7 1, 2, 3</div>'+[2,3,1].map((i,e)=>`<button class="crystal" data-stone="${i}" aria-label="Stone ${i}" style="--delay:-${e}s;touch-action:none"><img src="assets/stone.png" alt="" draggable="false"><span class="stone-number">${i}</span></button>`).join("")+'<div class="bridge-slots">'+[1,2,3].map(i=>`<div class="bridge-slot" data-slot="${i}" aria-label="Space ${i}">${i}</div>`).join("")+"</div>"),document.querySelectorAll("[data-stone]").forEach(i=>{let e=null,t=!1;i.onpointerdown=a=>{dt||(e={x:a.clientX,y:a.clientY},t=!1,i.setPointerCapture(a.pointerId))},i.onpointermove=a=>{if(!e)return;let n=a.clientX-e.x,r=a.clientY-e.y;Math.hypot(n,r)>8&&(t=!0,i.style.transform=`translate(${n}px,${r}px)`,i.style.animation="none")},i.onpointerup=a=>{if(e&&(i.style.transform="",i.style.animation="",e=null,t)){let n=document.querySelector('[data-slot="'+(Zn+1)+'"]');if(n){let r=n.getBoundingClientRect();a.clientX>r.left-30&&a.clientX<r.right+30&&a.clientY>r.top-40&&a.clientY<r.bottom+40?vf(Number(i.dataset.stone),i):ne("feedback").textContent="Drop it on the next numbered space, or tap the stone."}}},i.onpointercancel=()=>{e=null,i.style.transform="",i.style.animation=""},i.onclick=()=>{t||vf(Number(i.dataset.stone),i)}})}function vf(i,e){if(!(dt||nt!=="bridge"||e.disabled)){if(i!==Zn+1){Ft("bridgeWrong"),ne("feedback").textContent="Next, find number "+(Zn+1)+".",La("Hank_Idle_Action3",2.3);return}Zn++,e.classList.add("used"),e.disabled=!0,document.querySelector('[data-slot="'+i+'"]').classList.add("filled"),Or([392+i*65,523+i*65]),La(i%2?"Hank_PokeHands_Right1":"Hank_PokeHands_Left1",1.7),i<3?Ft("bridge"+i):(nt="bridgeDone",Oi(),Fi(2),Ft("bridgeDone"),La("Hank_IslandActions_Celebrate2",1.7),nn("Follow the moonlight",()=>Jh(2,Sf)),$n("moon"))}}function Sf(){nt="moon",$n("moon"),zr(2),Ft("moon"),nn(null),Kh('<div class="activity-title">WHO LIGHTS UP THE NIGHT SKY?</div>'+["sun","moon"].map((e,t)=>`<button class="sky-choice" data-answer="${e}" aria-label="${e==="sun"?"The sun":"The moon"}" style="--delay:-${t}s"><img src="assets/${e}.png" alt="" draggable="false"></button>`).join("")+'<div class="voice-controls"><button id="listen" class="primary" aria-pressed="false">Speak your answer</button><span class="voice-note" id="voice-note">Or tap your answer above</span></div>'),document.querySelectorAll("[data-answer]").forEach(e=>e.onclick=()=>Yh(e.dataset.answer)),ne("listen").onclick=_x,window.SpeechRecognition||window.webkitSpeechRecognition||(ne("listen").hidden=!0,ne("voice-note").textContent="Voice is unavailable in this browser. Tap your answer.")}function Yh(i){if(dt||nt!=="moon")return;Da();let e=i.toLowerCase().replace(/[^a-z ]/g," ").trim();/\b(moon|moonlight)\b/.test(e)&&!/\bsun\b/.test(e)&&!/^\s*(not|no)\b/.test(e)?(nt="moonDone",Oi(),Fi(3),at.moonLit=!0,Or([523,659,784,1046]),qh(),Ft("moonDone"),La("Hank_IslandActions_Celebrate1",2),nn("Send our lights home",Mx),$n("ending")):/\bsun\b/.test(e)?(Ft("moonWrong"),ne("feedback").textContent="Have another look. You can do this!",La("Hank_Idle_Action3",2)):(Ft("unclear"),ne("feedback").textContent="I heard: \u201C"+i.slice(0,60)+"\u201D. Try saying \u201Cthe moon\u201D, or tap it.")}function _x(){if(dt||nt!=="moon")return;if(Qn){Da();return}let i=window.SpeechRecognition||window.webkitSpeechRecognition;if(!i)return;Ui(),ne("line").textContent="Who lights up the night sky? I\u2019m listening\u2026",ne("feedback").textContent="",Qn=!0;let e=ne("listen");e.textContent="Listening\u2026 tap to stop",e.classList.add("listening"),e.setAttribute("aria-pressed","true"),La("Story_Listen",2.4),ne("speech-state").textContent="LISTENING";let t=Fr=new i;t.lang="en-US",t.continuous=!1,t.interimResults=!1,t.maxAlternatives=3,t.onresult=a=>{let n=a.results[0][0]?.transcript||"";Yh(n)},t.onerror=a=>{t===Fr&&(Da(),ne("speech-state").textContent="YOUR ADVENTURE BUDDY",ne("feedback").textContent=a.error==="not-allowed"?"Microphone access was not allowed. You can tap your answer.":a.error==="network"?"Voice recognition could not connect. Try again, or tap your answer.":"I couldn\u2019t hear clearly. Try again, or tap your answer.")},t.onend=()=>{t===Fr&&(Da(),ne("speech-state").textContent="YOUR ADVENTURE BUDDY",nt==="moon"&&!ne("feedback").textContent&&(ne("feedback").textContent="Try again, or tap your answer."))};try{t.start(),Mf=setTimeout(()=>{Qn&&(Da(),ne("feedback").textContent="Take your time. Tap the microphone to try again, or choose a picture.",ne("speech-state").textContent="YOUR ADVENTURE BUDDY")},9e3)}catch{Da(),ne("feedback").textContent="Voice could not start. Please tap your answer."}}function Mx(){nt="outro",at.moonLit=!0,Oi(),Ft("outro"),La("Hank_FeedingReact_Happy1",5),nn("Our adventure is complete",()=>{ne("ending").hidden=!1,Ui(),Or([523,659,784,1046])}),$n("complete"),ne("hint").textContent="A little kindness makes the world brighter";for(let i=0;i<3;i++)setTimeout(()=>qh(innerWidth*(.35+i*.18),innerHeight*.35),i*450)}function Zh(){Ui(),Da();try{localStorage.removeItem("sparky-checkpoint"),localStorage.removeItem("sparky-lights")}catch{}Yn=0,Fi(0),at.moonLit=!1,at.target=0,at.camera=0,at.pan=0,Ht=null,nt="cover",Vo=0,dt=!1,Ca.clear(),Zn=0,Fa.classList.remove("playing","travelling","paused"),ne("ending").hidden=!0,ne("pause-screen").hidden=!0,ne("pause").setAttribute("aria-label","Pause adventure"),ne("pause").textContent="\u2161",ne("cover").hidden=!1,ne("dialogue").hidden=!0,ne("travel-label").hidden=!0,Oi(),zr(0),ne("location-text").textContent="GLOWWOOD \xB7 WHERE THE STORY BEGINS",ne("start").textContent="Start our adventure \u2726",ne("hint").textContent="A world of little wonders awaits",Vt?.play("Idle_Blink")}function Wo(){nt==="cover"||nt==="outro"&&!ne("ending").hidden||(dt=!dt,ne("pause-screen").hidden=!dt,Fa.classList.toggle("paused",dt),ne("pause").textContent=dt?"\u25B6":"\u2161",ne("pause").setAttribute("aria-label",dt?"Resume adventure":"Pause adventure"),dt?(Da(),sa?.pause(),an=!1,kt?.suspend()):(kt?.resume(),sa&&!sa.ended&&(an=!0,sa.play().catch(()=>{an=!1}))))}ne("start").onclick=wf;ne("pause").onclick=Wo;ne("resume").onclick=Wo;ne("restart").onclick=Zh;ne("again").onclick=Zh;ne("repeat").onclick=()=>{if(dt)return;let i={intro:"intro",seeds:"seeds",seedsDone:"seedsDone",bridge:"bridge",bridgeDone:"bridgeDone",moon:"moon",moonDone:"moonDone",outro:"outro"};i[nt]&&Ft(i[nt])};ne("sound").onclick=()=>{tn=!tn,ne("sound").textContent=tn?"\u266A":"\u266B",ne("sound").setAttribute("aria-label",tn?"Enable sound":"Mute sound"),ne("sound").setAttribute("aria-pressed",String(tn)),ne("sound").title=tn?"Sound off":"Sound on",tn?(Ui(),kt?.suspend()):kt?.resume()};Fa.addEventListener("pointerdown",i=>{dt||Ht||nt==="cover"||i.target.closest("button,a,#dialogue,#activity,header")||(Li={x:i.clientX,pan:at.pan,id:i.pointerId},Fa.setPointerCapture(i.pointerId))});Fa.addEventListener("pointermove",i=>{Li&&(at.pan=Math.max(-220,Math.min(220,Li.pan+(Li.x-i.clientX)/at.scale)))});Fa.addEventListener("pointerup",()=>{Li=null});Fa.addEventListener("pointercancel",()=>{Li=null});document.addEventListener("keydown",i=>{i.key==="Escape"&&Wo(),!dt&&!Ht&&nt!=="cover"&&(i.key==="ArrowRight"&&(at.pan=Math.min(220,at.pan+65)),i.key==="ArrowLeft"&&(at.pan=Math.max(-220,at.pan-65)))});function Qh(){if(at.resize(),Na){let i=ne("sparky"),e=i.clientWidth,t=i.clientHeight;Na.setSize(e,t,!1);let a=.74;Pa.left=-a*e/t,Pa.right=a*e/t,Pa.top=a,Pa.bottom=-a,Pa.updateProjectionMatrix()}nt!=="cover"&&!Ht&&(at.target=Ho(Vo))}window.addEventListener("resize",Qh);new ResizeObserver(()=>{Na&&Qh()}).observe(ne("character"));async function wx(){Na=new ko({canvas:ne("sparky"),alpha:!0,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!0}),Na.setPixelRatio(Math.min(devicePixelRatio,1.5)),Na.outputColorSpace=ut,Na.toneMapping=Bs,Na.setClearColor(0,0),Di=new sr,Di.add(new yr(16774627,7630493,2.5));for(let[t,a,n]of[[16773066,2.6,[-3,5,4]],[12113896,.8,[4,2,3]],[16758932,1.3,[2,3,-3]]]){let r=new On(t,a);r.position.set(...n),Di.add(r)}Pa=new Ja(-1,1,1,-1,.001,30),Pa.position.set(.15,.015,3),Pa.lookAt(0,.015,0),await at.ready;let i=await new Po().setMeshoptDecoder(xf).loadAsync("assets/sparky.glb");for(let[t,a]of[["Story_Travel","Hank_Move_Walk1"],["Story_Greet","Hank_FeedingReact_HappyShort1"],["Story_Listen","Hank_Idle_Action3"]]){let n=i.animations.find(r=>r.name===a).clone();n.name=t,i.animations.push(n),Wh.push({name:t,loop:t==="Story_Travel",duration:n.duration})}Vt=new Uo(i,Wh),Di.add(Vt.object),Vt.play("Idle_Blink"),Qh(),_f=!0,ne("start").disabled=!1;let e;try{e=localStorage.getItem("sparky-checkpoint")}catch{}ne("start").textContent=e&&e!=="complete"?"Continue our adventure ?":"Start our adventure \u2726",window.sparkyAdventure={get phase(){return nt},get chapter(){return Vo},get lights(){return Yn},get paused(){return dt},get seeds(){return Ca.size},get bridgeCount(){return Zn},get speaking(){return an},get listening(){return Qn},world:at,player:Vt,renderer:Na,scene:Di,camera:Pa,start:wf,restart:Zh,answer:Yh,lines:Bo}}function Ef(i){requestAnimationFrame(Ef);let e=Math.min((i-yf)/1e3,.05);if(yf=i,!dt){if(Gt+=e,Ht){let t=Math.min(1,(Gt-Ht.at)/Ht.duration),a=t*t*(3-2*t);at.target=Ht.from+(Ht.to-Ht.from)*a,t>=1&&Ht.end()}if(at.render(e),Vt){Vt.update(e);let t=Vt.object;if(t.rotation.z=nt==="travel"?Math.sin(Gt*3)*.025:Math.sin(Gt*.8)*.009,t.rotation.y=nt==="travel"?.16:Math.sin(Gt*.5)*.025,Gt>=Go&&(Vt.play("Idle_Blink"),Go=1/0),an){let a=Math.max(0,Math.sin(Gt*13)*.19+Math.sin(Gt*19)*.1+.2);t.traverse(n=>{n.isMesh&&n.morphTargetDictionary?.Mouth_Open!==void 0&&(n.morphTargetInfluences.fill(0),n.morphTargetInfluences[n.morphTargetDictionary.Mouth_Quarter]=a*.75,n.morphTargetInfluences[n.morphTargetDictionary.Mouth_Half]=a*.25)})}else t.traverse(a=>{a.isMesh&&a.morphTargetDictionary?.Mouth_Open!==void 0&&Vt.name==="Idle_Blink"&&a.morphTargetInfluences.fill(0)}),Qn&&(t.rotation.z=Math.sin(Gt*1.5)*.018-.045);Na.render(Di,Pa)}if(!Ur&&!an&&!Qn&&Gt-Xh>23&&["seeds","bridge","moon"].includes(nt)){Ur=!0;let t={seeds:"hintSeeds",bridge:"hintBridge",moon:"hintMoon"}[nt];Ft(t),Ur=!0}}}wx().catch(i=>{ne("start").disabled=!0,ne("start").textContent="Please reload to try again",ne("error").hidden=!1,ne("error").textContent="Sparky could not load. Please reload this page. "+i.message,console.error(i)});requestAnimationFrame(Ef);document.addEventListener("visibilitychange",()=>{document.hidden&&nt!=="cover"&&!dt&&ne("ending").hidden&&Wo()});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
