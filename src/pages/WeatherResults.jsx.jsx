import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Weather } from "../components/Weather/Weather";
import { Search } from "../components/Search/Search";

export const WeatherResults = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  if (!weatherData) {
    return <div>No weather data available</div>;
  }

  return (
    <div>
      <Header />
      <Weather weatherData={weatherData} />
      <Search />
      <Footer />
    </div>
  );
};
