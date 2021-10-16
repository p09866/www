var noseX=0;
var noseY=0;
function preload(){
    mustache=loadImage("https://i.postimg.cc/rmgfgzyr/mustache-11563112496btuk1vqglh.png");
}

function setup(){
canvas=createCanvas(300,300)
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes)
}

function draw(){
image(video,0,0,300,300);
image(mustache,noseX-10,noseY-10,30,30);
}

function take_snapshot(){
save('myimage.png')
}

function modelloaded(){
    console.log("Model has been initialized correctly")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose x ="+noseX)
        console.log("nose y="+noseY)
    }
}
