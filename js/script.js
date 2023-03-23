const input = document.getElementById("input");
const grams = document.getElementById("gram")
const kilograms = document.getElementById("kilogram")
const ounces = document.getElementById("ounce")
var pounds;
input.addEventListener("input", (e) => {
  // console.log("clicked");
  pounds = e.target.value;
  //   console.log(pounds);
  grams.innerHTML = pounds/0.00220462
  kilograms.innerHTML = pounds/2.2046
  ounces.innerHTML = pounds*16
});
