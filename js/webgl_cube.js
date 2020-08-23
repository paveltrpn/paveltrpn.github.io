function deg_to_rad(deg) {
    return deg * Math.PI / 180.0;
}
function id_rw(i, j, n) {
    return (i * n + j);
}
;
function id_cw(i, j, n) {
    return (j * n + i);
}
;
function vec3_set(x, y, z) {
    var rt = new Float32Array(3);
    rt[0] = x;
    rt[1] = y;
    rt[2] = z;
    return rt;
}
function vec3_lenght(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}
function vec3_normalize(v) {
    var rt = new Float32Array(3);
    var len;
    len = vec3_lenght(v);
    if (len > 0.000001) {
        rt[0] = v[0] / len;
        rt[1] = v[1] / len;
        rt[2] = v[2] / len;
    }
    return rt;
}
function mtrx4_set_idtt() {
    var rt = new Float32Array(16);
    var i, j;
    for (i = 0; i < 16; i++) {
        for (j = 0; j < 16; j++) {
            if (i == j) {
                rt[id_rw(i, j, 4)] = 1.0;
            }
            else {
                rt[id_rw(i, j, 4)] = 0.0;
            }
        }
    }
    return rt;
}
/*
function mtrx4_transpose(m: mtrx4_t): mtrx4_t {
    const mrange: number = 4;
    let i, j, tmp: number;
    let rt: mtrx4_t = new Float32Array(16);

    rt = m;

    for (i = 0; i < mrange; i++) {
        for (j = 0; j < i; j++) {
            tmp = rt[id_rw(i, i, mrange)];
            rt[id_rw(i, j, mrange)] = rt[id_rw(j, i, mrange)];
            rt[id_rw(j, i, mrange)] = tmp;
        }
    }

    return rt;
}
*/
function mtrx4_transpose(a) {
    var rt = new Float32Array(16);
    rt[0] = a[0];
    rt[1] = a[4];
    rt[2] = a[8];
    rt[3] = a[12];
    rt[4] = a[1];
    rt[5] = a[5];
    rt[6] = a[9];
    rt[7] = a[13];
    rt[8] = a[2];
    rt[9] = a[6];
    rt[10] = a[10];
    rt[11] = a[14];
    rt[12] = a[3];
    rt[13] = a[7];
    rt[14] = a[11];
    rt[15] = a[15];
    return rt;
}
function mtrx4_invert(m) {
    var inv = new Float32Array(16);
    var rt = new Float32Array(16);
    var i, det;
    inv[0] = m[5] * m[10] * m[15] -
        m[5] * m[11] * m[14] -
        m[9] * m[6] * m[15] +
        m[9] * m[7] * m[14] +
        m[13] * m[6] * m[11] -
        m[13] * m[7] * m[10];
    inv[4] = -m[4] * m[10] * m[15] +
        m[4] * m[11] * m[14] +
        m[8] * m[6] * m[15] -
        m[8] * m[7] * m[14] -
        m[12] * m[6] * m[11] +
        m[12] * m[7] * m[10];
    inv[8] = m[4] * m[9] * m[15] -
        m[4] * m[11] * m[13] -
        m[8] * m[5] * m[15] +
        m[8] * m[7] * m[13] +
        m[12] * m[5] * m[11] -
        m[12] * m[7] * m[9];
    inv[12] = -m[4] * m[9] * m[14] +
        m[4] * m[10] * m[13] +
        m[8] * m[5] * m[14] -
        m[8] * m[6] * m[13] -
        m[12] * m[5] * m[10] +
        m[12] * m[6] * m[9];
    inv[1] = -m[1] * m[10] * m[15] +
        m[1] * m[11] * m[14] +
        m[9] * m[2] * m[15] -
        m[9] * m[3] * m[14] -
        m[13] * m[2] * m[11] +
        m[13] * m[3] * m[10];
    inv[5] = m[0] * m[10] * m[15] -
        m[0] * m[11] * m[14] -
        m[8] * m[2] * m[15] +
        m[8] * m[3] * m[14] +
        m[12] * m[2] * m[11] -
        m[12] * m[3] * m[10];
    inv[9] = -m[0] * m[9] * m[15] +
        m[0] * m[11] * m[13] +
        m[8] * m[1] * m[15] -
        m[8] * m[3] * m[13] -
        m[12] * m[1] * m[11] +
        m[12] * m[3] * m[9];
    inv[13] = m[0] * m[9] * m[14] -
        m[0] * m[10] * m[13] -
        m[8] * m[1] * m[14] +
        m[8] * m[2] * m[13] +
        m[12] * m[1] * m[10] -
        m[12] * m[2] * m[9];
    inv[2] = m[1] * m[6] * m[15] -
        m[1] * m[7] * m[14] -
        m[5] * m[2] * m[15] +
        m[5] * m[3] * m[14] +
        m[13] * m[2] * m[7] -
        m[13] * m[3] * m[6];
    inv[6] = -m[0] * m[6] * m[15] +
        m[0] * m[7] * m[14] +
        m[4] * m[2] * m[15] -
        m[4] * m[3] * m[14] -
        m[12] * m[2] * m[7] +
        m[12] * m[3] * m[6];
    inv[10] = m[0] * m[5] * m[15] -
        m[0] * m[7] * m[13] -
        m[4] * m[1] * m[15] +
        m[4] * m[3] * m[13] +
        m[12] * m[1] * m[7] -
        m[12] * m[3] * m[5];
    inv[14] = -m[0] * m[5] * m[14] +
        m[0] * m[6] * m[13] +
        m[4] * m[1] * m[14] -
        m[4] * m[2] * m[13] -
        m[12] * m[1] * m[6] +
        m[12] * m[2] * m[5];
    inv[3] = -m[1] * m[6] * m[11] +
        m[1] * m[7] * m[10] +
        m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] -
        m[9] * m[2] * m[7] +
        m[9] * m[3] * m[6];
    inv[7] = m[0] * m[6] * m[11] -
        m[0] * m[7] * m[10] -
        m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] +
        m[8] * m[2] * m[7] -
        m[8] * m[3] * m[6];
    inv[11] = -m[0] * m[5] * m[11] +
        m[0] * m[7] * m[9] +
        m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] -
        m[8] * m[1] * m[7] +
        m[8] * m[3] * m[5];
    inv[15] = m[0] * m[5] * m[10] -
        m[0] * m[6] * m[9] -
        m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] +
        m[8] * m[1] * m[6] -
        m[8] * m[2] * m[5];
    det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
    if (det == 0)
        return mtrx4_set_idtt();
    det = 1.0 / det;
    for (i = 0; i < 16; i++)
        rt[i] = inv[i] * det;
    return rt;
}
function mtrx4_set_perspective(fovy, aspect, near, far) {
    var rt = new Float32Array(16);
    var f = 1.0 / Math.tan(fovy / 2), nf;
    rt[0] = f / aspect;
    rt[1] = 0;
    rt[2] = 0;
    rt[3] = 0;
    rt[4] = 0;
    rt[5] = f;
    rt[6] = 0;
    rt[7] = 0;
    rt[8] = 0;
    rt[9] = 0;
    rt[11] = -1;
    rt[12] = 0;
    rt[13] = 0;
    rt[15] = 0;
    if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        rt[10] = (far + near) * nf;
        rt[14] = 2 * far * near * nf;
    }
    else {
        rt[10] = -1;
        rt[14] = -2 * near;
    }
    return rt;
}
function mtrx4_set_euler(yaw, pitch, roll) {
    var rt = new Float32Array(16);
    var cosy, siny, cosp, sinp, cosr, sinr;
    cosy = Math.cos(yaw);
    siny = Math.sin(yaw);
    cosp = Math.cos(pitch);
    sinp = Math.sin(pitch);
    cosr = Math.cos(roll);
    sinr = Math.sin(roll);
    rt[0] = cosy * cosr - siny * cosp * sinr;
    rt[1] = -cosy * sinr - siny * cosp * cosr;
    rt[2] = siny * sinp;
    rt[3] = 0.0;
    rt[4] = siny * cosr + cosy * cosp * sinr;
    rt[5] = -siny * sinr + cosy * cosp * cosr;
    rt[6] = -cosy * sinp;
    rt[7] = 0.0;
    rt[8] = sinp * sinr;
    rt[9] = sinp * cosr;
    rt[10] = cosp;
    rt[11] = 0.0;
    rt[12] = 0.0;
    rt[13] = 0.0;
    rt[14] = 0.0;
    rt[15] = 1.0;
    return rt;
}
function mtrx4_set_axisangl(axis, phi) {
    var rt = new Float32Array(16);
    var cosphi, sinphi, vxvy, vxvz, vyvz, vx, vy, vz;
    var ax = vec3_normalize(axis);
    cosphi = Math.cos(phi);
    sinphi = Math.sin(phi);
    vxvy = ax[0] * ax[1];
    vxvz = ax[0] * ax[2];
    vyvz = ax[1] * ax[2];
    vx = ax[0];
    vy = ax[1];
    vz = ax[2];
    rt[0] = cosphi + (1.0 - cosphi) * vx * vx;
    rt[1] = (1.0 - cosphi) * vxvy - sinphi * vz;
    rt[2] = (1.0 - cosphi) * vxvz + sinphi * vy;
    rt[3] = 0.0;
    rt[4] = (1.0 - cosphi) * vxvy + sinphi * vz;
    rt[5] = cosphi + (1.0 - cosphi) * vy * vy;
    rt[6] = (1.0 - cosphi) * vyvz - sinphi * vx;
    rt[7] = 0.0;
    rt[8] = (1.0 - cosphi) * vxvz - sinphi * vy;
    rt[9] = (1.0 - cosphi) * vyvz + sinphi * vx;
    rt[10] = cosphi + (1.0 - cosphi) * vz * vz;
    rt[11] = 0.0;
    rt[12] = 0.0;
    rt[13] = 0.0;
    rt[14] = 0.0;
    rt[15] = 1.0;
    return rt;
}
function mtrx4_mult_axisangl(a, rad, axis) {
    var rt = new Float32Array(16);
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    // if (len < glMatrix.EPSILON) {
    // return null;
    // }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    // Perform rotation-specific matrix multiplication
    rt[0] = a00 * b00 + a10 * b01 + a20 * b02;
    rt[1] = a01 * b00 + a11 * b01 + a21 * b02;
    rt[2] = a02 * b00 + a12 * b01 + a22 * b02;
    rt[3] = a03 * b00 + a13 * b01 + a23 * b02;
    rt[4] = a00 * b10 + a10 * b11 + a20 * b12;
    rt[5] = a01 * b10 + a11 * b11 + a21 * b12;
    rt[6] = a02 * b10 + a12 * b11 + a22 * b12;
    rt[7] = a03 * b10 + a13 * b11 + a23 * b12;
    rt[8] = a00 * b20 + a10 * b21 + a20 * b22;
    rt[9] = a01 * b20 + a11 * b21 + a21 * b22;
    rt[10] = a02 * b20 + a12 * b21 + a22 * b22;
    rt[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== rt) {
        // If the source and destination differ, copy the unchanged last row
        rt[12] = a[12];
        rt[13] = a[13];
        rt[14] = a[14];
        rt[15] = a[15];
    }
    return rt;
}
function mtrx4_mult_translate(a, v) {
    var rt = new Float32Array(16);
    ;
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === rt) {
        rt[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        rt[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        rt[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        rt[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    }
    else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        rt[0] = a00;
        rt[1] = a01;
        rt[2] = a02;
        rt[3] = a03;
        rt[4] = a10;
        rt[5] = a11;
        rt[6] = a12;
        rt[7] = a13;
        rt[8] = a20;
        rt[9] = a21;
        rt[10] = a22;
        rt[11] = a23;
        rt[12] = a00 * x + a10 * y + a20 * z + a[12];
        rt[13] = a01 * x + a11 * y + a21 * z + a[13];
        rt[14] = a02 * x + a12 * y + a22 * z + a[14];
        rt[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return rt;
}
function mtrx4_mult(a, b) {
    var mrange = 4;
    var i, j, k, tmp;
    var rt = new Float32Array(16);
    for (i = 0; i < mrange; i++) {
        for (j = 0; j < mrange; j++) {
            tmp = 0.0;
            for (k = 0; k < mrange; k++) {
                tmp = tmp + a[(id_rw(k, j, mrange))] * b[(id_rw(i, k, mrange))];
            }
            rt[(id_rw(i, j, mrange))] = tmp;
        }
    }
    return rt;
}
// 
// Конец секции с математикой
// 
var squareRotation = 0.0;
function main() {
    var canvas = document.querySelector('#glcanvas');
    var gl = canvas.getContext('webgl', { antialias: true,
        depth: true,
        preserveDrawingBuffer: true });
    if (!gl) {
        alert('Unable to initialize WebGL. Your browser or machine may not support it.');
        return;
    }
    var vsSource = "\n        attribute vec4 aVertexPosition;\n        attribute vec3 aVertexNormal;\n        attribute vec4 aVertexColor;\n\n        uniform mat4 uNormalMatrix;\n        uniform mat4 uModelViewMatrix;\n        uniform mat4 uProjectionMatrix;\n\n        varying highp vec3 vLighting;\n        varying lowp vec4 vColor;\n\n        void main(void) {\n            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;\n            vColor = aVertexColor;\n\n            highp vec3 ambientLight = vec3(0.3, 0.3, 0.3);\n            highp vec3 directionalLightColor = vec3(1, 1, 1);\n            highp vec3 directionalVector = normalize(vec3(0, 0, 1));\n\n            highp vec4 transformedNormal = uNormalMatrix * vec4(aVertexNormal, 1.0);\n\n            highp float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);\n            vLighting = ambientLight + (directionalLightColor * directional);\n            //vLighting = vec3(0.5, 0.5, 0.5);\n        }\n    ";
    var fsSource = "\n        varying highp vec3 vLighting;\n        varying lowp vec4 vColor;\n\n        void main(void) {\n            gl_FragColor = vec4(vColor.rgb * vLighting, 1.0);\n        }\n    ";
    // Initialize a shader program; this is where all the lighting
    // for the vertices and so forth is established.
    var shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    // Collect all the info needed to use the shader program.
    // Look up which attributes our shader program is using
    // for aVertexPosition, aVevrtexColor and also
    // look up uniform locations.
    // const programInfo = {
    // program: shaderProgram,
    // attribLocations: {
    // vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
    // vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    // },
    // uniformLocations: {
    // projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
    // modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    // },
    // };
    var programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
            vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor')
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
            normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix')
        }
    };
    // Here's where we call the routine that builds all the
    // objects we'll be drawing.
    var buffers = initBuffers(gl);
    var then = 0;
    // Draw the scene repeatedly
    function render(now) {
        now *= 0.001; // convert to seconds
        var deltaTime = now - then;
        then = now;
        drawScene(gl, programInfo, buffers, deltaTime);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
function initBuffers(gl) {
    // Create a buffer for the square's positions.
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var positions = [
        // top
        1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
        -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,
        // bottom
        1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
        -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,
        // front
        -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
        1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
        // back
        -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0, -1.0,
        1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0,
        // left
        -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
        -1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0,
        // right
        1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
        1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    // Normal buffer
    var normalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    var normals = [
        // top
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
        // bottom
        0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
        0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,
        // front
        0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
        // back
        0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
        0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
        // left
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,
        // right
        1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,
        1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
    // Now set up the colors for the vertices
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    var colors = [
        // top (light green)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        // bottom (dark green)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        // front (light red)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        // back  (dark red)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        // left (light blue)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        // right (dark blue)
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
        0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    return {
        position: positionBuffer,
        normal: normalBuffer,
        color: colorBuffer
    };
}
function drawScene(gl, programInfo, buffers, deltaTime) {
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clearDepth(1.0);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    var projectionMatrix = mtrx4_set_perspective(deg_to_rad(45), aspect, 0.1, 100.0);
    var modelViewMatrix = mtrx4_set_idtt();
    // Now move the drawing position a bit to where we want to
    // start drawing the square.
    modelViewMatrix = mtrx4_mult_translate(modelViewMatrix, [0.0, 0.0, -5.0]);
    var rot = mtrx4_set_axisangl(vec3_set(0.1, 0.4, 0.3), squareRotation);
    // let rot: mtrx4_t = mtrx4_set_euler(squareRotation, 0, squareRotation );
    modelViewMatrix = mtrx4_mult(modelViewMatrix, rot);
    var normalMatrix = mtrx4_invert(modelViewMatrix);
    normalMatrix = mtrx4_transpose(normalMatrix);
    // Буфер вершин
    {
        var numComponents = 3;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
    }
    // Буфер нормалей вершин
    {
        var numComponents = 3;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
        gl.vertexAttribPointer(1, // programInfo.attribLocations.vertexNormal
        numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(1); // programInfo.attribLocations.vertexNormal
    }
    // Буфер цвета вершин
    {
        var numComponents = 3;
        var type = gl.FLOAT;
        var normalize = false;
        var stride = 0;
        var offset = 0;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
        gl.vertexAttribPointer(programInfo.attribLocations.vertexColor, numComponents, type, normalize, stride, offset);
        gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
    }
    gl.useProgram(programInfo.program);
    gl.uniformMatrix4fv(programInfo.uniformLocations.projectionMatrix, false, projectionMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.modelViewMatrix, false, modelViewMatrix);
    gl.uniformMatrix4fv(programInfo.uniformLocations.normalMatrix, false, normalMatrix);
    gl.drawArrays(gl.TRIANGLES, 0, 36);
    squareRotation += deltaTime;
}
function initShaderProgram(gl, vsSource, fsSource) {
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        return null;
    }
    return shaderProgram;
}
function loadShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
main();
