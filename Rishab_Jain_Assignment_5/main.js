var canvas,gl,scene,u_ViewMatrix,u_ProjMatrix,u_ModelMatrix,viewMatrix,projMatrix;
var g_eyeX = 0.25, g_eyeY = 0.1, g_eyeZ = 0.25; // Eye position
//var g_near = 0.0, g_far = 100.0;
var g_near = 2.0, g_far = 200;
var xRot = 0.0;
var view = "persp";
var objFlag = true;
var objFlag2 = true;
function main(){

document.getElementById('perspective').onclick = function() {view = "persp";};
document.getElementById('ortho').onclick = function() {view = "ortho";};
    
  canvas = document.getElementById('myCanvas');
  gl = getWebGLContext(canvas);
  
  var shader = createShader(gl, ASSIGN4_VSHADER, ASSIGN4_FSHADER);
  useShader(gl, shader);
    
  scene = new Scene();
    
  // Get the storage location of u_ViewMatrix
  u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
  if(!u_ViewMatrix) { 
    console.log('Failed to get the storage locations of u_ViewMatrix');
    return;
  }
    
  // get the storage location of u_ProjMatrix
  u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
  if (!u_ProjMatrix) { 
    console.log('Failed to get the storage location of u_ProjMatrix');
    return;
  }
    
  // get the storage location of u_ProjMatrix
  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if (!u_ProjMatrix) { 
    console.log('Failed to get the storage location of u_ProjMatrix');
    return;
  }

    
    
  document.onkeydown = function(ev){ keyPressed(ev); };
    
  var g_colors = [0.5,0.0,0.0,1.0];
    
 var objString = document.getElementById('cat').text;
 var objStringTea = document.getElementById('teapot').text;
    
 resize(gl.canvas);
 
 gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
 	var img1 = new Image();
	img1.crossOrigin = "Anonymous";
	var heightData = [];

	var img2 = new Image();
	img2.crossOrigin = "Anonymous";
	var colorData = [];

	img1.onload = function () {
		heightData = sampleImageColor(img1);
		img2.onload = function () {
			colorData = sampleImageColor(img2);
            //console.log(colorData);
			drawTerrain(heightData,colorData);
		}

	}
	img1.src = "world/nishHeight.png";
	img2.src = "world/nishColor.png";
    
    //scene.render();
  //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
  var g_colors = [0.0,0.5,0.0,1.0];
  //scene.addGeometry(new LoadedOBJ(objStringTea,g_colors,-0.7));

  var g_colors = [0.0,0.0,0.5,1.0]; 
  //scene.addGeometry(new TiltedCube(0.5,0.0,0.0,g_colors));
  //scene.addGeometry(new TiltedCube(0.1,-0.2,0.2,g_colors));
  
  //scene.addGeometry(new TiltedCube(0.1,-0.25,0.0,g_colors));

  //var g_colors = [0.0,0.5,0.5,1.0];
  //scene.addGeometry(new TiltedCube(400/200,0.0,0.0,g_colors));

    
function keyPressed(ev) {
      switch(ev.keyCode){
        case 74:   // j was pressed
            scene.camera.rotate(5);
            break; 
        case 76:   // l was pressed
            scene.camera.rotate(-5);
            break; 
        case 68:   // d was pressed
            scene.camera.pan(0.5, -1);
            break;  
        case 65:   // a was pressed
            scene.camera.pan(0.5, 1);
            break;  
        case 87:   // w was pressed
            scene.camera.move(0.5, 1);
            break;  
        case 83:   // s was pressed
            scene.camera.move(0.5, -1);
            break;  
        default: return; // Prevent the unnecessary drawing
    }
    
}

function resize(canvas) {
    // Lookup the size the browser is displaying the canvas.
    var displayWidth  = canvas.clientWidth;
    var displayHeight = canvas.clientHeight;

    // Check if the canvas is not the same size.
    if (canvas.width  != displayWidth ||
        canvas.height != displayHeight) {

      // Make the canvas the same size
      canvas.width  = displayWidth;
      canvas.height = displayHeight;
    }
  }
    
function drawTerrain(heightData, colorData) {

	//console.log("Initialize terrain...");
	//console.log("Height data: " + heightData);
	//console.log("Color data: " + colorData);

	// center of the cube
	var centerX = 0; 
	var centerY = 0.85;

	for (let i = 0; i < heightData.length; i += 4) {
		// decide the 3 components of the height starting from the grey shades
		var r = heightData[i] / 255;
		r = Math.round(r * 10) / 10;
		var g = heightData[i + 1] / 255;
		g = Math.round(g * 10) / 10;
		var b = heightData[i + 2] / 255;
		b = Math.round(b * 10) / 10;

		// each 16 pixels (64 elements of the array) you change row
		// the first time this if{} is calculated is when i == 0
		if (i % 64 == 0) {
			centerX = 0.05 - 0.8;
			centerY = centerY - 0.1;
			console.log(i);
		}

		// if the height is 0, for efficiency sake you don't want to draw a cube
		if (r == 0.0 && g == 0.0 && b == 0.0){
            if(objFlag2 == true){
                var g_colors = [0.5,0.5,0.5,1.0];
                scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
                objFlag2 = false;
                //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
            }
            else if(objFlag == true){
                var g_colors = [0.5,0.5,0.5,1.0];
                //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
                scene.addGeometry(new LoadedOBJ(objStringTea,g_colors,0.5));
                objFlag = false;
            }
            else{
                
            }
            
            centerX = centerX + 0.1; // update x coordinate of the canvas   
        }
		else { // otherwise you draw the cube 
			// calculate height 
			var height = Math.sqrt(r * r + g * g + b * b);
			height = Math.round(height * 10) / 100;

			// store the color data in the global variable, then
			// the cube class will use the colors to draw each vertex
			red = colorData[i] / 255;
			red = Math.round(red * 10) / 10;
			green = colorData[i + 1] / 255;
			green = Math.round(green * 10) / 10;
			blue = colorData[i + 2] / 255;
			blue = Math.round(blue * 10) / 10;
			
			var color = [red,green,blue,1.0];
            //console.log("color: " + color);
			// draw the cube
			var toDraw = new TiltedCube(height, centerX,centerY,color);
			scene.addGeometry(toDraw);
			scene.render();
			

			// update x coordinate of the canvas
			centerX = centerX + 0.1;
		}
		
		

	}
}
    
  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  tick();

}
