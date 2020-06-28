import React from "react";
import { motion } from "framer-motion";

export default function Button({
  handleClick,
  position = "right",
  type = "button",
  children,
  className,
}: props) {
  return (
    <motion.button
      className={`button is-primary  mt-2 ${
        position === "right" ? "is-pulled-right" : ""
      } ${className}`}
      type={type}
      initial={{ scale: 1, filter: "brightness(100%)" }}
      whileTap={{ scale: 1.05, filter: "brightness(120%)" }}
      onClick={handleClick}
    >
      {children}
    </motion.button>
  );
}

type props = {
  handleClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null) => void)
    | undefined;
  position?: "right" | "center";
  children?: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
};
