import { Icon } from "@iconify/react";
const Features = () => {
  return (
    <>
      <section className="features" id="features">
        <div className="featuress bottom">
          <div className="features-content container">
            <div className="features-heading">
              <h3>One Stop.</h3>
              <h3>
                Four <span>Possibilities.</span>
              </h3>
            </div>

            <div className="stats-container">
              <div className="stat">
                <h4>3M</h4>
                <p>Active users</p>
              </div>

              <div className="stat">
                <h4>60M</h4>
                <p>Links & QR codes created</p>
              </div>

              <div className="stat">
                <h4>1B</h4>
                <p>Clicked & Scanned connections</p>
              </div>

              <div className="stat">
                <h4>300k</h4>
                <p>App Integrations</p>
              </div>
            </div>
          </div>
        </div>

        <div className="feature-sub container bottom">
          <div className="features-description">
            <div className="gradient"></div>
            <div className="">
              <h3>
                Why choose <span>Scissors</span>
              </h3>
              <p className="features-description-p">
                Scissors is the hub of everything that has to do with your link
                management. We shorten your URLs, allow you creating custom ones
                for your personal, business, event usage. Our swift QR code
                creation, management and usage tracking with advance analytics
                for all of these is second to none.
              </p>
            </div>
          </div>

          <div className="feature">
            <div>
              <Icon
                className="icon"
                icon="material-symbols:link"
                width="3rem"
              />
              <div>
                <h4>URL Shortening</h4>
                <p>
                  Scissor allows you to shorten URLs of your business, events.
                  Shorten your URL at scale, URL redirects.
                </p>
              </div>
            </div>

            <div>
              <Icon className="icon" icon="bi:pencil-square" width="3rem" />
              <div>
                <h4>Custom URLs</h4>
                <p>
                  With Scissor, you can create custom URLs, with the length you
                  want! A solution for socials and businesses.
                </p>
              </div>
            </div>

            <div>
              <Icon
                className="icon"
                icon="ph:squares-four-light"
                width="3rem"
              />
              <div>
                <h4>QR Codes</h4>
                <p>
                  Generate QR codes to your business, events. Bring your
                  audience and customers to your doorstep with this scan and go
                  solution.
                </p>
              </div>
            </div>

            <div>
              <Icon className="icon" icon="ri:pulse-line" width="3rem" />
              <div>
                <h4>Data Analytics</h4>
                <p>
                  Receive data on the usage of either your shortened URL, custom
                  URLs or generated QR codes. Embedded to monitor progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
