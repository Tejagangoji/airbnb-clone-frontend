import { IoShareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaAngleLeft } from "react-icons/fa6";
import "./ProductDetails.css";
import React from "react";
import img1 from "../../assets/productDetailsPage/img1.jpg";
import img2 from "../../assets/productDetailsPage/img2.jpg";
import img3 from "../../assets/productDetailsPage/img3.jpg";
import img4 from "../../assets/productDetailsPage/img4.png";
import img5 from "../../assets/productDetailsPage/img5.jpg";
import { Grid, Paper } from "@mui/material";
import image from "../../assets/productDetailsPage/host/image.jpg";
import { RiBookReadLine } from "react-icons/ri";
import { Style } from "@mui/icons-material";
import { GiTravelDress } from "react-icons/gi";
import { FaHelmetUn } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdOutlineWorkOutline } from "react-icons/md";
import { LiaSmokingSolid } from "react-icons/lia";
import { CiMusicNote1 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import box from "../../assets/productDetailsPage/treassure/box.png";
import { informationData } from "../../ApiData/ProductDetails/ProductDetails";
import { ThingsData } from "../../ApiData/ProductDetails/ProductDetails";

export function Carting() {
  return (
    <div className="container">
      <div className="heading">
        <h1>Train at the X-Mansion</h1>
      </div>
      <div className="actions">
        <button className="share">
          <span className="buttonHover">
            <IoShareOutline />
          </span>
          <span className="cartText">Share</span>
        </button>
        <button className="save">
          <span className="buttonHover">
            <CiHeart />
          </span>
          <span className="cartText">Save</span>
        </button>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <div>
      <Grid container spacing={2} className="gridContainer">
        <Grid item xs={6} className="childGrid">
          <div className="leftImage">
            <img src={img1} alt="img1" width={"100%"} height={"50%"} />
          </div>
        </Grid>
        <Grid item xs={3} className="childGrid">
          <img
            src={img2}
            alt="img2"
            width={"90%"}
            height={"45%"}
            style={{ paddingBottom: "10px" }}
          />
          <img src={img3} alt="img3" width={"90%"} height={"45%"} />
        </Grid>
        <Grid item xs={3} className="childGrid">
          <img
            style={{ marginBottom: "10px" }}
            src={img4}
            alt="img4"
            width={"90%"}
            height={"43%"}
          />
          <img
            style={{ marginBottom: "12px" }}
            src={img5}
            alt="img5"
            width={"90%"}
            height={"45%"}
          />
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
        <hr style={{ width: "100%" }} />
        <div>
          <span>
            <img
              width={"30px"}
              height={"30px"}
              style={{ borderRadius: "50%", border: "1px whitesmoke" }}
              src={image}
              alt="host"
            />
            Hosted by Jubilee
            <br />
            <small style={{ margin: "0px 30px" }}>Superhost, Obviously</small>
          </span>
        </div>
        <hr />
      </div>

      <div className="block2">
        <div className="requestContainer">
          <div className="block2Content">
            <h2>
              ₹3,183<span>per guest</span>
            </h2>
            <h5>Closes 17 July, 12:29 PM</h5>
            <button type="submit" className="requestButton">
              Request
            </button>
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
        <span className="instructIcons">
          <RiBookReadLine />
        </span>
        <div className="instruction-text">
          <p>Hang out in our radical 2D world</p>
          <small>
            Explore over 100 pieces of unique X-Men stuff in the mansion.
          </small>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <GiTravelDress />
        </span>
        <div className="instruction-text">
          <p>Train in the Danger Room</p>
          <small>Master your mutant abilities with expert instructors.</small>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <FaHelmetUn />
        </span>
        <div className="instruction-text">
          <p>Try Cerebro on for size</p>
          <small>
            Meet up in the War Room and let Cerebro help you find your mutant
            power.
          </small>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <CiLock />
        </span>
        <div className="instruction-text">
          <p>Explore a beast of a lab</p>
          <small>Experiment with energy elixirs in Beast’s lab.</small>
        </div>
      </div>
      <hr style={{ width: "50%" }} />
    </div>
  );
}
export function Description() {
  return (
    <div className="descriptionContainer">
      <div className="para1">
        <p>
          Calling all mutants! Or anyone who feels just a little bit different.
          Now’s your shot to find out how super special you are at Xavier’s
          Institute for Higher Learning. We’re totally ready to welcome mutant
          trainees like you to our newest class. Anyway, get ready for the
          coolest orientation ever!
        </p>
      </div>
      <div className="para2">
        <h5>What you’ll do</h5>
        <p>
          The X-Mansion is the best place for you and other mutants to learn
          about and control your awesome mutant gifts. Oh man, it’ll be packed
          with training, cool experiments, secret mission briefings and a class
          photo at the end to remember your fellow mutants.
        </p>
      </div>
      <div className="para3">
        <p>Here’s the scoop on your day at the X-Mansion...</p>
      </div>
      <div className="list">
        <ul>
          <li>
            I’ll lead you through new student orientation (don’t worry, we’ll
            get to the fun stuff fast).
          </li>
          <li>
            Enter Beast’s totally gnarly lab! It’s like a science playground
            where you’ll be able to power up with mutant energy elixirs
          </li>
          <li>
            Take a class in the Danger Room, where some of our combat professors
            will teach you how to improve your fighting skills – you never know
            when you’ll have to fend off the Hellfire Club!
          </li>
          <li>
            {" "}
            Head to the War Room to try on Cerebro and find out your mutant
            superpower. Maybe you’ll be an Omega-level mutant like Storm!{" "}
          </li>
          <li>
            Before you leave, we’ll debrief you on your new powers AND you can
            snag your official diploma and class photo.
          </li>
        </ul>
      </div>
      <hr style={{ width: "100%" }} />
    </div>
  );
}
export function HostProfile() {
  return (
    <div className="hostingProfile">
      <h1 style={{ margin: "15px", fontSize: "25px" }}>Meet your Host</h1>
      <div className="left-block">
        <div className="image-column">
          <img src={image} alt="Profile" className="profile-image" />
        </div>
        <div className="content-column">
          <div className="number">17</div>
          <div className="small-element">Reviews</div>
          <hr />
          <div className="rating">
            <span>
              {" "}
              5 <FaStar className="star-icon" />
              <br />
              <small style={{ fontSize: "10px" }}>Rating</small>
            </span>
          </div>
          <hr />
          <div className="hosting">
            3<br />
            <small style={{ fontSize: "10px", fontWeight: "bold" }}>
              months Hosting
            </small>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
export function HostInstructions() {
  return (
    <div>
      <div className="instruction">
        <span className="instructIcons">
          <LuGraduationCap />
        </span>
        <div className="instruction-text">
          <p>Where I went to school: Xavier’s Institute for Higher Learning</p>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <MdOutlineWorkOutline />
        </span>
        <div className="instruction-text">
          <p>My work: Protecting humanity</p>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <LiaSmokingSolid />
        </span>
        <div className="instruction-text">
          <p>Most useless skill: All my skills are cool. Next</p>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <CiMusicNote1 />
        </span>
        <div className="instruction-text">
          <p>Favourite song in secondary school: Anything by Dazzler!</p>
        </div>
      </div>
      <div className="instruction">
        <span className="instructIcons">
          <FaRegClock />
        </span>
        <div className="instruction-text">
          <p>I spend too much time: Two words. Video. Games.</p>
        </div>
      </div>
      <p style={{ width: "50%", marginTop: "2rem" }}>
        Hey, I’m Jubilee! If I’m not at the mall, you can find me hanging with
        my fellow X-Men. We’re talking Cyclops, Storm and Wolverine! I learned
        how to light up the sky at Xavier’s Institute for Higher Learning.
        Basically, I have the power to shoot fireworks from my hands. Rad, huh?
        Can’t wait to have you over to the house so you can see what we’re all
        about.
      </p>
      <hr style={{ width: "50%" }} />
    </div>
  );
}
export function Icons() {
  return (
    <div>
      <div className="centered-container">
        <img src={box} alt="icon" />
        <h1 style={{ fontFamily: "boldest", fontSize: "6rem" }}>icons</h1>
        <p style={{ fontSize: "1rem", textAlign: "center" }}>
          Extraordinary experiences hosted by the world’s greatest
          <br />
          names in music, film, TV, art, sports and more.
        </p>
      </div>
      <hr style={{ margin: "20px" }} />
    </div>
  );
}
export function Information() {
  return (
    <div>
      <div className="InformationContainer">
        <div className="Inform">
          {informationData?.map((item) => (
            <div>
              <h3>{item.icon}</h3>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <p style={{ fontSize: "15px", margin: "20 0" }}>
          If you’re selected and decide to book, you’ll have 24 hours to
          complete the purchase. Travel costs are not included. Read the full
          rules,
          <br /> including age and geographical eligibility, how data will be
          used, odds of being selected and other terms.
        </p>
        <hr />
      </div>
    </div>
  );
}
export function ThingsToKnow() {
  return (
    <div className="thingContainer">
      <div className="things">
        {ThingsData?.map((item) => (
          <div className="item">
            <h3>{item.title}</h3>
            <div className="content">
              <p>{item.para1}</p>
              <p>{item.para2}</p>
              <p>{item.para3}</p>
              <p>{item.para4}</p>
              <a className="thingsAnchor" href={item.link}>
                Show more
              </a>
            </div>
          </div>
        ))}
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
        <HostProfile />
        <HostInstructions />
        <Icons />
        <Information />
        <ThingsToKnow />
      </div>
    </div>
  );
}
