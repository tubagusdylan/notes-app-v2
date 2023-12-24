import React from "react";
import SearchNotes from "../components/SearchNotes";
import NotesContainer from "../components/NotesContainer";
import { Link } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
// import { Link } from "react-router-dom";
import "../styles/home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Active Notes</h1>
        <SearchNotes />
        <NotesContainer notes={this.state.notes} />
        <Link to="/notes/new">
          <button className="button">
            <i className="fa-solid fa-plus"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
