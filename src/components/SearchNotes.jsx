import React from "react";
import PropTypes from "prop-types";
import "../styles/input-search.css";

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(event) {
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass icon-search"></i>
        <input type="text" name="title" id="title" placeholder="Find Your Notes With Title" className="input-search" onChange={this.onSearch} value={this.props.defaultKeyword} />
      </div>
    );
  }
}

SearchNotes.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
};

export default SearchNotes;
