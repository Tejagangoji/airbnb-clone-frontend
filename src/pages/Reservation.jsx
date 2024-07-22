import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import beachimg from '../assests/airbnb-help/residenceimg.avif';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import '../styles/reservation.css';
import GuestSelection from '../components/GuestSelection';

const Reservation = () => {
  const countryOptions = [
    "+91 (India)",
    "+1 (USA)",
    "+44 (UK)",
    "+86 (China)",
    "+81 (Japan)",
    "+49 (Germany)",
    "+33 (France)",
    "+34 (Spain)",
    "+39 (Italy)",
    "+7 (Russia)",
    "+61 (Australia)",
    "+82 (South Korea)",
    "+65 (Singapore)",
    "+52 (Mexico)",
    "+971 (UAE)"
  ];

  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const [calendarsVisible, setCalendarsVisible] = useState(false);
  const [selectedDates, setSelectedDates] = useState('');

  const openCalendar = () => {
    setCalendarVisible(true);
  };

  const opendCalendar = () => {
    setCalendarsVisible(true);
  };

  const selectDate = () => {
    const selectedDateValue = document.getElementById('datePicker').value;
    setSelectedDate(selectedDateValue);
    setCalendarVisible(false);
  };

  const selectDates = () => {
    const selectedDatesValue = document.getElementById('datePicker').value;
    setSelectedDates(selectedDatesValue);
    setCalendarsVisible(false);
  };

  return (
    <div className='confirmpay'>
      <div className="reservationwrap">
        <div className="reservationbanner">
          <div className="bannerhead">
            <h2>Confirm and pay</h2>
          </div>
          <div className="bannerhead1">
            <span><IoIosArrowBack /></span><h5>Request to book</h5>
          </div>
          <div className="resvertionheading">
            <div className="leftpage">
              <h4 className='leftpagehead'>Your Trip</h4>
              <div className="paydate">
                <h5>Dates</h5>
                <div className="editpage">
                  <h6 onClick={openCalendar}>Edit</h6>
                  <p className='selectdate'>{selectedDate}</p>
                  {calendarVisible && (
                    <div>
                      <input type="date" id="datePicker" />
                      <button onClick={selectDate}>Select</button>
                    </div>
                  )}
                </div>
              </div>
              <div className="paydate">
                <h5>Checkin Dates</h5>
                <div className="editpage2">
                  <h6 onClick={opendCalendar}>Edit</h6>
                  <p className='selecteddate'>{selectedDates}</p>
                  {calendarsVisible && (
                    <div>
                      <input type="date" id="datePicker" />
                      <button onClick={selectDates}>Select</button>
                    </div>
                  )}
                </div>
              </div>
              <div className="paydate">
                <h5>Guests</h5>
                <GuestSelection />
              </div>
              <hr/>
          
              <div className="resloginhead">
                <h4>Login or Signup</h4>
                <Form>
                  <div className="rescont mt-4">
                    <Form.Control as="select">
                      {countryOptions.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </Form.Control>
                    <Form.Control type="text" placeholder="Enter phone number" />
                    <p style={{ marginTop: "0.5rem", fontFamily: "style", marginLeft: "1rem" }}>
                      <small>We’ll call or text you to confirm your number. Standard message and data rates apply.</small>
                    </p>
                    <Button variant="danger mt-2 w-100 mb-5 border-dark" type="submit">
                      Continue
                    </Button>
                  </div>
                  <hr/>
                </Form>
                <div className="resloginicons">
                  <button className='resbtns'><FcGoogle className="iconres" /></button>
                  <button className='resbtns'><FaApple className="iconres" /></button>
                  <button className='resbtns'><ImFacebook2 className="iconres" /> </button>
                </div>
                <button className='resbtn'><MdAttachEmail className="iconres" /></button>
              </div>
            </div>
            <div className="rightpage">
              <div className="reservationhouse">
                <img src={beachimg} alt="" height={90} width={100} style={{ borderRadius: 15 }}/>
                <div className="beanresi">
                  <h6>Sultan Beach Residence</h6>
                  Entire Home/Flat
                </div>
              </div>
              <div className="pricedetails">
                <div className="pricedetail">
                  <h5>Price Details</h5>
                  <div className='pricespandetails'>
                    <span>₹6,26,474.98 x 5 nights</span> <span>₹31,32,374.9</span>
                  </div>
                </div>
                <div className="pricetotal">
                  <h6>Total <Link to="/">(INR)</Link></h6>
                  <div>₹31,32,374.9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
