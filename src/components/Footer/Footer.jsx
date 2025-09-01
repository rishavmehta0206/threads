import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugit
            consectetur eligendi. Id numquam cumque dolores iure, voluptate
            optio molestias.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae, laboriosam. Doloremque, placeat. Vero mollitia
            necessitatibus, voluptas debitis placeat perspiciatis ad porro rem,
            nesciunt commodi sint!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">THREADS</span>
          <span className="copyright">
            © Copyright 2025. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
