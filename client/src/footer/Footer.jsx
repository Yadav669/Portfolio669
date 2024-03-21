import "./Footer.css";
import React from "react";
import { ImHome3 } from "react-icons/im";
import { HiMiniPhone } from "react-icons/hi2";
import { FaMailBulk } from "react-icons/fa";
// import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiReddit } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <ImHome3
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>shatan gali, shamshan ka opposite</p>
            <p>Pada No:2</p>
          </div>
          <div className="phone">
            <HiMiniPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>9833674797</p>
          </div>
          <div className="mail">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>tiion3256@gmail.com</p>
          </div>
        </div>
        <div className="right">
          <h4>About</h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum odit
            hic nobis, nulla amet ipsum iure aliquid ea dolorum quo, natus sequi
            at cupiditate eaque molestiae! Amet magnam impedit quidem.
          </h6>
          <div className="social">
            {/* <a
              href="https://github.com/Yadav669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImFacebook
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a> */}
            <a
              href="https://github.com/Yadav669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Yadav669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Yadav669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/Yadav669"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiReddit
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

