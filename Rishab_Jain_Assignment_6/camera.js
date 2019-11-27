class Camera {
  /**
   * Constructor for Camera.
   *
   * @constructor
   * @returns {Camera} Camera object created
   */
  constructor(pos, center, up, fov, ar, near, far) {
     this.pos = new Vector3(pos);
     this.center = new Vector3(center);
     this.up = new Vector3(up);

     this.fov = fov;
     this.aspect_ratio = ar;
     this.near = near;
     this.far = far;

     this.viewMatrix = new Matrix4();
     this.projMatrix = new Matrix4();
  }

  move(speed, dir) {
      // Normalizing center vector
      var move = new Vector3(this.center.elements);
      move.normalize();
       
      
      this.pos.elements[0] += move.elements[0] * speed * dir;
      this.pos.elements[1] += move.elements[1] * speed * dir;
      this.pos.elements[2] += move.elements[2] * speed * dir;
      
     
  }
    
  pan(speed, dir) {
   //  var panPosition = new Vector3(this.position.elements);
     // var panCenter = new Vector3(this.center.elements);
   //   panPosition.normalize();
    //  panCenter.normalize();
      
      this.pos.elements[0] += speed * dir;
      //this.pos.elements[1] += panCenter.elements[1] * speed * dir;
      //this.pos.elements[2] += pan
      this.center.elements[0] += speed * dir;
      //this.center.elements[1] += pan
      //this.center.elements[2] += pan
      
  }

  rotate(angle) {
      // Rotate center by the given angle
      var rot = new Matrix4();
      rot.setRotate(angle, 0, 1, 0);
      this.center = rot.multiplyVector3(this.center);
      //this.rotation = angle;
  }
    
  

  update() {

      this.viewMatrix.setLookAt(this.pos.elements[0], this.pos.elements[1], this.pos.elements[2],
                                this.center.elements[0], this.center.elements[1], this.center.elements[2],
                                this.up.elements[0], this.up.elements[1], this.up.elements[2]);

      this.near = document.getElementById('nearSlider').value/1;
      this.far =  document.getElementById('farSlider').value/1;
      
      if(view == "persp"){
          this.projMatrix.setPerspective(this.fov, this.aspect_ratio, this.near, this.far);
      }
      else{
          this.projMatrix.setOrtho(-1.0,1.0,-1.0,1.0,this.near,this.far);
      }
      
  }

}