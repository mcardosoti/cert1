// Obtém acesso à câmera do usuário
const camera = new MediaDevices().getUserMedia({ video: true });

// Tira uma foto
camera.then((stream) => {
  const canvas = document.createElement("canvas");
  canvas.width = stream.videoWidth;
  canvas.height = stream.videoHeight;

  const context = canvas.getContext("2d");
  context.drawImage(stream, 0, 0);

  // Armazena a foto no servidor
  const blob = canvas.toBlob();
  const url = window.URL.createObjectURL(blob);

  // Envia a foto para o servidor
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/upload");
  xhr.setRequestHeader("Content-Type", "image/jpeg");
  xhr.send(blob);

  // Remove a foto da memória
  stream.dispose();
});

function takePhoto() {
  // Solicita a permissão para a câmera
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    // Tira a foto
    camera.then((stream) => {
      const canvas = document.createElement("canvas");
      canvas.width = stream.videoWidth;
      canvas.height = stream.videoHeight;

      const context = canvas.getContext("2d");
      context.drawImage(stream, 0, 0);

      // Armazena a foto no servidor
      const blob = canvas.toBlob();
      const url = window.URL.createObjectURL(blob);

      // Envia a foto para o servidor
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/api/upload");
      xhr.setRequestHeader("Content-Type", "image/jpeg");
      xhr.send(blob);

      // Remove a foto da memória
      stream.dispose();
    });
  });
}
