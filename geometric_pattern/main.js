var NUM_CIRCLES = 220;
var circleDiameter;
var circleRadius;
var rVal;
var gVal;
var bVal;

function setup(){
    createCanvas(1270,566);
    frameRate(1);
    circleDiameter = width/NUM_CIRCLES;
    circleRadius= circleDiameter/1;
    rVal = 255;
    gVal = 50;
    bVal = 0;
}
function draw(){
    var isShifted = false;
    var y = height;
    while(y >= 5){
        
    var x;
    if (isShifted){
        x = circleRadius;
    }else{
        x = 7;
    }
    while (x <= width){
        stroke(color(rVal,gVal,bVal));
        fill(color(rVal,gVal,bVal));
        ellipse(x,y,circleDiameter,circleDiameter);
        x = x + circleDiameter;
        }
        y = y - circleRadius;
        isShifted = !isShifted;
        rVal = (rVal + 254)%256;
        gVal = (gVal + 10)%392;
        bVal = (bVal + 12)%196;
    }
}
function keyPressed(){
    if(keyCode === 115 || keyCode === 83){
        saveCanvas('geometricPattern','png');
        
    }
    return false;
}