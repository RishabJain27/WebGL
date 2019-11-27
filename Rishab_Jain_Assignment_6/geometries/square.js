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
    this.generateSquareVertices(size,centerX,centerY);
  }
generateSquareVertices(size, centerX, centerY) {
    var squareVertex1 = new Vertex();
    squareVertex1.points.push(centerX - size, centerY, centerX + size);
      squareVertex1.color.push(0.0, 1.0, 0.0, 1);
      squareVertex1.normal = (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex1);
    var squareVertex2 = new Vertex();
    squareVertex2.points.push(centerX - size, centerY, centerX - size);
      squareVertex2.color.push(0.0, 1.0, 0.0, 1);
      squareVertex2.normal = (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex2);
    var squareVertex3 = new Vertex();
    squareVertex3.points.push(centerX + size, centerY, centerX + size);
      squareVertex3.color.push(0.0, 1.0, 0.0, 1);
      squareVertex3.normal = (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex3);
    var squareVertex4 = new Vertex();
    squareVertex4.points.push(centerX - size, centerY, centerX - size);
      squareVertex4.color.push(0.0, 1.0, 0.0, 1);
      squareVertex4.normal = (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex4);
    var squareVertex5 = new Vertex();
    squareVertex5.points.push(centerX + size, centerY, centerX + size);
      squareVertex5.color.push(0.0, 1.0, 0.0, 1);
      squareVertex5.normal = (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex5);
    var squareVertex6 = new Vertex();
      squareVertex6.points.push(centerX + size, centerY, centerX - size);
      squareVertex6.color.push(0.0, 1.0, 0.0, 1);
      squareVertex6.normal= (new Vector3([0, 1, 0]));
    this.vertices.push(squareVertex6);
      
    //console.log(squareVertex1, squareVertex2, squareVertex3);

    // Recommendations: Might want to call this within your Square constructor.
    // Keeps your code clean 🙂
  }

}
