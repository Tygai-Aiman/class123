function setup()
{
  video=createCapture(VIDEO);
  video.size(550,700);
  
  canvas=createCanvas(550,550);
  canvas.position(560,150);
  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);
}
function draw()
{
  background('#333333');
  document.getElementById("square_side").innerHTML="Width And Hight Of A Square Will Be = "+difference+"px"
  fill('#121212');
  stroke('#ffffff');
  square(noseX,noseY,difference);
}
function modelLoaded()
{
  console.log('poseNet is initialized');
}
function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX= " +noseX+" noseY= " +noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWristX= " +leftWristX+" rightWristX= " +rightWristX+" differnt= "+difference);
  }
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
LeftWristX=0;
