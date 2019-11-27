/**
 * Specifies a circle which moves randomly.
 *
 * @author "Your Name"
 * @this {RandomCircle}
 */
class RandomCircle extends Circle {
  /**
   * Constructor for RandomCircle.
   *
   * @constructor
   * @param {Number} radius The radius of the random circle being constructed
   * @param {Integer} segements The number of segments composing the circle
   * @param {Number} centerX The x-position of the circle being constructed
   * @param {Number} centerY The y-position of the circle being constructed
   * @returns {RandomCircle} RandomCircle object created
   */
  constructor(radius, segments, centerX, centerY,color) {
    super(radius, segments, centerX, centerY,color);
    this.centerX = centerX;
    this.centerY = centerY;
    this.xFlag = false;
    this.yFlag = false;
    this.radius = radius;
    this.randomVal = Math.random()/100;

  }

  updateAnimation() {
    var matrix1 = new Matrix4();
    var matrix2 = new Matrix4();
    
    matrix1.setTranslate(this.centerX,this.centerY, 0.0);
    //matrix2 = matrix2.multiply(matrix1);
          
    super.modelMatrix = matrix1;
      
     if(this.xFlag == true){
        this.centerX = this.centerX + this.randomVal;   
        if(this.centerX + this.radius >= 0.5){
            this.centerX = 0.5;
            this.xFlag= false;
        }
        else{

        }
    }
    else{
        this.centerX = this.centerX - this.randomVal;   
        if(this.centerX + this.radius <= -0.5){
            this.centerX = -0.5;
            this.xFlag = true;
        }
    }
      
    if(this.yFlag == true){
        this.centerY = this.centerY + this.randomVal;   
        if(this.centerY + this.radius >= 0.5){
            this.centerY = 0.5;
            this.yFlag= false;
        }
        else{

        }
    }
    else{
        this.centerY = this.centerY - this.randomVal;   
        if(this.centerY + this.radius <= -0.5){
            this.centerY = -0.5;
            this.yFlag = true;
        }
        else{

        }
    }

  }

}
