import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Input({
  placeholder,
  onChange,
  value,
  isWarning = false,
  warningMessage,
}: props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.select();
  }, []);

  return (
    <motion.input
      value={value}
      className={`input is-large mr-6 ${isWarning ? "is-danger" : ""}`}
      type="text"
      name="link"
      placeholder={placeholder}
      onChange={onChange}
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      whileTap={{ scale: 1.01 }}
      data-tip={warningMessage}
      data-tip-disable={!isWarning}
      ref={inputRef}
    />
  );
}

type props = {
  placeholder?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
  value: string;
  isWarning?: boolean;
  warningMessage?: string;
};
