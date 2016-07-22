var player;
var playerImage;
var enemy;
var enemy2;
var enemy3;
var enemyImage;
var enemy2Image;
var enemy3Image;
var isGameOver;
var backgroundImage;

function preload(){
    playerImage = loadImage("download.png")
    enemyImage = loadImage("sheep_sprite_by_ddr_maniac.png")
    backgroundImage = loadImage("nyan-cat.jpg")
    enemy2Image = loadImage("01-176x116_c.png")
    enemy3Image = loadImage("camaro_sprite___side_by_neurotoast-d357b7l.png")
}

function setup() {
    createCanvas(1101, 618);
    isGameOver = false;
    player = createSprite(width / 2, height - 25, 50, 50);
    player.addImage(playerImage);
    enemy = createSprite(width / 2, 0, 10, 30)
    enemy.addImage(enemyImage);
    enemy2 = createSprite(0,height/2,10,30)
    enemy2.addImage(enemy2Image);
    enemy3 = createSprite(618,height/2,10,30)
    enemy3.addImage(enemy3Image);
}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
         background(backgroundImage);
        if (keyDown(RIGHT_ARROW) && player.position.x < (width - 25)) {
            player.position.x = player.position.x += 7;
        }
        if (keyDown(LEFT_ARROW) && player.position.x > 25) {
            player.position.x = player.position.x -= 7;
        }
        if (keyDown(UP_ARROW) && player.position.y > 0){
            player.position.y = player.position.y -=6;
        }
        if (keyDown(DOWN_ARROW) && player.position.y< height){
            player.position.y = player.position.y +=6;
        }
            
        if (enemy.position.y > height) {
            enemy.position.y = 0;
            enemy.position.x = random(30, width - 5);
        }
        if(enemy2.position.x>width){
            enemy2.position.x = 0;
            enemy2.position.y = random(30,height-5);
        }
        if(enemy3.position.x<0){
            enemy3.position.x = width;
            enemy3.position.y = random(30,height-5);
        }
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
        if (enemy2.overlap(player)){
            isGameOver = true
        }
        if (enemy3.overlap(player)){
            isGameOver = true
        }
        enemy.position.y = enemy.position.y + 7;
        enemy2.position.x = enemy2.position.x + 8.6;
        enemy3.position.x = enemy3.position.x - 8.4;
        drawSprites();
    }
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    textSize(50)
    fill("white");
    text("Game Over!", width / 2, height / 2);
    text("Click anywhere to try again", width / 2, 3 * height / 4)
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = width / 2;
        player.position.y = height - 25;
        enemy.position.x = width / 2;
        enemy.position.y = 0;
        enemy2.position.x = 0;
        enemy2.position.y = height/2;
        enemy3.position.x = width;
        enemy3.position.y = height/2;
    }
}