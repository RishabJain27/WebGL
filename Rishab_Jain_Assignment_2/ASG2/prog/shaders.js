
// Basic Vertex Shader that receives position and size for each vertex (point).
var ASSIGN2_VSHADER =
  'attribute vec4 a_Position;\n' +
  'attribute float a_PointSize;\n'+
  'void main() {\n' +
  '  gl_Position = a_Position;\n' +
  '  gl_PointSize = a_PointSize;\n' +
  '}\n';;

 
// Basic Fragment Shader that receives a single one color (point).
var ASSIGN2_FSHADER =
	'precision mediump float;\n' +
	'uniform vec4 u_FragColor;\n' +
	'void main() {\n' +
	'gl_FragColor = u_FragColor;\n' +
  '}\n';;
