
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

    if(shape == "square"){
      console.log("in square");
      scene.addGeometry(new Square(ShapeSize/150,x,y,g_colors));
    }
    else if(shape == "triangle"){
      scene.addGeometry(new Triangle(ShapeSize/150,x,y,g_colors));
    }
    else if(shape == "circle"){
     scene.addGeometry(new Circle(ShapeSize/150,SliderVal,x,y,g_colors));
    }

    scene.render();
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

