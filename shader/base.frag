precision mediump float;

varying vec3 vNormal;
varying vec2 vUv;
uniform float time;
void main() {

  gl_FragColor = vec4(vNormal, 1.0);
}
