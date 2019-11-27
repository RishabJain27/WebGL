var ASSIGN4_VSHADER =
 `  attribute vec4 a_Position;
    attribute float a_PointSize; 
    attribute vec4 a_Color;
    uniform mat4 u_ViewMatrix;
    uniform mat4 u_ProjMatrix;
    uniform mat4 u_ModelMatrix;
    varying vec4 v_Color;
    void main() {
        gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
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