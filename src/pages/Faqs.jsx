import { Icon } from "@iconify/react";

const Faqs = () => {
  return (
    <>
      <section className="" id="faqs">
        <div className="faqs">
          <div className="faqs-header top">
            <div className="gradient"></div>
            <h1>FAQs</h1>
          </div>
          <div className="faq">
            <div>
              <div className="faq-item">
                <h3>How does URL shortening work?</h3>
                <Icon icon="ic:outline-minus" />
              </div>
              <div className="answer">
                <p>
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </p>
              </div>
              <hr />
            </div>
            <div className="faq-item">
              <h3>
                Is it necessary to create an account to use the URL shortening
                service?
              </h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>Are the shortened links permanent? Will they expire?</h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>
                Are there any limitations on the number of URLs I can shorten?
              </h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>
                Can I customize the shortened URLs to reflect my brand or
                content?
              </h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>Can I track the performance of my shortened URLs?</h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>
                How secure is the URL shortening service? Are the shortened
                links protected against spam or malicious activity?
              </h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>What is a QR code and what can it do?</h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
            <div className="faq-item">
              <h3>
                Is there an API available for integrating the URL shortening
                service into my own applications or websites?
              </h3>
              <Icon icon="bi:plus" />
            </div>
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
