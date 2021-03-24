import React, { Component } from "react";
import "./connect.css";

export default class Connect extends Component {
  render() {
    return (
      <div className="col-12 row justify-content-center ml-0 mr-0 pl-0 pr-0">
        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">GitHub</h1>
          <a
            href="https://github.com/Faouzielbakri"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
            <span className="icon-github"></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Check out the source code for some cool projects!
          </p>
        </div>

        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">Email</h1>
          <a
            href="mailto:Faouzielbakri@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
            <span className="icon-mail_outline socialicon-large"></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Interested in working together? <br /> Reach out and let's connect
            today.
          </p>
        </div>

        <div className="col-lg-3 col-xs-12 socialbox text-center shadow-lg pt-5 mb-4 mr-3 ml-3">
          <h1 className="textpink textspaced">LinkedIn</h1>
          <a
            href="https://www.linkedin.com/in/faouzielbakri/"
            target="_blank"
            rel="noreferrer"
            className="socialicon-large"
          >
            <span className="icon-linkedin-square"></span>
          </a>
          <hr className="navbreak" />
          <p className="text-white raleway pt-4">
            Want to share networks and learn more? <br /> Reach out on LinkedIn.
          </p>
        </div>
      </div>
    );
  }
}
