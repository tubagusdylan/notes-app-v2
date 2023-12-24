import React from "react";
import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes, searchNoteArchive } from "../utils/local-data";

import "../styles/archived.css";

const ArchivedWrapper = () => {
  const [searchParam, setSearchParam] = useSearchParams("");

  const title = searchParam.get("title") || "";

  function changeSearchParam(keyword) {
    setSearchParam({ title: keyword });
  }
  return <Archived activeKeyword={title} onSearch={changeSearchParam} />;
};

class Archived extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.props.onSearch(keyword);
    this.setState(() => {
      return {
        notes: searchNoteArchive(keyword),
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Archived Notes</h1>
        <SearchNotes onSearch={this.onSearch} defaultKeyword={this.props.activeKeyword} />
        {this.state.notes.length > 0 ? <NotesContainer notes={this.state.notes} /> : <p className="msg">Tidak catatan yang di-archive</p>}
      </div>
    );
  }
}

Archived.propTypes = {
  onSearch: PropTypes.func.isRequired,
  activeKeyword: PropTypes.string.isRequired,
};

export default ArchivedWrapper;
