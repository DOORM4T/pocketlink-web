import React from "react";
import { useContext } from "react";
import Context from "../context";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function Completed() {
  const { customURL, originalURL, setCustomURL, setOriginalURL } = useContext(
    Context,
  );
  const history = useHistory();

  const handleClick = () => {
    setCustomURL!(() => "");
    setOriginalURL!(() => "");
    history.push("/");
  };

  return (
    <div>
      <p>
        {originalURL} => {customURL}
      </p>
      <motion.button
        className="button is-primary"
        onClick={handleClick}
        initial={{ scale: 1, filter: "brightness(100%)" }}
        whileTap={{ scale: 1.05, filter: "brightness(120%)" }}
      >
        Home
      </motion.button>
    </div>
  );
}
