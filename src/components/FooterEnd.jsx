import React, { Component } from 'react';

class FooterEnd extends Component {
  state = {};
  render() {
    return (
      <footer className='footer'>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row al-center'>
              <div className='col-md-9'>
                <ul className='footer-bottom-list wrapper al-center'>
                  <li className='footer-bottom-list__item mr-3'>
                    <a
                      href='#'
                      className='footer-bottom-list__link wrapper al-center jst-center'
                    >
                      <img
                        src='images/icon-filled-phone.svg'
                        alt=''
                        className='footer-bottom-list__img mr-2'
                      />
                      +1-855-633-7889
                    </a>
                  </li>
                  <li className='footer-bottom-list__item mr-3'>
                    <a
                      href='#'
                      className='footer-bottom-list__link wrapper al-center jst-center'
                    >
                      <img
                        src='images/icon-filled-calendar.svg'
                        alt=''
                        className='footer-bottom-list__img mr-2'
                      />
                      Book a Consultation
                    </a>
                  </li>
                  <li className='footer-bottom-list__item mr-3'>
                    <a
                      href='#'
                      className='footer-bottom-list__link wrapper al-center jst-center'
                    >
                      <img
                        src='images/icon-filled-location.svg'
                        alt=''
                        className='footer-bottom-list__img mr-2'
                      />
                      388 Market St, Suite 1300, San Francisco, CA 94111, USA
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-3'>
                <p className='footer-bottom-desc wrapper al-center'>
                  © 2021 Track-it. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterEnd;
