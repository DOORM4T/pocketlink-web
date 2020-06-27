import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customize from "./pages/Customize";
import Completed from "./pages/Completed";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Context from "./context";

// styles
import "bulma/css/bulma.min.css";
import "./styles/main.css";
import "@fortawesome/fontawesome-svg-core";
import "react-tooltip/dist/index";

export default function App() {
  const [originalURL, setOriginalURL] = useState("");
  const [customURL, setCustomURL] = useState("");

  return (
    <Context.Provider
      value={{ customURL, originalURL, setOriginalURL, setCustomURL }}
    >
      <Router>
        <Navbar />
        <section
          className="hero is-success is-large"
          style={{ boxShadow: "0 -5px 20px black", height: "100vh" }}
        >
          <div className="hero-body has-text-centered">
            <motion.div className="container">
              <motion.h1
                initial={{ scale: 0.8, textShadow: "0 1px 1px black" }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 12, velocity: 2 }}
                className="title"
              >
                PocketLink
              </motion.h1>
              <Route path="/" exact>
                <Subtitle name="Enter a URL" />
                <Home />
              </Route>
              <Route path="/customize">
                <Subtitle name="Customize" />
                <Customize />
              </Route>
              <Route path="/completed">
                <Subtitle name="Completed" />
                <Completed />
              </Route>
            </motion.div>
          </div>
        </section>
      </Router>
    </Context.Provider>
  );
}

function Subtitle({ name }: { name: string }) {
  return (
    <motion.h2
      className="subtitle"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0.8, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {name}
    </motion.h2>
  );
}
