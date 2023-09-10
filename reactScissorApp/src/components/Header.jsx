import Logo from "../assets/images/Logo.png";
import Group from "../assets/images/Group 3.png";
import Navbar from "./Navbar";
import Hero from "./Hero";
const Header = () => {
  return (
    <>
      <header>
        <div className="header-wrapper">
          <div>
            <div className="container flex-align">
              <div className="logo flex-align">
                <a href="/">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <Navbar />
              <div className="nav-btn">
                <button>Log in</button>
                <button className="btn">Try for free</button>
              </div>
            </div>
          </div>
          <Hero />
          <div className="group">
            <img src={Group} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
