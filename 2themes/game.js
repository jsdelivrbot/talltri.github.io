var choice;
var botchoice;
var maples;
var mapleim;
var guns;
var bears;
var a;
var c;
var b;
var d;
var gg;
var score;
var botscore;

function preload(){
    mapleim = loadImage("maple.png");
}

function setup() {
    a = false;
    d = false;
    c = false;
    b = false;
    gg = false;
    createCanvas(400, 400);
    background(200);
    score = 0;
    botscore = 0;
}

function draw() {
    if (gg) {
        GameOver();
    }
    else {
        background(200);
        text("Your Score:" + score + "         " + "Bot score:" + botscore, width / 2, 30);
        if (choice == 1 && c == false && b == false) {
            console.log("test");
            maples = createSprite(width / 2, 100, 70, 70);
            maples.addImage(mapleim);
            c = true;
        }
        if (choice == 2 && c == false && b == false) {
            guns = createSprite(width / 2, 100, 70, 70);
            c = true;
        }
        if (choice == 3 && c == false && b == false) {
            bears = createSprite(width / 2, 100, 70, 70);
            c = true;
        }
        if (c == true && b == false) {
            enemy();
            b = true;
        }
        // if (a == false) {
        scoreUpdate();
        // }

        drawSprites();
        console.log(score, botscore);
    }
}

function enemy() {
    botchoice = Math.floor((Math.random() * 3) + 1);
}

$("#maple").on("click", mapleleaf);

function mapleleaf() {
    choice = 1;
}
$("#gun").on("click", shoot);

function shoot() {
    choice = 2;
}
$("#bear").on("click", polar);

function polar() {
    choice = 3;
}

function scoreUpdate() {
    if (choice == 1 && botchoice == 1 && d == false) {
        score = score;
        botscore = botscore;
        d = true;
    }
    if (choice == 1 && botchoice == 2 && d == false) {
        score = score + 1;
        botscore = botscore;
        d = true;
    }
    if (choice == 1 && botchoice == 3 && d == false) {
        score = score;
        botscore = botscore + 1;
        d = true;
    }
    if (choice == 2 && botchoice == 1 && d == false) {
        score = score;
        botscore = botscore + 1;
        d = true;
    }
    if (choice == 2 && botchoice == 2 && d == false) {
        score = score;
        botscore = botscore;
        d = true;
    }
    if (choice == 2 && botchoice == 3 && d == false) {
        score = score + 1;
        botscore = botscore;
    }
    if (choice == 3 && botchoice == 1 && d == false) {
        score = score + 1;
        botscore = botscore;
        d = true;
    }
    if (choice == 3 && botchoice == 2 && d == false) {
        score = score;
        botscore = botscore + 1;
        d = true;
    }
    if (choice == 3 && botchoice == 3 && d == false) {
        score = score;
        botscore = botscore;
        d = true;
    }
    if (score == 3 || botscore == 3) {
        gg = true;
    }
    a = true;
    b = false;
    c = false;
    d = false;
    choice = 0;
    botchoice = 0;
}

function GameOver() {
    background(0);
    if (score == 3) {
        fill(255);
        textAlign(CENTER);
        text("YOU WON", width / 2, height / 2);
        text("CONGRATULATIONS!", width / 2, height / 3);

    }
    if (botscore == 3) {
        fill(255);
        textAlign(CENTER);
        text("YOU LOST TO A BOT", width / 2, height / 2);
        text("DON'T PLAY THIS GAME.", width / 2, height / 3)
    }
}

function mouseClicked() {
    if (gg) {
        gg = false;
        score = 0;
        botscore = 0;
    }

}