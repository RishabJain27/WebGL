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
		console.log(uniformName);
		gl.uniform4f(uniformName, val[0], val[1], val[2], val[3]);
	}
	catch(ie){
		console.log("error in sendUniformVec4ToGLSL" + ie);
	}
}
