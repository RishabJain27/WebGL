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
  }

  /**
   * Renders this Geometry within your webGL scene.
   */
  render() {
    var vert = new Float32Array(this.vertices);
    sendAttributeBufferToGLSL(vert,3,"a_Position");
    sendUniformVec4ToGLSL(this.color,u_FragColor);
    var pointCount = vert.length/3;
    tellGLSLToDrawCurrentBuffer(pointCount);
    // Recommendations: sendUniformVec4ToGLSL(), tellGLSLToDrawCurrentBuffer(),
    // and sendAttributeBufferToGLSL() are going to be useful here.
  }
}
