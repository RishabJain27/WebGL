/**
 * Specifies a tilted cube which rotates.
 *
 * @author "Your Name"
 * @this {TiltedCube}
 */
class TiltedCube extends Geometry {
  /**
   * Constructor for TiltedCube.
   *
   * @constructor
   * @returns {TiltedCube} Geometric object created
   */
  constructor(size, centerX, centerY,color) {
    super();
    this.size = size;
    this.centerX = centerX;
    this.centerY = centerY;
    this.color = color;
    this.generateCubeVertices();


    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that vars us see that it's a cube.
  }

  /**
   * Generates the vertices of TiltedCube. Just a regular cube.
   *
   * @private
   */
  generateCubeVertices() {

    var c1 = this.color[0];
    var c2 = this.color[1];
    var c3 = this.color[2];
    var c4 = this.color[3];

    //13-24
    var vertex13 = new Vertex();
    var vertex14 = new Vertex();
    var vertex15 = new Vertex();
    var vertex16 = new Vertex();
    var vertex17 = new Vertex();
    var vertex18 = new Vertex();
    var vertex19 = new Vertex();
    var vertex20 = new Vertex();
    var vertex21 = new Vertex();
    var vertex22 = new Vertex();
    var vertex23 = new Vertex();
    var vertex24 = new Vertex();
    var vertex1 = new Vertex();
    var vertex2 = new Vertex();
    var vertex3 = new Vertex();
    var vertex4 = new Vertex();
    var vertex5 = new Vertex();
    var vertex6 = new Vertex();
    var vertex7 = new Vertex();
    var vertex8 = new Vertex();
    var vertex9 = new Vertex();
    var vertex10 = new Vertex();
    var vertex11 = new Vertex();
    var vertex12 = new Vertex();
    var vertex25 = new Vertex();
    var vertex26 = new Vertex();
    var vertex27 = new Vertex(); 
    var vertex28 = new Vertex();
    var vertex29 = new Vertex();
    var vertex30 = new Vertex();
    var vertex31 = new Vertex();
    var vertex32 = new Vertex();
    var vertex33 = new Vertex(); 
    var vertex34 = new Vertex();
    var vertex35 = new Vertex();
    var vertex36 = new Vertex();
  
    vertex1.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX+this.size);
    vertex1.color.push(c1,c2,c3,c4);
    vertex2.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX+this.size);
    vertex2.color.push(c1,c2,c3,c4);
    vertex3.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX+this.size);
    vertex3.color.push(c1,c2,c3,c4);
    vertex4.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX+this.size);
    vertex4.color.push(c1,c2,c3,c4);
    vertex5.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX+this.size);
    vertex5.color.push(c1,c2,c3,c4);
    vertex6.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX+this.size);
    vertex6.color.push(c1,c2,c3,c4);
    vertex7.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
    vertex7.color.push(c1,c2,c3,c4);
    vertex8.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX-this.size);
    vertex8.color.push(c1,c2,c3,c4);
    vertex9.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
    vertex9.color.push(c1,c2,c3,c4);
    vertex10.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
    vertex10.color.push(c1,c2,c3,c4);
    vertex11.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX-this.size);
    vertex11.color.push(c1,c2,c3,c4);
    vertex12.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
    vertex12.color.push(c1,c2,c3,c4);
  
    this.vertices.push(vertex1);
    this.vertices.push(vertex2);
    this.vertices.push(vertex3);
    this.vertices.push(vertex4);
    this.vertices.push(vertex5);
    this.vertices.push(vertex6);
    this.vertices.push(vertex7);
    this.vertices.push(vertex8);
    this.vertices.push(vertex9);
    this.vertices.push(vertex10);
    this.vertices.push(vertex11);
    this.vertices.push(vertex12);

    vertex13.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX+this.size);
    vertex13.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex13);

    vertex14.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX+this.size);
    vertex14.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex14);

    vertex15.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
    vertex15.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex15);

    vertex16.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
    vertex16.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex16);

    vertex17.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX-this.size);
    vertex17.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex17);

    vertex18.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX+this.size);
    vertex18.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex18);

    vertex19.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
    vertex19.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex19);

    vertex20.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX-this.size);
    vertex20.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex20);

    vertex21.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX+this.size);
    vertex21.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex21);

    vertex22.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX+this.size);
    vertex22.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex22);

    vertex23.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX+this.size);
    vertex23.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex23);

    vertex24.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
    vertex24.color.push(c1,c2,c3,c4);
    this.vertices.push(vertex24);

    vertex25.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
    vertex25.color.push(c1,c2,c3,c4);
this.vertices.push(vertex25);

vertex26.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX+this.size);
vertex26.color.push(c1,c2,c3,c4);
this.vertices.push(vertex26);
      
vertex27.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX+this.size);
vertex27.color.push(c1,c2,c3,c4);
this.vertices.push(vertex27);
  
vertex28.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX+this.size);
vertex28.color.push(c1,c2,c3,c4);
this.vertices.push(vertex28);

vertex29.points.push(this.centerX-this.size, this.centerY+this.size, this.centerX-this.size);
vertex29.color.push(c1,c2,c3,c4);
this.vertices.push(vertex29);
      
vertex30.points.push(this.centerX+this.size, this.centerY+this.size, this.centerX-this.size);
vertex30.color.push(c1,c2,c3,c4);
this.vertices.push(vertex30);
      
vertex31.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX+this.size);
vertex31.color.push(c1,c2,c3,c4);
this.vertices.push(vertex31);

vertex32.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX-this.size);
vertex32.color.push(c1,c2,c3,c4);
this.vertices.push(vertex32);
      
vertex33.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
vertex33.color.push(c1,c2,c3,c4);
this.vertices.push(vertex33);
  
vertex34.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX-this.size);
vertex34.color.push(c1,c2,c3,c4);
this.vertices.push(vertex34);

vertex35.points.push(this.centerX-this.size, this.centerY-this.size, this.centerX+this.size);
vertex35.color.push(c1,c2,c3,c4);
this.vertices.push(vertex35);
      
vertex36.points.push(this.centerX+this.size, this.centerY-this.size, this.centerX+this.size );
vertex36.color.push(c1,c2,c3,c4);
this.vertices.push(vertex36);


  }



  
}
