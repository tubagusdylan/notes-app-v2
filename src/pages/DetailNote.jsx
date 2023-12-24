import React from "react";
import PropTypes from "prop-types";
import { useParams, Navigate } from "react-router-dom";
import { getNote, formatedTimeStamp, archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";
import "../styles/detail-notes.css";

const DetailNoteWrapper = () => {
  const { id } = useParams();
  return <DetailNote id={id} />;
};

class DetailNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(this.props.id),
      isClicked: false,
    };

    this.onArchiveNote = this.onArchiveNote.bind(this);
    this.onUnarchiveNote = this.onUnarchiveNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  onArchiveNote() {
    archiveNote(this.state.notes.id);
    this.setState(() => {
      return {
        isClicked: true,
      };
    });
  }

  onUnarchiveNote() {
    unarchiveNote(this.state.notes.id);
    this.setState(() => {
      return {
        isClicked: true,
      };
    });
  }

  onDeleteNote() {
    deleteNote(this.state.notes.id);
    this.setState(() => {
      return {
        isClicked: true,
      };
    });
  }

  render() {
    return (
      <div className="container-2">
        {this.state.isClicked && <Navigate to="/" />}
        <h2 className="note-title">{this.state.notes.title}</h2>
        <span className="note-time">{formatedTimeStamp(this.state.notes.createdAt)}</span>
        <p className="note-body">{this.state.notes.body}</p>
        <div className="button-wrap">
          {!this.state.notes.archived ? (
            <button className="button-2" onClick={this.onArchiveNote}>
              <i className="fa-solid fa-bookmark"></i>
            </button>
          ) : (
            <button className="button-2" onClick={this.onUnarchiveNote}>
              <i className="fa-solid fa-repeat"></i>
            </button>
          )}

          <button className="button-2" onClick={this.onDeleteNote}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    );
  }
}

DetailNote.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DetailNoteWrapper;
