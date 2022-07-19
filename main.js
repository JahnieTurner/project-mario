function preload() {
    world_start = loadSound("world_start.wav");
    mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
    mario_gameover = loadSound("gameover.wav");
    mario_kick = loadSound("kick.wav");
    mario_die = loadSound("mariodie");
    setSprites();
    MarioAnimation();
}

function setup() {
    canvas = createCanvas(1240, 336);
    instializeInSetup(mario);
    video = createCapture(VIDEO);
    video.size(600, 300);
    video.parent('game_console');
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotResult);
}

function gotResult(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log(results);
    }
}

function modelLoaded() {
    console.log('model is loaded');
}

function draw() {
    game();
}