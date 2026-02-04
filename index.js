setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  newYorkDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  buenosAiresDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  buenosAiresTimeElement.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  romeDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let romeTimeElement = romeElement.querySelector(".time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  cairoDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let cairoTimeElement = cairoElement.querySelector(".time");
  cairoTimeElement.innerHTML = moment().tz("Africa/Cairo").format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let damascusElement = document.querySelector("#damascus");
  let damascusDateElement = damascusElement.querySelector(".date");
  damascusDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let damascusTimeElement = damascusElement.querySelector(".time");
  damascusTimeElement.innerHTML = moment()
    .tz("Asia/Damascus")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  beijingDateElement.innerHTML = moment().format("dddd, MMMM Do, YYYY");
  let beijingTimeElement = beijingElement.querySelector(".time");
  beijingTimeElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("dddd, MMMM Do, YYYY");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("HH:mm:ss");
}, 1000);
