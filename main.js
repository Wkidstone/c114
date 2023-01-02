function preload() {
 
}

function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}



function draw() {
  image(video, 0, 0, 500, 500);

}

function t_s(){
    save("sasuke eyes.png");
}