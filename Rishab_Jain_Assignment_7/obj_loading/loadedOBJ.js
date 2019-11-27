/**
 * Specifies the geometry contained within an OBJ file. A subclass of Geometry.
 * NOTE: The geometry is transformed to display correctly using its modelMatrix.
 *
 * @author Alfredo Rivero
 * @this {LoadedOBJ}
 */
class LoadedOBJ extends Geometry {
  /**
   * Constructor for LoadedOBJ
   *
   * @constructor
   * @param {String} objStr An OBJ file in string form
   * @returns {LoadedOBJ} Constructed LoadedOBJ
   */
  constructor(objStr,color,yVal) {
    super();
    this.yVal = yVal;
    // Construct the Mesh object containg the OBJ file's information
    var objMesh = new OBJ.Mesh(objStr);

    this.c1 = color[0];
    this.c2 = color[1];
    this.c3 = color[2];
    this.c4 = color[3];

    // Construct the necessary amount of vertex objects within this.vertices
    for (var i = 0; i < objMesh.indices.length; i++) {
      this.vertices[i] = new Vertex();
      this.vertices[i].color.push(this.c1,this.c2,this.c3,this.c4);
    }

    // Add the vertex points, normals, and uv coordinates in OBJ
    var transAndScaleVal = this.addVertexPoints(objMesh.indices, objMesh.vertices);
    this.addVertexNormals(objMesh.indices, objMesh.vertexNormals);
    this.addVertexTextureCoordinates(objMesh.indices, objMesh.textures);

    // Modify loadedOBJ's modelMatrix to present OBJ correctly
    this.moveOBJToCenterOfScreen(transAndScaleVal[0]);
    this.scaleOBJToFitOnScreen(transAndScaleVal[1]);

    //super.color = color;
    this.angle = 0;
  }

  /**
   * Adds the point information to the vertices of LoadedOBJ. Also keeps
   * track of the largest x-y-z coordinate absolute value and the center of
   * the LoadedOBJ. Does so for displaying geometry correctly. Uses indices to
   * put points in the correct order.
   *
   * @private
   * @param {Array} indices The indices of the loadedOBJ
   * @param {Array} points The points being added
   * @returns {Array} centerPoint at index 0, necessary scale at index 1
   */
  addVertexPoints(indices, points) {
    var vertexHasNotBeenEncountered = new Array(points.length / 3);
    vertexHasNotBeenEncountered.fill(true);

    var largestCoordinateValue = 1.0;
    var centerPoint = [0.0, 0.0, 0.0];

    for (var i = 0; i < indices.length; i++) {
      var index = indices[i];
      var xyz = [points[index * 3], points[index * 3 + 1], points[index * 3 + 2]];

      if (vertexHasNotBeenEncountered[index]) {
        // Compare xyz to largestCoordinateValue
        for (var j = 0; j < 3; j++) {
          if (Math.abs(xyz[j]) > largestCoordinateValue) {
            largestCoordinateValue = Math.abs(xyz[j]);
          }
        }

        // Continue computing the centerPoint of LoadedOBJ
        centerPoint[0] += xyz[0];
        centerPoint[1] += xyz[1];
        centerPoint[2] += xyz[2];

        vertexHasNotBeenEncountered[index] = false;
      }

      this.vertices[i].points = xyz;
      
    }

    centerPoint[0] /= -(points.length / 3);
    centerPoint[1] /= -(points.length / 3);
    centerPoint[2] /= -(points.length / 3);

    return [centerPoint, 1 / largestCoordinateValue];
  }

  /**
   * Adds the normals information to LoadedOBJ's vertices. Uses indices to
   * add normals in the correct order.
   *
   * @private
   * @param {Array} indices The indices of the loadedOBJ
   * @param {Array} normals The normals being added
   */
  addVertexNormals(indices, normals) {
    // If normals information is invalid, set all normals to just null
    if (this.isInvalidParameter(normals)) {
      for (var i = 0; i < indices.length; i++) {
        this.vertices[i].normal = null;
      }
    }
    else {
      for (var i = 0; i < indices.length; i++) {
        var index = indices[i];
        var xyz = [normals[index * 3], normals[index * 3 + 1], normals[index * 3 + 2]];

        this.vertices[i].normal = new Vector3(xyz);

      }
    }
  }

  /**
   * Adds the texture information to LoadedOBJ's vertices. Uses indices to
   * add texture coordinates in the correct order.
   *
   * @private
   * @param {Array} indices The indices of the loadedOBJ's vertices
   * @param {Array} textures The textures being added
   */
  addVertexTextureCoordinates(indices, textures) {
    // If textures information is invalid, set vertex.uv to null for all vertices.
    if (this.isInvalidParameter(textures)) {
      for (var i = 0; i < indices.length; i++) {
        this.vertices[i].uv = null;
      }
    }
    else {
      for (var i = 0; i < indices.length; i++) {
        var index = indices[i];
        var uv = [textures[index * 2], textures[index * 2 + 1]];

        this.vertices[i].uv = uv;
      }
    }
  }

  /**
   * Determines if a parameter (points, normals, textures) is invalid.
   *
   * @private
   */
  isInvalidParameter(parameter) {
    if (parameter == null) {
      return true;
    }
    if (parameter == []) {
      return true;
    }
    if (isNaN(parameter[0])) {  // Can be array of just NaN
      return true;
    }

    return false;
  }

  /**
   * Modifes the LoadedOBJ's modelMatrix to move the LoadedOBJ to the
   * center of the canvas.
   *
   * @private
   * @param {Array} transValue An array containing translation value for x, y, z
   * axis (indices: 0, 1, 2)
   */
  moveOBJToCenterOfScreen(transValue) {
    this.modelMatrix.setTranslate(transValue[0], this.yVal, transValue[2]);
  }

  /**
   * Modifies the LoadedOBJ's modelMatrix to scale the LoadedOBJ to fit
   * within the canvas. Assumes moveOBJToCenterOfScreen() has been called
   * beforehand and modelMatrix is defined.
   *
   * @private
   * @param {Number} scaleValue Amount LoadedOBJ will be scaled by
   */
  scaleOBJToFitOnScreen(scaleValue) {
    var scaleMatrix = new Matrix4();
      
    scaleMatrix.setScale(scaleValue/10, scaleValue/10, scaleValue/10);
    this.modelMatrix = scaleMatrix.multiply(this.modelMatrix);
    
    //translateMatrix.setTranslate(-0.3,0,0);
    //this.modelMatrix = translateMatrix.multiply(this.modelMatrix);
  }

    updateAnimation() {
    var newMatrix = new Matrix4();
        
    newMatrix.setRotate(this.angle, 0, 1, 0);
    this.modelMatrix = newMatrix.multiply(this.modelMatrix); 
        
    this.angle = ((this.angle/100) + 1.0) % 360;

  }

 render(){
          
        useShader(gl, shader);
    
        u_Clicked = gl.getUniformLocation(gl.program, 'u_Clicked');
        u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');    
        u_ProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
        u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
        u_NormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
        u_LightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
        u_LightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
        u_AmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
      
      // Set the light color (white)
    gl.uniform3f(u_LightColor, 1.0, 1.0, 1.0);
    // Set the light direction (in the world coordinate)
    gl.uniform3f(u_LightPosition, this.light, 4.0, 3.5);
    gl.uniform3f(u_AmbientLight, 0.2, 0.2, 0.2);
      
  var normalMatrix = new Matrix4();
  // Calculate the matrix to transform the normal based on the model matrix
  normalMatrix.setInverseOf(this.modelMatrix);
  normalMatrix.transpose();
  gl.uniformMatrix4fv(u_NormalMatrix, false, normalMatrix.elements);
      
    sendVertexBufferToGLSL(this.vertices, 3, "a_Position");
    sendColorVertexBufferToGLSL(this.vertices, 4, "a_Color");
    sendNormalVertexBufferGLSL(this.vertices, 3, "a_Normal");
      if(clickFlag == true){
          gl.uniform1i(u_Clicked, 1);
          //clickFlag = false;
      }
      else{
          gl.uniform1i(u_Clicked, 0);
      }

 
      
    sendUniformMatToGLSL(this.modelMatrix,u_ModelMatrix);
    var pointCount = this.vertices.length;
    tellGLSLToDrawCurrentBuffer(pointCount);
    

   
  
}

}
