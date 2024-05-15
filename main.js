noseX = 0;
noseY = 0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    p = ml5.poseNet(video, modelloaded);
    p.on('pose', gotposes);
}

function draw() {
   image(video, 0, 0, 400, 300);
   //fill(255,0,0);
   //stroke(255,0,0);
   //circle(noseX,noseY,20);
   image(clown_nose,noseX,noseY,30,30);
}

function take() {
    save('my_img.png');
}

function modelloaded() {
    console.log("Working");
}

function gotposes(results) {
    if(results.length>0)
    {
        noseX = results[0].pose.nose.x + 40;
        noseY = results[0].pose.nose.y - 5;
        console.log(results);
        console.log("x="+noseX);
        console.log("y="+noseY);
    }
}