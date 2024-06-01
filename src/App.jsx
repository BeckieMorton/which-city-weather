import { BrowserRouter, Routes } from "react-router-dom";

import routes from "./routes/routes";

import "./App.css";

function App() {
  return (
    <div className="main-container">
      <BrowserRouter>
        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
