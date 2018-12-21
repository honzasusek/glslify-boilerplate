#define SHADER_NAME baboon frag

precision highp float;
uniform sampler2D texture;
varying vec2 texCoord;
uniform float width;
uniform float height;

void main() {
  vec2 dimensions = vec2(width, height);

  gl_FragColor = texture2D(texture, texCoord);
}