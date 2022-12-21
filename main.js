hp = "";
pp = "";

function preload()
{
    hp = loadSound("Harry Potter Theme Song.mp3");
    pp = loadSound("harry_potter_bgm_ringt.mp3");
}

function setup() {
    canvas = createCanvas(600,500)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}