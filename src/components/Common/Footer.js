import { Button, Input } from "antd";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <p>MovieBuffs</p>
        </div>
        <hr />
        <div className="footer-column-container">
          <div className="footer-column">
            <button>Careers</button>
            <button>Queries</button>
            <button>Careers</button>
            <button>Queries</button>
          </div>
          <div className="footer-column">
            <button>Consumer Care</button>
            <button>HelpDesk</button>
            <button>Consumer Care</button>
            <button>HelpDesk</button>
          </div>
          <div className="footer-form-container">
            <div className="footer-form">
              <p>Stay Updated with the latest movie releases</p>
              <div className="footer-form-input">
                <input
                  placeholder="Enter your e-mail"
                  className="footer-email-input"
                />
                {/* <Input /> */}
                <button>Subscribe</button>
              </div>
              <div className="footer-form-agreement">
                <input type="checkbox" />
                <p>
                  By checking the box, you agree to receive our regular updates
                  on the latest movies and shows released worldwide.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <div className="footer-column">
            <p>Phone: 7081407290</p>
            <p>Email: yash36maurya@gmail.com</p>
          </div>
          <div className="footer-column">
            <p>Phone: 7081407290</p>
            <p>Email: yash36maurya@gmail.com</p>
          </div> */}
        </div>
        <div className="footer-socials-container">
          <div className="footer-socials">
            <p>
              <Facebook />
            </p>
            <p>
              <Twitter />
            </p>
            <p>
              <Instagram />
            </p>
            <p>
              <Linkedin />
            </p>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <button>
            Website Terms
          </button>
          <button>
            Terms & Conditions
          </button>
          <button>
            Accessibility Statement
          </button>
          <button>
            Children Guide
          </button>
          <button>
            Privacy Policy
          </button>
        </div>
      </div>
    </section>
  );
}
