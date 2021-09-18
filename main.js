noseX=0;
noseY=0;
differnce=0;
leftWristX=0;
RightWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(400,400)

    canvas=createCanvas(500,500);
    canvas.position(560,150);

    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
}
function ModelLoaded(){
    console.log("PoseNet Is Initialized");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= "+noseX+" noseY= "+noseY)
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    console.log("leftWristX= " +leftWristX+" rightWristX= "+rightWristX);
    differnce=floor(leftWristX-rightWristX);
    console.log("differnce="+differnce);
}
}

function draw(){
    background("gray");
    fill("royalblue")
    stroke("black")
    square(noseX,noseY,differnce)

    document.getElementById("square_size").innerHTML="Width Of The Square= "+differnce+" px";
}