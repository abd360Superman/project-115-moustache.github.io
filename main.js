function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, model_load_hogaya);
    poseNet.on('pose', pose_la);
}

function pose_la(results) {
    if(results.length > 0) {
        console.log(results);
        console.log('Nose x = ' + results[0].pose.nose.x);
        console.log('Nose y = ' + results[0].pose.nose.y);
    }
}

function model_load_hogaya() {
    console.log('Model Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function snapshot_le() {
    save('myFilterImage.png');
}