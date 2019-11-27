/**
 * Specifies a Square. A subclass of Geometry.
 *
 * @author "Your Name Here"
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  constructor(size, centerX, centerY,color) {
    super();
    this.generateSquareVertices(size,centerX,centerY,color);
    // Recommendations: Remember that Square is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the square.
   *
   * @private
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   */
  generateSquareVertices(size, centerX, centerY,color) {
    super.vertices = [centerX-size,centerY+size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY-size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY-size,0,
                      centerX+size,centerY-size,0
    ];

    super.color = color;
  }
}
