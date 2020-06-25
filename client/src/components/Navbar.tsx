import React from "react";
import icon from "../assets/images/pocketlink.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={{ boxShadow: "0 2px 4px black" }}
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <motion.img
            src={icon}
            width="50"
            height="50"
            initial={{ scale: 1.5, rotateZ: "0deg" }}
            whileHover={{ scale: 1.7, rotateZ: "10deg" }}
            transition={{ type: "spring", velocity: 2 }}
          />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary" disabled>
                <strong>Sign up</strong>
              </button>
              <button className="button is-light" disabled>
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
