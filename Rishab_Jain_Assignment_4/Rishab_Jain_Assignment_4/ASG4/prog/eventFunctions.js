
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
      var textString = document.getElementById('textureInput').files[0];
      if(textString == undefined){
        scene.addGeometry(new TiltedCube(ShapeSize/200,x,y,g_colors));
      }
      else{
          addTextureToCube(ShapeSize/200,x,y,g_colors);
      }
    }
    else if(shape == "circle"){
      scene.addGeometry(new RandomCircle(ShapeSize/200,SliderVal,x,y,g_colors));
    }
    else if(shape == "square"){
      scene.addGeometry(new SpinningSquare(ShapeSize/200,x,y,g_colors));
    }

    else{

    }

}

function addTextureToCube(size,x, y,color) {
	var textureFile = document.getElementById("textureInput").files[0];
	var fileReader = new FileReader();
	fileReader.onload = function() {		
		
		//var texture = new MultiTextureCube(event.target.result);
		textureURL = fileReader.result;
		
		var textureCube = new CheckerCube(size, x, y,color);
		
		var callback = function (texture) { textureCube.texture = texture; }
		create2DTexture(textureURL, gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE, callback);
		scene.addGeometry(textureCube);
		
	}
	fileReader.readAsDataURL(textureFile);
	
}
