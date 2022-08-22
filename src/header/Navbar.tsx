import React from "react";
import "./Navbar.css";

// 1. Header with a menu (global sections)
function Navbar() {
  return (
    <header className="header__">
      <a href="#" className="logo__">
        <img src="/Header/COMPANY LOGO.png" alt="" />
      </a>

      <nav>
        <ul className="menu__items">
          <li className="mega__menu__li">
            <a href="#" className="menu__item menu__item__color">
              About
            </a>
            <div className="mega__menu">
              <div className="content__">
                <div className="col__">
                  <section>
                    <a href="#" className="img__wrapper">
                      <span className="img__">
                        <img src="Header/Mask Group 2.png" alt="" />
                      </span>
                    </a>
                  </section>
                </div>
                <div className="col__">
                  <section>
                    <h2>About sample link 1</h2>
                    <ul className="mega__links">
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 5
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="col__">
                  <section>
                    <h2>About sample link 2</h2>
                    <ul className="mega__links">
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 4
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu__item">
                          About sub sample links 5
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown__ mega__menu__sub">
            <a href="#" className="menu__item expand-btn menu__item__color">
              About <i className="fas fa-plus"></i>
              <i className="fas fa-minus"></i>
              <hr className="menu__hr__line" />
            </a>
            <ul className="dropdown__menu expandable">
              <li className="dropdown__ dropdown__right">
                <a href="#" className="menu__item expand-btn">
                  About sample link 1<i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                  <hr className="menu__hr__line" />
                </a>
                <ul className="menu__right expandable">
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 5
                    </a>
                  </li>
                  <hr className="menu__hr__line" />
                </ul>
              </li>
              <li className="dropdown__ dropdown__right">
                <a href="#" className="menu__item expand-btn">
                  About sample link 2<i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                </a>
                <ul className="menu__right expandable">
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 2
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 3
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 4
                    </a>
                  </li>
                  <li>
                    <a href="#" className="menu__item sub__menu__item">
                      About sub sample links 5
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <a href="#" className="menu__item menu__item__color">
              News
              <hr className="menu__hr__line" />
            </a>
          </li>

          <li>
            <a href="#" className="menu__item menu__item__color">
              FAQs
              <hr className="menu__hr__line" />
            </a>
          </li>

          <li>
            <a href="#" className="menu__item menu__item__color">
              Services
              <hr className="menu__hr__line" />
            </a>
          </li>

          <div className="contact__us__mob">
            <button>CONTACT US</button>
          </div>
        </ul>
      </nav>
      <div className="contact__us">
        <button>CONTACT US</button>
      </div>
      <div className="menu-btn">
        <div className="menu-btn__lines"></div>
      </div>
    </header>
  );
}

export default Navbar;
