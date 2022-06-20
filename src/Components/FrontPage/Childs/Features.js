import React from 'react';
import orderManagementImg from '../../../Assets/images/Order-Management.png';
import webHostingImg from '../../../Assets/images/Web-Hosting.png';
import powerfulAnalyticsImg from '../../../Assets/images/Analytics.png';
import customerRetentionImg from '../../../Assets/images/Customer-Retention.png';
import marketingPromotionImg from '../../../Assets/images/Marketing.png';
import prioritySupportImg from '../../../Assets/images/Support.png';

const Features = () => {
  return (
    <>
      <div id='firstPage-features' className='frontPage-features'>
        <h1>
          All the features you need to accelerate your online business, and more
        </h1>
        <div className='frontPage-features-main'>
          <div className='frontPage-features-mainSec1'>
            <div className='frontPage-features-orderManagement'>
              <img src={orderManagementImg} alt='' />
              <p>Order Management</p>
            </div>
            <div className='frontPage-features-webHosting'>
              <img src={webHostingImg} alt='' />
              <p>Web Hosting</p>
            </div>
            <div className='frontPage-features-powerfulAnalytics'>
              <img src={powerfulAnalyticsImg} alt='' />
              <p>Powerful Analytics</p>
            </div>
          </div>
          <div className='frontPage-features-mainSec2'>
            <div className='frontPage-features-customerRetention'>
              <img src={customerRetentionImg} alt='' />
              <p>Customer Retention</p>
            </div>
            <div className='frontPage-features-marketingPromotion'>
              <img src={marketingPromotionImg} alt='' />
              <p>Marketing & Promotion</p>
            </div>
            <div className='frontPage-features-prioritySupport'>
              <img src={prioritySupportImg} alt='' />
              <p>Priority Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
