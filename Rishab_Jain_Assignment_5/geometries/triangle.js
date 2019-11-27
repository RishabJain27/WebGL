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
    /*super.vertices = [centerX,centerY-size,0,
                      centerX+size,centerY+size,0,
                      centerX-size,centerY+size,0
    ];*/

    var c1 = color[0];
    var c2 = color[1];
    var c3 = color[2];
    var c4 = color[3];

    if( c1 == 0){
      var rand = 0;
      var rand1 = 0;
      var rand2 = 0;
    }
    else{
      var rand = Math.random();
      var rand1 = Math.random();
      var rand2 = Math.random();
    }

    if( c2 == 0){
      var rand3 = 0;
      var rand4 = 0;
      var rand5 = 0;
    }
    else{
      var rand3 = Math.random();
      var rand4 = Math.random();
      var rand5 = Math.random();
    }

    if( c3 == 0){
      var rand6 = 0;
      var rand7 = 0;
      var rand8 = 0;
    }
    else{
      var rand6 = Math.random();
      var rand7 = Math.random();
      var rand8 = Math.random();
    }

    if(rainbowButton == "Rainbow"){
      var vertex1 = new Vertex();
      var tempArr1 = [];
      vertex1.points.push(centerX, centerY-size,0);
      vertex1.color.push(rand,rand1,rand2,c4);
      tempArr1.push(vertex1);

      var vertex2 = new Vertex();
      vertex2.points.push(centerX+size,centerY+size,0);
      vertex2.color.push(rand3,rand4,rand5,c4);
      tempArr1.push(vertex2);

      //super.vertices.push(vertex2);

      var vertex3 = new Vertex();
      vertex3.points.push(centerX-size,centerY+size,0);
      vertex3.color.push(rand6,rand7,rand8,c4);
      tempArr1.push(vertex3);

      super.vertices = tempArr1;

    }
    else{
      var vertex1 = new Vertex();
      var tempArr1 = [];
      vertex1.points.push(centerX, centerY-size,0);
      vertex1.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex1);

      var vertex2 = new Vertex();
      vertex2.points.push(centerX+size,centerY+size,0);
      vertex2.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex2);

      //super.vertices.push(vertex2);

      var vertex3 = new Vertex();
      vertex3.points.push(centerX-size,centerY+size,0);
      vertex3.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex3);

      super.vertices = tempArr1;
    }
  }
}
