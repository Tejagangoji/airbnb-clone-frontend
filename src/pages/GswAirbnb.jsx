import { RiSearchLine as SearchIcon } from "react-icons/ri";
import "../pages/GswAirbnb.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import img1 from "../assets/HelpCentre/Guests/1.jpg";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export function HomeIcon() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="formHelp" onSubmit={handleSubmit}>
        <HelpCenterIcon style={{ width: "5rem", height: "5rem" }} />
        Help Centre
        <div class="inputWithButton" style={{ left: "35%" }}>
          <input type="search" placeholder="Search how-tos and more"></input>
          <button type="submit" className="searchBtn">
            <SearchIcon />
          </button>
        </div>
      </form>
      <hr />
    </div>
  );
}
export function Main() {
  return (
    <div>
      <span className="spanHome">
        <a className="homeComp" href="Home">
          Home
          <ChevronRightIcon fontSize="small" />
          <small style={{ marginLeft: "5px" }}>
            Getting started with Airbnb
          </small>
        </a>
      </span>
    </div>
  );
}
export function Blocking() {
  return (
    <div className="guestBlock">
      <span className="Guest-container">
        <div className="guest-left">
          <h6>Guide</h6>
          <h3>Getting started with Airbnb</h3>
          <img src={img1} alt="Guest" />
        </div>
        <div className="guest-right">
          <h6>Get help with your reservations, account, and more.</h6>
          <button type="submit">Log in or sign up</button>
        </div>
      </span>
    </div>
  );
}
export function BlockingPara() {
  return (
    <div>
      <p style={{ width: "53%" }}>
        Whether you want to book a dream stay away from home or host an Airbnb
        Experience in your own backyard, here’s how Airbnb works for you—as a
        Host or a guest. Let’s start with the basics and go from there. Welcome
        to the community!
      </p>
      <div>
        <h5 style={{ margin: "10px" }}>The Airbnb community</h5>
        <p style={{ width: "53%", margin: "10px" }}>
          Airbnb is a community based on connection and belonging. We take the
          safety of our Hosts and guests very seriously—Hosts must meet and
          maintain quality standards, and all personal profiles and listings are
          verified. We work to keep everyone safe on our site and app with
          encrypted personal data and a trusted payment system. Plus, we have a
          24/7 community support team ready to answer any of your questions.
        </p>
      </div>
      <hr style={{ width: "50%" }} />
    </div>
  );
}
export function HostReliability() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Host Reliability Standards"
      >
        Host Reliability Standards
      </a>
      <p>
        Standards for Hosts of stays including more about listing accuracy,
        cleanliness, and communication.
      </p>
      <hr />
    </div>
  );
}
export function GuestReliability() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href=" Guest Reliability Standards"
      >
        Guest Reliability Standards
      </a>
      <p>
        Standards for guests on stays including more about respect for the
        community, the space, and the house rules.
      </p>
      <hr />
    </div>
  );
}
export function SetUp() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <h4>Getting set up</h4>
      <p>
        Creating an account is free and easy! We’ll need to know a few basic
        details and then you’ll be asked to submit your government ID—which we
        don’t share with Hosts or anyone else. Now you’re ready to book!
      </p>
      <hr />
    </div>
  );
}
export function GuestCreate() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Creating an account"
      >
        Creating an account
      </a>
      <p>Find easy-to-follow instructions to create an account.</p>
      <hr />
    </div>
  );
}
export function GuestSubmit() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="How to submit your ID"
      >
        How to submit your ID
      </a>
      <p>
        Details what info you’ll need to share, plus troubleshooting when you’re
        uploading your government ID.
      </p>
      <hr />
    </div>
  );
}
export function GuestBooking() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Booking a trip: What to do if you’re new"
      >
        Booking a trip: What to do if you’re new
      </a>
      <p>
        Learn about Airbnb’s booking process, how to confirm your reservation,
        special offers, and more.
      </p>
      <hr />
    </div>
  );
}
export function Guestbasics() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <h4>Hosting basics</h4>
      <p>
        If you’re interested in hosting your space, we’ll guide you through the
        process step-by-step. To host Experiences, just review our quality
        standards, create a listing, and submit your compelling idea (through a
        form or a short video if you’re submitting an online experience) for
        review.
      </p>
      <hr />
    </div>
  );
}
export function HostWays() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="All the ways to Host on Airbnb"
      >
        All the ways to Host on Airbnb
      </a>
      <p>
        Details and all the fine print about hosting a place to stay or an
        Airbnb experience.
      </p>
      <hr />
    </div>
  );
}
export function HostNewExp() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Creating new Experiences"
      >
        Creating new Experiences
      </a>
      <p>
        Find the basic info you’ll need to have when submitting an Experience.
      </p>
      <hr />
    </div>
  );
}
export function HostArticle() {
  return (
    <div>
      <small style={{ fontSize: "20px", fontWeight: "bold" }}>
        Did this article help?
      </small>
      <small>
        <a
          style={{
            margin: "20px",
            padding: "10px",
            color: "black",
            right: "10%",
            fontWeight: "500px",
          }}
          href="Yes"
        >
          Yes
        </a>{" "}
        <a style={{ color: "black", fontWeight: "500px" }} href="No">
          No
        </a>
      </small>
      <hr style={{ width: "52%" }} />
    </div>
  );
}
export function RelArticle() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <h4>Related articles</h4>
      <a style={{ color: "grey", textDecoration: "none" }} href="Guest">
        Guest
      </a>{" "}
      <br />
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Creating an account"
      >
        Creating an account
      </a>
      <p>
        Signing up is free – use your email address, phone number, Facebook or
        Google account, or Apple ID.
      </p>
      <hr />
    </div>
  );
}
export function BookArticle() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <a style={{ color: "grey", textDecoration: "none" }} href="Guest">
        Guest
      </a>
      <br />
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Booking a trip: what to do if you’re new"
      >
        Booking a trip: what to do if you’re new
      </a>
      <p>
        Learn about Airbnb’s booking process, how to confirm your reservation,
        special offers direct from a Host, and more.
      </p>
      <hr />
    </div>
  );
}
export function PayArticle() {
  return (
    <div style={{ width: "52%", margin: "10px" }}>
      <h4>Related articles</h4>
      <a style={{ color: "grey", textDecoration: "none" }} href="Guest">
        Guest
      </a>
      <br />
      <a
        style={{ color: "black", fontWeight: "bold" }}
        href="Paying for your trip"
      >
        Paying for your trip
      </a>
      <p>
        When are you charged for a reservation? What do you do if you can’t
        complete your transaction? Let’s break down the financials and get
        answe…
      </p>
      <hr />
    </div>
  );
}

export default function GswAirbnb() {
  return (
    <div className="AirbnbCentre">
      <HomeIcon />
      <div className="AirbnbWrap">
        <Main />
        <Blocking />
        <BlockingPara />
        <HostReliability />
        <GuestReliability />
        <SetUp />
        <GuestCreate />
        <GuestSubmit />
        <GuestBooking />
        <Guestbasics />
        <HostWays />
        <HostNewExp />
        <HostArticle />
        <RelArticle />
        <BookArticle />
        <PayArticle />
      </div>
    </div>
  );
}
