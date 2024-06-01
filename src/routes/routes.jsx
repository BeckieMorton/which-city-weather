import { Route } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { WeatherResults } from "../pages/WeatherResults.jsx.jsx";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/weatherresults" element={<WeatherResults />} />
  </>
);

export default routes;
