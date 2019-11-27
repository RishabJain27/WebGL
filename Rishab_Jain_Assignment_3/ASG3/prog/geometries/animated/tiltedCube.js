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
    this.angle = 0;
    this.generateCubeVertices();


    // Recommendations: Might want to tilt your cube at 30 degrees relative to
    // the z-axis here. Pretty good tilt that lets us see that it's a cube.
  }

  /**
   * Generates the vertices of TiltedCube. Just a regular cube.
   *
   * @private
   */
  generateCubeVertices() {
    super.vertices = [ this.centerX+this.size, this.centerY+this.size, this.centerX+this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX+this.size,
                       this.centerX-this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX+this.size,
                       this.centerX+this.size, this.centerY+this.size, this.centerX+this.size,

                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size,
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size,

                       this.centerX-this.size, this.centerY+this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size,
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX+this.size,

                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX+this.size,
                       this.centerX+this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX+this.size, this.centerY+this.size, this.centerX+this.size, 
                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size,

                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY+this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX+this.size,
                       this.centerX-this.size, this.centerY+this.size, this.centerX+this.size, 
                       this.centerX-this.size, this.centerY+this.size, this.centerX-this.size, 
                       this.centerX+this.size, this.centerY+this.size, this.centerX-this.size, 

                       this.centerX+this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size,
                       this.centerX-this.size, this.centerY-this.size, this.centerX-this.size, 
                       this.centerX-this.size, this.centerY-this.size, this.centerX+this.size, 
                       this.centerX+this.size, this.centerY-this.size, this.centerX+this.size ];
    super.color = this.color;

    // Recommendations: Might want to generate your cube vertices so that their
    // x-y-z values are combinations of 1.0 and -1.0. Allows you to scale the
    // the cube to your liking better.
  }

  /**
   * Updates the animation of the TiltedCube. Should make it rotate.
   */
  updateAnimation() {
    var tempMatrix = new Matrix4();
    var rishabMatrix = new Matrix4();
    var temp2Mat = new Matrix4();
    var newMatrixTwo = new Matrix4();
    var newMatrix = new Matrix4();


    temp2Mat.setTranslate(this.centerX,this.centerY,this.centerX);
    tempMatrix = tempMatrix.multiply(temp2Mat);

    newMatrixTwo.setRotate(this.angle,0,1,0);
    tempMatrix = tempMatrix.multiply(newMatrixTwo);

    newMatrix.setRotate(30, 1, 0, 0); 
    tempMatrix = tempMatrix.multiply(newMatrix);

    rishabMatrix.setTranslate((-this.centerX),(-this.centerY),-this.centerX);
    tempMatrix = tempMatrix.multiply(rishabMatrix);

    super.modelMatrix = tempMatrix;
    this.angle = ((this.angle + 2.0) % 360);
    
  }

  
}
