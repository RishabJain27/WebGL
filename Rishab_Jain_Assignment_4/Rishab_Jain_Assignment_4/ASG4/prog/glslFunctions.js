/**
 * Sends a WebGL 2D texture object (created by load2DTexture) and sends it to
 * the shaders.
 *
 * @param val The WebGL 2D texture object being passed
 * @param {Number} textureUnit The texture unit (0 - 7) where the texture will reside
 * @param {String} uniformName The name of the uniform variable where the texture's
 * textureUnit location (0 - 7) will reside
 */
function send2DTextureToGLSL(val, textureUnit, uniformName) {
  var glTextureUnit = determineGLTextureUnit(textureUnit);
  var uniform = gl.getUniformLocation(gl.program,uniformName);

  gl.activeTexture(glTextureUnit);
  gl.bindTexture(gl.TEXTURE_2D,val);
  gl.uniform1i(uniform,textureUnit);

}

function determineGLTextureUnit(textureUnit){
  if(textureUnit == 0){
    return gl.TEXTURE0;
  }
  else if(textureUnit ==1){
    return gl.TEXTURE1;
  }
  else if(textureUnit == 2){
    return gl.TEXTURE2;
  }
  else if(textureUnit == 3){
    return gl.TEXTURE3;
  }
  else if(textureUnit == 4){
    return gl.TEXTURE4;
  }
  else if(textureUnit == 5){
    return gl.TEXTURE5;
  }
  else if(textureUnit == 6){
    return gl.TEXTURE6;
  }
  else if(textureUnit == 7){
    return gl.TEXTURE7;
  }
  else{

  }

}
/**
 * Creates a WebGl 2D texture object.
 *
 * @param imgPath A file path/data url containing the location of the texture image
 * @param magParam texParameteri for gl.TEXTURE_MAG_FILTER. Can be gl.NEAREST,
 * gl.LINEAR, etc.
 * @param minParam texParameteri for gl.TEXTURE_MIN_FILTER. Can be gl.NEAREST,
 * gl.LINEAR, etc.
 * @param wrapSParam texParameteri for gl.TEXTURE_WRAP_S. Can be gl.REPEAT,
 * gl. MIRRORED_REPEAT, or gl.CLAMP_TO_EDGE.
 * @param wrapTParam texParameteri for gl.TEXTURE_WRAP_S. Can be gl.REPEAT,
 * gl. MIRRORED_REPEAT, or gl.CLAMP_TO_EDGE.
 * @param callback A callback function which executes with the completed texture
 * object passed as a parameter.
 */
function create2DTexture(imgPath, magParam, minParam, wrapSParam, wrapTParam, callback) {

  var texImg = new Image();

  texImg.onload = function() {
    var texture = gl.createTexture();

    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,1);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,magParam);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER, minParam);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,wrapSParam);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T, wrapTParam);

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,texImg);

    callback(texture);
  };

  texImg.src = imgPath;
}

/**
 * Sends data to a uniform variable expecting a matrix value.
 *
 * @private
 * @param {Array} val Value being sent to uniform variable
 * @param {String} uniformName Name of the uniform variable recieving data
 */
 function sendUniformMatToGLSL(val, uniformName) {
  gl.uniformMatrix4fv(uniformName, false, val.elements);
}

/**
 * Sends data to an attribute variable using a buffer.
 *
 * @private
 * @param {Float32Array} data Data being sent to attribute variable
 * @param {Number} dataCount The amount of data to pass per vertex
 * @param {String} attribName The name of the attribute variable
 */
function sendAttributeBufferToGLSL(data, dataCount, attribName) {
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  var a_Position = gl.getAttribLocation(gl.program, attribName);
  //var a_Position = gl.getUniformLocation(gl.program, attribName);
  if (a_Position < 0) {
    console.log('Failed to get the storage location of glsl shit ' + attribName);
    return -1;
  }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, dataCount, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);
}

function sendVertexBufferToGLSL(vertexData, dataCount, attribName) {

  var data = [];
  
  for(var i = 0 ; i < vertexData.length; i++) {
    data.push(vertexData[i].points[0]);
    data.push(vertexData[i].points[1]);
    data.push(vertexData[i].points[2]);
  }

  sendAttributeBufferToGLSL(new Float32Array(data), dataCount, attribName);
}

function sendColorVertexBufferToGLSL(vertexData, dataCount, attribName) {

  var data = [];
  for(var i = 0 ; i < vertexData.length; i++) {
    data.push(vertexData[i].color[0]);
    data.push(vertexData[i].color[1]);
    data.push(vertexData[i].color[2]);
    data.push(vertexData[i].color[3]);
  }

  sendAttributeBufferToGLSL(new Float32Array(data), dataCount, attribName);
  //sendUniformVec4ToGLSL(data,u_FragColor);
}
function sendTextureVertexBufferGLSL(vertexData,dataCount,attribName){
  var data = [];
  for(var i = 0 ; i < vertexData.length; i++) {
    data.push(vertexData[i].uv[0]);
    data.push(vertexData[i].uv[1]);
  }

  sendAttributeBufferToGLSL(new Float32Array(data), dataCount, attribName);

}

/**
 * Draws the current buffer loaded. Buffer was loaded by sendAttributeBufferToGLSL.
 *
 * @param {Integer} pointCount The amount of vertices being drawn from the buffer.
 */
function tellGLSLToDrawCurrentBuffer(pointCount) {
  gl.drawArrays(gl.TRIANGLES, 0, pointCount);
}

/**
 * Sends a float value to the specified uniform variable within GLSL shaders.
 * Prints an error message if unsuccessful.
 *
 * @param {float} val The float value being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformFloatToGLSL(val, uniformName) {
  try{
      var canvas = document.getElementById('myCanvas');
      var gl = getWebGLContext(canvas);
      gl.vertexAttrib1f(uniformName, val);
  }
  catch(ie){
    console.log("error in sendUniformFloatToGLSL" + ie);
  }
}

/**
 * Sends an JavaSript array (vector) to the specified uniform variable within
 * GLSL shaders. Array can be of length 2-4.
 *
 * @param {Array} val Array (vector) being passed to uniform variable
 * @param {String} uniformName The name of the uniform variable
 */
function sendUniformVec4ToGLSL(val, uniformName) {
  try{
    var canvas = document.getElementById('myCanvas');
    var gl = getWebGLContext(canvas);
    gl.uniform4f(uniformName, val[0], val[1], val[2], val[3]);
  }
  catch(ie){
    console.log("error in sendUniformVec4ToGLSL" + ie);
  }
}
