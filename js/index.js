document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector(".button");
    let inputvalue = document.querySelector(".search-box");
    let temp = document.querySelector(".current .temp");
    let description = document.querySelector(".current .weather");
    let city = document.querySelector(".location .city");
    let date = document.querySelector(".location .date");
    // adding some functionality to the search-button
    button.addEventListener("click", function () {
        fetch(
          /* when the button is clicked it fetches data from the public API about the weather and then returns 
          some input but if the location is invalid it will return an error message */
          `https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=03a094de2fbed757402784c8ab602833`
        )
          .then((response) => response.json())
          .then(displayData)
          .catch((err) => alert("Please Enter Correct City Name"));
      });

      // making it possible for a user to press the 'enter' key and get the weather results
  inputvalue.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("button").click();
    }
  });