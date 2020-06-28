import React, { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import Context from "../context";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { BounceLoader, GridLoader } from "react-spinners";
import { functions } from "../firebase";
import QRCode from "qrcode.react";
import Button from "../components/Button";

export default function Completed() {
  const { customURL, originalURL, setCustomURL, setOriginalURL } = useContext(
    Context,
  );
  const history = useHistory();
  const [didCreateURL, setDidCreateURL] = useState<boolean>(false);
  const createShortenedURL = functions.httpsCallable("createShortenedURL");

  useEffect(() => {
    // if (!customURL || !originalURL) return reset();
    if (didCreateURL) return;

    createShortenedURL({ original: originalURL, shortened: customURL })
      .then(() => {
        setDidCreateURL(() => true);
        console.log("createdURL");
      })
      .catch(console.error);
  }, []);

  const reset = () => {
    setCustomURL!(() => "");
    setOriginalURL!(() => "");
    setDidCreateURL(() => false);
    history.push("/");
  };

  const copyURL = () => {
    navigator.clipboard.writeText(
      `http://pocketlink.herokuapp.com/${customURL}`,
    );
  };

  return (
    <div>
      <div
        style={{
          display: `${didCreateURL ? "none" : "grid"}`,
          placeItems: "center",
        }}
      >
        <BounceLoader size={200} color="white" />
      </div>
      <div
        style={{
          display: `${didCreateURL ? "block" : "none"}`,
        }}
      >
        <p>
          <span className="has-text-weight-bold">
            {customURL
              ? `http://pocketlink.herokuapp.com/${customURL}`
              : "<missing>"}
          </span>
          <br />
          <Button
            handleClick={reset}
            position="center"
            className="mr-2 is-danger"
          >
            Home
          </Button>
          <Button
            handleClick={copyURL}
            position="center"
            className="is-warning"
          >
            Copy
          </Button>
          <hr />
          <span className="has-text-weight-bold">
            {originalURL || "<missing>"}
          </span>
        </p>
        <div className="container"></div>

        <motion.div
          style={{ display: "grid", placeItems: "center" }}
          initial={{ scale: "1" }}
          animate={{ scale: "1.1" }}
        >
          <QRCode value={customURL} size={400} />
        </motion.div>
      </div>
    </div>
  );
}
