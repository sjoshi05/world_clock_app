function updateTime() {
  let sanFranciscoElement = document.querySelector("#san-francisco");

  if (sanFranciscoElement) {
    let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
    sanFranciscoDateElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("MMMM D[,] YYYY");
    let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
    sanFranciscoTimeElement.innerHTML = moment()
      .tz("America/Los_Angeles")
      .format("h[:]mm[:]ss [<small>]A[</small>]");
  }

  let madridElement = document.querySelector("#madrid");

  if (madridElement) {
    let madridDateElement = madridElement.querySelector(".date");
    madridDateElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("MMMM D[,] YYYY");
    let madridTimeElement = madridElement.querySelector(".time");
    madridTimeElement.innerHTML = moment()
      .tz("Europe/Madrid")
      .format("h[:]mm[:]ss [<small>]A[</small>]");
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM D[,] YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h[:]mm[:]ss [<small>]A[</small>]"
            )}</div>
          </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
