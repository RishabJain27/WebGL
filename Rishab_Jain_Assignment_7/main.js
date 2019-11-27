var canvas,gl,scene,u_ViewMatrix,u_ProjMatrix,u_ModelMatrix,viewMatrix,projMatrix, u_Clicked;
var u_NormalMatrix, u_LightColor, u_LightPosition, u_AmbientLight;
var g_eyeX = 0.25, g_eyeY = 0.1, g_eyeZ = 0.25; // Eye position
//var g_near = 0.0, g_far = 100.0;
var g_near = 2.0, g_far = 200;
var xRot = 0.0;
var view = "persp";
var objFlag = true;
var objFlag2 = true;
var shaderFlag = false;
var clickFlag = false;
var teaClicked = false;
var catClicked = false;
var cat2Clicked = false;
var tickFlag = true;
var totalObjHit = 0;
var ctx2, mapHUD;
var shader;

function main(){
    

document.getElementById('perspective').onclick = function() {view = "persp";};
document.getElementById('ortho').onclick = function() {view = "ortho";};
    
  canvas = document.getElementById('myCanvas');
  gl = getWebGLContext(canvas);

  shader = createShader(gl, VSHADER6,FSHADER6);
    
  scene = new Scene();   
    
    
  document.onkeydown = function(ev){ keyPressed(ev); };
    
  var g_colors = [0.5,0.0,0.0,1.0];
    
 var objStringCat = document.getElementById('cat').text;
 var objStringTea = document.getElementById('teapot').text;
 mapHUD = document.getElementById('maphud');
    
ctx2 = mapHUD.getContext('2d');
  if (!gl || !ctx2) {
    console.log('Failed to get rendering context');
    return;
  }
 
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
  
    //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
  var g_colors = [1.0,1.0,0.0,254/255];
  scene.addGeometry(new LoadedOBJ(objStringCat,g_colors,0.5));

  var g_colors = [1.0,1.0,1.0,253/255];
  scene.addGeometry(new LoadedOBJ(objStringTea,g_colors,-0.1));
    
  var g_colors = [0.0,1.0,0.0,252/255];
  scene.addGeometry(new LoadedOBJ(objStringCat,g_colors,0.9));
    
  var toDraw = new Square(0.8, 0.0,-0.09,g_colors);
    scene.addGeometry(toDraw);
    

draw2DMap(ctx2);
resizeMapHUD();
    canvas.onmousedown = function(ev) {   // Mouse is pressed
    var x = ev.clientX, y = ev.clientY;
    var rect = ev.target.getBoundingClientRect();
    if (rect.left <= x && x < rect.right && rect.top <= y && y < rect.bottom) {
      // If pressed position is inside <canvas>, check if it is above object
      var x_in_canvas = x - rect.left, y_in_canvas = rect.bottom - y;
      check(x_in_canvas, y_in_canvas);
      
    }
  }
function draw2DMap(ctx) {
	// ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear <hud>
    //               // Start drawingß
	var img = new Image();
	img.onload = function() {
	  ctx.drawImage(img, 10, 5);
	  ctx.beginPath();
	  ctx.stroke();
	}
	img.src = "world/nishColor.png";
  }
    
function resizeMapHUD() {
	
  // Lookup the size the browser is displaying the canvas.
  var displayWidth  = ctx2.canvas.clientWidth*0.15;
  var displayHeight = ctx2.canvas.clientHeight*0.15;
    
  
 
  // Check if the canvas is not the same size.
  if (ctx2.canvas.width  != displayWidth ||
	ctx2.canvas.height != displayHeight) 
  {
 
    // Make the canvas the same size
    ctx2.canvas.width  = displayWidth;
    ctx2.canvas.height = displayHeight;
  }
}
    
function check(x, y) {
  var picked = false;
  gl.uniform1i(u_Clicked, 1);
    scene.render();
    // Pass true to u_Clicked
  //draw(gl, n, currentAngle, viewProjMatrix, u_MvpMatrix); // Draw cube with red
  // Read pixel at the clicked position
  var pixels = new Uint8Array(4); // Array for storing the pixel value
  gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
  console.log("Hit item " + pixels[3] );
  if (pixels[0] != 0 || pixels[1] != 0 || pixels[2] != 0){
      console.log("Hit item " + pixels );
      picked = true;
      if(pixels[3] == 254){
          if(catClicked){
              alert("You already got this object");
              return;
          }
          catClicked = true;
          totalObjHit++;
          var num = 3 - totalObjHit;
          if(num == 0){
              alert("Congrats! You won the game!!! Refresh Page to start a new game.");
          }
          else{
            alert("Hit a Cat. Number of objects left: " + num );
          }
          
      }
      else if(pixels[3] == 253){
          if(teaClicked){
              alert("You already got this object");
              return;
          }
          teaClicked = true;
          totalObjHit++;
          var num = 3 - totalObjHit;
          if(num == 0){
              alert("Congrats! You won the game!!! Refresh Page to start a new game.");
          }
          else{
            alert("Hit Teapot. Number of objects left: " + num);
          }
      }
      else if(pixels[3] == 252){
          if(cat2Clicked){
              alert("You already got this object");
              return;
          }
          cat2Clicked = true;
          totalObjHit++;
          var num = 3 - totalObjHit;
          if(num == 0){
              alert("Congrats! You won the game!!! Refresh Page to start a new game.");
          }
          else{
            alert("Hit green cat. Number of objects left: " + num);
          }
      }
      //alert('The cube was selected! ');
  } 
    
  gl.uniform1i(u_Clicked, 0);  // Pass false to u_Clicked(rewrite the cube)
  scene.render();
  //draw(gl, n, currentAngle, viewProjMatrix, u_MvpMatrix); // Draw the cube
  //return picked;
}
    
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
                //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
                objFlag2 = false;
                //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
            }
            else if(objFlag == true){
                var g_colors = [0.5,0.5,0.5,1.0];
                //scene.addGeometry(new LoadedOBJ(objString,g_colors,0.5));
                //scene.addGeometry(new LoadedOBJ(objStringTea,g_colors,0.5));
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
            height = height*10;
			var toDraw = new TiltedCubeS(height, centerX,centerY,color);
			scene.addGeometry(toDraw);
			
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
