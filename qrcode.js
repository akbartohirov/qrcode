const qrcode = require("qrcode");

qrcode
  .toDataURL("http://138.68.68.254/aydin-tr-cert/td_UQSddq=-Dad2.pdf")
  .then((url) => {
    console.log(url);
  })
  .catch((err) => {
    console.error(err);
  });
