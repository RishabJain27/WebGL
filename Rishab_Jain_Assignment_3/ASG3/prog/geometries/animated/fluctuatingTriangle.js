/**
 * Specifies a triangle which fluctuates in size (grows and shrinks).
 *
 * @author "Your Name"
 * @this {FluctuatingTriangle}
 */
 // Current rotation angle

class FluctuatingTriangle extends Triangle {
  /**
   * Constructor for FluctuatingTriangle.
   *
   * @constructor
   * @param {Number} size The size of the triangle drawn
   * @param {Number} centerX The center x-position of the triangle
   * @param {Number} centerY The center y-position of the triangle
   */
  constructor(size, centerX, centerY,color) {
    super(size, centerX, centerY,color);
    this.centerX = centerX;
    this.centerY = centerY;
    this.scale = 0.5;   
    this.flag = false;
  }

  /**
   * Updates the animation for FluctuatingTriangle. Grows and shrinks the
   * triangle in size.
   */
  updateAnimation() {
    var rishabMatrix = new Matrix4();
    var tempMatrix = new Matrix4();
    var newMatrix = new Matrix4();
    var temp2Mat = new Matrix4();


    temp2Mat.setTranslate(this.centerX,this.centerY,0);
    tempMatrix = tempMatrix.multiply(temp2Mat);

    newMatrix.setScale(this.scale, this.scale, 0); 
    tempMatrix = tempMatrix.multiply(newMatrix);

    rishabMatrix.setTranslate((-this.centerX),(-this.centerY),0);
    tempMatrix = tempMatrix.multiply(rishabMatrix);   

    super.modelMatrix = tempMatrix;

    if(this.flag == true){
      if(this.scale < 0.5){
        this.flag = false;
      }
      else{
        this.scale = this.scale - 0.01;
      }
    }

    if(this.flag == false){
      if(this.scale > 1.5){
        this.flag = true;
      }
      else{
        this.scale = this.scale + 0.01;   
      }
    }
    
  }

}
