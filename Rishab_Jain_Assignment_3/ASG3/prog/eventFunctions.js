
/**
 * Responsible for initializing buttons, sliders, radio buttons, etc. present
 * within your HTML document.
 */
function initEventHandelers() {
  //
  // YOUR CODE HERE
  //
}

/**
 * Function called upon mouse click or mouse drag. Computes position of cursor,
 * pushes cursor position as GLSL coordinates, and draws.
 *
 * @param {Object} ev The event object containing the mouse's canvas position
 */
function click(ev, gl, canvas, a_Position, a_PointSize, u_FragColor) {
    // Write the positions of vertices to a vertex shader
  var x = ev.clientX; // x coordinate of a mouse pointer
  var y = ev.clientY; // y coordinate of a mouse pointer

  var rect = ev.target.getBoundingClientRect();

  x = ((x - rect.left) - canvas.width/2)/(canvas.width/2);
  y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
  
  var ShapeSize = (document.getElementById('pointSizeSlider').value);
  var SliderVal = (document.getElementById('SegmentSlider').value);

  var g_colors = [document.getElementById('redColorSlider').value,document.getElementById('greenColorSlider').value,document.getElementById('blueColorSlider').value,1.0];
  //g_colors.push([document.getElementById('redColorSlider').value,document.getElementById('greenColorSlider').value,document.getElementById('blueColorSlider').value,1.0]);

  var coordinatesXY = "x: " + x + " y: " + y;
  sendTextToHTML(coordinatesXY, "coord");

  gl.clear(gl.COLOR_BUFFER_BIT);

    if(shape == "triangle"){
      scene.addGeometry(new FluctuatingTriangle(ShapeSize/200,x,y,g_colors));
    }
    else if(shape == "cube"){
      scene.addGeometry(new TiltedCube(ShapeSize/200,x,y,g_colors));
    }
    else if(shape == "circle"){
      scene.addGeometry(new RandomCircle(ShapeSize/200,SliderVal,x,y,g_colors));
    }
    else if(shape == "square"){
      scene.addGeometry(new SpinningSquare(ShapeSize/200,x,y,g_colors));
    }
    else if(shape == "Obj"){
      scene.addGeometry(new LoadedOBJ(objString));
      console.log(objString);
    }
    else{

    }


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
  //
  // YOUR CODE HERE
  //
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
