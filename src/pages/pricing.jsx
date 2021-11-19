import React, { Component } from 'react';
import PricingDetails from '../components/PricingDetails';

class Pricing extends Component {
  state = {};
  render() {
    return (
      <>
        <div class='sub-banner'>
          <div class='container'>
            <h6 class='sub-banner__subheading'>HOME/PRICING</h6>
            <h1 class='sub-banner__heading'>
              Try all features for free upto 31 days
            </h1>
            <h4 class='sub-banner__heading-decs'>
              Get startted in mintues no credit card need 247 support
            </h4>
            <a href='#' class='btn btn-blue sub-banner-btn'>
              Start my free trail
            </a>
          </div>
        </div>
        <PricingDetails />
      </>
    );
  }
}

export default Pricing;
