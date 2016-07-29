var frog;
var frogi;
var log;
var logs;
var logss;
var log2;
var log3;
var logs3;
var log4;
var logs4;
var hop;
var beginning;
var road;
var car;
var car1;
var car2;

function preload(){
    frogi = loadImage("pepe.png");
}

function setup(){
    createCanvas(400,400);
    background(20,30,220);
    beginning = createSprite(width/2,380,400,40);
    road = createSprite(width/2,110,400,200);
    log = createSprite(360,340,50,20);
    logs = createSprite(500,340,40,20);
    logss = createSprite(600,340,40,20);
    log2 = createSprite(360,305,65,20);
    logs2 = createSprite(540,305,65,20);
    log3 = createSprite(30,270,40,20);
    logs3 = createSprite(-100,270,70,20);
    logss3 = createSprite(170,270,55,20);
    log4 = createSprite(360,235,60,20);
    logs4 = createSprite(545,235,60,20);
    frog = createSprite(width/2,375,19,19);
    frog.addImage(frogi);
    car = createSprite(360, 165,40,20);
    
}
function draw(){
    background(20,30,220);
    
    if (car.position.x < 0){
        car.position.y = 165;
        car.position.x = width;
    }
    if (log.position.x < 0){
        log.position.y = 340;
        log.position.x = width;
    }
    if (logs.position.x < 0){
        logs.position.y = 340;
        logs.position.x = width;
    }
    if (logss.position.x < 0){
        logss.position.y = 340;
        logss.position.x = width;
    }
    if (log2.position.x < 0){
        log2.position.y = 305;
        log2.position.x = width;
    }
    if (logs2.position.x < 0){
        logs2.position.y = 305;
        logs2.position.x = width;
    }
    if (log3.position.x > width){
        log3.position.y = 270;
        log3.position.x = 0;
    }
    if (logs3.position.x > width){
        logs3.position.y = 270;
        logs3.position.x = 0;
    }
    if (logss3.position.x > width){
        logss3.position.y = 270;
        logss3.position.x = 0;
    }
    if (log4.position.x < 0){
        log4.position.y = 235;
        log4.position.x = width;
    }
    if (logs4.position.x < 0){
        logs4.position.y = 235;
        logs4.position.x = width;
    }
    if (log.overlap(frog) ||logs.overlap(frog) ||logss.overlap(frog)){
        frog.position.y = 340;
        frog.position.x = frog.position.x - 1;
    }
    if (log2.overlap(frog) ||logs2.overlap(frog)){
        frog.position.y = 305;
        frog.position.x = frog.position.x - 1.4;
    }
    if (log3.overlap(frog) ||logs3.overlap(frog) ||logss3.overlap(frog)){
        frog.position.y = 270;
        frog.position.x = frog.position.x + 1.6;
    }
    if (log4.overlap(frog) ||logs4.overlap(frog)){
        frog.position.y = 235;
        frog.position.x = frog.position.x - 1;
    }
    log.position.x = log.position.x - 1;
    logs.position.x = logs.position.x - 1;
    logss.position.x = logss.position.x - 1;
    log2.position.x = log2.position.x - 1.4;
    logs2.position.x = logs2.position.x - 1.4;
    log3.position.x = log3.position.x + 1.6;
    logs3.position.x = logs3.position.x + 1.6;
    logss3.position.x = logss3.position.x + 1.6;
    log4.position.x = log4.position.x - 1;
    logs4.position.x = logs4.position.x - 1;
    car.position.x = car.position.x - 5;
    drawSprites();
}
function keyPressed(){
    if (keyCode === UP_ARROW){
        frog.position.y = frog.position.y - 35;
    }
    if (keyCode === LEFT_ARROW){
        frog.position.x = frog.position.x - 15;
    }
    if (keyCode === RIGHT_ARROW){
        frog.position.x = frog.position.x + 15;
    }
    if (keyCode === DOWN_ARROW){
        frog.position.y = frog.position.y + 35;
    }
}