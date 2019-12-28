chrome.tabs.query({active: true, currentWindow: true}, (message) => {
  generateQR(message)
})

var generateQR = (message) => {
  if (message[0].url) {
    console.log(JSON.parse(JSON.stringify(message[0].url)))
    let qrCodeElement = document.getElementById("qrcode");

    var qrForUrl = new QRCode(qrCodeElement, message[0].url);
  } else {
    console.log("Error: No URL yet")
  }
};
