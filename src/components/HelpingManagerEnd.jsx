import React, { Component } from 'react';
import { HelpingManager2nd } from './HelpingManagerItems';

class HelpingManagerEnd extends Component {
  state = {};
  render() {
    return (
      <>
        <section className='helping-manager'>
          <div className='container'>
            <div className='row mb-3'>
              {HelpingManager2nd.map((item, index) => {
                return (
                  <div className='col-lg-4 col-md-6 mb-4'>
                    <a
                      className='helping-manager-box helping-manager-box2 wrapper al-center'
                      href='#'
                    >
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className='helping-manager-box__img'
                      />
                      <h1 className='helping-manager-box__heading'>
                        {item.title}
                        <div className='helping-manager-box2__line'></div>
                      </h1>
                    </a>
                  </div>
                );
              })}
            </div>
            <a href='#' className='product_tour'>
              Take our full product tour
              <div className='product_tour-design'></div>
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default HelpingManagerEnd;
