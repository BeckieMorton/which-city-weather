import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Weather } from "../components/Weather/Weather";
import { Search } from "../components/Search/Search";
import { NoData } from "../components/NoData/NoData";

export const WeatherResults = () => {
  const location = useLocation();
  const weatherData = location.state?.weatherData;

  console.log(`in the weatherresults component:`, weatherData);

  const nodata = !weatherData || weatherData.message === "city not found";

  console.log(nodata);
  return (
    <div>
      {nodata ? (
        <NoData />
      ) : (
        <>
          <Header />
          <Weather weatherData={weatherData} />
          <Search />
          <Footer />
        </>
      )}
    </div>
  );
};
