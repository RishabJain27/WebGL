/**
 * Function called when the webpage loads.
 */
var g_points = []; // The array for the position of a mouse press
var g_sizes = [];  //The array
var g_colors = [];
let flag = false; 
function main() {
// Vertex shader program
// Retrieve <canvas> element
var canvas = document.getElementById('myCanvas');
var gl = getWebGLContext(canvas);

  // Get the rendering context for WebGL
  
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  // Initialize shaders
  if (!initShaders(gl, ASSIGN1_VSHADER, ASSIGN1_FSHADER)) {
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
  var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if (!u_FragColor) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }


  // Register function (event handler) to be called on a mouse press
  canvas.onmousedown = function(ev){ flag = true; click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor); };
  canvas.onmouseup = function(ev){ flag = false;};
  canvas.onmousemove = function(ev){if(flag == true ){click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor);}};
  document.getElementById('clearCanvas').onclick = function() {sendTextToHTML("x: -- y: --", "coord");gl.clear(gl.COLOR_BUFFER_BIT); g_points = []; g_sizes = []; g_colors = [];};

  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

}
