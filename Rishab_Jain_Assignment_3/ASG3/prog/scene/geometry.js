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
    this.color = [];  // The color of your geometric object
    this.modelMatrix = new Matrix4(); // Model matrix applied to geometric object
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    var vert = new Float32Array(this.vertices);
    sendAttributeBufferToGLSL(vert,3,"a_Position");
    sendUniformVec4ToGLSL(this.color,u_FragColor);
    sendUniformMatToGLSL(this.modelMatrix,u_ModelMatrix);
    var pointCount = vert.length/3;
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
