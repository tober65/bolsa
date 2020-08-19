import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./SearchBox.css";

function SearchBox(props) {
  return (
    <Autocomplete
      id="search-box"
      options={props.symbols}
      getOptionLabel={(option) => `${option.displaySymbol} - ${option.description}` }
      style={{ width: 300 }}
      onChange={props.onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          className="text-field"
        />
      )}
    />
  );
}

export default SearchBox;
