import { IoShareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
import './ProductDetails.css';
import React from 'react';
import img1 from '../../assets/productDetailsPage/img1.jpg';
import img2 from '../../assets/productDetailsPage/img2.jpg';
import img3 from '../../assets/productDetailsPage/img3.jpg';
import img4 from '../../assets/productDetailsPage/img4.png';
import img5 from '../../assets/productDetailsPage/img5.jpg';
import { Grid, Paper } from "@mui/material";
import image from '../../assets/productDetailsPage/host/image.jpg'
import { RiBookReadLine } from "react-icons/ri";
import { Style } from "@mui/icons-material";
import { GiTravelDress } from "react-icons/gi";
import { FaHelmetUn } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaStar } from 'react-icons/fa';


export function Carting() {
    return (
        <div className="container">
    <div className="heading">
        <h1>Train at the X-Mansion</h1>
    </div>
    <div className="actions">
        <button className="share">
            <span className="buttonHover"><IoShareOutline /></span>  
            <span className="cartText">Share</span>
        </button>
        <button className="save">
            <span className="buttonHover"><CiHeart /></span> 
            <span className="cartText">Save</span>
        </button>
    </div>
</div>

    );
}

export function Gallery() {
    return (
        <div>
            <Grid container spacing={2} className="gridContainer" >
                <Grid item xs={6} className="childGrid">
                    <div className="leftImage">
                        <img src={img1} alt="img1"  width={"100%"} height={"50%"}/>
                    </div>
                </Grid>
                <Grid item xs={3} className="childGrid">
                    <img src={img2} alt="img2" width={"90%"} height={"23%"} style={{paddingBottom: "10px"}}/>
                    <img src={img3} alt="img3" width={"90%"} height={"22%"} />
                </Grid>
                <Grid item xs={3} className="childGrid">
                    <img src={img4} alt="img4" width={"90%"} height={"23%"} />
                    <img src={img5} alt="img5" width={"90%"} height={"22%"} />
                </Grid>
            </Grid>
        </div>
    );
}
export function Exploring() {
    return (
        <div className="exploreContainer">
            <div className="block1">
                <h5>New Castle, New York, United States</h5>
                <p>Single-day experience</p>
                <hr style={{width:"100%"}} />
                <div>
                    <span>
                        <img width={"30px"} height={"30px"} style={{ borderRadius: "50%", border: "1px whitesmoke" }} src={image} alt="host" />
                        Hosted by Jubilee<br />
                        <small style={{ margin: "0px 30px" }}>Superhost, Obviously</small>
                    </span>
                </div>
                <hr />
            </div>

            <div className="block2">
                <div className="requestContainer">
                    <div className="block2Content">
                        <h2>₹3,183<span>per guest</span></h2>
                        <h5>Closes 17 July, 12:29 PM</h5>
                        <button type="submit" className="requestButton">Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function Instructions() {
    return (
        <div>
        <div className="instruction">
            <span className="instructIcons"><RiBookReadLine /></span>
            <div className="instruction-text">
                <p>Hang out in our radical 2D world</p>
                <small>Explore over 100 pieces of unique X-Men stuff in the mansion.</small>
            </div>
        </div>
        <div className="instruction">
            <span className="instructIcons"><GiTravelDress /></span>
            <div className="instruction-text">
                <p>Train in the Danger Room</p>
                <small>Master your mutant abilities with expert instructors.</small>
            </div>
        </div>
        <div className="instruction">
            <span className="instructIcons"><FaHelmetUn/></span>
            <div className="instruction-text">
                <p>Try Cerebro on for size</p>
                <small>Meet up in the War Room and let Cerebro help you find your mutant power.</small>
            </div>
        </div>
        <div className="instruction">
            <span className="instructIcons"><CiLock/></span>
            <div className="instruction-text">
                <p>Explore a beast of a lab</p>
                <small>Experiment with energy elixirs in Beast’s lab.</small>
            </div>
        </div>
            <hr style={{width:"50%"}}/>
    </div>
    );
}
export function Description() {
    return (
        <div className="descriptionContainer">
            <div className="para1">
                <p>Calling all mutants! Or anyone who feels just a little bit different. Now’s your shot to find out how super special you are at Xavier’s Institute for Higher Learning. We’re totally ready to welcome mutant trainees like you to our newest class. Anyway, get ready for the coolest orientation ever!</p>
            </div>
            <div className="para2">
                <h5>What you’ll do</h5>
                <p>The X-Mansion is the best place for you and other mutants to learn about and control your awesome mutant gifts. Oh man, it’ll be packed with training, cool experiments, secret mission briefings and a class photo at the end to remember your fellow mutants.</p>
            </div>
            <div className="para3">
                <p>Here’s the scoop on your day at the X-Mansion...</p>
            </div>
            <div className="list">
                <ul>
                    <li>I’ll lead you through new student orientation (don’t worry, we’ll get to the fun stuff fast).</li>
                    <li>Enter Beast’s totally gnarly lab! It’s like a science playground where you’ll be able to power up with mutant energy elixirs</li>
                    <li>Take a class in the Danger Room, where some of our combat professors will teach you how to improve your fighting skills – you never know when you’ll have to fend off the Hellfire Club!</li>
                    <li> Head to the War Room to try on Cerebro and find out your mutant superpower. Maybe you’ll be an Omega-level mutant like Storm! </li>
                    <li>Before you leave, we’ll debrief you on your new powers AND you can snag your official diploma and class photo.</li>
                </ul>
            </div>
             <hr style={{width:"100%"}}/>
        </div>
    );

} 
export function HostProfile() {
    return (
        <div className="left-block">
            <div className="image-column">
                <img src={image} alt="Profile" className="profile-image" />
            </div>
            <div className="content-column">
                <div className="number">17</div>
                <div className="small-element">Reviews</div>
                <div className="rating">
                    <FaStar className="star-icon" />
                    <span>Rating 5 star icon</span>
                </div>
                <div className="hosting">3 months Hosting</div>
            </div>
        </div>
    );
}



export default function ProductDetails() {
    return (
        <div className="productDetails">
            <div className="productDetailsWrap">
                <Carting />
                <Gallery />
                <Exploring />
                <Instructions />
                <Description />
                <HostProfile/>
            </div>
           
        </div>
    );
}