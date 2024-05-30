import { useState } from "react";

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather";
const MyAPIkey = "9055fb4826563eac25a47e211073a627"; //Beckie's API key

export const Weather = () => {
  const [city, setCity] = useState("Sydney,Australia");
  return (
    <div>
      <p>Weather component</p>
    </div>
  );
};
