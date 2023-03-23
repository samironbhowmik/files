const qr = require("qrcode");

let data = {
  name: "samiron",
  email: "samiron@gmail.com",
  location: "india"
};

let result = JSON.stringify(data);

qr.toFile("qr.jpg",result, function (error) {
    if (error) {
      return console.log(error);
    }
  });
