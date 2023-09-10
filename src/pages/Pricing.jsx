import { Icon } from "@iconify/react";

const Pricing = () => {
  return (
    <>
      <section className="pricing container bottom" id="pricing">
        <div className="pricing-description">
          <div className="gradient"></div>
          <div className="pricing-heading">
            <h3>
              A <span>price perfect</span> for your needs.
            </h3>
            <p>
              From catering for your personal, business, event, socials needs,
              you can be rest assured we have you in mind in our pricing.
            </p>
          </div>
        </div>

        <div className="card-container">
          <div className="card basic">
            <h3 className="card-header">Basic</h3>
            <div className="card-content">
              <h2 className="card-title">Free</h2>
              <h4 className="card-description">Free plan for all users</h4>
              <ul className="card-features">
                <li>
                  <Icon icon="lucide:check-circle" />
                  Unlimited URL Shortening
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Basic Link Analytics
                </li>
                <li>
                  <iIcon icon="lucide:check-circle" />
                  Customizable Short Links
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Standard Support
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Ad-supported
                </li>
              </ul>
            </div>
          </div>

          <div className="card professional">
            <h3 className="card-header">Professional</h3>
            <div className="card-content">
              <h2 className="card-title">$15/month</h2>
              <h4 className="card-description">Perfect for businesses</h4>
              <ul className="card-features">
                <li>
                  <Icon icon="lucide:check-circle" />
                  Advanced Analytics
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Custom Branded Links
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Social Media Integration
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Ad-free Experience
                </li>
              </ul>
            </div>
          </div>

          <div className="card teams">
            <h3 className="card-header">Teams</h3>
            <div className="card-content">
              <h2 className="card-title">$25/month</h2>
              <h4 className="card-description">Share with up to 10 users</h4>
              <ul className="card-features">
                <li>
                  <Icon icon="lucide:check-circle" />
                  Team Collaboration
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  User Roles and Permissions
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Enhanced Security
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  API Access
                </li>
                <li>
                  <Icon icon="lucide:check-circle" />
                  Dedicated Account Manager
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="btn-container flex">
          <a href="#" className="btn white">
            Get Customer Pricing
          </a>
          <a href="#" className="btn blue">
            Select Pricing
          </a>
        </div>
      </section>
    </>
  );
};

export default Pricing;
