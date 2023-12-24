import React from "react";
import { addNote } from "../utils/local-data";
import { Navigate } from "react-router-dom";
import "../styles/new-notes.css";

class AddNewNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      body: null,
      isSave: false,
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onAddNewNote = this.onAddNewNote.bind(this);
  }

  onChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onChangeBody(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onAddNewNote(event) {
    event.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    addNote({ title, body });
    this.setState(() => {
      return {
        isSave: true,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Catat segera jangan sampai lupa!</h1>
        {this.state.isSave && <Navigate to="/" />}
        <form onSubmit={this.onAddNewNote}>
          <input type="text" name="title" id="title" className="title-input" placeholder="Ini Judul Catatan" onChange={this.onChangeTitle} />
          <textarea name="body" id="body" className="body-input" placeholder="Ini Isi Catatan" rows={12} onChange={this.onChangeBody}></textarea>
          <button className="button-add">
            <i className="fa-solid fa-check"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddNewNotes;
