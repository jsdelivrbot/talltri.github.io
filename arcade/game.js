var frog;
var log;
var log2;

function setup(){
    createCanvas(400,400);
    background(20,30,220);
    frog = createSprite(width/2,385,30,30);
    log = createSprite(360,340,50,20);
    log2 = createSprite(360,305,65,20);
}
function draw(){
    background(20,30,220);
    if (log.position.x < 0){
        log.position.y = 340;
        log.position.x = width;
    }
    log.position.x = log.position.x - 1.3;
    log2.position.x = log2.position.x - 2;
    drawSprites();

}