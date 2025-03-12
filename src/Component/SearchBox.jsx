import * as React from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
//

export default function SearchBox({ weatherApi, error }) {
  let [city, setCity] = useState("");
  let [isError, setIsError] = useState(false);

  function handleInputChange(evt) {
    if (evt.target.value.length <= 20) {
      setCity(evt.target.value);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }
  return (
    <div className="formCon">
      <form onSubmit={(e) => weatherApi(e, city)}>
        <div className="searchCon">
          <TextField
            className="searchInp"
            id="outlined-basic"
            label="City name"
            variant="outlined"
            value={city}
            onChange={handleInputChange}
            required
            error={isError || error}
            helperText={
              isError
                ? "Max word limit is 20"
                : error
                ? "Please enter a valid city name"
                : "Looks Good"
            }
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
