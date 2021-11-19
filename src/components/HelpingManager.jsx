import React, { Component } from 'react';
import { HelpingManagerItems } from './HelpingManagerItems';

class HelpingManager extends Component {
  state = {};
  render() {
    return (
      <section className='helping-manager'>
        <div className='container'>
          <h1 className='helping-manager__heading'>
            Helping managers and staff do their best work
          </h1>
          <div className='row'>
            {HelpingManagerItems.map((item, index) => {
              return (
                <div className='col-lg-4 col-md-6 mb-4 helping-manager-box__col'>
                  <a
                    class='helping-manager-box wrapper al-center jst-center'
                    href='#'
                  >
                    <img
                      src={item.imgUrl}
                      className='helping-manager-box__img0'
                      alt=''
                    />
                    <h1 className='helping-manager-box__heading'>
                      {item.title}
                    </h1>
                    <p className='helping-manager-box__desc'>{item.desc}</p>
                    <img
                      src={item.arrowImg}
                      className='helping-manager-box__arrow'
                      alt=''
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default HelpingManager;
