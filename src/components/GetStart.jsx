import React, { Component } from 'react';

class GetStart extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.state = {
      workEmail: '',
      name: '',
    };
  }

  render() {
    return (
      <section className='get-start'>
        <div className='container'>
          <h1 className='get-start__heading'>
            Get started in less time than a coffee break. <br />
            We’re here to make it easy.
          </h1>
          <form action='' className='get-start-form'>
            <div className='row'>
              <div className='col-md-4'>
                <input
                  type='email'
                  className='form-control get-start-input'
                  value={this.state.workEmail}
                  placeholder='Work Email'
                  required
                />
              </div>
              <div className='col-md-4'>
                <input
                  type='text'
                  className='form-control get-start-input'
                  value={this.state.name}
                  placeholder='Name'
                  required
                />
              </div>
              <div className='col-md-4'>
                <button
                  type='submit'
                  className=' form-control get-start-input btn btn-blue ml-auto'
                >
                  Try Tack-It for free
                </button>
              </div>
            </div>
          </form>
          <img
            src='images/homepage-bottom-characters.png'
            alt=''
            className='img-fluid'
          />
        </div>
      </section>
    );
  }
}

export default GetStart;
