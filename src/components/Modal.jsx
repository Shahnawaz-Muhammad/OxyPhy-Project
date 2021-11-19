import React, { Component } from 'react';

class Modal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className='modal fade'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <button
                button
                type='button'
                className='close'
                data-dismiss='modal'
              >
                &times;
              </button>
              <div className='modal-header mb-3'>
                <a className='logo-link mb-3 ' href='#' target='_blank'>
                  <img src='images/logo.png' alt='' />
                </a>
                <div className='modal-header-box'>
                  <h4 className='modal-title'>Try Track-it for free</h4>
                  <h6 className='modal-title'>
                    Get started in minutes, no credit card required
                  </h6>
                </div>
              </div>
              <div className='modal-body'>
                <form action='' className='form'>
                  <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='Work Email'
                  />
                  <input
                    type='text'
                    className='form-control mb-3'
                    placeholder='Work Email'
                  />
                  <input
                    type='checkbox'
                    className='form-check-input mb-3'
                    id='exampleCheck1'
                  />
                  <label className='form-check-label' for='exampleCheck1 mb-3'>
                    I agree to the terms of the <b> Subscription Agreement </b>{' '}
                    & <b> Privacy Policy</b>
                  </label>
                  <a href='#' className='btn btn-blue form-control mb-3'>
                    Get Started
                  </a>
                </form>
              </div>
              <div className='modal-footer'>
                <p className='para centet mb-3'>OR SIGN UP WITH:</p>
                <div className='wrapper al-center'>
                  <a href='@' className='wrapper s-media-wrapper al-center'>
                    <img src='images/google.png' alt='' className='icn' />
                    GOOGLE
                  </a>
                  <a href='@' className='wrapper s-media-wrapper'>
                    <img src='images/FACEBOOK.png' alt='' className='icn' />
                    FACEBOOK
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
