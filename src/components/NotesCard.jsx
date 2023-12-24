import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatedTimeStamp } from "../utils/local-data";
import "../styles/notes-card.css";

class NotesCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <Link to={`/notes/${this.props.id}`} className="link-title">
          <h2>{this.props.title}</h2>
        </Link>
        <span>{formatedTimeStamp(this.props.createdAt)}</span>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

NotesCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesCard;
