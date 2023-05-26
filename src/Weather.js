import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [documentation, setDocumentation] = useState("");
  let [temperature, setTemperature] = useState("");
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=cb286bad3607984b41ed10c8de5cf00e`;
    axios.get(url).then(showTemperature);
    if (city.length > 0) {
      return setDocumentation(`It is ${Math.round(temperature)}°C in ${city}`);
    } else {
      alert("Enter a city");
    }
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <h2>This is React Weather</h2>
      <form onSubmit={handleSearch} className="weatherForm">
        <input type="text" placeholder="Enter a city" onChange={changeCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{documentation}</p>
    </div>
  );
}
