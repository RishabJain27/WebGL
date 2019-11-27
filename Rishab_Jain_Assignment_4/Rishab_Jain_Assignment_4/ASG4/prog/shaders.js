// Basic Vertex Shader that receives position and size for each vertex (point).
/*
var ASSIGN2_VSHADER =
  'attribute vec4 a_Position;\n' +
  'attribute float a_PointSize;\n'+
  'uniform mat4 u_ModelMatrix;\n' +
  'void main() {\n' +
  '  gl_Position = u_ModelMatrix * a_Position;\n' +
  '  gl_PointSize = a_PointSize;\n' +
  '}\n';;

 
// Basic Fragment Shader that receives a single one color (point).
var ASSIGN2_FSHADER =
  'precision mediump float;\n' +
  'uniform vec4 u_FragColor;\n' +
  'void main() {\n' +
  'gl_FragColor = u_FragColor;\n' +
  '}\n';;

*/

  var VSHADER_SOURCE =
  'attribute vec4 a_Position;\n' +
  'attribute float a_PointSize;\n' +
  'attribute vec2 a_TexCoord;\n' +
  'uniform mat4 u_ModelMatrix;\n' +
  'varying vec2 v_TexCoord;\n' +
  'void main() {\n' +
  ' gl_Position = u_ModelMatrix * a_Position;\n' +
  ' v_TexCoord = a_TexCoord;\n' +
  '}\n';
 
 // Fragment shader program <- (Part2)
  var FSHADER_SOURCE =
  'precision mediump float;\n' +
  'uniform sampler2D u_Sampler;\n' +
  'varying vec2 v_TexCoord;\n' +
  'void main() {\n' +
  ' gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n' +
  '}\n';



var ASSIGN4_VSHADER =
 `  attribute vec4 a_Position;
    attribute float a_PointSize; 
    attribute vec4 a_Color;
    uniform mat4 u_ModelMatrix;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_ModelMatrix * a_Position;
        gl_PointSize = a_PointSize;
        v_Color = a_Color;
    } ` ;

// Basic Fragment Shader that receives a single one color (point).
var ASSIGN4_FSHADER = 
 `  precision mediump float;
    varying vec4 v_Color;
    void main() {
        gl_FragColor = v_Color;
    } `;