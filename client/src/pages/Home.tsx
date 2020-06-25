import React, { useContext } from "react";
import StepForm from "../components/StepForm";
import Context from "../context";

export default function Home() {
  const { originalURL, setOriginalURL } = useContext(Context);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOriginalURL!(() => value);
  };

  return (
    <div>
      <StepForm
        nextRoute="customize"
        placeholder="enter a url to shorten"
        onChange={handleChange}
      />
    </div>
  );
}
