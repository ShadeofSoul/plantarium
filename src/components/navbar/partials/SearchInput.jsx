import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../StyledComponents";


const SearchInput = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchInput;
