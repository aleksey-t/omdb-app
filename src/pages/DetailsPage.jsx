import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class DetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header appName="OMDB App" />
        <h2>Details Page</h2>
      </>
    );
  }
}

export default DetailsPage;
