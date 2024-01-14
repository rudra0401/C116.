noseX=0;
noseY=0;
function preload(){
    moustache= loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized')
}


function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x ="+ noseX);
        console.log("Nose y=" + noseY);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(moustache, noseX, noseY-15 , 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png')
}

