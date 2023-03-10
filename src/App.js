import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./components/AllCountries/AllCountries";
import CountryInfo from "./components/CountryInfo/CountryInfo";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries darkMode={darkMode} />} />
          <Route
            path="/country/:countryName"
            element={<CountryInfo darkMode={darkMode} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
