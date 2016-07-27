var config = {
    apiKey: "AIzaSyB1fL_VkUo8l4RvQe5stJv1QDHh4lgc0kc",
    authDomain: "collaborative-sketch-5d383.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-5d383.firebaseio.com",
    storageBucket: "collaborative-sketch-5d383.appspot.com",
};
firebase.initializeApp(config);
var pointsData = firebase.database().ref();
var points = [];

function drawPointIfMouseIsPressed() {
    if (mouseIsPressed) {
        drawPoint();
    }
}
function setup() {
    var canvas = createCanvas(windowWidth,windowHeight);
    background(255);
    fill(0);
    pointsData.on("child_added", function(point) {
        points.push(point.val());
    });
    pointsData.on("child_removed", function() {
    points = [];
})
        canvas.mousePressed(drawPoint);
        canvas.mouseMoved(drawPointIfMouseIsPressed);
}
function draw() {
    background(255);
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        fill(240,0,0);
        triangle(point.x, point.y,point.y,36,51,20);
    }
}

function drawPoint() {
    pointsData.push({
        x: mouseX,
        y: mouseY
    });
}


$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}
$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}
