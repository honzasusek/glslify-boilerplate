#define SHADER_NAME baboon vert

attribute vec2 position;
varying vec2 texCoord;
uniform float width;
uniform float height;

void main() {
  vec2 dimensions = vec2(width, height);
  
  vec2 pos = position;
  gl_Position = vec4(pos * vec2(1.0, -1.0), 0, 1);
  texCoord = vec2(0.0,0.0)+vec2(0.5,0.5) * (pos + 1.0);
}