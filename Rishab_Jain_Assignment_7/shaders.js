var VSHADER6 =
 'attribute vec4 a_Position;\n' +
 'attribute vec4 a_Color;\n' +
 'attribute vec4 a_Normal;\n' +
 'varying vec4 v_Color;\n' + 
 'varying vec3 v_Normal;\n' +
 'varying vec3 v_Position;\n' +
 'attribute float a_PointSize;\n' +
 'uniform mat4 u_ViewMatrix;\n' +   
 'uniform mat4 u_ModelMatrix;\n' +
 'uniform mat4 u_ProjMatrix;\n' +
 'uniform mat4 u_NormalMatrix;\n' + 
 'uniform bool u_Clicked;\n' + 
 'void main() {\n' +
 ' gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;\n' + // Coordinates
 ' gl_PointSize =  a_PointSize;\n' + // Set the point size
 ' v_Position = vec3(u_ModelMatrix *    a_Position);\n' +
 ' v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));\n' +
  '  if (u_Clicked) {\n' + 
  '    v_Color = vec4(1.0, 0.0, 0.0, 1.0);\n' +
  '  } else {\n' +
  '    v_Color = a_Color;\n' + 
  '  }\n' +
 '}\n';

var FSHADER6 =  
  'precision mediump float;\n' +
  'uniform vec3 u_LightColor;\n' +     // Light color
  'uniform vec3 u_LightPosition;\n' +  // Position of the light source
  'uniform vec3 u_AmbientLight;\n' +   // Ambient light color
  'varying vec4 v_Color;\n' +  // uniform変数
  'varying vec3 v_Normal;\n' +
  'varying vec3 v_Position;\n' +
  'void main() {\n' +
  '  vec3 normal = normalize(v_Normal);\n' +
  '  vec3 position = normalize(v_Position);\n' +
  
  '  vec3 lightDirection = normalize(u_LightPosition);\n' +
  '  vec3 reflectVec = reflect(-lightDirection, normal);\n' +
  '  float specular = pow(max(dot(reflectVec, position), 0.0), 2.0);\n' +
  
  '  float nDotL = max(dot(lightDirection, normal), 0.0);\n' +
  '  vec3 diffuse = u_LightColor * v_Color.rgb * nDotL;\n' +
  '  vec3 ambient = u_AmbientLight * v_Color.rgb;\n' +
  '  gl_FragColor = vec4(diffuse + ambient, v_Color.a);\n' +
'}\n';


