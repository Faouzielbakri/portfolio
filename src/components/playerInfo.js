import React, { Component } from "react";
import "./playerInfo.css";

export default class PlayerInfo extends Component {
  render() {
    return (
      <div>
        <h2 className="playername textyellow textspaced">FAOUZI ELBAKRI</h2>
        <hr className="horizontalbreak mt-0 mb-2 mr-0 ml-0" />
        <h5 className="playerbio textblue textspaced">Software Developer </h5>
        <h5 className="playerbio textblue textspaced">First Player</h5>
      </div>
    );
  }
}

/* col-lg-9 col-md-10 col-sm-12 */
