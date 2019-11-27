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

    var c1 = color[0];
    var c2 = color[1];
    var c3 = color[2];
    var c4 = color[3];

    if(rainbowButton == "Rainbow"){
    var tempArr1 = [];

    for(var i = angle; i < 2*Math.PI; i += angle){

      if(flag){
          var vertex1 = new Vertex();
          vertex1.points.push(centerX, centerY,0);
          vertex1.color.push(Math.random(),Math.random(),Math.random(),c4);
          tempArr1.push(vertex1);

          var vertex2 = new Vertex();
          vertex2.points.push(centerX+radius*Math.cos(0), centerY+radius*Math.sin(0),0);
          vertex2.color.push(Math.random(),Math.random(),Math.random(),c4);
          tempArr1.push(vertex2);

          flag = false;
      }

      var vertex3 = new Vertex();
      vertex3.points.push(centerX + radius*Math.cos(i), centerY+radius*Math.sin(i),0);
      vertex3.color.push(Math.random(),Math.random(),Math.random(),c4);
      tempArr1.push(vertex3);


      var vertex4 = new Vertex();
      vertex4.points.push(centerX, centerY,0);
      vertex4.color.push(Math.random(),Math.random(),Math.random(),c4);
      tempArr1.push(vertex4);


      var vertex5 = new Vertex();
      vertex5.points.push(centerX + radius*Math.cos(i), centerY+radius*Math.sin(i),0);
      vertex5.color.push(Math.random(),Math.random(),Math.random(),c4);
      tempArr1.push(vertex5);

    }

    var vertex6 = new Vertex();
    vertex6.points.push(centerX + radius*Math.cos(2*Math.PI), centerY + radius*Math.sin(2*Math.PI) ,0);
    vertex6.color.push(Math.random(),Math.random(),Math.random(),c4);
    tempArr1.push(vertex6);

    super.vertices = tempArr1; 

    }
    else{
    var tempArr1 = [];

    for(var i = angle; i < 2*Math.PI; i += angle){

      if(flag){
          var vertex1 = new Vertex();
          vertex1.points.push(centerX, centerY,0);
          vertex1.color.push(c1,c2,c3,c4);
          tempArr1.push(vertex1);

          var vertex2 = new Vertex();
          vertex2.points.push(centerX+radius*Math.cos(0), centerY+radius*Math.sin(0),0);
          vertex2.color.push(c1,c2,c3,c4);
          tempArr1.push(vertex2);

          flag = false;
      }

      var vertex3 = new Vertex();
      vertex3.points.push(centerX + radius*Math.cos(i), centerY+radius*Math.sin(i),0);
      vertex3.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex3);


      var vertex4 = new Vertex();
      vertex4.points.push(centerX, centerY,0);
      vertex4.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex4);


      var vertex5 = new Vertex();
      vertex5.points.push(centerX + radius*Math.cos(i), centerY+radius*Math.sin(i),0);
      vertex5.color.push(c1,c2,c3,c4);
      tempArr1.push(vertex5);

    }

    var vertex6 = new Vertex();
    vertex6.points.push(centerX + radius*Math.cos(2*Math.PI), centerY + radius*Math.sin(2*Math.PI) ,0);
    vertex6.color.push(c1,c2,c3,c4);
    tempArr1.push(vertex6);

    super.vertices = tempArr1;      

    }


  }
}
