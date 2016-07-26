var player;
var explosion;
var enemy;
var enp;
var groundSprites;
var GROUND_SPRITE_HEIGHT = 20;
var GROUND_SPRITE_WIDTH = 180;
var numGroundSprites;
var obstacleSprites;
var GRAVITY = 0.2;
var JUMP = -4;
var isGameOver;
var explosionSprites;
var explosionSprite;
var exp1;
var exp2;
var exp3;
var exp4;
var exp5;
var exp6;
var lastkeyDown = new Date;

function setup() {
    createCanvas(800, 500);
    background(300, 400, 200);
    isGameOver = false;
    groundSprites = new Group();
    player = createSprite(250, height / 2, 50, 50);
    enemy = createSprite(70, 450, 30, 30);
    explosionSprites = new Group();
    numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n * 180, height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
        var groundSprite = createSprite(n * 300, height - 200, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
        enp = createSprite(70, 450, 30, 30)
    }
    o = 0;
}

function draw() {
    if (isGameOver) {
        gameOver();
    }
    else {
        background(300, 400, 200);
        player.velocity.y = player.velocity.y + GRAVITY;
        if (groundSprites.overlap(player)) {
            player.velocity.y = 0;

        }
        if (keyDown(UP_ARROW)) {
            player.velocity.y = JUMP
        }
        if (keyDown(LEFT_ARROW)) {
            player.position.x = player.position.x - 6;
        }
        if (keyDown(RIGHT_ARROW)) {
            player.position.x = player.position.x + 6;
        }
        if (keyDown(DOWN_ARROW) &&(lastkeyDown - new Date <= -2000)) {
            explosions();
            lastkeyDown = new Date;
        }
        if (enp.position.x > width) {
            enp.position.x = enemy.position.x;
            enp.position.y = enemy.position.y;
        }
        if (enp.overlap(player)) {
            isGameOver = true;
        }
        if (explosionSprites.overlap(enemy)){
            enemy.position.x=10000;
            enemy.position.y=10000;
            
        }
        enp.position.x = enp.position.x + 10
        drawSprites();
    }
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    textSize(40);
    fill("white");
    text("GAME OVER")
}

function mouseClicked() {
    if (isGameOver) {
        isGameOver = false;
        player.position.x = 250;
        player.position.y = height / 2;
        enemy.position.x = 70;
        enemy.position.y = 450;
    }
}

function explosions() {
    for (var o = 0; o < 6;o++) {
        explosionSprite = createSprite(player.position.x, player.position.y, 34, 34);
        explosionSprites.add(explosionSprite);
        console.log(o);
    explosionSprite.addSpeed(3,60*o);
    }
}