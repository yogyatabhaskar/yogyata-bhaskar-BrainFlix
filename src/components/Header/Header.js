import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
//import search from "../../assets/Icons/search.svg";
//import upload from "../../assets/Icons/upload.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__logoimg">
        <img className="header__logo" src={logo} alt="Brainflix-logo"/>
      </div>

        <div className="header__search">
          <input className="header__searchbar" type="text" placeholder="  Search"></input>  
          <img
              className="header__avatar1"
              src={avatar}
              alt="person-pic"
            />
        </div>
        <div className="header__account">
        <button className="header__button">UPLOAD</button>
          <img
              className="header__avatar2"
              src={avatar}
              alt="person-pic"
            />
          
        </div>  

    </header>
  );
}

export default Header;
