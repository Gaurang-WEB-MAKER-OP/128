song = "";

function preload() {
    song = loadSound("music.mp3")
}

scoreRightWrist = 0;
scoreleftWrist = 0;

rightWrightX = 0;
rightwrighty = 0;

leftWrightX = 0;
leftwrightY = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    veio = createCapture(VIDEO);
    vedio.hide();

    poseNet = ml5.poseNet(vedio, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialize');
}

function gotPoses(results) {
    if (results.length > 0) {
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    }
}

function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}