import { Link } from 'react-router-dom';
import "./Header.scss";
import logo from "../../assets/Logo/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <header className="header">
    <Link to={"/videos"}>

      <div className="header__logoimg">
        <img className="header__logo" src={logo} alt="Brainflix-logo"/>
      </div></Link>

        <div className="header__search">
          <input className="header__searchbar" type="text" placeholder="Search"></input>  
          <img
              className="header__avatar1"
              src={avatar}
              alt="person-pic"
            />
        </div>
        <div className="header__account">
          <Link to={"/videoupload"} className="header__button">UPLOAD</Link>
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
