import React from "react";
import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import { getArchivedNotes } from "../utils/local-data";
import "../styles/archived.css";

class Archived extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Archived Notes</h1>
        <SearchNotes />
        {this.state.notes.length > 0 ? <NotesContainer notes={this.state.notes} /> : <p className="msg">Tidak catatan yang di-archive</p>}
      </div>
    );
  }
}

export default Archived;
