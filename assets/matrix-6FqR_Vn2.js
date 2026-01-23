const nf=2;const en="srgb",ei="srgb-linear",Ki="linear",wt="srgb";const Xr="300 es";function ks(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lo(){const i=mi("canvas");return i.style.display="block",i}const qr={};function jr(...i){const e="THREE."+i.shift();console.log(e,...i)}function tt(...i){const e="THREE."+i.shift();console.warn(e,...i)}function xt(...i){const e="THREE."+i.shift();console.error(e,...i)}function gi(...i){const e=i.join(" ");e in qr||(qr[e]=!0,tt(...i))}function co(i,e,t){return new Promise(function(n,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:n()}}setTimeout(l,t)})}class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yi=Math.PI/180,Or=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function uo(i,e){return(i%e+e)%e}function rr(i,e,t){return(1-t)*i+t*e}function oi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*n-u*s+e.x,this.y=l*s+u*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Si{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,l,u,h){let p=n[s+0],d=n[s+1],m=n[s+2],_=n[s+3],v=l[u+0],S=l[u+1],b=l[u+2],R=l[u+3];if(h<=0){e[t+0]=p,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h>=1){e[t+0]=v,e[t+1]=S,e[t+2]=b,e[t+3]=R;return}if(_!==R||p!==v||d!==S||m!==b){let M=p*v+d*S+m*b+_*R;M<0&&(v=-v,S=-S,b=-b,R=-R,M=-M);let x=1-h;if(M<.9995){const I=Math.acos(M),F=Math.sin(I);x=Math.sin(x*I)/F,h=Math.sin(h*I)/F,p=p*x+v*h,d=d*x+S*h,m=m*x+b*h,_=_*x+R*h}else{p=p*x+v*h,d=d*x+S*h,m=m*x+b*h,_=_*x+R*h;const I=1/Math.sqrt(p*p+d*d+m*m+_*_);p*=I,d*=I,m*=I,_*=I}}e[t]=p,e[t+1]=d,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,n,s,l,u){const h=n[s],p=n[s+1],d=n[s+2],m=n[s+3],_=l[u],v=l[u+1],S=l[u+2],b=l[u+3];return e[t]=h*b+m*_+p*S-d*v,e[t+1]=p*b+m*v+d*_-h*S,e[t+2]=d*b+m*S+h*v-p*_,e[t+3]=m*b-h*_-p*v-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,l=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(n/2),m=h(s/2),_=h(l/2),v=p(n/2),S=p(s/2),b=p(l/2);switch(u){case"XYZ":this._x=v*m*_+d*S*b,this._y=d*S*_-v*m*b,this._z=d*m*b+v*S*_,this._w=d*m*_-v*S*b;break;case"YXZ":this._x=v*m*_+d*S*b,this._y=d*S*_-v*m*b,this._z=d*m*b-v*S*_,this._w=d*m*_+v*S*b;break;case"ZXY":this._x=v*m*_-d*S*b,this._y=d*S*_+v*m*b,this._z=d*m*b+v*S*_,this._w=d*m*_-v*S*b;break;case"ZYX":this._x=v*m*_-d*S*b,this._y=d*S*_+v*m*b,this._z=d*m*b-v*S*_,this._w=d*m*_+v*S*b;break;case"YZX":this._x=v*m*_+d*S*b,this._y=d*S*_+v*m*b,this._z=d*m*b-v*S*_,this._w=d*m*_-v*S*b;break;case"XZY":this._x=v*m*_-d*S*b,this._y=d*S*_-v*m*b,this._z=d*m*b+v*S*_,this._w=d*m*_+v*S*b;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],l=t[8],u=t[1],h=t[5],p=t[9],d=t[2],m=t[6],_=t[10],v=n+h+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-p)*S,this._y=(l-d)*S,this._z=(u-s)*S}else if(n>h&&n>_){const S=2*Math.sqrt(1+n-h-_);this._w=(m-p)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(l+d)/S}else if(h>_){const S=2*Math.sqrt(1+h-n-_);this._w=(l-d)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(p+m)/S}else{const S=2*Math.sqrt(1+_-n-h);this._w=(u-s)/S,this._x=(l+d)/S,this._y=(p+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,l=e._z,u=e._w,h=t._x,p=t._y,d=t._z,m=t._w;return this._x=n*m+u*h+s*d-l*p,this._y=s*m+u*p+l*h-n*d,this._z=l*m+u*d+n*p-s*h,this._w=u*m-n*h-s*p-l*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(n=-n,s=-s,l=-l,u=-u,h=-h);let p=1-t;if(h<.9995){const d=Math.acos(h),m=Math.sin(d);p=Math.sin(p*d)/m,t=Math.sin(t*d)/m,this._x=this._x*p+n*t,this._y=this._y*p+s*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+n*t,this._y=this._y*p+s*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),l=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*n+l[6]*s,this.y=l[1]*t+l[4]*n+l[7]*s,this.z=l[2]*t+l[5]*n+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*n+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*n+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*n+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*n+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,l=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*s-h*n),m=2*(h*t-l*s),_=2*(l*n-u*t);return this.x=t+p*d+u*_-h*m,this.y=n+p*m+h*d-l*_,this.z=s+p*_+l*m-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s,this.y=l[1]*t+l[5]*n+l[9]*s,this.z=l[2]*t+l[6]*n+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,l=e.z,u=t.x,h=t.y,p=t.z;return this.x=s*p-l*h,this.y=l*u-n*p,this.z=n*h-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sr.copy(this).projectOnVector(e),this.sub(sr)}reflect(e){return this.sub(sr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new Z,Yr=new Si;class ot{constructor(e,t,n,s,l,u,h,p,d){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,l,u,h,p,d)}set(e,t,n,s,l,u,h,p,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=h,m[3]=t,m[4]=l,m[5]=p,m[6]=n,m[7]=u,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,l=this.elements,u=n[0],h=n[3],p=n[6],d=n[1],m=n[4],_=n[7],v=n[2],S=n[5],b=n[8],R=s[0],M=s[3],x=s[6],I=s[1],F=s[4],U=s[7],O=s[2],G=s[5],k=s[8];return l[0]=u*R+h*I+p*O,l[3]=u*M+h*F+p*G,l[6]=u*x+h*U+p*k,l[1]=d*R+m*I+_*O,l[4]=d*M+m*F+_*G,l[7]=d*x+m*U+_*k,l[2]=v*R+S*I+b*O,l[5]=v*M+S*F+b*G,l[8]=v*x+S*U+b*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],m=e[8];return t*u*m-t*h*d-n*l*m+n*h*p+s*l*d-s*u*p}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],m=e[8],_=m*u-h*d,v=h*p-m*l,S=d*l-u*p,b=t*_+n*v+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(s*d-m*n)*R,e[2]=(h*n-s*u)*R,e[3]=v*R,e[4]=(m*t-s*p)*R,e[5]=(s*l-h*t)*R,e[6]=S*R,e[7]=(n*p-d*t)*R,e[8]=(u*t-n*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,l,u,h){const p=Math.cos(l),d=Math.sin(l);return this.set(n*p,n*d,-n*(p*u+d*h)+u+e,-s*d,s*p,-s*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const or=new ot,$r=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kr=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ho(){const i={enabled:!0,workingColorSpace:ei,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===wt&&(s.r=Sn(s.r),s.g=Sn(s.g),s.b=Sn(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===wt&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===""?Ki:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ei]:{primaries:e,whitePoint:n,transfer:Ki,toXYZ:$r,fromXYZ:Kr,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:$r,fromXYZ:Kr,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}const pt=ho();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class fo{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gn===void 0&&(Gn=mi("canvas")),Gn.width=e.width,Gn.height=e.height;const s=Gn.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Sn(l[u]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let po=0;class zr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:po++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,h=s.length;u<h;u++)s[u].isDataTexture?l.push(ar(s[u].image)):l.push(ar(s[u]))}else l=ar(s);n.url=l}return t||(e.images[this.uuid]=n),n}}function ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let mo=0;const lr=new Z;class kt extends ni{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=1001,s=1001,l=1006,u=1008,h=1023,p=1009,d=kt.DEFAULT_ANISOTROPY,m=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mo++}),this.uuid=vi(),this.name="",this.source=new zr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lr).x}get height(){return this.source.getSize(lr).y}get depth(){return this.source.getSize(lr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=300;kt.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,n=0,s=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*n+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*n+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*n+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*n+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,l;const p=e.elements,d=p[0],m=p[4],_=p[8],v=p[1],S=p[5],b=p[9],R=p[2],M=p[6],x=p[10];if(Math.abs(m-v)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(d+1)/2,U=(S+1)/2,O=(x+1)/2,G=(m+v)/4,k=(_+R)/4,Q=(b+M)/4;return F>U&&F>O?F<.01?(n=0,s=.707106781,l=.707106781):(n=Math.sqrt(F),s=G/n,l=k/n):U>O?U<.01?(n=.707106781,s=0,l=.707106781):(s=Math.sqrt(U),n=G/s,l=Q/s):O<.01?(n=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),n=k/l,s=Q/l),this.set(n,s,l,t),this}let I=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(v-m)*(v-m));return Math.abs(I)<.001&&(I=1),this.x=(M-b)/I,this.y=(_-R)/I,this.z=(v-m)/I,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class go extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const s={width:e,height:t,depth:n.depth},l=new kt(s);this.textures=[];const u=n.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends go{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hs extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _o extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mi{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const l=n.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,rn):rn.fromBufferAttribute(l,u),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yi.copy(n.boundingBox)),yi.applyMatrix4(e.matrixWorld),this.union(yi)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ai),Ti.subVectors(this.max,ai),zn.subVectors(e.a,ai),Vn.subVectors(e.b,ai),kn.subVectors(e.c,ai),yn.subVectors(Vn,zn),Tn.subVectors(kn,Vn),Dn.subVectors(zn,kn);let t=[0,-yn.z,yn.y,0,-Tn.z,Tn.y,0,-Dn.z,Dn.y,yn.z,0,-yn.x,Tn.z,0,-Tn.x,Dn.z,0,-Dn.x,-yn.y,yn.x,0,-Tn.y,Tn.x,0,-Dn.y,Dn.x,0];return!cr(t,zn,Vn,kn,Ti)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,zn,Vn,kn,Ti))?!1:(wi.crossVectors(yn,Tn),t=[wi.x,wi.y,wi.z],cr(t,zn,Vn,kn,Ti))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const mn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],rn=new Z,yi=new Mi,zn=new Z,Vn=new Z,kn=new Z,yn=new Z,Tn=new Z,Dn=new Z,ai=new Z,Ti=new Z,wi=new Z,Ln=new Z;function cr(i,e,t,n,s){for(let l=0,u=i.length-3;l<=u;l+=3){Ln.fromArray(i,l);const h=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),p=e.dot(Ln),d=t.dot(Ln),m=n.dot(Ln);if(Math.max(-Math.max(p,d,m),Math.min(p,d,m))>h)return!1}return!0}const xo=new Mi,li=new Z,ur=new Z;class Qi{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xo.setFromPoints(e).getCenter(n);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,n.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;li.subVectors(e,this.center);const t=li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(li,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(li.copy(e.center).add(ur)),this.expandByPoint(li.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const gn=new Z,hr=new Z,bi=new Z,wn=new Z,fr=new Z,Ai=new Z,dr=new Z;class Ws{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hr.copy(e).add(t).multiplyScalar(.5),bi.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(hr);const l=e.distanceTo(t)*.5,u=-this.direction.dot(bi),h=wn.dot(this.direction),p=-wn.dot(bi),d=wn.lengthSq(),m=Math.abs(1-u*u);let _,v,S,b;if(m>0)if(_=u*p-h,v=u*h-p,b=l*m,_>=0)if(v>=-b)if(v<=b){const R=1/m;_*=R,v*=R,S=_*(_+u*v+2*h)+v*(u*_+v+2*p)+d}else v=l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;else v=-l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;else v<=-b?(_=Math.max(0,-(-u*l+h)),v=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+d):v<=b?(_=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+d):(_=Math.max(0,-(u*l+h)),v=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+d);else v=u>0?-l:l,_=Math.max(0,-(u*v+h)),S=-_*_+v*(v+2*p)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(hr).addScaledVector(bi,v),S}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const n=gn.dot(this.direction),s=gn.dot(gn)-n*n,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),h=n-u,p=n+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,l,u,h,p;const d=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(n=(e.min.x-v.x)*d,s=(e.max.x-v.x)*d):(n=(e.max.x-v.x)*d,s=(e.min.x-v.x)*d),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),n>u||l>s||((l>n||isNaN(n))&&(n=l),(u<s||isNaN(s))&&(s=u),_>=0?(h=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(h=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),n>p||h>s)||((h>n||n!==n)&&(n=h),(p<s||s!==s)&&(s=p),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,n,s,l){fr.subVectors(t,e),Ai.subVectors(n,e),dr.crossVectors(fr,Ai);let u=this.direction.dot(dr),h;if(u>0){if(s)return null;h=1}else if(u<0)h=-1,u=-u;else return null;wn.subVectors(this.origin,e);const p=h*this.direction.dot(Ai.crossVectors(wn,Ai));if(p<0)return null;const d=h*this.direction.dot(fr.cross(wn));if(d<0||p+d>u)return null;const m=-h*wn.dot(dr);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,s,l,u,h,p,d,m,_,v,S,b,R,M){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,l,u,h,p,d,m,_,v,S,b,R,M)}set(e,t,n,s,l,u,h,p,d,m,_,v,S,b,R,M){const x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=s,x[1]=l,x[5]=u,x[9]=h,x[13]=p,x[2]=d,x[6]=m,x[10]=_,x[14]=v,x[3]=S,x[7]=b,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Hn.setFromMatrixColumn(e,0).length(),l=1/Hn.setFromMatrixColumn(e,1).length(),u=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*l,t[5]=n[5]*l,t[6]=n[6]*l,t[7]=0,t[8]=n[8]*u,t[9]=n[9]*u,t[10]=n[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,l=e.z,u=Math.cos(n),h=Math.sin(n),p=Math.cos(s),d=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*m,S=u*_,b=h*m,R=h*_;t[0]=p*m,t[4]=-p*_,t[8]=d,t[1]=S+b*d,t[5]=v-R*d,t[9]=-h*p,t[2]=R-v*d,t[6]=b+S*d,t[10]=u*p}else if(e.order==="YXZ"){const v=p*m,S=p*_,b=d*m,R=d*_;t[0]=v+R*h,t[4]=b*h-S,t[8]=u*d,t[1]=u*_,t[5]=u*m,t[9]=-h,t[2]=S*h-b,t[6]=R+v*h,t[10]=u*p}else if(e.order==="ZXY"){const v=p*m,S=p*_,b=d*m,R=d*_;t[0]=v-R*h,t[4]=-u*_,t[8]=b+S*h,t[1]=S+b*h,t[5]=u*m,t[9]=R-v*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const v=u*m,S=u*_,b=h*m,R=h*_;t[0]=p*m,t[4]=b*d-S,t[8]=v*d+R,t[1]=p*_,t[5]=R*d+v,t[9]=S*d-b,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*d,b=h*p,R=h*d;t[0]=p*m,t[4]=R-v*_,t[8]=b*_+S,t[1]=_,t[5]=u*m,t[9]=-h*m,t[2]=-d*m,t[6]=S*_+b,t[10]=v-R*_}else if(e.order==="XZY"){const v=u*p,S=u*d,b=h*p,R=h*d;t[0]=p*m,t[4]=-_,t[8]=d*m,t[1]=v*_+R,t[5]=u*m,t[9]=S*_-b,t[2]=b*_-S,t[6]=h*m,t[10]=R*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vo,e,So)}lookAt(e,t,n){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),bn.crossVectors(n,Kt),bn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),bn.crossVectors(n,Kt)),bn.normalize(),Ri.crossVectors(Kt,bn),s[0]=bn.x,s[4]=Ri.x,s[8]=Kt.x,s[1]=bn.y,s[5]=Ri.y,s[9]=Kt.y,s[2]=bn.z,s[6]=Ri.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,l=this.elements,u=n[0],h=n[4],p=n[8],d=n[12],m=n[1],_=n[5],v=n[9],S=n[13],b=n[2],R=n[6],M=n[10],x=n[14],I=n[3],F=n[7],U=n[11],O=n[15],G=s[0],k=s[4],Q=s[8],A=s[12],D=s[1],j=s[5],ne=s[9],ee=s[13],ce=s[2],ue=s[6],ie=s[10],se=s[14],me=s[3],Oe=s[7],Ce=s[11],Be=s[15];return l[0]=u*G+h*D+p*ce+d*me,l[4]=u*k+h*j+p*ue+d*Oe,l[8]=u*Q+h*ne+p*ie+d*Ce,l[12]=u*A+h*ee+p*se+d*Be,l[1]=m*G+_*D+v*ce+S*me,l[5]=m*k+_*j+v*ue+S*Oe,l[9]=m*Q+_*ne+v*ie+S*Ce,l[13]=m*A+_*ee+v*se+S*Be,l[2]=b*G+R*D+M*ce+x*me,l[6]=b*k+R*j+M*ue+x*Oe,l[10]=b*Q+R*ne+M*ie+x*Ce,l[14]=b*A+R*ee+M*se+x*Be,l[3]=I*G+F*D+U*ce+O*me,l[7]=I*k+F*j+U*ue+O*Oe,l[11]=I*Q+F*ne+U*ie+O*Ce,l[15]=I*A+F*ee+U*se+O*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],l=e[12],u=e[1],h=e[5],p=e[9],d=e[13],m=e[2],_=e[6],v=e[10],S=e[14],b=e[3],R=e[7],M=e[11],x=e[15],I=p*S-d*v,F=h*S-d*_,U=h*v-p*_,O=u*S-d*m,G=u*v-p*m,k=u*_-h*m;return t*(R*I-M*F+x*U)-n*(b*I-M*O+x*G)+s*(b*F-R*O+x*k)-l*(b*U-R*G+M*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],m=e[8],_=e[9],v=e[10],S=e[11],b=e[12],R=e[13],M=e[14],x=e[15],I=_*M*d-R*v*d+R*p*S-h*M*S-_*p*x+h*v*x,F=b*v*d-m*M*d-b*p*S+u*M*S+m*p*x-u*v*x,U=m*R*d-b*_*d+b*h*S-u*R*S-m*h*x+u*_*x,O=b*_*p-m*R*p-b*h*v+u*R*v+m*h*M-u*_*M,G=t*I+n*F+s*U+l*O;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/G;return e[0]=I*k,e[1]=(R*v*l-_*M*l-R*s*S+n*M*S+_*s*x-n*v*x)*k,e[2]=(h*M*l-R*p*l+R*s*d-n*M*d-h*s*x+n*p*x)*k,e[3]=(_*p*l-h*v*l-_*s*d+n*v*d+h*s*S-n*p*S)*k,e[4]=F*k,e[5]=(m*M*l-b*v*l+b*s*S-t*M*S-m*s*x+t*v*x)*k,e[6]=(b*p*l-u*M*l-b*s*d+t*M*d+u*s*x-t*p*x)*k,e[7]=(u*v*l-m*p*l+m*s*d-t*v*d-u*s*S+t*p*S)*k,e[8]=U*k,e[9]=(b*_*l-m*R*l-b*n*S+t*R*S+m*n*x-t*_*x)*k,e[10]=(u*R*l-b*h*l+b*n*d-t*R*d-u*n*x+t*h*x)*k,e[11]=(m*h*l-u*_*l-m*n*d+t*_*d+u*n*S-t*h*S)*k,e[12]=O*k,e[13]=(m*R*s-b*_*s+b*n*v-t*R*v-m*n*M+t*_*M)*k,e[14]=(b*h*s-u*R*s-b*n*p+t*R*p+u*n*M-t*h*M)*k,e[15]=(u*_*s-m*h*s+m*n*p-t*_*p-u*n*v+t*h*v)*k,this}scale(e){const t=this.elements,n=e.x,s=e.y,l=e.z;return t[0]*=n,t[4]*=s,t[8]*=l,t[1]*=n,t[5]*=s,t[9]*=l,t[2]*=n,t[6]*=s,t[10]*=l,t[3]*=n,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),l=1-n,u=e.x,h=e.y,p=e.z,d=l*u,m=l*h;return this.set(d*u+n,d*h-s*p,d*p+s*h,0,d*h+s*p,m*h+n,m*p-s*u,0,d*p-s*h,m*p+s*u,l*p*p+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,l,u){return this.set(1,n,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,l=t._x,u=t._y,h=t._z,p=t._w,d=l+l,m=u+u,_=h+h,v=l*d,S=l*m,b=l*_,R=u*m,M=u*_,x=h*_,I=p*d,F=p*m,U=p*_,O=n.x,G=n.y,k=n.z;return s[0]=(1-(R+x))*O,s[1]=(S+U)*O,s[2]=(b-F)*O,s[3]=0,s[4]=(S-U)*G,s[5]=(1-(v+x))*G,s[6]=(M+I)*G,s[7]=0,s[8]=(b+F)*k,s[9]=(M-I)*k,s[10]=(1-(v+R))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let l=Hn.set(s[0],s[1],s[2]).length();const u=Hn.set(s[4],s[5],s[6]).length(),h=Hn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),sn.copy(this);const d=1/l,m=1/u,_=1/h;return sn.elements[0]*=d,sn.elements[1]*=d,sn.elements[2]*=d,sn.elements[4]*=m,sn.elements[5]*=m,sn.elements[6]*=m,sn.elements[8]*=_,sn.elements[9]*=_,sn.elements[10]*=_,t.setFromRotationMatrix(sn),n.x=l,n.y=u,n.z=h,this}makePerspective(e,t,n,s,l,u,h=2e3,p=!1){const d=this.elements,m=2*l/(t-e),_=2*l/(n-s),v=(t+e)/(t-e),S=(n+s)/(n-s);let b,R;if(p)b=l/(u-l),R=u*l/(u-l);else if(h===2e3)b=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(h===2001)b=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,l,u,h=2e3,p=!1){const d=this.elements,m=2/(t-e),_=2/(n-s),v=-(t+e)/(t-e),S=-(n+s)/(n-s);let b,R;if(p)b=1/(u-l),R=u/(u-l);else if(h===2e3)b=-2/(u-l),R=-(u+l)/(u-l);else if(h===2001)b=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=m,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new Z,sn=new Dt,vo=new Z(0,0,0),So=new Z(1,1,1),bn=new Z,Ri=new Z,Kt=new Z,Zr=new Dt,Jr=new Si;class dn{constructor(e=0,t=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,l=s[0],u=s[4],h=s[8],p=s[1],d=s[5],m=s[9],_=s[2],v=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(ut(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ut(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ut(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(ut(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jr.setFromEuler(this),this.setFromQuaternion(Jr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Xs{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mo=0;const Qr=new Z,Wn=new Si,_n=new Dt,Ci=new Z,ci=new Z,Eo=new Z,yo=new Si,es=new Z(1,0,0),ts=new Z(0,1,0),ns=new Z(0,0,1),is={type:"added"},To={type:"removed"},Xn={type:"childadded",child:null},pr={type:"childremoved",child:null};class Gt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mo++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Z,t=new dn,n=new Si,s=new Z(1,1,1);function l(){n.setFromEuler(t,!1)}function u(){t.setFromQuaternion(n,void 0,!1)}t._onChange(l),n._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Dt},normalMatrix:{value:new ot}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.multiply(Wn),this}rotateOnWorldAxis(e,t){return Wn.setFromAxisAngle(e,t),this.quaternion.premultiply(Wn),this}rotateX(e){return this.rotateOnAxis(es,e)}rotateY(e){return this.rotateOnAxis(ts,e)}rotateZ(e){return this.rotateOnAxis(ns,e)}translateOnAxis(e,t){return Qr.copy(e).applyQuaternion(this.quaternion),this.position.add(Qr.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(es,e)}translateY(e){return this.translateOnAxis(ts,e)}translateZ(e){return this.translateOnAxis(ns,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ci.copy(e):Ci.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(ci,Ci,this.up):_n.lookAt(Ci,ci,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),Wn.setFromRotationMatrix(_n),this.quaternion.premultiply(Wn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(xt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(is),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null):xt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(To),pr.child=e,this.dispatchEvent(pr),pr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(is),Xn.child=e,this.dispatchEvent(Xn),Xn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const u=this.children[n].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,e,Eo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ci,yo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(h=>({...h})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,m=p.length;d<m;d++){const _=p[d];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(l(e.materials,this.material[p]));s.material=h}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let h=0;h<this.children.length;h++)s.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];s.animations.push(l(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),b=u(e.nodes);h.length>0&&(n.geometries=h),p.length>0&&(n.materials=p),d.length>0&&(n.textures=d),m.length>0&&(n.images=m),_.length>0&&(n.shapes=_),v.length>0&&(n.skeletons=v),S.length>0&&(n.animations=S),b.length>0&&(n.nodes=b)}return n.object=s,n;function u(h){const p=[];for(const d in h){const m=h[d];delete m.metadata,p.push(m)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new Z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new Z,xn=new Z,mr=new Z,vn=new Z,qn=new Z,jn=new Z,rs=new Z,gr=new Z,_r=new Z,xr=new Z,vr=new Ft,Sr=new Ft,Mr=new Ft;class tn{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,n,s,l){on.subVectors(s,t),xn.subVectors(n,t),mr.subVectors(e,t);const u=on.dot(on),h=on.dot(xn),p=on.dot(mr),d=xn.dot(xn),m=xn.dot(mr),_=u*d-h*h;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(d*p-h*m)*v,b=(u*m-h*p)*v;return l.set(1-S-b,b,S)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getInterpolation(e,t,n,s,l,u,h,p){return this.getBarycoord(e,t,n,s,vn)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,vn.x),p.addScaledVector(u,vn.y),p.addScaledVector(h,vn.z),p)}static getInterpolatedAttribute(e,t,n,s,l,u){return vr.setScalar(0),Sr.setScalar(0),Mr.setScalar(0),vr.fromBufferAttribute(e,t),Sr.fromBufferAttribute(e,n),Mr.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(vr,l.x),u.addScaledVector(Sr,l.y),u.addScaledVector(Mr,l.z),u}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),xn.subVectors(e,t),on.cross(xn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),on.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,l){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,l)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,l=this.c;let u,h;qn.subVectors(s,n),jn.subVectors(l,n),gr.subVectors(e,n);const p=qn.dot(gr),d=jn.dot(gr);if(p<=0&&d<=0)return t.copy(n);_r.subVectors(e,s);const m=qn.dot(_r),_=jn.dot(_r);if(m>=0&&_<=m)return t.copy(s);const v=p*_-m*d;if(v<=0&&p>=0&&m<=0)return u=p/(p-m),t.copy(n).addScaledVector(qn,u);xr.subVectors(e,l);const S=qn.dot(xr),b=jn.dot(xr);if(b>=0&&S<=b)return t.copy(l);const R=S*d-p*b;if(R<=0&&d>=0&&b<=0)return h=d/(d-b),t.copy(n).addScaledVector(jn,h);const M=m*b-S*_;if(M<=0&&_-m>=0&&S-b>=0)return rs.subVectors(l,s),h=(_-m)/(_-m+(S-b)),t.copy(s).addScaledVector(rs,h);const x=1/(M+R+v);return u=R*x,h=v*x,t.copy(n).addScaledVector(qn,u).addScaledVector(jn,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Er(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=uo(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const l=n<=.5?n*(1+t):n+t-n*t,u=2*n-l;this.r=Er(u,l,e+1/3),this.g=Er(u,l,e),this.b=Er(u,l,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(l){l!==void 0&&parseFloat(l)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],h=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return n(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=qs[e.toLowerCase()];return n!==void 0?this.setHex(n,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return pt.workingToColorSpace(Vt.copy(this),e),Math.round(ut(Vt.r*255,0,255))*65536+Math.round(ut(Vt.g*255,0,255))*256+Math.round(ut(Vt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,s=Vt.g,l=Vt.b,u=Math.max(n,s,l),h=Math.min(n,s,l);let p,d;const m=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=m<=.5?_/(u+h):_/(2-u-h),u){case n:p=(s-l)/_+(s<l?6:0);break;case s:p=(l-n)/_+2;break;case l:p=(n-s)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=m,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=en){pt.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,s=Vt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(Pi);const n=rr(An.h,Pi.h,t),s=rr(An.s,Pi.s,t),l=rr(An.l,Pi.l,t);return this.setHSL(n,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*n+l[6]*s,this.g=l[1]*t+l[4]*n+l[7]*s,this.b=l[2]*t+l[5]*n+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new mt;mt.NAMES=qs;let wo=0;class ii extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wo++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(n.textures=l),u.length>0&&(n.images=u)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let l=0;l!==s;++l)n[l]=t[l].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class js extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new Z,Di=new Et;let bo=0;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bo++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Di.fromBufferAttribute(this,t),Di.applyMatrix3(e),this.setXY(t,Di.x,Di.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,l){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),s=$t(s,this.array),l=$t(l,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Ys extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $s extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nn extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ao=0;const Qt=new Dt,yr=new Gt,Yn=new Z,Zt=new Mi,ui=new Mi,Bt=new Z;class ln extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ao++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ks(e)?$s:Ys)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const l=new ot().getNormalMatrix(e);n.applyNormalMatrix(l),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];n.push(u.x,u.y,u.z||0)}this.setAttribute("position",new nn(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const l=t[n];Zt.setFromBufferAttribute(l),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];ui.setFromBufferAttribute(h),this.morphTargetsRelative?(Bt.addVectors(Zt.min,ui.min),Zt.expandByPoint(Bt),Bt.addVectors(Zt.max,ui.max),Zt.expandByPoint(Bt)):(Zt.expandByPoint(ui.min),Zt.expandByPoint(ui.max))}Zt.getCenter(n);let s=0;for(let l=0,u=e.count;l<u;l++)Bt.fromBufferAttribute(e,l),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],p=this.morphTargetsRelative;for(let d=0,m=h.count;d<m;d++)Bt.fromBufferAttribute(h,d),p&&(Yn.fromBufferAttribute(e,d),Bt.add(Yn)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let Q=0;Q<n.count;Q++)h[Q]=new Z,p[Q]=new Z;const d=new Z,m=new Z,_=new Z,v=new Et,S=new Et,b=new Et,R=new Z,M=new Z;function x(Q,A,D){d.fromBufferAttribute(n,Q),m.fromBufferAttribute(n,A),_.fromBufferAttribute(n,D),v.fromBufferAttribute(l,Q),S.fromBufferAttribute(l,A),b.fromBufferAttribute(l,D),m.sub(d),_.sub(d),S.sub(v),b.sub(v);const j=1/(S.x*b.y-b.x*S.y);isFinite(j)&&(R.copy(m).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(j),M.copy(_).multiplyScalar(S.x).addScaledVector(m,-b.x).multiplyScalar(j),h[Q].add(R),h[A].add(R),h[D].add(R),p[Q].add(M),p[A].add(M),p[D].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let Q=0,A=I.length;Q<A;++Q){const D=I[Q],j=D.start,ne=D.count;for(let ee=j,ce=j+ne;ee<ce;ee+=3)x(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const F=new Z,U=new Z,O=new Z,G=new Z;function k(Q){O.fromBufferAttribute(s,Q),G.copy(O);const A=h[Q];F.copy(A),F.sub(O.multiplyScalar(O.dot(A))).normalize(),U.crossVectors(G,A);const j=U.dot(p[Q])<0?-1:1;u.setXYZW(Q,F.x,F.y,F.z,j)}for(let Q=0,A=I.length;Q<A;++Q){const D=I[Q],j=D.start,ne=D.count;for(let ee=j,ce=j+ne;ee<ce;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,S=n.count;v<S;v++)n.setXYZ(v,0,0,0);const s=new Z,l=new Z,u=new Z,h=new Z,p=new Z,d=new Z,m=new Z,_=new Z;if(e)for(let v=0,S=e.count;v<S;v+=3){const b=e.getX(v+0),R=e.getX(v+1),M=e.getX(v+2);s.fromBufferAttribute(t,b),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,M),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),h.fromBufferAttribute(n,b),p.fromBufferAttribute(n,R),d.fromBufferAttribute(n,M),h.add(m),p.add(m),d.add(m),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(R,p.x,p.y,p.z),n.setXYZ(M,d.x,d.y,d.z)}else for(let v=0,S=t.count;v<S;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(h,p){const d=h.array,m=h.itemSize,_=h.normalized,v=new d.constructor(p.length*m);let S=0,b=0;for(let R=0,M=p.length;R<M;R++){h.isInterleavedBufferAttribute?S=p[R]*h.data.stride+h.offset:S=p[R]*m;for(let x=0;x<m;x++)v[b++]=d[S++]}return new fn(v,m,_)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,s=this.attributes;for(const h in s){const p=s[h],d=e(p,n);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const p=[],d=l[h];for(let m=0,_=d.length;m<_;m++){const v=d[m],S=e(v,n);p.push(S)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const p in n){const d=n[p];e.data.attributes[p]=d.toJSON(e.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],m=[];for(let _=0,v=d.length;_<v;_++){const S=d[_];m.push(S.toJSON(e.data))}m.length>0&&(s[p]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(t))}const l=e.morphAttributes;for(const d in l){const m=[],_=l[d];for(let v=0,S=_.length;v<S;v++)m.push(_[v].clone(t));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,m=u.length;d<m;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ss=new Dt,Fn=new Ws,Li=new Qi,os=new Z,Fi=new Z,Ii=new Z,Ui=new Z,Tr=new Z,Ni=new Z,as=new Z,Oi=new Z;class Mn extends Gt{constructor(e=new ln,t=new js){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const h=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const h=this.morphTargetInfluences;if(l&&h){Ni.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const m=h[p],_=l[p];m!==0&&(Tr.fromBufferAttribute(_,e),u?Ni.addScaledVector(Tr,m):Ni.addScaledVector(Tr.sub(t),m))}t.add(Ni)}return t}raycast(e,t){const n=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Li.copy(n.boundingSphere),Li.applyMatrix4(l),Fn.copy(e.ray).recast(e.near),!(Li.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(Li,os)===null||Fn.origin.distanceToSquared(os)>(e.far-e.near)**2))&&(ss.copy(l).invert(),Fn.copy(e.ray).applyMatrix4(ss),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fn)))}_computeIntersections(e,t,n){let s;const l=this.geometry,u=this.material,h=l.index,p=l.attributes.position,d=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=u[M.materialIndex],I=Math.max(M.start,S.start),F=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let U=I,O=F;U<O;U+=3){const G=h.getX(U),k=h.getX(U+1),Q=h.getX(U+2);s=Bi(this,x,e,n,d,m,_,G,k,Q),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const b=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let M=b,x=R;M<x;M+=3){const I=h.getX(M),F=h.getX(M+1),U=h.getX(M+2);s=Bi(this,u,e,n,d,m,_,I,F,U),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,R=v.length;b<R;b++){const M=v[b],x=u[M.materialIndex],I=Math.max(M.start,S.start),F=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let U=I,O=F;U<O;U+=3){const G=U,k=U+1,Q=U+2;s=Bi(this,x,e,n,d,m,_,G,k,Q),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=M.materialIndex,t.push(s))}}else{const b=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=b,x=R;M<x;M+=3){const I=M,F=M+1,U=M+2;s=Bi(this,u,e,n,d,m,_,I,F,U),s&&(s.faceIndex=Math.floor(M/3),t.push(s))}}}}function Ro(i,e,t,n,s,l,u,h){let p;if(e.side===1?p=n.intersectTriangle(u,l,s,!0,h):p=n.intersectTriangle(s,l,u,e.side===0,h),p===null)return null;Oi.copy(h),Oi.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Oi);return d<t.near||d>t.far?null:{distance:d,point:Oi.clone(),object:i}}function Bi(i,e,t,n,s,l,u,h,p,d){i.getVertexPosition(h,Fi),i.getVertexPosition(p,Ii),i.getVertexPosition(d,Ui);const m=Ro(i,e,t,n,Fi,Ii,Ui,as);if(m){const _=new Z;tn.getBarycoord(as,Fi,Ii,Ui,_),s&&(m.uv=tn.getInterpolatedAttribute(s,h,p,d,_,new Et)),l&&(m.uv1=tn.getInterpolatedAttribute(l,h,p,d,_,new Et)),u&&(m.normal=tn.getInterpolatedAttribute(u,h,p,d,_,new Z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:h,b:p,c:d,normal:new Z,materialIndex:0};tn.getNormal(Fi,Ii,Ui,v.normal),m.face=v,m.barycoord=_}return m}class Ei extends ln{constructor(e=1,t=1,n=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:l,depthSegments:u};const h=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],m=[],_=[];let v=0,S=0;b("z","y","x",-1,-1,n,t,e,u,l,0),b("z","y","x",1,-1,n,t,-e,u,l,1),b("x","z","y",1,1,e,n,t,s,u,2),b("x","z","y",1,-1,e,n,-t,s,u,3),b("x","y","z",1,-1,e,t,n,s,l,4),b("x","y","z",-1,-1,e,t,-n,s,l,5),this.setIndex(p),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(m,3)),this.setAttribute("uv",new nn(_,2));function b(R,M,x,I,F,U,O,G,k,Q,A){const D=U/k,j=O/Q,ne=U/2,ee=O/2,ce=G/2,ue=k+1,ie=Q+1;let se=0,me=0;const Oe=new Z;for(let Ce=0;Ce<ie;Ce++){const Be=Ce*j-ee;for(let we=0;we<ue;we++){const it=we*D-ne;Oe[R]=it*I,Oe[M]=Be*F,Oe[x]=ce,d.push(Oe.x,Oe.y,Oe.z),Oe[R]=0,Oe[M]=0,Oe[x]=G>0?1:-1,m.push(Oe.x,Oe.y,Oe.z),_.push(we/k),_.push(1-Ce/Q),se+=1}}for(let Ce=0;Ce<Q;Ce++)for(let Be=0;Be<k;Be++){const we=v+Be+ue*Ce,it=v+Be+ue*(Ce+1),Rt=v+(Be+1)+ue*(Ce+1),fe=v+(Be+1)+ue*Ce;p.push(we,it,fe),p.push(it,Rt,fe),me+=6}h.addGroup(S,me,A),S+=me,v+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ei(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){const e={};for(let t=0;t<i.length;t++){const n=ti(i[t]);for(const s in n)e[s]=n[s]}return e}function Co(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ks(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Po={clone:ti,merge:qt};var Do=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Do,this.fragmentShader=Lo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=Co(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zs extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new Z,ls=new Et,cs=new Et;class an extends Zs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ls,cs),t.subVectors(cs,ls)}setViewOffset(e,t,n,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/p,t-=u.offsetY*n/d,s*=u.width/p,n*=u.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,Kn=1;class Fo extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an($n,Kn,e,t);s.layers=this.layers,this.add(s);const l=new an($n,Kn,e,t);l.layers=this.layers,this.add(l);const u=new an($n,Kn,e,t);u.layers=this.layers,this.add(u);const h=new an($n,Kn,e,t);h.layers=this.layers,this.add(h);const p=new an($n,Kn,e,t);p.layers=this.layers,this.add(p);const d=new an($n,Kn,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,l,u,h,p]=t;for(const d of t)this.remove(d);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,p,d,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,l),e.setRenderTarget(n,1,s),e.render(t,u),e.setRenderTarget(n,2,s),e.render(t,h),e.setRenderTarget(n,3,s),e.render(t,p),e.setRenderTarget(n,4,s),e.render(t,d),n.texture.generateMipmaps=R,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(_,v,S),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class Js extends kt{constructor(e=[],t=301,n,s,l,u,h,p,d,m){super(e,t,n,s,l,u,h,p,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qs extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),l=new pn({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});l.uniforms.tEquirect.value=t;const u=new Mn(s,l),h=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Fo(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,n,s);e.setRenderTarget(l)}}class Gi extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Io={type:"move"};class wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,l=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,n),x=this._getHandJoint(d,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const m=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=m.position.distanceTo(_.position),S=.02,b=.005;d.inputState.pinching&&v>S+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&v<=S-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,n),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&l!==null&&(s=l),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Io)))}return h!==null&&(h.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rf extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Uo extends kt{constructor(e=null,t=1,n=1,s,l,u,h,p,d=1003,m=1003,_,v){super(null,u,h,p,d,m,s,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const br=new Z,No=new Z,Oo=new ot;class On{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=br.subVectors(n,t).cross(No.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(br),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(n,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Oo.getNormalMatrix(e),s=this.coplanarPoint(br).applyMatrix4(e),l=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const In=new Qi,Bo=new Et(.5,.5),zi=new Z;class Vr{constructor(e=new On,t=new On,n=new On,s=new On,l=new On,u=new On){this.planes=[e,t,n,s,l,u]}set(e,t,n,s,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(n),h[3].copy(s),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){const s=this.planes,l=e.elements,u=l[0],h=l[1],p=l[2],d=l[3],m=l[4],_=l[5],v=l[6],S=l[7],b=l[8],R=l[9],M=l[10],x=l[11],I=l[12],F=l[13],U=l[14],O=l[15];if(s[0].setComponents(d-u,S-m,x-b,O-I).normalize(),s[1].setComponents(d+u,S+m,x+b,O+I).normalize(),s[2].setComponents(d+h,S+_,x+R,O+F).normalize(),s[3].setComponents(d-h,S-_,x-R,O-F).normalize(),n)s[4].setComponents(p,v,M,U).normalize(),s[5].setComponents(d-p,S-v,x-M,O-U).normalize();else if(s[4].setComponents(d-p,S-v,x-M,O-U).normalize(),t===2e3)s[5].setComponents(d+p,S+v,x+M,O+U).normalize();else if(t===2001)s[5].setComponents(p,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),In.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(In)}intersectsSprite(e){In.center.set(0,0,0);const t=Bo.distanceTo(e.center);return In.radius=.7071067811865476+t,In.applyMatrix4(e.matrixWorld),this.intersectsSphere(In)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(zi.x=s.normal.x>0?e.max.x:e.min.x,zi.y=s.normal.y>0?e.max.y:e.min.y,zi.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Go extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zi=new Z,Ji=new Z,us=new Dt,hi=new Ws,Vi=new Qi,Ar=new Z,hs=new Z;class zo extends Gt{constructor(e=new ln,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,l=t.count;s<l;s++)Zi.fromBufferAttribute(t,s-1),Ji.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Zi.distanceTo(Ji);e.setAttribute("lineDistance",new nn(n,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vi.copy(n.boundingSphere),Vi.applyMatrix4(s),Vi.radius+=l,e.ray.intersectsSphere(Vi)===!1)return;us.copy(s).invert(),hi.copy(e.ray).applyMatrix4(us);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const S=Math.max(0,u.start),b=Math.min(m.count,u.start+u.count);for(let R=S,M=b-1;R<M;R+=d){const x=m.getX(R),I=m.getX(R+1),F=ki(this,e,hi,p,x,I,R);F&&t.push(F)}if(this.isLineLoop){const R=m.getX(b-1),M=m.getX(S),x=ki(this,e,hi,p,R,M,b-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),b=Math.min(v.count,u.start+u.count);for(let R=S,M=b-1;R<M;R+=d){const x=ki(this,e,hi,p,R,R+1,R);x&&t.push(x)}if(this.isLineLoop){const R=ki(this,e,hi,p,b-1,S,b-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const h=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function ki(i,e,t,n,s,l,u){const h=i.geometry.attributes.position;if(Zi.fromBufferAttribute(h,s),Ji.fromBufferAttribute(h,l),t.distanceSqToSegment(Zi,Ji,Ar,hs)>n)return;Ar.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Ar);if(!(d<e.near||d>e.far))return{distance:d,point:hs.clone().applyMatrix4(i.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:i}}const fs=new Z,ds=new Z;class sf extends zo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,l=t.count;s<l;s+=2)fs.fromBufferAttribute(t,s),ds.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fs.distanceTo(ds);e.setAttribute("lineDistance",new nn(n,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _i extends kt{constructor(e,t,n=1014,s,l,u,h=1003,p=1003,d,m=1026,_=1){if(m!==1026&&m!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,u,h,p,m,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vo extends _i{constructor(e,t=1014,n=301,s,l,u=1003,h=1003,p,d=1026){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,n,s,l,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eo extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Hi=new Z,Wi=new Z,Rr=new Z,Xi=new tn;class of extends ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),l=Math.cos(Yi*t),u=e.getIndex(),h=e.getAttribute("position"),p=u?u.count:h.count,d=[0,0,0],m=["a","b","c"],_=new Array(3),v={},S=[];for(let b=0;b<p;b+=3){u?(d[0]=u.getX(b),d[1]=u.getX(b+1),d[2]=u.getX(b+2)):(d[0]=b,d[1]=b+1,d[2]=b+2);const{a:R,b:M,c:x}=Xi;if(R.fromBufferAttribute(h,d[0]),M.fromBufferAttribute(h,d[1]),x.fromBufferAttribute(h,d[2]),Xi.getNormal(Rr),_[0]=`${Math.round(R.x*s)},${Math.round(R.y*s)},${Math.round(R.z*s)}`,_[1]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,_[2]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let I=0;I<3;I++){const F=(I+1)%3,U=_[I],O=_[F],G=Xi[m[I]],k=Xi[m[F]],Q=`${U}_${O}`,A=`${O}_${U}`;A in v&&v[A]?(Rr.dot(v[A].normal)<=l&&(S.push(G.x,G.y,G.z),S.push(k.x,k.y,k.z)),v[A]=null):Q in v||(v[Q]={index0:d[I],index1:d[F],normal:Rr.clone()})}}for(const b in v)if(v[b]){const{index0:R,index1:M}=v[b];Hi.fromBufferAttribute(h,R),Wi.fromBufferAttribute(h,M),S.push(Hi.x,Hi.y,Hi.z),S.push(Wi.x,Wi.y,Wi.z)}this.setAttribute("position",new nn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class er extends ln{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const l=e/2,u=t/2,h=Math.floor(n),p=Math.floor(s),d=h+1,m=p+1,_=e/h,v=t/p,S=[],b=[],R=[],M=[];for(let x=0;x<m;x++){const I=x*v-u;for(let F=0;F<d;F++){const U=F*_-l;b.push(U,-I,0),R.push(0,0,1),M.push(F/h),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let I=0;I<h;I++){const F=I+d*x,U=I+d*(x+1),O=I+1+d*(x+1),G=I+1+d*x;S.push(F,U,G),S.push(U,O,G)}this.setIndex(S),this.setAttribute("position",new nn(b,3)),this.setAttribute("normal",new nn(R,3)),this.setAttribute("uv",new nn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.widthSegments,e.heightSegments)}}class ko extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class af extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ho extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wo extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xo{constructor(e,t,n){const s=this;let l=!1,u=0,h=0,p;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(m){h++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,h),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,h),u===h&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return p?p(m):m},this.setURLModifier=function(m){return p=m,this},this.addHandler=function(m,_){return d.push(m,_),this},this.removeHandler=function(m){const _=d.indexOf(m);return _!==-1&&d.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=d.length;_<v;_+=2){const S=d[_],b=d[_+1];if(S.global&&(S.lastIndex=0),S.test(m))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const qo=new Xo;class kr{constructor(e){this.manager=e!==void 0?e:qo,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,l){n.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn=new WeakMap;class jo extends kr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Cr.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=Zn.get(u);_===void 0&&(_=[],Zn.set(u,_)),_.push({onLoad:t,onError:s})}return u}const h=mi("img");function p(){m(),t&&t(this);const _=Zn.get(this)||[];for(let v=0;v<_.length;v++){const S=_[v];S.onLoad&&S.onLoad(this)}Zn.delete(this),l.manager.itemEnd(e)}function d(_){m(),s&&s(_),Cr.remove(`image:${e}`);const v=Zn.get(this)||[];for(let S=0;S<v.length;S++){const b=v[S];b.onError&&b.onError(_)}Zn.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){h.removeEventListener("load",p,!1),h.removeEventListener("error",d,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Cr.add(`image:${e}`,h),l.manager.itemStart(e),h.src=e,h}}class lf extends kr{constructor(e){super(e)}load(e,t,n,s){const l=new kt,u=new jo(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(h){l.image=h,l.needsUpdate=!0,t!==void 0&&t(l)},n,s),l}}class to extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Pr=new Dt,ps=new Z,ms=new Z;class Yo{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vr,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ps.setFromMatrixPosition(e.matrixWorld),t.position.copy(ps),ms.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ms),t.updateMatrixWorld(),Pr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hr extends Zs{constructor(e=-1,t=1,n=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=n-e,u=n+e,h=s+t,p=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,h-=m*this.view.offsetY,p=h-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $o extends Yo{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cf extends to{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uf extends to{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ko extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function gs(i,e,t,n){const s=Zo(n);switch(t){case 1021:return i*e;case 1028:return i*e/s.components*s.byteLength;case 1029:return i*e/s.components*s.byteLength;case 1030:return i*e*2/s.components*s.byteLength;case 1031:return i*e*2/s.components*s.byteLength;case 1022:return i*e*3/s.components*s.byteLength;case 1023:return i*e*4/s.components*s.byteLength;case 1033:return i*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zo(i){switch(i){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function no(){let i=null,e=!1,t=null,n=null;function s(l,u){t(l,u),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function Jo(i){const e=new WeakMap;function t(h,p){const d=h.array,m=h.usage,_=d.byteLength,v=i.createBuffer();i.bindBuffer(p,v),i.bufferData(p,d,m),h.onUploadCallback();let S;if(d instanceof Float32Array)S=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=i.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=i.SHORT;else if(d instanceof Uint32Array)S=i.UNSIGNED_INT;else if(d instanceof Int32Array)S=i.INT;else if(d instanceof Int8Array)S=i.BYTE;else if(d instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function n(h,p,d){const m=p.array,_=p.updateRanges;if(i.bindBuffer(d,h),_.length===0)i.bufferSubData(d,0,m);else{_.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<_.length;S++){const b=_[v],R=_[S];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++v,_[v]=R)}_.length=v+1;for(let S=0,b=_.length;S<b;S++){const R=_[S];i.bufferSubData(d,R.start*m.BYTES_PER_ELEMENT,m,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(i.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const m=e.get(h);(!m||m.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,h,p),d.version=h.version}}return{get:s,remove:l,update:u}}var Qo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ea=`#ifdef USE_ALPHAHASH
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
#endif`,ta=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,na=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ia=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ra=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sa=`#ifdef USE_AOMAP
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
#endif`,oa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aa=`#ifdef USE_BATCHING
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
#endif`,la=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ca=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ua=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ha=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fa=`#ifdef USE_IRIDESCENCE
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
#endif`,da=`#ifdef USE_BUMPMAP
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
#endif`,pa=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ma=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ga=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_a=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xa=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,va=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sa=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ma=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ea=`#define PI 3.141592653589793
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
} // validated`,ya=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ta=`vec3 transformedNormal = objectNormal;
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
#endif`,wa=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ba=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Aa=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ra=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ca="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pa=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Da=`#ifdef USE_ENVMAP
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
#endif`,La=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fa=`#ifdef USE_ENVMAP
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
#endif`,Ia=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ua=`#ifdef USE_ENVMAP
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
#endif`,Na=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oa=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ba=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ga=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,za=`#ifdef USE_GRADIENTMAP
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
}`,Va=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ka=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ha=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wa=`uniform bool receiveShadow;
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
#endif`,Xa=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,qa=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ja=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ya=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$a=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ka=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Za=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ja=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Qa=`#if defined( RE_IndirectDiffuse )
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
#endif`,el=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nl=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,il=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rl=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ol=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,al=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ll=`#if defined( USE_POINTS_UV )
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
#endif`,cl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ul=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pl=`#ifdef USE_MORPHTARGETS
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
#endif`,ml=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gl=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_l=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ml=`#ifdef USE_NORMALMAP
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
#endif`,El=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wl=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Al=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ll=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fl=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Il=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ul=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nl=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ol=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Bl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gl=`#ifdef USE_SKINNING
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
#endif`,zl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vl=`#ifdef USE_SKINNING
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
#endif`,kl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xl=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ql=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jl=`#ifdef USE_TRANSMISSION
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
#endif`,Yl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$l=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jl=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ql=`uniform sampler2D t2D;
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
}`,ec=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tc=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ic=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rc=`#include <common>
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
}`,sc=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oc=`#define DISTANCE
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
}`,ac=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uc=`uniform float scale;
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
}`,hc=`uniform vec3 diffuse;
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
}`,fc=`#include <common>
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
}`,dc=`uniform vec3 diffuse;
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
}`,pc=`#define LAMBERT
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
}`,mc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,gc=`#define MATCAP
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
}`,_c=`#define MATCAP
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
}`,xc=`#define NORMAL
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
}`,vc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sc=`#define PHONG
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
}`,Mc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,Ec=`#define STANDARD
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
}`,yc=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Tc=`#define TOON
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
}`,wc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,bc=`uniform float size;
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
}`,Ac=`uniform vec3 diffuse;
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
}`,Rc=`#include <common>
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
}`,Cc=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,Pc=`uniform float rotation;
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
}`,Dc=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:Qo,alphahash_pars_fragment:ea,alphamap_fragment:ta,alphamap_pars_fragment:na,alphatest_fragment:ia,alphatest_pars_fragment:ra,aomap_fragment:sa,aomap_pars_fragment:oa,batching_pars_vertex:aa,batching_vertex:la,begin_vertex:ca,beginnormal_vertex:ua,bsdfs:ha,iridescence_fragment:fa,bumpmap_pars_fragment:da,clipping_planes_fragment:pa,clipping_planes_pars_fragment:ma,clipping_planes_pars_vertex:ga,clipping_planes_vertex:_a,color_fragment:xa,color_pars_fragment:va,color_pars_vertex:Sa,color_vertex:Ma,common:Ea,cube_uv_reflection_fragment:ya,defaultnormal_vertex:Ta,displacementmap_pars_vertex:wa,displacementmap_vertex:ba,emissivemap_fragment:Aa,emissivemap_pars_fragment:Ra,colorspace_fragment:Ca,colorspace_pars_fragment:Pa,envmap_fragment:Da,envmap_common_pars_fragment:La,envmap_pars_fragment:Fa,envmap_pars_vertex:Ia,envmap_physical_pars_fragment:Xa,envmap_vertex:Ua,fog_vertex:Na,fog_pars_vertex:Oa,fog_fragment:Ba,fog_pars_fragment:Ga,gradientmap_pars_fragment:za,lightmap_pars_fragment:Va,lights_lambert_fragment:ka,lights_lambert_pars_fragment:Ha,lights_pars_begin:Wa,lights_toon_fragment:qa,lights_toon_pars_fragment:ja,lights_phong_fragment:Ya,lights_phong_pars_fragment:$a,lights_physical_fragment:Ka,lights_physical_pars_fragment:Za,lights_fragment_begin:Ja,lights_fragment_maps:Qa,lights_fragment_end:el,logdepthbuf_fragment:tl,logdepthbuf_pars_fragment:nl,logdepthbuf_pars_vertex:il,logdepthbuf_vertex:rl,map_fragment:sl,map_pars_fragment:ol,map_particle_fragment:al,map_particle_pars_fragment:ll,metalnessmap_fragment:cl,metalnessmap_pars_fragment:ul,morphinstance_vertex:hl,morphcolor_vertex:fl,morphnormal_vertex:dl,morphtarget_pars_vertex:pl,morphtarget_vertex:ml,normal_fragment_begin:gl,normal_fragment_maps:_l,normal_pars_fragment:xl,normal_pars_vertex:vl,normal_vertex:Sl,normalmap_pars_fragment:Ml,clearcoat_normal_fragment_begin:El,clearcoat_normal_fragment_maps:yl,clearcoat_pars_fragment:Tl,iridescence_pars_fragment:wl,opaque_fragment:bl,packing:Al,premultiplied_alpha_fragment:Rl,project_vertex:Cl,dithering_fragment:Pl,dithering_pars_fragment:Dl,roughnessmap_fragment:Ll,roughnessmap_pars_fragment:Fl,shadowmap_pars_fragment:Il,shadowmap_pars_vertex:Ul,shadowmap_vertex:Nl,shadowmask_pars_fragment:Ol,skinbase_vertex:Bl,skinning_pars_vertex:Gl,skinning_vertex:zl,skinnormal_vertex:Vl,specularmap_fragment:kl,specularmap_pars_fragment:Hl,tonemapping_fragment:Wl,tonemapping_pars_fragment:Xl,transmission_fragment:ql,transmission_pars_fragment:jl,uv_pars_fragment:Yl,uv_pars_vertex:$l,uv_vertex:Kl,worldpos_vertex:Zl,background_vert:Jl,background_frag:Ql,backgroundCube_vert:ec,backgroundCube_frag:tc,cube_vert:nc,cube_frag:ic,depth_vert:rc,depth_frag:sc,distance_vert:oc,distance_frag:ac,equirect_vert:lc,equirect_frag:cc,linedashed_vert:uc,linedashed_frag:hc,meshbasic_vert:fc,meshbasic_frag:dc,meshlambert_vert:pc,meshlambert_frag:mc,meshmatcap_vert:gc,meshmatcap_frag:_c,meshnormal_vert:xc,meshnormal_frag:vc,meshphong_vert:Sc,meshphong_frag:Mc,meshphysical_vert:Ec,meshphysical_frag:yc,meshtoon_vert:Tc,meshtoon_frag:wc,points_vert:bc,points_frag:Ac,shadow_vert:Rc,shadow_frag:Cc,sprite_vert:Pc,sprite_frag:Dc},Fe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},un={basic:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:qt([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:qt([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:qt([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:qt([Fe.points,Fe.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:qt([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:qt([Fe.common,Fe.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:qt([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:qt([Fe.sprite,Fe.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:qt([Fe.common,Fe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:qt([Fe.lights,Fe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};un.physical={uniforms:qt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const qi={r:0,b:0,g:0},Un=new dn,Lc=new Dt;function Fc(i,e,t,n,s,l,u){const h=new mt(0);let p=l===!0?0:1,d,m,_=null,v=0,S=null;function b(F){let U=F.isScene===!0?F.background:null;return U&&U.isTexture&&(U=(F.backgroundBlurriness>0?t:e).get(U)),U}function R(F){let U=!1;const O=b(F);O===null?x(h,p):O&&O.isColor&&(x(O,1),U=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(F,U){const O=b(U);O&&(O.isCubeTexture||O.mapping===306)?(m===void 0&&(m=new Mn(new Ei(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:ti(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(G,k,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Un.copy(U.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Lc.makeRotationFromEuler(Un)),m.material.toneMapped=pt.getTransfer(O.colorSpace)!==wt,(_!==O||v!==O.version||S!==i.toneMapping)&&(m.material.needsUpdate=!0,_=O,v=O.version,S=i.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(d===void 0&&(d=new Mn(new er(2,2),new pn({name:"BackgroundMaterial",uniforms:ti(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=O,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.toneMapped=pt.getTransfer(O.colorSpace)!==wt,O.matrixAutoUpdate===!0&&O.updateMatrix(),d.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||v!==O.version||S!==i.toneMapping)&&(d.material.needsUpdate=!0,_=O,v=O.version,S=i.toneMapping),d.layers.enableAll(),F.unshift(d,d.geometry,d.material,0,0,null))}function x(F,U){F.getRGB(qi,Ks(i)),n.buffers.color.setClear(qi.r,qi.g,qi.b,U,u)}function I(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return h},setClearColor:function(F,U=1){h.set(F),p=U,x(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(F){p=F,x(h,p)},render:R,addToRenderList:M,dispose:I}}function Ic(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null);let l=s,u=!1;function h(D,j,ne,ee,ce){let ue=!1;const ie=_(ee,ne,j);l!==ie&&(l=ie,d(l.object)),ue=S(D,ee,ne,ce),ue&&b(D,ee,ne,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,U(D,j,ne,ee),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function p(){return i.createVertexArray()}function d(D){return i.bindVertexArray(D)}function m(D){return i.deleteVertexArray(D)}function _(D,j,ne){const ee=ne.wireframe===!0;let ce=n[D.id];ce===void 0&&(ce={},n[D.id]=ce);let ue=ce[j.id];ue===void 0&&(ue={},ce[j.id]=ue);let ie=ue[ee];return ie===void 0&&(ie=v(p()),ue[ee]=ie),ie}function v(D){const j=[],ne=[],ee=[];for(let ce=0;ce<t;ce++)j[ce]=0,ne[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ne,attributeDivisors:ee,object:D,attributes:{},index:null}}function S(D,j,ne,ee){const ce=l.attributes,ue=j.attributes;let ie=0;const se=ne.getAttributes();for(const me in se)if(se[me].location>=0){const Ce=ce[me];let Be=ue[me];if(Be===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Be=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Be=D.instanceColor)),Ce===void 0||Ce.attribute!==Be||Be&&Ce.data!==Be.data)return!0;ie++}return l.attributesNum!==ie||l.index!==ee}function b(D,j,ne,ee){const ce={},ue=j.attributes;let ie=0;const se=ne.getAttributes();for(const me in se)if(se[me].location>=0){let Ce=ue[me];Ce===void 0&&(me==="instanceMatrix"&&D.instanceMatrix&&(Ce=D.instanceMatrix),me==="instanceColor"&&D.instanceColor&&(Ce=D.instanceColor));const Be={};Be.attribute=Ce,Ce&&Ce.data&&(Be.data=Ce.data),ce[me]=Be,ie++}l.attributes=ce,l.attributesNum=ie,l.index=ee}function R(){const D=l.newAttributes;for(let j=0,ne=D.length;j<ne;j++)D[j]=0}function M(D){x(D,0)}function x(D,j){const ne=l.newAttributes,ee=l.enabledAttributes,ce=l.attributeDivisors;ne[D]=1,ee[D]===0&&(i.enableVertexAttribArray(D),ee[D]=1),ce[D]!==j&&(i.vertexAttribDivisor(D,j),ce[D]=j)}function I(){const D=l.newAttributes,j=l.enabledAttributes;for(let ne=0,ee=j.length;ne<ee;ne++)j[ne]!==D[ne]&&(i.disableVertexAttribArray(ne),j[ne]=0)}function F(D,j,ne,ee,ce,ue,ie){ie===!0?i.vertexAttribIPointer(D,j,ne,ce,ue):i.vertexAttribPointer(D,j,ne,ee,ce,ue)}function U(D,j,ne,ee){R();const ce=ee.attributes,ue=ne.getAttributes(),ie=j.defaultAttributeValues;for(const se in ue){const me=ue[se];if(me.location>=0){let Oe=ce[se];if(Oe===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(Oe=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(Oe=D.instanceColor)),Oe!==void 0){const Ce=Oe.normalized,Be=Oe.itemSize,we=e.get(Oe);if(we===void 0)continue;const it=we.buffer,Rt=we.type,fe=we.bytesPerElement,ae=Rt===i.INT||Rt===i.UNSIGNED_INT||Oe.gpuType===1013;if(Oe.isInterleavedBufferAttribute){const pe=Oe.data,Ue=pe.stride,nt=Oe.offset;if(pe.isInstancedInterleavedBuffer){for(let He=0;He<me.locationSize;He++)x(me.location+He,pe.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let He=0;He<me.locationSize;He++)M(me.location+He);i.bindBuffer(i.ARRAY_BUFFER,it);for(let He=0;He<me.locationSize;He++)F(me.location+He,Be/me.locationSize,Rt,Ce,Ue*fe,(nt+Be/me.locationSize*He)*fe,ae)}else{if(Oe.isInstancedBufferAttribute){for(let pe=0;pe<me.locationSize;pe++)x(me.location+pe,Oe.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let pe=0;pe<me.locationSize;pe++)M(me.location+pe);i.bindBuffer(i.ARRAY_BUFFER,it);for(let pe=0;pe<me.locationSize;pe++)F(me.location+pe,Be/me.locationSize,Rt,Ce,Be*fe,Be/me.locationSize*pe*fe,ae)}}else if(ie!==void 0){const Ce=ie[se];if(Ce!==void 0)switch(Ce.length){case 2:i.vertexAttrib2fv(me.location,Ce);break;case 3:i.vertexAttrib3fv(me.location,Ce);break;case 4:i.vertexAttrib4fv(me.location,Ce);break;default:i.vertexAttrib1fv(me.location,Ce)}}}}I()}function O(){Q();for(const D in n){const j=n[D];for(const ne in j){const ee=j[ne];for(const ce in ee)m(ee[ce].object),delete ee[ce];delete j[ne]}delete n[D]}}function G(D){if(n[D.id]===void 0)return;const j=n[D.id];for(const ne in j){const ee=j[ne];for(const ce in ee)m(ee[ce].object),delete ee[ce];delete j[ne]}delete n[D.id]}function k(D){for(const j in n){const ne=n[j];if(ne[D.id]===void 0)continue;const ee=ne[D.id];for(const ce in ee)m(ee[ce].object),delete ee[ce];delete ne[D.id]}}function Q(){A(),u=!0,l!==s&&(l=s,d(l.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:h,reset:Q,resetDefaultState:A,dispose:O,releaseStatesOfGeometry:G,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:M,disableUnusedAttributes:I}}function Uc(i,e,t){let n;function s(d){n=d}function l(d,m){i.drawArrays(n,d,m),t.update(m,n,1)}function u(d,m,_){_!==0&&(i.drawArraysInstanced(n,d,m,_),t.update(m,n,_))}function h(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,m,0,_);let S=0;for(let b=0;b<_;b++)S+=m[b];t.update(S,n,1)}function p(d,m,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<d.length;b++)u(d[b],m[b],v[b]);else{S.multiDrawArraysInstancedWEBGL(n,d,0,m,0,v,0,_);let b=0;for(let R=0;R<_;R++)b+=m[R]*v[R];t.update(b,n,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Nc(i,e,t,n){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(k){return!(k!==1023&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const Q=k===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==1009&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==1015&&!Q)}function p(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const m=p(d);m!==d&&(tt("WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=i.getParameter(i.MAX_SAMPLES),G=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:U,maxSamples:O,samples:G}}function Oc(i){const e=this;let t=null,n=0,s=!1,l=!1;const u=new On,h=new ot,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||n!==0||s;return s=v,n=_.length,S},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,S){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,x=i.get(_);if(!s||b===null||b.length===0||l&&!M)l?m(null):d();else{const I=l?0:n,F=I*4;let U=x.clippingState||null;p.value=U,U=m(b,v,F,S);for(let O=0;O!==F;++O)U[O]=t[O];x.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=I}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(_,v,S,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=p.value,b!==!0||M===null){const x=S+R*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(M===null||M.length<x)&&(M=new Float32Array(x));for(let F=0,U=S;F!==R;++F,U+=4)u.copy(_[F]).applyMatrix4(I,h),u.normal.toArray(M,U),M[U+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function Bc(i){let e=new WeakMap;function t(u,h){return h===303?u.mapping=301:h===304&&(u.mapping=302),u}function n(u){if(u&&u.isTexture){const h=u.mapping;if(h===303||h===304)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const d=new Qs(p.height);return d.fromEquirectangularTexture(i,u),e.set(u,d),u.addEventListener("dispose",s),t(d.texture,u.mapping)}else return null}}return u}function s(u){const h=u.target;h.removeEventListener("dispose",s);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function l(){e=new WeakMap}return{get:n,dispose:l}}const Cn=4,_s=[.125,.215,.35,.446,.526,.582],Bn=20,Gc=256,fi=new Hr,xs=new mt;let Dr=null,Lr=0,Fr=0,Ir=!1;const zc=new Z;class vs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,l={}){const{size:u=256,position:h=zc}=l;Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,n,s,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Es(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ms(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Lr,Fr),this._renderer.xr.enabled=Ir,e.scissorTest=!1,Jn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:ei,depthBuffer:!1},s=Ss(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ss(e,t,n);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vc(l)),this._blurMaterial=Hc(l,e,t),this._ggxMaterial=kc(l,e,t)}return s}_compileMaterial(e){const t=new Mn(new ln,e);this._renderer.compile(t,fi)}_sceneToCubeUV(e,t,n,s,l){const p=new an(90,1,t,n),d=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(xs),_.toneMapping=0,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Ei,new js({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const I=e.background;I?I.isColor&&(M.color.copy(I),e.background=null,x=!0):(M.color.copy(xs),x=!0);for(let F=0;F<6;F++){const U=F%3;U===0?(p.up.set(0,d[F],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+m[F],l.y,l.z)):U===1?(p.up.set(0,0,d[F]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+m[F],l.z)):(p.up.set(0,d[F],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+m[F]));const O=this._cubeSize;Jn(s,U*O,F>2?O:0,O,O),_.setRenderTarget(s),x&&_.render(R,p),_.render(e,p)}_.toneMapping=S,_.autoClear=v,e.background=I}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===301||e.mapping===302;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Es()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ms());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const p=this._cubeSize;Jn(t,0,0,3*p,2*p),n.setRenderTarget(t),n.render(u,fi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[n];h.material=u;const p=u.uniforms,d=n/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-m*m),v=0+d*1.25,S=_*v,{_lodMax:b}=this,R=this._sizeLods[n],M=3*R*(n>b-Cn?n-b+Cn:0),x=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=b-t,Jn(l,M,x,3*R,2*R),s.setRenderTarget(l),s.render(h,fi),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=b-n,Jn(e,M,x,3*R,2*R),s.setRenderTarget(e),s.render(h,fi)}_blur(e,t,n,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,n,s,"latitudinal",l),this._halfBlur(u,e,n,n,s,"longitudinal",l)}_halfBlur(e,t,n,s,l,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&xt("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[s];_.material=d;const v=d.uniforms,S=this._sizeLods[n]-1,b=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Bn-1),R=l/b,M=isFinite(l)?1+Math.floor(m*R):Bn;M>Bn&&tt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bn}`);const x=[];let I=0;for(let k=0;k<Bn;++k){const Q=k/R,A=Math.exp(-Q*Q/2);x.push(A),k===0?I+=A:k<M&&(I+=2*A)}for(let k=0;k<x.length;k++)x[k]=x[k]/I;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:F}=this;v.dTheta.value=b,v.mipInt.value=F-n;const U=this._sizeLods[s],O=3*U*(s>F-Cn?s-F+Cn:0),G=4*(this._cubeSize-U);Jn(t,O,G,3*U,2*U),p.setRenderTarget(t),p.render(_,fi)}}function Vc(i){const e=[],t=[],n=[];let s=i;const l=i-Cn+1+_s.length;for(let u=0;u<l;u++){const h=Math.pow(2,s);e.push(h);let p=1/h;u>i-Cn?p=_s[u-i+Cn-1]:u===0&&(p=0),t.push(p);const d=1/(h-2),m=-d,_=1+d,v=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,b=6,R=3,M=2,x=1,I=new Float32Array(R*b*S),F=new Float32Array(M*b*S),U=new Float32Array(x*b*S);for(let G=0;G<S;G++){const k=G%3*2/3-1,Q=G>2?0:-1,A=[k,Q,0,k+2/3,Q,0,k+2/3,Q+1,0,k,Q,0,k+2/3,Q+1,0,k,Q+1,0];I.set(A,R*b*G),F.set(v,M*b*G);const D=[G,G,G,G,G,G];U.set(D,x*b*G)}const O=new ln;O.setAttribute("position",new fn(I,R)),O.setAttribute("uv",new fn(F,M)),O.setAttribute("faceIndex",new fn(U,x)),n.push(new Mn(O,null)),s>Cn&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ss(i,e,t){const n=new hn(i,e,t);return n.texture.mapping=306,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jn(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kc(i,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Gc,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hc(i,e,t){const n=new Float32Array(Bn),s=new Z(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Bn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ms(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function tr(){return`

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
	`}function Wc(i){let e=new WeakMap,t=null;function n(h){if(h&&h.isTexture){const p=h.mapping,d=p===303||p===304,m=p===301||p===302;if(d||m){let _=e.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return t===null&&(t=new vs(i)),_=d?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return d&&S&&S.height>0||m&&S&&s(S)?(t===null&&(t=new vs(i)),_=d?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function s(h){let p=0;const d=6;for(let m=0;m<d;m++)h[m]!==void 0&&p++;return p===d}function l(h){const p=h.target;p.removeEventListener("dispose",l);const d=e.get(p);d!==void 0&&(e.delete(p),d.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:u}}function Xc(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&gi("WebGLRenderer: "+n+" extension not supported."),s}}}function qc(i,e,t,n){const s={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",u),delete s[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function h(_,v){return s[v.id]===!0||(v.addEventListener("dispose",u),s[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],i.ARRAY_BUFFER)}function d(_){const v=[],S=_.index,b=_.attributes.position;let R=0;if(S!==null){const I=S.array;R=S.version;for(let F=0,U=I.length;F<U;F+=3){const O=I[F+0],G=I[F+1],k=I[F+2];v.push(O,G,G,k,k,O)}}else if(b!==void 0){const I=b.array;R=b.version;for(let F=0,U=I.length/3-1;F<U;F+=3){const O=F+0,G=F+1,k=F+2;v.push(O,G,G,k,k,O)}}else return;const M=new(ks(v)?$s:Ys)(v,1);M.version=R;const x=l.get(_);x&&e.remove(x),l.set(_,M)}function m(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&d(_)}else d(_);return l.get(_)}return{get:h,update:p,getWireframeAttribute:m}}function jc(i,e,t){let n;function s(v){n=v}let l,u;function h(v){l=v.type,u=v.bytesPerElement}function p(v,S){i.drawElements(n,S,l,v*u),t.update(S,n,1)}function d(v,S,b){b!==0&&(i.drawElementsInstanced(n,S,l,v*u,b),t.update(S,n,b))}function m(v,S,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,l,v,0,b);let M=0;for(let x=0;x<b;x++)M+=S[x];t.update(M,n,1)}function _(v,S,b,R){if(b===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)d(v[x]/u,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(n,S,0,l,v,0,R,0,b);let x=0;for(let I=0;I<b;I++)x+=S[I]*R[I];t.update(x,n,1)}}this.setMode=s,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function Yc(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(l,u,h){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=h*(l/3);break;case i.LINES:t.lines+=h*(l/2);break;case i.LINE_STRIP:t.lines+=h*(l-1);break;case i.LINE_LOOP:t.lines+=h*l;break;case i.POINTS:t.points+=h*l;break;default:xt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function $c(i,e,t){const n=new WeakMap,s=new Ft;function l(u,h,p){const d=u.morphTargetInfluences,m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=m!==void 0?m.length:0;let v=n.get(h);if(v===void 0||v.count!==_){let A=function(){k.dispose(),n.delete(h),h.removeEventListener("dispose",A)};v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,M=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let F=0;S===!0&&(F=1),b===!0&&(F=2),R===!0&&(F=3);let U=h.attributes.position.count*F,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const G=new Float32Array(U*O*4*_),k=new Hs(G,U,O,_);k.type=1015,k.needsUpdate=!0;const Q=F*4;for(let D=0;D<_;D++){const j=M[D],ne=x[D],ee=I[D],ce=U*O*4*D;for(let ue=0;ue<j.count;ue++){const ie=ue*Q;S===!0&&(s.fromBufferAttribute(j,ue),G[ce+ie+0]=s.x,G[ce+ie+1]=s.y,G[ce+ie+2]=s.z,G[ce+ie+3]=0),b===!0&&(s.fromBufferAttribute(ne,ue),G[ce+ie+4]=s.x,G[ce+ie+5]=s.y,G[ce+ie+6]=s.z,G[ce+ie+7]=0),R===!0&&(s.fromBufferAttribute(ee,ue),G[ce+ie+8]=s.x,G[ce+ie+9]=s.y,G[ce+ie+10]=s.z,G[ce+ie+11]=ee.itemSize===4?s.w:1)}}v={count:_,texture:k,size:new Et(U,O)},n.set(h,v),h.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let S=0;for(let R=0;R<d.length;R++)S+=d[R];const b=h.morphTargetsRelative?1:1-S;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",d)}p.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:l}}function Kc(i,e,t,n){let s=new WeakMap;function l(p){const d=n.render.frame,m=p.geometry,_=e.get(p,m);if(s.get(_)!==d&&(e.update(_),s.set(_,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),s.get(p)!==d&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),s.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;s.get(v)!==d&&(v.update(),s.set(v,d))}return _}function u(){s=new WeakMap}function h(p){const d=p.target;d.removeEventListener("dispose",h),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:l,dispose:u}}const Zc={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Jc(i,e,t,n,s){const l=new hn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),u=new hn(e,t,{type:1016,depthBuffer:!1,stencilBuffer:!1}),h=new ln;h.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new nn([0,2,0,0,2,0],2));const p=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Mn(h,p),m=new Hr(-1,1,1,-1,0,1);let _=null,v=null,S=!1,b,R=null,M=[],x=!1;this.setSize=function(I,F){l.setSize(I,F),u.setSize(I,F);for(let U=0;U<M.length;U++){const O=M[U];O.setSize&&O.setSize(I,F)}},this.setEffects=function(I){M=I,x=M.length>0&&M[0].isRenderPass===!0;const F=l.width,U=l.height;for(let O=0;O<M.length;O++){const G=M[O];G.setSize&&G.setSize(F,U)}},this.begin=function(I,F){if(S||I.toneMapping===0&&M.length===0)return!1;if(R=F,F!==null){const U=F.width,O=F.height;(l.width!==U||l.height!==O)&&this.setSize(U,O)}return x===!1&&I.setRenderTarget(l),b=I.toneMapping,I.toneMapping=0,!0},this.hasRenderPass=function(){return x},this.end=function(I,F){I.toneMapping=b,S=!0;let U=l,O=u;for(let G=0;G<M.length;G++){const k=M[G];if(k.enabled!==!1&&(k.render(I,O,U,F),k.needsSwap!==!1)){const Q=U;U=O,O=Q}}if(_!==I.outputColorSpace||v!==I.toneMapping){_=I.outputColorSpace,v=I.toneMapping,p.defines={},pt.getTransfer(_)===wt&&(p.defines.SRGB_TRANSFER="");const G=Zc[v];G&&(p.defines[G]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=U.texture,I.setRenderTarget(R),I.render(d,m),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),h.dispose(),p.dispose()}}const io=new kt,Br=new _i(1,1),ro=new Hs,so=new _o,oo=new Js,ys=[],Ts=[],ws=new Float32Array(16),bs=new Float32Array(9),As=new Float32Array(4);function ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let l=ys[s];if(l===void 0&&(l=new Float32Array(s),ys[s]=l),e!==0){n.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,i[u].toArray(l,h)}return l}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nr(i,e){let t=Ts[e];t===void 0&&(t=new Int32Array(e),Ts[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qc(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function tu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function nu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function iu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;As.set(n),i.uniformMatrix2fv(this.addr,!1,As),Ot(t,n)}}function ru(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;bs.set(n),i.uniformMatrix3fv(this.addr,!1,bs),Ot(t,n)}}function su(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;ws.set(n),i.uniformMatrix4fv(this.addr,!1,ws),Ot(t,n)}}function ou(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function au(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function lu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function cu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function uu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function fu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function du(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function pu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(Br.compareFunction=t.isReversedDepthBuffer()?518:515,l=Br):l=io,t.setTexture2D(e||l,s)}function mu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||so,s)}function gu(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||oo,s)}function _u(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ro,s)}function xu(i){switch(i){case 5126:return Qc;case 35664:return eu;case 35665:return tu;case 35666:return nu;case 35674:return iu;case 35675:return ru;case 35676:return su;case 5124:case 35670:return ou;case 35667:case 35671:return au;case 35668:case 35672:return lu;case 35669:case 35673:return cu;case 5125:return uu;case 36294:return hu;case 36295:return fu;case 36296:return du;case 35678:case 36198:case 36298:case 36306:case 35682:return pu;case 35679:case 36299:case 36307:return mu;case 35680:case 36300:case 36308:case 36293:return gu;case 36289:case 36303:case 36311:case 36292:return _u}}function vu(i,e){i.uniform1fv(this.addr,e)}function Su(i,e){const t=ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Mu(i,e){const t=ri(e,this.size,3);i.uniform3fv(this.addr,t)}function Eu(i,e){const t=ri(e,this.size,4);i.uniform4fv(this.addr,t)}function yu(i,e){const t=ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tu(i,e){const t=ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wu(i,e){const t=ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bu(i,e){i.uniform1iv(this.addr,e)}function Au(i,e){i.uniform2iv(this.addr,e)}function Ru(i,e){i.uniform3iv(this.addr,e)}function Cu(i,e){i.uniform4iv(this.addr,e)}function Pu(i,e){i.uniform1uiv(this.addr,e)}function Du(i,e){i.uniform2uiv(this.addr,e)}function Lu(i,e){i.uniform3uiv(this.addr,e)}function Fu(i,e){i.uniform4uiv(this.addr,e)}function Iu(i,e,t){const n=this.cache,s=e.length,l=nr(t,s);Nt(n,l)||(i.uniform1iv(this.addr,l),Ot(n,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=Br:u=io;for(let h=0;h!==s;++h)t.setTexture2D(e[h]||u,l[h])}function Uu(i,e,t){const n=this.cache,s=e.length,l=nr(t,s);Nt(n,l)||(i.uniform1iv(this.addr,l),Ot(n,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||so,l[u])}function Nu(i,e,t){const n=this.cache,s=e.length,l=nr(t,s);Nt(n,l)||(i.uniform1iv(this.addr,l),Ot(n,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||oo,l[u])}function Ou(i,e,t){const n=this.cache,s=e.length,l=nr(t,s);Nt(n,l)||(i.uniform1iv(this.addr,l),Ot(n,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||ro,l[u])}function Bu(i){switch(i){case 5126:return vu;case 35664:return Su;case 35665:return Mu;case 35666:return Eu;case 35674:return yu;case 35675:return Tu;case 35676:return wu;case 5124:case 35670:return bu;case 35667:case 35671:return Au;case 35668:case 35672:return Ru;case 35669:case 35673:return Cu;case 5125:return Pu;case 36294:return Du;case 36295:return Lu;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return Iu;case 35679:case 36299:case 36307:return Uu;case 35680:case 36300:case 36308:case 36293:return Nu;case 36289:case 36303:case 36311:case 36292:return Ou}}class Gu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xu(t.type)}}class zu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bu(t.type)}}class Vu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const h=s[l];h.setValue(e,t[h.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function Rs(i,e){i.seq.push(e),i.map[e.id]=e}function ku(i,e,t){const n=i.name,s=n.length;for(Ur.lastIndex=0;;){const l=Ur.exec(n),u=Ur.lastIndex;let h=l[1];const p=l[2]==="]",d=l[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===s){Rs(t,d===void 0?new Gu(h,i,e):new zu(h,i,e));break}else{let _=t.map[h];_===void 0&&(_=new Vu(h),Rs(t,_)),t=_}}}class $i{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<n;++u){const h=e.getActiveUniform(t,u),p=e.getUniformLocation(t,h.name);ku(h,p,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,n,s){const l=this.map[t];l!==void 0&&l.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let l=0,u=t.length;l!==u;++l){const h=t[l],p=n[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&n.push(u)}return n}}function Cs(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Hu=37297;let Wu=0;function Xu(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const h=u+1;n.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return n.join(`
`)}const Ps=new ot;function qu(i){pt._getMatrix(Ps,pt.workingColorSpace,i);const e=`mat3( ${Ps.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case Ki:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ds(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(n&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Xu(i.getShaderSource(e),h)}else return l}function ju(i,e){const t=qu(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Yu={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function $u(i,e){const t=Yu[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ji=new Z;function Ku(){pt.getLuminanceCoefficients(ji);const i=ji.x.toFixed(4),e=ji.y.toFixed(4),t=ji.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pi).join(`
`)}function Ju(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qu(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const l=i.getActiveAttrib(e,s),u=l.name;let h=1;l.type===i.FLOAT_MAT2&&(h=2),l.type===i.FLOAT_MAT3&&(h=3),l.type===i.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:h}}return t}function pi(i){return i!==""}function Ls(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fs(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eh=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gr(i){return i.replace(eh,nh)}const th=new Map;function nh(i,e){let t=at[e];if(t===void 0){const n=th.get(e);if(n!==void 0)t=at[n],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gr(t)}const ih=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Is(i){return i.replace(ih,rh)}function rh(i,e,t,n){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Us(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const sh={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function oh(i){return sh[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ah={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function lh(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ah[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ch={302:"ENVMAP_MODE_REFRACTION"};function uh(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ch[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hh={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function fh(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hh[i.combine]||"ENVMAP_BLENDING_NONE"}function dh(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ph(i,e,t,n){const s=i.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=oh(t),d=lh(t),m=uh(t),_=fh(t),v=dh(t),S=Zu(t),b=Ju(l),R=s.createProgram();let M,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(pi).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(pi).join(`
`),x.length>0&&(x+=`
`)):(M=[Us(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),x=[Us(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?at.tonemapping_pars_fragment:"",t.toneMapping!==0?$u("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,ju("linearToOutputTexel",t.outputColorSpace),Ku(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pi).join(`
`)),u=Gr(u),u=Ls(u,t),u=Fs(u,t),h=Gr(h),h=Ls(h,t),h=Fs(h,t),u=Is(u),h=Is(h),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",t.glslVersion===Xr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=I+M+u,U=I+x+h,O=Cs(s,s.VERTEX_SHADER,F),G=Cs(s,s.FRAGMENT_SHADER,U);s.attachShader(R,O),s.attachShader(R,G),t.index0AttributeName!==void 0?s.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(R,0,"position"),s.linkProgram(R);function k(j){if(i.debug.checkShaderErrors){const ne=s.getProgramInfoLog(R)||"",ee=s.getShaderInfoLog(O)||"",ce=s.getShaderInfoLog(G)||"",ue=ne.trim(),ie=ee.trim(),se=ce.trim();let me=!0,Oe=!0;if(s.getProgramParameter(R,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,R,O,G);else{const Ce=Ds(s,O,"vertex"),Be=Ds(s,G,"fragment");xt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(R,s.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ue+`
`+Ce+`
`+Be)}else ue!==""?tt("WebGLProgram: Program Info Log:",ue):(ie===""||se==="")&&(Oe=!1);Oe&&(j.diagnostics={runnable:me,programLog:ue,vertexShader:{log:ie,prefix:M},fragmentShader:{log:se,prefix:x}})}s.deleteShader(O),s.deleteShader(G),Q=new $i(s,R),A=Qu(s,R)}let Q;this.getUniforms=function(){return Q===void 0&&k(this),Q};let A;this.getAttributes=function(){return A===void 0&&k(this),A};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(R,Hu)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wu++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=G,this}let mh=0;class gh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(n),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}}class _h{constructor(e){this.id=mh++,this.code=e,this.usedTimes=0}}function xh(i,e,t,n,s,l,u){const h=new Xs,p=new gh,d=new Set,m=[],_=new Map,v=s.logarithmicDepthBuffer;let S=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(A){return d.add(A),A===0?"uv":`uv${A}`}function M(A,D,j,ne,ee){const ce=ne.fog,ue=ee.geometry,ie=A.isMeshStandardMaterial?ne.environment:null,se=(A.isMeshStandardMaterial?t:e).get(A.envMap||ie),me=se&&se.mapping===306?se.image.height:null,Oe=b[A.type];A.precision!==null&&(S=s.getMaxPrecision(A.precision),S!==A.precision&&tt("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const Ce=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Be=Ce!==void 0?Ce.length:0;let we=0;ue.morphAttributes.position!==void 0&&(we=1),ue.morphAttributes.normal!==void 0&&(we=2),ue.morphAttributes.color!==void 0&&(we=3);let it,Rt,fe,ae;if(Oe){const y=un[Oe];it=y.vertexShader,Rt=y.fragmentShader}else it=A.vertexShader,Rt=A.fragmentShader,p.update(A),fe=p.getVertexShaderID(A),ae=p.getFragmentShaderID(A);const pe=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),nt=ee.isInstancedMesh===!0,He=ee.isBatchedMesh===!0,ht=!!A.map,It=!!A.matcap,ct=!!se,vt=!!A.aoMap,gt=!!A.lightMap,rt=!!A.bumpMap,Lt=!!A.normalMap,z=!!A.displacementMap,ft=!!A.emissiveMap,_t=!!A.metalnessMap,St=!!A.roughnessMap,Ge=A.anisotropy>0,L=A.clearcoat>0,E=A.dispersion>0,X=A.iridescence>0,le=A.sheen>0,he=A.transmission>0,re=Ge&&!!A.anisotropyMap,qe=L&&!!A.clearcoatMap,be=L&&!!A.clearcoatNormalMap,We=L&&!!A.clearcoatRoughnessMap,Qe=X&&!!A.iridescenceMap,_e=X&&!!A.iridescenceThicknessMap,Ae=le&&!!A.sheenColorMap,ke=le&&!!A.sheenRoughnessMap,Xe=!!A.specularMap,Re=!!A.specularColorMap,st=!!A.specularIntensityMap,H=he&&!!A.transmissionMap,De=he&&!!A.thicknessMap,Me=!!A.gradientMap,g=!!A.alphaMap,o=A.alphaTest>0,a=!!A.alphaHash,r=!!A.extensions;let c=0;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(c=i.toneMapping);const f={shaderID:Oe,shaderType:A.type,shaderName:A.name,vertexShader:it,fragmentShader:Rt,defines:A.defines,customVertexShaderID:fe,customFragmentShaderID:ae,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:He,batchingColor:He&&ee._colorsTexture!==null,instancing:nt,instancingColor:nt&&ee.instanceColor!==null,instancingMorph:nt&&ee.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ei,alphaToCoverage:!!A.alphaToCoverage,map:ht,matcap:It,envMap:ct,envMapMode:ct&&se.mapping,envMapCubeUVHeight:me,aoMap:vt,lightMap:gt,bumpMap:rt,normalMap:Lt,displacementMap:z,emissiveMap:ft,normalMapObjectSpace:Lt&&A.normalMapType===1,normalMapTangentSpace:Lt&&A.normalMapType===0,metalnessMap:_t,roughnessMap:St,anisotropy:Ge,anisotropyMap:re,clearcoat:L,clearcoatMap:qe,clearcoatNormalMap:be,clearcoatRoughnessMap:We,dispersion:E,iridescence:X,iridescenceMap:Qe,iridescenceThicknessMap:_e,sheen:le,sheenColorMap:Ae,sheenRoughnessMap:ke,specularMap:Xe,specularColorMap:Re,specularIntensityMap:st,transmission:he,transmissionMap:H,thicknessMap:De,gradientMap:Me,opaque:A.transparent===!1&&A.blending===1&&A.alphaToCoverage===!1,alphaMap:g,alphaTest:o,alphaHash:a,combine:A.combine,mapUv:ht&&R(A.map.channel),aoMapUv:vt&&R(A.aoMap.channel),lightMapUv:gt&&R(A.lightMap.channel),bumpMapUv:rt&&R(A.bumpMap.channel),normalMapUv:Lt&&R(A.normalMap.channel),displacementMapUv:z&&R(A.displacementMap.channel),emissiveMapUv:ft&&R(A.emissiveMap.channel),metalnessMapUv:_t&&R(A.metalnessMap.channel),roughnessMapUv:St&&R(A.roughnessMap.channel),anisotropyMapUv:re&&R(A.anisotropyMap.channel),clearcoatMapUv:qe&&R(A.clearcoatMap.channel),clearcoatNormalMapUv:be&&R(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&R(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&R(A.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&R(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&R(A.sheenColorMap.channel),sheenRoughnessMapUv:ke&&R(A.sheenRoughnessMap.channel),specularMapUv:Xe&&R(A.specularMap.channel),specularColorMapUv:Re&&R(A.specularColorMap.channel),specularIntensityMapUv:st&&R(A.specularIntensityMap.channel),transmissionMapUv:H&&R(A.transmissionMap.channel),thicknessMapUv:De&&R(A.thicknessMap.channel),alphaMapUv:g&&R(A.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Lt||Ge),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ue.attributes.uv&&(ht||g),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:ee.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:we,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&j.length>0,shadowMapType:i.shadowMap.type,toneMapping:c,decodeVideoTexture:ht&&A.map.isVideoTexture===!0&&pt.getTransfer(A.map.colorSpace)===wt,decodeVideoTextureEmissive:ft&&A.emissiveMap.isVideoTexture===!0&&pt.getTransfer(A.emissiveMap.colorSpace)===wt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===2,flipSided:A.side===1,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:r&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(r&&A.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return f.vertexUv1s=d.has(1),f.vertexUv2s=d.has(2),f.vertexUv3s=d.has(3),d.clear(),f}function x(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const j in A.defines)D.push(j),D.push(A.defines[j]);return A.isRawShaderMaterial===!1&&(I(D,A),F(D,A),D.push(i.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function I(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function F(A,D){h.disableAll(),D.instancing&&h.enable(0),D.instancingColor&&h.enable(1),D.instancingMorph&&h.enable(2),D.matcap&&h.enable(3),D.envMap&&h.enable(4),D.normalMapObjectSpace&&h.enable(5),D.normalMapTangentSpace&&h.enable(6),D.clearcoat&&h.enable(7),D.iridescence&&h.enable(8),D.alphaTest&&h.enable(9),D.vertexColors&&h.enable(10),D.vertexAlphas&&h.enable(11),D.vertexUv1s&&h.enable(12),D.vertexUv2s&&h.enable(13),D.vertexUv3s&&h.enable(14),D.vertexTangents&&h.enable(15),D.anisotropy&&h.enable(16),D.alphaHash&&h.enable(17),D.batching&&h.enable(18),D.dispersion&&h.enable(19),D.batchingColor&&h.enable(20),D.gradientMap&&h.enable(21),A.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),A.push(h.mask)}function U(A){const D=b[A.type];let j;if(D){const ne=un[D];j=Po.clone(ne.uniforms)}else j=A.uniforms;return j}function O(A,D){let j=_.get(D);return j!==void 0?++j.usedTimes:(j=new ph(i,D,A,l),m.push(j),_.set(D,j)),j}function G(A){if(--A.usedTimes===0){const D=m.indexOf(A);m[D]=m[m.length-1],m.pop(),_.delete(A.cacheKey),A.destroy()}}function k(A){p.remove(A)}function Q(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:U,acquireProgram:O,releaseProgram:G,releaseShaderCache:k,programs:m,dispose:Q}}function vh(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let h=i.get(u);return h===void 0&&(h={},i.set(u,h)),h}function n(u){i.delete(u)}function s(u,h,p){i.get(u)[h]=p}function l(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:l}}function Sh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ns(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Os(){const i=[];let e=0;const t=[],n=[],s=[];function l(){e=0,t.length=0,n.length=0,s.length=0}function u(_,v,S,b,R,M){let x=i[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},i[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=b,x.renderOrder=_.renderOrder,x.z=R,x.group=M),e++,x}function h(_,v,S,b,R,M){const x=u(_,v,S,b,R,M);S.transmission>0?n.push(x):S.transparent===!0?s.push(x):t.push(x)}function p(_,v,S,b,R,M){const x=u(_,v,S,b,R,M);S.transmission>0?n.unshift(x):S.transparent===!0?s.unshift(x):t.unshift(x)}function d(_,v){t.length>1&&t.sort(_||Sh),n.length>1&&n.sort(v||Ns),s.length>1&&s.sort(v||Ns)}function m(){for(let _=e,v=i.length;_<v;_++){const S=i[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:s,init:l,push:h,unshift:p,finish:m,sort:d}}function Mh(){let i=new WeakMap;function e(n,s){const l=i.get(n);let u;return l===void 0?(u=new Os,i.set(n,[u])):s>=l.length?(u=new Os,l.push(u)):u=l[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function Eh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new mt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function yh(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Th=0;function wh(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bh(i){const e=new Eh,t=yh(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new Z);const s=new Z,l=new Dt,u=new Dt;function h(d){let m=0,_=0,v=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let S=0,b=0,R=0,M=0,x=0,I=0,F=0,U=0,O=0,G=0,k=0;d.sort(wh);for(let A=0,D=d.length;A<D;A++){const j=d[A],ne=j.color,ee=j.intensity,ce=j.distance;let ue=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===1030?ue=j.shadow.map.texture:ue=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)m+=ne.r*ee,_+=ne.g*ee,v+=ne.b*ee;else if(j.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(j.sh.coefficients[ie],ee);k++}else if(j.isDirectionalLight){const ie=e.get(j);if(ie.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const se=j.shadow,me=t.get(j);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,n.directionalShadow[S]=me,n.directionalShadowMap[S]=ue,n.directionalShadowMatrix[S]=j.shadow.matrix,I++}n.directional[S]=ie,S++}else if(j.isSpotLight){const ie=e.get(j);ie.position.setFromMatrixPosition(j.matrixWorld),ie.color.copy(ne).multiplyScalar(ee),ie.distance=ce,ie.coneCos=Math.cos(j.angle),ie.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ie.decay=j.decay,n.spot[R]=ie;const se=j.shadow;if(j.map&&(n.spotLightMap[O]=j.map,O++,se.updateMatrices(j),j.castShadow&&G++),n.spotLightMatrix[R]=se.matrix,j.castShadow){const me=t.get(j);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,n.spotShadow[R]=me,n.spotShadowMap[R]=ue,U++}R++}else if(j.isRectAreaLight){const ie=e.get(j);ie.color.copy(ne).multiplyScalar(ee),ie.halfWidth.set(j.width*.5,0,0),ie.halfHeight.set(0,j.height*.5,0),n.rectArea[M]=ie,M++}else if(j.isPointLight){const ie=e.get(j);if(ie.color.copy(j.color).multiplyScalar(j.intensity),ie.distance=j.distance,ie.decay=j.decay,j.castShadow){const se=j.shadow,me=t.get(j);me.shadowIntensity=se.intensity,me.shadowBias=se.bias,me.shadowNormalBias=se.normalBias,me.shadowRadius=se.radius,me.shadowMapSize=se.mapSize,me.shadowCameraNear=se.camera.near,me.shadowCameraFar=se.camera.far,n.pointShadow[b]=me,n.pointShadowMap[b]=ue,n.pointShadowMatrix[b]=j.shadow.matrix,F++}n.point[b]=ie,b++}else if(j.isHemisphereLight){const ie=e.get(j);ie.skyColor.copy(j.color).multiplyScalar(ee),ie.groundColor.copy(j.groundColor).multiplyScalar(ee),n.hemi[x]=ie,x++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=_,n.ambient[2]=v;const Q=n.hash;(Q.directionalLength!==S||Q.pointLength!==b||Q.spotLength!==R||Q.rectAreaLength!==M||Q.hemiLength!==x||Q.numDirectionalShadows!==I||Q.numPointShadows!==F||Q.numSpotShadows!==U||Q.numSpotMaps!==O||Q.numLightProbes!==k)&&(n.directional.length=S,n.spot.length=R,n.rectArea.length=M,n.point.length=b,n.hemi.length=x,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=U+O-G,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=G,n.numLightProbes=k,Q.directionalLength=S,Q.pointLength=b,Q.spotLength=R,Q.rectAreaLength=M,Q.hemiLength=x,Q.numDirectionalShadows=I,Q.numPointShadows=F,Q.numSpotShadows=U,Q.numSpotMaps=O,Q.numLightProbes=k,n.version=Th++)}function p(d,m){let _=0,v=0,S=0,b=0,R=0;const M=m.matrixWorldInverse;for(let x=0,I=d.length;x<I;x++){const F=d[x];if(F.isDirectionalLight){const U=n.directional[_];U.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(M),_++}else if(F.isSpotLight){const U=n.spot[S];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(F.matrixWorld),s.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(s),U.direction.transformDirection(M),S++}else if(F.isRectAreaLight){const U=n.rectArea[b];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(M),u.identity(),l.copy(F.matrixWorld),l.premultiply(M),u.extractRotation(l),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),b++}else if(F.isPointLight){const U=n.point[v];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(M),v++}else if(F.isHemisphereLight){const U=n.hemi[R];U.direction.setFromMatrixPosition(F.matrixWorld),U.direction.transformDirection(M),R++}}}return{setup:h,setupView:p,state:n}}function Bs(i){const e=new bh(i),t=[],n=[];function s(m){d.camera=m,t.length=0,n.length=0}function l(m){t.push(m)}function u(m){n.push(m)}function h(){e.setup(t)}function p(m){e.setupView(t,m)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:h,setupLightsView:p,pushLight:l,pushShadow:u}}function Ah(i){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let h;return u===void 0?(h=new Bs(i),e.set(s,[h])):l>=u.length?(h=new Bs(i),u.push(h)):h=u[l],h}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ch=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ph=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Dh=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Gs=new Dt,di=new Z,Nr=new Z;function Lh(i,e,t){let n=new Vr;const s=new Et,l=new Et,u=new Ft,h=new Ho,p=new Wo,d={},m=t.maxTextureSize,_={0:1,1:0,2:2},v=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Rh,fragmentShader:Ch}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new ln;b.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Mn(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let x=this.type;this.render=function(G,k,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;G.type===2&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),G.type=1);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),j=i.getActiveMipmapLevel(),ne=i.state;ne.setBlending(0),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ee=x!==this.type;ee&&k.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(ue=>ue.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,ue=G.length;ce<ue;ce++){const ie=G[ce],se=ie.shadow;if(se===void 0){tt("WebGLShadowMap:",ie,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);const me=se.getFrameExtents();if(s.multiply(me),l.copy(se.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/me.x),s.x=l.x*me.x,se.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/me.y),s.y=l.y*me.y,se.mapSize.y=l.y)),se.map===null||ee===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===3){if(ie.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new hn(s.x,s.y,{format:1030,type:1016,minFilter:1006,magFilter:1006,generateMipmaps:!1}),se.map.texture.name=ie.name+".shadowMap",se.map.depthTexture=new _i(s.x,s.y,1015),se.map.depthTexture.name=ie.name+".shadowMapDepth",se.map.depthTexture.format=1026,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=1003,se.map.depthTexture.magFilter=1003}else{ie.isPointLight?(se.map=new Qs(s.x),se.map.depthTexture=new Vo(s.x,1014)):(se.map=new hn(s.x,s.y),se.map.depthTexture=new _i(s.x,s.y,1014)),se.map.depthTexture.name=ie.name+".shadowMap",se.map.depthTexture.format=1026;const Ce=i.state.buffers.depth.getReversed();this.type===1?(se.map.depthTexture.compareFunction=Ce?518:515,se.map.depthTexture.minFilter=1006,se.map.depthTexture.magFilter=1006):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=1003,se.map.depthTexture.magFilter=1003)}se.camera.updateProjectionMatrix()}const Oe=se.map.isWebGLCubeRenderTarget?6:1;for(let Ce=0;Ce<Oe;Ce++){if(se.map.isWebGLCubeRenderTarget)i.setRenderTarget(se.map,Ce),i.clear();else{Ce===0&&(i.setRenderTarget(se.map),i.clear());const Be=se.getViewport(Ce);u.set(l.x*Be.x,l.y*Be.y,l.x*Be.z,l.y*Be.w),ne.viewport(u)}if(ie.isPointLight){const Be=se.camera,we=se.matrix,it=ie.distance||Be.far;it!==Be.far&&(Be.far=it,Be.updateProjectionMatrix()),di.setFromMatrixPosition(ie.matrixWorld),Be.position.copy(di),Nr.copy(Be.position),Nr.add(Ph[Ce]),Be.up.copy(Dh[Ce]),Be.lookAt(Nr),Be.updateMatrixWorld(),we.makeTranslation(-di.x,-di.y,-di.z),Gs.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),se._frustum.setFromProjectionMatrix(Gs,Be.coordinateSystem,Be.reversedDepth)}else se.updateMatrices(ie);n=se.getFrustum(),U(k,Q,se.camera,ie,this.type)}se.isPointLightShadow!==!0&&this.type===3&&I(se,Q),se.needsUpdate=!1}x=this.type,M.needsUpdate=!1,i.setRenderTarget(A,D,j)};function I(G,k){const Q=e.update(R);v.defines.VSM_SAMPLES!==G.blurSamples&&(v.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new hn(s.x,s.y,{format:1030,type:1016})),v.uniforms.shadow_pass.value=G.map.depthTexture,v.uniforms.resolution.value=G.mapSize,v.uniforms.radius.value=G.radius,i.setRenderTarget(G.mapPass),i.clear(),i.renderBufferDirect(k,null,Q,v,R,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,i.setRenderTarget(G.map),i.clear(),i.renderBufferDirect(k,null,Q,S,R,null)}function F(G,k,Q,A){let D=null;const j=Q.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(j!==void 0)D=j;else if(D=Q.isPointLight===!0?p:h,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const ne=D.uuid,ee=k.uuid;let ce=d[ne];ce===void 0&&(ce={},d[ne]=ce);let ue=ce[ee];ue===void 0&&(ue=D.clone(),ce[ee]=ue,k.addEventListener("dispose",O)),D=ue}if(D.visible=k.visible,D.wireframe=k.wireframe,A===3?D.side=k.shadowSide!==null?k.shadowSide:k.side:D.side=k.shadowSide!==null?k.shadowSide:_[k.side],D.alphaMap=k.alphaMap,D.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,D.map=k.map,D.clipShadows=k.clipShadows,D.clippingPlanes=k.clippingPlanes,D.clipIntersection=k.clipIntersection,D.displacementMap=k.displacementMap,D.displacementScale=k.displacementScale,D.displacementBias=k.displacementBias,D.wireframeLinewidth=k.wireframeLinewidth,D.linewidth=k.linewidth,Q.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const ne=i.properties.get(D);ne.light=Q}return D}function U(G,k,Q,A,D){if(G.visible===!1)return;if(G.layers.test(k.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&D===3)&&(!G.frustumCulled||n.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,G.matrixWorld);const ee=e.update(G),ce=G.material;if(Array.isArray(ce)){const ue=ee.groups;for(let ie=0,se=ue.length;ie<se;ie++){const me=ue[ie],Oe=ce[me.materialIndex];if(Oe&&Oe.visible){const Ce=F(G,Oe,A,D);G.onBeforeShadow(i,G,k,Q,ee,Ce,me),i.renderBufferDirect(Q,null,ee,Ce,G,me),G.onAfterShadow(i,G,k,Q,ee,Ce,me)}}}else if(ce.visible){const ue=F(G,ce,A,D);G.onBeforeShadow(i,G,k,Q,ee,ue,null),i.renderBufferDirect(Q,null,ee,ue,G,null),G.onAfterShadow(i,G,k,Q,ee,ue,null)}}const ne=G.children;for(let ee=0,ce=ne.length;ee<ce;ee++)U(ne[ee],k,Q,A,D)}function O(G){G.target.removeEventListener("dispose",O);for(const Q in d){const A=d[Q],D=G.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const Fh={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Ih(i,e){function t(){let H=!1;const De=new Ft;let Me=null;const g=new Ft(0,0,0,0);return{setMask:function(o){Me!==o&&!H&&(i.colorMask(o,o,o,o),Me=o)},setLocked:function(o){H=o},setClear:function(o,a,r,c,f){f===!0&&(o*=c,a*=c,r*=c),De.set(o,a,r,c),g.equals(De)===!1&&(i.clearColor(o,a,r,c),g.copy(De))},reset:function(){H=!1,Me=null,g.set(-1,0,0,0)}}}function n(){let H=!1,De=!1,Me=null,g=null,o=null;return{setReversed:function(a){if(De!==a){const r=e.get("EXT_clip_control");a?r.clipControlEXT(r.LOWER_LEFT_EXT,r.ZERO_TO_ONE_EXT):r.clipControlEXT(r.LOWER_LEFT_EXT,r.NEGATIVE_ONE_TO_ONE_EXT),De=a;const c=o;o=null,this.setClear(c)}},getReversed:function(){return De},setTest:function(a){a?pe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(a){Me!==a&&!H&&(i.depthMask(a),Me=a)},setFunc:function(a){if(De&&(a=Fh[a]),g!==a){switch(a){case 0:i.depthFunc(i.NEVER);break;case 1:i.depthFunc(i.ALWAYS);break;case 2:i.depthFunc(i.LESS);break;case 3:i.depthFunc(i.LEQUAL);break;case 4:i.depthFunc(i.EQUAL);break;case 5:i.depthFunc(i.GEQUAL);break;case 6:i.depthFunc(i.GREATER);break;case 7:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}g=a}},setLocked:function(a){H=a},setClear:function(a){o!==a&&(De&&(a=1-a),i.clearDepth(a),o=a)},reset:function(){H=!1,Me=null,g=null,o=null,De=!1}}}function s(){let H=!1,De=null,Me=null,g=null,o=null,a=null,r=null,c=null,f=null;return{setTest:function(y){H||(y?pe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(y){De!==y&&!H&&(i.stencilMask(y),De=y)},setFunc:function(y,w,C){(Me!==y||g!==w||o!==C)&&(i.stencilFunc(y,w,C),Me=y,g=w,o=C)},setOp:function(y,w,C){(a!==y||r!==w||c!==C)&&(i.stencilOp(y,w,C),a=y,r=w,c=C)},setLocked:function(y){H=y},setClear:function(y){f!==y&&(i.clearStencil(y),f=y)},reset:function(){H=!1,De=null,Me=null,g=null,o=null,a=null,r=null,c=null,f=null}}}const l=new t,u=new n,h=new s,p=new WeakMap,d=new WeakMap;let m={},_={},v=new WeakMap,S=[],b=null,R=!1,M=null,x=null,I=null,F=null,U=null,O=null,G=null,k=new mt(0,0,0),Q=0,A=!1,D=null,j=null,ne=null,ee=null,ce=null;const ue=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,se=0;const me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(me)[1]),ie=se>=1):me.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ie=se>=2);let Oe=null,Ce={};const Be=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),it=new Ft().fromArray(Be),Rt=new Ft().fromArray(we);function fe(H,De,Me,g){const o=new Uint8Array(4),a=i.createTexture();i.bindTexture(H,a),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let r=0;r<Me;r++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(De,0,i.RGBA,1,1,g,0,i.RGBA,i.UNSIGNED_BYTE,o):i.texImage2D(De+r,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,o);return a}const ae={};ae[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),pe(i.DEPTH_TEST),u.setFunc(3),rt(!1),Lt(1),pe(i.CULL_FACE),vt(0);function pe(H){m[H]!==!0&&(i.enable(H),m[H]=!0)}function Ue(H){m[H]!==!1&&(i.disable(H),m[H]=!1)}function nt(H,De){return _[H]!==De?(i.bindFramebuffer(H,De),_[H]=De,H===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=De),H===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=De),!0):!1}function He(H,De){let Me=S,g=!1;if(H){Me=v.get(De),Me===void 0&&(Me=[],v.set(De,Me));const o=H.textures;if(Me.length!==o.length||Me[0]!==i.COLOR_ATTACHMENT0){for(let a=0,r=o.length;a<r;a++)Me[a]=i.COLOR_ATTACHMENT0+a;Me.length=o.length,g=!0}}else Me[0]!==i.BACK&&(Me[0]=i.BACK,g=!0);g&&i.drawBuffers(Me)}function ht(H){return b!==H?(i.useProgram(H),b=H,!0):!1}const It={100:i.FUNC_ADD,101:i.FUNC_SUBTRACT,102:i.FUNC_REVERSE_SUBTRACT};It[103]=i.MIN,It[104]=i.MAX;const ct={200:i.ZERO,201:i.ONE,202:i.SRC_COLOR,204:i.SRC_ALPHA,210:i.SRC_ALPHA_SATURATE,208:i.DST_COLOR,206:i.DST_ALPHA,203:i.ONE_MINUS_SRC_COLOR,205:i.ONE_MINUS_SRC_ALPHA,209:i.ONE_MINUS_DST_COLOR,207:i.ONE_MINUS_DST_ALPHA,211:i.CONSTANT_COLOR,212:i.ONE_MINUS_CONSTANT_COLOR,213:i.CONSTANT_ALPHA,214:i.ONE_MINUS_CONSTANT_ALPHA};function vt(H,De,Me,g,o,a,r,c,f,y){if(H===0){R===!0&&(Ue(i.BLEND),R=!1);return}if(R===!1&&(pe(i.BLEND),R=!0),H!==5){if(H!==M||y!==A){if((x!==100||U!==100)&&(i.blendEquation(i.FUNC_ADD),x=100,U=100),y)switch(H){case 1:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFunc(i.ONE,i.ONE);break;case 3:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case 4:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:xt("WebGLState: Invalid blending: ",H);break}else switch(H){case 1:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case 2:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case 3:xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xt("WebGLState: Invalid blending: ",H);break}I=null,F=null,O=null,G=null,k.set(0,0,0),Q=0,M=H,A=y}return}o=o||De,a=a||Me,r=r||g,(De!==x||o!==U)&&(i.blendEquationSeparate(It[De],It[o]),x=De,U=o),(Me!==I||g!==F||a!==O||r!==G)&&(i.blendFuncSeparate(ct[Me],ct[g],ct[a],ct[r]),I=Me,F=g,O=a,G=r),(c.equals(k)===!1||f!==Q)&&(i.blendColor(c.r,c.g,c.b,f),k.copy(c),Q=f),M=H,A=!1}function gt(H,De){H.side===2?Ue(i.CULL_FACE):pe(i.CULL_FACE);let Me=H.side===1;De&&(Me=!Me),rt(Me),H.blending===1&&H.transparent===!1?vt(0):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const g=H.stencilWrite;h.setTest(g),g&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ft(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(H){D!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),D=H)}function Lt(H){H!==0?(pe(i.CULL_FACE),H!==j&&(H===1?i.cullFace(i.BACK):H===2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),j=H}function z(H){H!==ne&&(ie&&i.lineWidth(H),ne=H)}function ft(H,De,Me){H?(pe(i.POLYGON_OFFSET_FILL),(ee!==De||ce!==Me)&&(i.polygonOffset(De,Me),ee=De,ce=Me)):Ue(i.POLYGON_OFFSET_FILL)}function _t(H){H?pe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function St(H){H===void 0&&(H=i.TEXTURE0+ue-1),Oe!==H&&(i.activeTexture(H),Oe=H)}function Ge(H,De,Me){Me===void 0&&(Oe===null?Me=i.TEXTURE0+ue-1:Me=Oe);let g=Ce[Me];g===void 0&&(g={type:void 0,texture:void 0},Ce[Me]=g),(g.type!==H||g.texture!==De)&&(Oe!==Me&&(i.activeTexture(Me),Oe=Me),i.bindTexture(H,De||ae[H]),g.type=H,g.texture=De)}function L(){const H=Ce[Oe];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{i.compressedTexImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function le(){try{i.texSubImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function he(){try{i.texSubImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function re(){try{i.compressedTexSubImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function qe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function be(){try{i.texStorage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function We(){try{i.texStorage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function Qe(){try{i.texImage2D(...arguments)}catch(H){xt("WebGLState:",H)}}function _e(){try{i.texImage3D(...arguments)}catch(H){xt("WebGLState:",H)}}function Ae(H){it.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),it.copy(H))}function ke(H){Rt.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Rt.copy(H))}function Xe(H,De){let Me=d.get(De);Me===void 0&&(Me=new WeakMap,d.set(De,Me));let g=Me.get(H);g===void 0&&(g=i.getUniformBlockIndex(De,H.name),Me.set(H,g))}function Re(H,De){const g=d.get(De).get(H);p.get(De)!==g&&(i.uniformBlockBinding(De,g,H.__bindingPointIndex),p.set(De,g))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Oe=null,Ce={},_={},v=new WeakMap,S=[],b=null,R=!1,M=null,x=null,I=null,F=null,U=null,O=null,G=null,k=new mt(0,0,0),Q=0,A=!1,D=null,j=null,ne=null,ee=null,ce=null,it.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:pe,disable:Ue,bindFramebuffer:nt,drawBuffers:He,useProgram:ht,setBlending:vt,setMaterial:gt,setFlipSided:rt,setCullFace:Lt,setLineWidth:z,setPolygonOffset:ft,setScissorTest:_t,activeTexture:St,bindTexture:Ge,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:Qe,texImage3D:_e,updateUBOMapping:Xe,uniformBlockBinding:Re,texStorage2D:be,texStorage3D:We,texSubImage2D:le,texSubImage3D:he,compressedTexSubImage2D:re,compressedTexSubImage3D:qe,scissor:Ae,viewport:ke,reset:st}}function Uh(i,e,t,n,s,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Et,m=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return S?new OffscreenCanvas(L,E):mi("canvas")}function R(L,E,X){let le=1;const he=Ge(L);if((he.width>X||he.height>X)&&(le=X/Math.max(he.width,he.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(le*he.width),qe=Math.floor(le*he.height);_===void 0&&(_=b(re,qe));const be=E?b(re,qe):_;return be.width=re,be.height=qe,be.getContext("2d").drawImage(L,0,0,re,qe),tt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+re+"x"+qe+")."),be}else return"data"in L&&tt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),L;return L}function M(L){return L.generateMipmaps}function x(L){i.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function F(L,E,X,le,he=!1){if(L!==null){if(i[L]!==void 0)return i[L];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=E;if(E===i.RED&&(X===i.FLOAT&&(re=i.R32F),X===i.HALF_FLOAT&&(re=i.R16F),X===i.UNSIGNED_BYTE&&(re=i.R8)),E===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.R8UI),X===i.UNSIGNED_SHORT&&(re=i.R16UI),X===i.UNSIGNED_INT&&(re=i.R32UI),X===i.BYTE&&(re=i.R8I),X===i.SHORT&&(re=i.R16I),X===i.INT&&(re=i.R32I)),E===i.RG&&(X===i.FLOAT&&(re=i.RG32F),X===i.HALF_FLOAT&&(re=i.RG16F),X===i.UNSIGNED_BYTE&&(re=i.RG8)),E===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RG8UI),X===i.UNSIGNED_SHORT&&(re=i.RG16UI),X===i.UNSIGNED_INT&&(re=i.RG32UI),X===i.BYTE&&(re=i.RG8I),X===i.SHORT&&(re=i.RG16I),X===i.INT&&(re=i.RG32I)),E===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGB8UI),X===i.UNSIGNED_SHORT&&(re=i.RGB16UI),X===i.UNSIGNED_INT&&(re=i.RGB32UI),X===i.BYTE&&(re=i.RGB8I),X===i.SHORT&&(re=i.RGB16I),X===i.INT&&(re=i.RGB32I)),E===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),X===i.UNSIGNED_INT&&(re=i.RGBA32UI),X===i.BYTE&&(re=i.RGBA8I),X===i.SHORT&&(re=i.RGBA16I),X===i.INT&&(re=i.RGBA32I)),E===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),E===i.RGBA){const qe=he?Ki:pt.getTransfer(le);X===i.FLOAT&&(re=i.RGBA32F),X===i.HALF_FLOAT&&(re=i.RGBA16F),X===i.UNSIGNED_BYTE&&(re=qe===wt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function U(L,E){let X;return L?E===null||E===1014||E===1020?X=i.DEPTH24_STENCIL8:E===1015?X=i.DEPTH32F_STENCIL8:E===1012&&(X=i.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===1014||E===1020?X=i.DEPTH_COMPONENT24:E===1015?X=i.DEPTH_COMPONENT32F:E===1012&&(X=i.DEPTH_COMPONENT16),X}function O(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==1003&&L.minFilter!==1006?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function G(L){const E=L.target;E.removeEventListener("dispose",G),Q(E),E.isVideoTexture&&m.delete(E)}function k(L){const E=L.target;E.removeEventListener("dispose",k),D(E)}function Q(L){const E=n.get(L);if(E.__webglInit===void 0)return;const X=L.source,le=v.get(X);if(le){const he=le[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&A(L),Object.keys(le).length===0&&v.delete(X)}n.remove(L)}function A(L){const E=n.get(L);i.deleteTexture(E.__webglTexture);const X=L.source,le=v.get(X);delete le[E.__cacheKey],u.memory.textures--}function D(L){const E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(E.__webglFramebuffer[le]))for(let he=0;he<E.__webglFramebuffer[le].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[le][he]);else i.deleteFramebuffer(E.__webglFramebuffer[le]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[le])}else{if(Array.isArray(E.__webglFramebuffer))for(let le=0;le<E.__webglFramebuffer.length;le++)i.deleteFramebuffer(E.__webglFramebuffer[le]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let le=0;le<E.__webglColorRenderbuffer.length;le++)E.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[le]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=L.textures;for(let le=0,he=X.length;le<he;le++){const re=n.get(X[le]);re.__webglTexture&&(i.deleteTexture(re.__webglTexture),u.memory.textures--),n.remove(X[le])}n.remove(L)}let j=0;function ne(){j=0}function ee(){const L=j;return L>=s.maxTextures&&tt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),j+=1,L}function ce(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ue(L,E){const X=n.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){const le=L.image;if(le===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,L,E);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+E)}function ie(L,E){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ae(X,L,E);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+E)}function se(L,E){const X=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){ae(X,L,E);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+E)}function me(L,E){const X=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){pe(X,L,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+E)}const Oe={1e3:i.REPEAT,1001:i.CLAMP_TO_EDGE,1002:i.MIRRORED_REPEAT},Ce={1003:i.NEAREST,1004:i.NEAREST_MIPMAP_NEAREST,1005:i.NEAREST_MIPMAP_LINEAR,1006:i.LINEAR,1007:i.LINEAR_MIPMAP_NEAREST,1008:i.LINEAR_MIPMAP_LINEAR},Be={512:i.NEVER,519:i.ALWAYS,513:i.LESS,515:i.LEQUAL,514:i.EQUAL,518:i.GEQUAL,516:i.GREATER,517:i.NOTEQUAL};function we(L,E){if(E.type===1015&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===1006||E.magFilter===1007||E.magFilter===1005||E.magFilter===1008||E.minFilter===1006||E.minFilter===1007||E.minFilter===1005||E.minFilter===1008)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Oe[E.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Oe[E.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Oe[E.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Ce[E.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Ce[E.minFilter]),E.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===1003||E.minFilter!==1005&&E.minFilter!==1008||E.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function it(L,E){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",G));const le=E.source;let he=v.get(le);he===void 0&&(he={},v.set(le,he));const re=ce(E);if(re!==L.__cacheKey){he[re]===void 0&&(he[re]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,X=!0),he[re].usedTimes++;const qe=he[L.__cacheKey];qe!==void 0&&(he[L.__cacheKey].usedTimes--,qe.usedTimes===0&&A(E)),L.__cacheKey=re,L.__webglTexture=he[re].texture}return X}function Rt(L,E,X){return Math.floor(Math.floor(L/X)/E)}function fe(L,E,X,le){const re=L.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,X,le,E.data);else{re.sort((_e,Ae)=>_e.start-Ae.start);let qe=0;for(let _e=1;_e<re.length;_e++){const Ae=re[qe],ke=re[_e],Xe=Ae.start+Ae.count,Re=Rt(ke.start,E.width,4),st=Rt(Ae.start,E.width,4);ke.start<=Xe+1&&Re===st&&Rt(ke.start+ke.count-1,E.width,4)===Re?Ae.count=Math.max(Ae.count,ke.start+ke.count-Ae.start):(++qe,re[qe]=ke)}re.length=qe+1;const be=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),Qe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ae=re.length;_e<Ae;_e++){const ke=re[_e],Xe=Math.floor(ke.start/4),Re=Math.ceil(ke.count/4),st=Xe%E.width,H=Math.floor(Xe/E.width),De=Re,Me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,st),i.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,st,H,De,Me,X,le,E.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,be),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,Qe)}}function ae(L,E,X){let le=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=i.TEXTURE_3D);const he=it(L,E),re=E.source;t.bindTexture(le,L.__webglTexture,i.TEXTURE0+X);const qe=n.get(re);if(re.version!==qe.__version||he===!0){t.activeTexture(i.TEXTURE0+X);const be=pt.getPrimaries(pt.workingColorSpace),We=E.colorSpace===""?null:pt.getPrimaries(E.colorSpace),Qe=E.colorSpace===""||be===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let _e=R(E.image,!1,s.maxTextureSize);_e=St(E,_e);const Ae=l.convert(E.format,E.colorSpace),ke=l.convert(E.type);let Xe=F(E.internalFormat,Ae,ke,E.colorSpace,E.isVideoTexture);we(le,E);let Re;const st=E.mipmaps,H=E.isVideoTexture!==!0,De=qe.__version===void 0||he===!0,Me=re.dataReady,g=O(E,_e);if(E.isDepthTexture)Xe=U(E.format===1027,E.type),De&&(H?t.texStorage2D(i.TEXTURE_2D,1,Xe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ae,ke,null));else if(E.isDataTexture)if(st.length>0){H&&De&&t.texStorage2D(i.TEXTURE_2D,g,Xe,st[0].width,st[0].height);for(let o=0,a=st.length;o<a;o++)Re=st[o],H?Me&&t.texSubImage2D(i.TEXTURE_2D,o,0,0,Re.width,Re.height,Ae,ke,Re.data):t.texImage2D(i.TEXTURE_2D,o,Xe,Re.width,Re.height,0,Ae,ke,Re.data);E.generateMipmaps=!1}else H?(De&&t.texStorage2D(i.TEXTURE_2D,g,Xe,_e.width,_e.height),Me&&fe(E,_e,Ae,ke)):t.texImage2D(i.TEXTURE_2D,0,Xe,_e.width,_e.height,0,Ae,ke,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,g,Xe,st[0].width,st[0].height,_e.depth);for(let o=0,a=st.length;o<a;o++)if(Re=st[o],E.format!==1023)if(Ae!==null)if(H){if(Me)if(E.layerUpdates.size>0){const r=gs(Re.width,Re.height,E.format,E.type);for(const c of E.layerUpdates){const f=Re.data.subarray(c*r/Re.data.BYTES_PER_ELEMENT,(c+1)*r/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,o,0,0,c,Re.width,Re.height,1,Ae,f)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,o,0,0,0,Re.width,Re.height,_e.depth,Ae,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,o,Xe,Re.width,Re.height,_e.depth,0,Re.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,o,0,0,0,Re.width,Re.height,_e.depth,Ae,ke,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,o,Xe,Re.width,Re.height,_e.depth,0,Ae,ke,Re.data)}else{H&&De&&t.texStorage2D(i.TEXTURE_2D,g,Xe,st[0].width,st[0].height);for(let o=0,a=st.length;o<a;o++)Re=st[o],E.format!==1023?Ae!==null?H?Me&&t.compressedTexSubImage2D(i.TEXTURE_2D,o,0,0,Re.width,Re.height,Ae,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,o,Xe,Re.width,Re.height,0,Re.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(i.TEXTURE_2D,o,0,0,Re.width,Re.height,Ae,ke,Re.data):t.texImage2D(i.TEXTURE_2D,o,Xe,Re.width,Re.height,0,Ae,ke,Re.data)}else if(E.isDataArrayTexture)if(H){if(De&&t.texStorage3D(i.TEXTURE_2D_ARRAY,g,Xe,_e.width,_e.height,_e.depth),Me)if(E.layerUpdates.size>0){const o=gs(_e.width,_e.height,E.format,E.type);for(const a of E.layerUpdates){const r=_e.data.subarray(a*o/_e.data.BYTES_PER_ELEMENT,(a+1)*o/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,a,_e.width,_e.height,1,Ae,ke,r)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,ke,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,_e.width,_e.height,_e.depth,0,Ae,ke,_e.data);else if(E.isData3DTexture)H?(De&&t.texStorage3D(i.TEXTURE_3D,g,Xe,_e.width,_e.height,_e.depth),Me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,ke,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,_e.width,_e.height,_e.depth,0,Ae,ke,_e.data);else if(E.isFramebufferTexture){if(De)if(H)t.texStorage2D(i.TEXTURE_2D,g,Xe,_e.width,_e.height);else{let o=_e.width,a=_e.height;for(let r=0;r<g;r++)t.texImage2D(i.TEXTURE_2D,r,Xe,o,a,0,Ae,ke,null),o>>=1,a>>=1}}else if(st.length>0){if(H&&De){const o=Ge(st[0]);t.texStorage2D(i.TEXTURE_2D,g,Xe,o.width,o.height)}for(let o=0,a=st.length;o<a;o++)Re=st[o],H?Me&&t.texSubImage2D(i.TEXTURE_2D,o,0,0,Ae,ke,Re):t.texImage2D(i.TEXTURE_2D,o,Xe,Ae,ke,Re);E.generateMipmaps=!1}else if(H){if(De){const o=Ge(_e);t.texStorage2D(i.TEXTURE_2D,g,Xe,o.width,o.height)}Me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,ke,_e)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ae,ke,_e);M(E)&&x(le),qe.__version=re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,X){if(E.image.length!==6)return;const le=it(L,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const re=n.get(he);if(he.version!==re.__version||le===!0){t.activeTexture(i.TEXTURE0+X);const qe=pt.getPrimaries(pt.workingColorSpace),be=E.colorSpace===""?null:pt.getPrimaries(E.colorSpace),We=E.colorSpace===""||qe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let a=0;a<6;a++)!Qe&&!_e?Ae[a]=R(E.image[a],!0,s.maxCubemapSize):Ae[a]=_e?E.image[a].image:E.image[a],Ae[a]=St(E,Ae[a]);const ke=Ae[0],Xe=l.convert(E.format,E.colorSpace),Re=l.convert(E.type),st=F(E.internalFormat,Xe,Re,E.colorSpace),H=E.isVideoTexture!==!0,De=re.__version===void 0||le===!0,Me=he.dataReady;let g=O(E,ke);we(i.TEXTURE_CUBE_MAP,E);let o;if(Qe){H&&De&&t.texStorage2D(i.TEXTURE_CUBE_MAP,g,st,ke.width,ke.height);for(let a=0;a<6;a++){o=Ae[a].mipmaps;for(let r=0;r<o.length;r++){const c=o[r];E.format!==1023?Xe!==null?H?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,0,0,c.width,c.height,Xe,c.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,st,c.width,c.height,0,c.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,0,0,c.width,c.height,Xe,Re,c.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,st,c.width,c.height,0,Xe,Re,c.data)}}}else{if(o=E.mipmaps,H&&De){o.length>0&&g++;const a=Ge(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,g,st,a.width,a.height)}for(let a=0;a<6;a++)if(_e){H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,Ae[a].width,Ae[a].height,Xe,Re,Ae[a].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,st,Ae[a].width,Ae[a].height,0,Xe,Re,Ae[a].data);for(let r=0;r<o.length;r++){const f=o[r].image[a].image;H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r+1,0,0,f.width,f.height,Xe,Re,f.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r+1,st,f.width,f.height,0,Xe,Re,f.data)}}else{H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,0,0,Xe,Re,Ae[a]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,0,st,Xe,Re,Ae[a]);for(let r=0;r<o.length;r++){const c=o[r];H?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r+1,0,0,Xe,Re,c.image[a]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+a,r+1,st,Xe,Re,c.image[a])}}}M(E)&&x(i.TEXTURE_CUBE_MAP),re.__version=he.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Ue(L,E,X,le,he,re){const qe=l.convert(X.format,X.colorSpace),be=l.convert(X.type),We=F(X.internalFormat,qe,be,X.colorSpace),Qe=n.get(E),_e=n.get(X);if(_e.__renderTarget=E,!Qe.__hasExternalTextures){const Ae=Math.max(1,E.width>>re),ke=Math.max(1,E.height>>re);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,re,We,Ae,ke,E.depth,0,qe,be,null):t.texImage2D(he,re,We,Ae,ke,0,qe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ft(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,he,_e.__webglTexture,0,z(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,he,_e.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,E,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),E.depthBuffer){const le=E.depthTexture,he=le&&le.isDepthTexture?le.type:null,re=U(E.stencilBuffer,he),qe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(E),re,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(E),re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,qe,i.RENDERBUFFER,L)}else{const le=E.textures;for(let he=0;he<le.length;he++){const re=le[he],qe=l.convert(re.format,re.colorSpace),be=l.convert(re.type),We=F(re.internalFormat,qe,be,re.colorSpace);ft(E)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,z(E),We,E.width,E.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,z(E),We,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,We,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(L,E,X){const le=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=n.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",G)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),we(i.TEXTURE_CUBE_MAP,E.depthTexture);const Qe=l.convert(E.depthTexture.format),_e=l.convert(E.depthTexture.type);let Ae;E.depthTexture.format===1026?Ae=i.DEPTH_COMPONENT24:E.depthTexture.format===1027&&(Ae=i.DEPTH24_STENCIL8);for(let ke=0;ke<6;ke++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ke,0,Ae,E.width,E.height,0,Qe,_e,null)}}else ue(E.depthTexture,0);const re=he.__webglTexture,qe=z(E),be=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,We=E.depthTexture.format===1027?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===1026)ft(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,be,re,0,qe):i.framebufferTexture2D(i.FRAMEBUFFER,We,be,re,0);else if(E.depthTexture.format===1027)ft(E)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,We,be,re,0,qe):i.framebufferTexture2D(i.FRAMEBUFFER,We,be,re,0);else throw new Error("Unknown depthTexture format")}function ht(L){const E=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),le){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,le.removeEventListener("dispose",he)};le.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=le}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let le=0;le<6;le++)He(E.__webglFramebuffer[le],L,le);else{const le=L.texture.mipmaps;le&&le.length>0?He(E.__webglFramebuffer[0],L,0):He(E.__webglFramebuffer,L,0)}else if(X){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]===void 0)E.__webglDepthbuffer[le]=i.createRenderbuffer(),nt(E.__webglDepthbuffer[le],L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}}else{const le=L.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),nt(E.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function It(L,E,X){const le=n.get(L);E!==void 0&&Ue(le.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ht(L)}function ct(L){const E=L.texture,X=n.get(L),le=n.get(E);L.addEventListener("dispose",k);const he=L.textures,re=L.isWebGLCubeRenderTarget===!0,qe=he.length>1;if(qe||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=E.version,u.memory.textures++),re){X.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[be]=[];for(let We=0;We<E.mipmaps.length;We++)X.__webglFramebuffer[be][We]=i.createFramebuffer()}else X.__webglFramebuffer[be]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)X.__webglFramebuffer[be]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(qe)for(let be=0,We=he.length;be<We;be++){const Qe=n.get(he[be]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=i.createTexture(),u.memory.textures++)}if(L.samples>0&&ft(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const We=he[be];X.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[be]);const Qe=l.convert(We.format,We.colorSpace),_e=l.convert(We.type),Ae=F(We.internalFormat,Qe,_e,We.colorSpace,L.isXRRenderTarget===!0),ke=z(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ae,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,X.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),we(i.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ue(X.__webglFramebuffer[be][We],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,We);else Ue(X.__webglFramebuffer[be],L,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(E)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,We=he.length;be<We;be++){const Qe=he[be],_e=n.get(Qe);let Ae=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),we(Ae,Qe),Ue(X.__webglFramebuffer,L,Qe,i.COLOR_ATTACHMENT0+be,Ae,0),M(Qe)&&x(Ae)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,le.__webglTexture),we(be,E),E.mipmaps&&E.mipmaps.length>0)for(let We=0;We<E.mipmaps.length;We++)Ue(X.__webglFramebuffer[We],L,E,i.COLOR_ATTACHMENT0,be,We);else Ue(X.__webglFramebuffer,L,E,i.COLOR_ATTACHMENT0,be,0);M(E)&&x(be),t.unbindTexture()}L.depthBuffer&&ht(L)}function vt(L){const E=L.textures;for(let X=0,le=E.length;X<le;X++){const he=E[X];if(M(he)){const re=I(L),qe=n.get(he).__webglTexture;t.bindTexture(re,qe),x(re),t.unbindTexture()}}}const gt=[],rt=[];function Lt(L){if(L.samples>0){if(ft(L)===!1){const E=L.textures,X=L.width,le=L.height;let he=i.COLOR_BUFFER_BIT;const re=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,qe=n.get(L),be=E.length>1;if(be)for(let Qe=0;Qe<E.length;Qe++)t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const We=L.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const _e=n.get(E[Qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,X,le,0,0,X,le,he,i.NEAREST),p===!0&&(gt.length=0,rt.length=0,gt.push(i.COLOR_ATTACHMENT0+Qe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(gt.push(re),rt.push(re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Qe=0;Qe<E.length;Qe++){t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.RENDERBUFFER,qe.__webglColorRenderbuffer[Qe]);const _e=n.get(E[Qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,qe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Qe,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function z(L){return Math.min(s.maxSamples,L.samples)}function ft(L){const E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(L){const E=u.render.frame;m.get(L)!==E&&(m.set(L,E),L.update())}function St(L,E){const X=L.colorSpace,le=L.format,he=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==ei&&X!==""&&(pt.getTransfer(X)===wt?(le!==1023||he!==1009)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xt("WebGLTextures: Unsupported texture color space:",X)),E}function Ge(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=ue,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=me,this.rebindTextures=It,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Nh(i,e){function t(n,s=""){let l;const u=pt.getTransfer(s);if(n===1009)return i.UNSIGNED_BYTE;if(n===1017)return i.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return i.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return i.BYTE;if(n===1011)return i.SHORT;if(n===1012)return i.UNSIGNED_SHORT;if(n===1013)return i.INT;if(n===1014)return i.UNSIGNED_INT;if(n===1015)return i.FLOAT;if(n===1016)return i.HALF_FLOAT;if(n===1021)return i.ALPHA;if(n===1022)return i.RGB;if(n===1023)return i.RGBA;if(n===1026)return i.DEPTH_COMPONENT;if(n===1027)return i.DEPTH_STENCIL;if(n===1028)return i.RED;if(n===1029)return i.RED_INTEGER;if(n===1030)return i.RG;if(n===1031)return i.RG_INTEGER;if(n===1033)return i.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(u===wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(n===33776)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(n===33776)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(n===35840)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(n===36196||n===37492)return u===wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(n===37496)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return l.COMPRESSED_R11_EAC;if(n===37489)return l.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return l.COMPRESSED_RG11_EAC;if(n===37491)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(n===37808)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return u===wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(n===36492)return u===wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(n===36283)return l.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Oh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bh=`
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

}`;class Gh{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new eo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:Oh,fragmentShader:Bh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zh extends ni{constructor(e,t){super();const n=this;let s=null,l=1,u=null,h="local-floor",p=1,d=null,m=null,_=null,v=null,S=null,b=null;const R=typeof XRWebGLBinding<"u",M=new Gh,x={},I=t.getContextAttributes();let F=null,U=null;const O=[],G=[],k=new Et;let Q=null;const A=new an;A.viewport=new Ft;const D=new an;D.viewport=new Ft;const j=[A,D],ne=new Ko;let ee=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let pe=O[ae];return pe===void 0&&(pe=new wr,O[ae]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ae){let pe=O[ae];return pe===void 0&&(pe=new wr,O[ae]=pe),pe.getGripSpace()},this.getHand=function(ae){let pe=O[ae];return pe===void 0&&(pe=new wr,O[ae]=pe),pe.getHandSpace()};function ue(ae){const pe=G.indexOf(ae.inputSource);if(pe===-1)return;const Ue=O[pe];Ue!==void 0&&(Ue.update(ae.inputSource,ae.frame,d||u),Ue.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ie(){s.removeEventListener("select",ue),s.removeEventListener("selectstart",ue),s.removeEventListener("selectend",ue),s.removeEventListener("squeeze",ue),s.removeEventListener("squeezestart",ue),s.removeEventListener("squeezeend",ue),s.removeEventListener("end",ie),s.removeEventListener("inputsourceschange",se);for(let ae=0;ae<O.length;ae++){const pe=G[ae];pe!==null&&(G[ae]=null,O[ae].disconnect(pe))}ee=null,ce=null,M.reset();for(const ae in x)delete x[ae];e.setRenderTarget(F),S=null,v=null,_=null,s=null,U=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(Q),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,n.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,n.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ae){d=ae},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(F=e.getRenderTarget(),s.addEventListener("select",ue),s.addEventListener("selectstart",ue),s.addEventListener("selectend",ue),s.addEventListener("squeeze",ue),s.addEventListener("squeezestart",ue),s.addEventListener("squeezeend",ue),s.addEventListener("end",ie),s.addEventListener("inputsourceschange",se),I.xrCompatible!==!0&&await t.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,nt=null,He=null;I.depth&&(He=I.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=I.stencil?1027:1026,nt=I.stencil?1020:1014);const ht={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ht),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),U=new hn(v.textureWidth,v.textureHeight,{format:1023,type:1009,depthTexture:new _i(v.textureWidth,v.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ue={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),U=new hn(S.framebufferWidth,S.framebufferHeight,{format:1023,type:1009,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await s.requestReferenceSpace(h),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function se(ae){for(let pe=0;pe<ae.removed.length;pe++){const Ue=ae.removed[pe],nt=G.indexOf(Ue);nt>=0&&(G[nt]=null,O[nt].disconnect(Ue))}for(let pe=0;pe<ae.added.length;pe++){const Ue=ae.added[pe];let nt=G.indexOf(Ue);if(nt===-1){for(let ht=0;ht<O.length;ht++)if(ht>=G.length){G.push(Ue),nt=ht;break}else if(G[ht]===null){G[ht]=Ue,nt=ht;break}if(nt===-1)break}const He=O[nt];He&&He.connect(Ue)}}const me=new Z,Oe=new Z;function Ce(ae,pe,Ue){me.setFromMatrixPosition(pe.matrixWorld),Oe.setFromMatrixPosition(Ue.matrixWorld);const nt=me.distanceTo(Oe),He=pe.projectionMatrix.elements,ht=Ue.projectionMatrix.elements,It=He[14]/(He[10]-1),ct=He[14]/(He[10]+1),vt=(He[9]+1)/He[5],gt=(He[9]-1)/He[5],rt=(He[8]-1)/He[0],Lt=(ht[8]+1)/ht[0],z=It*rt,ft=It*Lt,_t=nt/(-rt+Lt),St=_t*-rt;if(pe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(St),ae.translateZ(_t),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),He[10]===-1)ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ge=It+_t,L=ct+_t,E=z-St,X=ft+(nt-St),le=vt*ct/L*Ge,he=gt*ct/L*Ge;ae.projectionMatrix.makePerspective(E,X,le,he,Ge,L),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Be(ae,pe){pe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(pe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let pe=ae.near,Ue=ae.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),ne.near=D.near=A.near=pe,ne.far=D.far=A.far=Ue,(ee!==ne.near||ce!==ne.far)&&(s.updateRenderState({depthNear:ne.near,depthFar:ne.far}),ee=ne.near,ce=ne.far),ne.layers.mask=ae.layers.mask|6,A.layers.mask=ne.layers.mask&3,D.layers.mask=ne.layers.mask&5;const nt=ae.parent,He=ne.cameras;Be(ne,nt);for(let ht=0;ht<He.length;ht++)Be(He[ht],nt);He.length===2?Ce(ne,A,D):ne.projectionMatrix.copy(A.projectionMatrix),we(ae,ne,nt)};function we(ae,pe,Ue){Ue===null?ae.matrix.copy(pe.matrixWorld):(ae.matrix.copy(Ue.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Or*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(ae){p=ae,v!==null&&(v.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ne)},this.getCameraTexture=function(ae){return x[ae]};let it=null;function Rt(ae,pe){if(m=pe.getViewerPose(d||u),b=pe,m!==null){const Ue=m.views;S!==null&&(e.setRenderTargetFramebuffer(U,S.framebuffer),e.setRenderTarget(U));let nt=!1;Ue.length!==ne.cameras.length&&(ne.cameras.length=0,nt=!0);for(let ct=0;ct<Ue.length;ct++){const vt=Ue[ct];let gt=null;if(S!==null)gt=S.getViewport(vt);else{const Lt=_.getViewSubImage(v,vt);gt=Lt.viewport,ct===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(U))}let rt=j[ct];rt===void 0&&(rt=new an,rt.layers.enable(ct),rt.viewport=new Ft,j[ct]=rt),rt.matrix.fromArray(vt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(vt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(ne.matrix.copy(rt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),nt===!0&&ne.cameras.push(rt)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&R){_=n.getBinding();const ct=_.getDepthInformation(Ue[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,s.renderState)}if(He&&He.includes("camera-access")&&R){e.state.unbindTexture(),_=n.getBinding();for(let ct=0;ct<Ue.length;ct++){const vt=Ue[ct].camera;if(vt){let gt=x[vt];gt||(gt=new eo,x[vt]=gt);const rt=_.getCameraImage(vt);gt.sourceTexture=rt}}}}for(let Ue=0;Ue<O.length;Ue++){const nt=G[Ue],He=O[Ue];nt!==null&&He!==void 0&&He.update(nt,pe,d||u)}it&&it(ae,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),b=null}const fe=new no;fe.setAnimationLoop(Rt),this.setAnimationLoop=function(ae){it=ae},this.dispose=function(){}}}const Nn=new dn,Vh=new Dt;function kh(i,e){function t(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function n(M,x){x.color.getRGB(M.fogColor.value,Ks(i)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function s(M,x,I,F,U){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(M,x):x.isMeshToonMaterial?(l(M,x),_(M,x)):x.isMeshPhongMaterial?(l(M,x),m(M,x)):x.isMeshStandardMaterial?(l(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,U)):x.isMeshMatcapMaterial?(l(M,x),b(M,x)):x.isMeshDepthMaterial?l(M,x):x.isMeshDistanceMaterial?(l(M,x),R(M,x)):x.isMeshNormalMaterial?l(M,x):x.isLineBasicMaterial?(u(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?p(M,x,I,F):x.isSpriteMaterial?d(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,t(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===1&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,t(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===1&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,t(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,t(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const I=e.get(x),F=I.envMap,U=I.envMapRotation;F&&(M.envMap.value=F,Nn.copy(U),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),M.envMapRotation.value.setFromMatrix4(Vh.makeRotationFromEuler(Nn)),M.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,M.aoMapTransform))}function u(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,I,F){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*I,M.scale.value=F*.5,x.map&&(M.map.value=x.map,t(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function d(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,t(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,t(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function m(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,I){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===1&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const I=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Hh(i,e,t,n){let s={},l={},u=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,F){const U=F.program;n.uniformBlockBinding(I,U)}function d(I,F){let U=s[I.id];U===void 0&&(b(I),U=m(I),s[I.id]=U,I.addEventListener("dispose",M));const O=F.program;n.updateUBOMapping(I,O);const G=e.render.frame;l[I.id]!==G&&(v(I),l[I.id]=G)}function m(I){const F=_();I.__bindingPointIndex=F;const U=i.createBuffer(),O=I.__size,G=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,O,G),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,F,U),U}function _(){for(let I=0;I<h;I++)if(u.indexOf(I)===-1)return u.push(I),I;return xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const F=s[I.id],U=I.uniforms,O=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,F);for(let G=0,k=U.length;G<k;G++){const Q=Array.isArray(U[G])?U[G]:[U[G]];for(let A=0,D=Q.length;A<D;A++){const j=Q[A];if(S(j,G,A,O)===!0){const ne=j.__offset,ee=Array.isArray(j.value)?j.value:[j.value];let ce=0;for(let ue=0;ue<ee.length;ue++){const ie=ee[ue],se=R(ie);typeof ie=="number"||typeof ie=="boolean"?(j.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,ne+ce,j.__data)):ie.isMatrix3?(j.__data[0]=ie.elements[0],j.__data[1]=ie.elements[1],j.__data[2]=ie.elements[2],j.__data[3]=0,j.__data[4]=ie.elements[3],j.__data[5]=ie.elements[4],j.__data[6]=ie.elements[5],j.__data[7]=0,j.__data[8]=ie.elements[6],j.__data[9]=ie.elements[7],j.__data[10]=ie.elements[8],j.__data[11]=0):(ie.toArray(j.__data,ce),ce+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ne,j.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(I,F,U,O){const G=I.value,k=F+"_"+U;if(O[k]===void 0)return typeof G=="number"||typeof G=="boolean"?O[k]=G:O[k]=G.clone(),!0;{const Q=O[k];if(typeof G=="number"||typeof G=="boolean"){if(Q!==G)return O[k]=G,!0}else if(Q.equals(G)===!1)return Q.copy(G),!0}return!1}function b(I){const F=I.uniforms;let U=0;const O=16;for(let k=0,Q=F.length;k<Q;k++){const A=Array.isArray(F[k])?F[k]:[F[k]];for(let D=0,j=A.length;D<j;D++){const ne=A[D],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let ce=0,ue=ee.length;ce<ue;ce++){const ie=ee[ce],se=R(ie),me=U%O,Oe=me%se.boundary,Ce=me+Oe;U+=Oe,Ce!==0&&O-Ce<se.storage&&(U+=O-Ce),ne.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=U,U+=se.storage}}}const G=U%O;return G>0&&(U+=O-G),I.__size=U,I.__cache={},this}function R(I){const F={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(F.boundary=4,F.storage=4):I.isVector2?(F.boundary=8,F.storage=8):I.isVector3||I.isColor?(F.boundary=16,F.storage=12):I.isVector4?(F.boundary=16,F.storage=16):I.isMatrix3?(F.boundary=48,F.storage=48):I.isMatrix4?(F.boundary=64,F.storage=64):I.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",I),F}function M(I){const F=I.target;F.removeEventListener("dispose",M);const U=u.indexOf(F.__bindingPointIndex);u.splice(U,1),i.deleteBuffer(s[F.id]),delete s[F.id],delete l[F.id]}function x(){for(const I in s)i.deleteBuffer(s[I]);u=[],s={},l={}}return{bind:p,update:d,dispose:x}}const Wh=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function Xh(){return cn===null&&(cn=new Uo(Wh,16,16,1030,1016),cn.name="DFG_LUT",cn.minFilter=1006,cn.magFilter=1006,cn.wrapS=1001,cn.wrapT=1001,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class hf{constructor(e={}){const{canvas:t=lo(),context:n=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=1009}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=u;const R=S,M=new Set([1033,1031,1029]),x=new Set([1009,1014,1012,1020,1017,1018]),I=new Uint32Array(4),F=new Int32Array(4);let U=null,O=null;const G=[],k=[];let Q=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=en;let j=0,ne=0,ee=null,ce=-1,ue=null;const ie=new Ft,se=new Ft;let me=null;const Oe=new mt(0);let Ce=0,Be=t.width,we=t.height,it=1,Rt=null,fe=null;const ae=new Ft(0,0,Be,we),pe=new Ft(0,0,Be,we);let Ue=!1;const nt=new Vr;let He=!1,ht=!1;const It=new Dt,ct=new Z,vt=new Ft,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Lt(){return ee===null?it:1}let z=n;function ft(T,V){return t.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r182"),t.addEventListener("webglcontextlost",c,!1),t.addEventListener("webglcontextrestored",f,!1),t.addEventListener("webglcontextcreationerror",y,!1),z===null){const V="webgl2";if(z=ft(V,T),z===null)throw ft(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw xt("WebGLRenderer: "+T.message),T}let _t,St,Ge,L,E,X,le,he,re,qe,be,We,Qe,_e,Ae,ke,Xe,Re,st,H,De,Me,g,o;function a(){_t=new Xc(z),_t.init(),Me=new Nh(z,_t),St=new Nc(z,_t,e,Me),Ge=new Ih(z,_t),St.reversedDepthBuffer&&v&&Ge.buffers.depth.setReversed(!0),L=new Yc(z),E=new vh,X=new Uh(z,_t,Ge,E,St,Me,L),le=new Bc(A),he=new Wc(A),re=new Jo(z),g=new Ic(z,re),qe=new qc(z,re,L,g),be=new Kc(z,qe,re,L),st=new $c(z,St,X),ke=new Oc(E),We=new xh(A,le,he,_t,St,g,ke),Qe=new kh(A,E),_e=new Mh,Ae=new Ah(_t),Re=new Fc(A,le,he,Ge,be,b,p),Xe=new Lh(A,be,St),o=new Hh(z,L,St,Ge),H=new Uc(z,_t,L),De=new jc(z,_t,L),L.programs=We.programs,A.capabilities=St,A.extensions=_t,A.properties=E,A.renderLists=_e,A.shadowMap=Xe,A.state=Ge,A.info=L}a(),R!==1009&&(Q=new Jc(R,t.width,t.height,s,l));const r=new zh(A,z);this.xr=r,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(T){T!==void 0&&(it=T,this.setSize(Be,we,!1))},this.getSize=function(T){return T.set(Be,we)},this.setSize=function(T,V,K=!0){if(r.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=T,we=V,t.width=Math.floor(T*it),t.height=Math.floor(V*it),K===!0&&(t.style.width=T+"px",t.style.height=V+"px"),Q!==null&&Q.setSize(t.width,t.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(Be*it,we*it).floor()},this.setDrawingBufferSize=function(T,V,K){Be=T,we=V,it=K,t.width=Math.floor(T*K),t.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(R===1009){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ie)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,V,K,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,V,K,$),Ge.viewport(ie.copy(ae).multiplyScalar(it).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,V,K,$){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,V,K,$),Ge.scissor(se.copy(pe).multiplyScalar(it).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){Ge.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){Rt=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,K=!0){let $=0;if(T){let Y=!1;if(ee!==null){const Ee=ee.texture.format;Y=M.has(Ee)}if(Y){const Ee=ee.texture.type,ye=x.has(Ee),Te=Re.getClearColor(),Ne=Re.getClearAlpha(),xe=Te.r,ze=Te.g,Ve=Te.b;ye?(I[0]=xe,I[1]=ze,I[2]=Ve,I[3]=Ne,z.clearBufferuiv(z.COLOR,0,I)):(F[0]=xe,F[1]=ze,F[2]=Ve,F[3]=Ne,z.clearBufferiv(z.COLOR,0,F))}else $|=z.COLOR_BUFFER_BIT}V&&($|=z.DEPTH_BUFFER_BIT),K&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",c,!1),t.removeEventListener("webglcontextrestored",f,!1),t.removeEventListener("webglcontextcreationerror",y,!1),Re.dispose(),_e.dispose(),Ae.dispose(),E.dispose(),le.dispose(),he.dispose(),be.dispose(),g.dispose(),o.dispose(),We.dispose(),r.dispose(),r.removeEventListener("sessionstart",Se),r.removeEventListener("sessionend",J),oe.stop()};function c(T){T.preventDefault(),jr("WebGLRenderer: Context Lost."),D=!0}function f(){jr("WebGLRenderer: Context Restored."),D=!1;const T=L.autoReset,V=Xe.enabled,K=Xe.autoUpdate,$=Xe.needsUpdate,Y=Xe.type;a(),L.autoReset=T,Xe.enabled=V,Xe.autoUpdate=K,Xe.needsUpdate=$,Xe.type=Y}function y(T){xt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function w(T){const V=T.target;V.removeEventListener("dispose",w),C(V)}function C(T){P(T),E.remove(T)}function P(T){const V=E.get(T).programs;V!==void 0&&(V.forEach(function(K){We.releaseProgram(K)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,$,Y,Ee){V===null&&(V=gt);const ye=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=Ye(T,V,K,$,Y);Ge.setMaterial($,ye);let Ne=K.index,xe=1;if($.wireframe===!0){if(Ne=qe.getWireframeAttribute(K),Ne===void 0)return;xe=2}const ze=K.drawRange,Ve=K.attributes.position;let Ke=ze.start*xe,et=(ze.start+ze.count)*xe;Ee!==null&&(Ke=Math.max(Ke,Ee.start*xe),et=Math.min(et,(Ee.start+Ee.count)*xe)),Ne!==null?(Ke=Math.max(Ke,0),et=Math.min(et,Ne.count)):Ve!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,Ve.count));const Ct=et-Ke;if(Ct<0||Ct===1/0)return;g.setup(Y,$,Te,K,Ne);let Pt,Tt=H;if(Ne!==null&&(Pt=re.get(Ne),Tt=De,Tt.setIndex(Pt)),Y.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*Lt()),Tt.setMode(z.LINES)):Tt.setMode(z.TRIANGLES);else if(Y.isLine){let $e=$.linewidth;$e===void 0&&($e=1),Ge.setLineWidth($e*Lt()),Y.isLineSegments?Tt.setMode(z.LINES):Y.isLineLoop?Tt.setMode(z.LINE_LOOP):Tt.setMode(z.LINE_STRIP)}else Y.isPoints?Tt.setMode(z.POINTS):Y.isSprite&&Tt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)gi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,Mt=Y._multiDrawCounts,dt=Y._multiDrawCount,Ht=Ne?re.get(Ne).bytesPerElement:1,En=E.get($).currentProgram.getUniforms();for(let Wt=0;Wt<dt;Wt++)En.setValue(z,"_gl_DrawID",Wt),Tt.render($e[Wt]/Ht,Mt[Wt])}else if(Y.isInstancedMesh)Tt.renderInstances(Ke,Ct,Y.count);else if(K.isInstancedBufferGeometry){const $e=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Mt=Math.min(K.instanceCount,$e);Tt.renderInstances(Ke,Ct,Mt)}else Tt.render(Ke,Ct)};function q(T,V,K){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,Je(T,V,K),T.side=0,T.needsUpdate=!0,Je(T,V,K),T.side=2):Je(T,V,K)}this.compile=function(T,V,K=null){K===null&&(K=T),O=Ae.get(K),O.init(V),k.push(O),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(O.pushLight(Y),Y.castShadow&&O.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(O.pushLight(Y),Y.castShadow&&O.pushShadow(Y))}),O.setupLights();const $=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ee=Y.material;if(Ee)if(Array.isArray(Ee))for(let ye=0;ye<Ee.length;ye++){const Te=Ee[ye];q(Te,K,Y),$.add(Te)}else q(Ee,K,Y),$.add(Ee)}),O=k.pop(),$},this.compileAsync=function(T,V,K=null){const $=this.compile(T,V,K);return new Promise(Y=>{function Ee(){if($.forEach(function(ye){E.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){Y(T);return}setTimeout(Ee,10)}_t.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let N=null;function te(T){N&&N(T)}function Se(){oe.stop()}function J(){oe.start()}const oe=new no;oe.setAnimationLoop(te),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(T){N=T,r.setAnimationLoop(T),T===null?oe.stop():oe.start()},r.addEventListener("sessionstart",Se),r.addEventListener("sessionend",J),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const K=r.enabled===!0&&r.isPresenting===!0,$=Q!==null&&(ee===null||K)&&Q.begin(A,ee);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),r.enabled===!0&&r.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(r.cameraAutoUpdate===!0&&r.updateCamera(V),V=r.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,V,ee),O=Ae.get(T,k.length),O.init(V),k.push(O),It.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),nt.setFromProjectionMatrix(It,2e3,V.reversedDepth),ht=this.localClippingEnabled,He=ke.init(this.clippingPlanes,ht),U=_e.get(T,G.length),U.init(),G.push(U),r.enabled===!0&&r.isPresenting===!0){const ye=A.xr.getDepthSensingMesh();ye!==null&&Pe(ye,V,-1/0,A.sortObjects)}Pe(T,V,0,A.sortObjects),U.finish(),A.sortObjects===!0&&U.sort(Rt,fe),rt=r.enabled===!1||r.isPresenting===!1||r.hasDepthSensing()===!1,rt&&Re.addToRenderList(U,T),this.info.render.frame++,He===!0&&ke.beginShadows();const Y=O.state.shadowsArray;if(Xe.render(Y,T,V),He===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&Q.hasRenderPass())===!1){const ye=U.opaque,Te=U.transmissive;if(O.setupLights(),V.isArrayCamera){const Ne=V.cameras;if(Te.length>0)for(let xe=0,ze=Ne.length;xe<ze;xe++){const Ve=Ne[xe];ve(ye,Te,T,Ve)}rt&&Re.render(T);for(let xe=0,ze=Ne.length;xe<ze;xe++){const Ve=Ne[xe];B(U,T,Ve,Ve.viewport)}}else Te.length>0&&ve(ye,Te,T,V),rt&&Re.render(T),B(U,T,V)}ee!==null&&ne===0&&(X.updateMultisampleRenderTarget(ee),X.updateRenderTargetMipmap(ee)),$&&Q.end(A),T.isScene===!0&&T.onAfterRender(A,T,V),g.resetDefaultState(),ce=-1,ue=null,k.pop(),k.length>0?(O=k[k.length-1],He===!0&&ke.setGlobalState(A.clippingPlanes,O.state.camera)):O=null,G.pop(),G.length>0?U=G[G.length-1]:U=null};function Pe(T,V,K,$){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)O.pushLight(T),T.castShadow&&O.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){$&&vt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const ye=be.update(T),Te=T.material;Te.visible&&U.push(T,ye,Te,K,vt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const ye=be.update(T),Te=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),vt.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),vt.copy(ye.boundingSphere.center)),vt.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(Te)){const Ne=ye.groups;for(let xe=0,ze=Ne.length;xe<ze;xe++){const Ve=Ne[xe],Ke=Te[Ve.materialIndex];Ke&&Ke.visible&&U.push(T,ye,Ke,K,vt.z,Ve)}}else Te.visible&&U.push(T,ye,Te,K,vt.z,null)}}const Ee=T.children;for(let ye=0,Te=Ee.length;ye<Te;ye++)Pe(Ee[ye],V,K,$)}function B(T,V,K,$){const{opaque:Y,transmissive:Ee,transparent:ye}=T;O.setupLightsView(K),He===!0&&ke.setGlobalState(A.clippingPlanes,K),$&&Ge.viewport(ie.copy($)),Y.length>0&&Ie(Y,V,K),Ee.length>0&&Ie(Ee,V,K),ye.length>0&&Ie(ye,V,K),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ve(T,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[$.id]===void 0){const Ke=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[$.id]=new hn(1,1,{generateMipmaps:!0,type:Ke?1016:1009,minFilter:1008,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}const Ee=O.state.transmissionRenderTarget[$.id],ye=$.viewport||ie;Ee.setSize(ye.z*A.transmissionResolutionScale,ye.w*A.transmissionResolutionScale);const Te=A.getRenderTarget(),Ne=A.getActiveCubeFace(),xe=A.getActiveMipmapLevel();A.setRenderTarget(Ee),A.getClearColor(Oe),Ce=A.getClearAlpha(),Ce<1&&A.setClearColor(16777215,.5),A.clear(),rt&&Re.render(K);const ze=A.toneMapping;A.toneMapping=0;const Ve=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),O.setupLightsView($),He===!0&&ke.setGlobalState(A.clippingPlanes,$),Ie(T,K,$),X.updateMultisampleRenderTarget(Ee),X.updateRenderTargetMipmap(Ee),_t.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let et=0,Ct=V.length;et<Ct;et++){const Pt=V[et],{object:Tt,geometry:$e,material:Mt,group:dt}=Pt;if(Mt.side===2&&Tt.layers.test($.layers)){const Ht=Mt.side;Mt.side=1,Mt.needsUpdate=!0,Ze(Tt,K,$,$e,Mt,dt),Mt.side=Ht,Mt.needsUpdate=!0,Ke=!0}}Ke===!0&&(X.updateMultisampleRenderTarget(Ee),X.updateRenderTargetMipmap(Ee))}A.setRenderTarget(Te,Ne,xe),A.setClearColor(Oe,Ce),Ve!==void 0&&($.viewport=Ve),A.toneMapping=ze}function Ie(T,V,K){const $=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Ee=T.length;Y<Ee;Y++){const ye=T[Y],{object:Te,geometry:Ne,group:xe}=ye;let ze=ye.material;ze.allowOverride===!0&&$!==null&&(ze=$),Te.layers.test(K.layers)&&Ze(Te,V,K,Ne,ze,xe)}}function Ze(T,V,K,$,Y,Ee){T.onBeforeRender(A,V,K,$,Y,Ee),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(A,V,K,$,T,Ee),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,A.renderBufferDirect(K,V,$,Y,T,Ee),Y.side=0,Y.needsUpdate=!0,A.renderBufferDirect(K,V,$,Y,T,Ee),Y.side=2):A.renderBufferDirect(K,V,$,Y,T,Ee),T.onAfterRender(A,V,K,$,Y,Ee)}function Je(T,V,K){V.isScene!==!0&&(V=gt);const $=E.get(T),Y=O.state.lights,Ee=O.state.shadowsArray,ye=Y.state.version,Te=We.getParameters(T,Y.state,Ee,V,K),Ne=We.getProgramCacheKey(Te);let xe=$.programs;$.environment=T.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(T.isMeshStandardMaterial?he:le).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,xe===void 0&&(T.addEventListener("dispose",w),xe=new Map,$.programs=xe);let ze=xe.get(Ne);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===ye)return je(T,Te),ze}else Te.uniforms=We.getUniforms(T),T.onBeforeCompile(Te,A),ze=We.acquireProgram(Te,Ne),xe.set(Ne,ze),$.uniforms=Te.uniforms;const Ve=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=ke.uniform),je(T,Te),$.needsLights=W(T),$.lightsStateVersion=ye,$.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function bt(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=$i.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function je(T,V){const K=E.get(T);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Ye(T,V,K,$,Y){V.isScene!==!0&&(V=gt),X.resetTextureUnits();const Ee=V.fog,ye=$.isMeshStandardMaterial?V.environment:null,Te=ee===null?A.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ei,Ne=($.isMeshStandardMaterial?he:le).get($.envMap||ye),xe=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!K.morphAttributes.position,Ke=!!K.morphAttributes.normal,et=!!K.morphAttributes.color;let Ct=0;$.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ct=A.toneMapping);const Pt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Tt=Pt!==void 0?Pt.length:0,$e=E.get($),Mt=O.state.lights;if(He===!0&&(ht===!0||T!==ue)){const Xt=T===ue&&$.id===ce;ke.setState($,T,Xt)}let dt=!1;$.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Mt.state.version||$e.outputColorSpace!==Te||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isBatchedMesh&&$e.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&$e.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==Ne||$.fog===!0&&$e.fog!==Ee||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ke.numPlanes||$e.numIntersection!==ke.numIntersection)||$e.vertexAlphas!==xe||$e.vertexTangents!==ze||$e.morphTargets!==Ve||$e.morphNormals!==Ke||$e.morphColors!==et||$e.toneMapping!==Ct||$e.morphTargetsCount!==Tt)&&(dt=!0):(dt=!0,$e.__version=$.version);let Ht=$e.currentProgram;dt===!0&&(Ht=Je($,V,Y));let En=!1,Wt=!1,si=!1;const At=Ht.getUniforms(),jt=$e.uniforms;if(Ge.useProgram(Ht.program)&&(En=!0,Wt=!0,si=!0),$.id!==ce&&(ce=$.id,Wt=!0),En||ue!==T){Ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),At.setValue(z,"projectionMatrix",T.projectionMatrix),At.setValue(z,"viewMatrix",T.matrixWorldInverse);const Yt=At.map.cameraPosition;Yt!==void 0&&Yt.setValue(z,ct.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),ue!==T&&(ue=T,Wt=!0,si=!0)}if($e.needsLights&&(Mt.state.directionalShadowMap.length>0&&At.setValue(z,"directionalShadowMap",Mt.state.directionalShadowMap,X),Mt.state.spotShadowMap.length>0&&At.setValue(z,"spotShadowMap",Mt.state.spotShadowMap,X),Mt.state.pointShadowMap.length>0&&At.setValue(z,"pointShadowMap",Mt.state.pointShadowMap,X)),Y.isSkinnedMesh){At.setOptional(z,Y,"bindMatrix"),At.setOptional(z,Y,"bindMatrixInverse");const Xt=Y.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),At.setValue(z,"boneTexture",Xt.boneTexture,X))}Y.isBatchedMesh&&(At.setOptional(z,Y,"batchingTexture"),At.setValue(z,"batchingTexture",Y._matricesTexture,X),At.setOptional(z,Y,"batchingIdTexture"),At.setValue(z,"batchingIdTexture",Y._indirectTexture,X),At.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&At.setValue(z,"batchingColorTexture",Y._colorsTexture,X));const Jt=K.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&st.update(Y,K,Ht),(Wt||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,At.setValue(z,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(jt.envMap.value=Ne,jt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(jt.envMapIntensity.value=V.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=Xh()),Wt&&(At.setValue(z,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&yt(jt,si),Ee&&$.fog===!0&&Qe.refreshFogUniforms(jt,Ee),Qe.refreshMaterialUniforms(jt,$,it,we,O.state.transmissionRenderTarget[T.id]),$i.upload(z,bt($e),jt,X)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&($i.upload(z,bt($e),jt,X),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(z,"center",Y.center),At.setValue(z,"modelViewMatrix",Y.modelViewMatrix),At.setValue(z,"normalMatrix",Y.normalMatrix),At.setValue(z,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Xt=$.uniformsGroups;for(let Yt=0,ir=Xt.length;Yt<ir;Yt++){const Pn=Xt[Yt];o.update(Pn,Ht),o.bind(Pn,Ht)}}return Ht}function yt(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function W(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(T,V,K){const $=E.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(T.texture).__webglTexture=V,E.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const K=E.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const de=z.createFramebuffer();this.setRenderTarget=function(T,V=0,K=0){ee=T,j=V,ne=K;let $=null,Y=!1,Ee=!1;if(T){const Te=E.get(T);if(Te.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(z.FRAMEBUFFER,Te.__webglFramebuffer),ie.copy(T.viewport),se.copy(T.scissor),me=T.scissorTest,Ge.viewport(ie),Ge.scissor(se),Ge.setScissorTest(me),ce=-1;return}else if(Te.__webglFramebuffer===void 0)X.setupRenderTarget(T);else if(Te.__hasExternalTextures)X.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Te.__boundDepthTexture!==ze){if(ze!==null&&E.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Ee=!0);const xe=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(xe[V])?$=xe[V][K]:$=xe[V],Y=!0):T.samples>0&&X.useMultisampledRTT(T)===!1?$=E.get(T).__webglMultisampledFramebuffer:Array.isArray(xe)?$=xe[K]:$=xe,ie.copy(T.viewport),se.copy(T.scissor),me=T.scissorTest}else ie.copy(ae).multiplyScalar(it).floor(),se.copy(pe).multiplyScalar(it).floor(),me=Ue;if(K!==0&&($=de),Ge.bindFramebuffer(z.FRAMEBUFFER,$)&&Ge.drawBuffers(T,$),Ge.viewport(ie),Ge.scissor(se),Ge.setScissorTest(me),Y){const Te=E.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+V,Te.__webglTexture,K)}else if(Ee){const Te=V;for(let Ne=0;Ne<T.textures.length;Ne++){const xe=E.get(T.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,xe.__webglTexture,K,Te)}}else if(T!==null&&K!==0){const Te=E.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Te.__webglTexture,K)}ce=-1},this.readRenderTargetPixels=function(T,V,K,$,Y,Ee,ye,Te=0){if(!(T&&T.isWebGLRenderTarget)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ne=Ne[ye]),Ne){Ge.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const xe=T.textures[Te],ze=xe.format,Ve=xe.type;if(!St.textureFormatReadable(ze)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ve)){xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-$&&K>=0&&K<=T.height-Y&&(T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te),z.readPixels(V,K,$,Y,Me.convert(ze),Me.convert(Ve),Ee))}finally{const xe=ee!==null?E.get(ee).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,V,K,$,Y,Ee,ye,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ne=Ne[ye]),Ne)if(V>=0&&V<=T.width-$&&K>=0&&K<=T.height-Y){Ge.bindFramebuffer(z.FRAMEBUFFER,Ne);const xe=T.textures[Te],ze=xe.format,Ve=xe.type;if(!St.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.bufferData(z.PIXEL_PACK_BUFFER,Ee.byteLength,z.STREAM_READ),T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Te),z.readPixels(V,K,$,Y,Me.convert(ze),Me.convert(Ve),0);const et=ee!==null?E.get(ee).__webglFramebuffer:null;Ge.bindFramebuffer(z.FRAMEBUFFER,et);const Ct=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await co(z,Ct,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Ee),z.deleteBuffer(Ke),z.deleteSync(Ct),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(T.image.width*$),Ee=Math.floor(T.image.height*$),ye=V!==null?V.x:0,Te=V!==null?V.y:0;X.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,ye,Te,Y,Ee),Ge.unbindTexture()};const Le=z.createFramebuffer(),ge=z.createFramebuffer();this.copyTextureToTexture=function(T,V,K=null,$=null,Y=0,Ee=null){Ee===null&&(Y!==0?(gi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=Y,Y=0):Ee=0);let ye,Te,Ne,xe,ze,Ve,Ke,et,Ct;const Pt=T.isCompressedTexture?T.mipmaps[Ee]:T.image;if(K!==null)ye=K.max.x-K.min.x,Te=K.max.y-K.min.y,Ne=K.isBox3?K.max.z-K.min.z:1,xe=K.min.x,ze=K.min.y,Ve=K.isBox3?K.min.z:0;else{const Jt=Math.pow(2,-Y);ye=Math.floor(Pt.width*Jt),Te=Math.floor(Pt.height*Jt),T.isDataArrayTexture?Ne=Pt.depth:T.isData3DTexture?Ne=Math.floor(Pt.depth*Jt):Ne=1,xe=0,ze=0,Ve=0}$!==null?(Ke=$.x,et=$.y,Ct=$.z):(Ke=0,et=0,Ct=0);const Tt=Me.convert(V.format),$e=Me.convert(V.type);let Mt;V.isData3DTexture?(X.setTexture3D(V,0),Mt=z.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(X.setTexture2DArray(V,0),Mt=z.TEXTURE_2D_ARRAY):(X.setTexture2D(V,0),Mt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const dt=z.getParameter(z.UNPACK_ROW_LENGTH),Ht=z.getParameter(z.UNPACK_IMAGE_HEIGHT),En=z.getParameter(z.UNPACK_SKIP_PIXELS),Wt=z.getParameter(z.UNPACK_SKIP_ROWS),si=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xe),z.pixelStorei(z.UNPACK_SKIP_ROWS,ze),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ve);const At=T.isDataArrayTexture||T.isData3DTexture,jt=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const Jt=E.get(T),Xt=E.get(V),Yt=E.get(Jt.__renderTarget),ir=E.get(Xt.__renderTarget);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Pn=0;Pn<Ne;Pn++)At&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(T).__webglTexture,Y,Ve+Pn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(V).__webglTexture,Ee,Ct+Pn)),z.blitFramebuffer(xe,ze,ye,Te,Ke,et,ye,Te,z.DEPTH_BUFFER_BIT,z.NEAREST);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||E.has(T)){const Jt=E.get(T),Xt=E.get(V);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,Le),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,ge);for(let Yt=0;Yt<Ne;Yt++)At?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Jt.__webglTexture,Y,Ve+Yt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Jt.__webglTexture,Y),jt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,Ee,Ct+Yt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,Ee),Y!==0?z.blitFramebuffer(xe,ze,ye,Te,Ke,et,ye,Te,z.COLOR_BUFFER_BIT,z.NEAREST):jt?z.copyTexSubImage3D(Mt,Ee,Ke,et,Ct+Yt,xe,ze,ye,Te):z.copyTexSubImage2D(Mt,Ee,Ke,et,xe,ze,ye,Te);Ge.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else jt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Mt,Ee,Ke,et,Ct,ye,Te,Ne,Tt,$e,Pt.data):V.isCompressedArrayTexture?z.compressedTexSubImage3D(Mt,Ee,Ke,et,Ct,ye,Te,Ne,Tt,Pt.data):z.texSubImage3D(Mt,Ee,Ke,et,Ct,ye,Te,Ne,Tt,$e,Pt):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Ee,Ke,et,ye,Te,Tt,$e,Pt.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Ee,Ke,et,Pt.width,Pt.height,Tt,Pt.data):z.texSubImage2D(z.TEXTURE_2D,Ee,Ke,et,ye,Te,Tt,$e,Pt);z.pixelStorei(z.UNPACK_ROW_LENGTH,dt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ht),z.pixelStorei(z.UNPACK_SKIP_PIXELS,En),z.pixelStorei(z.UNPACK_SKIP_ROWS,Wt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,si),Ee===0&&V.generateMipmaps&&z.generateMipmap(Mt),Ge.unbindTexture()},this.initRenderTarget=function(T){E.get(T).__webglFramebuffer===void 0&&X.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?X.setTextureCube(T,0):T.isData3DTexture?X.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?X.setTexture2DArray(T,0):X.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){j=0,ne=0,ee=null,Ge.reset(),g.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}function qh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function ao(i){if(Object.prototype.hasOwnProperty.call(i,"__esModule"))return i;var e=i.default;if(typeof e=="function"){var t=function n(){var s=!1;try{s=this instanceof n}catch{}return s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var s=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,s.get?s:{enumerable:!0,get:function(){return i[n]}})}),t}var lt={};const jh=Object.prototype.toString;function xi(i){const e=jh.call(i);return e.endsWith("Array]")&&!e.includes("Big")}const Yh=Object.freeze(Object.defineProperty({__proto__:null,isAnyArray:xi},Symbol.toStringTag,{value:"Module"})),$h=ao(Yh);function Kh(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!xi(i))throw new TypeError("input must be an array");if(i.length===0)throw new TypeError("input must not be empty");var t=e.fromIndex,n=t===void 0?0:t,s=e.toIndex,l=s===void 0?i.length:s;if(n<0||n>=i.length||!Number.isInteger(n))throw new Error("fromIndex must be a positive integer smaller than length");if(l<=n||l>i.length||!Number.isInteger(l))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");for(var u=i[n],h=n+1;h<l;h++)i[h]>u&&(u=i[h]);return u}function Zh(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!xi(i))throw new TypeError("input must be an array");if(i.length===0)throw new TypeError("input must not be empty");var t=e.fromIndex,n=t===void 0?0:t,s=e.toIndex,l=s===void 0?i.length:s;if(n<0||n>=i.length||!Number.isInteger(n))throw new Error("fromIndex must be a positive integer smaller than length");if(l<=n||l>i.length||!Number.isInteger(l))throw new Error("toIndex must be an integer greater than fromIndex and at most equal to length");for(var u=i[n],h=n+1;h<l;h++)i[h]<u&&(u=i[h]);return u}function Jh(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(xi(i)){if(i.length===0)throw new TypeError("input must not be empty")}else throw new TypeError("input must be an array");var t;if(e.output!==void 0){if(!xi(e.output))throw new TypeError("output option must be an array if specified");t=e.output}else t=new Array(i.length);var n=Zh(i),s=Kh(i);if(n===s)throw new RangeError("minimum and maximum input values are equal. Cannot rescale a constant array");var l=e.min,u=l===void 0?e.autoMinMax?n:0:l,h=e.max,p=h===void 0?e.autoMinMax?s:1:h;if(u>=p)throw new RangeError("min option must be smaller than max option");for(var d=(p-u)/(s-n),m=0;m<i.length;m++)t[m]=(i[m]-n)*d+u;return t}const Qh=Object.freeze(Object.defineProperty({__proto__:null,default:Jh},Symbol.toStringTag,{value:"Module"})),ef=ao(Qh);var zs;function tf(){if(zs)return lt;zs=1,Object.defineProperty(lt,"__esModule",{value:!0});var i=$h,e=ef;const t=" ".repeat(2),n=" ".repeat(4);function s(){return l(this)}function l(g,o={}){const{maxRows:a=15,maxColumns:r=10,maxNumSize:c=8,padMinus:f="auto"}=o;return`${g.constructor.name} {
${t}[
${n}${u(g,a,r,c,f)}
${t}]
${t}rows: ${g.rows}
${t}columns: ${g.columns}
}`}function u(g,o,a,r,c){const{rows:f,columns:y}=g,w=Math.min(f,o),C=Math.min(y,a),P=[];if(c==="auto"){c=!1;e:for(let q=0;q<w;q++)for(let N=0;N<C;N++)if(g.get(q,N)<0){c=!0;break e}}for(let q=0;q<w;q++){let N=[];for(let te=0;te<C;te++)N.push(h(g.get(q,te),r,c));P.push(`${N.join(" ")}`)}return C!==y&&(P[P.length-1]+=` ... ${y-a} more columns`),w!==f&&P.push(`... ${f-o} more rows`),P.join(`
${n}`)}function h(g,o,a){return(g>=0&&a?` ${p(g,o-1)}`:p(g,o)).padEnd(o)}function p(g,o){let a=g.toString();if(a.length<=o)return a;let r=g.toFixed(o);if(r.length>o&&(r=g.toFixed(Math.max(0,o-(r.length-o)))),r.length<=o&&!r.startsWith("0.000")&&!r.startsWith("-0.000"))return r;let c=g.toExponential(o);return c.length>o&&(c=g.toExponential(Math.max(0,o-(c.length-o)))),c.slice(0)}function d(g,o){g.prototype.add=function(r){return typeof r=="number"?this.addS(r):this.addM(r)},g.prototype.addS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)+r);return this},g.prototype.addM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)+r.get(c,f));return this},g.add=function(r,c){return new o(r).add(c)},g.prototype.sub=function(r){return typeof r=="number"?this.subS(r):this.subM(r)},g.prototype.subS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)-r);return this},g.prototype.subM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)-r.get(c,f));return this},g.sub=function(r,c){return new o(r).sub(c)},g.prototype.subtract=g.prototype.sub,g.prototype.subtractS=g.prototype.subS,g.prototype.subtractM=g.prototype.subM,g.subtract=g.sub,g.prototype.mul=function(r){return typeof r=="number"?this.mulS(r):this.mulM(r)},g.prototype.mulS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)*r);return this},g.prototype.mulM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)*r.get(c,f));return this},g.mul=function(r,c){return new o(r).mul(c)},g.prototype.multiply=g.prototype.mul,g.prototype.multiplyS=g.prototype.mulS,g.prototype.multiplyM=g.prototype.mulM,g.multiply=g.mul,g.prototype.div=function(r){return typeof r=="number"?this.divS(r):this.divM(r)},g.prototype.divS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)/r);return this},g.prototype.divM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)/r.get(c,f));return this},g.div=function(r,c){return new o(r).div(c)},g.prototype.divide=g.prototype.div,g.prototype.divideS=g.prototype.divS,g.prototype.divideM=g.prototype.divM,g.divide=g.div,g.prototype.mod=function(r){return typeof r=="number"?this.modS(r):this.modM(r)},g.prototype.modS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)%r);return this},g.prototype.modM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)%r.get(c,f));return this},g.mod=function(r,c){return new o(r).mod(c)},g.prototype.modulus=g.prototype.mod,g.prototype.modulusS=g.prototype.modS,g.prototype.modulusM=g.prototype.modM,g.modulus=g.mod,g.prototype.and=function(r){return typeof r=="number"?this.andS(r):this.andM(r)},g.prototype.andS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)&r);return this},g.prototype.andM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)&r.get(c,f));return this},g.and=function(r,c){return new o(r).and(c)},g.prototype.or=function(r){return typeof r=="number"?this.orS(r):this.orM(r)},g.prototype.orS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)|r);return this},g.prototype.orM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)|r.get(c,f));return this},g.or=function(r,c){return new o(r).or(c)},g.prototype.xor=function(r){return typeof r=="number"?this.xorS(r):this.xorM(r)},g.prototype.xorS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)^r);return this},g.prototype.xorM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)^r.get(c,f));return this},g.xor=function(r,c){return new o(r).xor(c)},g.prototype.leftShift=function(r){return typeof r=="number"?this.leftShiftS(r):this.leftShiftM(r)},g.prototype.leftShiftS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)<<r);return this},g.prototype.leftShiftM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)<<r.get(c,f));return this},g.leftShift=function(r,c){return new o(r).leftShift(c)},g.prototype.signPropagatingRightShift=function(r){return typeof r=="number"?this.signPropagatingRightShiftS(r):this.signPropagatingRightShiftM(r)},g.prototype.signPropagatingRightShiftS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)>>r);return this},g.prototype.signPropagatingRightShiftM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)>>r.get(c,f));return this},g.signPropagatingRightShift=function(r,c){return new o(r).signPropagatingRightShift(c)},g.prototype.rightShift=function(r){return typeof r=="number"?this.rightShiftS(r):this.rightShiftM(r)},g.prototype.rightShiftS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)>>>r);return this},g.prototype.rightShiftM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)>>>r.get(c,f));return this},g.rightShift=function(r,c){return new o(r).rightShift(c)},g.prototype.zeroFillRightShift=g.prototype.rightShift,g.prototype.zeroFillRightShiftS=g.prototype.rightShiftS,g.prototype.zeroFillRightShiftM=g.prototype.rightShiftM,g.zeroFillRightShift=g.rightShift,g.prototype.not=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,~this.get(r,c));return this},g.not=function(r){return new o(r).not()},g.prototype.abs=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.abs(this.get(r,c)));return this},g.abs=function(r){return new o(r).abs()},g.prototype.acos=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.acos(this.get(r,c)));return this},g.acos=function(r){return new o(r).acos()},g.prototype.acosh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.acosh(this.get(r,c)));return this},g.acosh=function(r){return new o(r).acosh()},g.prototype.asin=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.asin(this.get(r,c)));return this},g.asin=function(r){return new o(r).asin()},g.prototype.asinh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.asinh(this.get(r,c)));return this},g.asinh=function(r){return new o(r).asinh()},g.prototype.atan=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.atan(this.get(r,c)));return this},g.atan=function(r){return new o(r).atan()},g.prototype.atanh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.atanh(this.get(r,c)));return this},g.atanh=function(r){return new o(r).atanh()},g.prototype.cbrt=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.cbrt(this.get(r,c)));return this},g.cbrt=function(r){return new o(r).cbrt()},g.prototype.ceil=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.ceil(this.get(r,c)));return this},g.ceil=function(r){return new o(r).ceil()},g.prototype.clz32=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.clz32(this.get(r,c)));return this},g.clz32=function(r){return new o(r).clz32()},g.prototype.cos=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.cos(this.get(r,c)));return this},g.cos=function(r){return new o(r).cos()},g.prototype.cosh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.cosh(this.get(r,c)));return this},g.cosh=function(r){return new o(r).cosh()},g.prototype.exp=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.exp(this.get(r,c)));return this},g.exp=function(r){return new o(r).exp()},g.prototype.expm1=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.expm1(this.get(r,c)));return this},g.expm1=function(r){return new o(r).expm1()},g.prototype.floor=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.floor(this.get(r,c)));return this},g.floor=function(r){return new o(r).floor()},g.prototype.fround=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.fround(this.get(r,c)));return this},g.fround=function(r){return new o(r).fround()},g.prototype.log=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.log(this.get(r,c)));return this},g.log=function(r){return new o(r).log()},g.prototype.log1p=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.log1p(this.get(r,c)));return this},g.log1p=function(r){return new o(r).log1p()},g.prototype.log10=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.log10(this.get(r,c)));return this},g.log10=function(r){return new o(r).log10()},g.prototype.log2=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.log2(this.get(r,c)));return this},g.log2=function(r){return new o(r).log2()},g.prototype.round=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.round(this.get(r,c)));return this},g.round=function(r){return new o(r).round()},g.prototype.sign=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.sign(this.get(r,c)));return this},g.sign=function(r){return new o(r).sign()},g.prototype.sin=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.sin(this.get(r,c)));return this},g.sin=function(r){return new o(r).sin()},g.prototype.sinh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.sinh(this.get(r,c)));return this},g.sinh=function(r){return new o(r).sinh()},g.prototype.sqrt=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.sqrt(this.get(r,c)));return this},g.sqrt=function(r){return new o(r).sqrt()},g.prototype.tan=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.tan(this.get(r,c)));return this},g.tan=function(r){return new o(r).tan()},g.prototype.tanh=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.tanh(this.get(r,c)));return this},g.tanh=function(r){return new o(r).tanh()},g.prototype.trunc=function(){for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.set(r,c,Math.trunc(this.get(r,c)));return this},g.trunc=function(r){return new o(r).trunc()},g.pow=function(r,c){return new o(r).pow(c)},g.prototype.pow=function(r){return typeof r=="number"?this.powS(r):this.powM(r)},g.prototype.powS=function(r){for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)**r);return this},g.prototype.powM=function(r){if(r=o.checkMatrix(r),this.rows!==r.rows||this.columns!==r.columns)throw new RangeError("Matrices dimensions must be equal");for(let c=0;c<this.rows;c++)for(let f=0;f<this.columns;f++)this.set(c,f,this.get(c,f)**r.get(c,f));return this}}function m(g,o,a){let r=a?g.rows:g.rows-1;if(o<0||o>r)throw new RangeError("Row index out of range")}function _(g,o,a){let r=a?g.columns:g.columns-1;if(o<0||o>r)throw new RangeError("Column index out of range")}function v(g,o){if(o.to1DArray&&(o=o.to1DArray()),o.length!==g.columns)throw new RangeError("vector size must be the same as the number of columns");return o}function S(g,o){if(o.to1DArray&&(o=o.to1DArray()),o.length!==g.rows)throw new RangeError("vector size must be the same as the number of rows");return o}function b(g,o){if(!i.isAnyArray(o))throw new TypeError("row indices must be an array");for(let a=0;a<o.length;a++)if(o[a]<0||o[a]>=g.rows)throw new RangeError("row indices are out of range")}function R(g,o){if(!i.isAnyArray(o))throw new TypeError("column indices must be an array");for(let a=0;a<o.length;a++)if(o[a]<0||o[a]>=g.columns)throw new RangeError("column indices are out of range")}function M(g,o,a,r,c){if(arguments.length!==5)throw new RangeError("expected 4 arguments");if(I("startRow",o),I("endRow",a),I("startColumn",r),I("endColumn",c),o>a||r>c||o<0||o>=g.rows||a<0||a>=g.rows||r<0||r>=g.columns||c<0||c>=g.columns)throw new RangeError("Submatrix indices are out of range")}function x(g,o=0){let a=[];for(let r=0;r<g;r++)a.push(o);return a}function I(g,o){if(typeof o!="number")throw new TypeError(`${g} must be a number`)}function F(g){if(g.isEmpty())throw new Error("Empty matrix has no elements to index")}function U(g){let o=x(g.rows);for(let a=0;a<g.rows;++a)for(let r=0;r<g.columns;++r)o[a]+=g.get(a,r);return o}function O(g){let o=x(g.columns);for(let a=0;a<g.rows;++a)for(let r=0;r<g.columns;++r)o[r]+=g.get(a,r);return o}function G(g){let o=0;for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)o+=g.get(a,r);return o}function k(g){let o=x(g.rows,1);for(let a=0;a<g.rows;++a)for(let r=0;r<g.columns;++r)o[a]*=g.get(a,r);return o}function Q(g){let o=x(g.columns,1);for(let a=0;a<g.rows;++a)for(let r=0;r<g.columns;++r)o[r]*=g.get(a,r);return o}function A(g){let o=1;for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)o*=g.get(a,r);return o}function D(g,o,a){const r=g.rows,c=g.columns,f=[];for(let y=0;y<r;y++){let w=0,C=0,P=0;for(let q=0;q<c;q++)P=g.get(y,q)-a[y],w+=P,C+=P*P;o?f.push((C-w*w/c)/(c-1)):f.push((C-w*w/c)/c)}return f}function j(g,o,a){const r=g.rows,c=g.columns,f=[];for(let y=0;y<c;y++){let w=0,C=0,P=0;for(let q=0;q<r;q++)P=g.get(q,y)-a[y],w+=P,C+=P*P;o?f.push((C-w*w/r)/(r-1)):f.push((C-w*w/r)/r)}return f}function ne(g,o,a){const r=g.rows,c=g.columns,f=r*c;let y=0,w=0,C=0;for(let P=0;P<r;P++)for(let q=0;q<c;q++)C=g.get(P,q)-a,y+=C,w+=C*C;return o?(w-y*y/f)/(f-1):(w-y*y/f)/f}function ee(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)-o[a])}function ce(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)-o[r])}function ue(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)-o)}function ie(g){const o=[];for(let a=0;a<g.rows;a++){let r=0;for(let c=0;c<g.columns;c++)r+=g.get(a,c)**2/(g.columns-1);o.push(Math.sqrt(r))}return o}function se(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)/o[a])}function me(g){const o=[];for(let a=0;a<g.columns;a++){let r=0;for(let c=0;c<g.rows;c++)r+=g.get(c,a)**2/(g.rows-1);o.push(Math.sqrt(r))}return o}function Oe(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)/o[r])}function Ce(g){const o=g.size-1;let a=0;for(let r=0;r<g.columns;r++)for(let c=0;c<g.rows;c++)a+=g.get(c,r)**2/o;return Math.sqrt(a)}function Be(g,o){for(let a=0;a<g.rows;a++)for(let r=0;r<g.columns;r++)g.set(a,r,g.get(a,r)/o)}class we{static from1DArray(o,a,r){if(o*a!==r.length)throw new RangeError("data length does not match given dimensions");let f=new fe(o,a);for(let y=0;y<o;y++)for(let w=0;w<a;w++)f.set(y,w,r[y*a+w]);return f}static rowVector(o){let a=new fe(1,o.length);for(let r=0;r<o.length;r++)a.set(0,r,o[r]);return a}static columnVector(o){let a=new fe(o.length,1);for(let r=0;r<o.length;r++)a.set(r,0,o[r]);return a}static zeros(o,a){return new fe(o,a)}static ones(o,a){return new fe(o,a).fill(1)}static rand(o,a,r={}){if(typeof r!="object")throw new TypeError("options must be an object");const{random:c=Math.random}=r;let f=new fe(o,a);for(let y=0;y<o;y++)for(let w=0;w<a;w++)f.set(y,w,c());return f}static randInt(o,a,r={}){if(typeof r!="object")throw new TypeError("options must be an object");const{min:c=0,max:f=1e3,random:y=Math.random}=r;if(!Number.isInteger(c))throw new TypeError("min must be an integer");if(!Number.isInteger(f))throw new TypeError("max must be an integer");if(c>=f)throw new RangeError("min must be smaller than max");let w=f-c,C=new fe(o,a);for(let P=0;P<o;P++)for(let q=0;q<a;q++){let N=c+Math.round(y()*w);C.set(P,q,N)}return C}static eye(o,a,r){a===void 0&&(a=o),r===void 0&&(r=1);let c=Math.min(o,a),f=this.zeros(o,a);for(let y=0;y<c;y++)f.set(y,y,r);return f}static diag(o,a,r){let c=o.length;a===void 0&&(a=c),r===void 0&&(r=a);let f=Math.min(c,a,r),y=this.zeros(a,r);for(let w=0;w<f;w++)y.set(w,w,o[w]);return y}static min(o,a){o=this.checkMatrix(o),a=this.checkMatrix(a);let r=o.rows,c=o.columns,f=new fe(r,c);for(let y=0;y<r;y++)for(let w=0;w<c;w++)f.set(y,w,Math.min(o.get(y,w),a.get(y,w)));return f}static max(o,a){o=this.checkMatrix(o),a=this.checkMatrix(a);let r=o.rows,c=o.columns,f=new this(r,c);for(let y=0;y<r;y++)for(let w=0;w<c;w++)f.set(y,w,Math.max(o.get(y,w),a.get(y,w)));return f}static checkMatrix(o){return we.isMatrix(o)?o:new fe(o)}static isMatrix(o){return o!=null&&o.klass==="Matrix"}get size(){return this.rows*this.columns}apply(o){if(typeof o!="function")throw new TypeError("callback must be a function");for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)o.call(this,a,r);return this}to1DArray(){let o=[];for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)o.push(this.get(a,r));return o}to2DArray(){let o=[];for(let a=0;a<this.rows;a++){o.push([]);for(let r=0;r<this.columns;r++)o[a].push(this.get(a,r))}return o}toJSON(){return this.to2DArray()}isRowVector(){return this.rows===1}isColumnVector(){return this.columns===1}isVector(){return this.rows===1||this.columns===1}isSquare(){return this.rows===this.columns}isEmpty(){return this.rows===0||this.columns===0}isSymmetric(){if(this.isSquare()){for(let o=0;o<this.rows;o++)for(let a=0;a<=o;a++)if(this.get(o,a)!==this.get(a,o))return!1;return!0}return!1}isDistance(){if(!this.isSymmetric())return!1;for(let o=0;o<this.rows;o++)if(this.get(o,o)!==0)return!1;return!0}isEchelonForm(){let o=0,a=0,r=-1,c=!0,f=!1;for(;o<this.rows&&c;){for(a=0,f=!1;a<this.columns&&f===!1;)this.get(o,a)===0?a++:this.get(o,a)===1&&a>r?(f=!0,r=a):(c=!1,f=!0);o++}return c}isReducedEchelonForm(){let o=0,a=0,r=-1,c=!0,f=!1;for(;o<this.rows&&c;){for(a=0,f=!1;a<this.columns&&f===!1;)this.get(o,a)===0?a++:this.get(o,a)===1&&a>r?(f=!0,r=a):(c=!1,f=!0);for(let y=a+1;y<this.rows;y++)this.get(o,y)!==0&&(c=!1);o++}return c}echelonForm(){let o=this.clone(),a=0,r=0;for(;a<o.rows&&r<o.columns;){let c=a;for(let f=a;f<o.rows;f++)o.get(f,r)>o.get(c,r)&&(c=f);if(o.get(c,r)===0)r++;else{o.swapRows(a,c);let f=o.get(a,r);for(let y=r;y<o.columns;y++)o.set(a,y,o.get(a,y)/f);for(let y=a+1;y<o.rows;y++){let w=o.get(y,r)/o.get(a,r);o.set(y,r,0);for(let C=r+1;C<o.columns;C++)o.set(y,C,o.get(y,C)-o.get(a,C)*w)}a++,r++}}return o}reducedEchelonForm(){let o=this.echelonForm(),a=o.columns,r=o.rows,c=r-1;for(;c>=0;)if(o.maxRow(c)===0)c--;else{let f=0,y=!1;for(;f<r&&y===!1;)o.get(c,f)===1?y=!0:f++;for(let w=0;w<c;w++){let C=o.get(w,f);for(let P=f;P<a;P++){let q=o.get(w,P)-C*o.get(c,P);o.set(w,P,q)}}c--}return o}set(){throw new Error("set method is unimplemented")}get(){throw new Error("get method is unimplemented")}repeat(o={}){if(typeof o!="object")throw new TypeError("options must be an object");const{rows:a=1,columns:r=1}=o;if(!Number.isInteger(a)||a<=0)throw new TypeError("rows must be a positive integer");if(!Number.isInteger(r)||r<=0)throw new TypeError("columns must be a positive integer");let c=new fe(this.rows*a,this.columns*r);for(let f=0;f<a;f++)for(let y=0;y<r;y++)c.setSubMatrix(this,this.rows*f,this.columns*y);return c}fill(o){for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,o);return this}neg(){return this.mulS(-1)}getRow(o){m(this,o);let a=[];for(let r=0;r<this.columns;r++)a.push(this.get(o,r));return a}getRowVector(o){return fe.rowVector(this.getRow(o))}setRow(o,a){m(this,o),a=v(this,a);for(let r=0;r<this.columns;r++)this.set(o,r,a[r]);return this}swapRows(o,a){m(this,o),m(this,a);for(let r=0;r<this.columns;r++){let c=this.get(o,r);this.set(o,r,this.get(a,r)),this.set(a,r,c)}return this}getColumn(o){_(this,o);let a=[];for(let r=0;r<this.rows;r++)a.push(this.get(r,o));return a}getColumnVector(o){return fe.columnVector(this.getColumn(o))}setColumn(o,a){_(this,o),a=S(this,a);for(let r=0;r<this.rows;r++)this.set(r,o,a[r]);return this}swapColumns(o,a){_(this,o),_(this,a);for(let r=0;r<this.rows;r++){let c=this.get(r,o);this.set(r,o,this.get(r,a)),this.set(r,a,c)}return this}addRowVector(o){o=v(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)+o[r]);return this}subRowVector(o){o=v(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)-o[r]);return this}mulRowVector(o){o=v(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)*o[r]);return this}divRowVector(o){o=v(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)/o[r]);return this}addColumnVector(o){o=S(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)+o[a]);return this}subColumnVector(o){o=S(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)-o[a]);return this}mulColumnVector(o){o=S(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)*o[a]);return this}divColumnVector(o){o=S(this,o);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)this.set(a,r,this.get(a,r)/o[a]);return this}mulRow(o,a){m(this,o);for(let r=0;r<this.columns;r++)this.set(o,r,this.get(o,r)*a);return this}mulColumn(o,a){_(this,o);for(let r=0;r<this.rows;r++)this.set(r,o,this.get(r,o)*a);return this}max(o){if(this.isEmpty())return NaN;switch(o){case"row":{const a=new Array(this.rows).fill(Number.NEGATIVE_INFINITY);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)>a[r]&&(a[r]=this.get(r,c));return a}case"column":{const a=new Array(this.columns).fill(Number.NEGATIVE_INFINITY);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)>a[c]&&(a[c]=this.get(r,c));return a}case void 0:{let a=this.get(0,0);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)>a&&(a=this.get(r,c));return a}default:throw new Error(`invalid option: ${o}`)}}maxIndex(){F(this);let o=this.get(0,0),a=[0,0];for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)>o&&(o=this.get(r,c),a[0]=r,a[1]=c);return a}min(o){if(this.isEmpty())return NaN;switch(o){case"row":{const a=new Array(this.rows).fill(Number.POSITIVE_INFINITY);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)<a[r]&&(a[r]=this.get(r,c));return a}case"column":{const a=new Array(this.columns).fill(Number.POSITIVE_INFINITY);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)<a[c]&&(a[c]=this.get(r,c));return a}case void 0:{let a=this.get(0,0);for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)<a&&(a=this.get(r,c));return a}default:throw new Error(`invalid option: ${o}`)}}minIndex(){F(this);let o=this.get(0,0),a=[0,0];for(let r=0;r<this.rows;r++)for(let c=0;c<this.columns;c++)this.get(r,c)<o&&(o=this.get(r,c),a[0]=r,a[1]=c);return a}maxRow(o){if(m(this,o),this.isEmpty())return NaN;let a=this.get(o,0);for(let r=1;r<this.columns;r++)this.get(o,r)>a&&(a=this.get(o,r));return a}maxRowIndex(o){m(this,o),F(this);let a=this.get(o,0),r=[o,0];for(let c=1;c<this.columns;c++)this.get(o,c)>a&&(a=this.get(o,c),r[1]=c);return r}minRow(o){if(m(this,o),this.isEmpty())return NaN;let a=this.get(o,0);for(let r=1;r<this.columns;r++)this.get(o,r)<a&&(a=this.get(o,r));return a}minRowIndex(o){m(this,o),F(this);let a=this.get(o,0),r=[o,0];for(let c=1;c<this.columns;c++)this.get(o,c)<a&&(a=this.get(o,c),r[1]=c);return r}maxColumn(o){if(_(this,o),this.isEmpty())return NaN;let a=this.get(0,o);for(let r=1;r<this.rows;r++)this.get(r,o)>a&&(a=this.get(r,o));return a}maxColumnIndex(o){_(this,o),F(this);let a=this.get(0,o),r=[0,o];for(let c=1;c<this.rows;c++)this.get(c,o)>a&&(a=this.get(c,o),r[0]=c);return r}minColumn(o){if(_(this,o),this.isEmpty())return NaN;let a=this.get(0,o);for(let r=1;r<this.rows;r++)this.get(r,o)<a&&(a=this.get(r,o));return a}minColumnIndex(o){_(this,o),F(this);let a=this.get(0,o),r=[0,o];for(let c=1;c<this.rows;c++)this.get(c,o)<a&&(a=this.get(c,o),r[0]=c);return r}diag(){let o=Math.min(this.rows,this.columns),a=[];for(let r=0;r<o;r++)a.push(this.get(r,r));return a}norm(o="frobenius"){switch(o){case"max":return this.max();case"frobenius":return Math.sqrt(this.dot(this));default:throw new RangeError(`unknown norm type: ${o}`)}}cumulativeSum(){let o=0;for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)o+=this.get(a,r),this.set(a,r,o);return this}dot(o){we.isMatrix(o)&&(o=o.to1DArray());let a=this.to1DArray();if(a.length!==o.length)throw new RangeError("vectors do not have the same size");let r=0;for(let c=0;c<a.length;c++)r+=a[c]*o[c];return r}mmul(o){o=fe.checkMatrix(o);let a=this.rows,r=this.columns,c=o.columns,f=new fe(a,c),y=new Float64Array(r);for(let w=0;w<c;w++){for(let C=0;C<r;C++)y[C]=o.get(C,w);for(let C=0;C<a;C++){let P=0;for(let q=0;q<r;q++)P+=this.get(C,q)*y[q];f.set(C,w,P)}}return f}mpow(o){if(!this.isSquare())throw new RangeError("Matrix must be square");if(!Number.isInteger(o)||o<0)throw new RangeError("Exponent must be a non-negative integer");let a=fe.eye(this.rows),r=this;for(let c=o;c>=1;c/=2)(c&1)!==0&&(a=a.mmul(r)),r=r.mmul(r);return a}strassen2x2(o){o=fe.checkMatrix(o);let a=new fe(2,2);const r=this.get(0,0),c=o.get(0,0),f=this.get(0,1),y=o.get(0,1),w=this.get(1,0),C=o.get(1,0),P=this.get(1,1),q=o.get(1,1),N=(r+P)*(c+q),te=(w+P)*c,Se=r*(y-q),J=P*(C-c),oe=(r+f)*q,Pe=(w-r)*(c+y),B=(f-P)*(C+q),ve=N+J-oe+B,Ie=Se+oe,Ze=te+J,Je=N-te+Se+Pe;return a.set(0,0,ve),a.set(0,1,Ie),a.set(1,0,Ze),a.set(1,1,Je),a}strassen3x3(o){o=fe.checkMatrix(o);let a=new fe(3,3);const r=this.get(0,0),c=this.get(0,1),f=this.get(0,2),y=this.get(1,0),w=this.get(1,1),C=this.get(1,2),P=this.get(2,0),q=this.get(2,1),N=this.get(2,2),te=o.get(0,0),Se=o.get(0,1),J=o.get(0,2),oe=o.get(1,0),Pe=o.get(1,1),B=o.get(1,2),ve=o.get(2,0),Ie=o.get(2,1),Ze=o.get(2,2),Je=(r+c+f-y-w-q-N)*Pe,bt=(r-y)*(-Se+Pe),je=w*(-te+Se+oe-Pe-B-ve+Ze),Ye=(-r+y+w)*(te-Se+Pe),yt=(y+w)*(-te+Se),W=r*te,de=(-r+P+q)*(te-J+B),Le=(-r+P)*(J-B),ge=(P+q)*(-te+J),T=(r+c+f-w-C-P-q)*B,V=q*(-te+J+oe-Pe-B-ve+Ie),K=(-f+q+N)*(Pe+ve-Ie),$=(f-N)*(Pe-Ie),Y=f*ve,Ee=(q+N)*(-ve+Ie),ye=(-f+w+C)*(B+ve-Ze),Te=(f-C)*(B-Ze),Ne=(w+C)*(-ve+Ze),xe=c*oe,ze=C*Ie,Ve=y*J,Ke=P*Se,et=N*Ze,Ct=W+Y+xe,Pt=Je+Ye+yt+W+K+Y+Ee,Tt=W+de+ge+T+Y+ye+Ne,$e=bt+je+Ye+W+Y+ye+Te,Mt=bt+Ye+yt+W+ze,dt=Y+ye+Te+Ne+Ve,Ht=W+de+Le+V+K+$+Y,En=K+$+Y+Ee+Ke,Wt=W+de+Le+ge+et;return a.set(0,0,Ct),a.set(0,1,Pt),a.set(0,2,Tt),a.set(1,0,$e),a.set(1,1,Mt),a.set(1,2,dt),a.set(2,0,Ht),a.set(2,1,En),a.set(2,2,Wt),a}mmulStrassen(o){o=fe.checkMatrix(o);let a=this.clone(),r=a.rows,c=a.columns,f=o.rows,y=o.columns;c!==f&&console.warn(`Multiplying ${r} x ${c} and ${f} x ${y} matrix: dimensions do not match.`);function w(N,te,Se){let J=N.rows,oe=N.columns;if(J===te&&oe===Se)return N;{let Pe=we.zeros(te,Se);return Pe=Pe.setSubMatrix(N,0,0),Pe}}let C=Math.max(r,f),P=Math.max(c,y);a=w(a,C,P),o=w(o,C,P);function q(N,te,Se,J){if(Se<=512||J<=512)return N.mmul(te);Se%2===1&&J%2===1?(N=w(N,Se+1,J+1),te=w(te,Se+1,J+1)):Se%2===1?(N=w(N,Se+1,J),te=w(te,Se+1,J)):J%2===1&&(N=w(N,Se,J+1),te=w(te,Se,J+1));let oe=parseInt(N.rows/2,10),Pe=parseInt(N.columns/2,10),B=N.subMatrix(0,oe-1,0,Pe-1),ve=te.subMatrix(0,oe-1,0,Pe-1),Ie=N.subMatrix(0,oe-1,Pe,N.columns-1),Ze=te.subMatrix(0,oe-1,Pe,te.columns-1),Je=N.subMatrix(oe,N.rows-1,0,Pe-1),bt=te.subMatrix(oe,te.rows-1,0,Pe-1),je=N.subMatrix(oe,N.rows-1,Pe,N.columns-1),Ye=te.subMatrix(oe,te.rows-1,Pe,te.columns-1),yt=q(we.add(B,je),we.add(ve,Ye),oe,Pe),W=q(we.add(Je,je),ve,oe,Pe),de=q(B,we.sub(Ze,Ye),oe,Pe),Le=q(je,we.sub(bt,ve),oe,Pe),ge=q(we.add(B,Ie),Ye,oe,Pe),T=q(we.sub(Je,B),we.add(ve,Ze),oe,Pe),V=q(we.sub(Ie,je),we.add(bt,Ye),oe,Pe),K=we.add(yt,Le);K.sub(ge),K.add(V);let $=we.add(de,ge),Y=we.add(W,Le),Ee=we.sub(yt,W);Ee.add(de),Ee.add(T);let ye=we.zeros(2*K.rows,2*K.columns);return ye=ye.setSubMatrix(K,0,0),ye=ye.setSubMatrix($,K.rows,0),ye=ye.setSubMatrix(Y,0,K.columns),ye=ye.setSubMatrix(Ee,K.rows,K.columns),ye.subMatrix(0,Se-1,0,J-1)}return q(a,o,C,P)}scaleRows(o={}){if(typeof o!="object")throw new TypeError("options must be an object");const{min:a=0,max:r=1}=o;if(!Number.isFinite(a))throw new TypeError("min must be a number");if(!Number.isFinite(r))throw new TypeError("max must be a number");if(a>=r)throw new RangeError("min must be smaller than max");let c=new fe(this.rows,this.columns);for(let f=0;f<this.rows;f++){const y=this.getRow(f);y.length>0&&e(y,{min:a,max:r,output:y}),c.setRow(f,y)}return c}scaleColumns(o={}){if(typeof o!="object")throw new TypeError("options must be an object");const{min:a=0,max:r=1}=o;if(!Number.isFinite(a))throw new TypeError("min must be a number");if(!Number.isFinite(r))throw new TypeError("max must be a number");if(a>=r)throw new RangeError("min must be smaller than max");let c=new fe(this.rows,this.columns);for(let f=0;f<this.columns;f++){const y=this.getColumn(f);y.length&&e(y,{min:a,max:r,output:y}),c.setColumn(f,y)}return c}flipRows(){const o=Math.ceil(this.columns/2);for(let a=0;a<this.rows;a++)for(let r=0;r<o;r++){let c=this.get(a,r),f=this.get(a,this.columns-1-r);this.set(a,r,f),this.set(a,this.columns-1-r,c)}return this}flipColumns(){const o=Math.ceil(this.rows/2);for(let a=0;a<this.columns;a++)for(let r=0;r<o;r++){let c=this.get(r,a),f=this.get(this.rows-1-r,a);this.set(r,a,f),this.set(this.rows-1-r,a,c)}return this}kroneckerProduct(o){o=fe.checkMatrix(o);let a=this.rows,r=this.columns,c=o.rows,f=o.columns,y=new fe(a*c,r*f);for(let w=0;w<a;w++)for(let C=0;C<r;C++)for(let P=0;P<c;P++)for(let q=0;q<f;q++)y.set(c*w+P,f*C+q,this.get(w,C)*o.get(P,q));return y}kroneckerSum(o){if(o=fe.checkMatrix(o),!this.isSquare()||!o.isSquare())throw new Error("Kronecker Sum needs two Square Matrices");let a=this.rows,r=o.rows,c=this.kroneckerProduct(fe.eye(r,r)),f=fe.eye(a,a).kroneckerProduct(o);return c.add(f)}transpose(){let o=new fe(this.columns,this.rows);for(let a=0;a<this.rows;a++)for(let r=0;r<this.columns;r++)o.set(r,a,this.get(a,r));return o}sortRows(o=it){for(let a=0;a<this.rows;a++)this.setRow(a,this.getRow(a).sort(o));return this}sortColumns(o=it){for(let a=0;a<this.columns;a++)this.setColumn(a,this.getColumn(a).sort(o));return this}subMatrix(o,a,r,c){M(this,o,a,r,c);let f=new fe(a-o+1,c-r+1);for(let y=o;y<=a;y++)for(let w=r;w<=c;w++)f.set(y-o,w-r,this.get(y,w));return f}subMatrixRow(o,a,r){if(a===void 0&&(a=0),r===void 0&&(r=this.columns-1),a>r||a<0||a>=this.columns||r<0||r>=this.columns)throw new RangeError("Argument out of range");let c=new fe(o.length,r-a+1);for(let f=0;f<o.length;f++)for(let y=a;y<=r;y++){if(o[f]<0||o[f]>=this.rows)throw new RangeError(`Row index out of range: ${o[f]}`);c.set(f,y-a,this.get(o[f],y))}return c}subMatrixColumn(o,a,r){if(a===void 0&&(a=0),r===void 0&&(r=this.rows-1),a>r||a<0||a>=this.rows||r<0||r>=this.rows)throw new RangeError("Argument out of range");let c=new fe(r-a+1,o.length);for(let f=0;f<o.length;f++)for(let y=a;y<=r;y++){if(o[f]<0||o[f]>=this.columns)throw new RangeError(`Column index out of range: ${o[f]}`);c.set(y-a,f,this.get(y,o[f]))}return c}setSubMatrix(o,a,r){if(o=fe.checkMatrix(o),o.isEmpty())return this;let c=a+o.rows-1,f=r+o.columns-1;M(this,a,c,r,f);for(let y=0;y<o.rows;y++)for(let w=0;w<o.columns;w++)this.set(a+y,r+w,o.get(y,w));return this}selection(o,a){b(this,o),R(this,a);let r=new fe(o.length,a.length);for(let c=0;c<o.length;c++){let f=o[c];for(let y=0;y<a.length;y++){let w=a[y];r.set(c,y,this.get(f,w))}}return r}trace(){let o=Math.min(this.rows,this.columns),a=0;for(let r=0;r<o;r++)a+=this.get(r,r);return a}clone(){return this.constructor.copy(this,new fe(this.rows,this.columns))}static copy(o,a){for(const[r,c,f]of o.entries())a.set(r,c,f);return a}sum(o){switch(o){case"row":return U(this);case"column":return O(this);case void 0:return G(this);default:throw new Error(`invalid option: ${o}`)}}product(o){switch(o){case"row":return k(this);case"column":return Q(this);case void 0:return A(this);default:throw new Error(`invalid option: ${o}`)}}mean(o){const a=this.sum(o);switch(o){case"row":{for(let r=0;r<this.rows;r++)a[r]/=this.columns;return a}case"column":{for(let r=0;r<this.columns;r++)a[r]/=this.rows;return a}case void 0:return a/this.size;default:throw new Error(`invalid option: ${o}`)}}variance(o,a={}){if(typeof o=="object"&&(a=o,o=void 0),typeof a!="object")throw new TypeError("options must be an object");const{unbiased:r=!0,mean:c=this.mean(o)}=a;if(typeof r!="boolean")throw new TypeError("unbiased must be a boolean");switch(o){case"row":{if(!i.isAnyArray(c))throw new TypeError("mean must be an array");return D(this,r,c)}case"column":{if(!i.isAnyArray(c))throw new TypeError("mean must be an array");return j(this,r,c)}case void 0:{if(typeof c!="number")throw new TypeError("mean must be a number");return ne(this,r,c)}default:throw new Error(`invalid option: ${o}`)}}standardDeviation(o,a){typeof o=="object"&&(a=o,o=void 0);const r=this.variance(o,a);if(o===void 0)return Math.sqrt(r);for(let c=0;c<r.length;c++)r[c]=Math.sqrt(r[c]);return r}center(o,a={}){if(typeof o=="object"&&(a=o,o=void 0),typeof a!="object")throw new TypeError("options must be an object");const{center:r=this.mean(o)}=a;switch(o){case"row":{if(!i.isAnyArray(r))throw new TypeError("center must be an array");return ee(this,r),this}case"column":{if(!i.isAnyArray(r))throw new TypeError("center must be an array");return ce(this,r),this}case void 0:{if(typeof r!="number")throw new TypeError("center must be a number");return ue(this,r),this}default:throw new Error(`invalid option: ${o}`)}}scale(o,a={}){if(typeof o=="object"&&(a=o,o=void 0),typeof a!="object")throw new TypeError("options must be an object");let r=a.scale;switch(o){case"row":{if(r===void 0)r=ie(this);else if(!i.isAnyArray(r))throw new TypeError("scale must be an array");return se(this,r),this}case"column":{if(r===void 0)r=me(this);else if(!i.isAnyArray(r))throw new TypeError("scale must be an array");return Oe(this,r),this}case void 0:{if(r===void 0)r=Ce(this);else if(typeof r!="number")throw new TypeError("scale must be a number");return Be(this,r),this}default:throw new Error(`invalid option: ${o}`)}}toString(o){return l(this,o)}[Symbol.iterator](){return this.entries()}*entries(){for(let o=0;o<this.rows;o++)for(let a=0;a<this.columns;a++)yield[o,a,this.get(o,a)]}*values(){for(let o=0;o<this.rows;o++)for(let a=0;a<this.columns;a++)yield this.get(o,a)}}we.prototype.klass="Matrix",typeof Symbol<"u"&&(we.prototype[Symbol.for("nodejs.util.inspect.custom")]=s);function it(g,o){return g-o}function Rt(g){return g.every(o=>typeof o=="number")}we.random=we.rand,we.randomInt=we.randInt,we.diagonal=we.diag,we.prototype.diagonal=we.prototype.diag,we.identity=we.eye,we.prototype.negate=we.prototype.neg,we.prototype.tensorProduct=we.prototype.kroneckerProduct;class fe extends we{data;#e(o,a){if(this.data=[],Number.isInteger(a)&&a>=0)for(let r=0;r<o;r++)this.data.push(new Float64Array(a));else throw new TypeError("nColumns must be a positive integer");this.rows=o,this.columns=a}constructor(o,a){if(super(),fe.isMatrix(o))this.#e(o.rows,o.columns),fe.copy(o,this);else if(Number.isInteger(o)&&o>=0)this.#e(o,a);else if(i.isAnyArray(o)){const r=o;if(o=r.length,a=o?r[0].length:0,typeof a!="number")throw new TypeError("Data must be a 2D array with at least one element");this.data=[];for(let c=0;c<o;c++){if(r[c].length!==a)throw new RangeError("Inconsistent array dimensions");if(!Rt(r[c]))throw new TypeError("Input data contains non-numeric values");this.data.push(Float64Array.from(r[c]))}this.rows=o,this.columns=a}else throw new TypeError("First argument must be a positive number or an array")}set(o,a,r){return this.data[o][a]=r,this}get(o,a){return this.data[o][a]}removeRow(o){return m(this,o),this.data.splice(o,1),this.rows-=1,this}addRow(o,a){return a===void 0&&(a=o,o=this.rows),m(this,o,!0),a=Float64Array.from(v(this,a)),this.data.splice(o,0,a),this.rows+=1,this}removeColumn(o){_(this,o);for(let a=0;a<this.rows;a++){const r=new Float64Array(this.columns-1);for(let c=0;c<o;c++)r[c]=this.data[a][c];for(let c=o+1;c<this.columns;c++)r[c-1]=this.data[a][c];this.data[a]=r}return this.columns-=1,this}addColumn(o,a){typeof a>"u"&&(a=o,o=this.columns),_(this,o,!0),a=S(this,a);for(let r=0;r<this.rows;r++){const c=new Float64Array(this.columns+1);let f=0;for(;f<o;f++)c[f]=this.data[r][f];for(c[f++]=a[r];f<this.columns+1;f++)c[f]=this.data[r][f-1];this.data[r]=c}return this.columns+=1,this}}d(we,fe);class ae extends we{#e;get size(){return this.#e.size}get rows(){return this.#e.rows}get columns(){return this.#e.columns}get diagonalSize(){return this.rows}static isSymmetricMatrix(o){return fe.isMatrix(o)&&o.klassType==="SymmetricMatrix"}static zeros(o){return new this(o)}static ones(o){return new this(o).fill(1)}constructor(o){if(super(),fe.isMatrix(o)){if(!o.isSymmetric())throw new TypeError("not symmetric data");this.#e=fe.copy(o,new fe(o.rows,o.rows))}else if(Number.isInteger(o)&&o>=0)this.#e=new fe(o,o);else if(this.#e=new fe(o),!this.isSymmetric())throw new TypeError("not symmetric data")}clone(){const o=new ae(this.diagonalSize);for(const[a,r,c]of this.upperRightEntries())o.set(a,r,c);return o}toMatrix(){return new fe(this)}get(o,a){return this.#e.get(o,a)}set(o,a,r){return this.#e.set(o,a,r),this.#e.set(a,o,r),this}removeCross(o){return this.#e.removeRow(o),this.#e.removeColumn(o),this}addCross(o,a){a===void 0&&(a=o,o=this.diagonalSize);const r=a.slice();return r.splice(o,1),this.#e.addRow(o,r),this.#e.addColumn(o,a),this}applyMask(o){if(o.length!==this.diagonalSize)throw new RangeError("Mask size do not match with matrix size");const a=[];for(const[r,c]of o.entries())c||a.push(r);a.reverse();for(const r of a)this.removeCross(r);return this}toCompact(){const{diagonalSize:o}=this,a=new Array(o*(o+1)/2);for(let r=0,c=0,f=0;f<a.length;f++)a[f]=this.get(c,r),++r>=o&&(r=++c);return a}static fromCompact(o){const a=o.length,r=(Math.sqrt(8*a+1)-1)/2;if(!Number.isInteger(r))throw new TypeError(`This array is not a compact representation of a Symmetric Matrix, ${JSON.stringify(o)}`);const c=new ae(r);for(let f=0,y=0,w=0;w<a;w++)c.set(f,y,o[w]),++f>=r&&(f=++y);return c}*upperRightEntries(){for(let o=0,a=0;o<this.diagonalSize;void 0){const r=this.get(o,a);yield[o,a,r],++a>=this.diagonalSize&&(a=++o)}}*upperRightValues(){for(let o=0,a=0;o<this.diagonalSize;void 0)yield this.get(o,a),++a>=this.diagonalSize&&(a=++o)}}ae.prototype.klassType="SymmetricMatrix";class pe extends ae{static isDistanceMatrix(o){return ae.isSymmetricMatrix(o)&&o.klassSubType==="DistanceMatrix"}constructor(o){if(super(o),!this.isDistance())throw new TypeError("Provided arguments do no produce a distance matrix")}set(o,a,r){return o===a&&(r=0),super.set(o,a,r)}addCross(o,a){return a===void 0&&(a=o,o=this.diagonalSize),a=a.slice(),a[o]=0,super.addCross(o,a)}toSymmetricMatrix(){return new ae(this)}clone(){const o=new pe(this.diagonalSize);for(const[a,r,c]of this.upperRightEntries())a!==r&&o.set(a,r,c);return o}toCompact(){const{diagonalSize:o}=this,a=(o-1)*o/2,r=new Array(a);for(let c=1,f=0,y=0;y<r.length;y++)r[y]=this.get(f,c),++c>=o&&(c=++f+1);return r}static fromCompact(o){const a=o.length;if(a===0)return new this(0);const r=(Math.sqrt(8*a+1)+1)/2;if(!Number.isInteger(r))throw new TypeError(`This array is not a compact representation of a DistanceMatrix, ${JSON.stringify(o)}`);const c=new this(r);for(let f=1,y=0,w=0;w<a;w++)c.set(f,y,o[w]),++f>=r&&(f=++y+1);return c}}pe.prototype.klassSubType="DistanceMatrix";class Ue extends we{constructor(o,a,r){super(),this.matrix=o,this.rows=a,this.columns=r}}class nt extends Ue{constructor(o,a){_(o,a),super(o,o.rows,1),this.column=a}set(o,a,r){return this.matrix.set(o,this.column,r),this}get(o){return this.matrix.get(o,this.column)}}class He extends Ue{constructor(o,a){R(o,a),super(o,o.rows,a.length),this.columnIndices=a}set(o,a,r){return this.matrix.set(o,this.columnIndices[a],r),this}get(o,a){return this.matrix.get(o,this.columnIndices[a])}}class ht extends Ue{constructor(o){super(o,o.rows,o.columns)}set(o,a,r){return this.matrix.set(o,this.columns-a-1,r),this}get(o,a){return this.matrix.get(o,this.columns-a-1)}}class It extends Ue{constructor(o){super(o,o.rows,o.columns)}set(o,a,r){return this.matrix.set(this.rows-o-1,a,r),this}get(o,a){return this.matrix.get(this.rows-o-1,a)}}class ct extends Ue{constructor(o,a){m(o,a),super(o,1,o.columns),this.row=a}set(o,a,r){return this.matrix.set(this.row,a,r),this}get(o,a){return this.matrix.get(this.row,a)}}class vt extends Ue{constructor(o,a){b(o,a),super(o,a.length,o.columns),this.rowIndices=a}set(o,a,r){return this.matrix.set(this.rowIndices[o],a,r),this}get(o,a){return this.matrix.get(this.rowIndices[o],a)}}class gt extends Ue{constructor(o,a,r){b(o,a),R(o,r),super(o,a.length,r.length),this.rowIndices=a,this.columnIndices=r}set(o,a,r){return this.matrix.set(this.rowIndices[o],this.columnIndices[a],r),this}get(o,a){return this.matrix.get(this.rowIndices[o],this.columnIndices[a])}}class rt extends Ue{constructor(o,a,r,c,f){M(o,a,r,c,f),super(o,r-a+1,f-c+1),this.startRow=a,this.startColumn=c}set(o,a,r){return this.matrix.set(this.startRow+o,this.startColumn+a,r),this}get(o,a){return this.matrix.get(this.startRow+o,this.startColumn+a)}}class Lt extends Ue{constructor(o){super(o,o.columns,o.rows)}set(o,a,r){return this.matrix.set(a,o,r),this}get(o,a){return this.matrix.get(a,o)}}class z extends we{constructor(o,a={}){const{rows:r=1}=a;if(o.length%r!==0)throw new Error("the data length is not divisible by the number of rows");super(),this.rows=r,this.columns=o.length/r,this.data=o}set(o,a,r){let c=this._calculateIndex(o,a);return this.data[c]=r,this}get(o,a){let r=this._calculateIndex(o,a);return this.data[r]}_calculateIndex(o,a){return o*this.columns+a}}class ft extends we{constructor(o){super(),this.data=o,this.rows=o.length,this.columns=o[0].length}set(o,a,r){return this.data[o][a]=r,this}get(o,a){return this.data[o][a]}}function _t(g,o){if(i.isAnyArray(g))return g[0]&&i.isAnyArray(g[0])?new ft(g):new z(g,o);throw new Error("the argument is not an array")}class St{constructor(o){o=ft.checkMatrix(o);let a=o.clone(),r=a.rows,c=a.columns,f=new Float64Array(r),y=1,w,C,P,q,N,te,Se,J,oe;for(w=0;w<r;w++)f[w]=w;for(J=new Float64Array(r),C=0;C<c;C++){for(w=0;w<r;w++)J[w]=a.get(w,C);for(w=0;w<r;w++){for(oe=Math.min(w,C),N=0,P=0;P<oe;P++)N+=a.get(w,P)*J[P];J[w]-=N,a.set(w,C,J[w])}for(q=C,w=C+1;w<r;w++)Math.abs(J[w])>Math.abs(J[q])&&(q=w);if(q!==C){for(P=0;P<c;P++)te=a.get(q,P),a.set(q,P,a.get(C,P)),a.set(C,P,te);Se=f[q],f[q]=f[C],f[C]=Se,y=-y}if(C<r&&a.get(C,C)!==0)for(w=C+1;w<r;w++)a.set(w,C,a.get(w,C)/a.get(C,C))}this.LU=a,this.pivotVector=f,this.pivotSign=y}isSingular(){let o=this.LU,a=o.columns;for(let r=0;r<a;r++)if(o.get(r,r)===0)return!0;return!1}solve(o){o=fe.checkMatrix(o);let a=this.LU;if(a.rows!==o.rows)throw new Error("Invalid matrix dimensions");if(this.isSingular())throw new Error("LU matrix is singular");let c=o.columns,f=o.subMatrixRow(this.pivotVector,0,c-1),y=a.columns,w,C,P;for(P=0;P<y;P++)for(w=P+1;w<y;w++)for(C=0;C<c;C++)f.set(w,C,f.get(w,C)-f.get(P,C)*a.get(w,P));for(P=y-1;P>=0;P--){for(C=0;C<c;C++)f.set(P,C,f.get(P,C)/a.get(P,P));for(w=0;w<P;w++)for(C=0;C<c;C++)f.set(w,C,f.get(w,C)-f.get(P,C)*a.get(w,P))}return f}get determinant(){let o=this.LU;if(!o.isSquare())throw new Error("Matrix must be square");let a=this.pivotSign,r=o.columns;for(let c=0;c<r;c++)a*=o.get(c,c);return a}get lowerTriangularMatrix(){let o=this.LU,a=o.rows,r=o.columns,c=new fe(a,r);for(let f=0;f<a;f++)for(let y=0;y<r;y++)f>y?c.set(f,y,o.get(f,y)):f===y?c.set(f,y,1):c.set(f,y,0);return c}get upperTriangularMatrix(){let o=this.LU,a=o.rows,r=o.columns,c=new fe(a,r);for(let f=0;f<a;f++)for(let y=0;y<r;y++)f<=y?c.set(f,y,o.get(f,y)):c.set(f,y,0);return c}get pivotPermutationVector(){return Array.from(this.pivotVector)}}function Ge(g,o){let a=0;return Math.abs(g)>Math.abs(o)?(a=o/g,Math.abs(g)*Math.sqrt(1+a*a)):o!==0?(a=g/o,Math.abs(o)*Math.sqrt(1+a*a)):0}class L{constructor(o){o=ft.checkMatrix(o);let a=o.clone(),r=o.rows,c=o.columns,f=new Float64Array(c),y,w,C,P;for(C=0;C<c;C++){let q=0;for(y=C;y<r;y++)q=Ge(q,a.get(y,C));if(q!==0){for(a.get(C,C)<0&&(q=-q),y=C;y<r;y++)a.set(y,C,a.get(y,C)/q);for(a.set(C,C,a.get(C,C)+1),w=C+1;w<c;w++){for(P=0,y=C;y<r;y++)P+=a.get(y,C)*a.get(y,w);for(P=-P/a.get(C,C),y=C;y<r;y++)a.set(y,w,a.get(y,w)+P*a.get(y,C))}}f[C]=-q}this.QR=a,this.Rdiag=f}solve(o){o=fe.checkMatrix(o);let a=this.QR,r=a.rows;if(o.rows!==r)throw new Error("Matrix row dimensions must agree");if(!this.isFullRank())throw new Error("Matrix is rank deficient");let c=o.columns,f=o.clone(),y=a.columns,w,C,P,q;for(P=0;P<y;P++)for(C=0;C<c;C++){for(q=0,w=P;w<r;w++)q+=a.get(w,P)*f.get(w,C);for(q=-q/a.get(P,P),w=P;w<r;w++)f.set(w,C,f.get(w,C)+q*a.get(w,P))}for(P=y-1;P>=0;P--){for(C=0;C<c;C++)f.set(P,C,f.get(P,C)/this.Rdiag[P]);for(w=0;w<P;w++)for(C=0;C<c;C++)f.set(w,C,f.get(w,C)-f.get(P,C)*a.get(w,P))}return f.subMatrix(0,y-1,0,c-1)}isFullRank(){let o=this.QR.columns;for(let a=0;a<o;a++)if(this.Rdiag[a]===0)return!1;return!0}get upperTriangularMatrix(){let o=this.QR,a=o.columns,r=new fe(a,a),c,f;for(c=0;c<a;c++)for(f=0;f<a;f++)c<f?r.set(c,f,o.get(c,f)):c===f?r.set(c,f,this.Rdiag[c]):r.set(c,f,0);return r}get orthogonalMatrix(){let o=this.QR,a=o.rows,r=o.columns,c=new fe(a,r),f,y,w,C;for(w=r-1;w>=0;w--){for(f=0;f<a;f++)c.set(f,w,0);for(c.set(w,w,1),y=w;y<r;y++)if(o.get(w,w)!==0){for(C=0,f=w;f<a;f++)C+=o.get(f,w)*c.get(f,y);for(C=-C/o.get(w,w),f=w;f<a;f++)c.set(f,y,c.get(f,y)+C*o.get(f,w))}}return c}}class E{constructor(o,a={}){if(o=ft.checkMatrix(o),o.isEmpty())throw new Error("Matrix must be non-empty");let r=o.rows,c=o.columns;const{computeLeftSingularVectors:f=!0,computeRightSingularVectors:y=!0,autoTranspose:w=!1}=a;let C=!!f,P=!!y,q=!1,N;if(r<c)if(!w)N=o.clone(),console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");else{N=o.transpose(),r=N.rows,c=N.columns,q=!0;let W=C;C=P,P=W}else N=o.clone();let te=Math.min(r,c),Se=Math.min(r+1,c),J=new Float64Array(Se),oe=new fe(r,te),Pe=new fe(c,c),B=new Float64Array(c),ve=new Float64Array(r),Ie=new Float64Array(Se);for(let W=0;W<Se;W++)Ie[W]=W;let Ze=Math.min(r-1,c),Je=Math.max(0,Math.min(c-2,r)),bt=Math.max(Ze,Je);for(let W=0;W<bt;W++){if(W<Ze){J[W]=0;for(let de=W;de<r;de++)J[W]=Ge(J[W],N.get(de,W));if(J[W]!==0){N.get(W,W)<0&&(J[W]=-J[W]);for(let de=W;de<r;de++)N.set(de,W,N.get(de,W)/J[W]);N.set(W,W,N.get(W,W)+1)}J[W]=-J[W]}for(let de=W+1;de<c;de++){if(W<Ze&&J[W]!==0){let Le=0;for(let ge=W;ge<r;ge++)Le+=N.get(ge,W)*N.get(ge,de);Le=-Le/N.get(W,W);for(let ge=W;ge<r;ge++)N.set(ge,de,N.get(ge,de)+Le*N.get(ge,W))}B[de]=N.get(W,de)}if(C&&W<Ze)for(let de=W;de<r;de++)oe.set(de,W,N.get(de,W));if(W<Je){B[W]=0;for(let de=W+1;de<c;de++)B[W]=Ge(B[W],B[de]);if(B[W]!==0){B[W+1]<0&&(B[W]=0-B[W]);for(let de=W+1;de<c;de++)B[de]/=B[W];B[W+1]+=1}if(B[W]=-B[W],W+1<r&&B[W]!==0){for(let de=W+1;de<r;de++)ve[de]=0;for(let de=W+1;de<r;de++)for(let Le=W+1;Le<c;Le++)ve[de]+=B[Le]*N.get(de,Le);for(let de=W+1;de<c;de++){let Le=-B[de]/B[W+1];for(let ge=W+1;ge<r;ge++)N.set(ge,de,N.get(ge,de)+Le*ve[ge])}}if(P)for(let de=W+1;de<c;de++)Pe.set(de,W,B[de])}}let je=Math.min(c,r+1);if(Ze<c&&(J[Ze]=N.get(Ze,Ze)),r<je&&(J[je-1]=0),Je+1<je&&(B[Je]=N.get(Je,je-1)),B[je-1]=0,C){for(let W=Ze;W<te;W++){for(let de=0;de<r;de++)oe.set(de,W,0);oe.set(W,W,1)}for(let W=Ze-1;W>=0;W--)if(J[W]!==0){for(let de=W+1;de<te;de++){let Le=0;for(let ge=W;ge<r;ge++)Le+=oe.get(ge,W)*oe.get(ge,de);Le=-Le/oe.get(W,W);for(let ge=W;ge<r;ge++)oe.set(ge,de,oe.get(ge,de)+Le*oe.get(ge,W))}for(let de=W;de<r;de++)oe.set(de,W,-oe.get(de,W));oe.set(W,W,1+oe.get(W,W));for(let de=0;de<W-1;de++)oe.set(de,W,0)}else{for(let de=0;de<r;de++)oe.set(de,W,0);oe.set(W,W,1)}}if(P)for(let W=c-1;W>=0;W--){if(W<Je&&B[W]!==0)for(let de=W+1;de<c;de++){let Le=0;for(let ge=W+1;ge<c;ge++)Le+=Pe.get(ge,W)*Pe.get(ge,de);Le=-Le/Pe.get(W+1,W);for(let ge=W+1;ge<c;ge++)Pe.set(ge,de,Pe.get(ge,de)+Le*Pe.get(ge,W))}for(let de=0;de<c;de++)Pe.set(de,W,0);Pe.set(W,W,1)}let Ye=je-1,yt=Number.EPSILON;for(;je>0;){let W,de;for(W=je-2;W>=-1&&W!==-1;W--){const Le=Number.MIN_VALUE+yt*Math.abs(J[W]+Math.abs(J[W+1]));if(Math.abs(B[W])<=Le||Number.isNaN(B[W])){B[W]=0;break}}if(W===je-2)de=4;else{let Le;for(Le=je-1;Le>=W&&Le!==W;Le--){let ge=(Le!==je?Math.abs(B[Le]):0)+(Le!==W+1?Math.abs(B[Le-1]):0);if(Math.abs(J[Le])<=yt*ge){J[Le]=0;break}}Le===W?de=3:Le===je-1?de=1:(de=2,W=Le)}switch(W++,de){case 1:{let Le=B[je-2];B[je-2]=0;for(let ge=je-2;ge>=W;ge--){let T=Ge(J[ge],Le),V=J[ge]/T,K=Le/T;if(J[ge]=T,ge!==W&&(Le=-K*B[ge-1],B[ge-1]=V*B[ge-1]),P)for(let $=0;$<c;$++)T=V*Pe.get($,ge)+K*Pe.get($,je-1),Pe.set($,je-1,-K*Pe.get($,ge)+V*Pe.get($,je-1)),Pe.set($,ge,T)}break}case 2:{let Le=B[W-1];B[W-1]=0;for(let ge=W;ge<je;ge++){let T=Ge(J[ge],Le),V=J[ge]/T,K=Le/T;if(J[ge]=T,Le=-K*B[ge],B[ge]=V*B[ge],C)for(let $=0;$<r;$++)T=V*oe.get($,ge)+K*oe.get($,W-1),oe.set($,W-1,-K*oe.get($,ge)+V*oe.get($,W-1)),oe.set($,ge,T)}break}case 3:{const Le=Math.max(Math.abs(J[je-1]),Math.abs(J[je-2]),Math.abs(B[je-2]),Math.abs(J[W]),Math.abs(B[W])),ge=J[je-1]/Le,T=J[je-2]/Le,V=B[je-2]/Le,K=J[W]/Le,$=B[W]/Le,Y=((T+ge)*(T-ge)+V*V)/2,Ee=ge*V*(ge*V);let ye=0;(Y!==0||Ee!==0)&&(Y<0?ye=0-Math.sqrt(Y*Y+Ee):ye=Math.sqrt(Y*Y+Ee),ye=Ee/(Y+ye));let Te=(K+ge)*(K-ge)+ye,Ne=K*$;for(let xe=W;xe<je-1;xe++){let ze=Ge(Te,Ne);ze===0&&(ze=Number.MIN_VALUE);let Ve=Te/ze,Ke=Ne/ze;if(xe!==W&&(B[xe-1]=ze),Te=Ve*J[xe]+Ke*B[xe],B[xe]=Ve*B[xe]-Ke*J[xe],Ne=Ke*J[xe+1],J[xe+1]=Ve*J[xe+1],P)for(let et=0;et<c;et++)ze=Ve*Pe.get(et,xe)+Ke*Pe.get(et,xe+1),Pe.set(et,xe+1,-Ke*Pe.get(et,xe)+Ve*Pe.get(et,xe+1)),Pe.set(et,xe,ze);if(ze=Ge(Te,Ne),ze===0&&(ze=Number.MIN_VALUE),Ve=Te/ze,Ke=Ne/ze,J[xe]=ze,Te=Ve*B[xe]+Ke*J[xe+1],J[xe+1]=-Ke*B[xe]+Ve*J[xe+1],Ne=Ke*B[xe+1],B[xe+1]=Ve*B[xe+1],C&&xe<r-1)for(let et=0;et<r;et++)ze=Ve*oe.get(et,xe)+Ke*oe.get(et,xe+1),oe.set(et,xe+1,-Ke*oe.get(et,xe)+Ve*oe.get(et,xe+1)),oe.set(et,xe,ze)}B[je-2]=Te;break}case 4:{if(J[W]<=0&&(J[W]=J[W]<0?-J[W]:0,P))for(let Le=0;Le<=Ye;Le++)Pe.set(Le,W,-Pe.get(Le,W));for(;W<Ye&&!(J[W]>=J[W+1]);){let Le=J[W];if(J[W]=J[W+1],J[W+1]=Le,P&&W<c-1)for(let ge=0;ge<c;ge++)Le=Pe.get(ge,W+1),Pe.set(ge,W+1,Pe.get(ge,W)),Pe.set(ge,W,Le);if(C&&W<r-1)for(let ge=0;ge<r;ge++)Le=oe.get(ge,W+1),oe.set(ge,W+1,oe.get(ge,W)),oe.set(ge,W,Le);W++}je--;break}}}if(q){let W=Pe;Pe=oe,oe=W}this.m=r,this.n=c,this.s=J,this.U=oe,this.V=Pe}solve(o){let a=o,r=this.threshold,c=this.s.length,f=fe.zeros(c,c);for(let te=0;te<c;te++)Math.abs(this.s[te])<=r?f.set(te,te,0):f.set(te,te,1/this.s[te]);let y=this.U,w=this.rightSingularVectors,C=w.mmul(f),P=w.rows,q=y.rows,N=fe.zeros(P,q);for(let te=0;te<P;te++)for(let Se=0;Se<q;Se++){let J=0;for(let oe=0;oe<c;oe++)J+=C.get(te,oe)*y.get(Se,oe);N.set(te,Se,J)}return N.mmul(a)}solveForDiagonal(o){return this.solve(fe.diag(o))}inverse(){let o=this.V,a=this.threshold,r=o.rows,c=o.columns,f=new fe(r,this.s.length);for(let q=0;q<r;q++)for(let N=0;N<c;N++)Math.abs(this.s[N])>a&&f.set(q,N,o.get(q,N)/this.s[N]);let y=this.U,w=y.rows,C=y.columns,P=new fe(r,w);for(let q=0;q<r;q++)for(let N=0;N<w;N++){let te=0;for(let Se=0;Se<C;Se++)te+=f.get(q,Se)*y.get(N,Se);P.set(q,N,te)}return P}get condition(){return this.s[0]/this.s[Math.min(this.m,this.n)-1]}get norm2(){return this.s[0]}get rank(){let o=Math.max(this.m,this.n)*this.s[0]*Number.EPSILON,a=0,r=this.s;for(let c=0,f=r.length;c<f;c++)r[c]>o&&a++;return a}get diagonal(){return Array.from(this.s)}get threshold(){return Number.EPSILON/2*Math.max(this.m,this.n)*this.s[0]}get leftSingularVectors(){return this.U}get rightSingularVectors(){return this.V}get diagonalMatrix(){return fe.diag(this.s)}}function X(g,o=!1){return g=ft.checkMatrix(g),o?new E(g).inverse():le(g,fe.eye(g.rows))}function le(g,o,a=!1){return g=ft.checkMatrix(g),o=ft.checkMatrix(o),a?new E(g).solve(o):g.isSquare()?new St(g).solve(o):new L(g).solve(o)}function he(g){if(g=fe.checkMatrix(g),g.isSquare()){if(g.columns===0)return 1;let o,a,r,c;if(g.columns===2)return o=g.get(0,0),a=g.get(0,1),r=g.get(1,0),c=g.get(1,1),o*c-a*r;if(g.columns===3){let f,y,w;return f=new gt(g,[1,2],[1,2]),y=new gt(g,[1,2],[0,2]),w=new gt(g,[1,2],[0,1]),o=g.get(0,0),a=g.get(0,1),r=g.get(0,2),o*he(f)-a*he(y)+r*he(w)}else return new St(g).determinant}else throw Error("determinant can only be calculated for a square matrix")}function re(g,o){let a=[];for(let r=0;r<g;r++)r!==o&&a.push(r);return a}function qe(g,o,a,r=1e-9,c=1e-9){if(g>c)return new Array(o.rows+1).fill(0);{let f=o.addRow(a,[0]);for(let y=0;y<f.rows;y++)Math.abs(f.get(y,0))<r&&f.set(y,0,0);return f.to1DArray()}}function be(g,o={}){const{thresholdValue:a=1e-9,thresholdError:r=1e-9}=o;g=fe.checkMatrix(g);let c=g.rows,f=new fe(c,c);for(let y=0;y<c;y++){let w=fe.columnVector(g.getRow(y)),C=g.subMatrixRow(re(c,y)).transpose(),q=new E(C).solve(w),N=fe.sub(w,C.mmul(q)).abs().max();f.setRow(y,qe(N,q,y,a,r))}return f}function We(g,o=Number.EPSILON){if(g=fe.checkMatrix(g),g.isEmpty())return g.transpose();let a=new E(g,{autoTranspose:!0}),r=a.leftSingularVectors,c=a.rightSingularVectors,f=a.diagonal;for(let y=0;y<f.length;y++)Math.abs(f[y])>o?f[y]=1/f[y]:f[y]=0;return c.mmul(fe.diag(f).mmul(r.transpose()))}function Qe(g,o=g,a={}){g=new fe(g);let r=!1;if(typeof o=="object"&&!fe.isMatrix(o)&&!i.isAnyArray(o)?(a=o,o=g,r=!0):o=new fe(o),g.rows!==o.rows)throw new TypeError("Both matrices must have the same number of rows");const{center:c=!0}=a;c&&(g=g.center("column"),r||(o=o.center("column")));const f=g.transpose().mmul(o);for(let y=0;y<f.rows;y++)for(let w=0;w<f.columns;w++)f.set(y,w,f.get(y,w)*(1/(g.rows-1)));return f}function _e(g,o=g,a={}){g=new fe(g);let r=!1;if(typeof o=="object"&&!fe.isMatrix(o)&&!i.isAnyArray(o)?(a=o,o=g,r=!0):o=new fe(o),g.rows!==o.rows)throw new TypeError("Both matrices must have the same number of rows");const{center:c=!0,scale:f=!0}=a;c&&(g.center("column"),r||o.center("column")),f&&(g.scale("column"),r||o.scale("column"));const y=g.standardDeviation("column",{unbiased:!0}),w=r?y:o.standardDeviation("column",{unbiased:!0}),C=g.transpose().mmul(o);for(let P=0;P<C.rows;P++)for(let q=0;q<C.columns;q++)C.set(P,q,C.get(P,q)*(1/(y[P]*w[q]))*(1/(g.rows-1)));return C}class Ae{constructor(o,a={}){const{assumeSymmetric:r=!1}=a;if(o=ft.checkMatrix(o),!o.isSquare())throw new Error("Matrix is not a square matrix");if(o.isEmpty())throw new Error("Matrix must be non-empty");let c=o.columns,f=new fe(c,c),y=new Float64Array(c),w=new Float64Array(c),C=o,P,q,N=!1;if(r?N=!0:N=o.isSymmetric(),N){for(P=0;P<c;P++)for(q=0;q<c;q++)f.set(P,q,C.get(P,q));ke(c,w,y,f),Xe(c,w,y,f)}else{let te=new fe(c,c),Se=new Float64Array(c);for(q=0;q<c;q++)for(P=0;P<c;P++)te.set(P,q,C.get(P,q));Re(c,te,Se,f),st(c,w,y,f,te)}this.n=c,this.e=w,this.d=y,this.V=f}get realEigenvalues(){return Array.from(this.d)}get imaginaryEigenvalues(){return Array.from(this.e)}get eigenvectorMatrix(){return this.V}get diagonalMatrix(){let o=this.n,a=this.e,r=this.d,c=new fe(o,o),f,y;for(f=0;f<o;f++){for(y=0;y<o;y++)c.set(f,y,0);c.set(f,f,r[f]),a[f]>0?c.set(f,f+1,a[f]):a[f]<0&&c.set(f,f-1,a[f])}return c}}function ke(g,o,a,r){let c,f,y,w,C,P,q,N;for(C=0;C<g;C++)a[C]=r.get(g-1,C);for(w=g-1;w>0;w--){for(N=0,y=0,P=0;P<w;P++)N=N+Math.abs(a[P]);if(N===0)for(o[w]=a[w-1],C=0;C<w;C++)a[C]=r.get(w-1,C),r.set(w,C,0),r.set(C,w,0);else{for(P=0;P<w;P++)a[P]/=N,y+=a[P]*a[P];for(c=a[w-1],f=Math.sqrt(y),c>0&&(f=-f),o[w]=N*f,y=y-c*f,a[w-1]=c-f,C=0;C<w;C++)o[C]=0;for(C=0;C<w;C++){for(c=a[C],r.set(C,w,c),f=o[C]+r.get(C,C)*c,P=C+1;P<=w-1;P++)f+=r.get(P,C)*a[P],o[P]+=r.get(P,C)*c;o[C]=f}for(c=0,C=0;C<w;C++)o[C]/=y,c+=o[C]*a[C];for(q=c/(y+y),C=0;C<w;C++)o[C]-=q*a[C];for(C=0;C<w;C++){for(c=a[C],f=o[C],P=C;P<=w-1;P++)r.set(P,C,r.get(P,C)-(c*o[P]+f*a[P]));a[C]=r.get(w-1,C),r.set(w,C,0)}}a[w]=y}for(w=0;w<g-1;w++){if(r.set(g-1,w,r.get(w,w)),r.set(w,w,1),y=a[w+1],y!==0){for(P=0;P<=w;P++)a[P]=r.get(P,w+1)/y;for(C=0;C<=w;C++){for(f=0,P=0;P<=w;P++)f+=r.get(P,w+1)*r.get(P,C);for(P=0;P<=w;P++)r.set(P,C,r.get(P,C)-f*a[P])}}for(P=0;P<=w;P++)r.set(P,w+1,0)}for(C=0;C<g;C++)a[C]=r.get(g-1,C),r.set(g-1,C,0);r.set(g-1,g-1,1),o[0]=0}function Xe(g,o,a,r){let c,f,y,w,C,P,q,N,te,Se,J,oe,Pe,B,ve,Ie;for(y=1;y<g;y++)o[y-1]=o[y];o[g-1]=0;let Ze=0,Je=0,bt=Number.EPSILON;for(P=0;P<g;P++){for(Je=Math.max(Je,Math.abs(a[P])+Math.abs(o[P])),q=P;q<g&&!(Math.abs(o[q])<=bt*Je);)q++;if(q>P)do{for(c=a[P],N=(a[P+1]-c)/(2*o[P]),te=Ge(N,1),N<0&&(te=-te),a[P]=o[P]/(N+te),a[P+1]=o[P]*(N+te),Se=a[P+1],f=c-a[P],y=P+2;y<g;y++)a[y]-=f;for(Ze=Ze+f,N=a[q],J=1,oe=J,Pe=J,B=o[P+1],ve=0,Ie=0,y=q-1;y>=P;y--)for(Pe=oe,oe=J,Ie=ve,c=J*o[y],f=J*N,te=Ge(N,o[y]),o[y+1]=ve*te,ve=o[y]/te,J=N/te,N=J*a[y]-ve*c,a[y+1]=f+ve*(J*c+ve*a[y]),C=0;C<g;C++)f=r.get(C,y+1),r.set(C,y+1,ve*r.get(C,y)+J*f),r.set(C,y,J*r.get(C,y)-ve*f);N=-ve*Ie*Pe*B*o[P]/Se,o[P]=ve*N,a[P]=J*N}while(Math.abs(o[P])>bt*Je);a[P]=a[P]+Ze,o[P]=0}for(y=0;y<g-1;y++){for(C=y,N=a[y],w=y+1;w<g;w++)a[w]<N&&(C=w,N=a[w]);if(C!==y)for(a[C]=a[y],a[y]=N,w=0;w<g;w++)N=r.get(w,y),r.set(w,y,r.get(w,C)),r.set(w,C,N)}}function Re(g,o,a,r){let c=0,f=g-1,y,w,C,P,q,N,te;for(N=c+1;N<=f-1;N++){for(te=0,P=N;P<=f;P++)te=te+Math.abs(o.get(P,N-1));if(te!==0){for(C=0,P=f;P>=N;P--)a[P]=o.get(P,N-1)/te,C+=a[P]*a[P];for(w=Math.sqrt(C),a[N]>0&&(w=-w),C=C-a[N]*w,a[N]=a[N]-w,q=N;q<g;q++){for(y=0,P=f;P>=N;P--)y+=a[P]*o.get(P,q);for(y=y/C,P=N;P<=f;P++)o.set(P,q,o.get(P,q)-y*a[P])}for(P=0;P<=f;P++){for(y=0,q=f;q>=N;q--)y+=a[q]*o.get(P,q);for(y=y/C,q=N;q<=f;q++)o.set(P,q,o.get(P,q)-y*a[q])}a[N]=te*a[N],o.set(N,N-1,te*w)}}for(P=0;P<g;P++)for(q=0;q<g;q++)r.set(P,q,P===q?1:0);for(N=f-1;N>=c+1;N--)if(o.get(N,N-1)!==0){for(P=N+1;P<=f;P++)a[P]=o.get(P,N-1);for(q=N;q<=f;q++){for(w=0,P=N;P<=f;P++)w+=a[P]*r.get(P,q);for(w=w/a[N]/o.get(N,N-1),P=N;P<=f;P++)r.set(P,q,r.get(P,q)+w*a[P])}}}function st(g,o,a,r,c){let f=g-1,y=0,w=g-1,C=Number.EPSILON,P=0,q=0,N=0,te=0,Se=0,J=0,oe=0,Pe=0,B,ve,Ie,Ze,Je,bt,je,Ye,yt,W,de,Le,ge,T,V;for(B=0;B<g;B++)for((B<y||B>w)&&(a[B]=c.get(B,B),o[B]=0),ve=Math.max(B-1,0);ve<g;ve++)q=q+Math.abs(c.get(B,ve));for(;f>=y;){for(Ze=f;Ze>y&&(J=Math.abs(c.get(Ze-1,Ze-1))+Math.abs(c.get(Ze,Ze)),J===0&&(J=q),!(Math.abs(c.get(Ze,Ze-1))<C*J));)Ze--;if(Ze===f)c.set(f,f,c.get(f,f)+P),a[f]=c.get(f,f),o[f]=0,f--,Pe=0;else if(Ze===f-1){if(je=c.get(f,f-1)*c.get(f-1,f),N=(c.get(f-1,f-1)-c.get(f,f))/2,te=N*N+je,oe=Math.sqrt(Math.abs(te)),c.set(f,f,c.get(f,f)+P),c.set(f-1,f-1,c.get(f-1,f-1)+P),Ye=c.get(f,f),te>=0){for(oe=N>=0?N+oe:N-oe,a[f-1]=Ye+oe,a[f]=a[f-1],oe!==0&&(a[f]=Ye-je/oe),o[f-1]=0,o[f]=0,Ye=c.get(f,f-1),J=Math.abs(Ye)+Math.abs(oe),N=Ye/J,te=oe/J,Se=Math.sqrt(N*N+te*te),N=N/Se,te=te/Se,ve=f-1;ve<g;ve++)oe=c.get(f-1,ve),c.set(f-1,ve,te*oe+N*c.get(f,ve)),c.set(f,ve,te*c.get(f,ve)-N*oe);for(B=0;B<=f;B++)oe=c.get(B,f-1),c.set(B,f-1,te*oe+N*c.get(B,f)),c.set(B,f,te*c.get(B,f)-N*oe);for(B=y;B<=w;B++)oe=r.get(B,f-1),r.set(B,f-1,te*oe+N*r.get(B,f)),r.set(B,f,te*r.get(B,f)-N*oe)}else a[f-1]=Ye+N,a[f]=Ye+N,o[f-1]=oe,o[f]=-oe;f=f-2,Pe=0}else{if(Ye=c.get(f,f),yt=0,je=0,Ze<f&&(yt=c.get(f-1,f-1),je=c.get(f,f-1)*c.get(f-1,f)),Pe===10){for(P+=Ye,B=y;B<=f;B++)c.set(B,B,c.get(B,B)-Ye);J=Math.abs(c.get(f,f-1))+Math.abs(c.get(f-1,f-2)),Ye=yt=.75*J,je=-.4375*J*J}if(Pe===30&&(J=(yt-Ye)/2,J=J*J+je,J>0)){for(J=Math.sqrt(J),yt<Ye&&(J=-J),J=Ye-je/((yt-Ye)/2+J),B=y;B<=f;B++)c.set(B,B,c.get(B,B)-J);P+=J,Ye=yt=je=.964}for(Pe=Pe+1,Je=f-2;Je>=Ze&&(oe=c.get(Je,Je),Se=Ye-oe,J=yt-oe,N=(Se*J-je)/c.get(Je+1,Je)+c.get(Je,Je+1),te=c.get(Je+1,Je+1)-oe-Se-J,Se=c.get(Je+2,Je+1),J=Math.abs(N)+Math.abs(te)+Math.abs(Se),N=N/J,te=te/J,Se=Se/J,!(Je===Ze||Math.abs(c.get(Je,Je-1))*(Math.abs(te)+Math.abs(Se))<C*(Math.abs(N)*(Math.abs(c.get(Je-1,Je-1))+Math.abs(oe)+Math.abs(c.get(Je+1,Je+1))))));)Je--;for(B=Je+2;B<=f;B++)c.set(B,B-2,0),B>Je+2&&c.set(B,B-3,0);for(Ie=Je;Ie<=f-1&&(T=Ie!==f-1,Ie!==Je&&(N=c.get(Ie,Ie-1),te=c.get(Ie+1,Ie-1),Se=T?c.get(Ie+2,Ie-1):0,Ye=Math.abs(N)+Math.abs(te)+Math.abs(Se),Ye!==0&&(N=N/Ye,te=te/Ye,Se=Se/Ye)),Ye!==0);Ie++)if(J=Math.sqrt(N*N+te*te+Se*Se),N<0&&(J=-J),J!==0){for(Ie!==Je?c.set(Ie,Ie-1,-J*Ye):Ze!==Je&&c.set(Ie,Ie-1,-c.get(Ie,Ie-1)),N=N+J,Ye=N/J,yt=te/J,oe=Se/J,te=te/N,Se=Se/N,ve=Ie;ve<g;ve++)N=c.get(Ie,ve)+te*c.get(Ie+1,ve),T&&(N=N+Se*c.get(Ie+2,ve),c.set(Ie+2,ve,c.get(Ie+2,ve)-N*oe)),c.set(Ie,ve,c.get(Ie,ve)-N*Ye),c.set(Ie+1,ve,c.get(Ie+1,ve)-N*yt);for(B=0;B<=Math.min(f,Ie+3);B++)N=Ye*c.get(B,Ie)+yt*c.get(B,Ie+1),T&&(N=N+oe*c.get(B,Ie+2),c.set(B,Ie+2,c.get(B,Ie+2)-N*Se)),c.set(B,Ie,c.get(B,Ie)-N),c.set(B,Ie+1,c.get(B,Ie+1)-N*te);for(B=y;B<=w;B++)N=Ye*r.get(B,Ie)+yt*r.get(B,Ie+1),T&&(N=N+oe*r.get(B,Ie+2),r.set(B,Ie+2,r.get(B,Ie+2)-N*Se)),r.set(B,Ie,r.get(B,Ie)-N),r.set(B,Ie+1,r.get(B,Ie+1)-N*te)}}}if(q!==0){for(f=g-1;f>=0;f--)if(N=a[f],te=o[f],te===0)for(Ze=f,c.set(f,f,1),B=f-1;B>=0;B--){for(je=c.get(B,B)-N,Se=0,ve=Ze;ve<=f;ve++)Se=Se+c.get(B,ve)*c.get(ve,f);if(o[B]<0)oe=je,J=Se;else if(Ze=B,o[B]===0?c.set(B,f,je!==0?-Se/je:-Se/(C*q)):(Ye=c.get(B,B+1),yt=c.get(B+1,B),te=(a[B]-N)*(a[B]-N)+o[B]*o[B],bt=(Ye*J-oe*Se)/te,c.set(B,f,bt),c.set(B+1,f,Math.abs(Ye)>Math.abs(oe)?(-Se-je*bt)/Ye:(-J-yt*bt)/oe)),bt=Math.abs(c.get(B,f)),C*bt*bt>1)for(ve=B;ve<=f;ve++)c.set(ve,f,c.get(ve,f)/bt)}else if(te<0)for(Ze=f-1,Math.abs(c.get(f,f-1))>Math.abs(c.get(f-1,f))?(c.set(f-1,f-1,te/c.get(f,f-1)),c.set(f-1,f,-(c.get(f,f)-N)/c.get(f,f-1))):(V=H(0,-c.get(f-1,f),c.get(f-1,f-1)-N,te),c.set(f-1,f-1,V[0]),c.set(f-1,f,V[1])),c.set(f,f-1,0),c.set(f,f,1),B=f-2;B>=0;B--){for(W=0,de=0,ve=Ze;ve<=f;ve++)W=W+c.get(B,ve)*c.get(ve,f-1),de=de+c.get(B,ve)*c.get(ve,f);if(je=c.get(B,B)-N,o[B]<0)oe=je,Se=W,J=de;else if(Ze=B,o[B]===0?(V=H(-W,-de,je,te),c.set(B,f-1,V[0]),c.set(B,f,V[1])):(Ye=c.get(B,B+1),yt=c.get(B+1,B),Le=(a[B]-N)*(a[B]-N)+o[B]*o[B]-te*te,ge=(a[B]-N)*2*te,Le===0&&ge===0&&(Le=C*q*(Math.abs(je)+Math.abs(te)+Math.abs(Ye)+Math.abs(yt)+Math.abs(oe))),V=H(Ye*Se-oe*W+te*de,Ye*J-oe*de-te*W,Le,ge),c.set(B,f-1,V[0]),c.set(B,f,V[1]),Math.abs(Ye)>Math.abs(oe)+Math.abs(te)?(c.set(B+1,f-1,(-W-je*c.get(B,f-1)+te*c.get(B,f))/Ye),c.set(B+1,f,(-de-je*c.get(B,f)-te*c.get(B,f-1))/Ye)):(V=H(-Se-yt*c.get(B,f-1),-J-yt*c.get(B,f),oe,te),c.set(B+1,f-1,V[0]),c.set(B+1,f,V[1]))),bt=Math.max(Math.abs(c.get(B,f-1)),Math.abs(c.get(B,f))),C*bt*bt>1)for(ve=B;ve<=f;ve++)c.set(ve,f-1,c.get(ve,f-1)/bt),c.set(ve,f,c.get(ve,f)/bt)}for(B=0;B<g;B++)if(B<y||B>w)for(ve=B;ve<g;ve++)r.set(B,ve,c.get(B,ve));for(ve=g-1;ve>=y;ve--)for(B=y;B<=w;B++){for(oe=0,Ie=y;Ie<=Math.min(ve,w);Ie++)oe=oe+r.get(B,Ie)*c.get(Ie,ve);r.set(B,ve,oe)}}}function H(g,o,a,r){let c,f;return Math.abs(a)>Math.abs(r)?(c=r/a,f=a+c*r,[(g+c*o)/f,(o-c*g)/f]):(c=a/r,f=r+c*a,[(c*g+o)/f,(c*o-g)/f])}class De{constructor(o){if(o=ft.checkMatrix(o),!o.isSymmetric())throw new Error("Matrix is not symmetric");let a=o,r=a.rows,c=new fe(r,r),f=!0,y,w,C;for(w=0;w<r;w++){let P=0;for(C=0;C<w;C++){let q=0;for(y=0;y<C;y++)q+=c.get(C,y)*c.get(w,y);q=(a.get(w,C)-q)/c.get(C,C),c.set(w,C,q),P=P+q*q}for(P=a.get(w,w)-P,f&&=P>0,c.set(w,w,Math.sqrt(Math.max(P,0))),C=w+1;C<r;C++)c.set(w,C,0)}this.L=c,this.positiveDefinite=f}isPositiveDefinite(){return this.positiveDefinite}solve(o){o=ft.checkMatrix(o);let a=this.L,r=a.rows;if(o.rows!==r)throw new Error("Matrix dimensions do not match");if(this.isPositiveDefinite()===!1)throw new Error("Matrix is not positive definite");let c=o.columns,f=o.clone(),y,w,C;for(C=0;C<r;C++)for(w=0;w<c;w++){for(y=0;y<C;y++)f.set(C,w,f.get(C,w)-f.get(y,w)*a.get(C,y));f.set(C,w,f.get(C,w)/a.get(C,C))}for(C=r-1;C>=0;C--)for(w=0;w<c;w++){for(y=C+1;y<r;y++)f.set(C,w,f.get(C,w)-f.get(y,w)*a.get(y,C));f.set(C,w,f.get(C,w)/a.get(C,C))}return f}get lowerTriangularMatrix(){return this.L}}class Me{constructor(o,a={}){o=ft.checkMatrix(o);let{Y:r}=a;const{scaleScores:c=!1,maxIterations:f=1e3,terminationCriteria:y=1e-10}=a;let w;if(r){if(i.isAnyArray(r)&&typeof r[0]=="number"?r=fe.columnVector(r):r=ft.checkMatrix(r),r.rows!==o.rows)throw new Error("Y should have the same number of rows as X");w=r.getColumnVector(0)}else w=o.getColumnVector(0);let C=1,P,q,N,te;for(let Se=0;Se<f&&C>y;Se++)N=o.transpose().mmul(w).div(w.transpose().mmul(w).get(0,0)),N=N.div(N.norm()),P=o.mmul(N).div(N.transpose().mmul(N).get(0,0)),Se>0&&(C=P.clone().sub(te).pow(2).sum()),te=P.clone(),r?(q=r.transpose().mmul(P).div(P.transpose().mmul(P).get(0,0)),q=q.div(q.norm()),w=r.mmul(q).div(q.transpose().mmul(q).get(0,0))):w=P;if(r){let Se=o.transpose().mmul(P).div(P.transpose().mmul(P).get(0,0));Se=Se.div(Se.norm());let J=o.clone().sub(P.clone().mmul(Se.transpose())),oe=w.transpose().mmul(P).div(P.transpose().mmul(P).get(0,0)),Pe=r.clone().sub(P.clone().mulS(oe.get(0,0)).mmul(q.transpose()));this.t=P,this.p=Se.transpose(),this.w=N.transpose(),this.q=q,this.u=w,this.s=P.transpose().mmul(P),this.xResidual=J,this.yResidual=Pe,this.betas=oe}else this.w=N.transpose(),this.s=P.transpose().mmul(P).sqrt(),c?this.t=P.clone().div(this.s.get(0,0)):this.t=P,this.xResidual=o.sub(P.mmul(N.transpose()))}}return lt.AbstractMatrix=we,lt.CHO=De,lt.CholeskyDecomposition=De,lt.DistanceMatrix=pe,lt.EVD=Ae,lt.EigenvalueDecomposition=Ae,lt.LU=St,lt.LuDecomposition=St,lt.Matrix=fe,lt.MatrixColumnSelectionView=He,lt.MatrixColumnView=nt,lt.MatrixFlipColumnView=ht,lt.MatrixFlipRowView=It,lt.MatrixRowSelectionView=vt,lt.MatrixRowView=ct,lt.MatrixSelectionView=gt,lt.MatrixSubView=rt,lt.MatrixTransposeView=Lt,lt.NIPALS=Me,lt.Nipals=Me,lt.QR=L,lt.QrDecomposition=L,lt.SVD=E,lt.SingularValueDecomposition=E,lt.SymmetricMatrix=ae,lt.WrapperMatrix1D=z,lt.WrapperMatrix2D=ft,lt.correlation=_e,lt.covariance=Qe,lt.default=fe,lt.determinant=he,lt.inverse=X,lt.linearDependencies=be,lt.pseudoInverse=We,lt.solve=le,lt.wrap=_t,lt}var Wr=tf();const Vs=qh(Wr),ff=Wr.Matrix;Vs.Matrix?Vs.Matrix:Wr.Matrix;export{uf as A,ln as B,cf as D,of as E,nn as F,Go as L,af as M,an as P,rf as S,lf as T,hf as W,nf as a,ff as b,Mn as c,fn as d,sf as e};
