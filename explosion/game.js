var player;
var explosion;
var enemy;
var groundSprites;
var GROUND_SPRITE_HEIGHT = 20;
var GROUND_SPRITE_WIDTH = 180;
var numGroundSprites;
var obstacleSprites;
var GRAVITY = 0.2;
var JUMP = -4;

function setup() {
    createCanvas(800, 500);
    background(300, 400, 200);
    groundSprites = new Group();
    player = createSprite(250, height / 2, 50, 50);
    enemy = createSprite(70,450,30,30)
    explosion = createSprite(100,100,60,60)
    numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
    for (var n = 0; n < numGroundSprites; n++) {
        var groundSprite = createSprite(n * 180, height - 25, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);
        var groundSprite = createSprite(n * 300,height -200, GROUND_SPRITE_WIDTH, GROUND_SPRITE_HEIGHT);
        groundSprites.add(groundSprite);

    }
}

function draw() {
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
        if (keyDown(DOWN_ARROW)){
            explosion.position.x = player.position.x;
            explosion.position.y = player.position.y;
        }
        drawSprites();
    }
    