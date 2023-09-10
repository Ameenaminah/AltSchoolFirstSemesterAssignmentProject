import { Icon } from "@iconify/react";
const Analytics = () => {
  return (
    <>
      <section id="analytics">
        <div className="modal-container">
          <form action="">
            <input type="text" placeholder="Paste URL here..." aria-label="" />

            <div className="flex domain">
              <select name="" id="">
                <option value="">Choose Domain</option>
              </select>
              <input type="text" placeholder="Type Alias here" aria-label="" />
            </div>
            <button className="btn form-btn">
              Trim URL
              <Icon icon="fe:magic"/>
            </button>
            <p>
              By clicking TrimURL, I agree to the
              <span>Terms of Service, Privacy Policy</span> and Use of Cookies.
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Analytics;
