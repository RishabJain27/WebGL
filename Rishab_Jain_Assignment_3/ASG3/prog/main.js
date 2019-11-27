var canvas;
var gl;
let flag = false;
var canvasFlag = false;
var shape = "none";
var scene;
var u_FragColor;
var u_ModelMatrix;
var objString;


function main() {
	// Vertex shader program
	// Retrieve <canvas> element
	canvas = document.getElementById('myCanvas');
	gl = getWebGLContext(canvas);

	scene = new Scene();

  // Get the rendering context for WebGL
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }
  // Initialize shaders
  if (!initShaders(gl, ASSIGN2_VSHADER, ASSIGN2_FSHADER)) {
    console.log('Failed to intialize shaders.');
    return;
  }
  // // Get the storage location of a_Position
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }
  var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
  if (a_PointSize < 0) {
    console.log('Failed to get the storage location of a_PointSize');
    return;
  }
 // Get the storage location of u_FragColor
  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  // Get storage location of u_ModelMatrix
  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if (!u_ModelMatrix) { 
    console.log('Failed to get the storage location of u_ModelMatrix');
    return;
  }


  // Register function (event handler) to be called on a mouse press
  canvas.onmousedown = function(ev){ flag = true; click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor);};
  canvas.onmouseup = function(ev){ flag = false;};
  canvas.onmousemove = function(ev){if(flag == true ){click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor);}};
  document.getElementById('clearCanvas').onclick = function() {sendTextToHTML("x: -- y: --", "coord"); scene.clearGeometry();gl.clear(gl.COLOR_BUFFER_BIT);};

  document.getElementById('spinningSquare').onclick = function() {shape = "square";};  
  document.getElementById('fluctuatingTriangle').onclick = function() {shape = "triangle";};
  document.getElementById('randomCircle').onclick = function() {shape = "circle";};
  document.getElementById('tiltedCube').onclick = function() {shape = "cube";};

  document.getElementById('addObj').onclick = function() {shape = "Obj";objString = document.getElementById('objInput').value;};



  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
  tick();

}
