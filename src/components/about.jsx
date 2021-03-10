import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
       <div className="container image-grid">
          <div className="row">
            <div className="col-md-3 bg-1"><p></p></div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <div>
                <h2>Ab<img src="img/about.png"  alt="bdu-badge" />ut us</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                </div>
                <div>
                <h3>Governance</h3>
                <p>{this.props.data ? this.props.data.governance : 'loading...'}</p>
                </div>
                <div>
                <h3>Mission</h3>
                <p>{this.props.data ? this.props.data.mission : 'loading...'}</p>
                </div>
              </div>
            </div>
           <div className="col-md-3 bg-1"><p></p></div>
        </div>
     </div>
    

     <div id="goals">
        <div className="container">
          <div className="row">
            <div className="about-text">
              <h3>The goals of BDU and it’s member developer communities are:</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
    )
  }
}

export default about;
