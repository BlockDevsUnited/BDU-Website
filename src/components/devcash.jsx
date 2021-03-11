import React, { Component } from 'react'

export class Devcash extends Component {
  render() {
    return (
      <div id="devcash">
        <div className="container">
         <div className="card about-text section-title">
              <h2 className="text-center">What is DevCash?</h2>
              <img src="img/DevcashLogo-Vertical-Black-256w.png" className="img-responsive" alt="devcash-logo" />
              <div class="card-body">
              <h4 class="card-title">Devcash is an ERC20 token on Ethereum.</h4>
              </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><p><strong>Contract Address:</strong> 0x0fca8fdb0fb115a33baadec6e7a141ffc1bc7d5a</p></li>
              <li class="list-group-item"><p><strong>xDai Contract Address:</strong> 0x248e081e3c9e738d7c1ded5d471069dcf4fd9b15</p></li>
              <li class="list-group-item"><strong>Name</strong>: Devcash</li>
              <li class="list-group-item"><strong>Symbol</strong>: DCASH</li>
              <li class="list-group-item"><strong>Decimals</strong>: 8</li>
            </ul>
           <div class="card-body">
            <h4>Scalability</h4>
           </div>
           <ul class="list-group list-group-flush">
             <li class="list-group-item"><strong>High gas fees on Ethereum mean the majority of devcash transactions are far too expensive to carry out on Ethereum Mainnet. Therefore we have set up Devcash and Devcash apps on Layer 2 networks.</strong></li>
             <li class="list-group-item">✓ Devcash has been bridged to xDAI STAKE using the xDAI omni bridge </li>
             <li class="list-group-item">✓ The Devcash bounty platform has been deployed on xdai</li>
           </ul>
        </div>
        </div>
      </div>

    )
  }
}

export default Devcash;
