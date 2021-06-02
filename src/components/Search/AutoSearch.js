import React, { useState, useEffect, useCallback } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import debounce from "lodash.debounce";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import MovieCards from "../MovieCards/MovieCards";
import { BASE_API } from "../../api";
import { useStyles } from "./autosearchStyles";

export default function AutoSearch() {
  const classes = useStyles();
  const [filledText, setFilledText] = useState(false);
  const [inputText, setInputText] = useState("");
  const [movies, setMovies] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [isCard, setIsCard] = useState(false);
  const debounceSaved = useCallback(
    debounce(() => fetchMovie(inputText), 200),
    [inputText]
  );

  useEffect(() => {
    if (inputText.length > 2) {
      debounceSaved();
    }
    return () => {};
  }, [inputText]);

  function fetchMovie(inputText) {
    fetch(`${BASE_API}?apikey=${process.env.REACT_APP_API_KEY}&t=${inputText}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.Response !== "False") {
          setMovies([res]);
        }
      });
  }

  const handleInput = (event) => {
    if (event.target.value.length > 2) {
      setFilledText(true);
    } else {
      setFilledText(false);
    }

    setInputText(event.target.value);
  };

  const handleAutocomplete = (event, value) => {
    setCardData(value);
    setFilledText(false);
  };

  const handleSearch = () => {
    setIsCard(true);
  };
  return (
    <>
      <div className={classes.root}>
        <Autocomplete
          multiple
          className={classes.autofilled}
          options={movies}
          getOptionLabel={(option) => option.Title && option.Title}
          filterSelectedOptions
          open={filledText}
          freeSolo
          onChange={(event, value) => handleAutocomplete(event, value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              placeholder="Search movie"
              onChange={handleInput}
            />
          )}
        />
        <div>
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      {cardData.length > 0 && isCard && <MovieCards movies={cardData} />}
    </>
  );
}
