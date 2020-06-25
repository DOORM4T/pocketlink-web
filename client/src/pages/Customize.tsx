import React, { useContext } from "react";
import StepForm from "../components/StepForm";
import Context from "../context";

export default function Customize() {
  const { originalURL, customURL, setCustomURL } = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCustomURL!(() => value);
  };

  return (
    <div>
      <p>{originalURL}</p>
      <StepForm
        nextRoute="completed"
        placeholder="set custom URL"
        onChange={handleChange}
      />
    </div>
  );
}
