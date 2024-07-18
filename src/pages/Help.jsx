import React from 'react';
import '../styles/help.css';
import img1 from '../assests/airbnb-help/img1.jpg';
import img2 from '../assests/airbnb-help/img2.jpg';
import img3 from '../assests/airbnb-help/img3.jpg';

import image1 from '../assests/airbnb-help/image1.png';
import image2 from '../assests/airbnb-help/image2.png';
import { Link } from 'react-router-dom';

const helpItems = [
  { id: 1, photo: img1, title: 'Getting started with Airbnb for Work' },
  { id: 2, photo: img2, title: 'Using your desktop' },
  { id: 3, photo: img3, title: 'How booking and reservations work' },
  { id: 4, photo: img2, title: 'Help with billing' }
];

const Help = () => {
  return (
    <div className='helppage'>
      <div className="helpwrap">
        <div className="hepbanner">
        <div className="heading">
        <h2>Guides for travel admins</h2>
      
        </div>
          <div className="admins">
            {helpItems.map(item => (
              <div key={item.id} className="image">
                <div className="img">
                  <img src={item.photo} alt='pics' height={250} width={250} />
                </div>
                <h5 className='imghead'>{item.title}</h5>
              </div>
            ))}
          </div>

           <div className="last">
          <div className="lastwrap">
          <div className="banheader"> <h2>Explore more</h2></div>
            <div className="lastban">
            <div className="lastimg1">
              <div className="limg">
                <img src={image1} alt=""  height={200} width={350}/></div>
            <div className="ltittle"> <p>Lorem ipsum dolor sit amet.</p></div>
            </div>
            <div className="lastimg2">
              <div className="limg">
                <img src={image2} alt=""  height={200} width={350}/></div>
            <div className="ltittle"> <p>Lorem ipsum dolor sit amet.</p></div>
            </div>
               <div className="cont">
                <div className="conthead">
                <h3>Need to get in touch?</h3>
                <p>We’ll start with some questions and get you to the right place.</p>
                <button className='lastbtn'>Contact us</button>
                <p>You can also <Link className='links'>give us feedback.</Link></p>
                </div>
               </div>
            </div> 
            </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Help;

