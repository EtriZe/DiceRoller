
const maxWidthCanvas = (window.screen.width * 90)/100;
const maxHeightCanvas = (window.screen.height * 80)/100;

function addPlayer(){
    const totalOfCanvas = document.getElementsByTagName("canvas").length;
    const totalPlayer = totalOfCanvas + 1;
    var widthByCanvas = maxWidthCanvas/totalPlayer;
    
    document.getElementById("PeopleInRoom").innerHTML = "Nbr Of PLayer : " + totalPlayer;


    createCanvas(widthByCanvas, maxHeightCanvas, totalPlayer);
}

function removePlayer(){
    const totalOfCanvas = document.getElementsByTagName("canvas").length;
    const totalPlayer = totalOfCanvas - 1;
    var widthByCanvas = maxWidthCanvas/totalPlayer;
    
    document.getElementById("PeopleInRoom").innerHTML = "Nbr Of PLayer : " + totalPlayer;


    createCanvas(widthByCanvas, maxHeightCanvas, totalPlayer);
}

function createCanvas(width, height, totalPlayer)
{
    var row = document.getElementsByClassName("row")[0];

    //Clear all canvas
    while(row.childNodes.length){
        row.removeChild(row.childNodes[0]);
    }

    //Create all the needed canvas
    for(var i = 0; i < totalPlayer; i++)
    {
        var canvas = document.createElement('canvas');
        canvas.id = "canvas" + i;
        canvas.width = width;
        canvas.height =  height;

        //Style
        canvas.style.paddingLeft = 0;
        canvas.style.paddingRight = 0;
        canvas.style.marginTop = "1%";
        canvas.style.marginLeft = 0;
        canvas.style.marginRight = 0;
        canvas.style.display = "block";
        //canvas.style.border ="4px solid rgb(0, 0, 0)";

        row.appendChild(canvas);
        cursorLayer = document.getElementById("canvas" + i);
        init("canvas" + i);
    }

}


function init(canvasid) {
    // Get canvas object from the DOM
    var canvas = document.getElementById(canvasid);

    // Init WebGL context
    var gl = canvas.getContext("webgl");
    if (!gl) {
        console.log("Failed to get the rendering context for WebGL");
        return;
    }

    // Init shaders
    var vs = document.getElementById('shaderVs').innerHTML;
    var fs = document.getElementById('shaderFs').innerHTML;
    if (!initShaders(gl, vs, fs)) {
        console.log('Failed to intialize shaders.');
        return;
    }

    // Write the positions of vertices to a vertex shader
    var n = initVertexBuffers(gl);
    if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
    }

    // Clear canvas
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw
    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function initVertexBuffers(gl) {
    // Vertices
    var dim = 2; 
    var vertices = new Float32Array([
        -0.5, 0.5, 0.5, 0.5, 0.5, -0.5, // Triangle 1
        -0.5, 0.5, 0.5, -0.5, -0.5, -0.5 // Triangle 2 
    ]);

    // Fragment color
    var rgba = [1, 0.0, 0.0, 1.0];

    // Create a buffer object
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create the buffer object');
        return -1;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // Assign the vertices in buffer object to a_Position variable
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
        console.log('Failed to get the storage location of a_Position');
        return -1;
    }
    gl.vertexAttribPointer(a_Position, dim, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(a_Position);

    // Assign the color to u_FragColor variable
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    if (u_FragColor < 0) {
        console.log('Failed to get the storage location of u_FragColor');
        return -1;
    }
    gl.uniform4fv(u_FragColor, rgba);

    // Return number of vertices
    return vertices.length / dim;
}

function initShaders(gl, vs_source, fs_source) {
    // Compile shaders
    var vertexShader = makeShader(gl, vs_source, gl.VERTEX_SHADER);
    var fragmentShader = makeShader(gl, fs_source, gl.FRAGMENT_SHADER);

    // Create program
    var glProgram = gl.createProgram();

    // Attach and link shaders to the program
    gl.attachShader(glProgram, vertexShader);
    gl.attachShader(glProgram, fragmentShader);
    gl.linkProgram(glProgram);
    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
        alert("Unable to initialize the shader program");
        return false;
    }

    // Use program
    gl.useProgram(glProgram);
    gl.program = glProgram;

    return true;
}

function makeShader(gl, src, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compiling shader: " + gl.getShaderInfoLog(shader));
        return;
    }
    return shader;
}