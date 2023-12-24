import React from "react";
import "../styles/input-search.css";

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass icon-search"></i>
        <input type="text" name="title" id="title" placeholder="Find Your Notes With Title" className="input-search" />
      </div>
    );
  }
}

export default SearchNotes;
