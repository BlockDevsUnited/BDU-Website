import React, { Component } from 'react'

export class Devcash extends Component {
  render() {
    return (
      <div id="devcash">
        <div className="container">
          <div className="about-text section-title">
            <div className="text-center">
              <h2>What is DevCash?</h2>
              <p></p>
              <h4>Devcash is an ERC20 token on Ethereum.</h4>
              {/* Col 3*/}
              <p></p>
              <div className="col-xs-2 col-md-2"> <img src="img/DevcashLogo-Vertical-Black-256w.png" className="img-responsive" alt="devcash-logo" /></div>
            </div>
            {/* Row 1*/}
            <div className="row">
              {/* TODO: Abstract text to data.json */}

              {/* Col 1*/}
              <div className="col-xs-3 col-md-6">
                <p><strong>Contract Address:</strong> 0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a</p>
                <p><strong>xDai Contract Address:</strong> 0x248e081e3c9e738d7c1ded5d471069dcf4fd9b15</p>
              </div>

              {/* Col 2*/}
              <div className="col-xs-3 col-md-6">
                <ul>
                  <strong>Name</strong>: Devcash
                </ul>
                <ul>
                  <strong>Symbol</strong>: DCASH
                </ul>
                <ul>
                  <strong>Decimals</strong>: 8
                </ul>
              </div>
            </div>


            {/* Row 2*/}
            <div className="row">
              <div className="about-text">
                <p></p>
                <h3>Scalability</h3>
                <p> High gas fees on Ethereum mean the majority of devcash transactions are far too expensive to carry out on Ethereum Mainnet. Therefore we have set up Devcash and Devcash apps on Layer 2 networks. </p>
                <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>✓ Devcash has been bridged to xDAI STAKE using the xDAI omni bridge </li>
                    <li>✓ The Devcash bounty platform has been deployed on xdai</li>
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

export default Devcash;
