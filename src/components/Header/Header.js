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
    <div className="header__info">
        <div className="header__search">
          <input className="header__searchbar" type="text" placeholder="  Search"></input>  
        </div>
        <div>
        <button className="header__button">UPLOAD</button>
          <img
              className="header__avatar"
              src={avatar}
              alt="person-pic"
            />
          
        </div>  
        
    </div>
    </header>
  );
}

export default Header;
