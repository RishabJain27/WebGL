/**
 * Specifies a Circle. A subclass of Geometry.
 *
 * @author "Your Name Here"
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Circle.
   *
   * @constructor
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  constructor(radius, segments, centerX, centerY,color) {
    super();
    this.generateCircleVertices(radius,segments,centerX,centerY,color);

    // Recommendations: Remember that Circle is a subclass of Geometry.
    // "super" keyword can come in handy when minimizing code reuse.
  }

  /**
   * Generates the vertices of the Circle.
   *
   * @private
   * @param {Number} radius The radius of the circle being constructed
   * @param {Integer} segments The number of segments composing the circle
   * @param {Number} centerX The central x-position of the circle
   * @param {Number} centerY The central y-position of the circle
   */
  generateCircleVertices(radius, segments, centerX, centerY,color) {
    //(3)
    var angle = (2*Math.PI)/segments;
    var vert3 = [];
    var vert2 = [];
    var vert1 = [];
    var flag = true;

    //vert1.push(centerX);vert1.push(centerY);vert1.push(0);
    //vert1.push(centerX+radius*Math.cos(0));vert1.push(centerY+radius*Math.sin(0));vert1.push(0);

    for(var i = angle; i < 2*Math.PI; i += angle){

      if(flag){
        vert1.push(centerX);vert1.push(centerY);vert1.push(0);
        vert1.push(centerX+radius*Math.cos(0));vert1.push(centerY+radius*Math.sin(0));vert1.push(0);
        flag = false;
      }

      vert1.push(centerX + radius*Math.cos(i));vert1.push(centerY+radius*Math.sin(i));vert1.push(0);
      vert1.push(centerX);vert1.push(centerY);vert1.push(0);
      vert1.push(centerX + radius*Math.cos(i));vert1.push(centerY+radius*Math.sin(i));vert1.push(0);

    }

    vert1.push(centerX + radius*Math.cos(2*Math.PI));vert1.push(centerY + radius*Math.sin(2*Math.PI));vert1.push(0);
    
     console.log("vert2: " + vert1);
     vert3  = vert3.concat(vert1);
     super.vertices = vert3;
     super.color = color;
  }
}
