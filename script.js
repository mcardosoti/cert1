const video = document.getElementById('webcam');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const constraints = { video: true };

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.error('Erro ao acessar a webcam: ', error);
    });

captureButton.addEventListener('click', function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    photo.src = canvas.toDataURL('image/png');
});
