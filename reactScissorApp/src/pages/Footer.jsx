import { Icon } from "@iconify/react";
import BlackLogo from "../assets/images/logoBlack.png";

const Footer = () => {
  return (
    <>
      <footer className=" footer">
        <div className="container">
          <div className="container">
            <div className="flex">
              <div className="black-logo">
                <img
                  src={BlackLogo}
                  alt="logo"
                  className="footer-logo"
                />
                <ul className="socials">
                  <li>
                    <Icon icon="mdi:twitter" />
                  </li>
                  <li>
                    <Icon icon="mdi:instagram" />
                  </li>
                  <li>
                    <Icon icon="mdi:linkedin" />
                  </li>
                  <li>
                    <Icon icon="ant-design:facebook-filled" />
                  </li>
                </ul>
              </div>
              {/* single link container  */}
              <div className="footer-center">
                <div className="logo-links">
                  <h3>Why Scissor ?</h3>
                  <ul>
                    <li>
                      <a href="#">Scissors 101</a>
                    </li>
                    <li>
                      <a href="#">Integrations and API</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-links">
                  <h3>Solutions</h3>
                  <ul>
                    <li>
                      <a href="#">Social Media</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                    <li>
                      <a href="#">For Developers</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-links">
                  <h3>Products</h3>
                  <ul>
                    <li>
                      <a href="#">Link Management</a>
                    </li>
                    <li>
                      <a href="#">QR Codes</a>
                    </li>
                    <li>
                      <a href="#">Link-in-bio</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-links">
                  <h3>Company</h3>
                  <ul>
                    <li>
                      <a href="#">About Scissor</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Partners</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Reviews</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-links footer-second-line">
                  <h3>Resources</h3>
                  <ul>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Resource Library</a>
                    </li>
                    <li>
                      <a href="#">Developers</a>
                    </li>
                    <li>
                      <a href="#">App Connectors</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                    <li>
                      <a href="#">Trust Center</a>
                    </li>
                    <li>
                      <a href="#">Browser Extension</a>
                    </li>
                    <li>
                      <a href="#">Mobile App</a>
                    </li>
                  </ul>
                </div>

                <div className="logo-links">
                  <h3>Features</h3>
                  <ul>
                    <li>
                      <a href="#">Branded Links</a>
                    </li>
                    <li>
                      <a href="#">Mobile Links</a>
                    </li>
                    <li>
                      <a href="#">Campaign</a>
                    </li>
                    <li>
                      <a href="#">Management & Analytics</a>
                    </li>
                    <li>
                      <a href="#">QR Code generation</a>
                    </li>
                  </ul>
                </div>
                <div className="logo-links">
                  <h3>Legal</h3>
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                    <li>
                      <a href="#">Acceptable Use Policy</a>
                    </li>
                    <li>
                      <a href="#">Code of Conduct</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end of cont --> */}
            </div>
            <p className="footer-text">
              Terms of Service | Security | Scissor
              <span>2023</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
