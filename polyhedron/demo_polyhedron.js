import './../css/style.css'
import * as THREE from 'three';
import { Matrix } from 'ml-matrix';
import experiment_data from './../assets/demo_data.json' assert {type: 'json'};
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineSegments2 } from 'three/addons/lines/LineSegments2.js';
import { LineSegmentsGeometry } from 'three/addons/lines/LineSegmentsGeometry.js';

// Define some initial variables
const KEYPRESS_SPACEBAR = 0x20;
const KEYPRESS_P = 0x50;
const KEYPRESS_S = 0x53;
const KEYPRESS_W = 0x57;
const Y_ROT = 60;
var ty_extra;
var obj_x_position = 2;
var j;
var scale;
var dist;
let obj_type = localStorage.getItem("obj_type");

class trial {
  constructor(xyz, ijk, dist, sa_options, vsa, vsa2, tz){
    this.xyz = xyz;
    this.ijk = ijk;
    this.dist = dist;
    this.sa_options = sa_options;
    this.slant_counter = Math.floor(this.sa_options.length * Math.random())
    this.vsa = vsa;
    this.vsa2 = vsa2;
    this.tz = tz;
    if (this.dist == 4){
      this.scale = .4
    } else if (this.dist == 6){
      this.scale = .5
    }else if (this.dist == 8){
      this.scale = 1.5
    }else if (this.dist == 10){
      this.scale = 1.3
    }else if (this.dist == 12){
      this.scale = 1.4
    }
  }

  get slant(){
    return this.sa_options[this.slant_counter]
  }
}

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element using destructuring assignment.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


class experiment{
  constructor(experiment_data){
    this.num_trials = 3;
    this.i = 0;
    var tmp = [4,8,12];
    this.dist_order = shuffleArray(tmp);
    this.trials = this.get_trials(experiment_data);
  }

  get_trials(experiment_data){
    var trials = [];
    var counter = 0;
    for (let i=0, len=this.dist_order.length; i<len; i++){
        trials.push(new trial(
          experiment_data[obj_type].xyz,
          experiment_data[obj_type].ijk,
          this.dist_order[i],
          experiment_data[obj_type].slant_options,
          experiment_data[obj_type].vsa, 
          experiment_data[obj_type].vsa2, 
          Math.floor(Math.random() * 360))
        );         
    }
    //Math.floor(Math.random() * 360)
    return trials
  }

  go_forward_one_trial(){
    if (this.i < this.num_trials - 1){
      this.i += 1;
      console.log(this.i, 'asdf')
    }
    if (this.i == 2){
      document.getElementById("number_button").hidden = false;
    }
  }

  go_back_one_trial(){
    if (this.i > 0) {
      this.i -= 1;
    }
  }

  get k(){
    return this.i
  }

  is_last_trial(){
    return this.i == (this.num_trials-1);
  }
}


function radians(theta){
  return theta * Math.PI / 180
}

function degrees(theta){
  return theta * 180 / Math.PI
}

function roty(theta){
  var tr = radians(theta)
  var m = new Matrix([ [Math.cos(tr)      , 0, Math.sin(tr)], 
            [   0             , 1,     0       ], 
            [-1 * Math.sin(tr), 0, Math.cos(tr)] ]);
  return m
}

function rotz(theta){
  var tr = radians(theta)
  var m = new Matrix([ [Math.cos(tr)    , -Math.sin(tr), 0], 
            [   Math.sin(tr)            , Math.cos(tr) ,     0       ], 
            [0,0,1] ]);
  return m
}


function scale_mat(vsa, target, scale, tz){
  var vsa_rad = radians(vsa)
  var target_rad = radians(target)
  var tz_rad = radians(tz)
  var s = Math.sin(tz_rad)
  var c = Math.cos(tz_rad)
  var a = (Math.cos(2*vsa_rad) - Math.cos(2*target_rad))/Math.sin(2*target_rad)
  var b = Math.sin(2*vsa_rad)/Math.sin(2*target_rad)
  var m = new Matrix([ [scale        , 0            , 0], 
            [0            , scale        , 0], 
            [a * c * scale, a * s * scale, b * scale]]);
  return m
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == KEYPRESS_W){
      increase_slant()
    } else if (keyCode == KEYPRESS_S){
      decrease_slant()
    } else if (keyCode == KEYPRESS_SPACEBAR){
        exp.go_forward_one_trial();
        init();
        animate();
    } else if (keyCode == KEYPRESS_P){
      exp.go_back_one_trial();      
      init();
      animate();
    }
}

function increase_slant(){
  if (exp.trials[exp.k].slant_counter < exp.trials[exp.k].sa_options.length-1) {
    var object = scene.getObjectByName( "right" );
    exp.trials[exp.k].slant_counter += 1
    console.log('slant up = ', exp.trials[exp.k].slant)
    var sm = scale_mat(exp.trials[exp.k].vsa2, exp.trials[exp.k].slant, exp.trials[exp.k].scale, exp.trials[exp.k].tz)
    // sm = roty(ty_extra).mmul(sm)
    var xyzR = xyz.mmul(sm.transpose()).mmul(roty(ty_extra))
    // console.log("sm = ", sm)
    console.log("slant = ", exp.trials[exp.k].slant)
    const right_geo = new THREE.BufferAttribute( new Float32Array(xyzR.to1DArray()), 3 )
    object.geometry.setAttribute( 'position', right_geo );
    object.geometry.computeVertexNormals()
    var wireframe = scene.getObjectByName( "right_wire" );
    wireframe.geometry.setAttribute( 'position', right_geo );
  }
}

function decrease_slant(){
  if (exp.trials[exp.k].slant_counter > 0) {
    var object = scene.getObjectByName( "right" );
    exp.trials[exp.k].slant_counter -= 1
    console.log('slant down = ', exp.trials[exp.k].slant)
    var sm = scale_mat(exp.trials[exp.k].vsa2, exp.trials[exp.k].slant, exp.trials[exp.k].scale, exp.trials[exp.k].tz)
    // sm = roty(ty_extra).mmul(sm)
    var xyzR = xyz.mmul(sm.transpose()).mmul(roty(ty_extra))
    // console.log("sm = ", sm)
    console.log("slant = ", exp.trials[exp.k].slant)
    const right_geo = new THREE.BufferAttribute( new Float32Array(xyzR.to1DArray()), 3 )
    object.geometry.setAttribute( 'position', right_geo );
    object.geometry.computeVertexNormals()
    var wireframe = scene.getObjectByName( "right_wire" );
    wireframe.geometry.setAttribute( 'position', right_geo );
  }
}

function init(){
  // Make canvas
  scene = new THREE.Scene() 
  // Pick scale of right shape 
  const phi = 22 * Math.PI / 180
  const tan_phi = Math.tan(phi)
  obj_x_position = exp.trials[exp.k].dist * tan_phi
  // Update Title
  document.getElementById("info").innerHTML = "Trial " + (exp.k+1).toString() + " / " + exp.num_trials.toString() ;

  // Define Camera 
  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.PerspectiveCamera(fov, aspect, .1, 50) //fov/3??
  camera.position.z = 0;//experiment_data[k].dist;
  ty_extra = Y_ROT + degrees(Math.PI/2 - Math.atan(exp.trials[exp.k].dist/obj_x_position))
  // console.log("ty_extra = ", ty_extra)

  document.body.appendChild( renderer.domElement );

  // Define Lights
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(10,10,0)
  light.castShadow=true;
  scene.add( light );

  const light2 = new THREE.DirectionalLight(0xffffff, 1)
  light2.position.set(-10,10,0)
  light2.castShadow=true;
  scene.add( light2 );

  const lightAmbient = new THREE.AmbientLight( 0xffffff, .8 ); //yellow = 0xf4fc03
  scene.add(lightAmbient)

  // Define Material
  const material = new THREE.MeshPhongMaterial({color: 0xA9A9A9}); //darker grey A9A9A9, light grey D3D3D3
  material.side = THREE.DoubleSide;
  material.wireframe = false;
  material.roughness = 1;
  material.flatShading=true;


  // Define Base Geometry
  xyz = new Matrix(exp.trials[exp.k].xyz)
  xyz = xyz.mmul(rotz(exp.trials[exp.k].tz).transpose())
  // Define Left Geometry
  var geometry_left = new THREE.BufferGeometry();
  geometry_left.setIndex(exp.trials[exp.k].ijk)
  geometry_left.setAttribute( 'position', new THREE.Float32BufferAttribute(xyz.to1DArray(), 3, false) );
  geometry_left.computeVertexNormals()
  geometry_left.name = "left"

  // Define Left Wireframe 
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); 
  const edges_left = new THREE.EdgesGeometry( geometry_left );
  const wire_left = new THREE.LineSegments( edges_left, lineMaterial );

  // Define Right Geometry
  var geometry_right = new THREE.BufferGeometry();
  var sm = scale_mat(exp.trials[exp.k].vsa2, exp.trials[exp.k].slant, exp.trials[exp.k].scale, exp.trials[exp.k].tz)
  // sm = sm.mmul(roty(ty_extra))
  var xyzR = xyz.mmul(sm.transpose()).mmul(roty(ty_extra))
  geometry_right.setAttribute( 'position', new THREE.Float32BufferAttribute( xyzR.to1DArray(), 3 ) );
  geometry_right.setIndex(exp.trials[exp.k].ijk)
  geometry_right.computeVertexNormals()
  geometry_right.name = "right"

  // Define Right Wireframe 
  const edges_right = new THREE.EdgesGeometry( geometry_right );
  const wire_right = new THREE.LineSegments( edges_right, lineMaterial );
  wire_right.name = "right_wire"


  // Define Left, Right Cubes and Place
  const left_cube = new THREE.Mesh(geometry_left, material);
  const right_cube = new THREE.Mesh(geometry_right, material);
  right_cube.name = "right"
  scene.add(left_cube);
  scene.add( wire_left );
  scene.add(right_cube);
  scene.add( wire_right );
  
  // Set positions 
  right_cube.position.y = 0;//-.7;
  right_cube.position.z = -1 * exp.trials[exp.k].dist;
  right_cube.position.x = exp.trials[exp.k].dist * tan_phi

  wire_right.position.z = -1 * exp.trials[exp.k].dist;
  wire_right.position.x = exp.trials[exp.k].dist * tan_phi

  left_cube.position.z = -1 * exp.trials[exp.k].dist;  
  wire_left.position.z = -1 * exp.trials[exp.k].dist;

  // Add Event Listeners
  document.addEventListener("keydown", onDocumentKeyDown, false);
  window.addEventListener( 'resize', onWindowResize );
  document.getElementById("number_button").addEventListener("click", gather_sub_data, false);
}

function gather_sub_data(){
  let dists = [4,8,12];
  var subject_responses = [];
  for (let i=0, len=dists.length; i<len; i++){
    // S, subject, slant
    let target_dist = dists[i];
    for (let r=0, len=dists.length; r<len; r++){
      if (exp.trials[r].dist == target_dist){
        var s = experiment_data[obj_type].s[exp.trials[r].dist];
        let subject = "You";
        var slant_i = Math.abs(exp.trials[r].slant);
        subject_responses.push({"Angle s":s, "Slant":slant_i, "Subject":subject})
      }
    }
  }
  localStorage.setItem("you", JSON.stringify(subject_responses));
  window.location.href = "./../summary/index.html"
}

function onWindowResize() {
  var aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  requestAnimationFrame( animate );
  var object = scene.getObjectByName( "right" );
  var wireframe = scene.getObjectByName( "right_wire" );
  const time = performance.now() * 0.0002;
  object.rotation.x = time * 4;
  wireframe.rotation.x = time * 4;
  renderer.render( scene, camera );
}

//JSON.parse(localStorage.you)


// Define Variables
var camera, scene, renderer, xyz;
var aspect = window.innerWidth / window.innerHeight;
const ppi = Math.sqrt(window.innerHeight**2 + window.innerWidth**2) / 32
const real_depth = 20;
var fov = degrees(2 * Math.atan(window.innerWidth/(2 * aspect * real_depth * ppi)))

// Renderer 
renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(devicePixelRatio)

// Init
var exp = new experiment(experiment_data);
console.log(exp)
init()
animate();













