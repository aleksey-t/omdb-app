import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: "Open IMDB App",
    };
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="details" element={<DetailsPage />} />
      </Routes>
    );
  }
}

export default App;
