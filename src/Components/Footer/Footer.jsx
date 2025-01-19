import React from 'react';
import logo from "../../assets/icons8-forumbee-100.png"

const Footer = () => {
    return (
<footer className="footer max-w-screen-2xl mx-auto text-base-content p-10">
  <aside className='flex items-center'>
      <img src={logo} />
    <p className='text-2xl font-bold text-left'>
    Forumbee
      <br />
      <span className='text-base font-normal'>Providing reliable Content since 1992</span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;