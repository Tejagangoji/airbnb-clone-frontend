import React, { useState } from 'react'
import '../styles/airbnbit.css';
import img from '../assests/Host-1.webp';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; 
import img1 from '../assests/c.webp';
import { Link } from 'react-router-dom';

export default function Airbnbit() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };
  const qaData = [
    {
      question: 'Is my place right for Airbnb?',
      answer: 'Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, tree houses and more. Even a spare room can be a great place to stay.',
    },
    {
      question: 'Do I have to host all the time?',
      answer: 'Not at all – you control your calendar. You can host once a year, a few nights a month or more often.',
    },
    {
      question: 'How much should I interact with guests?',
      answer: 'It’s up to you. Some Hosts prefer to message guests only at key moments – like sending a short note when they check in – while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.',
    },
    {
      question: 'Any tips on being a great Airbnb Host?',
      answer: 'Getting the basics down goes a long way. Keep your place clean, respond to guests promptly and provide necessary amenities like fresh towels. Some Hosts like adding a personal touch such as putting out fresh flowers or sharing a list of local places to explore – but it’s not required.',
    },
    {
      question: 'What are Airbnb’s fees?',
      answer: 'Airbnb typically collects a flat service fee of 3% of the reservation subtotal when you get paid. We also collect a fee from guests when they book. In many areas Airbnb also collects and pays sales and tourism taxes automatically on your behalf.',
    },
  ];
  return (
    <div className='Homes'>

  <div className="page1">
      <div className="part1">
        <div className="part1head">
        <h2>Airbnb it.</h2>
        <h3>You could earn</h3>
        </div>
      </div>
      <div className="part2">Home</div>
  </div>
  
 <div className="page2">
    <h2 style={{fontWeight:"600"}}>Airbnb it easily with Airbnb Setup</h2>
    <div className="img" >
        <img src={img} alt="IMG" height={500} width={1000} />
    </div>
    <div className="imgcontent">
        <div className="cont1">
            <h5>One-to-one guidance from a Superhost</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p>
        </div>
        <div className="cont1">
            <h5>An experienced guest for your first booking</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p></div>
        <div className="cont1">
            <h5>Specialised support from Airbnb</h5>
            <p>
            We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest – by phone, video call or chat.
            </p></div>
        </div>  
    </div>

    <div className="page3">
    <div className="page3ban">
        <h1 style={{fontWeight:"bolder",fontSize:"3rem"}}>
       <span className="banhead">air</span><span>cover</span></h1>
       <small style={{marginLeft:"4rem"}}>for Hosts</small>
       </div>
       <div className="banheading"><h2>Airbnb it with top‑to‑bottom protection</h2></div>
   
    </div>
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th className='airbnb-head'></th>
            <th>Airbnb</th>
            <th>Competitors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="1" className="divider-row">
            <p className='tdhead'>Guest identity verification</p>
            </td>
            <td className="divider-row1"><FaCheck  className='checkmark'/></td>
            <td><FaCheck className='checkmark1' /></td>
          </tr>
          <tr>
            <td colSpan="3" className='spanrow'> Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.</td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
            <p className='tdhead'>Reservation screening</p>
            </td>
            <td><FaCheck  className='checkmark'/></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr>
            <td colSpan="3" className='spanrow'> Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.</td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
              <p className='tdhead'>$3m damage protection</p>
            </td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr>
            <td colSpan="3"  className='spanrow'> Our comprehensive verification system
              checks details such as name, address,
              government ID and more to confirm the identity
              of guests who book on Airbnb.</td>
          </tr>
          <tr className="dividerrow">
            <td>Auto & boat</td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr className="dividerrow">
            <td >Art & valuables</td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr className="dividerrow">
            <td>Pet damage</td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr className="dividerrow">
            <td>Income loss</td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr className="dividerrow">
            <td>Deep cleaning</td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
              <p className='tdhead'>$1m USD liability insurance</p>
            </td>
            <td><FaCheck className='checkmark' /></td>
            <td><FaCheck className='checkmark1' /></td>
          </tr>
          <tr>
            <td colSpan="3"  className='spanrow'> You’re protected in the rare event that a guest gets hurt or their belongings are damaged or stolen.</td>
          </tr>
          <tr>
            <td colSpan="1" className="divider-row">
              <p className='tdhead'>24-hour safety line</p>
            </td>
            <td><FaCheck className='checkmark' /></td>
            <td><ImCross  className='crossicon'/></td>
          </tr>
          <tr>
            <td colSpan="3"  className='spanrow'> If you ever feel unsafe, our app provides one-tap access to specially trained safety agents, day or night.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className='lasttr'>Comparison is based on public information and free offerings by top competitors as of 22/10. Find details and exclusions here.</p>
    <button className='leranbtn'>Learn more</button>

    <div className="page4">
      <div className="page4warp">
      <div className="Qshead">
        <h3>Your questions, answered</h3>
      </div>
      <div className="Qs">
        {qaData.map((item, index) => (
          <div key={index} className="question">
            <div className="question-header" onClick={() => toggleAnswer(index)}> 
              <h5>{item.question}</h5>
              {openIndex === index ? <IoIosArrowUp className={`icon ${openIndex === index ? 'open' : ''}`} /> : <IoIosArrowDown className={`icon ${openIndex === index ? 'open' : ''}`} />}
            </div>
            {openIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
   <div className="lastpage">
    <div className="lpagewrap">
   <div className="lpageban">
   <div className="page4img" >
      <img src={img1} alt="" height={250} width={500} />
    </div>
    <div className="lastcont">
      <h3>Still have questions?</h3>
      <p>Get answers from an experienced Superhost near you.</p>
      <button className='lastbtn'><Link  className='links'>Match with a Superhost</Link></button>
    </div>
    </div>
   </div>
   </div>

    </div>
  )
}