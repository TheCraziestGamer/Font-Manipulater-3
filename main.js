function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500)
    canvas = createCanvas(550, 550);
    canvas.position(900, 150);
    video.position(300, 150)

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('Pose', gotPoses);
    noseX = 0;
    noseY = 0;
    difference = 0;
    leftWristX = 0;
    rightWristX = 0;
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);



    }

}

function modelLoaded() {
    console.log('PoseNet has been initialised');
}

function draw() {
    background('#0080ff');
    fill("#FFE787");
    text_size(10);
}



noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);
    }

}