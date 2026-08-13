import { useState } from "react";
import type { FormEvent } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-brand-row">
          <h2>Bandage</h2>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              f
            </a>

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="Twitter">
              ♥
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-content">
        <div className="footer-column">
          <h3>Company Info</h3>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">About Us</a>
          <a href="#">Carrier</a>
          <a href="#">We are hiring</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h3>Features</h3>
          <a href="#">Business Marketing</a>
          <a href="#">User Analytic</a>
          <a href="#">Live Chat</a>
          <a href="#">Unlimited Support</a>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#">IOS & Android</a>
          <a href="#">Watch a Demo</a>
          <a href="#">Customers</a>
          <a href="#">API</a>
        </div>

        <div className="footer-column footer-subscribe">
          <h3>Get In Touch</h3>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-label="Email address"
            />

            <button type="submit">Subscribe</button>
          </form>

          <p>{message || "Lorem ipsum dolor sit amet."}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
