/**
 * Specifies a Triangle. A subclass of Geometry.
 *
 * @author "Your Name Here"
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY,color) {
    super();
    this.generateTriangleVertices(size,centerX,centerY,color);

    // Recommendations: Remember that Triangle is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the Triangle.
   *
   * @private
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  generateTriangleVertices(size, centerX, centerY,color) {
    super.vertices = [centerX,centerY-size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY+size,0
    ];
    super.color = color;
    //super.vertices.push(centerX);super.vertices.push(centerY-size);super.vertices.push(0);
    //super.vertices.push(centerX+size);super.vertices.push(centerY+size);super.vertices.push(0);
    //super.vertices.push(centerX-size);super.vertices.push(centerY+size);super.vertices.push(0);

  }
}
