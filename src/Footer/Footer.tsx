import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="/footer/COMPANY LOGO.png" />
      </div>
      <div className="top-row">
        <div className="foot__nav">
          <ul className="foot__menu__items">
            <li className="footer__dropdown">
              <a href="#1" className="foot__menu__item">
                About<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </a>
              <ul className="footer__dropdown__menu">
                <li>
                  <a href="#1" className="footer__menu__item">
                    About menu item 1
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    About menu item 2
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    About menu item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__dropdown">
              <a href="#1" className="foot__menu__item">
                Services<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </a>
              <ul className="footer__dropdown__menu">
                <li>
                  <a href="#1" className="footer__menu__item">
                    Services menu item 1
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    Services menu item 2
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    Services menu item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__dropdown">
              <a href="#1" className="foot__menu__item">
                footer links 1<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </a>
              <ul className="footer__dropdown__menu">
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 1
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 2
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 3
                  </a>
                </li>
              </ul>
            </li>
            <li className="footer__dropdown">
              <a href="#1" className="foot__menu__item">
                Footer links 2<i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </a>
              <ul className="footer__dropdown__menu">
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 1
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 2
                  </a>
                </li>
                <li>
                  <a href="#1" className="footer__menu__item">
                    footer links item 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom-row">
        <div className="company-links-sect">
          <div className="company-links">© 2022 Company Inc.</div>
          <div className="company-links">Terms and conditions</div>
          <div className="company-links">Privacy policy</div>
          <div className="company-links">Website by atomix</div>
        </div>
        <div className="company-social-sect">
          <div className="company-social">
            <img src="/footer/facebook.svg" />
          </div>
          <div className="company-social">
            <img src="/footer/twitter.svg" />
          </div>
          <div className="company-social">
            <img src="/footer/instagram.svg" />
          </div>
          <div className="company-social">
            <img src="/footer/linkedin.svg" />
          </div>
          <div className="company-social">
            <img src="/footer/youtube.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
