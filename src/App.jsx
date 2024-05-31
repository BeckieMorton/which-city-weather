import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Weather } from "./components/Weather/Weather";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
