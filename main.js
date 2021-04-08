noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX,noseY,20);//
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on('pose',gotPoses);
}

function take_snapshot(){
save('image.png');
}

function ModelLoaded(){
    console.log( "PoseNet Is Initialized");
}

function gotPoses(results){
if (results.length > 0 ){
    console.log(results);
    noseX=results[0].pose.nose.x-10;
    noseY=results[0].pose.nose.y-10;
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
}
}