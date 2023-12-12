import "./Footer.css"
import facebookLogo from "./facebook-logo.png"
import instagramLogo from "./instagram.png"
import twitterLogo from "./twitter.png"

const Footer = () => {
  return (
    <div className="footerBox">
      <div>
        <div className="bigTitle">Company</div>
        <div className="footerTitle">About</div>
        <div className="footerTitle">Jobs</div>
        <div className="footerTitle">For the Record</div>
      </div>
      <div>
        <div className="bigTitle">Community</div>
        <div className="footerTitle">For Artists</div>
        <div className="footerTitle">Developers</div>
        <div className="footerTitle">Advertising</div>
        <div className="footerTitle">Investors</div>
        <div className="footerTitle">Vendors</div>
      </div>
      <div>
        <div className="bigTitle">Useful links</div>
        <div className="footerTitle">Support</div>
        <div className="footerTitle">Free Mobile App</div>
      </div>
      <div>
        <span class="dot">
          <img src={facebookLogo} alt="" className="footerLogo"></img>
        </span>
        <span class="dot">
          <img src={instagramLogo} alt="" className="footerLogo"></img>
        </span>
        <span class="dot">
          <img src={twitterLogo} alt="" className="footerLogo"></img>
        </span>
        <div>&copy; 2023 Music App Player, SCD Group.</div>
      </div>
    </div>
  );
};

export default Footer;
