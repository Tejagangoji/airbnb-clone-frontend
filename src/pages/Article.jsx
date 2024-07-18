import React from 'react'
import aimg from '../assests/airbnb-help/a1.jpg';
import '../styles/article.css';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Article() {
  return (
    <div className='helparticlepage'>
      <div className="articlewrap">
        <div className="articlebanner">
            <div className="arthead">
                <span><Link to='./'>Home</Link></span><IoIosArrowBack /><span>Getting started with Airbnb</span>
            </div>
         <p>Guide</p>
        <h2>Getting started with Airbnb</h2>
        
            <div className="artcleheading">
                <div className="articleimg">
                    <img src={aimg} alt="" height={500} width={700}/>
                    <div className="imgcont">
                    Whether you want to book a dream stay away from home or host an Airbnb Experience in your own backyard, here’s how Airbnb works for you—as a Host or a guest. Let’s start with the basics and go from there. Welcome to the community!
                    </div>
                    <div className="comm">
                       <h4>The Airbnb community</h4>
                       <p className='commparagraph'>Airbnb is a community based on connection and belonging. We take the safety of our Hosts and guests very seriously—Hosts must meet and maintain quality standards, and all personal profiles and listings are verified. We work to keep everyone safe on our site and app with encrypted personal data and a trusted payment system. Plus, we have a 24/7 community support team ready to answer any of your questions.</p>
                    </div>
                    <hr/>
                    <div className="hostrel">
                        <h5>Host Reliability Standards</h5>
                        <p>Standards for Hosts of stays including more about listing accuracy, cleanliness, and communication.</p>
                    </div>
                    <div className="hostrel">
                        <h5>Guest Reliability Standards</h5>
                        <p>Standards for guests on stays including more about respect for the community, the space, and the house rules.</p>
                    </div>
                    <div className="getting">
                        <h4>Getting set up</h4>
                        <p>Creating an account is free and easy! We’ll need to know a few basic details and then you’ll be asked to submit your government ID—which we don’t share with Hosts or anyone else. Now you’re ready to book!</p>
                    </div>
                    <div className="hostrel">
                        <h5>Creating an account</h5>
                        <p>Find easy-to-follow instructions to create an account.</p>
                    </div>
                    <div className="hostrel">
                        <h5>How to submit your ID</h5>
                        <p>Details what info you’ll need to share, plus troubleshooting when you’re uploading your government ID.</p>
                    </div>
                    <div className="hostrel">
                        <h5>Booking a trip: What to do if you’re new</h5>
                        <p>Learn about Airbnb’s booking process, how to confirm your reservation, special offers, and more.</p>
                    </div>
                    <div className="getting">
                        <h4>Hosting basics</h4>
                        <p>If you’re interested in hosting your space, we’ll guide you through the process step-by-step. To host Experiences, just review our quality standards, create a listing, and submit your compelling idea (through a form or a short video if you’re submitting an online experience) for review.</p>
                    </div>
                    <div className="hostrel">
                        <h5>All the ways to Host on Airbnb</h5>
                        <p>Details and all the fine print about hosting a place to stay or an Airbnb experience.</p>
                    </div>
                    <div className="hostrel">
                        <h5>Creating new Experiences</h5>
                        <p>Find the basic info you’ll need to have when submitting an Experience.</p>
                    </div>
                    <div className="articlehelping">
                        <h4>Did this article help?</h4>
                       <div className="heplines">
                       <span>Yes</span><span>No</span>
                       </div>
                    </div>
                    <br/>
                    <h4>Related articles</h4>
                       <p>Guest</p>
                       <div className="hostrel">
                        <h5>Creating an account</h5>
                        <p>Signing up is free – use your email address, phone number, Facebook or Google account, or Apple ID.</p>
                    </div>
                    <p>Guest</p>
                       <div className="hostrel">
                        <h5>Booking a trip: what to do if you’re new</h5>
                        <p> Learn about Airbnb’s booking process, how to confirm your reservation, special offers direct from a Host, and more.</p>
                    </div>
                    <div className="hostrel">
                        <h5>Paying for your trip</h5>
                        <p> When are you charged for a reservation? What do you do if you can’t complete your transaction? Let’s break down the financials and get answe…</p>
                    </div>
                </div>
                <div className="articlebtn">
                   <p>Get help with your reservations, account, and more.</p>
                   <button className='btnart'>Login or Signup</button>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}
