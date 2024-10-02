import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar(props) {
  return (
    <div className="navbar bg-neutral text-base-100">
      <div className="navbar-start flex items-center gap-3 ms-5">
        <img src={logo} className="w-9" alt="Logo" />
        <a className="text-2xl font-bold text-blue-100">Let's Chat</a>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={props.link}
              className={`btn btn-ghost text-xl font-semibold ${props.color} text-blue-200 hover:text-blue-400 transition-all duration-300`}
            >
              {props.title}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
