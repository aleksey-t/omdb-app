import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header appName="OMDB App" />
        <h2>Main Page</h2>
        <nav>
          <Link to="/details">Details page</Link>
        </nav>
      </>
    );
  }
}

export default HomePage;
