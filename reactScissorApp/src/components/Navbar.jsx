import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <ul>
          <li>
            <a href="#home">My URLs</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#analytics">Analytics</a>
          </li>
          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </nav>
      <div className="hamburger">
        <Icon icon="charm:menu-hamburger" />
      </div>
    </>
  );
};

export default Navbar;
