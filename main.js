noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/Qd4RG3hz/moustache.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 100, 75);
}

function takeSnapshot(){
    save('myfilterimage.png');
}

function modelLoaded() {
    console.log("PoseNet Is Initialized");
}

function gotPoses(results) {
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}