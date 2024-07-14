import React from 'react';
import { footerData } from '../../ApiData/ProductDetails/FooterOptions';
import { Options } from '../../common/Options';
import './Footer.css';
import FooterBottom from './FooterBottom';
export default function Footer() {

  return (
    <div className='footerContainer'>
      <div className='footer'>
        {
          footerData?.map(item => 
            <div>
              <h3>{item.title}</h3>
              <Options options={item.options} containerClass={"footerOptions"} hyperLinkClass={"hyperlink"} />
            </div>
          )
        }
      </div>
      <FooterBottom />
    </div>
  )
}
