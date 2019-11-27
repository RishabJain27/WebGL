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
    /*super.vertices = [centerX-size,centerY+size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY-size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY-size,0,
                      centerX+size,centerY-size,0
    ];*/

    var c1 = color[0];
    var c2 = color[1];
    var c3 = color[2];
    var c4 = color[3];


      var tempArr1 = [];

      var vertex1 = new Vertex();
      vertex1.points.push(centerX-size,centerY,centerX+size);
      vertex1.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex1);

      var vertex2 = new Vertex();
      vertex2.points.push(centerX+size,centerY,centerX+size);
      vertex2.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex2);

      var vertex3 = new Vertex();
      vertex3.points.push(centerX-size,centerY,centerX-size);
      vertex3.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex3);

      var vertex4 = new Vertex();
      vertex4.points.push(centerX+size,centerY,centerX+size);
      vertex4.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex4);

      var vertex5 = new Vertex();
      vertex5.points.push(centerX-size,centerY,centerX-size);
      vertex5.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex5);

      var vertex6 = new Vertex();
      vertex6.points.push(centerX+size,centerY,centerX-size);
      vertex6.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex6);

      super.vertices = tempArr1;

  }
}
