import React, { useContext, useState, useEffect } from "react";
import Input from "../components/Input";
import Context from "../context";
import meaningfulString from "../helpers/meaningfulString";
import { generate as generateID } from "shortid";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faDiceD20, faCat, faRandom } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";
import Switch from "react-switch";
import { db } from "../firebase";

export default function Customize() {
  const { originalURL, customURL, setCustomURL } = useContext(Context);
  const [usingMeaningful, setUsingMeaningful] = useState<boolean>(true);
  const history = useHistory();
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (!originalURL) history.push("/");
  }, []);

  useEffect(() => {
    randomName();
  }, [usingMeaningful]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCustomURL!(() => value);
  };

  const randomName = () => {
    const name = usingMeaningful ? meaningfulString() : generateID();
    setCustomURL!(() => name);
  };

  const handleToggleUsingMeaningful = () => {
    setUsingMeaningful(() => !usingMeaningful);
  };

  return (
    <form
      className="control px-6"
      action=""
      onSubmit={async (e) => {
        e.preventDefault();
        setHasError(() => false);
        try {
          const existingShortURLSnapshot = await db
            .where("shortened", "==", customURL)
            .get();

          const numExisting = existingShortURLSnapshot.docs.length;
          console.log(numExisting);

          if (numExisting > 0) {
            setHasError(() => true);
            return;
          }

          if (!hasError) history.push("completed");
        } catch (error) {
          alert(
            "Ran into an unexpected issue. Apologies for the inconvenience!",
          );
          console.error(error);
        }
      }}
    >
      <p>{originalURL}</p>
      <Input
        placeholder="set custom URL"
        onChange={handleChange}
        value={customURL}
        isWarning={hasError}
        warningMessage="Shortened URL already exists"
      />
      <Button type="submit">Create</Button>
      <button
        type="button"
        className="button is-warning is-pulled-right mt-2 mr-2"
        onClick={randomName}
        data-tip="generate random"
        data-delay-show={200}
        data-place="bottom"
      >
        <FA icon={faDiceD20} />
      </button>
      <div data-tip="toggle format" data-effect="float">
        <Switch
          checked={usingMeaningful}
          onChange={handleToggleUsingMeaningful}
          checkedIcon={
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
              }}
            >
              <FA icon={faCat} size="lg" />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100%",
              }}
            >
              <FA icon={faRandom} size="lg" />
            </div>
          }
          height={40}
          width={70}
          id="toggleMeaningfulSwitch"
          className="is-pulled-right mt-2 mr-2"
        />
      </div>
    </form>
  );
}
