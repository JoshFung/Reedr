import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import ContentPage from "./components/ContentPage/ContentPage";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentPage />
    </div>
  );
}

export default App;
