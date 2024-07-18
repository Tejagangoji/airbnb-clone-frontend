import {
  ArticlesData,
  ExperienceHostImages,
  GuestImages,
  HostImages,
  TravelImages,
} from "../../ApiData/ProductDetails/HelpCentre/HelpCentre";
import "./HelpCentre.css";
import { RiSearchLine as SearchIcon } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";

export function Header() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="helpComponent">
      <div>
        <h1>Hi, how can we help?</h1>
        <form className="formHelp" onSubmit={handleSubmit}>
          <div class="inputWithButton">
            <input type="search" placeholder="Search how-tos and more"></input>
            <button type="submit" className="searchBtn">
              <SearchIcon />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export function Filtering(props) {
  const handleOnclick = (event) => {
    props.handleButtonClick(event.target.value);
  };

  return (
    <div>
      <span className="FilterSpan">
        <button value={"Guest"} onClick={(e) => handleOnclick(e)}>
          {" "}
          Guest
        </button>
        <button value={"Host"} onClick={(e) => handleOnclick(e)}>
          Host
        </button>
        <button value={"Experience"} onClick={(e) => handleOnclick(e)}>
          Experience Host
        </button>
        <button value={"Travel"} onClick={(e) => handleOnclick(e)}>
          Travel admin
        </button>
      </span>
      <hr />
    </div>
  );
}
export function UserInfo() {
  return (
    <div className="Block">
      <span className="block-container">
        <div className="block1">
          <h5>We're here for you</h5>
          <p>Log in to get help with your reservations, account, and more.</p>
        </div>
        <div className="block2">
          <button type="submit">Log in or sign up</button>
        </div>
      </span>
    </div>
  );
}
export function BrowseInfo() {
  return (
    <div className="browserdiv">
      <div className="browserguiding">
        <h3 className="Browsing">Guides for getting started</h3>
      </div>
      <div>
        <a className="BrowseArrow" href="Browse all Topics">
          Browse all Topics
          <MdOutlineKeyboardArrowRight />
        </a>
      </div>
    </div>
  );
}
export function ImageCard(props) {
  function image() {
    let imageCards = [];
    if (props.selectedButton === "Guest") {
      imageCards = GuestImages;
    } else if (props.selectedButton === "Host") {
      imageCards = HostImages;
    } else if (props.selectedButton === "Experience") {
      imageCards = ExperienceHostImages;
    } else if (props.selectedButton === "Travel") {
      imageCards = TravelImages;
    }
    return imageCards;
  }
  return (
    <div style={{ display: "flex" }}>
      {image()?.map((item, index) => {
        console.log(item);
        return (
          <div className="imagesContainer">
            <img
              className="images"
              src={item.img}
              alt="Hello"
              width="90%"
              height="100%"
            />
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={item.link}
            >
              {item.title}
            </a>
          </div>
        );
      })}
    </div>
  );
}
export function Articles() {
  return (
    <div>
      <h4 style={{ margin: "20px" }}>Top Articles</h4>
      <div className="articlesContainer">
        {ArticlesData?.map((item, index) => {
          return (
            <div>
              <div className="articleGrid">
                <a className="articleLink" href={item.link}>
                  {item.title}{" "}
                </a>
                <div style={{ marginLeft: "5px" }}>{item.para}</div>
                <hr style={{ margin: "20px" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HelpCentre() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (selectedButton) => {
    setSelectedButton(selectedButton);
  };

  return (
    <div className="helpCentre">
      <div className="helpCentreWrap">
        <Header />
        <Filtering handleButtonClick={handleClick} />
        <UserInfo />
        <BrowseInfo />
        <ImageCard selectedButton={selectedButton} />
        <Articles />
      </div>
    </div>
  );
}
