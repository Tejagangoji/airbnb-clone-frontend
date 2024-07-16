import "./HelpCentre.css";
import { RiSearchLine as SearchIcon } from "react-icons/ri";

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
  return <div></div>;
}

export default function HelpCentre() {
  return (
    <div className="helpCentre">
      <div className="helpCentreWrap">
        <Header />
        <Filtering />
      </div>
    </div>
  );
}
