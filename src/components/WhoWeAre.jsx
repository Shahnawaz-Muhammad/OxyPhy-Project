import React, { Component } from 'react';

class WhoWeAre extends Component {
  state = {};
  render() {
    return (
      <section className='who-we-are'>
        <div className='container'>
          <div className='row al-center'>
            <div className='col-lg-6 who-we-are-img-box'>
              <img
                src='images/who-we-are.jpg'
                alt=''
                className='img-fluid pr-5 who-we-are-img'
              />
            </div>
            <div className='col-lg-6'>
              <div className='who-we-are-box pl-5'>
                <h6 className='who-we-are-box__sm-heading'>Who we are</h6>
                <h1 className='who-we-are-box__heading'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </h1>
                <p className='who-we-are-box__desc'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloribus, repellat quibusdam. Possimus incidunt qui quis
                  aperiam esse debitis necessitatibus odio aliquam, dolore
                  tenetur laborum facere voluptatum labore voluptate repudiandae
                  assumenda.
                </p>
                <a href='#' className='who-we-are-box__link'>
                  Learn About Us
                  <div className='who-we-are-box__design'></div>
                </a>
              </div>
            </div>
          </div>
          <div className='t-plan'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='t-plan-box'>
                  <p className='t-plan-box__heading'>
                    Deputy's <b>Premium</b> plan.
                  </p>
                  <p className='t-plan-box__heading'>
                    Less work, better outcomes.
                  </p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='t-plan-box'>
                  <div className='wrapper t-plan-box-wrapper'>
                    <div className='t-plan-box1'>
                      <h1 className='t-plan-box__heading2'>$4.50</h1>
                    </div>
                    <div className='t-plan-box1'>
                      <p className='t-plan-box__desc'>
                        per user per month billed monthly USD (local taxes may
                        apply)
                      </p>
                    </div>
                  </div>
                  <a href='#' className='t-plan-box__link'>
                    See all Deputy plans
                    <div className='who-we-are-box__design'></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhoWeAre;
