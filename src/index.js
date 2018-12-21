"use strict";

const glShader = require("gl-shader");
const clear = require("gl-clear")({ color: [0, 0, 0, 1] });
const glslify = require("glslify");
const createTexture = require("gl-texture2d");
const drawTriangle = require("a-big-triangle");
const baboon = require("baboon-image");
const canvas = document.body.appendChild(document.createElement("canvas"));
const vert = require("./shaders/baboon.vert");
const frag = require("./shaders/baboon.frag");
const fit = require("canvas-fit")(canvas);
const context = require("gl-context");

let shader;
let texture;
let gl;

function resize() {
  fit();
  gl = context(canvas, render);
  texture = createTexture(gl, baboon);
  shader = glShader(gl, glslify(vert), glslify(frag));
  shader.attributes.position.location = 0;
}

function render() {
  clear(gl);
  shader.bind();
  shader.uniforms.texture = texture.bind();
  drawTriangle(gl);
}

resize();

window.addEventListener("resize", () => {
  resize();
  render();
});
