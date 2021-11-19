import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  handleSubmit = (e) => {
    console.log(JSON.stringify(this.state));
    e.preventDefault();
  };
  render() {
    return (
      <>
        <div className='login'>
          <div className='wrapper'>
            <div className='login-right'>
              <div className='login-slider'>
                <div className='login-slider__box'>
                  <h1 className='login-slider__heading'>
                    Lorem ipsum dolor sit amet consectetur..
                  </h1>
                  <img
                    src='images/once-login.webp'
                    alt=''
                    className='login-slider__img'
                  />
                  <p className='login-slider__para'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <NavLink to='/' className='login-slider__link'>
                    Upskills Now
                  </NavLink>
                </div>
              </div>
            </div>
            <div className='login-left'>
              <form className='form' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label
                    htmlFor='exampleInputEmail1'
                    className='input-feild-text wrapper al-center jst-btw'
                  >
                    <b>Username or Email</b>
                    <NavLink to='/' className='input-link'>
                      Not verified?
                    </NavLink>
                  </label>
                  <input
                    type='email'
                    className='form-control input-feild'
                    name='email'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className='form-group'>
                  <label
                    htmlFor='exampleInputPassword1'
                    className='input-feild-text wrapper al-center jst-btw'
                  >
                    <b>Password</b>
                    <NavLink to='/' className='input-link'>
                      Forgot Password?
                    </NavLink>
                  </label>
                  <input
                    type='password'
                    className='form-control input-feild'
                    name='password'
                    id='exampleInputPassword1'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <button type='submit' className='btn btn-blue input-feild'>
                  Login
                </button>
              </form>
              <div className='wrapper or-login al-center'>
                <div className='line'></div>
                <div className='line-text'>or login with</div>
                <div className='line'></div>
              </div>
              <div className='wrapper media-login al-center jst-center'>
                <a href='#' className='btn media-btn'>
                  <i className='fa fa-facebook-circle'></i>
                  Facebook
                </a>
              </div>
              <div className='wrapper media-login al-center jst-center'>
                <a href='#' className='btn media-btn'>
                  <i className='fa fa-facebook-circle'></i>
                  Google
                </a>
              </div>
              <div className='wrapper media-login al-center jst-center'>
                <a href='#' className='btn media-btn'>
                  <i className='fa fa-facebook-circle'></i>
                  Apple
                </a>
              </div>
              <div className='wrapper media-login al-center jst-center'>
                <a href='index.html' className='btn btn-blue'>
                  <i className='fa fa-facebook-circle'></i>
                  Start Yout Free Trail
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
