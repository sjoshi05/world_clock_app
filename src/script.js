function updateTime() {
  let sanFranciscoElement = document.querySelector("#san-francisco");
  let sanFranciscoDateElement = sanFranciscoElement.querySelector(".date");
  sanFranciscoDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM D[,] YYYY");
  let sanFranciscoTimeElement = sanFranciscoElement.querySelector(".time");
  sanFranciscoTimeElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("h[:]mm[:]ss [<small>]A[</small>]");

  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDateElement = lisbonElement.querySelector(".date");
  lisbonDateElement.innerHTML = moment()
    .tz("Europe/Lisbon")
    .format("MMMM D[,] YYYY");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  lisbonTimeElement.innerHTML = moment()
    .tz("Europe/Lisbon")
    .format("h[:]mm[:]ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
