
/**
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 */
function initEventHandelers() {

}

/**
 * Function called upon mouse click or mouse drag. Computes position of cursor,
 * pushes cursor position as GLSL coordinates, and draws.
 *
 * @param {Object} ev The event object containing the mouse's canvas position
 */
function click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor) {
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer

  var rect = ev.target.getBoundingClientRect() ;

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);

  var coordinatesXY = "x: " + x + " y: " + y;
  sendTextToHTML(coordinatesXY, "coord");

  // Store the coordinates to g_points array
  g_points.push(x); g_points.push(y); 
  g_sizes.push(document.getElementById('pointSizeSlider').value); 
  g_colors.push([document.getElementById('redColorSlider').value,document.getElementById('greenColorSlider').value,document.getElementById('blueColorSlider').value,1.0]);
  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_points.length;
  var j = 0;
  for(var i = 0; i < len; i += 2) {
    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, g_points[i], g_points[i+1], 0.0);
    
    sendUniformFloatToGLSL(g_sizes[j], a_PointSize);
    sendUniformVec4ToGLSL(g_colors[j],u_FragColor);
    
    // Draw
    gl.drawArrays(gl.POINTS, 0, 1);
    j++;

  }
}

/**
 * Renders the scene on the HTML canvas.
 */
function render() {
  //
  // YOUR CODE HERE
  //
}

/**
 * Clears the HTML canvas.
 */
function clearCanvas() {
  //
  // YOUR CODE HERE
  //
}

/**
 * Changes the size of the points drawn on HTML canvas.
 *
 * @param {float} size Real value representing the size of the point.
 */
function changePointSize(size) {
}

/**
 * Changes the color of the points drawn on HTML canvas.
 *
 * @param {float} color Color value from 0.0 to 1.0.
 */
function changePointColor(color) {
  //
  // YOUR CODE HERE
  //
}
