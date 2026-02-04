setInterval(function () {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  newYorkDateElement.innerHTML = moment()
    .tz("America/New_York")
    .format("dddd, MMMM Do, YYYY");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  newYorkTimeElement.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  buenosAiresDateElement.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("dddd, MMMM Do, YYYY");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
  buenosAiresTimeElement.innerHTML = moment()
    .tz("America/Argentina/Buenos_Aires")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  romeDateElement.innerHTML = moment()
    .tz("Europe/Rome")
    .format("dddd, MMMM Do, YYYY");
  let romeTimeElement = romeElement.querySelector(".time");
  romeTimeElement.innerHTML = moment().tz("Europe/Rome").format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let cairoElement = document.querySelector("#cairo");
  let cairoDateElement = cairoElement.querySelector(".date");
  cairoDateElement.innerHTML = moment()
    .tz("Africa/Cairo")
    .format("dddd, MMMM Do, YYYY");
  let cairoTimeElement = cairoElement.querySelector(".time");
  cairoTimeElement.innerHTML = moment().tz("Africa/Cairo").format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let damascusElement = document.querySelector("#damascus");
  let damascusDateElement = damascusElement.querySelector(".date");
  damascusDateElement.innerHTML = moment()
    .tz("Asia/Damascus")
    .format("dddd, MMMM Do, YYYY");
  let damascusTimeElement = damascusElement.querySelector(".time");
  damascusTimeElement.innerHTML = moment()
    .tz("Asia/Damascus")
    .format("HH:mm:ss");
}, 1000);

setInterval(function () {
  let beijingElement = document.querySelector("#beijing");
  let beijingDateElement = beijingElement.querySelector(".date");
  beijingDateElement.innerHTML = moment()
    .tz("Asia/Shanghai")
    .format("dddd, MMMM Do, YYYY");
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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div> 
    <div class="time">${cityTime.format("HH:mm:ss")}</div>
  </div>
  <br>
  <a href="index.html"> ⬅️ Go back</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
