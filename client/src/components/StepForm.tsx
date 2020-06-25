import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function StepForm({ nextRoute, placeholder, onChange }: props) {
  const history = useHistory();

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <form
        className="control px-6"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          history.push(nextRoute);
        }}
      >
        <motion.input
          className="input mr-6"
          type="text"
          name="link"
          placeholder={placeholder}
          onChange={onChange}
          initial={{ scale: 1 }}
          whileTap={{ scale: 1.01 }}
        />
        <br />
        <motion.button
          className="button is-primary is-pulled-right mt-2"
          type="submit"
          initial={{ scale: 1, filter: "brightness(100%)" }}
          whileTap={{ scale: 1.05, filter: "brightness(120%)" }}
        >
          Next
        </motion.button>
      </form>
    </div>
  );
}

type props = {
  nextRoute: string;
  placeholder?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
};
