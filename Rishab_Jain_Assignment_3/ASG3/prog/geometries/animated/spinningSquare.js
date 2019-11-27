/**
 * Specifies a square which spins realtive to its center.
 *
 * @author "Your Name"
 * @this {SpinningSquare}
 */
class SpinningSquare extends Square {
  /**
   * Constructor for SpinningSquare.
   *
   * @constructor
   * @param {Number} size The size of the square drawn
   * @param {Number} centerX The center x-position of the square
   * @param {Number} centerY The center y-position of the square
   * @returns {SpinningSquare} SpinningSquare object created
   */
  constructor(size, centerX, centerY,color) {
    super(size, centerX, centerY,color);
    this.centerX = centerX;
    this.centerY = centerY;
    this.angle = 0;
    // Recomendations: You're going to need a few variables to keep track of
    // information relevant to your animation. For example, a square is going
    // to need a variable to keep track of its centerX and centerY position.
  }

  /**
   * Updates the animation for spinning square. Rotates the square by spinAngle
   * relative to its center.
   */
  updateAnimation() {
    var rishabMatrix = new Matrix4();
    var tempMatrix = new Matrix4();
    var newMatrix = new Matrix4();
    var temp2Mat = new Matrix4();


    temp2Mat.setTranslate(this.centerX,this.centerY,0);
    tempMatrix = tempMatrix.multiply(temp2Mat);

    newMatrix.setRotate(this.angle, 0, 0, 1); 
    tempMatrix = tempMatrix.multiply(newMatrix);

    rishabMatrix.setTranslate((-this.centerX),(-this.centerY),0);
    tempMatrix = tempMatrix.multiply(rishabMatrix);   

    super.modelMatrix = tempMatrix;
    this.angle = ((this.angle + 2.0) % 360);
  }
}
