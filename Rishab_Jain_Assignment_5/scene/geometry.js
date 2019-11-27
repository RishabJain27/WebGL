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
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    //var shader = createShader(gl, ASSIGN4_VSHADER, ASSIGN4_FSHADER);
    //useShader(gl, shader);
    //var u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
    sendVertexBufferToGLSL(this.vertices, 3, "a_Position");
    sendColorVertexBufferToGLSL(this.vertices, 4, "a_Color");
   // sendUniformVec4ToGLSL(this.color,u_FragColor);
    sendUniformMatToGLSL(this.modelMatrix,u_ModelMatrix);
    var pointCount = this.vertices.length;
    //var pointCount = vert.length/3;
    tellGLSLToDrawCurrentBuffer(pointCount);
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
