import React from 'react';
import logo1 from '../assets/logo.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-base-100">
      <div className="flex flex-col items-start gap-4">
        <img src={logo1} alt="Logo" className="w-20" />
        <p className="text-lg font-semibold">
          Let's Chat.
          <br />
          <span className="text-sm font-normal">
            Providing real-time chatting experience
          </span>
        </p>
        <div className="flex gap-4 mt-4">
          <a href="#" className="text-base-100 hover:text-primary transition">
            <FaFacebookF />
          </a>
          <a href="#" className="text-base-100 hover:text-primary transition">
            <FaTwitter />
          </a>
          <a href="#" className="text-base-100 hover:text-primary transition">
            <FaInstagram />
          </a>
        </div>
      </div>
      <nav>
        <h6 className="footer-title text-blue-200">Services</h6>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              Branding
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              Advertisement
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title text-blue-200">Company</h6>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              About us
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <h6 className="footer-title text-blue-200">Legal</h6>
        <ul className="mt-2 space-y-1">
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              Terms of use
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover text-base-100 hover:text-primary">
              Privacy policy
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
