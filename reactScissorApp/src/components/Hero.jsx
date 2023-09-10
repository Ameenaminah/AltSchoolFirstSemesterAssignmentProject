import Line from "../assets/images/line.png";
import Chain from "../assets/images/chain.png";
import ChainBg from "../assets/images/chainBg.png";

const Hero = () => {
  return (
    <>
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">
            Optimize Your Online Experience with Our Advanced
            <span className="line-url">
              {" "}
              URL Shortening{" "}
              <span className="line">
                <img src={Line} alt="" />
              </span>
            </span>
            Solution
          </h1>
          <p className="hero-p container">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
        </div>
        <div className="btn-container">
          <button className="hero-btn btn">Sign Up</button>
          <button>Learn more</button>
        </div>
        <div>
          <div className="chain container top">
            <div className="chain-content">
              <img src={Chain} alt="" />
              <p>
                Seamlessly transform your long URLs into concise and shareable
                links with just few clicks.
              </p>
            </div>
            <div className="chain-bg">
              <img src={ChainBg} className="chain-bg-img" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
