import React, { Component } from 'react';

class Banner extends Component {
  state = {};
  render() {
    return (
      <>
        <section className='banner'>
          <div className='container'>
            <div className='banner-wrapper wrapper al-center jst-center'>
              <div className='banner-content'>
                <h1 className='banner-content__heading'>
                  Shift Content Simplified
                </h1>
                <div className='banner-content__line'></div>
                <p className='banner-content__desc'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Explicabo
                </p>
                <div className='banner-content-wrapper wrapper al-center jst-center'>
                  <a
                    href='#'
                    className='button banner-content-btn banner-content-btn1'
                  >
                    Try Track It free
                  </a>
                  <a
                    href='#'
                    className='button banner-content-btn banner-content-btn2'
                  >
                    See Pricing
                  </a>
                </div>
                <p className='banner-content__sm-desc'>
                  Up to 31 days, 24/7 support, no credit card required.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- banner end--> */}
        <section className='banner-overlay'>
          <div className='container'>
            <img
              src='images/banner-overlay.png'
              alt=''
              className='banner-overlay__img'
            />
          </div>
        </section>
      </>
    );
  }
}

export default Banner;
