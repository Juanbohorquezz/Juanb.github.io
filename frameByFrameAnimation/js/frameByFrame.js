let frames = [
    "assets/images/Asset19.png",
    "assets/images/Asset20.png",
    "assets/images/Asset21.png",
    "assets/images/Asset22.png",
    "assets/images/Asset23.png",
    "assets/images/Asset24.png",
    "assets/images/Asset25.png",
    "assets/images/Asset26.png",
    "assets/images/Asset27.png"
];

const heart = document.getElementById("heart");

let frameIndex = 0;

function animate() {
    heart.src = frames[frameIndex];
    frameIndex++;
    if (frameIndex >=  frames.length) {
        frameIndex = 0;
    }
}

setInterval(animate,100);


//camera

let cameras = [
    "assets/images/Camera.jpg",
    "assets/images/Camera2.jpg",
    "assets/images/Camera3.jpg",
    "assets/images/Camera4.jpg",
    "assets/images/Camera5.jpg",
    "assets/images/Camera6.jpg",
    "assets/images/Camera7.jpg",
    "assets/images/Camera8.jpg",
    "assets/images/Camera9.jpg",
    "assets/images/Camera10.jpg",
    "assets/images/Camera11.jpg",
    "assets/images/Camera12.jpg",
    "assets/images/Camera13.jpg",
    "assets/images/Camera14.jpg",
    "assets/images/Camera15.jpg",
    "assets/images/Camera16.jpg",
    "assets/images/Camera18.jpg",
    "assets/images/Camera19.jpg",
    "assets/images/Camera20.jpg",
    "assets/images/Camera21.jpg",
    "assets/images/Camera22.jpg",
    "assets/images/Camera23.jpg",
    "assets/images/Camera24.jpg",
    "assets/images/Camera25.jpg",
    "assets/images/Camera26.jpg",
    "assets/images/Camera27.jpg",
    "assets/images/Camera28.jpg",
    "assets/images/Camera29.jpg",
    "assets/images/Camera30.jpg",
    "assets/images/Camera31.jpg",
    "assets/images/Camera32.jpg",
    "assets/images/Camera33.jpg",
    "assets/images/Camera34.jpg",
    "assets/images/Camera35.jpg",
    "assets/images/Camera36.jpg",
    "assets/images/Camera37.jpg",
    "assets/images/Camera38.jpg",
    "assets/images/Camera39.jpg",
    "assets/images/Camera40.jpg",
    "assets/images/Camera41.jpg",
    "assets/images/Camera42.jpg",
    "assets/images/Camera43.jpg",
    "assets/images/Camera44.jpg",
    "assets/images/Camera45.jpg",
    "assets/images/Camera46.jpg",
    "assets/images/Camera47.jpg",
    "assets/images/Camera48.jpg",
    "assets/images/Camera49.jpg",
    "assets/images/Camera50.jpg",
    "assets/images/Camera51.jpg",
    "assets/images/Camera52.jpg",
    "assets/images/Camera53.jpg",
    "assets/images/Camera54.jpg",
    "assets/images/Camera55.jpg",
    "assets/images/Camera56.jpg",
    "assets/images/Camera57.jpg",
    "assets/images/Camera58.jpg",
    "assets/images/Camera59.jpg",
    "assets/images/Camera60.jpg",
    "assets/images/Camera61.jpg",
    "assets/images/Camera62.jpg",
    "assets/images/Camera63.jpg",
    "assets/images/Camera64.jpg",
    "assets/images/Camera65.jpg",
    "assets/images/Camera66.jpg",
    "assets/images/Camera67.jpg",
    
    
    
];

const camera = document.getElementById("camera");

let cameraIndex = 0;

function cool() {
    camera.src = cameras[cameraIndex];
    cameraIndex++;
    if (cameraIndex >=  cameras.length) {
        cameraIndex = 0;
    }
}

setInterval(cool,100);