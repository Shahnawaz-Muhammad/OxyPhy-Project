import React, { Component } from 'react';
import { PricingList } from './PricingList';

class PricingDetails extends Component {
  render() {
    return (
      <>
        <section className='pricing'>
          <div className='container'>
            <div className='row pricing-row'>
              {PricingList.map((item, index) => {
                return (
                  <div className='col-md-3'>
                    <div className='p-box'>
                      <img
                        src={item.imgUrl}
                        alt={index}
                        className='p-box__img'
                      />
                      <h2 className='p-box__heading'>{item.title}</h2>
                      <p className='p-box__desc'>{item.description}</p>
                      <h1 className='p-box__pricing'>${item.price}</h1>
                      <p className='p-box__pricing-desc'>{item.det1}</p>
                      <p className='p-box__pricing-desc2'>No Annual plan</p>
                      <a href={item.url} className='btn p-box-btn'>
                        Start a Free Trial
                      </a>
                      <div className='p-box-wrapper wrapper al-center'>
                        <img
                          src={item.tickImg}
                          alt='tick'
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc'>{item.detail1}</p>
                      </div>
                      <div className='p-box-wrapper wrapper al-center'>
                        <img
                          src={item.tickImg}
                          alt=''
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc p-box-wrapper__desc-dissabled'>
                          {item.detail2}
                        </p>
                      </div>
                      <div className='p-box-wrapper wrapper al-center'>
                        <img
                          src={item.tickImg}
                          alt=''
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc p-box-wrapper__desc-dissabled'>
                          {item.detail3}
                        </p>
                      </div>
                      <div className='p-box-wrapper wrapper al-center'>
                        <img
                          src={item.tickImg}
                          alt=''
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc'>{item.detail4}</p>
                      </div>
                      <div className='p-box-wrapper wrapper al-center'>
                        <img
                          src={item.tickImg}
                          alt=''
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc'>{item.detail5}</p>
                      </div>
                      <div className='p-box-wrapper wrapper p-box-wrapper-last al-center'>
                        <img
                          src={item.tickImg}
                          alt=''
                          className='p-box-wrapper__img'
                        />
                        <p className='p-box-wrapper__desc'>{item.detail6}</p>
                      </div>
                      <a href='#' className='p-box__link'>
                        Learn More
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        ;
      </>
    );
  }
}

export default PricingDetails;
