import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                  <div>
                    <img className="logo" src="./img/bdu_written.png" alt=""/>
                  </div>
            
                    <span></span>
                  </h1>
                  <div>
                    <img src="./img/about.png" alt=""/>
                  </div>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#about"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "}
                  <a
                    href="https://docs.google.com/document/d/1sfbVBag7XI0dN3Wz-gMWJzAjse8KgJLZ71XtHEGk5Yk/edit"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Litepaper
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
