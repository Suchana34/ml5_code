let video
let posenet
let pose

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO)
  video.hide()
  posenet = ml5.poseNet(video, modelLoaded)
  posenet.on('pose', gotPoses) //event handler
}

function gotPoses(poses){
  //console.log(poses)
  if(poses.length > 0){
    pose = poses[0].pose
  }
}

function modelLoaded(){
  console.log("posenet ready")
}

function draw(){
  image(video,0,0)
  
  if(pose){
    for(let i =0; i<pose.keypoints.length; i++){
      let x = pose.keypoints[i].position.x
      let y = pose.keypoints[i].position.y

      fill(0,255,0)
      ellipse(x,y,20)
    }
  }
}
