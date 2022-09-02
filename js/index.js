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

  // making it possible for users to press the clear button and having their input cleared
  const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
    // const data = (document.querySelector("main").innerHTML = "");
    location.reload();
    reset();
  };

  const clearBtn = document.getElementById("clear-btn");
  clearBtn.addEventListener("click", clearInput);

  const displayData = (weather) => {
    // Returning a supplied numeric expression rounded to the nearest integer in °C and calling a function to showcase the day,month and year.
    temp.innerHTML = `${Math.round(weather.main.temp)}°C`;
    description.innerText = `${weather.weather[0].description}`;
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let now = new Date();
    date.innerText = dateBuilder(now);
  };

  //  creating a function that will display the day,month and year
  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
});
