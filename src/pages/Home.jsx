import React from "react";
import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import PropTypes from "prop-types";
import { Link, useSearchParams } from "react-router-dom";
import { getActiveNotes, searchNoteActive } from "../utils/local-data";
import "../styles/home.css";

const HomeWrapper = () => {
  const [searchParam, setSearchParam] = useSearchParams("");

  const title = searchParam.get("title") || "";

  function changeSearchParam(keyword) {
    setSearchParam({ title: keyword });
  }
  return <Home activeKeyword={title} onSearch={changeSearchParam} />;
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.props.onSearch(keyword);
    this.setState(() => {
      return {
        notes: searchNoteActive(keyword),
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Active Notes</h1>
        <SearchNotes onSearch={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        {this.state.notes.length > 0 ? <NotesContainer notes={this.state.notes} /> : <p className="msg">Catatan kosong</p>}
        <Link to="/notes/new">
          <button className="button">
            <i className="fa-solid fa-plus"></i>
          </button>
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string.isRequired,
};

export default HomeWrapper;
