import React, { useContext, useState } from "react";
import Input from "../components/Input";
import Context from "../context";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import isURL from "validator/lib/isURL";

export default function Home() {
  const { originalURL, setOriginalURL } = useContext(Context);
  const [hasError, setHasError] = useState<boolean>(false);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOriginalURL!(() => value);
  };

  return (
    <form
      className="control px-6"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (!isURL(originalURL)) {
          setHasError(() => true);
          return;
        }

        setHasError(() => false);
        history.push("/customize");
      }}
    >
      <Input
        placeholder="enter a url to shorten"
        onChange={handleChange}
        value={originalURL}
        isWarning={hasError}
      />
      <Button type="submit">Next</Button>
    </form>
  );
}
