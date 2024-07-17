import {
  ArticlesData,
  GuestImages,
} from "../../ApiData/ProductDetails/HelpCentre/HelpCentre";
import "./HelpCentre.css";
import { RiSearchLine as SearchIcon } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

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
export function Filtering() {
  return (
    <div>
      <span className="FilterSpan">
        <button> Guest</button>
        <button>Host</button>
        <button>Experience Host</button>
        <button>Travel admin</button>
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
export function ImageCard() {
  return (
    <div style={{ display: "flex" }}>
      {GuestImages?.map((item, index) => {
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
            <h6>{item.title}</h6>
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
  return (
    <div className="helpCentre">
      <div className="helpCentreWrap">
        <Header />
        <Filtering />
        <UserInfo />
        <BrowseInfo />
        <ImageCard />
        <Articles />
      </div>
    </div>
  );
}
