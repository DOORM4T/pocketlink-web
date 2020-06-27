import React, { useContext } from "react";
import icon from "../assets/images/pocketlink.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Context from "../context";

export default function Navbar() {
  const history = useHistory();
  const { customURL, originalURL, setCustomURL, setOriginalURL } = useContext(
    Context,
  );

  const goHome = () => {
    const isConfirmed = window.confirm(
      "Returning to Home.\n This operation will clear your current progress.\n Do you wish to return home and clear your progress?",
    );
    if (!isConfirmed) return;
    setCustomURL!(() => "");
    setOriginalURL!(() => "");
    history.push("/");
  };

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
      style={{ boxShadow: "0 2px 4px black" }}
    >
      <div className="navbar-brand">
        <a className="navbar-item" onClick={goHome}>
          <motion.img
            src={icon}
            width="50"
            height="50"
            initial={{ scale: 1.5, rotateZ: "0deg" }}
            whileHover={{ scale: 1.7, rotateZ: "10deg" }}
            transition={{ type: "spring", velocity: 2 }}
          />
        </a>
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
