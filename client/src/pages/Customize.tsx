import React, { useContext, useState } from "react";
import StepForm from "../components/StepForm";
import Context from "../context";
import isValidURL from "../helpers/isValidURL";
import meaningfulString from "../helpers/meaningfulString";
import { generate as generateID } from "shortid";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Customize() {
  const { originalURL, customURL, setCustomURL } = useContext(Context);
  const [usingMeaningful, setUsingMeaningful] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCustomURL!(() => value);
  };

  const randomName = () => {
    const name = usingMeaningful ? meaningfulString() : generateID();
    setCustomURL!(() => name);
  };

  return (
    <div>
      <p>{originalURL}</p>
      <StepForm
        nextRoute="completed"
        placeholder="set custom URL"
        onChange={handleChange}
      />
      <motion.button
        className="button is-warning mt-2 is-pulled-right mr-2"
        initial={{ filter: "brightness(100%)" }}
        whileTap={{ filter: "brightness(110%)" }}
        onClick={randomName}
      >
        <FA icon={faDiceD20} />
      </motion.button>
    </div>
  );
}
