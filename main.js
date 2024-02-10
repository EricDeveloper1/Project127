song_1 = "";
song_2 = "";

function preload() {
    song_1 = loadSound("Ed_Sheeran_-_Shape_Of_You_talkglitz.tv.mp3");
    song_2 = loadSound("Shawn Mendes - Stitches.mp3");
}

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(400, 235);

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 700, 500);
}