/**
 * Specifies a geometric object.
 *
 * @author "Your Name Here"
 * @this {Geometry}
 */
class Geometry {
  /**
   * Constructor for Geometry.
   *
   * @constructor
   */
  constructor() {
    this.vertices = []; // Vertex objects. Each vertex has x-y-z.
    this.uv = [];
    this.color = [];  // The color of your geometric object
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
    this.shader = null;
    this.light = 2.3;
    this.yLight = 4.0;
    this.flag = false;
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() { 
      
      if(shaderFlag == false){
          useShader(gl, shader);
          u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
          u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
          u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
          //u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
         sendVertexBufferToGLSL(this.vertices, 3, "a_Position");
         sendColorVertexBufferToGLSL(this.vertices, 4, "a_Color");
         sendNormalVertexBufferGLSL(this.vertices, 3, "a_Normal");
     
        sendUniformMatToGLSL(this.modelMatrix,u_ModelMatrix);
        var pointCount = this.vertices.length;
        tellGLSLToDrawCurrentBuffer(pointCount);
        return;
      }
 
        useShader(gl, shader);
        u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');    
        u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
        u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
        u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
        u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
        u_LightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
        u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
      
      // Set the light color (white)
    gl.uniform3f(u_LightColor, 1.0, 1.0, 1.0);
    // Set the light direction (in the world coordinate)
    gl.uniform3f(u_LightPosition, this.light, 4.0, 3.5);
    gl.uniform3f(u_AmbientLight, 0.2, 0.2, 0.2);
      
  var normalMatrix = new Matrix4();
  // Calculate the matrix to transform the normal based on the model matrix
  normalMatrix.setInverseOf(this.modelMatrix);
  normalMatrix.transpose();
  gl.uniformMatrix4fv(u_NormalMatrix, false, normalMatrix.elements);
      
    sendVertexBufferToGLSL(this.vertices, 3, "a_Position");
    sendColorVertexBufferToGLSL(this.vertices, 4, "a_Color");
    sendNormalVertexBufferGLSL(this.vertices, 3, "a_Normal");
 
      
    sendUniformMatToGLSL(this.modelMatrix,u_ModelMatrix);
    var pointCount = this.vertices.length;
    tellGLSLToDrawCurrentBuffer(pointCount);
    if(this.flag == true){
      if(this.light < -2.3){
        this.flag = false;
      }
      else{
        this.light = this.light - 0.5;
      }
    }

    if(this.flag == false){
      if(this.light > 2.3){
        this.flag = true;
      }
      else{
        this.light = this.light + 0.5;   
      }
    }      
    
  }

  /**
   * Responsible for updating the geometry's modelMatrix for animation.
   * Does nothing for non-animating geometry.
   */
  updateAnimation() {
    return;

    // NOTE: This is just in place so you'll be able to call updateAnimation()
    // on geometry that don't animate. No need to change anything.
  }
}
